// configsGold.js
const configsGold = {
  // Configurações das armas básicas
  weapons: {
    fist: {
      name: "Soco",
      damage: 8,
      maxAmmo: 30,
      price: 0,
      ammoPrice: 0,
      canReload: false
    },
    revolver: {
      name: "Revólver .38",
      damage: 15,
      maxAmmo: 6,
      price: 500,
      ammoPrice: 100
    },
    pistol: {
      name: "Pistola 9mm",
      damage: 25,
      maxAmmo: 8,
      price: 1000,
      ammoPrice: 200
    },
    uzi: {
      name: "UZI",
      damage: 20,
      maxAmmo: 25,
      price: 2000,
      ammoPrice: 300
    },
    mp5: {
      name: "MP5",
      damage: 30,
      maxAmmo: 20,
      price: 3000,
      ammoPrice: 400
    },
    ak47: {
      name: "AK-47",
      damage: 40,
      maxAmmo: 15,
      price: 4500,
      ammoPrice: 500
    },
    scarl: {
      name: "Scar-L",
      damage: 45,
      maxAmmo: 12,
      price: 6000,
      ammoPrice: 600
    },
    m4a1: {
      name: "M4A1",
      damage: 50,
      maxAmmo: 10,
      price: 7500,
      ammoPrice: 700
    },
    awp: {
      name: "AWP",
      damage: 70,
      maxAmmo: 5,
      price: 8500,
      ammoPrice: 800
    },
    barrett: {
      name: "Barrett .50",
      damage: 100,
      maxAmmo: 3,
      price: 10000,
      ammoPrice: 1000
    }
  },

  // Configurações dos escudos básicos
  armors: {
    cardboard: {
      name: "Escudo de Papelão",
      defense: 15,          // Reduz 15% do dano
      durability: 100,      // Durabilidade base
      price: 300,
      repairPrice: 100
    },
    wood: {
      name: "Escudo de Madeira",
      defense: 25,          // Reduz 25% do dano
      durability: 100,
      price: 800,
      repairPrice: 200
    },
    light_steel: {
      name: "Escudo de Aço Leve",
      defense: 35,          // Reduz 35% do dano
      durability: 100,
      price: 1500,
      repairPrice: 300
    },
    basic_ballistic: {
      name: "Escudo Balístico Básico",
      defense: 45,          // Reduz 45% do dano
      durability: 100,
      price: 2500,
      repairPrice: 400
    },
    riot: {
      name: "Escudo Anti-Motim",
      defense: 50,          // Reduz 50% do dano
      durability: 100,
      price: 3500,
      repairPrice: 500
    },
    reinforced: {
      name: "Escudo Reforçado",
      defense: 55,          // Reduz 55% do dano
      durability: 100,
      price: 5000,
      repairPrice: 600
    },
    ceramic: {
      name: "Escudo de Cerâmica",
      defense: 57,          // Reduz 57% do dano
      durability: 100,
      price: 6500,
      repairPrice: 700
    },
    titanium: {
      name: "Escudo de Titânio",
      defense: 60,          // Reduz 60% do dano
      durability: 100,
      price: 8000,
      repairPrice: 800
    },
    composite: {
      name: "Escudo Composto",
      defense: 62,          // Reduz 62% do dano
      durability: 100,
      price: 9000,
      repairPrice: 900
    },
    graphene: {
      name: "Escudo de Grafeno",
      defense: 64,          // Reduz 64% do dano
      durability: 100,
      price: 10000,
      repairPrice: 1000
    }
},

  dungeon: {
    // Configurações gerais do sistema
    configs: {
      maxRunsDiarias: 5,
      custoEntrada: 100, // Gold necessário para entrar
      chanceDropExtra: 10, // % de chance de drop duplo
      multiplicadorGold: 2, // Gold ganho = nivel * multiplicador
    },

    // Monstros e suas características
    monstros: {
      // Dungeon 1 - Iniciante
      slime: {
        nivel: 1,
        nome: "Slime Comum",
        hp: 50,
        dano: 10,
        dificuldade: "Fácil",
        recompensaBase: 50,
        drops: {
          essencia_slime: {
            nome: "Essência de Slime",
            chance: 70,
            raridade: "Comum",
            descricao: "Uma essência básica usada em craftings iniciantes"
          },
          gosma_verde: {
            nome: "Gosma Verde",
            chance: 45,
            raridade: "Comum",
            descricao: "Material básico de crafting"
          }
        }
      },

      // Dungeon 2 - Floresta
      goblin: {
        nivel: 2,
        nome: "Goblin Saqueador",
        hp: 80,
        dano: 15,
        dificuldade: "Fácil-Médio",
        recompensaBase: 100,
        drops: {
          presa_goblin: {
            nome: "Presa de Goblin",
            chance: 60,
            raridade: "Comum",
            descricao: "Dentes afiados de goblin"
          },
          couro_goblin: {
            nome: "Couro de Goblin",
            chance: 40,
            raridade: "Incomum",
            descricao: "Couro resistente usado em armaduras"
          }
        }
      },

      // Dungeon 3 - Caverna
      orc: {
        nivel: 3,
        nome: "Orc Guerreiro",
        hp: 120,
        dano: 25,
        dificuldade: "Médio",
        recompensaBase: 150,
        drops: {
          machado_ferro: {
            nome: "Machado de Ferro Usado",
            chance: 35,
            raridade: "Incomum",
            descricao: "Arma básica para crafting"
          },
          couro_orc: {
            nome: "Couro de Orc",
            chance: 50,
            raridade: "Incomum",
            descricao: "Couro resistente e valioso"
          }
        }
      },

      // Dungeon 4 - Cripta
      esqueleto: {
        nivel: 4,
        nome: "Esqueleto Ancestral",
        hp: 150,
        dano: 30,
        dificuldade: "Médio-Difícil",
        recompensaBase: 200,
        drops: {
          osso_anciao: {
            nome: "Osso Ancestral",
            chance: 40,
            raridade: "Raro",
            descricao: "Ossos com poder mágico residual"
          },
          armadura_antiga: {
            nome: "Fragmentos de Armadura",
            chance: 30,
            raridade: "Raro",
            descricao: "Restos de uma antiga armadura mágica"
          }
        }
      },

      // Dungeon 5 - Torre Mágica
      mago_corrompido: {
        nivel: 5,
        nome: "Mago Corrompido",
        hp: 200,
        dano: 40,
        dificuldade: "Difícil",
        requerArmaEspecial: true,
        recompensaBase: 300,
        drops: {
          cristal_magico: {
            nome: "Cristal Mágico",
            chance: 25,
            raridade: "Muito Raro",
            descricao: "Cristal pulsante com energia mágica"
          },
          grimorio: {
            nome: "Grimório Corrompido",
            chance: 20,
            raridade: "Muito Raro",
            descricao: "Livro antigo com magias proibidas"
          }
        }
      },

      // Dungeon 6 - Montanha Sagrada
      golem: {
        nivel: 6,
        nome: "Golem Ancestral",
        hp: 250,
        dano: 45,
        dificuldade: "Difícil",
        requerArmaEspecial: true,
        recompensaBase: 400,
        drops: {
          nucleo_golem: {
            nome: "Núcleo do Golem",
            chance: 20,
            raridade: "Muito Raro",
            descricao: "O coração energético de um golem"
          },
          metal_elemental: {
            nome: "Metal Elemental",
            chance: 15,
            raridade: "Muito Raro",
            descricao: "Metal raro imbuído com poder elemental"
          }
        }
      },

      // Dungeon 7 - Portal Demoníaco
      demonio: {
        nivel: 7,
        nome: "Demônio Superior",
        hp: 300,
        dano: 50,
        dificuldade: "Muito Difícil",
        requerArmaEspecial: true,
        recompensaBase: 500,
        drops: {
          essencia_demoniaca: {
            nome: "Essência Demoníaca",
            chance: 15,
            raridade: "Épico",
            descricao: "Essência pura de poder demoníaco"
          },
          cristal_sangue: {
            nome: "Cristal de Sangue",
            chance: 12,
            raridade: "Épico",
            descricao: "Cristal raro formado por sangue demoníaco"
          }
        }
      },

      // Dungeon 8 - Covil do Dragão
      dragao: {
        nivel: 8,
        nome: "Dragão Ancião",
        hp: 400,
        dano: 60,
        dificuldade: "Extremo",
        requerArmaEspecial: true,
        recompensaBase: 1000,
        drops: {
          escama_dragao: {
            nome: "Escama de Dragão",
            chance: 15,
            raridade: "Lendário",
            descricao: "Escama indestrutível de dragão ancião"
          },
          pedra_alma: {
            nome: "Pedra da Alma",
            chance: 10,
            raridade: "Lendário",
            descricao: "Pedra mística com poder imenso"
          }
        }
      },
      
      // Dungeon 9 - Reino Celestial
celestial_guardian: {
    nivel: 9,
    nome: "Guardião Celestial",
    hp: 500,
    dano: 70,
    dificuldade: "Extremo",
    requerArmaEspecial: true,
    recompensaBase: 1500,
    drops: {
        essencia_primordial: {
            nome: "Essência Primordial",
            chance: 10,
            raridade: "Lendário",
            descricao: "Essência do poder original"
        },
    }
},

// Dungeon 10 - Trono Divino
divine_lord: {
    nivel: 10,
    nome: "Lorde Divino",
    hp: 600,
    dano: 80,
    dificuldade: "Divino",
    requerArmaEspecial: true,
    recompensaBase: 2000,
    drops: {
        essencia_divina: {
            nome: "Essência Divina",
            chance: 8,
            raridade: "Mítico",
            descricao: "Essência do poder supremo"
        },
    }
}
    },

    // Drops comuns que podem aparecer em qualquer dungeon
    dropsComuns: {
      metal_comum: {
        nome: "Metal Comum",
        chance: 30,
        raridade: "Comum",
        descricao: "Metal básico para crafting"
      },
      cristal_menor: {
        nome: "Cristal Menor",
        chance: 25,
        raridade: "Comum",
        descricao: "Pequeno cristal com energia"
      },
      erva_comum: {
        nome: "Erva Comum",
        chance: 35,
        raridade: "Comum",
        descricao: "Erva medicinal básica"
      }
    },

    // Configuração de drops por nível
    drops: {
    // Dungeon 4 - Primeira chance de drops especiais
    4: [
        { 
            id: 'essencia_basica', 
            nome: 'Essência Básica', 
            raridade: 'comum',      // Corrigido para minúsculo
            chance: 35,
            descricao: 'Essência mágica básica usada em craftings iniciantes'
        },
        { 
            id: 'cristal_poder', 
            nome: 'Cristal de Poder', 
            raridade: 'incomum',    // Corrigido para minúsculo
            chance: 25,
            descricao: 'Cristal com energia concentrada'
        },
        { 
            id: 'fragmento_metal', 
            nome: 'Fragmento de Metal', 
            raridade: 'incomum',    // Corrigido para minúsculo
            chance: 20,
            descricao: 'Metal resistente para forjar armas'
        }
    ],

    // Dungeon 5 
    5: [
        { 
            id: 'essencia_energia', 
            nome: 'Essência de Energia', 
            raridade: 'raro',       // Corrigido para minúsculo
            chance: 20,
            descricao: 'Essência pura de energia mágica'
        },
        { 
            id: 'nucleo_magico', 
            nome: 'Núcleo Mágico', 
            raridade: 'raro',       // Corrigido para minúsculo
            chance: 15,
            descricao: 'Núcleo pulsante de poder mágico'
        },
        { 
            id: 'metal_encantado', 
            nome: 'Metal Encantado', 
            raridade: 'raro',       // Corrigido para minúsculo
            chance: 15,
            descricao: 'Metal imbuído com magia'
        }
    ],

    // Dungeon 6
    6: [
        { 
            id: 'essencia_elemental', 
            nome: 'Essência Elemental', 
            raridade: 'epico',      // Corrigido para minúsculo
            chance: 18,
            descricao: 'Essência dos elementos primordiais'
        },
        { 
            id: 'cristal_perfeito', 
            nome: 'Cristal Perfeito', 
            raridade: 'epico',      // Corrigido para minúsculo
            chance: 15,
            descricao: 'Cristal de pureza excepcional'
        },
        { 
            id: 'metal_ancestral', 
            nome: 'Metal Ancestral', 
            raridade: 'epico',      // Corrigido para minúsculo
            chance: 12,
            descricao: 'Metal forjado por antigas civilizações'
        }
    ],

    // Dungeon 7
    7: [
        { 
            id: 'essencia_corrupta', 
            nome: 'Essência Corrupta', 
            raridade: 'epico',      // Corrigido para minúsculo
            chance: 15,
            descricao: 'Essência de poder corrompido'
        },
        { 
            id: 'cristal_alma', 
            nome: 'Cristal da Alma', 
            raridade: 'epico',      // Corrigido para minúsculo
            chance: 12,
            descricao: 'Cristal que captura essências vitais'
        },
        { 
            id: 'metal_dimensional', 
            nome: 'Metal Dimensional', 
            raridade: 'epico',      // Corrigido para minúsculo
            chance: 10,
            descricao: 'Metal de outra dimensão'
        }
    ],

    // Dungeon 8
    8: [
        { 
            id: 'essencia_dragao', 
            nome: 'Essência de Dragão', 
            raridade: 'lendario',   // Corrigido para minúsculo
            chance: 12,
            descricao: 'Essência do poder dracônico'
        },
        { 
            id: 'cristal_eterno', 
            nome: 'Cristal Eterno', 
            raridade: 'lendario',   // Corrigido para minúsculo
            chance: 10,
            descricao: 'Cristal de poder eterno'
        },
        { 
            id: 'escama_dragao', 
            nome: 'Escama de Dragão', 
            raridade: 'lendario',   // Corrigido para minúsculo
            chance: 8,
            descricao: 'Escama indestrutível de dragão'
        }
    ],

    // Dungeon 9
    9: [
        { 
            id: 'essencia_primordial', 
            nome: 'Essência Primordial', 
            raridade: 'lendario',   // Corrigido para minúsculo
            chance: 10,
            descricao: 'Essência do poder original'
        },
        { 
            id: 'cristal_divino', 
            nome: 'Cristal Divino', 
            raridade: 'lendario',   // Corrigido para minúsculo
            chance: 8,
            descricao: 'Cristal de poder divino'
        },
        { 
            id: 'metal_celestial', 
            nome: 'Metal Celestial', 
            raridade: 'lendario',   // Corrigido para minúsculo
            chance: 7,
            descricao: 'Metal forjado pelos deuses'
        }
    ],

    // Dungeon 10
    10: [
        { 
            id: 'essencia_divina', 
            nome: 'Essência Divina', 
            raridade: 'mitico',     // Corrigido para minúsculo
            chance: 8,
            descricao: 'Essência do poder supremo'
        },
        { 
            id: 'pedra_filosofal', 
            nome: 'Pedra Filosofal', 
            raridade: 'mitico',     // Corrigido para minúsculo
            chance: 7,
            descricao: 'A lendária pedra da criação'
        },
        { 
            id: 'metal_divino', 
            nome: 'Metal Divino', 
            raridade: 'mitico',     // Corrigido para minúsculo
            chance: 5,
            descricao: 'O metal mais raro e poderoso'
        }
    ]
},

    // Sistema de raridade e suas cores
    raridades: {
      comum: {
        nome: "Comum",
        cor: "⚪",
        emoji: "⚪",
        chance: 70,
        multiplicador: 1
      },
      incomum: {
        nome: "Incomum",
        cor: "🟢",
        emoji: "🟢",
        chance: 50,
        multiplicador: 1.5
      },
      raro: {
        nome: "Raro",
        cor: "🔵",
        emoji: "🔵",
        chance: 30,
        multiplicador: 2
      },
      epico: {
        nome: "Épico",
        cor: "🟣",
        emoji: "🟣",
        chance: 20,
        multiplicador: 2.5
      },
      lendario: {
        nome: "Lendário",
        cor: "🟡",
        emoji: "🟡",
        chance: 10,
        multiplicador: 3
      },
      mitico: {
        nome: "Mítico",
        cor: "🔴",
        emoji: "🔴",
        chance: 5,
        multiplicador: 4
      }
    }
  },
  
  forge: {
    // Configurações gerais do sistema de forja
    configs: {
        chanceFalha: 15, // 15% de chance base de falha
        maxTentativasDiarias: 3,
        custoForjar: 1000, // Custo em Gold para tentar forjar
        xpPorSucesso: 15,    // XP ganho quando tem sucesso
    xpPorFalha: 5,       // XP ganho quando falha
        reducaoFalhaPorNivel: 1, // Redução de % de falha por nível
        maxReducaoFalha: 10, // Máximo de redução de falha (%)
    },

    // Armas Especiais
    weapons: {
        thunder_blade: {
            name: "Thunder Blade",
            type: "weapon",
            damage: 85,
            maxAmmo: 12,
            effect: {
                type: "double_attack",
                chance: 15,
                description: "15% chance de ataque duplo"
            },
            materials: {
                essencia_basica: 5, // Dungeon 4
                cristal_poder: 3,   // Dungeon 4
                fragmento_metal: 2  // Dungeon 4
            },
            minDungeonLevel: 4,
            description: "Uma lâmina energizada com poder do trovão."
        },
        soul_reaper: {
            name: "Soul Reaper",
            type: "weapon",
            damage: 100,
            maxAmmo: 8,
            effect: {
                type: "gold_steal",
                chance: 20,
                multiplier: 1.5,
                description: "20% chance de roubar +50% gold"
            },
            materials: {
                essencia_energia: 3,    // Dungeon 5
                nucleo_magico: 2,       // Dungeon 5
                metal_encantado: 2      // Dungeon 5
            },
            minDungeonLevel: 5,
            requires: "thunder_blade",
            description: "Uma foice que rouba a essência vital dos inimigos."
        },
        dragon_slayer: {
            name: "Dragon Slayer",
            type: "weapon",
            damage: 120,
            maxAmmo: 6,
            effect: {
                type: "shield_break",
                chance: 25,
                description: "25% chance de ignorar escudo"
            },
            materials: {
                essencia_elemental: 2,  // Dungeon 6
                cristal_perfeito: 2,    // Dungeon 6
                metal_ancestral: 3      // Dungeon 6
            },
            minDungeonLevel: 6,
            requires: "soul_reaper",
            description: "Uma espada lendária capaz de penetrar qualquer defesa."
        },
        demon_hunter: {
            name: "Demon Hunter",
            type: "weapon",
            damage: 150,
            maxAmmo: 4,
            effect: {
                type: "stacking_damage",
                bonus: 10,
                maxStacks: 3,
                description: "Dano aumenta 10% a cada acerto (máx: 3 stacks)"
            },
            materials: {
                essencia_corrupta: 3,   // Dungeon 7
                cristal_alma: 2,        // Dungeon 7
                metal_dimensional: 2     // Dungeon 7
            },
            minDungeonLevel: 7,
            requires: "dragon_slayer",
            description: "Uma arma que se fortalece com o calor da batalha."
        },
        god_killer: {
            name: "God Killer",
            type: "weapon",
            damage: 200,
            maxAmmo: 3,
            effect: {
                type: "instant_kill",
                chance: 10,
                description: "10% chance de matar instantaneamente"
            },
            materials: {
                essencia_dragao: 3,     // Dungeon 8
                cristal_eterno: 2,      // Dungeon 8
                escama_dragao: 2        // Dungeon 8
            },
            minDungeonLevel: 8,
            requires: "demon_hunter",
            description: "A arma definitiva, capaz de derrotar até mesmo deuses."
        }
    },

    // Escudos Especiais
    armors: {
    reflection_shield: {
        name: "Shield of Reflection",
        type: "armor",
        defense: 65,         // Reduz 65% do dano
        durability: 100,     // Durabilidade base
        effect: {
            type: "reflect_damage",
            chance: 15,      // 15% de chance
            damage: 30,      // Reflete 30% do dano
            description: "15% de chance de refletir 30% do dano recebido"
        },
        materials: {
            essencia_basica: 5,     // Dungeon 4
            cristal_poder: 3,       // Dungeon 4
            fragmento_metal: 2      // Dungeon 4
        },
        minDungeonLevel: 4,
        description: "Um escudo encantado capaz de refletir ataques inimigos."
    },
    soul_barrier: {
        name: "Soul Barrier",
        type: "armor",
        defense: 75,         // Reduz 75% do dano
        durability: 100,     // Durabilidade base
        effect: {
            type: "gold_convert",
            chance: 20,
            conversion: 30,
            description: "20% de chance de converter 30% do dano em gold"
        },
        materials: {
            essencia_energia: 3,    // Dungeon 5
            nucleo_magico: 2,       // Dungeon 5
            metal_encantado: 2      // Dungeon 5
        },
        minDungeonLevel: 5,
        requires: "reflection_shield",
        description: "Um escudo místico que transforma dano em riqueza."
    },
    dragon_scale: {
        name: "Dragon Scale",
        type: "armor",
        defense: 85,         // Reduz 85% do dano
        durability: 100,     // Durabilidade base
        effect: {
            type: "first_hit_immune",
            daily: true,
            description: "Imune ao primeiro ataque do dia"
        },
        materials: {
            essencia_elemental: 2,  // Dungeon 6
            cristal_perfeito: 2,    // Dungeon 6
            metal_ancestral: 3      // Dungeon 6
        },
        minDungeonLevel: 6,
        requires: "soul_barrier",
        description: "Escudo forjado com escamas impenetráveis de dragão."
    },
    demon_wall: {
        name: "Demon Wall",
        type: "armor",
        defense: 90,         // Reduz 90% do dano
        durability: 100,     // Durabilidade base
        effect: {
            type: "perfect_block",
            interval: 3,     // A cada 3 hits
            description: "Bloqueia 100% do dano uma vez a cada 3 hits"
        },
        materials: {
            essencia_corrupta: 3,   // Dungeon 7
            cristal_alma: 2,        // Dungeon 7
            metal_dimensional: 2     // Dungeon 7
        },
        minDungeonLevel: 7,
        requires: "dragon_scale",
        description: "Uma barreira demoníaca quase impenetrável."
    },
    gods_protection: {
        name: "God's Protection",
        type: "armor",
        defense: 95,         // Reduz 95% do dano
        durability: 100,     // Durabilidade base
        effect: {
            type: "counter_attack",
            chance: 20,
            damage: 50,
            description: "20% de chance de contra-atacar com 50% do dano bloqueado"
        },
        materials: {
            essencia_dragao: 3,     // Dungeon 8
            cristal_eterno: 2,      // Dungeon 8
            escama_dragao: 2        // Dungeon 8
        },
        minDungeonLevel: 8,
        requires: "demon_wall",
        description: "O escudo definitivo, abençoado pelos próprios deuses."
    }
}
},

  // Configurações gerais do sistema
  settings: {
    // Configurações de Combate
    maxDailyAmmoRefills: 3,
    maxDeathCount: 10,
    durabilityLossPerDamage: 10,

    // Dano e Multiplicadores
    noShieldDamageMultiplier: 1.5,     // Multiplicador de dano contra alvo sem escudo
    fistNoShieldDamageMultiplier: 3.0,  // Multiplicador de dano do soco contra alvo sem escudo
    stealMultiplier: 2,                 // Multiplicador para cálculo de gold roubado

    // Limites de Roubo
    minDamageForSteal: 20,             // Dano mínimo para roubar com escudo
    minDamageForStealNoShield: 12,     // Dano mínimo para roubar sem escudo
    maxGoldSteal: 500,                 // Máximo de gold que pode ser roubado

    // Sistema de Vingança
    revengeDamageBonus: 1.2,
    markedBonus: 50,
    markedChance: 10,

    // Sistema de Morte
    maxDailyRobbed: 10,                // Limite de vezes que pode ser roubado
    maxDailyRobbedWithKit: 15,         // Limite com kit médico
    equipmentLossChance: 15,           // Chance de perder equipamento ao morrer
    
    // Itens e Kits
    maxCachaca: 3,
    cachacaPrice: 50,
    maxCachacaBuyDay: 10,
    repairKitDurability: 100,
    kitMedicoDamageReduction: 0.3,     // Redução de dano quando usa kit médico

    // Falhas de Roubo
    failedRobberyEscapeChance: 60,     // Chance de escapar sem perder gold
    goldLossMinPercent: 20,            // % mínima de perda em roubo falho
    goldLossMaxPercent: 40             // % máxima de perda em roubo falho
},

  specialItems: {
    medkit: {
      name: "Kit Médico",
      price: 1000,
      maxQuantity: 1,
      description: "Aumenta o limite de ataques sofridos de 10 para 15",
      effect: "Permite aguentar 5 ataques adicionais antes de morrer"
    },
    repairkit: {
      name: "Kit de Reparo",
      price: 800,
      maxQuantity: 1,
      description: "Repara automaticamente o escudo quando quebrado",
      effect: "Restaura 100 de durabilidade quando o escudo quebra"
    }
  },

  // Mensagens do sistema
  messages: {
    insufficientGold: "Gold insuficiente! Você precisa de",
    maxAmmoRefills: "Você atingiu o limite diário de recargas!",
    weaponRequired: "Você precisa ter uma arma para fazer isso!",
    deadPlayer: "Este jogador está morto e renascerá amanhã!",
    alreadyOwned: "Você já possui este item!",
    successBuy: "Compra realizada com sucesso!",
    markedBonus: "🎯 Bônus de dano contra alvo marcado! (+50%)"
  }
};

module.exports = configsGold;