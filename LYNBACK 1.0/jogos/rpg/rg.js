const { loadAOTData } = require('../../dono/rpg'); // Ajuste o caminho conforme necessário

module.exports = async (client, from, info, prefix, isGroup, isGroupAdmins, enviar) => {
    // Verificações iniciais
    if (!isGroup) return enviar('⚠️ Este comando só funciona em grupos!');
    
    try {
        const groupMetadata = await client.groupMetadata(from);
        return await handleAOTList(client, from, info, prefix, groupMetadata, enviar);
    } catch (error) {
        console.error('Erro na listagem AOT:', error);
        return enviar('❌ Ocorreu um erro ao gerar a lista de participantes');
    }
};

async function handleAOTList(client, from, info, prefix, groupMetadata, enviar) {
    const aotData = loadAOTData();
    const isRpgEnabled = require('../../dono/configGP.json')[from]?.rpg; // Ajuste o caminho
    
    if (!isRpgEnabled) {
        return enviar('❌ *Este comando requer o modo RPG ativado!*\n' +
                     `👉 Peça a um admin usar *${prefix}rpg 1*`);
    }

    const groupName = groupMetadata.subject || 'Grupo Desconhecido';
    const participantes = groupMetadata.participants;

    // Filtra e mapeia membros
    const membros = Object.entries(aotData)
        .filter(([userId]) => 
            !aotData.blocked?.includes(userId) &&
            participantes.some(p => p.id === userId)
        )
        .map(createMemberEntry);

    if (membros.length === 0) {
        return enviar(`🏰 *${groupName}*\n\nNenhum soldado alistado na Legião!`);
    }

    // Construção da mensagem
    const lista = buildListMessage(groupName, membros);
    const mentions = createMentions(membros);

    await client.sendMessage(from, { 
        text: lista,
        mentions
    }, { quoted: info });
}

// Funções auxiliares
function createMemberEntry([userId, data]) {
    const shortId = userId.replace('@s.whatsapp.net', '');
    return `➤ @${shortId} (${data.personagem})`;
}

function buildListMessage(groupName, membros) {
    return `⚔️ *LEGIÃO DE RECONHECIMENTO - ${groupName}* ⚔️\n\n` +
           `👥 Membros Ativos (${membros.length}):\n\n${membros.join('\n')}`;
}

function createMentions(membros) {
    return membros.map(m => {
        const idPart = m.split('@')[1].split(' ')[0];
        return `${idPart}@s.whatsapp.net`;
    });
}