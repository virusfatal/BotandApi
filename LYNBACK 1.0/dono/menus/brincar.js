const fs = require('fs');

module.exports.brincarMenu = async (client, from, pushname, prefix, comando, args, isGroup, isGroupAdmins, enviar, reagir, esperar) => {
  if (!isGroup) {
    return enviar(`*🛑 ${pushname}, este comando só funciona em grupos!*`);
  }

  try {
    // Animações de reação
    reagir("🎭");
    await esperar(800);
    reagir("✨");
    await esperar(800);
    reagir("🎉");

    await client.sendMessage(from, {
      image: fs.readFileSync('./arquivos/imagens/menuadm.jpg'),
      caption: `
▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃
   🌟🎪 *MENU BRINCADEIRAS* 🎪🌟
▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃

╔════•ೋೋ•════╗
  🧩 *COMANDOS DIVERTIDOS* 🧩
╚════•ೋೋ•════╝

┌───────────────
│  🎯 ${prefix}brincar » Para ativar
│  👋 ${prefix}tapa [@] » Bater em alguém
│  😂 ${prefix}corno » revelar corno do dia
│  🎲 ${prefix}dado » Jogar dados
│  🎭 ${prefix}rankbebado » Descobrir os mais bebum do grupo
│  💘 ${prefix}casal » Descobrir casal perfeito
│  💰 ${prefix}rankfake » Descobrir falsos ricos
│  🐄 ${prefix}rankgado » Descobrir gados
│  🪵 ${prefix}rankpau » Descobrir os pauzudos
└───────────────

▹▹▹▹▹▹▹▹▹▹▹▹▹▹▹▹▹
  🔞 *COMANDOS +18* 🔞
◃◃◃◃◃◃◃◃◃◃◃◃◃◃◃◃

┌───────────────
│  💋 ${prefix}beijo [@] » Beijar alguém
└───────────────

▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
   📍 *Usuário:* ${pushname}
   ⚠️ Use com moderação!
▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀`
    });

  } catch (err) {
    console.error('Erro no menu brincadeiras:', err);
    enviar('❌ Falha ao exibir o menu de brincadeiras');
  }
};