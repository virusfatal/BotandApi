const fs = require('fs');
module.exports = async (client, from, pushname, comando, prefix) => {
  client.sendMessage(from, {
    image: fs.readFileSync('./arquivos/imagens/menu18.jpg'),
    caption: `
╔═══════•°• 🔞 •°•══════╗
║      𝗠𝗘𝗡𝗨 +𝟭𝟴 𝗩𝗜𝗣     
╚═══════════════════════╝

╭⋅–––––––––––––––––––––⋅╮
│  🔥 ${prefix}neter
│  🔥 ${prefix}vita
│  🔥 ${prefix}egrilvideo
│  🔥 ${prefix}egril
│  🔥 ${prefix}carnie
│  🔥 ${prefix}xv (pesquisa)
│  🔥 ${prefix}dxv (numero escolhido)
╰⋅–––––––––––––––––––––⋅╯

╔════════•°• 🌎 •°•═════╗
║   𝗠𝗘𝗡𝗨 𝗣𝗨́𝗕𝗟𝗜𝗖𝗢 (+𝟭𝟴)  
╚═══════════════════════╝
╭⋅–––––––––––––––––––––⋅╮
│  🌐 ${prefix}xvideos (pesquisa)
│  🌐 ${prefix}neko
│  🌐 ${prefix}ass
│  🌐 ${prefix}gangbang Defeito
│  🌐 ${prefix}kasedaiki
│  🌐 ${prefix}hentai
│  🌐 ${prefix}loli defeito
│  🌐 ${prefix}trap
╰⋅–––––––––––––––––––––⋅╯
`
  })
}