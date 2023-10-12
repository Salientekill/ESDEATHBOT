#!/bin/bash

if [[ "$*" == *"-code"* ]]; then
  if [ ! -f DADOS/ESDEATH-QR/creds.json ]; then
    echo -e "\e[32mO arquivo creds.json não foi encontrado então será iniciado com código de emparelhamento.\e[0m"
    while : 
    do
      echo -e "\e[32mESDEATH BOT ESTÁ INICIANDO AGUARDE..\e[0m"
      node --trace-warnings iniciar.js -code 
      sleep 1
    done
  else
    echo -e "\e[32mESDEATH BOT ESTÁ INICIANDO AGUARDE..\e[0m"
    node --trace-warnings iniciar.js 
  fi
else
  while : 
  do
    echo -e "\e[32mESDEATH BOT ESTÁ INICIANDO AGUARDE..\e[0m"
    node --trace-warnings iniciar.js
    sleep 1
  done
fi
