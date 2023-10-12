#!/bin/bash
echo  Instalação das ferramentas necessárias e compactação do arquivo
zip -r dados.zip DADOS

echo # Removendo todas as pastas, exceto o arquivo compactado

find . -maxdepth 1 ! -name "DADOS.zip" -type d -exec rm -rf {} \;

echo # BAIXA O ARQUIVO ATUALIZADO DA ESDEATH BOT 

git clone https://github.com/Salientekill/ESDEATHBOT.git && cd ESDEATHBOT && mv * .. && cd .. && rm -rf ESDEATHBOT

echo # Extrai o arquivo compactado e executa o start.sh
unzip -o DADOS.zip -d .
echo # Por fim apagar o arquivo compactado
rm  DADOS.zip
bash start.sh