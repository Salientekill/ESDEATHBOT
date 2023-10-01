const fs = require('fs')



//========(PALAVRAS-DO-ANAGRAMA)=========\\

let palavrasANA = [
{
original: 'PARADOXO',
embaralhada: 'XOPARODA',
dica: 'CANAL'
},
{
original: 'ESCADA',
embaralhada: 'CAESDA',
dica: 'OBJETO'
},
{
original: 'AKAME',
embaralhada: 'MEAKA',
dica: 'PERSONAGEM'
},
{
original: 'NAGATORO',
embaralhada: 'GATONARO',
dica: 'PERSONAGEM'
},
{
original: 'SASUKE',
embaralhada: 'KESUSA',
dica: 'PERSONAGEM'
},
{
original: 'GAY',
embaralhada: 'YAG',
dica: 'VOCÊ'
},
{
original: 'CIMENTO',
embaralhada: 'OMCNITE',
dica: 'CONSTRUÇÕES'
},
{
original: 'BANANA',
embaralhada: 'NABANA',
dica: 'COMIDA'
},
{
original: 'NETFLIX',
embaralhada: 'TFLIXNE',
dica: 'APLICATIVO'
},
{
original: 'YOUTUBE',
embaralhada: 'TUBEYOU',
dica: 'APLICATIVO'
},
{
original: 'PORTUGAL',
embaralhada: 'TUGALPOR',
dica: 'PAÍS'
},
{
original: 'PISTOLA',
embaralhada: 'TOPISLA',
dica: 'OBJETO'
},
{
original: 'CAMARÃO',
embaralhada: 'MARÃOCA',
dica: 'COMIDA'
},
{
original: 'HIDRANTE',
embaralhada: 'TEHDIRAN',
dica: 'OBJETO'
},
{
original: 'FOGUETE',
embaralhada: 'TEFOGUE',
dica: 'OBJETO'
},
{
original: 'SKATE',
embaralhada: 'TEASK',
dica: 'OBJETO'
},
{
original: 'MACACO',
embaralhada: 'CACOMA',
dica: 'ANIMAL'
},
{
original: 'LASANHA',
embaralhada: 'NHASALA',
dica: 'COMIDA'
},
{
original: 'PASTEL',
embaralhada: 'PATELS',
dica: 'COMIDA'
},
{
original: 'COXINHA',
embaralhada: 'XICONHA',
dica: 'COMIDA'
},
{
original: 'BICICLETA',
embaralhada: 'CIBITACLE',
dica: 'OBJETO'
},
{
original: 'BICICLETA',
embaralhada: 'BTAELCIECI',
dica: 'MEIO DE TRANSPORTE'
},
{
original: 'PISCINA',
embaralhada: 'IAPCINS',
dica: 'LOCAL DE LAZER'
},
{
original: 'GUITARRA',
embaralhada: 'GRTARAUIT',
dica: 'INSTRUMENTO MUSICAL'
},
{
original: 'CACHORRO',
embaralhada: 'CRHROACO',
dica: 'ANIMAL DE ESTIMAÇÃO'
},
{
original: 'PÃO',
embaralhada: 'ÃPO',
dica: 'ALIMENTO'
},
{
original: 'PARQUE',
embaralhada: 'UQREAP',
dica: 'ÁREA DE RECREAÇÃO'
},
{
original: 'LIVRO',
embaralhada: 'OVLIR',
dica: 'OBJETO DE LEITURA'
},
{
original: 'VIOLINO',
embaralhada: 'NOIOVLNI',
dica: 'INSTRUMENTO MUSICAL'
},
{
original: 'ESCOLA',
embaralhada: 'ESLCOA',
dica: 'INSTITUIÇÃO EDUCACIONAL'
},
{
original: 'BOLA',
embaralhada: 'LBOA',
dica: 'OBJETO DE JOGO'
},
{
original: 'SASUKE',
embaralhada: 'ESASUK',
dica: 'PERSONAGEM'
},
{
original: 'CAVALO',
embaralhada: 'LACAVO',
dica: 'ANIMAL'
},
{
original: 'LEVI',
embaralhada: 'EVIL',
dica: 'PERSONAGEM'
},
{
original: 'KAMAITACHI',
embaralhada: 'TAICAMAKHI',
dica: 'CANTOR'
},
{
original: 'LUBA',
embaralhada: 'UBAL',
dica: 'YOUTUBER'
},
{
original: 'GRÊMIO',
embaralhada: 'OMÊGRI',
dica: 'TIME'
},
{
original: 'SATURNO',
embaralhada: 'UTARSON',
dica: 'PLANETA'
},
{
original: 'MIKASA',
embaralhada: 'KAMISA',
dica: 'PERSONAGEM'
},
{
original: 'LEÃO',
embaralhada: 'OLEÃ',
dica: 'ANIMAL'
},
{
original: 'SAKURA',
embaralhada: 'SUKARA',
dica: 'PERSONAGEM'
},
{
original: 'HADES',
embaralhada: 'SEDAH',
dica: 'MITOLOGIA'
},
{
original: 'CORRIDA',
embaralhada: 'ARROCID',
dica: 'ESPORTE'
},
{
original: 'ODIN',
embaralhada: 'NODI',
dica: 'MITOLOGIA'
},
{
original: 'BICICLETA',
embaralhada: 'CIBITACLE',
dica: 'OBJETO'
},
{
original: 'BICICLETA',
embaralhada: 'CIBITACLE',
dica: 'OBJETO'
},
{
original: 'GUATEMALA',
embaralhada: 'LATEMAGUA',
dica: 'PAÍS'
},
{
original: 'CEREJA',
embaralhada: 'ECREJA',
dica: 'FRUTA'
},
{
original: 'VENEZUELA',
embaralhada: 'ZUNEEVELA',
dica: 'PAÍS'
},
{
original: 'HISTÓRIA',
embaralhada: 'TÓRISIAH',
dica: 'MATÉRIA'
},
{
original: 'INSTAGRAM',
embaralhada: 'TAGRAMINS',
dica: 'APLICATIVO'
},
{
original: 'WHATSAPP',
embaralhada: 'TSWHAAPP',
dica: 'APLICATIVO'
},
{
original: 'HIDRANTE',
embaralhada: 'TEHDIRAN',
dica: 'OBJETO'
},
{
original: 'CELULAR',
embaralhada: 'CELARLU',
dica: 'OBJETO'
},
{
original: 'NOTEBOOK',
embaralhada: 'TENOBOOK',
dica: 'OBJETO'
},
{
original: 'COMPUTADOR',
embaralhada: 'PUCOMDORTA',
dica: 'OBJETO'
},
{
original: 'LANTERNA',
embaralhada: 'TERLANNA',
dica: 'OBJETO'
},
{
original: 'CACHORRO',
embaralhada: 'HRROAOCC',
dica: 'ANIMAL'
},
{
original: 'DESENTUPIDOR',
embaralhada: 'SENDETUDORPI',
dica: 'OBJETO'
},
{
original: 'TOMATE',
embaralhada: 'ATEMOT',
dica: 'ALIMENTO'
},
{
original: 'SAXOFONE',
embaralhada: 'ASXOEOFN',
dica: 'INSTRUMENTO MUSICAL'
},
{
original: 'CAZAQUISTÃO',
embaralhada: 'ZAACQIUSÃOT',
dica: 'PAÍS'
},
{
original: 'CROÁCIA',
embaralhada: 'CRCÁOAI',
dica: 'PAÍS'
},
{
original: 'HUNGRIA',
embaralhada: 'UHGINRA',
dica: 'PAÍS'
},
{
original: 'MEGAFONE',
embaralhada: 'MOEFGNEA',
dica: 'OBJETO'
},
{
original: 'CINTURA',
embaralhada: 'RCIANUT',
dica: 'CORPO HUMANO'
},
{
original: 'ABDÔMEN',
embaralhada: 'MBÔDENA',
dica: 'CORPO HUMANO'
},
{
original: 'VAGNER',
embaralhada: 'GNEVAR',
dica: 'NOME'
},
{
original: 'ALEATORY',
embaralhada: 'YRTALOEA',
dica: 'NOME'
},
{
original: 'CAFIN',
embaralhada: 'NFCIA',
dica: 'TIPO DE GAY'
},
{
original: 'KONEKO',
embaralhada: 'NOEKKO',
dica: 'NOME'
},
{
original: 'RAPOSA',
embaralhada: 'APRSAO',
dica: 'ANIMAL'
},
{
original: 'INFERNO',
embaralhada: 'RNOFNIE',
dica: 'LUGAR'
},
{ 
original: 'RINOCERONTE',
embaralhada: 'NTERRECNIOO',
dica: 'ANIMAL'
},
{ 
original: 'PASTOR',
embaralhada: 'STRPAO',
dica: 'BATIZADO'
},
{
original: 'BONITO',
embaralhada: 'NTBIOO',
dica: 'COMENTÁRIO'
},
{
original: 'TELEFONE',
embaralhada: 'FOLNETEE',
dica: 'OBJETO'
},
{
original: 'VIOLÃO',
embaralhada: 'OALIÕV',
dica: 'INSTRUMENTO'
},
{
original: 'CACHOEIRA',
embaralhada: 'OARICACHE',
dica: 'LUGAR'
},
{
original: 'AVIÃO',
embaralhada: 'AÕVINÃ',
dica: 'MEIO DE TRANSPORTE'
},
{
original: 'BOLSA',
embaralhada: 'OLBAS',
dica: 'ACESSÓRIO'
},
{
original: 'MONTANHA',
embaralhada: 'OMANANTHA',
dica: 'FORMAÇÃO GEOGRÁFICA'
},
{
original: 'PRAIA',
embaralhada: 'ARPÍA',
dica: 'LOCAL DE LAZER'
},
{
original: 'CELULAR',
embaralhada: 'ALUCERL',
dica: 'DISPOSITIVO'
},
{
original: 'FLORESTA',
embaralhada: 'FLATORES',
dica: 'ECOSSISTEMA'
},
{
original: 'PRAÇA',
embaralhada: 'ÇAPAR',
dica: 'LOCAL PÚBLICO'
},
{
original: 'VIAGEM',
embaralhada: 'AMIEGV',
dica: 'ATIVIDADE DE LAZER'
},
{
original: 'FRUTA',
embaralhada: 'TAFUR',
dica: 'ALIMENTO'
},
{
original: 'CADERNO',
embaralhada: 'CARODEN',
dica: 'OBJETO ESCOLAR'
},
{
original: 'COPO',
embaralhada: 'POCO',
dica: 'RECIPIENTE'
},
{
original: 'JARDIM',
embaralhada: 'ADIRJM',
dica: 'ÁREA VERDE'
},
{
original: 'TEATRO',
embaralhada: 'ORETAT',
dica: 'LOCAL DE ESPETÁCULOS'
},
{
original: 'CHOCOLATE',
embaralhada: 'CEOHCTOAL',
dica: 'DOCE'
},
{
original: 'CAMISA',
embaralhada: 'SAMICA',
dica: 'VESTUÁRIO'
},
{
original: 'ESPELHO',
embaralhada: 'LESEPHO',
dica: 'OBJETO REFLETOR'
},
{
original: 'COMPUTADOR',
embaralhada: 'CORUPADMOT',
dica: 'EQUIPAMENTO'
},
{ 
original: 'TANGERINA',
embaralhada: 'RITAANGNE',
dica: 'ALIMENTO'
}
]	

