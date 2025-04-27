const fs = require('fs');
module.exports = async (client, from, pushname, comando, prefix) => {
  client.sendMessage(from, {
    image: fs.readFileSync('./arquivos/imagens/menudono.jpg'),
    caption: `

   ──────────────
  👑Menu do Supremo👑
  ───────────────

╭━━━━━━━━━━━━━━━┓
 | 🥳 ${prefix}addvip
 | 🥹${prefix}rmvip
 | 🕳️${prefix}setnomedono
 | 🕳️${prefix}setnome
 | 🕳️${prefix}setprefix
 | 🤑️${prefix}addsaldo
 | 🤑${prefix}removeritemaot
 | ❤️‍🩹${prefix}nuker
 | 💡${prefix}rr (Reinicia bot)
 |       𝒅𝒆𝒔𝒆𝒏𝒗𝒐𝒍𝒗𝒆𝒏𝒅𝒐
╰━━━━━━━━━━━━━━━`
  })
}