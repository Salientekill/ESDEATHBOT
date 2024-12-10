const fetch = require('node-fetch');
const fs = require('fs');
const axios = require('axios');
const cfonts = require('cfonts');
const Crypto = require('crypto');
const chalk = require('chalk');
const exec = require("child_process").exec;
const log = console.debug;
const mimetype = require('mime-types');
const cheerio = require('cheerio');
const { spawn } = require("child_process");
const ff = require('fluent-ffmpeg');
const { JSDOM } = require('jsdom');
const FormData = require('form-data');
const qs = require('qs');
const { fromBuffer } = require('file-type');
const toMs = require('ms');
const request = require('request');
const ffmpeg = require('fluent-ffmpeg');
const moment = require('moment-timezone');

var corzinhas = ["red","green","yellow","blue","magenta","cyan","white","gray","redBright","greenBright","yellowBright","blueBright","magentaBright","cyanBright","whiteBright"];
const cor1 = corzinhas[Math.floor(Math.random() * (corzinhas.length))];	
const cor2 = corzinhas[Math.floor(Math.random() * (corzinhas.length))];	
const cor3 = corzinhas[Math.floor(Math.random() * (corzinhas.length))];
const cor4 = corzinhas[Math.floor(Math.random() * (corzinhas.length))];	
const cor5 = corzinhas[Math.floor(Math.random() * (corzinhas.length))];

function convertSticker(base64, author, pack){
 return new Promise((resolve, reject) =>{
axios('https://sticker-api-tpe3wet7da-uc.a.run.app/prepareWebp', {
method: 'POST',
headers: {
Accept: 'application/json, text/plain, */*',
'Content-Type': 'application/json;charset=utf-8',
'User-Agent': 'axios/0.21.1',
'Content-Length': 151330
},
data: `{"image": "${base64}","stickerMetadata":{"author":"${author}","pack":"${pack}","keepScale":true,"removebg":"HQ"},"sessionInfo":{"WA_VERSION":"2.2106.5","PAGE_UA":"WhatsApp/2.2037.6 Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.83 Safari/537.36","WA_AUTOMATE_VERSION":"3.6.10 UPDATE AVAILABLE: 3.6.11","BROWSER_VERSION":"HeadlessChrome/88.0.4324.190","OS":"Windows Server 2016","START_TS":1614310326309,"NUM":"6247","LAUNCH_TIME_MS":7934,"PHONE_VERSION":"2.20.205.16"},"config":{"sessionId":"session","headless":true,"qrTimeout":20,"authTimeout":0,"cacheEnabled":false,"useChrome":true,"killProcessOnBrowserClose":true,"throwErrorOnTosBlock":false,"chromiumArgs":["--no-sandbox","--disable-setuid-sandbox","--aggressive-cache-discard","--disable-cache","--disable-application-cache","--disable-offline-load-stale-cache","--disk-cache-size=0"],"executablePath":"C:\\\\Program Files (x86)\\\\Google\\\\Chrome\\\\Application\\\\chrome.exe","skipBrokenMethodsCheck":true,"stickerServerEndpoint":true}}`
}).then(({data}) => {
resolve(data.webpBase64);
}).catch(reject);
});
}

exports.fetchJson = fetchJson = (url, options) => new Promise(async (resolve, reject) => {
fetch(url, options).then(response => response.json())
 .then(json => {
resolve(json)
}).catch((err) => {
reject(err)
})
})


exports.fetchText = fetchText = (url, options) => new Promise(async (resolve, reject) => {
fetch(url, options).then(response => response.text()).then(text => {
resolve(text)
}).catch((err) => {
reject(err)
})
})

const getBuffer = async (url, opcoes) => {
try {
opcoes ? opcoes : {}
const post = await axios({
method: "get",
url,
headers: {
'user-agent': 'Mozilla/5.0 (Windows NT 6.3; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.128 Safari/537.36', 
	'DNT': 1,
	'Upgrade-Insecure-Request': 1
},
...opcoes,
responseType: 'arraybuffer'
})
return post.data
} catch (erro) {
console.log(`Erro identificado: ${erro}`)
}
}

