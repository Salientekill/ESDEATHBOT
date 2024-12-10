const { Readable } = require('stream');

async function Identifig(buffer) {
    try {
        // Convertemos o buffer em um fluxo de leitura para análise
        const stream = new Readable();
        stream.push(buffer);
        stream.push(null);

        let isAnimated = false;

        // Vamos ler o buffer procurando pela tag 'ANIM'
        stream.on('data', (chunk) => {
            let chunkStr = chunk.toString('hex');
            if (chunkStr.includes('414e494d')) { // 'ANIM' em hexadecimal
                isAnimated = true;
            }
        });

        return new Promise((resolve, reject) => {
            stream.on('end', () => {
                if (isAnimated) {
                    resolve('video'); // Retorna que é animada
                } else {
                    resolve('imagem'); // Retorna que é estática
                }
            });

            stream.on('error', (err) => {
                console.error('Erro ao identificar o tipo da figurinha:', err);
                reject(err);
            });
        });

    } catch (error) {
        console.error('Erro ao identificar o tipo da figurinha:', error);
        throw error;
    }
}

const fs = require('fs');
const { tmpdir } = require("os");
const Crypto = require("crypto");
const ff = require('fluent-ffmpeg');
const webp = require("node-webpmux");
const path = require("path");

// Função para converter imagem para WebP
async function imageToWebp2(media) {
    const tmpFileOut = path.join(tmpdir(), `${Crypto.randomBytes(6).readUIntLE(0, 6).toString(36)}.webp`);
    const tmpFileIn = path.join(tmpdir(), `${Crypto.randomBytes(6).readUIntLE(0, 6).toString(36)}.jpg`);

    fs.writeFileSync(tmpFileIn, media);

    await new Promise((resolve, reject) => {
        ff(tmpFileIn)
            .on("error", reject)
            .on("end", () => resolve(true))
            .addOutputOptions([
                "-vcodec", "libwebp",
                "-vf", "scale='min(9999999,iw)':min'(9999999,ih)':force_original_aspect_ratio=decrease,fps=15, pad=0:0:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse"
            ])
            .toFormat("webp")
            .save(tmpFileOut);
    });

    const buff = fs.readFileSync(tmpFileOut);
    fs.unlinkSync(tmpFileOut);
    fs.unlinkSync(tmpFileIn);
    return buff;
}

// Função para adicionar EXIF em imagens
async function writeExifImg2(media, metadata) {

    let wMedia = await imageToWebp2(media);
    const tmpFileIn = path.join(tmpdir(), `${Crypto.randomBytes(6).readUIntLE(0, 6).toString(36)}.webp`);
    const tmpFileOut = path.join(tmpdir(), `${Crypto.randomBytes(6).readUIntLE(0, 6).toString(36)}.webp`);
    fs.writeFileSync(tmpFileIn, wMedia);

    if (metadata.packname || metadata.author) {
        const img = new webp.Image();
        const json = {
            "sticker-pack-id": `BOT GUGU MD`,
            "sticker-pack-name": metadata.packname,
            "sticker-pack-publisher": metadata.author,
            "emojis": metadata.categories ? metadata.categories : [""]
        };
        const exifAttr = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00, 0x00, 0x00, 0x00, 0x00, 0x16, 0x00, 0x00, 0x00]);
        const jsonBuff = Buffer.from(JSON.stringify(json), "utf-8");
        const exif = Buffer.concat([exifAttr, jsonBuff]);
        exif.writeUIntLE(jsonBuff.length, 14, 4);
        await img.load(tmpFileIn);
        fs.unlinkSync(tmpFileIn);
        img.exif = exif;
        await img.save(tmpFileOut);
        return tmpFileOut;
    }
}

// Função para converter vídeo para WebP
async function videoToWebp2(media) {
    const tmpFileIn = path.join(tmpdir(), `${Crypto.randomBytes(6).readUIntLE(0, 6).toString(36)}.webp`);
    const tmpFileOut = path.join(tmpdir(), `${Crypto.randomBytes(6).readUIntLE(0, 6).toString(36)}_converted.webp`);

    // Salva o buffer da figurinha animada como um arquivo temporário
    console.log('Salvando o buffer da figurinha animada em', tmpFileIn);
    fs.writeFileSync(tmpFileIn, media);

    try {
        console.log('Iniciando verificação da figurinha animada (WebP)...');
        // Verifica se o arquivo de entrada é legível
        const ffprobe = require('fluent-ffmpeg');
        ffprobe.ffprobe(tmpFileIn, (err, metadata) => {
            if (err) {
                console.error('Erro ao verificar a figurinha animada:', err);
                throw err;
            }
            console.log('Metadados da figurinha animada:', metadata);
        });

        console.log('Iniciando conversão para WebP otimizado...');
        // Converte a figurinha animada para um WebP otimizado
        await new Promise((resolve, reject) => {
            ff(tmpFileIn)
                .outputOptions('-vcodec libwebp')
                .outputOptions('-vf scale=220:220,fps=12,pad=0:0:-1:-1:color=white@0.0,split[a][b];[a]palettegen=reserve_transparent=on:transparency_color=ffffff[p];[b][p]paletteuse')
                .output(tmpFileOut)
                .on('start', (commandLine) => {
                    console.log('Comando FFmpeg:', commandLine);
                })
                .on('progress', (progress) => {
                    console.log('Progresso:', progress);
                })
                .on('error', (err) => {
                    console.error('Erro na conversão para WebP:', err);
                    reject(err);
                })
                .on('end', () => {
                    console.log('Conversão para WebP concluída.');
                    resolve(true);
                })
                .run();
        });

    } catch (error) {
        console.error('Erro ao converter figurinha animada para WebP:', error);
        throw error;
    } finally {
        // Remove arquivos temporários
        console.log('Removendo arquivos temporários...');
        if (fs.existsSync(tmpFileIn)) fs.unlinkSync(tmpFileIn);
        if (fs.existsSync(tmpFileOut)) fs.unlinkSync(tmpFileOut);
        console.log('Arquivos temporários removidos.');
    }

    console.log('Lendo o arquivo WebP de saída...');
    const buff = fs.readFileSync(tmpFileOut);
    return buff;
}

