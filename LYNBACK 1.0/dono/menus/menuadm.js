const fs = require('fs');

module.exports.menuadmCommand = async (client, from, pushname, prefix, comando, args, isGroup, isGroupAdmins, enviar, reagir, esperar, bot) => {
  if (!isGroup) {
    return enviar(`*Olá ${args[0]} Mais esse comando só pode ser usado em grupo*`);
  }
  
  if (!isGroupAdmins) {
    return enviar(`Olá ${args[0]} você precisa ser um administrador para usar esse comando`);
  }

  reagir("👑");

  client.sendMessage(from, {
    image: fs.readFileSync('./arquivos/imagens/menuadm.jpg'),
caption: `
🔮 *MENU DE ADMINISTRAÇÃO* 🔮

┏━━━━━━━━━━◥◣✦◢◤━━━━━━━━━━┓
   👑 *USUÁRIO:* ${pushname}
┗━━━━━━━━━━◢◤✦◥◣━━━━━━━━━━┛

╔════════✦❘༻༺❘✦════════╗
┃ 🌟 ${prefix}ban [@]       
┃ 🔞 ${prefix}18 [1/0]     
┃ 🎭 ${prefix}brincar [1/0]
┃ 🎮 ${prefix}rpg [1/0]    
┃ 🖼️ ${prefix}antiimg [1/0]
┃ 🖼️ ${prefix}antiimg2 [1/0]
┃ 🌉 ${prefix}antisticker [1/0]
┃ 🌉 ${prefix}antisticker2 [1/0]
┃ 🧼 ${prefix}limpar       
┃ 🔑 ${prefix}abrir
┃ 🔒 ${prefix}fechar              
╚════════✦❘༻༺❘✦════════╝

📛 *Legenda:*
[1] = Ativar  |  [0] = Desativar
✦◢◣◥◤✦◢◣◥◤✦◢◣◥◤✦
💎 *Bot:* ${bot}
🕒 ${new Date().toLocaleTimeString()}
`
  });
};