//========= QUIZ NORMAL =========\\

const questionquiz = [
  {
    question: 'Qual é a capital do Brasil?',
    answer: 'brasilia'
  },
  {
    question: 'Quem escreveu a obra "Dom Quixote"?',
    answer: 'miguel de cervantes'
  },
  {
    question: 'Quantos planetas compõem o sistema solar?',
    answer: '8'
  },
  {
    question: 'Qual é o maior mamífero terrestre?',
    answer: 'elefante'
  }
];

//======== QUIZ DE ANIMAIS =======\\
let quizanimais = [
{
original: 'PORQUINHO DA ÍNDIA',
foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRycgYTDGCmvZsMnafaoUM6JQcTOCHGKG6dDg&usqp=CAU'
},
{
original: 'HAMSTER',
foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1CHUbXZ49VaIaYsEzUqiHaMNG2roLschGJA&usqp=CAU'
},
{
original: 'ROTTWEILER',
foto: 'https://telegra.ph/file/a10ad7df6ab6a2312a1f9.jpg'
},
{
original: 'FLOPPA',
foto: 'https://telegra.ph/file/7633abcd83b8a587f418d.jpg'
},
{
original: 'GUAXINIM',
foto: 'https://telegra.ph/file/3800c7048d04a1c3dbc4e.jpg'
},
{
original: 'ZEBRA',
foto: 'https://telegra.ph/file/a08e224344e34aa916972.jpg'
},
{
original: 'CARNEIRO',
foto: 'https://telegra.ph/file/096342c8c7815ba9d83be.jpg'
},
{
original: 'BODE',
foto: 'https://telegra.ph/file/ff574a82178089f453444.jpg'
},
{
original: 'MAMUTE',
foto: 'https://telegra.ph/file/00e445dde6c036a0c0df5.jpg'
},
{
original: 'ALPACA',
foto: 'https://telegra.ph/file/a201b23b179392f1cdd7f.jpg'
},
{
original: 'PORCO ESPINHO',
foto: 'https://telegra.ph/file/7b180efc77c8ab6e9a24a.jpg'
},
{
original: 'QUOKKA',
foto: 'https://telegra.ph/file/3042e66a22c6d0fb6e0cd.jpg'
},
{
original: 'PANDA VERMELHO',
foto: 'https://telegra.ph/file/a6517debde47b846073cc.jpg'
},
{
original: 'PEIXE GOTA',
foto: 'https://telegra.ph/file/e8892204b373c147bf489.jpg'
},
{
original: 'PEIXE MANDARIM',
foto: 'https://telegra.ph/file/e8892204b373c147bf489.jpg'
},
{
original: 'DRAGÃO DE KOMODO',
foto: 'https://telegra.ph/file/d4c36b449f4c781533f3c.jpg'
},
{
original: 'GUEPARDO',
foto: 'https://telegra.ph/file/0016017b9d28a3b6d027a.jpg'
},
{
original: 'FURÃO',
foto: 'https://telegra.ph/file/e352b4831db11c20a3c62.jpg'
},
{
original: 'LEOPARDO',
foto: 'https://telegra.ph/file/71f5f532ced0fddc08f5b.jpg'
},
{
original: 'LEBRE',
foto: 'https://telegra.ph/file/89f9a46ce660261279477.jpg'
},
{
original: 'MARRECO',
foto: 'https://telegra.ph/file/aa41bde6c4c350ec9d0d4.jpg'
},
{
original: 'GANSO',
foto: 'https://telegra.ph/file/9ab69884414feefc9c109.jpg'
},
{
original: 'CAVALO MARINHO',
foto: 'https://telegra.ph/file/e4cee57d5b731dfffa5d8.jpg'
},
{
original: 'CROCODILO',
foto: 'https://telegra.ph/file/b4483f9a7077fd29a137f.jpg'
},
{
original: 'ORNITORRINCO',
foto: 'https://telegra.ph/file/8ffdd62da1834433112be.jpg'
},
{
original: 'HUSKY SIBERIANO',
foto: 'https://telegra.ph/file/07b98023259637951ba8f.jpg'
},
{
original: 'CAPIVARA',
foto: 'https://telegra.ph/file/54f20cbd80737fe45a284.jpg'
}
]


module.exports = {
palavrasANA, 
quizanimais,
questionquiz
}