// Função para adicionar EXIF em vídeos
async function writeExifVid2(media, metadata) {
    let wMedia = await videoToWebp2(media);
    const tmpFileIn = path.join(tmpdir(), `${Crypto.randomBytes(6).readUIntLE(0, 6).toString(36)}.webp`);
    const tmpFileOut = path.join(tmpdir(), `${Crypto.randomBytes(6).readUIntLE(0, 6).toString(36)}.webp`);
    fs.writeFileSync(tmpFileIn, wMedia);

    if (metadata.packname || metadata.author) {
        const img = new webp.Image();
        const json = {
            "sticker-pack-id": `BOT GUGU MD`,
            "sticker-pack-name": metadata.packname,
            "sticker-pack-publisher": metadata.author,
            "emojis": metadata.categories ? metadata.categories : [""]
        };
        const exifAttr = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00, 0x00, 0x00, 0x00, 0x00, 0x16, 0x00, 0x00, 0x00]);
        const jsonBuff = Buffer.from(JSON.stringify(json), "utf-8");
        const exif = Buffer.concat([exifAttr, jsonBuff]);
        exif.writeUIntLE(jsonBuff.length, 14, 4);
        await img.load(tmpFileIn);
        fs.unlinkSync(tmpFileIn);
        img.exif = exif;
        await img.save(tmpFileOut);
        return tmpFileOut;
    }
}


// Função para adicionar EXIF em WebP
async function writeExifWebp(media, metadata) {
    const tmpFileIn = path.join(tmpdir(), `${Crypto.randomBytes(6).readUIntLE(0, 6).toString(36)}.webp`);
    const tmpFileOut = path.join(tmpdir(), `${Crypto.randomBytes(6).readUIntLE(0, 6).toString(36)}_converted.webp`);
    
    // Salva o buffer de WebP como um arquivo temporário
    fs.writeFileSync(tmpFileIn, media);

    if (metadata.packname || metadata.author) {
        const img = new webp.Image();
        const json = {
            "sticker-pack-id": `BOT GUGU MD`,
            "sticker-pack-name": metadata.packname,
            "sticker-pack-publisher": metadata.author,
            "emojis": metadata.categories ? metadata.categories : [""]
        };

        // Criar o cabeçalho EXIF personalizado
        const exifAttr = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00, 0x00, 0x00, 0x00, 0x00, 0x16, 0x00, 0x00, 0x00]);
        const jsonBuff = Buffer.from(JSON.stringify(json), "utf-8");
        const exif = Buffer.concat([exifAttr, jsonBuff]);
        exif.writeUIntLE(jsonBuff.length, 14, 4);

        // Carregar o arquivo WebP e aplicar o EXIF
        await img.load(tmpFileIn);
        fs.unlinkSync(tmpFileIn); // Remove o arquivo temporário
        img.exif = exif;
        await img.save(tmpFileOut);
        console.log('Metadados EXIF adicionados com sucesso.');

        return fs.readFileSync(tmpFileOut); // Retorna o buffer do WebP com EXIF alterado
    }
}


// Função geral para adicionar EXIF
async function writeExif2(media, metadata) {
    let wMedia = /webp/.test(media.mimetype) ? media.data :
                 /image/.test(media.mimetype) ? await imageToWebp2(media.data) :
                 /video/.test(media.mimetype) ? await videoToWebp2(media.data) : "";
    const tmpFileIn = path.join(tmpdir(), `${Crypto.randomBytes(6).readUIntLE(0, 6).toString(36)}.webp`);
    const tmpFileOut = path.join(tmpdir(), `${Crypto.randomBytes(6).readUIntLE(0, 6).toString(36)}.webp`);
    fs.writeFileSync(tmpFileIn, wMedia);

    if (metadata.packname || metadata.author) {
        const img = new webp.Image();
        const json = {
            "sticker-pack-id": `BOT GUGU MD`,
            "sticker-pack-name": metadata.packname,
            "sticker-pack-publisher": metadata.author,
            "emojis": metadata.categories ? metadata.categories : [""]
        };
        const exifAttr = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00, 0x00, 0x00, 0x00, 0x00, 0x16, 0x00, 0x00, 0x00]);
        const jsonBuff = Buffer.from(JSON.stringify(json), "utf-8");
        const exif = Buffer.concat([exifAttr, jsonBuff]);
        exif.writeUIntLE(jsonBuff.length, 14, 4);
        await img.load(tmpFileIn);
        fs.unlinkSync(tmpFileIn);
        img.exif = exif;
        await img.save(tmpFileOut);
        return tmpFileOut;
    }
}

module.exports = { Identifig, imageToWebp2, videoToWebp2, writeExifImg2, writeExifVid2, writeExif2, writeExifWebp };