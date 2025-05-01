const fs = require('fs');

module.exports.brincarMenu = async (client, from, pushname, prefix, comando, args, isGroup, isGroupAdmins, enviar, reagir, esperar, isBrincar) => {
  if (!isGroup) {
    return enviar(`*🛑 ${pushname}, este comando só funciona em grupos!*`);
  }

  try {
    // Animações de reação
    reagir("🎭");
    await esperar(800);
    reagir("🎉");

    await client.sendMessage(from, {
      image: fs.readFileSync('./arquivos/imagens/menuadm.jpg'),
caption:`
▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
 📍 *Usuário:* ${pushname}
 ⚠️ *Total de Comandos:* 57
✨ *Modo Brincadeira:* ${isBrincar(from) ? '✅ ATIVO' : '❌ DESATIVADO'}
▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰
          🎪 *MENU BRINCADEIRAS* 🎠
▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰

╔═══❖•°🎲°•❖═══╗
   🎭 *COMANDOS GERAIS* 🎯
╚═══❖•°🎲°•❖═══╝

┌──────────────────────────────
│  🌟 ${prefix}brincar [1/0] » Ativa/Desativa modo zoeira
│  🎲 ${prefix}dado » Rola um dado virtual
│  🤣 ${prefix}corno » Revela o corno do dia
│  💘 ${prefix}casal » Combinação perfeita do grupo
│  🎯 ${prefix}escolher [op1/op2] » Escolhe aleatoriamente
│  🌀 ${prefix}roleta » Roleta russa virtual
│  📊 ${prefix}verdade » Verdade constrangedora
│  🤢 ${prefix}vomitar [@] » Ação nojenta
│  🏃♂️ ${prefix}fugir » Fuga épica
└──────────────────────────────

╔═══❖•°📊°•❖═══╗
   🔮 *TESTES & PORCENTAGENS* 📌
╚═══❖•°📊°•❖═══╝

┌──────────────────────────────
│  🌈 ${prefix}gay [@] » Teste de rainbow
│  👫 ${prefix}hetero [@] » Nível de heteronormatividade
│  ✨ ${prefix}lindo/@linda [@] » Índice de beleza
│  👹 ${prefix}feio [@] » Nível de horripilância
│  💀 ${prefix}nazista [@] » Compatibilidade neonazi
│  🐂 ${prefix}corno [@] » Medidor de chifres
│  👀 ${prefix}vesgo [@] » Grau de estrabismo
│  🤠 ${prefix}gado [@] » Nível de gaiagem
│  💎 ${prefix}rico/@pobre [@] » Status financeiro
│  🧪 ${prefix}noia [@] » Taxa de adrenalina
└──────────────────────────────

╔═══❖•°🏆°•❖═══╗
   📊 *RANKINGS DIVERTIDOS* 📈
╚═══❖•°🏆°•❖═══╝

┌──────────────────────────────
│  💰 ${prefix}rankfake » Falsos ricos
│  🐄 ${prefix}rankgado » Maiores gados
│  🍷 ${prefix}rankbebado » Bebuns do grupo
│  🪵 ${prefix}rankpau » Os mais dotados
│  🍑 ${prefix}rankbct » Top mulheres
│  ☕ ${prefix}rankcafe » Viciados em café
│  🧠 ${prefix}rankqi » Inteligência fake
│  🤪 ${prefix}rankloko » Nível de loucura
│  🍔 ${prefix}rankcomida » Comilões do chat
│  🏁 ${prefix}rankcorrida » Velocistas do grupo
│  🤓 ${prefix}ranknerd » Top nerds
│  🤥 ${prefix}rankmentira » Mestres da mentira
│  😴 ${prefix}rankdorme » Dorminhocos
│  🗣️ ${prefix}rankfofoca » Fofoqueiros
│  σ ${prefix}ranksigma » Líderes sigma
└──────────────────────────────

╔═══❖•°🌪️°•❖═══╗
   🎇 *AÇÕES MALUCAS* 💥
╚═══❖•°🌪️°•❖═══╝

┌──────────────────────────────
│  👊 ${prefix}socar [@] » Soco potente
│  ☠️ ${prefix}matar [@] » Eliminação épica
│  💋 ${prefix}beijo [@] » Teste de química
│  🖐️ ${prefix}tapa [@] » Tapa sonoro
│  🤗 ${prefix}abraco [@] » Abraço apertado
│  ✌️ ${prefix}bro [@] » Cumprimento entre brothers
│  💍 ${prefix}namoracomigo [@] » Pedido de namoro
│  👰 ${prefix}casacomigo [@] » Proposta de casamento
│  👟 ${prefix}chute [@] » Chute no traseiro
│  🎣 ${prefix}trap [@] » Armadilha secreta
│  🍑 ${prefix}bafo » Verifica o hálito
│  🚨 ${prefix}fakereport » Fake report engraçado
└──────────────────────────────

╔═══❖•°🔞°•❖═══╗
   🌶️ *COMANDOS +18* 🚫
╚═══❖•°🔞°•❖═══╝

┌──────────────────────────────
│  🔥 ${prefix}gostoso/@gostosa [@] » Nível de sensualidade
│  🍆 ${prefix}pau/@pocoto [@] » Medidor de cavalidade
│  🌸 ${prefix}buceta [@] » Avaliação íntima
│  🚫 ${prefix}puta [@] » Índice de taradice
│  👴 ${prefix}calvo [@] » Taxa de careca
│  😈 ${prefix}estuprar [@] » Ação proibida
│  🤮 ${prefix}rankfeio » Mais feios
│  👃 ${prefix}rankcheiro » Fedidos do grupo
│  🔞 ${prefix}rankputaria » Tarados do grupo
└──────────────────────────────`
    });

  } catch (err) {
    console.error('Erro no menu brincadeiras:', err);
    enviar('❌ Falha ao exibir o menu de brincadeiras');
  }
};