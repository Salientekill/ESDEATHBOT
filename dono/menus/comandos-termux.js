const cmd_termux = (prefix) => {
return `
COMANDOS TERMUX BOT WHATSAPP BY: LOTUS

PRIMEIRO COMANDO

pkg upgrade -y && pkg update -y && pkg install git -y && pkg install nodejs -y && pkg install nodejs-lts -y

SEGUNDO COMANDO.... 

termux-setup-storage

TERCEIRO COMANDO..

cd /sdcard/Pasta-DO-BOT

ou

cd /sdcard/download/PASTA-DO-BOT

QUARTO COMANDO....

pkg install ffmpeg -y && pkg install tesseract -y && pkg install python -y

QUINTO COMANDO....

pkg install ffmpeg -y && pkg install wget -y

Para Ligar O Bot...

sh start.sh


//====================================\\


Caso Feche O Termux E Queira Ligar O Bot Novamente

1��
cd /sdcard/Pasta-Do-Bot

2��
sh start.sh

Somente isso.
`
}

exports.cmd_termux = cmd_termux
