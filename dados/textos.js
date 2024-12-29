

// TOMEM CUIDADO, UMA VIRGULA, ATÉ UM ACENTO ERRADO PODE CAUSAR ERRO, SALVE ANTES DE ALTERAR PARA EVITAR PROBLEMAS E FICAR XINGANDO O JOSIVAL.

const TEXTOS_GERAL =  {
  
MENSAGEM_DOS_ANTI_LINKS: "*🚫 LINK DETECTADO, BANIDO 🚫*",

MENSAGEM_DE_SO_USAR_EM_GRUPO: `*Este comando só deve ser utilizado em Grupos.*`,

MENSAGEM_DE_SO_DONO_USAR_COMANDOS: `*Este comando é apenas para o meu dono utilizar...*`,

MENSAGEM_DE_SO_ADM_CONSEGUIR_USAR_X_COMANDO: `*Só Administradores do grupo podem utilizar este comando..*`,

MENSAGEM_DE_QUANDO_O_BOT_NAO_E_ADM: `*O Bot precisa ser Administrador do grupo para utilizar este comando...*`,

// O #prefixo# é padrão para mostrar o prefixo do bot.

MENSAGEM_DE_SO_QUANDO_MODO_BRINCADEIRA_FOR_ATIVO: `*Este comando so pode ser utilizado com o comando #prefixo#modobrincadeira ativado, para desativar só basta usar o comando novamente.*`,

MENSAGENS_DE_AGUARDE: ["*[ ! ] Aguarde amigo, estou fazendo...*", "Vai beber uma água, ja estou terminando de enviar..", "㋡ Opa, calma ae, tô enviando já!!", "❬❗❭ Aguarde 5 segundos", "☬ Seu pedido é uma ordem companheiro(a), Enviando...", "ههههه𓅂 Oi filho de Deus, calma ae, tô terminando de fazer..", "Oi princesa, já estou preparando pra enviar, Aguarde..", "Salve mano, só aguarde um pouquinho que já estou enviando!!", "Aquieta o coração amigo, já estou enviando!", "Espere sentado que estou enviando!", "Pisa no freio aí amigo, tô enfiando já, ops enviando rsrs!", "Foi daqui que pediram comando? Ta chegando...", "Oq vc ñ pede chorando, que eu não faço sorrindo, enviando já!", "Em 365 dias úteis termino o comando kkkk meme, to enviando!", "Não precisa gritar, já ouvi e tô enviando seu pedido!", "Aproveita que tô terminando aqui e beba água, hidrate-se!", "Seu pedido é uma ordem, terminando patrão!", "Manda quem pode, obedece quem tem juízo. Já tô enviando...", "Jaja está na mão amigo, aguarde um instante!", "Quem espera, sempre alcança","Tô enviando já amigão!"],

// LINK DA IMAGEM DO COMANDO DE CASAL
LINK_COMANDO_CASAL: "https://i.ibb.co/zndm1Pc/K88c2-Bk-Qwlc-F.jpg",

// TEXTO DO COMANDO DE CASAL // O #porcentagem# vai puxar de 0 a 100.
TEXTO_COMANDO_CASAL: `🌟 Casal do grupo com ॐ #porcentagem# ✨ de chance pra da certo 😏:`,

// PALAVRAS QUE SÃO PROIBIDAS DO SIMIH FALAR.
PALAVRAS_PROIBIDA_DE_O_SIMI_FALAR: ["porra", "carai", "caralho", "buceta", "bct", "teu cu","meu pau", "minha chibata", "pika", "seu cu", "sexo", "gozar", "gozei"],

COMANDO_BAN_MENSAGEM: `#usuario# *Foi [ REMOVIDO(A) COM SUCESSO ] - (Por motivos justos.) -*`,

COMANDO_PROMOVEU_MENSAGEM:`#usuario# *Foi promovido(a) para adm com sucesso.*`,

COMANDO_REBAIXOU_MENSAGEM: `#usuario# *Foi Rebaixado para [ MEMBRO COMUM ] com sucesso.*`,

LIMITE_CARACTERES_MSG: 'Muitas Caracteres enviadas, isto é contra as normas do grupo, por precaução, eu irei remover.',

LISTA_NEGRA_GLOBAL_MENSAGEM: '*Olha quem deu as cara por aqui, sente o poder do ban*',

MENSAGEM_GRUPO_ABRIU: "*GRUPO ABERTO COM SUCESSO*",

MENSAGEM_GRUPO_FECHOU: "*GRUPO FECHADO COM SUCESSO*"

}

// #nomegp# é o nome do grupo, #idgp# é o nome do grupo, #lermais# é aquele ler mais, #numerodono e o numero do dono

// MSG DE QUASE VENCIDO
const QVcnd = `🟨⚠️ *AVISO* ⚠️🟨\n\nO aluguel do grupo *#nomegp#* está prestes a vencer! ⏰\nFaltam menos de 24 horas para a expiração. Não deixe para última hora!`;

// MSG DE VENCIDO
const Vcnd = `🟥🚨 *ATENÇÃO ADMS DO GRUPO* 🚨🟥\n\n#lermais# O aluguel do grupo *#nomegp#* venceu! ❌\nBot Inativo aguardando renovação. Caso não seja renovado, o bot será removido do grupo em breve. 🕒`;

// MSG DE SAÍDA
const Saida = `🟥⏳ *ATENÇÃO!* ⏳🟥\n\nJá se passaram 2 dias após o vencimento do aluguel do grupo *#nomegp#* 😔. Estarei saindo do grupo.\nPara renovar, entre em contato com o meu dono: wa.me/#numerodono#`;

// MSG DE AVISO AO DONO DE QUASE VENCIDO
const ADnQVcnd = `🟩🚨 *AVISO DO ALUGUEL* 🚨🟩\n\nO aluguel do grupo *#nomegp#* (#idgp#) está prestes a expirar! ⏰\nFaltam menos de 24 horas para o vencimento.`;

// MSG DE AVISO AO DONO DE VENCIDO
const ADnVcnd = `🟧⚠️ *AVISO DO ALUGUEL* ⚠️🟧\n\nO aluguel do grupo *#nomegp#* (#idgp#) já venceu! ❌\nEstamos aguardando a renovação.`;

// MSG DE AVISO AO DONO DE SAÍDA
const ADnSd = `🟥⏳ *AVISO DO ALUGUEL!* ⏳🟥\n\nO aluguel do grupo *#nomegp#* (#idgp#) expirou há 2 dias! 🕛\nComo não houve renovação, o bot está saindo do grupo.`;

// MSG DE NÃO REGISTRADO AO TENTAR USAR CMD
const NrgIndex = `Olá, #usuario#! 🚨\nO aluguel deste *(grupo/usuario)* não está registrado no meu sistema. 🕒\nEntre em contato com meu dono agora mesmo para regularizar:\n👉 Clique aqui para falar com ele! https://wa.me/#numerodono#\nGaranta o acesso total aos meus serviços! 😎✨`

// MSG DE VENCIDO AO TENTA USAR CMD
const Vcndindex = `👋 Oi, #usuario#!\nParece que o seu aluguel expirou. 😥\nNão perca tempo! Renove agora mesmo para continuar aproveitando meus serviços incríveis. 🚀\n\n📞 Entre em contato com meu dono:\n👉 Clique aqui para falar com ele! https://wa.me/#numerodono#\nEstou aqui esperando por você! 😉`

module.exports = { QVcnd, Vcnd, Saida, ADnQVcnd, ADnVcnd, ADnSd, Vcndindex, NrgIndex, TEXTOS_GERAL }