// configleveling.js
const ConfigsLevel = {
  // Configurações dos rankings diário e semanal
  ranking: {
    dailyTime: { hour: 21, minute: 0 },      // Horário do ranking diário (21:00)
    weeklyTime: { hour: 21, minute: 0, day: 6 }, // Ranking semanal (Sábado 21:00)
    tolerance: 5,           // Janela de 5 minutos após o horário para tentar enviar
    activeMessageCount: 200,// Mínimo de mensagens para aparecer no ranking
    messageGoals: [50, 100, 200, 300, 400, 500], // Metas de mensagens para conquistas
    rewards: {
      daily: [100, 70, 50, 40, 30],    // XP para 1º ao 5º lugar do ranking diário
      weekly: [500, 400, 300, 200, 100] // XP para 1º ao 5º lugar do ranking semanal
    }
  },

  // Sistema de atividade consecutiva (streak)
  streak: {
    requiredMessages: 100, // Mensagens necessárias por dia para manter streak
    maxDays: 7, // Número máximo de dias de streak
    maxMultiplier: 1.7, // Bônus máximo de 70% (1 + 0.7)
    multiplierPerDay: 0.1 // Aumento de 10% de bônus por dia de streak
  },

  // Configurações de XP e progressão de níveis
  xp: {
    levelMultiplier: 1.2, // Aumento de 20% de XP necessário por nível
    maxPerHour: 500, // Limite de XP que pode ser ganho por hora
    baseXP: {min: 1, max: 5}, // XP base por mensagem
    bonusXP: {
      10: {min: 11, max: 20}, // Bônus ao atingir 10 mensagens
      20: {min: 21, max: 30}, // Bônus ao atingir 20 mensagens
      30: {min: 31, max: 40} // Bônus ao atingir 30 mensagens
    },
    initialRequired: 500 // XP necessário para atingir o nível 1
},

  // Configurações de mensagens
  message: {
    minLength: 10, // Tamanho mínimo da mensagem para ser válida
    dailyGoal: 50 // Meta de mensagens diárias para o grupo
  },

  // Configurações do comando !daily
  daily: {
    minXP: 1, // Mínimo de XP recebido no comando daily
    maxXP: 50, // Máximo de XP recebido no comando daily
    cooldown: 24 // Horas de espera entre usos do comando
  },

  // Sistema de temas para patentes
  currentTheme: 'militar', // Tema padrão das patentes

  // Temas disponíveis e suas patentes
  themes: {
    militar: {
      name: 'Militar', // Tema militar (padrão)
      ranks: [ "Recruta", "Soldado", "Cabo", "3º Sargento", "2º Sargento", "1º Sargento", "Aspirante", "2º Tenente", "1º Tenente", "Capitão", "Major", "Tenente-Coronel", "Coronel", "General de Brigada", "General de Divisão", "General de Exército", "Marechal", "Comandante", "Comandante Supremo", "Guardião Supremo", "Mestre da Guerra", "Herói Nacional", "Campeão Supremo", "Protetor da Pátria", "Defensor Lendário", "Líder Épico", "Senhor das Batalhas", "Soberano Invicto", "Lenda Viva", "Imortal" ] // Lista de 30 patentes militares em ordem crescente
    },
    rpg: {
      name: 'RPG Fantasy',  // Tema de RPG medieval
      ranks: [ "Aprendiz", "Aventureiro", "Escudeiro", "Guerreiro", "Cavaleiro", "Paladino", "Guardião", "Campeão", "Herói", "Lenda", "Mestre", "Grão-Mestre", "Sábio", "Arquimago", "Lorde", "Grão-Lorde", "Arcano", "Místico", "Celestial", "Divino", "Transcendental", "Épico", "Mítico", "Lendário", "Ancestral", "Imortal", "Eterno", "Supremo", "Absoluto", "Divindade" ] // 30 classes de RPG em ordem de poder
    },
    anime: {
      name: 'Anime', // Tema baseado em anime ninja
      ranks: [ "Academy Student", "Genin", "Chunin", "Special Jonin", "Jonin", "ANBU", "Elite Jonin", "Sage", "Kage", "Supreme Kage", "Legendary Ninja", "Shadow Master", "Mystic Sage", "Elder Sage", "Divine Sage", "Chakra Lord", "Spirit Master", "Celestial Ninja", "Eternal Master", "God of Shinobi", "Ultimate Ninja", "Legendary Master", "Divine Emperor", "Immortal Sage", "Cosmic Ninja", "Universe Master", "Reality Bender", "Dimension Lord", "Eternal God", "Supreme Being" ] // 30 ranks ninja em ordem crescente
    },
    cyberpunk: {
      name: 'Cyberpunk', // Tema futurista
      ranks: [ "Script Kiddie", "Code Runner", "Data Miner", "Net Runner", "Cyber Jockey", "Grid Rider", "System Cracker", "Code Master", "Hack Master", "Digital Lord", "Network Ghost", "Cyber Phantom", "Grid Master", "System Lord", "Digital God", "Virtual Emperor", "Code Legend", "Matrix Master", "Cyber King", "Network God", "Digital Overlord", "System God", "Matrix Lord", "Cyber God", "Virtual Deity", "Digital Divinity", "Quantum Master", "Code Deity", "Digital Supreme", "Cyber Divine" ] // 30 classes hacker em ordem de habilidade
    }
  },

  // Números romanos para subníveis
  romanNumerals: ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X'] // Usados para mostrar progresso dentro de cada patente (ex: "Recruta III")
};

module.exports = ConfigsLevel;