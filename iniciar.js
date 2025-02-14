const { default: makeWASocket, makeCacheableSignalKeyStore, delay } = require('@whiskeysockets/baileys')
const { useDbAuthState } = require('./outros/infos/manager');

var FormData = require("form-data")
const readline = require('readline')
const MAIN_LOGGER = require('@whiskeysockets/baileys/lib/Utils/logger').default;
const { TEXTOS_GERAL } = require("./dados/textos.js");
let sessionStartTime;

const logger = MAIN_LOGGER.child({});
logger.level = 'silent';
const pino = require('pino')

const { fs, fetch, Boom, axios, util, P, linkfy, request, cheerio, ms, exec, moment, time, hora, date, getBuffer, fetchJson, getBase64, upload, banner2, banner3, colors, getGroupAdmins, nescessario, setting, countMessage, getRandom, NodeCache, opengp, lermais, BANCOP, sqlite3, puxarGrupo, atualizarOuAdicionarDB, buscarRegistroDB } = require('./consts-func.js');

let numerodono_ofc = setting.numerodono.replace(new RegExp("[()+-/ +/]", "gi"), "");

const usePairingCode = process.argv.includes('-code')

const chalk = require('chalk');
const cfonts = require('cfonts');

var qrcode = "./dados/ESDEATH-QRDB"

if(!usePairingCode && !fs.existsSync(qrcode)) console.log(colors.yellow("Se você não tiver outro aparelho para ler o qrcode, você pode usar, ( bash start.sh -code ), sem os parenteses, e você conectará com código de emparelhamento, o novo modelo."));

var LINKS_T = require("./dados/links.json");

const sleep = (ms) => {return new Promise(resolve => setTimeout(resolve, ms))}

function DLT_FL(file) {
try {
fs.unlinkSync(file);
} catch (error) {
}
}

function coletarNumeros(inputString) {
return inputString.replace(/\D/g, '')}

const originalConsoleInfo = console.info;

console.info = function () {
const message = util.format(...arguments);
const forbiddenStrings = [
"Closing session: SessionEntry",
"Removing old closed session: SessionEntry {",
"Another forbidden string",
"Closing stale open session for new outgoing prekey bundle" ]
if (forbiddenStrings.some(str => message.includes(str))) {
return }
originalConsoleInfo.apply(console, arguments)}

const path = require('path')

const os = require('os')

const { NomeDoBot } = require("./dados/settings.json")

const CryptoJS = require('crypto-js')
try {
var encryptedKey = require('./dados/ChaveDeAcesso.js')
} catch (e) {
return console.log(`${colors.brightRed("CHAVE DE ACESSO NÃO ENCONTRADA, CONTATE MEU CRIADOR: +55 21 99540-0244\n\nOU ENTRE NO GRUPO OFICIAL: https://chat.whatsapp.com/GTXYQ9ipObnKfHU1jMPLII\n")}`)}

const Spinnies = require('spinnies')
const spinner = { interval: 200, frames: ['❄️', '☃️', '❄️', '☃️', '❄️'] }
const spinnies = new Spinnies({ color: 'blue', succeedColor: 'green', spinner })

const moon = { 
interval: 200,
frames: ['🌕', '🌔', '🌓', '🌒', '🌑', '🌘', '🌗', '🌖', '🌕']}
  
const spinners = new Spinnies({
spinner: moon,
color: 'blue',
succeedColor: 'green',
failColor: 'red',
spinnerColor: 'blueBright' })

process.env.TZ = 'America/Sao_Paulo'

const msgRetryCounterCache = new NodeCache({});