const randomBytes = (length) => {
return Crypto.randomBytes(length);
};

const generateMessageID = () => {
return randomBytes(10).toString('hex').toUpperCase();
};

const getExtension = async (type) => {
return await mimetype.extension(type)
}

const getGroupAdmins = (participants) => {
return participants.filter(participant => participant.admin === 'admin' || participant.admin === 'superadmin').map(participant => participant.id)}

const getMembros = (participants) => {
return participants.filter(participant => participant.admin === null || participant.admin === undefined).map(participant => participant.id)}

const getRandom = (ext) => {
return `${Math.floor(Math.random() * 10000)}${ext}`;
};

const banner2 = cfonts.render(('Grupo OFC: https://chat.whatsapp.com/GTXYQ9ipObnKfHU1jMPLII'), {
font: 'console',
align: 'center',
gradrient: [`${cor4}`,`${cor2}`], 
colors: [`${cor4}`,`${cor3}`,`${cor2}`,`${cor1}`,`${cor5}`],
lineHeight: 1
})
 
const banner3 = cfonts.render((`ESDEATH|BOT V9`), {
font: 'block',             
align: 'center',           
colors: [`${cor5}`,`${cor1}`,`${cor3}`,`${cor4}`,`${cor2}`],
background: 'transparent',  
letterSpacing: 1,           
lineHeight: 1,            
space: true,               
maxLength: '0',            
gradrient: [`${cor4}`,`${cor2}`],     
independentGradient: true, 
transitionGradient: true, 
env: 'node'
});  
 

function temporizador(segundos){
function tempo(s){
return (s < 10 ? '0' : '') + s;
}
var horas = Math.floor(segundos / (60*60));
var minutos = Math.floor(segundos % (60*60) / 60);
var segundos = Math.floor(segundos % 60);
return `${tempo(horas)}:${tempo(minutos)}:${tempo(segundos)}`;
}

const color = (text, color) => {
return !color ? chalk.green(text) : chalk.keyword(color)(text)
}

const bgcolor = (text, bgcolor) => {
return !bgcolor ? chalk.green(text) : chalk.bgKeyword(bgcolor)(text)
}

function recognize(filename, config = {}) {
const options = getOptions(config)
const binary = config.binary || "tesseract"
const command = [binary, `"${filename}"`, "stdout", ...options].join(" ")
if (config.debug) log("command", command)
return new Promise((resolve, reject) => {
exec(command, (error, stdout, stderr) => {
if(config.debug) log(stderr)
if(error) reject(error)
resolve(stdout)
})
})
}

function getOptions(config) {
const ocrOptions = ["tessdata-dir", "user-words", "user-patterns", "psm", "oem", "dpi"]
return Object.entries(config).map(([key, value]) => {
if (["debug", "presets", "binary"].includes(key)) return
if (key === "lang") return `-l ${value}`
if (ocrOptions.includes(key)) return `--${key} ${value}`
return `-c ${key}=${value}`
}).concat(config.presets).filter(Boolean)
}

authorname = 'ALEATORY-MD-3.0'
packname = '-JR-'

const usedCommandRecently = new Set()

chyt = `558198923680@s.whatsapp.net`

const isFiltered = (userId) => !!usedCommandRecently.has(userId)

const addFilter = (userId) => {
usedCommandRecently.add(userId)
setTimeout(() => usedCommandRecently.delete(userId), 2000) 
}

module.exports = { getBuffer, fetchJson, fetchText, generateMessageID, getGroupAdmins, getMembros, getRandom, banner2, temporizador, color, recognize, bgcolor, isFiltered, addFilter, banner3, getExtension, convertSticker, FormData }
