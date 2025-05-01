const fs = require('fs');

module.exports.menuCommand = (client, from, pushname, prefix, bot, dono, comando, responseTime, Criador) => {
  client.sendMessage(from, {
    image: fs.readFileSync('./arquivos/imagens/menu.jpg'),
    caption: `
🌸 *𝗠 𝗘 𝗡 𝗨  𝗣 𝗥 𝗜 𝗡 𝗖 𝗜 𝗣 𝗔 𝗟* 🌸

┏━━━━━━━━◈🌙◈━━━━━━━━┓
   👤 ${pushname}
   ⚡ ${responseTime.toFixed(3)}s
   💌 Prefixo: ${prefix}
   👑 Dono: ${Criador}
┗━━━━━━━━◈🌿◈━━━━━━━━┛

╔═══════⋆⋅☆⋅⋆═══════╗
┃  📡 ${prefix}ping
┃  📥 ${prefix}menubrincar
┃  🔐 ${prefix}menuadm
┃  🔞 ${prefix}menu+18
┃  👑 ${prefix}menudono
┃  💫 ${prefix}creditos
╚═══════⋆⋅☆⋅⋆═══════╝

🎐 *𝗖 𝗼 𝗺 𝗮 𝗻 𝗱 𝗼 𝘀  𝗗 𝗶 𝘃 𝗲 𝗿 𝘀 𝗼 𝘀* 🎐
┌───────────⊰✦⊱───────────┐
│ 🖼️ ${prefix}sticker
│ 🖼️ ${prefix}toimg
│ 🌤️ ${prefix}noticias [pesquisa]
│ 💡 ${prefix}sugestao [sugestão]
└───────────⊰❀⊱───────────┘

🎌 *𝗦 𝘂 𝗯 𝗺 𝗲 𝗻 𝘂  𝗢 𝘁 𝗮 𝗸 𝘂* 🎐ᵈᵉˢᵉⁿᵛᵒˡᵛᵉⁿᵈᵒ
┌───────────⊰✦⊱───────────┐
│ 🔍 ${prefix}pesquisa [manga]
│ ⬇️ ${prefix}baixar [manga]
└───────────⊰❀⊱───────────┘

🌌 *Bot:* ${bot}
⏰ ${new Date().toLocaleTimeString()}
`
  });

  client.sendMessage(from, {
    audio: fs.readFileSync('./arquivos/audios/menu.mp3'),
    mimetype: 'audio/mpeg',
    ptt: true
  });
};