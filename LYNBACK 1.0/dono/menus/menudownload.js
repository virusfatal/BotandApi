const fs = require('fs');

module.exports.menuCommand = (client, from, pushname, prefix, bot, dono, comando, responseTime, Criador) => {
  client.sendMessage(from, {
    image: fs.readFileSync('./arquivos/imagens/menu.jpg'),
    caption: `
   [👤 USUÁRIO: ${pushname}
   [★PREFIXO: ${prefix}
   [💎BOT: ${bot}
   [⚡ VELOCIDADE: ${responseTime.toFixed(3)}
   [💖 DONO: ${Criador}

┌──────────────
│✨❤️ Menu ❤️✨
└──────────────
╭━━━━━━━━━━━━━━━┓❀️💙
├❀️🔞 ${prefix}xvideos
├❀️▶️ ${prefix}playvd
├❀️▶️ ${prefix}play
├❀️✨ ${prefix}creditos ✨❀️
└━━━━━━━━━━━━━━━┘❀️💙
╰━━━━━━━━━━━━━━━┛💎❀️✨`
  });

  client.sendMessage(from, {
    audio: fs.readFileSync('./arquivos/audios/menu.mp3'),
    mimetype: 'audio/mpeg',
    ptt: true
  });
};