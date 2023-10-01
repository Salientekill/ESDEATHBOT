#!/bin/bash

echo -e "\e[32mInstalação das ferramentas necessárias\e[0m"
apt install -y git zip unzip

echo -e "\e[32mVerificando a existência da pasta DADOS\e[0m"
if [ -d "DADOS" ]; then
  echo -e "\e[32mCompactando a pasta DADOS\e[0m"
  zip -r DADOS.zip DADOS
else
  echo -e "\e[31mA pasta DADOS não existe. Certifique-se de que ela existe antes de executar este script.\e[0m"
  exit 1
fi

echo -e "\e[32mRemovendo todas as pastas, exceto o arquivo compactado\e[0m"
for file in *; do
  if [ "$file" != "DADOS.zip" ]; then
    rm -rf "$file"
  fi
done

echo -e "\e[32mBAIXA O ARQUIVO ATUALIZADO DA ESDEATH BOT\e[0m"
git clone https://github.com/Salientekill/ESDEATHBOT.git repo-temp && mv repo-temp/* . && rm -r repo-temp

echo -e "\e[32mExtrai o arquivo compactado e executa o start.sh\e[0m"
unzip -o DADOS.zip -d .
rm DADOS.zip  # Remova o arquivo compactado após a extração

bash start.sh
