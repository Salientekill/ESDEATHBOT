#!/bin/bash
echo -e "\e[32mCompactando a pasta DADOS\e[0m"
zip -r DADOS.zip DADOS



echo -e "\e[32mRemovendo todas as pastas, exceto o arquivo compactado\e[0m"
find . -maxdepth 1 ! -name "DADOS.zip" -type d -exec rm -rf {} \;

echo -e "\e[32mBAIXA O ARQUIVO ATUALIZADO DA ESDEATH BOT\e[0m"
git clone https://github.com/Salientekill/ESDEATHBOT.git repo-temp && mv repo-temp/* . && rm -r repo-temp

echo -e "\e[32mExtrai o arquivo compactado e executa o start.sh\e[0m"
unzip -o DADOS.zip -d .

echo # Por fim apagar o arquivo compactado
rm  DADOS.zip
bash start.sh