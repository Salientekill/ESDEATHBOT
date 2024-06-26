#!/bin/sh

cleanup_files() {
    rm -f *jpg *webp *opus *jpeg *.mp* *m4a *ga *.ogg *mp4 *mp3
}

start_node_script() {
    NODE_NO_WARNINGS=1 node --trace-warnings iniciar.js
}

start_node_script_with_code() {
    NODE_NO_WARNINGS=1 node --trace-warnings iniciar.js -code
}

if echo "$*" | grep -q -- "-code"; then
    if [ ! -f DADOS/ESDEATH-QR/creds.json ]; then
        echo -e "\e[32mO arquivo creds.json não foi encontrado então será iniciado com código de emparelhamento.\e[0m"
        while : 
        do
            echo -e "\e[32mESDEATH BOT ESTÁ INICIANDO AGUARDE..\e[0m"
            cleanup_files
            start_node_script_with_code
            sleep 1
        done
    else
        echo -e "\e[32mESDEATH BOT ESTÁ INICIANDO AGUARDE..\e[0m"
        while : 
        do
            cleanup_files
            start_node_script
            sleep 1
        done
    fi
else
    echo -e "\e[32mESDEATH BOT ESTÁ INICIANDO AGUARDE..\e[0m"
    while : 
    do
        cleanup_files
        start_node_script
        sleep 1
    done
fi