async function INC() {
  
let { state, saveCreds } = await useDbAuthState(qrcode)

const CONFIG = {
secretKey: CryptoJS.enc.Utf8.parse('1234567890123456'),
iv: CryptoJS.enc.Utf8.parse('1234567890123456'),
jsonPath: './dados/org/json/acesso.json',
vbot: "V10",
errorMessage: 'CHAVE DE ACESSO NÃO ENCONTRADA, CONTATE MEU CRIADOR: +55 21 99540-0244\nOU ENTRE NO GRUPO OFICIAL: https://chat.whatsapp.com/GTXYQ9ipObnKfHU1jMPLII' }

const coresCFonts = [
['red', 'yellow'], 
['green', 'cyan'], 
['magenta', 'blue'], 
['yellow', 'red'], 
['blue', 'cyan'] ]

function getRandomItem(array) {
return array[Math.floor(Math.random() * array.length)]}

async function gerarBanners() {
try {
const coresBanner3 = getRandomItem(coresCFonts)
const coresBanner2 = getRandomItem(coresCFonts)
const banner3 = cfonts.render((`ESDEATH|BOT ${CONFIG.vbot}`), {
font: 'block',
align: 'center',
colors: coresBanner3,
background: 'transparent',
letterSpacing: 1,
lineHeight: 1 });
const banner2 = cfonts.render(('Grupo OFC: https://chat.whatsapp.com/GTXYQ9ipObnKfHU1jMPLII\n'), {
font: 'console',
align: 'center',
colors: coresBanner2,
background: 'transparent',
lineHeight: 1 });
console.log('\n' + chalk.cyan('═'.repeat(80)));
console.log(chalk.yellow('\n✨  BOT INICIADO ✨\n'))
console.log(banner3.string)
console.log(banner2.string)
console.log(chalk.cyan('═'.repeat(80)) + '\n')
const statusMessages = [
'🚀  Bot online e pronto para uso!',
'✨  Sistema inicializado com sucesso!',
'🌟  Tudo pronto para começar!',
'💫  Bot ativado e funcionando!',
'🔥  Bot iniciado e pronto para ação!',
'⚡  Sistema energizado e operacional!',
'🎯  Bot configurado e pronto para comandos!',
'❄️  Inicialização concluída com sucesso!',
'💪  Bot funcionando com força total!',
'✅  Sistema verificado e pronto para uso!' ]
console.log(chalk.cyan('▸'.repeat(50)));
console.log(chalk.yellow(getRandomItem(statusMessages)));
console.log(chalk.cyan('▸'.repeat(50)) + '\n');
} catch (error) {
console.error(chalk.red('Erro ao gerar banner'))
console.error(error)}}

const cryptoUtils = {
encrypt: (data) => CryptoJS.AES.encrypt(JSON.stringify(data), CONFIG.secretKey, { iv: CONFIG.iv }).toString(),
decrypt: (ciphertext) => JSON.parse(CryptoJS.AES.decrypt(ciphertext, CONFIG.secretKey, { iv: CONFIG.iv }).toString(CryptoJS.enc.Utf8)),
decryptKey: (encryptedKey) => CryptoJS.AES.decrypt(encryptedKey, CONFIG.secretKey, { iv: CONFIG.iv }).toString(CryptoJS.enc.Utf8)}

const fileUtils = {
isJsonValid: () => {
if (fs.existsSync(CONFIG.jsonPath)) {
try {
const data = cryptoUtils.decrypt(fs.readFileSync(CONFIG.jsonPath, 'utf8'));
return Date.now() < data.expirationTime;
} catch (e) {
console.error('Erro ao ler ou decifrar o JSON:', e.message)}}
return false },
getJsonData: () => {
try {
return cryptoUtils.decrypt(fs.readFileSync(CONFIG.jsonPath, 'utf8'));
} catch (e) {
console.error('Erro ao ler ou decifrar o JSON:', e.message);
return null }},
createJsonData: (chave, version) => {
const data = {
chave,
version,
expirationTime: Date.now() + 2 * 60 * 60 * 1000 }
fs.writeFileSync(CONFIG.jsonPath, cryptoUtils.encrypt(data), 'utf8')}}

const apiService = {
async fetchApiUrl() {
try {
const response = await axios.get("https://raw.githubusercontent.com/Salientekill/figurinhas/main/UrlApi.json");
return response.data;
} catch (error) {
console.log('\n⚠️ AVISO ⚠️\nNão foi possível conectar ao servidor da API');
process.exit(1)}},

async accessApi(mykey, vbot) {
if (fileUtils.isJsonValid()) return;
try {
const urldire = await this.fetchApiUrl();
if (!urldire) {
console.log('\n⚠️ AVISO ⚠️\nServidor da API não encontrado');
process.exit(1)}
const url = `http://${urldire}/api/chave?chave=${mykey}&version=${vbot}`;
const response = await axios.get(url);
return response.data.message;
} catch (error) {
console.log('\n⚠️ AVISO ⚠️\nNão foi possível verificar a chave de acesso');
process.exit(1)}},

async verifyAccess(mykey, vbot) {
const resultado = await this.accessApi(mykey, vbot);
switch (resultado) {
case "Acesso Permitido":
  fileUtils.createJsonData(mykey, vbot);
  return true;
case "Limite de acesso dessa chave atingido":
console.log('\n⚠️ AVISO ⚠️\nLimite de acesso dessa chave atingido\nAdquira uma nova chave para continuar usando o bot');
  process.exit(1);
case "Chave não encontrada":
console.log('\n⚠️ AVISO ⚠️\nChave não encontrada\nVerifique se a chave foi digitada corretamente');
  process.exit(1);
case "Versao nao permitida para esta chave":
case "Versão não permitida para esta chave":
console.log('\n⚠️ AVISO ⚠️\nVersao nao permitida para esta chave')
  process.exit(1);
default:
console.log(`\n⚠️ AVISO ⚠️\n${resultado}\nVerifique sua chave e versao do bot`)
process.exit(1)}
}}

let mykey = null;
let ChaveC = false;

async function main() {
let encryptedKey;
try {
encryptedKey = require('./dados/ChaveDeAcesso.js');
} catch (e) {
console.error(CONFIG.errorMessage);
return }
mykey = cryptoUtils.decryptKey(encryptedKey);
ChaveC = fileUtils.isJsonValid() || await apiService.verifyAccess(mykey, CONFIG.vbot);

if (!ChaveC) {
console.error(CONFIG.errorMessage);
return }

module.exports = { ChaveC, mykey, vbot: CONFIG.vbot }}

main()

module.exports = { ChaveC, mykey, vbot: CONFIG.vbot }

const conn = makeWASocket({
version: [2, 3000, 1019018670],
logger,
browser: ["Mac OS", "Safari", "120.0"],
printQRInTerminal: !usePairingCode,
defaultQueryTimeoutMs: undefined,
auth: {
creds: state.creds,
keys: makeCacheableSignalKeyStore(state.keys, logger), },
msgRetryCounterCache,
markOnlineOnConnect: true,
generateHighQualityLinkPreview: true,
mobile: false,
syncFullHistory: false,
downloadHistory: false
})


let reiniciarBaixaRam; 
let execInterval

async function delay2(ms) {
return new Promise(resolve => setTimeout(resolve, ms))}

async function safeReadFile(filePath, attempts = 3, delayMs = 200) {
for (let attempt = 1; attempt <= attempts; attempt++) {
try {
let data = fs.readFileSync(filePath, 'utf8');
return JSON.parse(data);
} catch (error) {
if (attempt === attempts) {
try {
let backupData = fs.readFileSync(`${filePath}.bak`, 'utf8');
fs.writeFileSync(filePath, backupData);
return JSON.parse(backupData);
} catch (backupError) {
console.error(`Erro ao ler o backup do arquivo ${filePath}: ${backupError.message}`);
throw backupError }
} else {
console.warn(`Erro ao ler arquivo ${filePath}. Tentativa ${attempt} de ${attempts}. Tentando novamente...`);
await delay2(delayMs * attempt)}}}}

function safeWriteFile(filePath, data) {
let jsonData = JSON.stringify(data, null, 2);
let directory = path.dirname(filePath);
fs.mkdirSync(directory, { recursive: true });
let currentData = []
try {
currentData = safeReadFile(filePath);
} catch {
console.warn(`Não foi possível ler o arquivo existente. Um novo será criado.`)}
if (JSON.stringify(currentData, null, 2) !== jsonData) {
let backupFilePa = `${filePath}.bak`;
fs.writeFileSync(backupFilePa, JSON.stringify(currentData, null, 2));
fs.writeFileSync(filePath, jsonData)}}

const CONFIG_PATH_OPENGP = './dados/org/json/opengp.json';

class GrupoManager {
    constructor(conn) {
        this.conn = conn;
        this.configCache = null;
        this.lastConfigLoad = 0;
    }

    async executarOPENGP(HAtual) {
        try {
            const opengp = await this.loadGroupConfig();
            if (!opengp.length) return;

            const gruposParaProcessar = this.filtrarGruposRelevantes(opengp, HAtual);
            if (!gruposParaProcessar.length) return;

            const resultados = await this.processarGrupos(gruposParaProcessar, HAtual);
            if (resultados.algumas_alteracoes) {
                await this.atualizarConfiguracao(opengp, resultados);
            }
        } catch (error) {
            console.error("Erro na execução principal:", error);
            await this.notificarErro("Erro na execução principal do GrupoManager", error);
        }
    }

    async loadGroupConfig() {
        try {
            if (!fs.existsSync(CONFIG_PATH_OPENGP)) {
                return [];
            }

            const fileData = await fs.promises.readFile(CONFIG_PATH_OPENGP, 'utf8');
            return JSON.parse(fileData);
        } catch (error) {
            console.error("Erro ao carregar configuração:", error);
            await this.notificarErro("Erro ao carregar configuração dos grupos", error);
            return [];
        }
    }

    filtrarGruposRelevantes(opengp, HAtual) {
        return opengp.filter(group => 
            group.F.includes(HAtual) || group.A.includes(HAtual)
        );
    }

    async processarGrupos(grupos, HAtual) {
        const alteracoes = {
            algumas_alteracoes: false,
            remover: new Set(),
            atualizar: new Set()
        };

        await Promise.all(grupos.map(async (group) => {
            try {
                const resultado = await this.processarGrupoIndividual(group, HAtual);
                if (resultado.remover) {
                    alteracoes.algumas_alteracoes = true;
                    alteracoes.remover.add(group.id);
                    await this.notificarRemocao(group.id, resultado.motivo || "Erro desconhecido");
                } else if (resultado.atualizado) {
                    alteracoes.algumas_alteracoes = true;
                    alteracoes.atualizar.add(group);
                }
            } catch (error) {
                console.error(`Erro ao processar grupo ${group.id}:`, error);
                if (this.shouldRemoveGroup(error)) {
                    alteracoes.algumas_alteracoes = true;
                    alteracoes.remover.add(group.id);
                    await this.notificarRemocao(group.id, error.message || "Erro desconhecido");
                }
                await this.notificarErro(`Erro ao processar grupo ${group.id}`, error);
            }
        }));

        return alteracoes;
    }

    async processarGrupoIndividual(group, HAtual) {
        const { id, A, F } = group;
        const resultado = { atualizado: false, remover: false, motivo: null };

        try {
            const grupoDados = await this.conn.groupMetadata(id);
            
            if (!grupoDados) {
                resultado.remover = true;
                resultado.motivo = "Grupo não encontrado ou bot removido";
                return resultado;
            }

            const shouldClose = F.includes(HAtual);
            const shouldOpen = A.includes(HAtual);
            const currentState = grupoDados.announce;

            // Verifica o estado atual do grupo
            if (shouldClose) {
                if (currentState) {
                    // Grupo já está fechado
                    await this.conn.sendMessage(id, { 
                        text: '⚠️ *AVISO* ⚠️\n\nO grupo já está fechado no horário fechamento programado.' 
                    });
                } else {
                    // Precisa fechar o grupo
                    await this.atualizarEstadoGrupo(id, true);
                    resultado.atualizado = true;
                }
            } else if (shouldOpen) {
                if (!currentState) {
                    // Grupo já está aberto
                    await this.conn.sendMessage(id, { 
                        text: '⚠️ *AVISO* ⚠️\n\nO grupo já está aberto no horário de abertura programado.' 
                    });
                } else {
                    // Precisa abrir o grupo
                    await this.atualizarEstadoGrupo(id, false);
                    resultado.atualizado = true;
                }
            }

        } catch (error) {
            console.error(`Erro ao processar grupo ${id}:`, error);
            if (this.shouldRemoveGroup(error)) {
                resultado.remover = true;
                resultado.motivo = error.message || "Erro de permissão ou acesso negado";
            }
            throw error;
        }

        return resultado;
    }

    async atualizarEstadoGrupo(id, fechar) {
        const estado = fechar ? 'announcement' : 'not_announcement';
        const mensagem = fechar 
            ? '🔒 *GRUPO FECHADO* 🔒\n\nO grupo foi fechado automaticamente conforme horário programado.'
            : '🔓 *GRUPO ABERTO* 🔓\n\nO grupo foi aberto automaticamente conforme horário programado.';

        await this.conn.groupSettingUpdate(id, estado);
        await this.conn.sendMessage(id, { text: mensagem });
    }

    async atualizarConfiguracao(opengp, alteracoes) {
        if (!alteracoes.algumas_alteracoes) return;

        try {
            const configAtualizada = opengp
                .filter(group => !alteracoes.remover.has(group.id))
                .map(group => alteracoes.atualizar.has(group) ? { ...group } : group);

            await fs.promises.writeFile(
                CONFIG_PATH_OPENGP, 
                JSON.stringify(configAtualizada, null, 2)
            );
            
            this.configCache = configAtualizada;
            this.lastConfigLoad = Date.now();
        } catch (error) {
            console.error('Erro ao atualizar configuração:', error);
            await this.notificarErro("Erro ao atualizar configuração dos grupos", error);
            throw error;
        }
    }

    shouldRemoveGroup(error) {
        const errorMsg = error.message?.toLowerCase() || '';
        return errorMsg.includes('forbidden') || 
               errorMsg.includes('not-authorized') || 
               errorMsg.includes('403');
    }

    async notificarErro(mensagem, error) {
        if (typeof nescessario !== 'undefined' && nescessario.alertEBot) {
            try {
                await this.conn.sendMessage(
                    `${numerodono_ofc}@s.whatsapp.net`,
                    {
                        text: `⚠️ ${mensagem}\n\nDetalhes do erro:\n\n${error.stack || error}`
                    }
                );
            } catch (notifyError) {
                console.error('Erro ao enviar notificação:', notifyError);
            }
        }
    }

    async notificarRemocao(groupId, motivo) {
        if (typeof nescessario !== 'undefined' && nescessario.alertEBot) {
            try {
                await this.conn.sendMessage(
                    `${numerodono_ofc}@s.whatsapp.net`,
                    {
                        text: `⚠️ *Grupo Removido da Programação*\n\n` +
                              `ID: ${groupId}\n` +
                              `Motivo: ${motivo}`
                    }
                );
            } catch (notifyError) {
                console.error('Erro ao enviar notificação de remoção:', notifyError);
            }
        }
    }
}

const grupoManager = new GrupoManager(conn);

async function hpagante() {
try {
let existingMessages = await safeReadFile('./dados/org/json/msgenv.json') || [];
let hrp = await safeReadFile("./dados/org/json/hrp.json")
let nextMoment = moment().tz('America/Sao_Paulo').add(2, 'minutes');
let nextMinute = nextMoment.format('HH:mm');
let nextHourHH = nextMoment.format('HH')
let horaF1h = new Set(["00:00", "01:00", "02:00", "03:00", "04:00", "05:00", "06:00", "07:00", "08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00", "23:00"]);
let horaF2h = new Set(["00:00", "02:00", "04:00", "06:00", "08:00", "10:00", "12:00", "14:00", "16:00", "18:00", "20:00", "22:00"])
let secoes = { 
"FORTUNE TIGER": "🐯", 
"DRAGON LUCK": "🐉", 
"FORTUNE RABBIT": "🐰", 
"FORTUNE SNAKE": "🐍",
"FORTUNE MOUSE": "🐭", 
"GANESHA GOLD": "🐘", 
"BIKINI": "👙", 
"MUAY THAI": "🥊", 
"CIRCUS": "🎪", 
"FORTUNE OX": "🐂", 
"DOUBLE FORTUNE": "💰", 
"DRAGON TIGER LUCK": "🐉🐅", 
"GENIE'S WISHES(GENIO)": "🧞", 
"JUNGLE DELIGHT": "🌳🌲", 
"PIGGY GOLD": "🐷", 
"MIDAS FORTUNE": "👑", 
"SUN & MOON": "🌞🌛", 
"WILD BANDITO": "🦹‍♂️", 
"PHOENIX RISES": "🔥🕊️", 
"SUPERMARKET SPREE": "🛒", 
"CAPTAIN BOUNTY": "🚢👨‍✈️", 
"MISTER HOLLOWEEN": "🎃", 
"LEPRECHAUN RICHES": "🍀💰", 
"BIG BASS SPLASH": "🐟", 
"LEOPARD OF GOLD": "🐆", 
"AVIATOR": "✈️", 
"FORTUNE TOUCAN": "🦤", 
"MR TURTLE": "🐢", 
"AGE OF VIKINGS": "🐉", 
"MUSTANG GOLD MEGAWAYS": "🐎", 
"O VIRA LATA CARAMELO": "🦮", 
"FORTUNE GEMS 2": "💎", 
"CASH MANIA": "🤑", 
"GATES OF OLYMPUS": "⚡"  }
let messagesMap = new Map()
for (let iddo of hrp) {
if (iddo.id && iddo.situacao === 'ativo') {
let isHoraF1h = horaF1h.has(nextMinute);
let isHoraF2h = horaF2h.has(nextMinute);
if ((iddo.horahh === 1 && isHoraF1h) || (iddo.horahh === 2 && isHoraF2h)) {
let horariosString = createHorariosString(iddo.horahh, secoes, nextHourHH);
let message = {
id: iddo.id,
msg: {
image: { url: iddo.ppUrlsl },
caption: `*🍀💰 HORARIOS PAGANTES ${NomeDoBot} 🍀💰*\n\n\n${horariosString}` },
time: nextMinute,
isHpagante: true }
let key = `${iddo.id}_${nextMinute}`;
messagesMap.set(key, message)}}}
if (messagesMap.size === 0) return
let combinedMessages = [...existingMessages, ...messagesMap.values()]
let filteredMessagesMap = new Map();
for (let message of combinedMessages) {
let key = `${message.id}_${message.time}`;
if (!filteredMessagesMap.has(key)) {
filteredMessagesMap.set(key, message)}}
let finalMessages = Array.from(filteredMessagesMap.values());
await safeWriteFile('./dados/org/json/msgenv.json', finalMessages)
} catch (error) {
console.error("Erro ao executar função hpagante: " + error.message)}}

function createHorariosString(horahh, secoes, nextHourHH) {
let horariosString = `*🍀💰 HORARIOS DAS ${nextHourHH} 🍀💰*\n\n`;
for (let [nome, emoji] of Object.entries(secoes)) {
horariosString += `${emoji} *${nome.toUpperCase()}*\n`;
for (let j = 0; j < 5; j++) {
let minuto1 = Math.floor(Math.random() * 60);
let minuto2 = Math.min(minuto1 + Math.floor(Math.random() * 5), 59);
let horario1 = `${nextHourHH}:${minuto1.toString().padStart(2, '0')}`;
let horario2 = `${nextHourHH}:${minuto2.toString().padStart(2, '0')}`;
horariosString += `*${emoji} ${horario1} ✅ ${horario2} ✅*\n` }
horariosString += '\n'}
horariosString += `*Dica: alterne entre os giros entre normal e turbo...*\n`
horariosString += `*lembrando a todos!*\n\n*Horarios de probabilidades aumentam muito sua chance de lucrar, mas lembrando que não anula a chance de perca, por mais que seja baixa jogue com responsabilidadade...*`
return horariosString }

async function execMsgAuto() {
try {
let [newMessages, existingMessages] = await Promise.all([
safeReadFile("./dados/org/json/msg_auto.json"),
safeReadFile("./dados/org/json/msgenv.json"),])
let horaAtual = moment().format("HH:mm");
let horaAtualMais2 = moment(horaAtual, "HH:mm").add(2, "minutes").format("HH:mm");
let todasMensagens = []
function gerarHorariosRP(intervalo) {
let horarios = [];
let inicioDia = moment().startOf("day");
for (let h = 0; h < 24; h += intervalo) {
let horaComIntervalo = inicioDia.clone().add(h, "hours");
horarios.push(horaComIntervalo.format("HH:mm"))}
return horarios }
await Promise.all(
(newMessages || []).map(async (groupData) => {
try {
let groupId = groupData.id;
if (!groupId) {
console.error("ID do grupo não encontrado para: ", groupData);
return }
let groupMsgs = groupData.messages || [];
for (let msg of groupMsgs) {
try {
if (!msg.hora.startsWith("RP") && !msg.hora.match(/^\d{2}:\d{2}$/)) continue
let messageType = msg.url ? msg.url.endsWith(".mp4") ? "video" : "image" : "text";
let messageData;
if (messageType === "video" || messageType === "image") {
messageData = {
[messageType]: { url: msg.url },
caption: msg.msg, }
} else {
messageData = { text: msg.msg }}
if (msg.hidetag) {
let metadata = await puxarGrupo(conn, groupId);
if (metadata && metadata.participants) {
messageData.mentions = metadata.participants.map(
(participant) => participant.id )}}
if (msg.dateExpire) {
let dateExpire = moment(msg.dateExpire, "DD/MM/YYYY");
if (!dateExpire.isValid() || moment().isAfter(dateExpire)) {
console.log(`Mensagem expirada, removida: ${msg.msg}`);
groupData.messages = groupData.messages.filter(m => m !== msg);
continue }}
if (msg.hora.startsWith("RP")) {
let rpInterval = parseInt(msg.hora.replace("RP", ""));
if (rpInterval >= 1 && rpInterval <= 6) {
let horariosRP = gerarHorariosRP(rpInterval);
if (horariosRP.includes(horaAtualMais2)) {
todasMensagens.push({
id: groupId,
msg: messageData,
time: horaAtualMais2,
IsMsgAuto: true,
type: messageType, })}}
} else {
let ScTime = moment(msg.hora, "HH:mm").subtract(2, "minutes");
if (horaAtual === ScTime.format("HH:mm")) {
todasMensagens.push({
id: groupId,
msg: messageData,
time: msg.hora,
IsMsgAuto: true,
type: messageType, })}}
} catch (msgError) {
console.error(
`Erro ao processar mensagem: ${msg.msg}. Detalhes: ${msgError.message}`)}}
} catch (groupError) {
console.error(`Erro ao processar grupo ${groupData.id}: ${groupError.message}`)}}))
let mensagensFiltradas = filterDuplicateMessages(todasMensagens, existingMessages);
if (mensagensFiltradas.length > 0 || existingMessages.length > 0) {
await safeWriteFile("./dados/org/json/msgenv.json", mensagensFiltradas.length > 0 ? mensagensFiltradas : existingMessages)}
} catch (error) {
console.error("Erro ao executar função execMsgAuto: ", error)}}

function filterDuplicateMessages(newMessages, existingMessages) {
let uniqueMessages = new Map()
for (let existingMessage of existingMessages) {
let key = `${existingMessage.id}-${existingMessage.msg?.text || existingMessage.msg?.caption}-${existingMessage.msg?.image?.url || existingMessage.msg?.video?.url || ""}-${existingMessage.time}-${existingMessage.type}`;
uniqueMessages.set(key, existingMessage)}
for (let newMessage of newMessages) {
let key = `${newMessage.id}-${newMessage.msg?.text || newMessage.msg?.caption}-${newMessage.msg?.image?.url || newMessage.msg?.video?.url || ""}-${newMessage.time}-${newMessage.type}`;
uniqueMessages.set(key, newMessage)}
return Array.from(uniqueMessages.values())}

async function sendScheduledMessages(currentMinute) {
try {
let messages = await safeReadFile('./dados/org/json/msgenv.json');
if (messages.length === 0) return
function isSameMessage(msg1, msg2) {
if (!msg1.msg || !msg2.msg) return false
const type1 = msg1.msg.text ? 'text' : msg1.msg.image ? 'image' : msg1.msg.video ? 'video' : null
const type2 = msg2.msg.text ? 'text' : msg2.msg.image ? 'image' : msg2.msg.video ? 'video' : null
if (type1 !== type2) return false
switch (type1) {
case 'text':
return msg1.msg.text === msg2.msg.text;
case 'image':
return msg1.msg.image.url === msg2.msg.image.url && 
   msg1.msg.caption === msg2.msg.caption;
case 'video':
return msg1.msg.video.url === msg2.msg.video.url && 
   msg1.msg.caption === msg2.msg.caption;
default:
return false }}
function isWithinValidRange(messageTime) {
let current = moment(currentMinute, 'HH:mm');
let message = moment(messageTime, 'HH:mm');
if (message.isBefore(current.clone().subtract(5, 'minutes'))) {
message.add(1, 'day')}
return message.isBetween(
current.clone().subtract(5, 'minutes'),
current.clone().add(5, 'minutes'),
'minute', '[]' )}
messages.forEach(message => {
if (!isWithinValidRange(message.time)) {
message.sent = true }})
let messagesByGroup = {};
for (let message of messages) {
if (!messagesByGroup[message.id]) {
messagesByGroup[message.id] = [] }
messagesByGroup[message.id].push(message)}
for (let [groupId, groupMessages] of Object.entries(messagesByGroup)) {
let messagesToSend = []
for (let message of groupMessages) {
if (message.time === currentMinute && !message.sent) {
let options = {}
if (message.msg.text) {
options.text = message.msg.text;
} else if (message.msg.image?.url) {
options.image = { url: message.msg.image.url };
options.caption = message.msg.caption;
} else if (message.msg.video?.url) {
options.video = { url: message.msg.video.url };
options.caption = message.msg.caption;
} else {
continue }
if (message.msg.mentions) {
options.mentions = message.msg.mentions }
const isDuplicate = messagesToSend.some(({ message: existingMsg }) => 
isSameMessage(existingMsg, message))
if (!isDuplicate) {
messagesToSend.push({ options, message })}}}
if (messagesToSend.length > 0) {
await processGroupMessages(groupId, messagesToSend)}}
let finalMessages = messages.filter(msg => !msg.sent);
messagesByGroup = null;
messages = null;
currentMinute = null;
await safeWriteFile('./dados/org/json/msgenv.json', finalMessages)
} catch (err) {
console.error("Erro ao processar mensagens:", err.message, err.stack)}}

async function processGroupMessages(groupId, messages, maxRetries = 3, delayBetweenMessages = 1000) {
for (const { options, message } of messages) {
let attempt = 0;
while (attempt < maxRetries) {
try {
await conn.sendMessage(groupId, options);
message.sent = true;
await delay(delayBetweenMessages);
break;
} catch (err) {
attempt++;
console.log(`Tentativa ${attempt}/${maxRetries} falhou para grupo ${groupId}. Erro: ${err.message}`)
if (attempt === maxRetries) {
if (err.message.includes('forbidden') || err.message.includes('item-not-found')) {
console.log(`Removendo mensagens programadas para o grupo ${groupId}`);
await removeScheduledMessages(groupId)}
break }
await delay(1000 * attempt)}}}}

function prepareMessageOptions(message) {
const options = {}
if (message.msg.text) {
options.text = message.msg.text;
} else if (message.msg.image?.url) {
options.image = { url: message.msg.image.url };
options.caption = message.msg.caption;
} else if (message.msg.video?.url) {
options.video = { url: message.msg.video.url };
options.caption = message.msg.caption;
} else {
return null }
if (message.msg.mentions) {
options.mentions = message.msg.mentions }
return options }

function isWithinValidRange(messageTime) {
let current = moment().tz('America/Sao_Paulo')
let message = moment(messageTime, 'HH:mm')
if (message.isBefore(current.clone().subtract(5, 'minutes'))) {
message.add(1, 'day')}
return message.isBetween(
current.clone().subtract(5, 'minutes'),
current.clone().add(5, 'minutes'),
'minute',
'[]' )}

async function removeScheduledMessages(groupId) {
try {
let msgAuto = await safeReadFile('./dados/org/json/msg_auto.json')
msgAuto = msgAuto.filter(item => item.id !== groupId)
await safeWriteFile('./dados/org/json/msg_auto.json', msgAuto)
let hrp = await safeReadFile('./dados/org/json/hrp.json');
hrp = hrp.filter(item => item.id !== groupId);
await safeWriteFile('./dados/org/json/hrp.json', hrp)
console.log(`Mensagens programadas removidas para o grupo ${groupId}.`);
} catch (err) {
console.error(`Erro ao remover mensagens programadas para o grupo ${groupId}:`, err.message)}}

async function loadConfigRam() {
try {
let configRam = await safeReadFile("./dados/nescessario.json");
reiniciarBaixaRam = configRam.ReiniciarBaixaRam
} catch (error) {
console.error("Erro ao ler o arquivo de configuração:", error.message)}}

function limparMemoria() {
if (global.gc) {
global.gc()}
exec('sudo sysctl -w vm.drop_caches=3', (error, stdout, stderr) => {
if (error) {
console.error(`Erro ao limpar cache do sistema: ${error.message}`);
return }
if (stderr) {
console.error(`Erro: ${stderr}`);
return }
console.log(`Cache do sistema limpo: ${stdout}`)});
if (global.gc) {
global.gc()}}

async function checkRamReiniciar() {
let memoriaLivreMB = os.freemem() / (1024 * 1024)
let memoriaTotalMB = os.totalmem() / (1024 * 1024)
let usoMemoria = ((memoriaTotalMB - memoriaLivreMB) / memoriaTotalMB) * 100
if (memoriaLivreMB < 150 || usoMemoria > 85) {
console.warn(`Memória crítica: ${memoriaLivreMB.toFixed(2)}MB livre, ${usoMemoria.toFixed(2)}% em uso`)
await limparMemoria()
let memoriaLivreAposLimpeza = os.freemem() / (1024 * 1024);
if (memoriaLivreAposLimpeza < 100) {
console.error(`Memória ainda crítica após limpeza: ${memoriaLivreAposLimpeza.toFixed(2)}MB. Reiniciando...`);
await exitGracefully(0)}}}

async function verificarReinicio() {
let HAtual = moment().tz('America/Sao_Paulo').format('HH:mm');
if (HAtual === '02:41') {
let hoje = moment().tz('America/Sao_Paulo').format('YYYY-MM-DD');
let lastRestartPath = './dados/org/json/lastRestart.json';
let LRJson = {}
try {
LRJson = JSON.parse(fs.readFileSync(lastRestartPath, 'utf-8'));
} catch (error) {
console.warn('Arquivo de última reinicialização não encontrado, criando um novo...');
LRJson = { LRDate: '' }}
if (LRJson.LRDate === hoje) return
LRJson.LRDate = hoje;
try {
fs.writeFileSync(lastRestartPath, JSON.stringify(LRJson, null, 2));
console.log("Data de reinício atualizada no arquivo.");
} catch (error) {
console.error("Erro ao salvar a data de reinício:", error.message);
return }
console.log("Reiniciando o sistema...");
await exitGracefully(0)}}

async function exitGracefully(exitCode) {
try {
console.log("Encerrando de forma segura...");
//await saveCreds()
} catch (error) {
console.error("Erro ao encerrar de forma segura:", error.message);
} finally {
process.exit(exitCode)}}

async function finalizarSorteioSort() {
let sorteioPath = path.resolve('./dados/org/json/sortreact.json');
let sorteioData;
try {
sorteioData = JSON.parse(fs.readFileSync(sorteioPath, 'utf8'));
} catch (error) {
console.error('Erro ao ler sorteio para finalizar:', error);
return }
let timestampAtual = Math.floor(Date.now() / 1000)
let grupos = Object.keys(sorteioData.grupos)
let finishSorteio = async (grupoId) => {
let sorteio = sorteioData.grupos[grupoId]
if (sorteio.duracao === null || sorteio.duracao > timestampAtual) {
return }
sorteio.finalizando = true;
let participantes = sorteio.participantes || []
let quantidadeGanhadores = sorteio.quantidadeGanhadores || 1;
let vencedores = []
if (participantes.length) {
for (let i = 0; i < quantidadeGanhadores && participantes.length; i++) {
let indiceVencedor = Math.floor(Math.random() * participantes.length);
vencedores.push(participantes[indiceVencedor]);
participantes.splice(indiceVencedor, 1)}}
let mensagemFinal = vencedores.length ? `🎉 *SORTEIO FINALIZADO* 🎉\n\n*Ganhador(es):*\n${vencedores.map((vencedor, index) => `${index + 1}. @${vencedor.split("@")[0]}\n`).join('')}\n*Prêmio(s):* ${sorteio.premio}` : 'O sorteio terminou, mas ninguém participou.'
if (vencedores.length > 0) {
await conn.sendMessage(grupoId, { 
text: mensagemFinal.trim(), 
mentions: vencedores.map(v => `${v}`) })
} else {
await conn.sendMessage(grupoId, { text: mensagemFinal.trim() })}
delete sorteioData.grupos[grupoId]}
await Promise.all(grupos.map(grupoId => finishSorteio(grupoId)))
try {
fs.writeFileSync(sorteioPath, JSON.stringify(sorteioData, null, 2), 'utf8');
} catch (error) {
console.error('Erro ao salvar sorteio atualizado:', error)}
sorteioData = null;
grupos = null }

const { QVcnd, Vcnd, Saida, ADnQVcnd, ADnVcnd, ADnSd } = require('./dados/textos.js')

async function verificarAlugueisVencidos() {
let rg_aluguel = JSON.parse(fs.readFileSync("./dados/org/json/rg_aluguel.json"));
let aluguelGB = JSON.parse(fs.readFileSync("./dados/nescessario.json")).rg_aluguelGB;
let agora = new Date()
function SubTxt(mensagem, grupo) {
return mensagem.replaceAll("#nomegp#", grupo.nome_ || "").replaceAll("#idgp#", grupo.id_gp || "").replaceAll("#numerodono#", numerodono_ofc).replaceAll("#lermais#", lermais)}
async function enviarMensagem(destino, mensagem, mentions = []) {
try {
if (!destino || mensagem.trim().length === 0) return false;
await conn.sendMessage(destino, { text: mensagem, mentions });
return true;
} catch (error) {
console.error(`Erro ao enviar mensagem para ${destino}: ${error.message}`);
if (error.message.includes('forbidden') || error.message.includes('item-not-found')) {
throw new Error('grupo-nao-encontrado')}
throw error }}
async function salvarAlteracao(abc) {
let dadosAtuais = JSON.parse(fs.readFileSync("./dados/org/json/rg_aluguel.json"))
const index = dadosAtuais.findIndex(item => item.id_gp === abc.id_gp);
if (index !== -1) {
dadosAtuais[index] = {...dadosAtuais[index], ...abc};
fs.writeFileSync("./dados/org/json/rg_aluguel.json", JSON.stringify(dadosAtuais, null, 2))
return true }
return false }
async function gerenciarAviso(abc, novoStatus) {
const dadosAtuais = JSON.parse(fs.readFileSync("./dados/org/json/rg_aluguel.json"));
const registroAtual = dadosAtuais.find(item => item.id_gp === abc.id_gp)
if (!registroAtual || registroAtual.status_aviso >= novoStatus) {
return false }
let mensagem = "";
let mensagemDono = "";
let mentions = [];
switch(novoStatus) {
case 1:
mensagem = SubTxt(QVcnd, abc);
mensagemDono = SubTxt(ADnQVcnd, abc);
break;
case 2:
mensagem = SubTxt(Vcnd, abc);
mensagemDono = SubTxt(ADnVcnd, abc);
break;
case 3:
mensagem = SubTxt(Saida, abc);
mensagemDono = SubTxt(ADnSd, abc);
break }
try {
if (abc.id_gp.endsWith('@g.us')) {
const grpmdt = await puxarGrupo(conn, abc.id_gp) || { participants: [] };
mentions = getGroupAdmins(grpmdt.participants);
await enviarMensagem(abc.id_gp, mensagem, mentions)}
if (mensagemDono.trim()) {
await enviarMensagem(`${numerodono_ofc}@s.whatsapp.net`, mensagemDono)}
if (abc.contratante?.length > 0) {
for (const contratanteId of abc.contratante) {
await enviarMensagem(contratanteId, mensagem);
await delay2(1000)}}
abc.status_aviso = novoStatus;
await salvarAlteracao(abc);
return true;
} catch (error) {
if (error.message === 'grupo-nao-encontrado') {
console.log(`Removendo ${abc.id_gp} do sistema de aluguel: grupo não encontrado`);
abc.removido = true;
await salvarAlteracao(abc)}
return false }}
rg_aluguel = rg_aluguel.filter(abc => abc.id_gp && abc.vencimento)
for (const abc of rg_aluguel) {
let vencimentoDate = new Date(abc.vencimento * 1000)
let diffMilliseconds = vencimentoDate - agora;
let diffHours = diffMilliseconds / (1000 * 60 * 60)
if (abc.status_aviso === undefined) abc.status_aviso = 0
let aluguelAtivo = aluguelGB;
if(!aluguelGB && abc.id_gp.endsWith('@g.us')) {
try {
let grupoConfig = JSON.parse(fs.readFileSync(`./dados/grupos/${abc.id_gp}.json`));
aluguelAtivo = grupoConfig[0]?.rg_aluguel;
} catch (error) {
console.error(`Erro ao ler configuração do grupo ${abc.id_gp}: ${error.message}`);
continue }}
if (aluguelAtivo) {
try {
if (diffHours <= -48 && abc.status_aviso < 3) {
const sucesso = await gerenciarAviso(abc, 3);
if (sucesso) {
abc.removido = true;
await salvarAlteracao(abc);
await delay2(5000);
await conn.groupLeave(abc.id_gp)}
} else if (diffHours <= 0 && abc.status_aviso === 1) {
await gerenciarAviso(abc, 2);
} else if (diffHours <= 24 && diffHours > 0 && abc.status_aviso === 0) {
await gerenciarAviso(abc, 1)}
} catch (error) {
console.error(`Erro ao processar grupo ${abc.id_gp}: ${error.message}`)}}}
const novosAlugueis = rg_aluguel.filter(item => !item.removido && item.status_aviso < 3);
if (JSON.stringify(novosAlugueis) !== JSON.stringify(rg_aluguel)) {
fs.writeFileSync("./dados/org/json/rg_aluguel.json", JSON.stringify(novosAlugueis, null, 2))
console.log('Alterações salvas no sistema de aluguel')}}

async function setupRankColumns() {
  try {
const tableInfo = await new Promise((resolve, reject) => {
  BANCOP.all("PRAGMA table_info(RgGold)", [], (err, rows) => {
if (err) reject(err);
resolve(rows);
  });
});

const existingColumns = tableInfo.map(col => col.name);
const neededColumns = {
  'LastReset': 'TEXT',
  'EnviadoRank': 'INTEGER',
  'UsuReset': 'INTEGER',
  'pontos': 'INTEGER DEFAULT 0',
  'emojiData': 'TEXT'
};

for (const [columnName, type] of Object.entries(neededColumns)) {
  if (!existingColumns.includes(columnName)) {
await new Promise((resolve, reject) => {
  BANCOP.run(`ALTER TABLE RgGold ADD COLUMN ${columnName} ${type}`, [], (err) => {
if (err) reject(err);
resolve();
  });
});
console.log(`Coluna ${columnName} criada com sucesso`);
  }
}
  } catch (error) {
console.error('Erro ao configurar colunas:', error);
  }
}

async function RankEmojiGold() {
  try {
// Verifica e cria colunas necessárias
await setupRankColumns();

let agora = moment().tz('America/Sao_Paulo');
let horaAtual = agora.format('HH:mm');
let hoje = agora.format('YYYY-MM-DD');

if (horaAtual >= '21:00') {
  // Busca todos os grupos no banco
  const grupos = await new Promise((resolve, reject) => {
BANCOP.all('SELECT * FROM RgGold', [], (err, rows) => {
  if (err) reject(err);
  resolve(rows || []);
});
  });

  for (const grupo of grupos) {
try {
  if (!grupo.Grupo.endsWith('@g.us')) continue
  const grupoConfig = JSON.parse(fs.readFileSync(`./dados/grupos/${grupo.Grupo}.json`));
  
  if (!grupoConfig[0].sistemGold || !grupoConfig[0].emojigold) continue

  let currentTimeInSeconds = Math.floor(Date.now() / 1000);
  let proximoReset = grupo.UsuReset || 0;
  
  if (currentTimeInSeconds >= proximoReset && grupo.LastReset !== hoje) {
if (!grupo.EnviadoRank || grupo.LastReset !== hoje) {
const usuarios = JSON.parse(grupo.usuarios || '[]');

// Calcula pontuação dos usuários
let usuariosComPontos = usuarios.filter(user => user.pontos > 0)
.sort((a, b) => b.pontos - a.pontos);

if (usuariosComPontos.length > 0) {
// Cria mensagem do ranking
let rankingMensagem = "🏆 *Ranking dos Usuários* 🏆\n\n";
usuariosComPontos.forEach((usuario, index) => {
rankingMensagem += `${index + 1}. @${usuario.id.split("@")[0]} - Pontos: ${usuario.pontos}\n`;
});
rankingMensagem += "\n\nPrimeiro ganhará 50 de gold\nSegundo 30 de gold\nTerceiro 15 de gold";

// Envia mensagem
await conn.sendMessage(grupo.Grupo, {
text: rankingMensagem,
mentions: usuariosComPontos.map(usuario => usuario.id)
});

// Distribui prêmios
if (usuariosComPontos.length >= 1) {
const user1 = usuarios.findIndex(u => u.id === usuariosComPontos[0].id);
if (user1 !== -1) usuarios[user1].gold += 50;
}
if (usuariosComPontos.length >= 2) {
const user2 = usuarios.findIndex(u => u.id === usuariosComPontos[1].id);
if (user2 !== -1) usuarios[user2].gold += 30;
}
if (usuariosComPontos.length >= 3) {
const user3 = usuarios.findIndex(u => u.id === usuariosComPontos[2].id);
if (user3 !== -1) usuarios[user3].gold += 15;
}

// Reseta pontuações
usuarios.forEach(user => {
user.pontos = 0;
});

// Configura próximo reset
let proximoDia = new Date();
proximoDia.setDate(proximoDia.getDate() + 1);
proximoDia.setHours(21, 0, 0, 0);

// Atualiza o banco de dados
await new Promise((resolve, reject) => {
BANCOP.run(
  'UPDATE RgGold SET usuarios = ?, LastReset = ?, EnviadoRank = ?, UsuReset = ? WHERE Grupo = ?',
  [
JSON.stringify(usuarios),
hoje,
1,
Math.floor(proximoDia.getTime() / 1000),
grupo.Grupo
  ],
  (err) => {
if (err) reject(err);
resolve();
  }
);
});
}
}
  }
} catch (error) {
  console.error(`Erro ao processar grupo ${grupo.Grupo}:`, error);
  // Desativa emoji gold no grupo em caso de erro
  const grupoConfig = JSON.parse(fs.readFileSync(`./dados/grupos/${grupo.Grupo}.json`));
  grupoConfig[0].emojigold = false;
  fs.writeFileSync(`./dados/grupos/${grupo.Grupo}.json`, JSON.stringify(grupoConfig, null, 2));
}
  }
}
  } catch (error) {
console.error('Erro no RankEmojiGold:', error);
  }
}

let bancoAtualizado = false;

async function atualizarBancoGroups() {
if (bancoAtualizado) return;
const gerenciarGrupos = async () => {
try {
const groups = Object.values(await conn.groupFetchAllParticipating());

const processarTabela = async () => {
if (!groups.length) throw new Error("O JSON_GP está vazio.")

const inferirColunas = (dadosGrupo) => {
const colunas = new Set([...Object.keys(dadosGrupo), 'participants']);
return Array.from(colunas).map(chave =>  `${chave} ${typeof dadosGrupo[chave] === 'number' ? 'INTEGER' : 'TEXT'}`)}

const verificarEstruturaTabela = async () => {
try {
const colunasPadrao = inferirColunas(groups[0])
const colunasAtuais = await new Promise((resolve, reject) => 
BANCOP.all(`PRAGMA table_info(DadosGP);`, (err, colunas) => 
err ? reject(err) : resolve(colunas)))

const colunasNecessarias = colunasPadrao.map(col => col.split(' ')[0]);
const colunasAtuaisNomes = colunasAtuais.map(col => col.name);

const estruturaDiferente = 
colunasNecessarias.length !== colunasAtuaisNomes.length ||
colunasNecessarias.some((col, index) => col !== colunasAtuaisNomes[index])
return estruturaDiferente;
} catch (error) {
return true }}

const reconstruirTabela = async () => {
await new Promise((resolve, reject) => 
BANCOP.run(`DROP TABLE IF EXISTS DadosGP;`, (err) => 
err ? reject(err) : resolve()))

const sqlCriarTabela = `CREATE TABLE DadosGP (${inferirColunas(groups[0]).join(', ')}, PRIMARY KEY(id))`;
await new Promise((resolve, reject) => 
BANCOP.run(sqlCriarTabela, (err) => err ? reject(err) : resolve()))}

const tabelaMalFormada = await verificarEstruturaTabela();
if (tabelaMalFormada) {
console.log('Tabela mal formada. Reconstruindo...');
await reconstruirTabela()}}

const inserirDados = async () => {
for (let grupo of groups) {
grupo.participants = JSON.stringify(grupo.participants);
await atualizarOuAdicionarDB('DadosGP', grupo, 'id', grupo.id)}}

await processarTabela()
await inserirDados()
bancoAtualizado = true;
console.log('DB ✓')
} catch (error) {
console.error('Erro ao atualizar banco de grupos:', error);}}
await gerenciarGrupos()}

const ConfigsLevel = require('./dados/configleveling.js');

function toRoman(num) {
return ConfigsLevel.romanNumerals[num - 1] || '' }

async function getPatente(level, groupId) {
try {
const groupConfig = await new Promise((resolve, reject) => {
BANCOP.get('SELECT theme FROM leveling WHERE groupId = ?', [groupId], (err, row) => {
if (err) reject(err);
else resolve(row)})})
const currentTheme = groupConfig?.theme || 'militar';
const theme = ConfigsLevel.themes[currentTheme]
const patenteIndex = Math.floor((level - 1) / 10)
const subLevel = ((level - 1) % 10) + 1;
if (patenteIndex >= theme.ranks.length) {
return `${theme.ranks[theme.ranks.length - 1]} [ ${toRoman(10)} ]`}
return `${theme.ranks[patenteIndex]} [ ${toRoman(subLevel)} ]`;
} catch (error) {
console.error("Erro ao buscar patente:", error)
const theme = ConfigsLevel.themes.militar;
const patenteIndex = Math.floor((level - 1) / 10)
const subLevel = ((level - 1) % 10) + 1;
return `${theme.ranks[patenteIndex]} [ ${toRoman(subLevel)} ]` }}

function calculateRequiredXP(level) {
return Math.floor(ConfigsLevel.xp.initialRequired * 
Math.pow(ConfigsLevel.xp.levelMultiplier, level - 1))}

async function addXPToUser(userId, groupId, xpAmount) {
try {
const userData = await new Promise((resolve, reject) => {
BANCOP.get('SELECT * FROM leveling WHERE groupId = ? AND userId = ?', [groupId, userId], (err, row) => {
if (err) reject(err);
else resolve(row)})})
if (!userData) return false;
userData.xp += xpAmount
userData.totalXp += xpAmount
let levelUp = false;
while (userData.xp >= calculateRequiredXP(userData.level)) {
userData.xp -= calculateRequiredXP(userData.level);
userData.level++;
levelUp = true }
await new Promise((resolve, reject) => {
BANCOP.run(
'UPDATE leveling SET xp = ?, level = ?, totalXp = ? WHERE groupId = ? AND userId = ?', [userData.xp, userData.level, userData.totalXp, groupId, userId], (err) => {
if (err) reject(err);
else resolve()})})
return levelUp ? {
newLevel: userData.level,
patente: getPatente(userData.level),
xp: userData.xp,
requiredXP: calculateRequiredXP(userData.level)
} : null;
} catch (error) {
console.error("Erro ao adicionar XP:", error);
return null }}

async function RankLeveling() {
try {
await new Promise((resolve, reject) => {
BANCOP.run(`CREATE TABLE IF NOT EXISTS leveling (
groupId TEXT,
userId TEXT,
xp INTEGER DEFAULT 0,
level INTEGER DEFAULT 1,
totalXp INTEGER DEFAULT 0,
dailyMessages INTEGER DEFAULT 0,
weeklyMessages INTEGER DEFAULT 0,
streak INTEGER DEFAULT 0,
lastMessageDate TEXT,
lastDailyCheck TEXT,
theme TEXT DEFAULT '${ConfigsLevel.currentTheme}',
lastRankingCheck TEXT DEFAULT NULL,
lastDailyRanking TEXT DEFAULT NULL,
lastWeeklyRanking TEXT DEFAULT NULL,
PRIMARY KEY (groupId, userId)
)`, (err) => {
if (err) reject(err);
else resolve();
});
});
const columnsToAdd = [
"streak INTEGER DEFAULT 0",
"lastMessageDate TEXT",
"lastDailyCheck TEXT",
"theme TEXT DEFAULT '" + ConfigsLevel.currentTheme + "'",
"lastRankingCheck TEXT DEFAULT NULL",
"lastDailyRanking TEXT DEFAULT NULL",
"lastWeeklyRanking TEXT DEFAULT NULL" ]
for (const columnDef of columnsToAdd) {
try {
const columnName = columnDef.split(' ')[0];
await new Promise((resolve) => {
BANCOP.run(`ALTER TABLE leveling ADD COLUMN ${columnDef}`, (err) => {
resolve()})})
} catch (error) {
continue }}
const horarioAtual = moment().tz('America/Sao_Paulo');
const horaAtual = horarioAtual.format('HH:mm');
const diaAtual = horarioAtual.day();
const dataAtual = horarioAtual.format('YYYY-MM-DD')
const horarioEnvio = `${ConfigsLevel.ranking.dailyTime.hour.toString().padStart(2, '0')}:${ConfigsLevel.ranking.dailyTime.minute.toString().padStart(2, '0')}`
const [horaAtualHr, horaAtualMin] = horaAtual.split(':').map(Number)
const [horaEnvioHr, horaEnvioMin] = horarioEnvio.split(':').map(Number)
const minutosAtuais = horaAtualHr * 60 + horaAtualMin
const minutosEnvio = horaEnvioHr * 60 + horaEnvioMin
const diferencaMinutos = minutosAtuais - minutosEnvio
if (diferencaMinutos < 0 || diferencaMinutos > ConfigsLevel.ranking.tolerance) {
return }
const isWeeklyRankingDay = diaAtual === ConfigsLevel.ranking.weeklyTime.day
const groups = await new Promise((resolve, reject) => {
BANCOP.all(`SELECT DISTINCT 
groupId,
lastRankingCheck,
MIN(lastDailyRanking) as lastDailyRanking,
MIN(lastWeeklyRanking) as lastWeeklyRanking
FROM leveling
WHERE lastRankingCheck IS NULL 
OR date(lastRankingCheck) < date(?)
GROUP BY groupId`, [dataAtual], (err, rows) => {
if (err) reject(err)
else resolve(rows)})})
if (!groups?.length) {
return }
for (const group of groups) {
try {
let grupoConfig;
try {
grupoConfig = JSON.parse(fs.readFileSync(`./dados/grupos/${group.groupId}.json`));
} catch (error) {
continue }
if (!grupoConfig[0]?.level) {
await new Promise((resolve, reject) => {
BANCOP.run('UPDATE leveling SET lastRankingCheck = ? WHERE groupId = ?',  [horarioAtual.toISOString(), group.groupId], (err) => {
if (err) reject(err);
else resolve()})})
continue }
const lastDailySent = group.lastDailyRanking ? moment(group.lastDailyRanking) : null
const lastWeeklySent = group.lastWeeklyRanking ? moment(group.lastWeeklyRanking) : null
const shouldSendDaily = !isWeeklyRankingDay && 
(!lastDailySent || !lastDailySent.isSame(horarioAtual, 'day'))
const shouldSendWeekly = isWeeklyRankingDay && 
(!lastWeeklySent || !lastWeeklySent.isSame(horarioAtual, 'day'))
if (shouldSendDaily) {
await enviarRankingDiario(group.groupId);
await new Promise((resolve, reject) => {
BANCOP.run('UPDATE leveling SET lastDailyRanking = ? WHERE groupId = ?', [horarioAtual.toISOString(), group.groupId], (err) => {
if (err) reject(err);
else resolve()})})}
if (shouldSendWeekly) {
await enviarRankingSemanal(group.groupId);
await new Promise((resolve, reject) => {
BANCOP.run('UPDATE leveling SET lastWeeklyRanking = ? WHERE groupId = ?', [horarioAtual.toISOString(), group.groupId], (err) => {
if (err) reject(err);
else resolve()})})}
await new Promise((resolve, reject) => {
BANCOP.run('UPDATE leveling SET lastRankingCheck = ? WHERE groupId = ?', [horarioAtual.toISOString(), group.groupId], (err) => {
if (err) reject(err)
else resolve()})})
} catch (error) {
console.error(`[RANKING] Erro no grupo ${group.groupId}:`, error)}}
} catch (error) {
console.error("[RANKING] Erro geral:", error)}}

async function removerGrupoLeveling(groupId) {
try {
await new Promise((resolve, reject) => {
BANCOP.run('DELETE FROM leveling WHERE groupId = ?', [groupId], (err) => {
if (err) reject(err)
else resolve()})})
console.log(`[RANKING] Grupo ${groupId} removido do sistema`);
} catch (error) {
console.error(`[RANKING] Erro ao remover grupo ${groupId}:`, error)}}

async function enviarMensagemGrupo(groupId, texto, mentions) {
try {
await new Promise(resolve => setTimeout(resolve, 1000))
await conn.sendMessage(groupId, { text: texto, mentions: mentions })
return true;
} catch (error) {
console.error(`[RANKING] Erro ao enviar mensagem para ${groupId}:`, error.message);
return false }}

async function enviarRankingDiario(groupId) {
try {
const validUsers = await new Promise((resolve, reject) => {
BANCOP.all(`SELECT COUNT(*) as count FROM leveling 
WHERE groupId = ? AND dailyMessages >= ?`, [groupId, ConfigsLevel.ranking.activeMessageCount], (err, rows) => {
if (err) reject(err);
else resolve(rows)})})
if (!validUsers?.[0]?.count || validUsers[0].count === 0) {
//console.log(`[RANKING] Nenhum usuário ativo para ranking diário em ${groupId}`);
return }
const users = await new Promise((resolve, reject) => {
BANCOP.all(`SELECT userId, dailyMessages, level, xp 
FROM leveling 
WHERE groupId = ? 
AND dailyMessages >= ?
ORDER BY dailyMessages DESC, xp DESC 
LIMIT 5`, [groupId, ConfigsLevel.ranking.activeMessageCount], (err, rows) => {
if (err) reject(err);
else resolve(rows)})})
if (!users?.length) {
//console.log(`[RANKING] Nenhum usuário qualificado para ranking em ${groupId}`);
return }
let rankingText = `┌──────────────────⊷
│ 𖣘⃟ RANKING DIÁRIO 𖣘⃟
│ ⋆ Top ${users.length} do Dia ⋆
├──────────────────⊷
│   ${NomeDoBot}
├──────────────────⊷\n`
for (let i = 0; i < users.length; i++) {
const user = users[i];
const reward = ConfigsLevel.ranking.rewards.daily[i];
rankingText += `│ ${i + 1}º @${user.userId.split('@')[0]}
│ 📊 Mensagens: ${user.dailyMessages}
│ 📈 Level: ${user.level}
│ 🎁 Recompensa: ${reward} XP\n\n` }
rankingText += `├───────────────────⊷
│ 𖣘⃟ Ranking atualizado!
└───────────────────⊷`
const enviado = await enviarMensagemGrupo(groupId, rankingText, users.map(u => u.userId))
if (enviado) {
for (const [index, user] of users.entries()) {
const reward = ConfigsLevel.ranking.rewards.daily[index]
await addXPToUser(user.userId, groupId, reward)}
await new Promise((resolve, reject) => {
BANCOP.run('UPDATE leveling SET dailyMessages = 0 WHERE groupId = ?', [groupId], (err) => {
if (err) reject(err);
else resolve()})})}
} catch (error) {
console.error(`[RANKING] Erro ao enviar ranking diário para ${groupId}:`, error);
throw error }}

async function enviarRankingSemanal(groupId) {
try {
const validUsers = await new Promise((resolve, reject) => {
BANCOP.all(`SELECT COUNT(*) as count FROM leveling 
WHERE groupId = ? AND weeklyMessages > 0`,  [groupId], (err, rows) => {
if (err) reject(err);
else resolve(rows)})})
if (!validUsers?.[0]?.count || validUsers[0].count === 0) {
//console.log(`[RANKING] Nenhum usuário ativo para ranking semanal em ${groupId}`);
return }
const users = await new Promise((resolve, reject) => {
BANCOP.all(`SELECT userId, weeklyMessages, level, xp 
FROM leveling 
WHERE groupId = ? 
AND weeklyMessages > 0
ORDER BY weeklyMessages DESC, xp DESC 
LIMIT 5`, [groupId], (err, rows) => {
if (err) reject(err);
else resolve(rows)})})
if (!users?.length) {
//console.log(`[RANKING] Nenhum usuário qualificado para ranking em ${groupId}`);
return }
let rankingText = `┌──────────────────⊷
│ 𖣘⃟ RANKING SEMANAL 𖣘⃟
│ ⋆ Top ${users.length} da Semana ⋆
├──────────────────⊷
│ ${NomeDoBot}
├──────────────────⊷\n`;
for (let i = 0; i < users.length; i++) {
const user = users[i];
const reward = ConfigsLevel.ranking.rewards.weekly[i];
rankingText += `│ ${i + 1}º @${user.userId.split('@')[0]}
│ 📊 Mensagens: ${user.weeklyMessages}
│ 📈 Level: ${user.level}
│ 🎁 Recompensa: ${reward} XP\n\n` }
rankingText += `├───────────────────⊷
│ 𖣘⃟ Ranking atualizado!
└───────────────────⊷`
const enviado = await enviarMensagemGrupo(groupId, rankingText, users.map(u => u.userId))
if (enviado) {
for (const [index, user] of users.entries()) {
const reward = ConfigsLevel.ranking.rewards.weekly[index]
await addXPToUser(user.userId, groupId, reward)}
await new Promise((resolve, reject) => {
BANCOP.run('UPDATE leveling SET weeklyMessages = 0 WHERE groupId = ?',  [groupId], (err) => {
if (err) reject(err);
else resolve()})})}
} catch (error) {
console.error(`[RANKING] Erro ao enviar ranking semanal para ${groupId}:`, error);
throw error }}

async function verificarTempoChave() {
try {
let necessario = JSON.parse(fs.readFileSync("./dados/nescessario.json"))
if (!necessario.hasOwnProperty('dataKey')) {
necessario.dataKey = "00/00/0000" }
const dataAtual = new Date();
const hoje = `${String(dataAtual.getDate()).padStart(2, '0')}/${String(dataAtual.getMonth() + 1).padStart(2, '0')}/${dataAtual.getFullYear()}`
if (necessario.dataKey === hoje) return
const response = await axios.get(`http://3.133.100.200/api/info?chave=${mykey}`)
if (!response.data.status) {
throw new Error('Erro ao consultar chave: ' + response.data.message)}
const dados = response.data.dados
const partes = dados.vencimento.split('/');
const dataVencimento = new Date(partes[2], partes[1] - 1, partes[0]);
const agora = new Date();
const diferenca = dataVencimento - agora;
const horasRestantes = diferenca / (1000 * 60 * 60)
if (horasRestantes <= 48) {
const dias = Math.floor(horasRestantes / 24);
const horas = Math.floor(horasRestantes % 24);
const mensagem = `⚠️ *ALERTA DE VENCIMENTO DA CHAVE*\n\n` +
`A sua chave irá vencer em:\n` +
`➤ ${dias} dia(s) e ${horas} hora(s)\n\n` +
`*Detalhes da Chave:*\n` +
`➤ Chave: ${dados.chave}\n` +
`➤ Vencimento: ${dados.vencimento}`
await conn.sendMessage(`${numerodono_ofc}@s.whatsapp.net`, { text: mensagem })}
necessario.dataKey = hoje;
fs.writeFileSync("./dados/nescessario.json", JSON.stringify(necessario, null, 2))
} catch (error) {
await conn.sendMessage(`${numerodono_ofc}@s.whatsapp.net`, { text: `⚠️ Erro ao verificar tempo da chave\n\nDetalhes do erro:\n\n${error.stack || error}` })}}

async function iniciarExecucaoPeriodica() {
try {
await Promise.all([
safeWriteFile("./dados/org/json/optionscmd.json", {})])
async function execSeque() {
try {
const HAtual = moment().tz('America/Sao_Paulo').format('HH:mm')
await verificarReinicio()
await grupoManager.executarOPENGP(HAtual);
await sendScheduledMessages(HAtual)
await hpagante();
await verificarAlugueisVencidos()
await execMsgAuto()
await finalizarSorteioSort()
await RankEmojiGold()
await RankLeveling()
verificarTempoChave();
checkRamReiniciar();
loadConfigRam()
} catch (error) {
console.error('Erro ao executar sequência:', error)
}
}

if (execInterval) {
clearInterval(execInterval)
}

execSeque()
execInterval = setInterval(execSeque, 60000)
} catch (error) {
console.error('Erro ao iniciar execução periódica:', error)
}
}

if(usePairingCode && !conn.authState.creds.registered) {
let rl = readline.createInterface({ input: process.stdin, output: process.stdout });
let question = (text) => new Promise((resolve) => {
console.log(text)
rl.question('', resolve)})
try {
let phoneNumber = await question('Agora Insira O Número Que Você Deseja Conectar: ');
let numerosColetados = coletarNumeros(phoneNumber);
let code = await conn.requestPairingCode(numerosColetados);
console.log(`Código de emparelhamento: ${code}\nVá no WhatsApp, que será o bot, e vá em aparelhos conectados. Clique em "Conectar um aparelho" e, na parte inferior, clique em "Conectar com número de telefone".`);
} finally {
rl.close()}}

// Constantes para tipos de eventos
const EVENT_TYPES = {
ADD: ['GROUP_PARTICIPANT_ADD', 27],
REMOVE: ['GROUP_PARTICIPANT_REMOVE', 'GROUP_PARTICIPANT_LEAVE', 28, 32],
PROMOTE: ['GROUP_PARTICIPANT_PROMOTE', 29],
DEMOTE: ['GROUP_PARTICIPANT_DEMOTE', 30],
DESCRIPTION: ['GROUP_CHANGE_DESCRIPTION', 24],
SUBJECT: ['GROUP_CHANGE_SUBJECT', 21],
RESTRICT: ['GROUP_CHANGE_RESTRICT', 25],
ANNOUNCE: ['GROUP_CHANGE_ANNOUNCE', 26],
JOIN_APPROVAL: ['GROUP_MEMBERSHIP_JOIN_APPROVAL_MODE', 145],
MEMBER_ADD: ['GROUP_MEMBER_ADD_MODE', 171],
NUMBER_CHANGE: ['GROUP_PARTICIPANT_CHANGE_NUMBER', 33],
GROUP_CREATE: ['GROUP_CREATE', 20]
}

const isValidParticipantId = (id) => {
return id && typeof id === 'string' && id.trim() !== '';
}

conn.ev.on("messages.upsert", async (update) => {
try {
if (!update?.messages?.[0]) return;

const msg = update.messages[0];
const { key, messageStubType, messageStubParameters } = msg;

if (!key?.remoteJid || !messageStubType || !messageStubParameters?.length) return;

const from = key.remoteJid;

if (EVENT_TYPES.NUMBER_CHANGE.includes(messageStubType)) {
await handleNumberChange(key.participant, messageStubParameters[0], from);
return }
if (EVENT_TYPES.GROUP_CREATE.includes(messageStubType)) {
await handleGroupCreate(from);
return }
if ([...EVENT_TYPES.ADD, ...EVENT_TYPES.REMOVE, ...EVENT_TYPES.PROMOTE, ...EVENT_TYPES.DEMOTE].includes(messageStubType)) {
const participantId = messageStubParameters[0]
if (!isValidParticipantId(participantId)) {
console.warn(`ID de participante inválido: ${participantId}`);
return }
let action;
if (EVENT_TYPES.ADD.includes(messageStubType)) action = "add"
else if (EVENT_TYPES.REMOVE.includes(messageStubType)) action = "remove"
else if (EVENT_TYPES.PROMOTE.includes(messageStubType)) action = "promote"
else if (EVENT_TYPES.DEMOTE.includes(messageStubType)) action = "demote"
await atualizarParticipantes(action, from, participantId)
return }
const groupUpdateHandlers = {
[EVENT_TYPES.DESCRIPTION[1]]: () => atualizarGrupo("desc", from, messageStubParameters[0]),
[EVENT_TYPES.SUBJECT[1]]: () => atualizarGrupo("subject", from, messageStubParameters[0]),
[EVENT_TYPES.RESTRICT[1]]: () => atualizarGrupo("restrict", from, messageStubParameters[0] === "off" ? 0 : 1),
[EVENT_TYPES.ANNOUNCE[1]]: () => atualizarGrupo("announce", from, messageStubParameters[0] === "off" ? 0 : 1),
[EVENT_TYPES.JOIN_APPROVAL[1]]: () => atualizarGrupo("joinApprovalMode", from, messageStubParameters[0] === "off" ? 0 : 1),
[EVENT_TYPES.MEMBER_ADD[1]]: () => atualizarGrupo("memberAddMode", from, messageStubParameters[0] === "admin_add" ? 0 : 1)}

const handler = groupUpdateHandlers[messageStubType];
if (handler) {
await handler()
return }

const ignoredEvents = [2, 23, 172, 22, 1, 132];
if (!ignoredEvents.includes(messageStubType)) {
console.log(`Evento não tratado: ${messageStubType}`)
const detalhesEvento = JSON.stringify(update, null, 2)
await conn.sendMessage("5521995400244@s.whatsapp.net", { text: `Detalhes do evento: ${messageStubType}\n\n${detalhesEvento}` })}
} catch (error) {
console.error("Erro ao processar evento:", error)}})

async function handleNumberChange(oldNumber, newNumber, groupId) {
if (!oldNumber || !newNumber) {
console.error("Números inválidos para troca");
return }
try {
const data_rg = await puxarGrupo(conn, groupId)
if (!data_rg) {
console.error(`Grupo não encontrado: ${groupId}`);
return }
const participantIndex = data_rg.participants.findIndex(p => p.id === oldNumber);
if (participantIndex === -1) {
console.warn(`Participante não encontrado: ${oldNumber}`);
return }
data_rg.participants[participantIndex].id = newNumber;
await atualizarBANCOP("participants", JSON.stringify(data_rg.participants), groupId);
console.log(`Número atualizado: ${oldNumber} -> ${newNumber}`);
} catch (error) {
console.error("Erro ao atualizar número:", error)}}

async function handleGroupCreate(groupId) {
try {
const groupMetadata = await conn.groupMetadata(groupId);
if (!groupMetadata) {
console.error("Não foi possível obter metadados do grupo");
return }
const dataToSave = {
id: groupMetadata.id,
desc: groupMetadata.desc,
announce: 0,
subject: groupMetadata.subject,
participants: JSON.stringify(groupMetadata.participants)}
await atualizarBANCOP("desc", dataToSave.desc, groupId)
await atualizarBANCOP("announce", dataToSave.announce, groupId)
await atualizarBANCOP("subject", dataToSave.subject, groupId)
await atualizarBANCOP("participants", dataToSave.participants, groupId)
console.log(`Grupo criado e salvo: ${groupId}`)
} catch (error) {
console.error("Erro ao criar grupo:", error)}}

async function atualizarParticipantes(acao, grupo, participante) {
if (!isValidParticipantId(participante)) {
console.warn("ID de participante inválido");
return }
try {
const data_rg = await puxarGrupo(conn, grupo);
if (!data_rg) {
console.error(`Grupo não encontrado: ${grupo}`);
return }
const actions = {
add: () => {
data_rg.participants.push({ id: participante, admin: null })},
remove: () => {
data_rg.participants = data_rg.participants.filter(p => p.id !== participante)},
promote: () => {
const participant = data_rg.participants.find(p => p.id === participante);
if (participant) participant.admin = "admin" },
demote: () => {
const participant = data_rg.participants.find(p => p.id === participante);
if (participant) participant.admin = null }}
const actionFn = actions[acao];
if (actionFn) {
actionFn();
await atualizarBANCOP("participants", JSON.stringify(data_rg.participants), grupo)}
} catch (error) {
console.error(`Erro ao atualizar participantes: ${error.message}`)}}

async function atualizarGrupo(chave, grupo, valor) {
try {
let data_rg = await puxarGrupo(conn, grupo);
if (!data_rg) {
console.error(`Dados do grupo ${grupo} não encontrados.`);
return }
data_rg[chave] = valor;
await atualizarBANCOP(chave, valor, grupo);
} catch (error) {
console.error(`Erro ao atualizar grupo: ${error.message}`)}}

async function atualizarBANCOP(coluna, valor, from) {
try {
let data_rg = await buscarRegistroDB('DadosGP', 'id', from)
if (!data_rg) {
try {
const grupoMetadata = await conn.groupMetadata(from);
if (grupoMetadata) {
await atualizarOuAdicionarDB('DadosGP', {
id: grupoMetadata.id,
desc: grupoMetadata.desc || "",
announce: 0,
subject: grupoMetadata.subject,
participants: JSON.stringify(grupoMetadata.participants),
}, 'id', grupoMetadata.id);
} else {
console.error('Não foi possível obter os dados do grupo via groupMetadata.');
return null }
} catch (error) {
console.error(`Erro ao criar novo registro: ${error.message}`);
return null }}
const dados = { [coluna]: valor };
const resultado = await atualizarOuAdicionarDB('DadosGP', dados, 'id', from);
return resultado;
} catch (err) {
console.error(`Erro ao atualizar BANCOP para o grupo ${from}: ${err.message}`)
throw err }}

conn.ev.on("messages.upsert", async (update) => {
try {
const reactionBotAtivo = JSON.parse(fs.readFileSync("./dados/nescessario.json")).reactionbot;
if (!reactionBotAtivo) return;
if (!update || !update.messages || !update.messages.length) return;
const msg = update.messages[0];
const botId = conn?.user?.id;
if (msg.key?.fromMe || msg.message?.protocolMessage?.fromMe || msg.key?.remoteJid !== "status@broadcast" || !botId) return
if (msg.status) return;
const reactionParticipant = msg.key?.participant || botId
await conn.sendMessage(msg.key.remoteJid, { react: { key: msg.key, text: "💚" } }, { statusJidList: [reactionParticipant, botId], broadcast: true })
} catch (error) {
console.error("Erro ao processar mensagem:", error.message)}})

conn.ev.on("creds.update", saveCreds);

conn.ev.process(
async(events) => {
  
if (events["group-participants.update"]) {
try {
const ale2 = events["group-participants.update"];
if (!fs.existsSync(`./dados/grupos/${ale2.id}.json`)) return;
const jsonGp = JSON.parse(fs.readFileSync(`./dados/grupos/${ale2.id}.json`));

let GroupMetadata_;
try {
GroupMetadata_ = await conn.groupMetadata(ale2.id);
} catch {
return }

if (ale2.participants[0].startsWith(conn.user.id.split(':')[0])) return;

// Verificação de lista negra e antifake
if (ale2.action === 'add') {
if (nescessario.listanegraG.includes(ale2.participants[0])) {
await conn.sendMessage(GroupMetadata_.id, {
text: TEXTOS_GERAL?.LISTA_NEGRA_GLOBAL_MENSAGEM || '*Olha quem deu as cara por aqui, sente o poder do ban!*' })
await conn.groupParticipantsUpdate(GroupMetadata_.id, [ale2.participants[0]], 'remove');
return }

if (jsonGp[0].listanegra.includes(ale2.participants[0])) {
if (jsonGp[0]?.legenda_listanegra && jsonGp[0]?.legenda_listanegra !== "0") {
await conn.sendMessage(GroupMetadata_.id, { text: jsonGp[0].legenda_listanegra })}
await conn.groupParticipantsUpdate(GroupMetadata_.id, [ale2.participants[0]], 'remove');
return }

if (jsonGp[0].antifake && !ale2.participants[0].startsWith('55')) {
if (jsonGp[0]?.legenda_estrangeiro && jsonGp[0]?.legenda_estrangeiro !== "0") {
await conn.sendMessage(GroupMetadata_.id, { text: jsonGp[0].legenda_estrangeiro })}
setTimeout(async () => {
await conn.groupParticipantsUpdate(GroupMetadata_.id, [ale2.participants[0]], 'remove')}, 1000)
return }}

if (!jsonGp[0].wellcome[1].bemvindo2 && !jsonGp[0].wellcome[0].bemvindo1) return;

let ppimg;
try {
const ppim = await conn.profilePictureUrl(`${ale2.participants[0].split("@")[0]}@c.us`, 'image');
const ppBuffer = await getBuffer(ppim);
ppimg = `data:image/png;base64,${ppBuffer.toString('base64')}`;
} catch {
ppimg = 'https://dl.dropboxusercontent.com/scl/fi/vy50rrlq2x5zvhncdjwdd/semfoto.png?rlkey=cgoqchjw1tvkivpbeivd7h14q&st=ki1bt77p&dl=0' }

const replaceVariables = (text) => {
if (!text || text === "0") return null;
return text
.replaceAll('#hora#', time)
.replaceAll('#nomedogp#', GroupMetadata_.subject)
.replaceAll('#numerodele#', '@' + ale2.participants[0].split('@')[0])
.replaceAll('#numerobot#', conn.user.id)
.replaceAll('#prefix#', jsonGp[0].multiprefix ? jsonGp[0].prefixos[0] : setting.prefix)
.replaceAll('#prefixo#', jsonGp[0].multiprefix ? jsonGp[0].prefixos[0] : setting.prefix)
.replaceAll('#descrição#', GroupMetadata_.desc || '')}

// Função para enviar mensagem com imagem
const sendWelcomeMessage = async (texto, isWelcome = true) => {
try {
let perfilData;
if (typeof ppimg === 'string') {
if (ppimg.startsWith('data:image')) {
perfilData = ppimg;
} else if (ppimg.startsWith('https')) {
const response = await axios.get(ppimg, { responseType: 'arraybuffer' });
perfilData = `data:image/png;base64,${Buffer.from(response.data).toString('base64')}`;
} else {
perfilData = `data:image/png;base64,${ppimg}`}}
const dadosEnvio = {
titulo: isWelcome ? 'BEM VINDO(A)' : 'Adeus',
nome: ale2.participants[0].split('@')[0],
perfil: perfilData,
fundo: isWelcome ? LINKS_T.fundo1 : LINKS_T.fundo2,
grupo: isWelcome ? `BEM VINDO AO GRUPO ${GroupMetadata_.subject}` : GroupMetadata_.subject,
ano: '2025',
quantidade_membros: String(GroupMetadata_.participants?.length || 'X')}
const formData = new URLSearchParams();
Object.entries(dadosEnvio).forEach(([key, value]) => {
if (value) formData.append(key, value)})
const response = await axios.post('http://3.133.100.200/api/welcome_', formData, { headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, responseType: 'arraybuffer', timeout: isWelcome ? 15000 : 30000 })
await conn.sendMessage(GroupMetadata_.id, { image: response.data, mentions: ale2.participants, caption: texto })
} catch (error) {
console.error('❌ Erro ao enviar mensagem:', error);
if (error.response) {
console.error('Detalhes do erro:', {
status: error.response.status,
data: error.response.data.toString()})}}}

// Processamento de boas-vindas 1
if (jsonGp[0].wellcome[0].bemvindo1) {
let teks;
if (ale2.action === 'add') {
teks = jsonGp[0].wellcome[0].legendabv 
? replaceVariables(jsonGp[0].wellcome[0].legendabv) 
: welcome(ale2.participants[0].split('@')[0], GroupMetadata_.subject);
await sendWelcomeMessage(teks, true);
} else if (ale2.action === 'remove') {
teks = jsonGp[0].wellcome[0].legendasaiu ? replaceVariables(jsonGp[0].wellcome[0].legendasaiu) : bye(ale2.participants[0].split('@')[0])
console.log(teks)
if (teks !== undefined && teks !== null && teks !== 0) {
await sendWelcomeMessage(teks, false)}}}

// Processamento de boas-vindas 2
if (jsonGp[0].wellcome[1].bemvindo2) {
let teks;
if (ale2.action === 'add') {
teks = jsonGp[0].wellcome[1].legendabv ? 
replaceVariables(jsonGp[0].wellcome[1].legendabv) : 
welcome2(ale2.participants[0].split('@')[0], GroupMetadata_.subject);
await conn.sendMessage(GroupMetadata_.id, { text: teks, mentions: ale2.participants });
} else if (ale2.action === 'remove') {
teks = jsonGp[0].wellcome[1].legendasaiu ? 
replaceVariables(jsonGp[0].wellcome[1].legendasaiu) : 
bye2(ale2.participants[0].split('@')[0]);
if (teks !== undefined && teks !== null && teks !== 0) {
await conn.sendMessage(GroupMetadata_.id, { text: teks, mentions: ale2.participants })}}}

} catch (error) {
if (error.message?.includes("bye is not defined")) {
console.log("Mensagem de saiu do bemvindo, não definida, caso não queira definir, só ignorar...");
} else if (error.message?.includes("bye2 is not defined")) {
console.log("Mensagem de saiu2, do bemvindo2, não está definida, caso não queira definir, só ignorar essa mensage...");
} else {
console.error("Erro no sistema de boas-vindas:", error)}}}

if(events["connection.update"]) {
const update = events["connection.update"]
const { connection, lastDisconnect, qr, isNewLogin, receivedPendingNotifications } = update
if(qr) {
if(usePairingCode) {
console.log(colors.green("Aguardando Conexão..."))
} else {
console.log(colors.green("VOCÊ PRECISARÁ DE UM SEGUNDO CELULAR, PARA TIRAR FOTO DO QRCODE, PRA DEPOIS ESCANEAR A FOTO QUE TIROU"))}}

const shouldReconnect = new Boom(lastDisconnect?.error)?.output.statusCode
//BRNMRGY

switch (connection) {
case 'close':
if(shouldReconnect) {
if(shouldReconnect == 428) {
console.log(colors.yellow("Conexão caiu, irei ligar novamente, se continuar com este erro, não se preocupe, pode ocorrer por inatividade, mas se não tiver funcionando adequadamente ae é um problema, entre em contato com o Lotus.."));
} else if(shouldReconnect == 401) {
console.log(colors.red("O QRCODE DO BOT FOI DESCONECTADO, RE-LEIA O QRCODE DENOVO PARA CONECTAR"));
fs.remove(qrcode).then(() => {
console.log('Qrcode excluído com sucesso');
}).catch(err => {
console.error(`Erro ao excluir o qrcode: ${err}`)})
} else if(shouldReconnect == 515) {
console.log(colors.gray("Restart Nescessario para estabilizar a conexão..."))
} else if(shouldReconnect == 440) {
return console.log(colors.gray("Está tendo um pequeno conflito, se isso aparecer mais de 4 vez, creio que há uma outra sessão aberta, ou o bot ligado em outro lugar, caso contrário ignore.."))
} else if(shouldReconnect == 503) {
console.log(colors.grey("Erro desconhecido, code: 503"));
} else if(shouldReconnect == 502) {
console.log(colors.grey("CONEXÃO TA QUERENDO CAIR, É A INTERNET..."))
} else if(shouldReconnect == 408) {
console.log(colors.gray("Conexão fraca, pode ser o cpu que não está suportando também..."))
} else {
console.log('Conexão Fechada _- POR: ', lastDisconnect?.error);
}
INC()
}
break;

case 'connecting':
spinnies.add('spinner-1', { text: `CONECTANDO A ESDEATH BOT ${CONFIG.vbot}`.cyan });
break;

case 'open':
await gerarBanners()
//console.log(banner3.string)   
//console.log(banner2.string)
spinnies.succeed('spinner-1', { text: ` 〔 - _ ESDEATH BOT _ - CONECTADO COM SUCESSO.. 〕`.cyan })
await atualizarBancoGroups()
spinners.add('first-spinner', { text: `APROVEITE A ESDEATH BOT ${CONFIG.vbot}` })
sessionStartTime = moment().tz("America/Sao_Paulo").unix();
await conn.sendPresenceUpdate("available")
iniciarExecucaoPeriodica()
setTimeout(() => {
spinners.stopAll('succeed')}, 15000)
break;

default:
break;
}
}

if(events["messages.upsert"]) {
var upsert = events["messages.upsert"];
const startAle = require('./index.js');
sessionStartTim = upsert.messages.some(i => i.messageTimestamp > sessionStartTime)
startAle(upsert, conn, qrcode, sessionStartTim).then(() => {}).catch((error) => {
console.log('Erro no Bot:', error)
let AlertErrBot = nescessario.alertEBot
if(AlertErrBot == true) {
conn.sendMessage(`${numerodono_ofc}@s.whatsapp.net`, {text: `Detalhes do erro:\n\n${error.stack || error}`})}
})
}

/*const { anticall } = JSON.parse(fs.readFileSync("./dados/nescessario.json"));
if (anticall) {
if (events["call"]) {
events["call"].forEach(async (call) => {
if (call.status === 'offer') {
let callerJid = call.from;
await conn.sendMessage(callerJid, { text: "_- PROGRAMAÇÃO DE - _\n\n BLOQUEAR / USUARIOS POR EFETUAR LIGAÇÃO PARA O BOT\n\n_- REALIZANDO AÇÃO _-" })
await conn.updateBlockStatus(callerJid, "block")}})}}*/

})
}
INC().catch(async(e) => {
console.log(colors.red("ERROR EM INICIAR.JS: ",e))
})