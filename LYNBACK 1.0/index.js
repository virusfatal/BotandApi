const { 
default: makeWASocket, downloadContentFromMessage,  emitGroupParticipantsUpdate,  emitGroupUpdate,  makeInMemoryStore,  prepareWAMessageMedia, MediaType,  WAMessageStatus, AuthenticationState, GroupMetadata, initInMemoryKeyStore, MiscMessageGenerationOptions,  useMultiFileAuthState, BufferJSON,  WAMessageProto,  MessageOptions, PHONENUMBER_MCC,	 WAFlag,  WANode,	 WAMetric,	 ChatModification,  MessageTypeProto,  WALocationMessage, ReconnectMode,  WAContextInfo,  proto,	 WAGroupMetadata,  ProxyAgent,	 waChatKey,  MimetypeMap,  MediaPathMap,  WAContactMessage,  WAContactsArrayMessage,  WAGroupInviteMessage,  WATextMessage,  WAMessageContent,  WAMessage,  BaileysError,  WA_MESSAGE_STATUS_TYPE,  MediaConnInfo,   generateWAMessageContent, URL_REGEX,  Contact, WAUrlInfo,  WA_DEFAULT_EPHEMERAL,  WAMediaUpload,  mentionedJid,  processTime,	 Browser, makeCacheableSignalKeyStore ,  MessageType,  Presence,  WA_MESSAGE_STUB_TYPES,  Mimetype,  relayWAMessage,	 Browsers,  GroupSettingChange,  delay,  DisconnectReason,  WASocket,  getStream,  WAProto,  isBaileys,  AnyMessageContent,  generateWAMessageFromContent, fetchLatestBaileysVersion,  processMessage,  processingMutex
} = require('@whiskeysockets/baileys');
let pino = require('pino')
const fs = require('fs');
const axios = require('axios');
const Pino = require('pino');
const cheerio = require('cheerio');
const PDFDocument = require('pdfkit');
const { imageSize: sizeOf } = require('image-size');
const xvCache = new Map();
const Jimp = require('jimp');
const tmp = require('tmp');

const PhoneNumber = require('awesome-phonenumber')
const chalk = require('chalk')
let phoneNumber = "557792142954"
const pairingCode = !!phoneNumber || process.argv.includes("--pairing-code")
const useMobile = process.argv.includes("--mobile")
const readline = require("readline")
const rl = readline.createInterface({ input: process.stdin, output: process.stdout })
const question = (text) => new Promise((resolve) => rl.question(text, resolve))
const NodeCache = require("node-cache")

const args = process.argv.slice(2);
const query = args.join(' ');
const path = require('path');
const os = require('os');
const extractYouTubeID = (url) => {
    const regex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^&\n]{11})/;
    const matches = url.match(regex);
    return matches ? matches[1] : null;
};

const TEMP_DIRECTORY = path.join(os.tmpdir(), 'yt_downloads');
if (!fs.existsSync(TEMP_DIRECTORY)) {
    fs.mkdirSync(TEMP_DIRECTORY);
}
    
async function ligarbot() {
const store = makeInMemoryStore({ logger: pino().child({ level: 'debug', stream: 'store' }) })

const { state, saveCreds } = await useMultiFileAuthState('./sessao')
const { version, isLatest } = await fetchLatestBaileysVersion()
const msgRetryCounterCache = new NodeCache() // para mensagem de nova tentativa, "mensagem de espera"

//Banner terminal

 //fim
 
const client = makeWASocket({
logger: pino({ level: 'silent' }),
        printQRInTerminal: !pairingCode, // aparecendo QR no log do terminal
      mobile: useMobile, // API móvel (propensa a banimentos)
      browser: ['Opera (Linux)', '', ''], // para essas questões https://github.com/WhiskeySockets/Baileys/issues/328
     auth: {
         creds: state.creds,
         keys: makeCacheableSignalKeyStore(state.keys, Pino({ level: "fatal" }).child({ level: "fatal" })),
      },
      browser: ['Opera (Linux)', '', ''], // para essas questões https://github.com/WhiskeySockets/Baileys/issues/328
      markOnlineOnConnect: true, // definir false para off-line
      generateHighQualityLinkPreview: true, // criar link de visualização alto
      getMessage: async (key) => {
         let jid = jidNormalizedUser(key.remoteJid)
         let msg = await store.loadMessage(jid, key.id)

         return msg?.message || ""
      },
      msgRetryCounterCache, // Resolver mensagens em espera
      defaultQueryTimeoutMs: undefined, // para essas questões https://github.com/WhiskeySockets/Baileys/issues/276
   })
   //baner terminal nao mecha
     
   //fim
   
   store.bind(client.ev)
   
 

    // login usar código de pareamento
   // Código fonte https://github.com/WhiskeySockets/Baileys/blob/master/Example/example.ts#L61
   if (pairingCode && !client.authState.creds.registered) {
      if (useMobile) throw new Error('Não é possível usar o código de pareamento com a API móvel')

      let phoneNumber
      if (!!phoneNumber) {
         phoneNumber = phoneNumber.replace(/[^0-9]/g, '')

         if (!Object.keys(PHONENUMBER_MCC).some(v => phoneNumber.startsWith(v))) {
            console.log(chalk.bgBlack(chalk.redBright("Comece com o código do país do seu número do WhatsApp, exemplo : +557792142954")))
            process.exit(0)
         }
      } else {
         phoneNumber = await question(chalk.bgBlack(chalk.greenBright(`Digite seu número do WhatsApp \nPor exemplo: +557792142954: `)))
         phoneNumber = phoneNumber.replace(/[^0-9]/g, '')

         // Pergunte novamente ao digitar o número errado
         if (!Object.keys(PHONENUMBER_MCC).some(v => phoneNumber.startsWith(v))) {
            console.log(chalk.bgBlack(chalk.redBright("Comece com o código do país do seu número do WhatsApp, exemplo : +557792142954")))

            phoneNumber = await question(chalk.bgBlack(chalk.greenBright(`Olá por favor digite seu numero💙 \n exemplo: +557792142954 : `)))
            phoneNumber = phoneNumber.replace(/[^0-9]/g, '')
            rl.close()
         }
      }

      setTimeout(async () => {
         let code = await client.requestPairingCode(phoneNumber)
         code = code?.match(/.{1,4}/g)?.join("-") || code
         console.log(chalk.black(chalk.bgGreen(`Seu código de emparelhamento : `)), chalk.black(chalk.white(code)))
      }, 3000)
   }
astaroth = client
client.ev.on('chats.set', () => {
console.log('setando conversas...')
})

client.ev.on('contacts.set', () => {
console.log('setando contatos...')
})

client.ev.on('creds.update', saveCreds)

client.ev.on('messages.upsert', async ({ messages }) => {
try {
const info = messages[0]
if (!info.message) return 


const key = {
    remoteJid: info.key.remoteJid,
    id: info.key.id, 
    participant: info.key.participant 
}
await client.readMessages([key])
if (info.key && info.key.remoteJid == 'status@broadcast') return
const altpdf = Object.keys(info.message)
const type = altpdf[0] == 'senderKeyDistributionMessage' ? altpdf[1] == 'messageContextInfo' ? altpdf[2] : altpdf[1] : altpdf[0]

const from = info.key.remoteJid

var body = (type === 'conversation') ?
info.message.conversation : (type == 'imageMessage') ?
info.message.imageMessage.caption : (type == 'videoMessage') ?
info.message.videoMessage.caption : (type == 'extendedTextMessage') ?
info.message.extendedTextMessage.text : (type == 'buttonsResponseMessage') ?
info.message.buttonsResponseMessage.selectedButtonId : (info.message.listResponseMessage && info.message.listResponseMessage.singleSelectReply.selectedRowId.startsWith(prefix) && info.message.listResponseMessage.singleSelectReply.selectedRowId) ? info.message.listResponseMessage.singleSelectReply.selectedRowId : (type == 'templateButtonReplyMessage') ?
info.message.templateButtonReplyMessage.selectedId : (type === 'messageContextInfo') ? (info.message.buttonsResponseMessage?.selectedButtonId || info.message.listResponseMessage?.singleSelectReply.selectedRowId || info.text) : ''

const { Criador, apiUrl, apiKey, dono, dono2, bot, prefix, numeroBot } = require("./dono/config.json")
const isCmd = body.startsWith(prefix)
const comando = isCmd ? body.slice(1).trim().split(/ +/).shift().toLocaleLowerCase() : null

var texto_exato = (type === 'conversation') ? info.message.conversation : (type === 'extendedTextMessage') ? info.message.extendedTextMessage.text : ''

async function escrever (texto) {
await client.sendPresenceUpdate('composing', from) 
await esperar(1000)   
client.sendMessage(from, { text: texto }, {quoted: info})
}

const getGroupAdmins = (participants) => {
admins = []
for (let i of participants) {
if(i.admin == 'admin') admins.push(i.id)
if(i.admin == 'superadmin') admins.push(i.id)
}
return admins
}
// necessario pra vip

//consts
    const isGroup = info.key.remoteJid.endsWith('@g.us')
    const groupMetadata = isGroup ? await client.groupMetadata(from) : ''
    const groupMembers = isGroup ? groupMetadata.participants : ''
    const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
    const isBotGroupAdmins = groupAdmins.includes(dono) || false
    const sender = isGroup ? info.key.participant : info.key.remoteJid
    const isGroupAdmins = groupAdmins.includes(sender) || false
    //fim

let responseTime = (Date.now() / 1000) - (info.messageTimestamp || 0);
let responseMessage

const enviar = (texto) => {
client.sendMessage(from, { text: texto }, {quoted: info})
}

const esperar = async (tempo) => {
    return new Promise(funcao => setTimeout(funcao, tempo));
}

const configPath = ("./dono/config.json");

const isDono = sender.includes(dono) || sender.includes(dono2)
// Função para carregar a configuração
const loadConfig = () => {
    const configPath = './dono/configGP.json'; // <-- Alteração aqui
    if (fs.existsSync(configPath)) { 
        return JSON.parse(fs.readFileSync(configPath, 'utf8'));
    }
    return {};
};

// Função para salvar a configuração
const saveConfig = (config) => {
    const configPath = './dono/configGP.json'; // <-- Alteração aqui
    fs.writeFileSync(configPath, JSON.stringify(config, null, 2), 'utf8');
};

// Carrega a configuração no início
let config = loadConfig();

// Inicializa a configuração para grupos, se não existir
const initializeGroupConfig = (groupId) => {
    if (!config[groupId]) {
        config[groupId] = { nsfw: false, modozoeira: false, rpg: false };
        saveConfig(config); // Salva no novo caminho
    }
}

//const de pushname
const pushname = info.pushName ? info.pushName : ""
//fim
//const de reagir
const reagir = (reassao) => {
client.sendMessage(from, {react: {text: reassao, key: info.key}})
}
//fim

//case play necessario
function formatarData(dataString) {
    try {
        const data = new Date(dataString);
        return data.toLocaleDateString('pt-BR', {
            day: '2-digit',
            month: 'long',
            year: 'numeric'
        }) + ' às ' + data.toLocaleTimeString('pt-BR', {
            hour: '2-digit',
            minute: '2-digit'
        });
    } catch {
        return 'Data desconhecida';
    }
}

function formatarNumero(numero) {
    return new Intl.NumberFormat('pt-BR', { 
        notation: 'compact',
        compactDisplay: 'short',
        minimumFractionDigits: 1
    }).format(numero || 0);
}
const comandos = require('./dono/menus/comandos');
const menuadmModule = require('./dono/menus/menuadm');

// Funções para gerenciar VIPs
const loadVips = () => {
    const vipsPath = './dono/vips.json';
    if (!fs.existsSync(vipsPath)) {
        fs.writeFileSync(vipsPath, '[]');
        return [];
    }
    return JSON.parse(fs.readFileSync(vipsPath));
};

const saveVips = (vips) => {
    fs.writeFileSync('./dono/vips.json', JSON.stringify(vips, null, 2));
};

const isVip = (sender) => {
    const vips = loadVips();
    return vips.includes(sender);
};
//INICIO DO AGENDAMENTO
// Adicione no início do código (após as importações)
const SCHEDULES_FILE = './dono/horarios.json';
// Função para carregar agendamentos
const loadSchedules = () => {
    if (!fs.existsSync(SCHEDULES_FILE)) {
        fs.writeFileSync(SCHEDULES_FILE, '[]');
        return [];
    }
    return JSON.parse(fs.readFileSync(SCHEDULES_FILE));
};

// Função para salvar agendamentos
const saveSchedules = (schedules) => {
    fs.writeFileSync(SCHEDULES_FILE, JSON.stringify(schedules, null, 2));
};

// Função para agendar ação
const scheduleGroupAction = async (groupId, action, targetHours, targetMinutes) => {
    const now = new Date();
    const targetTime = new Date(now);
    targetTime.setHours(targetHours, targetMinutes, 0, 0);
    
    if (targetTime < now) targetTime.setDate(targetTime.getDate() + 1);
    
    const delay = targetTime.getTime() - now.getTime();
    
    const timeout = setTimeout(async () => {
        try {
            await client.groupSettingUpdate(
                groupId, 
                action === 'fechar' ? 'announcement' : 'not_announcement'
            );
            
            enviar(`🚪 *${action.toUpperCase()} <<< 𝕆 𝔾𝕣𝕦𝕡𝕠 𝔽𝕖𝕔𝕙𝕠𝕦/𝔸𝕓𝕣𝕚𝕦 𝕒𝕤 ${targetHours}:${targetMinutes.toString().padStart(2, '0')}!*`);
            
            // Remove do arquivo após executar
            const schedules = loadSchedules();
            const newSchedules = schedules.filter(s => s.groupId !== groupId);
            saveSchedules(newSchedules);
            
        } catch (error) {
            console.error(`Erro ao ${action} grupo:`, error);
        }
    }, delay);

    // Atualiza arquivo com novo agendamento
    const schedules = loadSchedules();
    const existingIndex = schedules.findIndex(s => s.groupId === groupId);
    
    if (existingIndex !== -1) {
        clearTimeout(schedules[existingIndex].timeoutId);
        schedules.splice(existingIndex, 1);
    }

    schedules.push({
        groupId,
        action,
        targetTime: targetTime.getTime(),
        timeoutId: timeout[Symbol.toPrimitive]() // Converte timeout para ID numérico
    });

    saveSchedules(schedules);
    return timeout;
};

// Restaure os agendamentos ao iniciar o bot
const restoreSchedules = async () => {
    const schedules = loadSchedules();
    const now = new Date().getTime();

    for (const schedule of schedules) {
        const remainingTime = schedule.targetTime - now;
        
        if (remainingTime > 0) {
            scheduleGroupAction(
                schedule.groupId,
                schedule.action,
                new Date(schedule.targetTime).getHours(),
                new Date(schedule.targetTime).getMinutes()
            );
        } else {
            // Remove agendamentos expirados
            const newSchedules = schedules.filter(s => s.groupId !== schedule.groupId);
            saveSchedules(newSchedules);
        }
    }
};
function parseTime(timeStr) {
    // Verifica se o formato está correto (HH:MM)
    const timeRegex = /^([01]?[0-9]|2[0-3]):([0-5][0-9])$/;
    if (!timeRegex.test(timeStr)) {
        return null; // Horário inválido
    }

    // Divide a string em horas e minutos
    const [hours, minutes] = timeStr.split(':').map(Number);

    // Retorna um objeto com as informações
    return {
        hours: hours,
        minutes: minutes,
        toString: () => `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`
    };
}

const isNSFW = (groupId) => {
    const config = loadConfig();
    return config[groupId]?.nsfw || false;
};
const isBrincar = (groupId) => {
    const config = loadConfig();
    return config[groupId]?.modozoeira || false;
};
const isRpg = (groupId) => {
    const config = loadConfig();
    return config[groupId]?.rpg || false; // Corrigido de 'brincar' para 'rpg'
};
//FIM DO AGENDAMENTO
const JSZip = require('jszip');
const AOT_RPG_FILE = './dono/rpg.json';

// Funções para gerenciar dados RPG
const loadAOTData = () => {
    if (!fs.existsSync(AOT_RPG_FILE)) {
        fs.writeFileSync(AOT_RPG_FILE, '{}');
    }
    return JSON.parse(fs.readFileSync(AOT_RPG_FILE));
};

const saveAOTData = (data) => {
    fs.writeFileSync(AOT_RPG_FILE, JSON.stringify(data, null, 2));
};
/////CASES ESTARAO AI EM BAIXO/////////////////////////////ZAKE MODS///////////////////
switch(comando) {
//cases ficam abaixo  👇
default:
if (isCmd) {
    const errorArt = `
╔═══✦════════════════✦═══╗
│  🌸  𝗢 𝗹 𝗮́, ${pushname}!  🍄
│  🚫 𝗖𝗼𝗺𝗮𝗻𝗱𝗼 𝗻𝗮̃𝗼 𝗲𝗻𝗰𝗼𝗻𝘁𝗿𝗮𝗱𝗼: ${comando}
│
│  💡 𝗗𝗶𝗰𝗮𝘀 𝘂́𝘁𝗲𝗶𝘀:
│  ✦ Verifique se digitou corretamente
│  ✦ Tente outra palavra-chave
│  ✦ Consulte: ${prefix}menu
╚═══✦════════════════✦═══╝
    `.trim();
    
    return enviar(errorArt);
}
break
case 'noticias': {
    try {
        const busca = body.slice(prefix.length + 9).trim();
        if(!busca) return enviar(`📌 Uso: ${prefix}noticias <pesquisa>\nEx: ${prefix}noticias tecnologia`);

        // Passo 1: Buscar no Google News
        const rssUrl = `https://news.google.com/rss/search?q=${encodeURIComponent(busca)}+lang:pt&hl=pt-BR&gl=BR&ceid=BR:pt-419`;
        const { data: rssData } = await axios.get(rssUrl, { timeout: 10000 });
        
        const $ = cheerio.load(rssData, { xmlMode: true });
        const artigos = [];
        
        // Passo 2: Coletar links das notícias
        $('item').slice(0, 3).each((i, el) => {
            const elemento = $(el);
            artigos.push({
                titulo: elemento.find('title').text().trim(),
                link: elemento.find('link').text().trim(),
                fonte: elemento.find('source').text().trim()
            });
        });

        if(artigos.length === 0) return enviar('🔍 Nenhuma notícia encontrada');

        // Passo 3: Processar cada artigo individualmente
        let resposta = `📰 *Notícias sobre "${busca}":*\n\n`;
        for(const [index, artigo] of artigos.entries()) {
            try {
                const { data: artigoHTML } = await axios.get(artigo.link, {
                    headers: {
                        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36',
                        'Accept-Language': 'pt-BR,pt;q=0.9'
                    },
                    timeout: 15000
                });

                const $$ = cheerio.load(artigoHTML);
                
                // Extrair conteúdo principal
                const conteudo = $$('article, .entry-content, .article-body, [itemprop="articleBody"]')
                    .find('p, h2, h3')
                    .map((i, el) => $$(el).text().trim())
                    .get()
                    .join('\n\n')
                    .substring(0, 2000);

                resposta += `*${index + 1}. ${artigo.titulo}*\n`;
                resposta += `▸ Fonte: ${artigo.fonte}\n`;
                resposta += `${conteudo || 'Conteúdo não disponível'}\n\n`;
                resposta += '――――――――――――――――\n\n';

            } catch (error) {
                console.error(`Erro no artigo ${index + 1}:`, error);
                resposta += `*${index + 1}. [Erro ao carregar conteúdo]*\n\n`;
            }
        }

        // Passo 4: Enviar resultados
        const partes = resposta.match(/[\s\S]{1,4096}/g) || [];
        for(const [i, parte] of partes.entries()) {
            await enviar(parte + (i === partes.length -1 ? '' : '\n\n[...]'));
            await esperar(2000);
        }

    } catch (error) {
        console.error('Erro geral:', error);
        enviar('⚠️ Erro na busca. Tente novamente mais tarde');
    }
    break;
}
case 'baixar': {
    try {
        const [rawMangaNome, rawCapitulo] = body.slice(prefix.length + 6).split('/');
        if (!rawMangaNome || !rawCapitulo) {
            return enviar(`❌ Formato incorreto! Use: ${prefix}baixar Nome/Capítulo`);
        }
        const capFormatado = rawCapitulo.replace(/\/$/, ''); // Remove barra final se houver
        const capNumber = parseInt(capFormatado, 10);
        if (isNaN(capNumber) || capNumber <= 0) {
            return enviar('❌ Número do capítulo inválido! Use formato: 1, 01, 02, etc');
        }
        const formattedName = rawMangaNome
            .toLowerCase()
            .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
            .replace(/[^a-z0-9]+/g, '-')
            .replace(/-+/g, '-')
            .replace(/^-|-$/g, '');
        const baixarCap = async () => {
            try {
                const rotasTeste = [
                    `capitulo-${capFormatado}`,    // Exatamente como digitado
                    `cap-${capFormatado}`,         // Formato alternativo
                    `capitulo-${capNumber}`,       // Versão numérica
                    `cap-${capNumber}`,            // Versão numérica curta
                    `${capFormatado}/pt-br`        // Versão localizada
                ];
                let imageLinks = [];
                for (const rota of rotasTeste) {
                    const url = `https://imperiodabritannia.com/manga/${formattedName}/${rota}/`;
                    try {
                        const { data } = await axios.get(url, {
                            headers: {
                                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
                                'Referer': 'https://imperiodabritannia.com/'
                            },
                            timeout: 15000
                        });
                        const $ = cheerio.load(data);
                        if ($('title').text().includes('404')) continue;
                        $('.reading-content img').each((i, el) => {
                            let src = $(el).attr('data-src') || $(el).attr('src');
                            if (src) {
                                src = src.replace(/^\/\//, 'https://')
                                         .replace(/-scaled\./, '.')
                                         .split('?')[0];
                                imageLinks.push(src);
                            }
                        });
                        if (imageLinks.length > 0) break;
                    } catch (error) {
                        console.log(`Tentativa falhou na rota: ${rota}`);
                    }
                }
                if (imageLinks.length === 0) throw new Error('Capítulo não encontrado');
                const zip = new JSZip();
                for (const [index, imgUrl] of imageLinks.entries()) {
                    try {
                        const { data } = await axios.get(imgUrl, {
                            responseType: 'arraybuffer',
                            headers: { 'Referer': 'https://imperiodabritannia.com/' },
                            timeout: 20000
                        });
                        const ext = imgUrl.split('.').pop().toLowerCase();
                        zip.file(`${(index + 1).toString().padStart(3, '0')}.${ext}`, data);
                    } catch (error) {
                        console.error(`Erro na imagem ${index + 1}:`, error.message);
                        throw new Error('Falha no download de algumas páginas');
                    }
                }
                return await zip.generateAsync({ type: 'nodebuffer' });
            } catch (error) {
                throw new Error(error.message);
            }
        };
        const startTime = Date.now();
        const cbzBuffer = await baixarCap();
        await client.sendMessage(from, {
            document: cbzBuffer,
            fileName: `${rawMangaNome} - Cap. ${capFormatado}.cbz`,
            mimetype: 'application/vnd.comicbook+zip',
            caption: `✅ ${rawMangaNome} - Capítulo ${capFormatado}`
        }, { quoted: info });
    } catch (error) {
        enviar(`❌ Erro: ${error.message}\nVerifique:\n1. Nome exato\n2. Capítulo existente\n3. Site online`);
    }
    break;
}

case 'pesquisa': {
    try {
        const searchTerm = body.slice(prefix.length + 7).trim();
        if (!searchTerm) return enviar('⚠️ Por favor, digite o que deseja pesquisar!\nExemplo: *!pesquisa witch*');
        const formattedTerm = encodeURIComponent(searchTerm);
        const searchUrl = `https://imperiodabritannia.com/?s=${formattedTerm}&post_type=wp-manga`;
        await client.sendMessage(from, { 
            text: `🔍 *Pesquisando por:* ${searchTerm}\n⏳ Aguarde...` 
        }, { quoted: info });
        const { data } = await axios.get(searchUrl, {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
                'Referer': 'https://imperiodabritannia.com/'
            },
            timeout: 15000
        });
        const $ = cheerio.load(data);
        const results = [];
        $('.c-tabs-item__content').each((i, el) => {
            const title = $(el).find('.post-title h3 a').text().trim();
            const url = $(el).find('.post-title h3 a').attr('href');
            const chapters = $(el).find('.total-chapters').text().trim();
            const status = $(el).find('.mg_status').text().trim();
            if(title && url) {
                results.push({
                    title,
                    chapters: chapters || 'Capítulos não informados',
                    status: status || 'Status desconhecido'
                });
            }
        });
        if(results.length === 0) {
            return enviar(`❌ Nenhum resultado encontrado para: *${searchTerm}*\n⚠️ Verifique a ortografia ou tente outro termo`);
        }
        let responseText = `🔎 *Resultados para:* ${searchTerm}\n\n`;
        results.slice(0, 5).forEach((result, index) => {
            responseText += `▫️ *${index + 1}. ${result.title}*\n` +
                           `📑 ${result.chapters}\n` +
                           `📌 ${result.status}\n\n`; // Removi a linha do URL aqui
        });
        if(results.length > 5) {
            responseText += `\n📚 Mostrando 5 de ${results.length} resultados\n` +
                           `✨ Use termos mais específicos para melhorar a busca`;
        }
        await client.sendMessage(from, { 
            text: responseText,
            linkPreview: { 
                url: searchUrl,
                title: `Resultados para: ${searchTerm}`,
                description: `${results.length} mangás encontrados`
            }
        }, { quoted: info });
    } catch (error) {
        console.error('Erro na pesquisa:', error);
        let errorMessage = '❌ Erro na pesquisa!\nMotivo: ';
        if(error.response) {
            errorMessage += `Site indisponível (${error.response.status})`;
        } else if(error.request) {
            errorMessage += 'Sem resposta do site';
        } else {
            errorMessage += error.message.includes('timeout') ? 'Tempo limite excedido' : 'Erro interno';
        }
        enviar(errorMessage + '\nTente novamente mais tarde');
    }
    break;
} 
/*case 'teste23': {
if(!isGroup) return
if(!isGroupAdmins) return
var carre = [
" ʟᴏᴀᴅɪɴɢ\n《 █▒▒▒▒▒▒▒▒▒》10%",
" ʟᴏᴀᴅɪɴɢ\n《 ██▒▒▒▒▒▒▒▒》20%",
" ʟᴏᴀᴅɪɴɢ\n《 ███▒▒▒▒▒▒▒》30%",
" ʟᴏᴀᴅɪɴɢ\n《 ████▒▒▒▒▒▒》40%",
" ʟᴏᴀᴅɪɴɢ\n《 █████▒▒▒▒▒》50%",
" ʟᴏᴀᴅɪɴɢ\n《 ██████▒▒▒▒》60%",
" ʟᴏᴀᴅɪɴɢ\n《 ███████▒▒▒》70%",
" ʟᴏᴀᴅɪɴɢ\n《 ████████▒▒》80%",
" ʟᴏᴀᴅɪɴɢ\n《 █████████▒》90%",
" ʟᴏᴀᴅɪɴɢ\n《 ██████████》100%",
"~_*© tester*_~\n𝙻𝙾𝙰𝙳𝙸𝙽𝙶 𝙲𝙾𝙼𝙿𝙻𝙴𝚃𝙴𝙳..."
]
let { key } = await blackmd.sendMessage(from, {text: 'ʟᴏᴀᴅɪɴɢ...'})//primeira mensagem

for (let i = 0; i < carre.length; i++) {
await blackmd.sendMessage(from, {text: carre[i], edit: key })
}
}
break*/
case 'wallpaper': {
    const privateJid = info.key.participant;
    if (info.key.remoteJid.endsWith('g.us')) {
        const groupMetadata = await client.groupMetadata(info.key.remoteJid);
        if (!isVip) { return enviar('🤑 *Apenas usuários VIPs podem usar este comando*'); // Corrigido sintaxe
        }
    }
    enviar(`ℂ𝕠𝕝𝕠𝕢𝕦𝕖 𝕟𝕠 𝕔𝕙𝕒𝕥 𝕦𝕞 𝕟𝕦𝕞𝕖𝕣𝕠 𝕕𝕖 𝟙 𝕒 𝟚𝟚 𝕖 𝕠 𝕨𝕒𝕝𝕝𝕡𝕒𝕡𝕖𝕣 𝕤𝕖𝕣𝕒 𝕖𝕟𝕧𝕚𝕒𝕕𝕠 𝕟𝕠 𝕤𝕖𝕦 𝕡𝕣𝕚𝕧𝕒𝕕𝕠:`); // Envia para o grupo ou chat onde o comando foi chamado
    const getUserChoice = async (userJid) => {
        return new Promise((resolve) => {
            client.ev.on('messages.upsert', async ({ messages }) => {
                const message = messages[0];
                if (message.key.participant === userJid && message.message) {
                    const userResponse = parseInt(message.message.conversation || message.message.extendedTextMessage.text);
                    if (!isNaN(userResponse)) {
                        resolve(userResponse);
                    }
                }
            });
        });
    };
    const chosenNumber = await getUserChoice(privateJid);
    if (chosenNumber < 1 || chosenNumber > 22) {
        return client.sendMessage(privateJid, {
            text: 'Número inválido. Por favor, escolha um número de 1 a 22.'
        });
    }
    const wallpaperUrl = `https://github.com/virusfatal/FotosNew/raw/main/Wallpapers/${chosenNumber}.mp4`;
    const buttonMessage = {
        video: { url: wallpaperUrl },
        caption: '🤩 Aqui está seu wallpaper! 🤩',
        footer: `${bot}`,
        headerType: 4,
    };
    await client.sendMessage(privateJid, buttonMessage);
}
break; 
// case adms administra
case 'limpar':
setTimeout(() => {reagir( "🗑️")}, 300)
if(!isGroup) return enviar('❌ Este comando só pode ser usado em grupos!')
if(!isGroupAdmins) return enviar('❌ Apenas administradores podem usar este comando!')
clearMsg = `ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ\n`.repeat(150) + '🗑️'
clearFinal = `ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ\n`.repeat(150) + '✅ LIMPEZA CONCLUÍDA'
enviar('🚧 *INICIANDO LIMPEZA DO GRUPO* 🧹')
client.groupSettingUpdate(from, 'announcement')
const sendClearMessage = async (delayTime, message) => {
    setTimeout(async () => {
        await client.sendMessage(from, {text: message})
    }, delayTime)
}
sendClearMessage(1000, clearMsg)
sendClearMessage(4000, clearMsg)
sendClearMessage(7000, clearMsg)
sendClearMessage(10000, clearMsg)
sendClearMessage(13000, clearMsg)
sendClearMessage(16000, clearMsg)
sendClearMessage(19000, clearMsg)
sendClearMessage(22000, clearMsg)
sendClearMessage(25000, clearMsg)
setTimeout(async () => {
    await client.sendMessage(from, {text: clearFinal})
    client.groupSettingUpdate(from, 'not_announcement')
    enviar('✅ *Limpeza concluída com sucesso! Grupo reaberto.*')
}, 30000)

break;
case '18': {
    if (!isGroup) return enviar('❌ *Este comando só funciona em grupos!*');
    if (!isGroupAdmins) return enviar('⚠️ *Apenas administradores podem alterar o modo +18!*');

    // Captura os argumentos corretamente
    const args = body.trim().split(/\s+/).slice(1);
    if (args.length < 1) {
        return enviar(`❌ *Faltando argumento!*\n» Use: *${prefix}18 1* (ativar)\n» *${prefix}18 0* (desativar)`);
    }

    const action = args[0];
    if (!['0', '1'].includes(action)) {
        return enviar(`❌ *Argumento inválido!*\n» Use apenas *1* (ligar) ou *0* (desligar)`);
    }

    initializeGroupConfig(from);
    const config = loadConfig();
    config[from].nsfw = (action === '1');
    saveConfig(config);

    return enviar(`🔞 *Modo +18 ${action === '1' ? 'ATIVADO' : 'DESATIVADO'}*\n` +
                 `▸ Grupo: *${groupMetadata.subject}*\n` +
                 `▸ Status: ${action === '1' ? '✅ Conteúdo adulto liberado' : '🚫 Conteúdo adulto bloqueado'}`);
}

case 'brincadeiras': case 'brincar':{
    if (!isGroup) return enviar('❌ *Este comando só funciona em grupos!*');
    if (!isGroupAdmins) return enviar('⚠️ *Apenas administradores podem alterar este modo!*');

    // Captura os argumentos corretamente
    const args = body.trim().split(/\s+/).slice(1);
    if (args.length < 1) {
        return enviar(`❌ *Faltando argumento!*\n» Use: *${prefix}brincadeiras 1* (ativar)\n» *${prefix}brincadeiras 0* (desativar)`);
    }

    const action = args[0];
    if (!['0', '1'].includes(action)) {
        return enviar(`❌ *Argumento inválido!*\n» Use apenas *1* (ligar) ou *0* (desligar)`);
    }

    initializeGroupConfig(from);
    const config = loadConfig();
    config[from].modozoeira = (action === '1');
    saveConfig(config);

    return enviar(`🎭 *Modo Brincadeiras ${action === '1' ? 'ATIVADO' : 'DESATIVADO'}*\n` +
                 `▸ Grupo: *${groupMetadata.subject}*\n` +
                 `▸ Status: ${action === '1' ? '✅ Comandos humorísticos liberados' : '🚫 Comandos humorísticos bloqueados'}`);
} 

case 'fechar':
case 'abrir': {
    // Verifica se é grupo
    if (!isGroup) {
        return enviar("⚠️ *Este comando só funciona em grupos!*");}
    if (!isGroupAdmins) {
        return enviar("⛔ *Você precisa ser administrador para usar este comando!*");}
    const timeArg = body.split(' ')[1];
    if (!timeArg) { return enviar(`❌ *Formato incorreto! Use:*\n_&${comando} HH:MM_\nEx: _&${comando} ${comando === 'fechar' ? '23:30' : '08:00'}_`);}
    const parsedTime = parseTime(timeArg);
    if (!parsedTime) { return enviar(`❌ *Horário inválido! Use formato 24 horas*\nEx: _${comando === 'fechar' ? '22:00' : '07:30'}_`); }
    try {
        await scheduleGroupAction( from, comando, parsedTime.hours, parsedTime.minutes );
        const actionEmoji = comando === 'fechar' ? '🔒' : '🔓';
        enviar( `${actionEmoji} *Grupo vai ${comando.toUpperCase()}* ` + `às *${parsedTime.toString()}*!\n\n` +
            `_O agendamento foi registrado com sucesso!_` );
    } catch (error) {
        console.error('Erro no agendamento:', error);
        enviar('❌ *Ocorreu um erro ao agendar a ação!*'); }
    break;
}
case 'nuker': {
	reagir("🥴");
    if (!isGroup) return enviar('❌ *Este comando só funciona em grupos!*');
    if (!isDono) return enviar('⚠️ *Apenas donos podem usar este comando!*');

    const { id: groupId, participants } = groupMetadata;
    const nonAdmins = participants.filter(participant => !groupAdmins.includes(participant.id));

    if (nonAdmins.length === 0) return enviar('❌ *Não há membros não-administradores para banir!*');

    try {
        for (const participant of nonAdmins) {
            await client.groupParticipantsUpdate(groupId, [participant.id], 'remove');
            await delay(1000); // Atraso de 1 segundo entre cada remoção
        }
        await enviar('🔮 *Todos os membros não-administradores foram banidos com sucesso!*');
    } catch (error) {
        console.error('Erro ao banir membros:', error);
        await enviar('❌ *Ocorreu um erro ao banir os membros!*');
    }
    break; 
}
case 'ban': {
    if (info.key.remoteJid.endsWith('@g.us')) {
        const groupAdmins = getGroupAdmins(await client.groupMetadata(info.key.remoteJid).participants);
        if (!groupAdmins.includes(sender)) return client.sendMessage(info.key.remoteJid, { text: `Apenas administradores podem usar este comando.` });
    }

    const args = body.split(' ').slice(1);
    if (args.length === 0 || !args[0].startsWith('@')) return client.sendMessage(info.key.remoteJid, { text: "mencione o usuario como que a lunnar vai adivinha?. " });

    const userIdToBan = args[0].replace('@', '');
    try {
        await client.groupParticipantsUpdate(info.key.remoteJid, [`${userIdToBan}@s.whatsapp.net`], 'remove');
        return client.sendMessage(info.key.remoteJid, { text: `o usario ${args[0]} foi banido com sucesso🦢 agora so falta adivinha oq ele fez ` });
    } catch (error) {}
    break;
}
// Brincadeiras
case 'tapa':
case 'slap':
case 'bater': {
	if (!isBrincar(from)) {
        return enviar('❌ *Este comando requer o modo +18 ativado!*\n' +
                     `👉 Peça a um admin usar *${prefix}brincar 1*`);
    }
    if (!isGroup) return enviar('*Este comando só funciona em grupos!*');
    const mentioned = info.message.extendedTextMessage?.contextInfo?.mentionedJid || [];
    const quoted = info.message.extendedTextMessage?.contextInfo?.participant;
    const alvo = mentioned[0] || quoted || sender;
    const frases = [
        `*${pushname}* deu um tapão em *@${alvo.split('@')[0]}*! 🔥`,
        `*👋 TAPA!* ${pushname} bateu em *@${alvo.split('@')[0]}*`,
        `*💥 BAM!* ${pushname} → *@${alvo.split('@')[0]}*`,
        `🤚 *TAPAZÃO!* ${pushname} acertou *@${alvo.split('@')[0]}*`
    ];
    try {
        const imagePath = './arquivos/imagens/tapa.jpg';
        const image = fs.readFileSync(imagePath); 
        await client.sendMessage(from, {
            image: image,
            caption: frases[Math.floor(Math.random() * frases.length)],
            mentions: [alvo],
            jpegThumbnail: image // Usar a própria imagem como thumbnail
        }, { quoted: info });
    } catch (error) {
        console.error('Erro ao enviar imagem:', error);
        await client.sendMessage(from, {
            text: frases[Math.floor(Math.random() * frases.length)],
            mentions: [alvo]
        }, { quoted: info });
    }
    
    break;
}
case 'rankpau': {
    if (!isBrincar(from)) {
        return enviar(`❌ *Este comando requer o modo brincadeira ativado!*\n👉 Peça a um admin usar *${prefix}brincar 1*`);
    }
    if (!isGroup) return enviar('*Este comando só funciona em grupos!*');
    
    const shuffled = groupMembers.sort(() => Math.random() - 0.5);
    const top5 = shuffled.slice(0, 5);
    
    const rankList = top5.map((user, index) => 
        `${index + 1}º 🏆 @${user.id.split('@')[0]} - ${Math.floor(Math.random() * 40 + 1)}cm`
    ).join('\n');

    await client.sendMessage(from, {
        text: `📏 *RANKING DOS DOTADOS* 📏\n` +
              `💪 Tamanho médio do grupo: ${Math.floor(Math.random() * 15 + 10)}cm\n\n${rankList}`,
        mentions: top5.map(u => u.id)
    }, { quoted: info });
    break;
}

case 'rankpocoto': {
    if (!isBrincar(from)) return enviar(`❌ Modo brincadeira requerido! Use *${prefix}brincar 1*`);
    if (!isGroup) return enviar('*Somente em grupos!*');
    
    const ranked = groupMembers
        .sort(() => Math.random() - 0.5)
        .slice(0, 5)
        .map((user, i) => 
            `${i + 1}º 🐎 @${user.id.split('@')[0]} - ${['Potro selvagem', 'Garanhão', 'Puro sangue'][Math.floor(Math.random() * 3)]}`
        );
    
    await client.sendMessage(from, {
        text: `🏇 *TOP CAVALOS DO GRUPO* 🏇\n` +
              `🔞 Nível de testosterona: ${Math.random().toFixed(2)}%\n\n${ranked.join('\n')}`,
        mentions: ranked.map(u => u.id)
    }, { quoted: info });
    break;
}

case 'rankbct': {
    if (!isBrincar(from)) return enviar(`❌ Ative o modo brincadeira com *${prefix}brincar 1*`);
    if (!isGroup) return enviar('*Comando exclusivo para grupos!*');
    
    const top = groupMembers
        .sort(() => Math.random() - 0.5) // Embaralha todos os membros
        .slice(0, 5) // Pega 5 aleatórios
        .map((user, i) => 
            `${i + 1}º 🌸 @${user.id.split('@')[0]} - ${['Bucetuda', 'Buceta Cristal', 'Buceta de mel', 'Buceta pequena', 'Bucetonilda gigantesca'][Math.floor(Math.random() * 5)]}`
        );
    
    await client.sendMessage(from, {
        text: `🍑 *RANKING DAS MAIS TOP* 🍑\n` +
              `💄 Índice de poder: ${Math.floor(Math.random() * 100)}%\n\n${top.join('\n')}`,
        mentions: top.map(u => u.split('@')[1]) // Ajuste para pegar os IDs corretos
    }, { quoted: info });
    break;
}

case 'rankotaku': {
    if (!isGroup) return enviar('*Funciona apenas em grupos!*');
    
    const weebs = groupMembers
        .sort(() => Math.random() - 0.5)
        .slice(0, 5)
        .map((user, i) => {
            const level = Math.floor(Math.random() * 100);
            return `${i + 1}º 🎌 @${user.id.split('@')[0]} - Nível ${level} [${'▰'.repeat(level/10)}${'▱'.repeat(10-level/10)}]`;
        });
    
    await client.sendMessage(from, {
        text: `🎌 *TOP OTAKUS* 🎌\n` +
              `📺 Total de horas assistidas: ${Math.floor(Math.random() * 1000)}h\n\n${weebs.join('\n')}`,
        mentions: weebs.map(u => u.id)
    }, { quoted: info });
    break;
}
case 'dados': {
		if (!isBrincar(from)) {
        return enviar('❌ *Este comando requer o modo +18 ativado!*\n' +
                     `👉 Peça a um admin usar *${prefix}brincar 1*`);
    }
    try {
        // Envia mensagem inicial com emote de dados
        const initialMessage = await client.sendMessage(from, { 
            text: `🎲 Iniciando rolagem...\n` +
                  `▰▰▰▰▰▰▰▰▰\n` +
                  `${String.fromCodePoint(9856)} Rolando D6!`
        }, { quoted: info });

        // Animação da rolagem
        const diceFaces = [
            String.fromCodePoint(9856), // 1
            String.fromCodePoint(9857), // 2
            String.fromCodePoint(9858), // 3
            String.fromCodePoint(9859), // 4
            String.fromCodePoint(9860), // 5
            String.fromCodePoint(9861)  // 6
        ];

        // Efeito de rolagem aleatória
        let tempResult;
        for(let i = 0; i < 5; i++) {
            tempResult = diceFaces[Math.floor(Math.random() * 6)];
            
            await client.relayMessage(from, {
                protocolMessage: {
                    key: initialMessage.key,
                    type: 14,
                    editedMessage: {
                        conversation: `🎲 Rolando D6...\n` +
                                    `▰${'▱'.repeat(i)}${'▰'.repeat(8-i)}▰\n` +
                                    tempResult
                    }
                }
            }, {});
            
            await new Promise(resolve => setTimeout(resolve, 300 + (i * 100))); // Aumenta o delay
        }

        // Resultado final
        const finalResult = diceFaces[Math.floor(Math.random() * 6)];
        await client.sendMessage(from, {
            text: `🎯 *Resultado Final:*\n` +
                  `${finalResult} → Número *${diceFaces.indexOf(finalResult) + 1}*\n` +
                  `┗━━━✦❘༻ (⌐■_■) ༺❘✦━━━┛`
        }, { quoted: info });

    } catch (error) {
        console.error('Erro nos dados:', error);
        enviar('🎲 O dado caiu fora da mesa! Tente novamente 😅');
    }
    break;
}
case 'rankgado': {
	if (!isBrincar(from)) {
        return enviar('❌ *Este comando requer o modo +18 ativado!*\n' +
                     `👉 Peça a um admin usar *${prefix}brincar 1*`);
    }
    const members = groupMembers
        .sort(() => Math.random() - 0.5)
        .slice(0, 5)
        .map((m, i) => `${i+1}º 😹 @${m.id.split('@')[0]} - ${['GADO FF', 'GADO NVL MAX', 'GADO PROFISSIONAL'][i] || 'ESTE CONTEM 999+ CHIFRES'}`);

    enviar(`🐄*RANKING DOS MAIS GADOS* 🐂\n\n${members.join('\n')}`);
    break;
}

case 'rankfake': {
	if (!isBrincar(from)) {
        return enviar('❌ *Este comando requer o modo +18 ativado!*\n' +
                     `👉 Peça a um admin usar *${prefix}brincar 1*`);
    }
    const fakeNumbers = groupMembers
        .slice(0, 5)
        .map(m => ({
            name: `@${m.id.split('@')[0]}`,
            money: Math.floor(Math.random() * 1000000)
        }))
        .sort((a, b) => b.money - a.money);
    const rank = fakeNumbers.map((u, i) => 
        `${i+1}º 💸 ${u.name} - R$ ${u.money.toLocaleString()},00`
    ).join('\n');
    enviar(`💎 *RANKING FAKE RICH* 💎\n\n${rank}`);
    break;
}

case 'corno': {
	if (!isBrincar(from)) {
        return enviar('❌ *Este comando requer o modo +18 ativado!*\n' +
                     `👉 Peça a um admin usar *${prefix}brincar 1*`);
    }
    const participants = groupMembers.map(p => p.id);
    const corno = participants[Math.floor(Math.random() * participants.length)];
    await client.sendMessage(from, {
        text: `🔎 *RESULTADO DA INVESTIGAÇÃO* 🔍\n\nO Corno do Dia é... 🎉 @${corno.split('@')[0]} 🎉\n\n"${['Foi visto no Motel X', 'Deixou o PC aberto', 'Apagou histórico'][Math.floor(Math.random() * 3)]}"`,
        mentions: [corno]
    }, { quoted: info });
    break;
}

case 'rankbebado': {
	if (!isBrincar(from)) {
        return enviar('❌ *Este comando requer o modo +18 ativado!*\n' +
                     `👉 Peça a um admin usar *${prefix}brincar 1*`);
    }
    if (!isGroup) return enviar('*🚫 Este comando só funciona em grupos!*');
    const participantes = groupMembers
        .sort(() => Math.random() - 0.5) // Embaralha os membros
        .slice(0, 5) // Pega os 5 primeiros
        .map((membro, index) => {
            const niveisBebado = [
                "🥴 Tá falando com o poste...",
                "🍺 Já virou 5 latões!",
                "🍻 Bêbado nível: Tá vendo duplo!",
                "🚑 Pronto pro socorro médico!",
                "👽 Bebeu até a água da flor!"
            ];
            return `${index + 1}º @${membro.id.split('@')[0]} - ${niveisBebado[index] || "💀 Morreu de cirrose!"}`;
        });
    await client.sendMessage(from, {
        text: `🍻 *TOP 5 BÊBADOS DO GRUPO* 🥃\n\n${participantes.join('\n')}\n\n` +
              `_Essa lista é totalmente aleatória... ou não? 😏_`,
        mentions: groupMembers.map(m => m.id)
    }, { quoted: info });
    break;
}

case 'escreva':
escrever('ear mano, de boa?')
break

case 'responda':
enviar('opa')
break

//CASES DONO
case 'rr': {
    if (!isDono) return enviar('🚫 *Apenas o dono pode reiniciar o bot!*');
        const carre = [
        " ʟᴏᴀᴅɪɴɢ\n《 █▒▒▒▒▒▒▒▒▒》10%",
        " ʟᴏᴀᴅɪɴɢ\n《 ███▒▒▒▒▒▒▒》30%",
        " ʟᴏᴀᴅɪɴɢ\n《 █████▒▒▒▒▒》50%",
        " ʟᴏᴀᴅɪɴɢ\n《 █████████▒》90%",
        " ʟᴏᴀᴅɪɴɢ\n《 ██████████》100%",
        `${bot} reiniciando.`
    ];
    const { key } = await client.sendMessage(from, { text: 'ʟᴏᴀᴅɪɴɢ...' }, { quoted: info });
    for (let i = 0; i < carre.length; i++) {
        await delay(1000); // Espera 1 segundo entre cada atualização
        await client.sendMessage(from, { 
            text: carre[i],
            edit: key // Edita a mensagem original
        });
        }
    setTimeout(() => {
        process.exit(0); // Finaliza o processo atual
    }, 1000); // Espera 1 segundo antes de reiniciar
    break;
}
case 'setnomedono': {
    if (!isDono) return enviar('🚫 *Apenas o dono pode alterar o nome do bot!*');
    const newNameDono = body.slice(prefix.length + 'setnomedono'.length).trim();
    if (!newNameDono) return enviar(`⚠️ Digite o novo nome exemplo ${prefix}setnomedono ${Criador}`);
    try {
        await client.updateProfileName(newNameDono);
        config.Criador = newNameDono;
        fs.writeFileSync('./dono/config.json', JSON.stringify(config, null, 2));
        return enviar(`✅ *Nome do dono alterado:* ${newNameDono}\n(reinicie para validar!)`);
    } catch (error) {
        console.error('Erro ao alterar nome:', error);
        return enviar('❌ *Falha ao alterar o nome do dono!*');
    }
    break;
}

case 'setnome': {
    if (!isDono) return enviar('🚫 *Apenas o dono pode alterar o nome do bot!*');
    const newName = body.slice(prefix.length + 'setnome'.length).trim();
    if (!newName) return enviar(`⚠️ Digite o novo nome exemplo ${prefix}setnome ${bot}`);
    try {
        await client.updateProfileName(newName);
        config.bot = newName;
        fs.writeFileSync('./dono/config.json', JSON.stringify(config, null, 2));
        return enviar(`✅ *Nome do bot alterado para:* ${newName}\n(reinicie para validar!)`);
    } catch (error) {
        console.error('Erro ao alterar nome:', error);
        return enviar('❌ *Falha ao alterar o nome do bot!*');
    }
    break;
}
case 'setprefix': {
    if (!isDono) return enviar('🚫 *Apenas o dono pode alterar o prefixo!*');
    const newPrefix = body.split(' ')[1];
    if (!newPrefix) return enviar(`⚠️ Digite o novo prefixo exemplo ${prefix}setprefix &`);
    config.prefix = newPrefix;
    fs.writeFileSync('./dono/config.json', JSON.stringify(config, null, 2));
    return enviar(`✅ *Prefixo alterado para:* ${newPrefix} (atualizado reinicie para validar!)`);
    break;
}

case 'addvip':
    if (!isDono) return enviar("❌ Comando restrito ao dono!");
    const mentioned = info.message?.extendedTextMessage?.contextInfo?.mentionedJid;
    const numero = mentioned?.[0] || body.split(' ')[1]?.replace(/[^0-9]/g, '');
    if (!numero) return enviar("❌ Marque o usuário ou informe o número completo!");
    const jidVIP = numero.includes('@') ? numero : `${numero}@s.whatsapp.net`;
    try {
        const vips = loadVips();
        if (vips.includes(jidVIP)) {
            return enviar(`❌ @${jidVIP.split('@')[0]} já é VIP!`);
        }
        vips.push(jidVIP);
        saveVips(vips);
        enviar(`✅ @${jidVIP.split('@')[0]} adicionado aos VIPs!`);
    } catch (error) {
        console.error(error);
        enviar("❌ Erro ao adicionar VIP!");
    }
    break;
case 'rmvip':
    if (!isDono) return enviar("❌ Comando restrito ao dono!");
    const mentionedRemove = info.message?.extendedTextMessage?.contextInfo?.mentionedJid;
    const numeroRemove = mentionedRemove?.[0] || body.split(' ')[1]?.replace(/[^0-9]/g, '');
    if (!numeroRemove) return enviar("❌ Marque o usuário ou informe o número completo!");
    const jidRemove = numeroRemove.includes('@') ? numeroRemove : `${numeroRemove}@s.whatsapp.net`;
    try {
        let vips = loadVips();
        if (!vips.includes(jidRemove)) {
            return enviar(`❌ @${jidRemove.split('@')[0]} não está na lista de VIPs!`);
        }
        vips = vips.filter(vip => vip !== jidRemove);
        saveVips(vips);
        enviar(`✅ @${jidRemove.split('@')[0]} removido dos VIPs!`);
    } catch (error) {
        console.error(error);
        enviar("❌ Erro ao remover VIP!");
    }
    break;
    case 'listavip':
    case 'listvip':
    case 'vips':
    if (!isDono) return enviar("❌ Comando restrito ao dono!");
    const vips = loadVips();
    const lista = vips.map(vip => `→ @${vip.split('@')[0]}`).join('\n');
    enviar(`📋 *Lista de VIPs:*\n\n${lista || "Nenhum VIP cadastrado."}`);
    break;
    
// Downloads
case 'playvd': {
    reagir("📹");
    await esperar(900);
    const query = body.slice(prefix.length).trim().split(/ +/).slice(1).join(' ');
    if (!query) {
        return enviar('🔍 Por favor, digite o nome do vídeo. Exemplo: ${prefix}playvd link do video');
    }
    try {
        enviar(`*⟨🎬 Aguarde, o pedido demora um poukinho⟩*`);
        const apiRequestUrl = `${apiUrl}/ytvideo/${apiKey}?url=${encodeURIComponent(query)}`;
        const response = await axios.get(apiRequestUrl, { responseType: 'json', timeout: 600000 });
        if (!response.data || !response.data.videoUrl) {
            throw new Error('Vídeo não encontrado');
        }
        const videoUrl = response.data.videoUrl;
        await client.sendMessage(from, { video: { url: videoUrl }, mimetype: 'video/mp4', caption: `🎬 ${query}` });
    } catch (error) {
        console.error('[ERRO PLAYVD]', error);
        
        const erros = {
            ECONNABORTED: '⌛ Tempo de conexão esgotado',
            ENOTFOUND: '🔌 Erro de conexão com a API',
            ERR_BAD_RESPONSE: '⚠️ Resposta inválida da API',
            default: `❌ ${error.message || 'Erro desconhecido'}`,
        };
        
        enviar(erros[error.code] || erros.default);
    }
    break;
}
//fim
case 'tiktokvd': 
case 'ttvd': {
    try {
        reagir("🎵");
        await esperar(500);
        // Extração correta da URL considerando múltiplos espaços
        const args = texto_exato.split(' ').slice(1);
        const url = args.join(' ').trim();
        if (!url) {
            return enviar(`📌 *Uso correto:* ${prefix}ttvd <link-do-tiktok>\nExemplo: ${prefix}ttvd https://vm.tiktok.com/ZMBsBeeoe/`);
        }
        const processingMsg = await enviar('*📥 Iniciando download do TikTok...*');
        // Regex definitiva para todos os formatos de links
        const tikTokRegex = /https?:\/\/(?:www\.|vm\.|vt\.|m\.)?tiktok\.com\/(?:t\/\w+|@[\w.-]+\/video\/\d+|\w+\/video\/\d+|\S+)/i;
        if (!tikTokRegex.test(url)) {
            await client.sendMessage(from, { delete: processingMsg.key });
            return enviar('❌ *Formato de link inválido!* Exemplos válidos:\n' + 
                '• https://vm.tiktok.com/ZMBsBeeoe/\n' +
                '• https://www.tiktok.com/@user/video/123456789\n' +
                '• https://vt.tiktok.com/ZSdsvCXQJ/');
        }

        // Chamada para API com headers aprimorados
        const apiRequestUrl = `${apiUrl}/tiktok/${apiKey}?url=${encodeURIComponent(url)}`;
        const response = await axios({
            method: 'GET',
            url: apiRequestUrl,
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
                'Accept-Encoding': 'gzip, deflate, br',
                'Referer': 'https://www.tiktok.com/'
            },
            timeout: 150000 // 2.5 minutos
        });

        // Verificação completa da resposta da API
        if (!response.data?.url_video || typeof response.data.url_video !== 'string') {
            throw new Error(response.data?.erro || 'Resposta inválida da API');
        }

        // Envio do vídeo com metadados aprimorados
        await client.sendMessage(from, { 
            video: { url: response.data.url_video }, 
            mimetype: 'video/mp4',
            caption: `🎵 *${response.data.titulo || 'Vídeo do TikTok'}*\n` +
                     `👤 @${response.data.autor || 'autor_desconhecido'}\n` +
                     `⏱ ${response.data.duracao || '00:15'}\n` +
                     `🔗 ${url}`,
            mentions: [sender]
        });

        // Atualização de status e limpeza
        await client.sendMessage(from, { delete: processingMsg.key });
        reagir('✅');

    } catch (error) {
        console.error(chalk.redBright('[ERRO TIKTOKVD]'), error);
        
        const errorMap = {
            ECONNABORTED: '⏳ *Tempo de processamento excedido* - O vídeo era muito longo',
            ENOTFOUND: '🌐 *Erro de conexão* - Verifique sua internet',
            ECONNRESET: '🔁 *Conexão reiniciada* - Tente novamente',
            ERR_BAD_REQUEST: '⚠️ *Link inválido ou vídeo privado*',
            ERR_BAD_RESPONSE: '❌ *Problema na API* - Reporte ao desenvolvedor',
            default: `💢 Erro: ${error.message || 'Falha desconhecida'}`
        };

        const errorMessage = errorMap[error.code] || errorMap.default;
        enviar(errorMessage);
        reagir("❌");
        
        if (processingMsg) {
            await client.sendMessage(from, { delete: processingMsg.key });
        }
    }
    break;
} 

case 'play': {
    reagir(" 🎵")
    await esperar(900)
    const query = body.slice(prefix.length).trim().split(/ +/).slice(1).join(' ');
    if (!query) return enviar('🔍 Por favor, digite o nome da música. Exemplo: !play Bella Ciao');
    try {
        enviar('*ℙℝ𝕆ℂ𝕌ℝ𝔸ℕ𝔻𝕆 𝕊𝕌𝔸 𝕄𝕌𝕊𝕀ℂ𝔸 𝔸𝔾𝕌𝔸ℝ𝔻𝔼...* 🎧')

        // 1. Buscar metadados
        const searchUrl = `${apiUrl}/ytsearch/${apiKey}?nome_da_musica=${encodeURIComponent(query)}`
        const searchResponse = await axios.get(searchUrl, { timeout: 1500000 })
        
        const { videoData, audioLink } = searchResponse.data
        if (!videoData || !audioLink) throw new Error('Dados incompletos da API')

        // 2. Baixar thumbnail
        let thumbPath = null
        if (videoData.thumbnail) {
            try {
                const thumbResponse = await axios.get(videoData.thumbnail, {
                    responseType: 'arraybuffer',
                    timeout: 1000000
                })
                
                thumbPath = path.join(TEMP_DIRECTORY, `thumb_${Date.now()}.jpg`)
                await fs.promises.writeFile(thumbPath, thumbResponse.data)
                
                // Enviar preview
                await client.sendMessage(from, {
                    image: { url: thumbPath },
                    caption: `*🎵 ${videoData.titulo}*` + 
                            `\n\n📅 Publicação: ${formatarData(videoData.dataPublicacao)}` +
                            `\n👀 Visualizações: ${formatarNumero(videoData.visualizacoes)}`,
                    mentions: [from]
                })
                
            } catch (thumbError) {
                console.log('⚠️ Erro na thumbnail:', thumbError.message)
                // Envia apenas o texto se falhar
                enviar(`*🎵 ${videoData.titulo}*\n` +
                      `Publicação: ${formatarData(videoData.dataPublicacao)}\n` +
                      `Visualizações: ${formatarNumero(videoData.visualizacoes)}`)
            }
        }

        // 3. Baixar áudio
        const audioResponse = await axios.get(audioLink, {
            responseType: 'arraybuffer',
            timeout: 3000000
        })

        // 4. Salvar áudio temporário
        const audioPath = path.join(TEMP_DIRECTORY, `audio_${Date.now()}.mp3`)
        await fs.promises.writeFile(audioPath, audioResponse.data)

        // 5. Enviar áudio
        await client.sendMessage(from, {
            audio: { url: audioPath },
            mimetype: 'audio/mpeg',
            contextInfo: {
                mentionedJid: [from]
            }
        })

        // 6. Limpeza
        setTimeout(async () => {
            const cleanups = []
            if (thumbPath) cleanups.push(fs.promises.unlink(thumbPath))
            cleanups.push(fs.promises.unlink(audioPath))
            
            Promise.allSettled(cleanups)
                .then(results => 
                    results.forEach(({status}) => 
                        console.log(status === 'fulfilled' ? '🗑️ Arquivos limpos' : '⚠️ Falha na limpeza')
                    )
                )
        }, 30000)

    } catch (error) {
        console.error('❌ Erro no play:', error)
        const statusMap = {
            403: '🔒 Chave API inválida',
            404: '❌ Música não encontrada',
            500: '🔥 Erro no servidor de música',
            ECONNABORTED: '⏰ Tempo esgotado',
            ENOTFOUND: '🌐 Servidor indisponível'
        }
        enviar(statusMap[error.response?.status || error.code] || '❌ Erro ao processar a música')
    }
    break
}
//fim

//ping
case 'ping': {
    let responseTime = (Date.now() / 1000) - (info.messageTimestamp || 0);
    let status = responseTime < 1 ? '🟢 EXCELENTE' : responseTime < 2 ? '🟠 BOA' : '🔴 LENTA';
    
    let responseMessage = `
⚡ *𝐏𝐎𝐖𝐄𝐑 𝐒𝐏𝐄𝐄𝐃* ⚡

┏━━━━━━━━━━◈❖◈━━━━━━━━━━┓
   🌸 *Usuário ${pushname}!*  
   🕊️ Seu comando voou rápido como!
┗━━━━━━━━━━◈✾◈━━━━━━━━━━┛

╭───⊰ ✨ 𝐄𝐒𝐓𝐀𝐓Í𝐒𝐓𝐈𝐂𝐀𝐒 ✨ ⊱───╮
│ • ⏳ *Tempo de resposta:* 
│   ───⟥ _${responseTime.toFixed(3).replace('.', ',')}s_ ⟤───
│ • 📊 *Velocidade:* ${status}
│ • 🚀 *Estado:* OPERAÇÃO TURBO
╰────────────────────────╯

🔮 *Conexão estável e amorosa!*
💞 ${bot} sempre pronto para você!`;

    await client.sendMessage(from, { 
        text: responseMessage, 
        footer: `⏰ ${new Date().toLocaleTimeString()} | ❤️ Manutenção contínua do coração digital`
    }, { quoted: info });
    break;
}
//fim

// menus
case "menu+18":
reagir("🔥")
  await require('./dono/menus/menu18.js')(client, from, pushname, comando, prefix, reagir)
  break
case "menudono":
reagir("👑")
  await require('./dono/menus/menudono.js')(client, from, pushname, comando, prefix)
  break
  case 'menu':
  case 'm':
  reagir ("⚡");
    comandos.menuCommand( client, from, pushname, prefix, bot,
      dono, comando, responseTime, Criador );
    break;
   
  case 'menuadm':
    await menuadmModule.menuadmCommand(
      client, from, pushname, prefix, comando, args, isGroup, isGroupAdmins, enviar, reagir, esperar, bot );
   break;
case 'menubrincar':
    // Corrigindo a chamada do módulo
    await require('./dono/menus/brincar.js').brincarMenu(
        client, from, pushname, prefix, comando, args, 
        isGroup, isGroupAdmins, enviar, reagir, esperar
    );
    break;
case "creditos":
enviar(`
┌──────────────
│Comunidade🌎
└──────────────
┌──────────────
│👉🏻   Siga o canal "𝐋𝐲𝐧𝐁𝐚𝐜𝐤" no WhatsApp: https://whatsapp.com/channel/0029Vb5eTRI4SpkFOlLtX40R
└──────────────
┌──────────────
│💎Criador: Henrique
└──────────────
┌──────────────
│👉🏻 Wa.me/5521969869469
└──────────────`)
break;


// comandos +18🔞 adulto
case 'iehentai': {
  if(isGroup&&!isNSFW(from))return enviar(`❌ Comando bloqueado em grupos familiares!\n▸ Peça ao adm para ativar os modo +18 ${prefix}18 1`)
  const searchTerm = body.slice(prefix.length + 9).trim();
  if (!searchTerm) {
    return client.sendMessage(info.key.remoteJid, { 
      text: `🔍 *Formato correto:* ${prefix}pesquisar "termo exato"\nEx: ${prefix}pesquisar "language:portuguese"` 
    }, { quoted: info });
  }
  try {
    const response = await axios.get(`https://e-hentai.org/?f_search=${encodeURIComponent('"' + searchTerm + '"')}`, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36',
        'Cookie': 'nw=1; igneous=1938245a3;',
        'Referer': 'https://e-hentai.org/',
        'Accept-Language': 'pt-BR,pt;q=0.9'
      },
      timeout: 30000
    });
    const $ = cheerio.load(response.data);
    const results = [];
    // Seleção Corrigida 2024
    $('a[href*="/g/"]').each((i, el) => {
      const $link = $(el);
      const href = $link.attr('href');
      const title = $link.find('.glink').text().trim();
      const tags = $link.find('.gt').map((j, tag) => $(tag).text().trim()).get();
      if (title && href && tags.length > 0) {
        results.push({
          title,
          link: href,
          tags: tags.filter(t => !t.includes(':') && t.length > 2) // Filtra metatags
        });
      }
    });
    if (results.length === 0) {
      const errorPage = $('#errorpage');
      if (errorPage.length > 0) {
        return client.sendMessage(info.key.remoteJid, { 
          text: '⚠️ Bloqueado pelo E-Hentai!\nAtualize cookies e User-Agent' 
        }, { quoted: info });
      }
      return client.sendMessage(info.key.remoteJid, { 
        text: `⚠️ Use a sintaxe exata:\n${prefix}pesquisar "language:portuguese translated"\n\n*Filtros válidos:*\n- language:portuguese\n- translated\n- parody:...` 
      }, { quoted: info });
    }
    const resposta = results.map((item, idx) => 
      `*${idx + 1}.* ${item.title}\n🔗 ${item.link}\n🏷️ ${item.tags.join(', ') || 'Tags ocultas'}`
    ).join('\n\n');
    await client.sendMessage(info.key.remoteJid, {
      text: `🔞 *Resultados para "${searchTerm}"*\n\n${resposta}`
    }, { quoted: info });
  } catch (error) {
    console.error('[PESQUISA FALHOU]', error);
    await client.sendMessage(info.key.remoteJid, { 
      text: '💢 Erro crítico! Verifique:\n1. VPN ativada\n2. Cookies atualizados\n3. Termos entre aspas\n\nEx: &pesquisar "pt-br"' 
    }, { quoted: info });
  }
  break;
}
case 'xv':{
if(isGroup&&!isNSFW(from))return enviar(`❌ Comando bloqueado em grupos familiares!\n▸ Peça ao adm para ativar os modo +18 ${prefix}18 1`)
if(!isVip(sender))return enviar('🤑 *Exclusivo para VIPs!*')
const termo=body.slice(prefix.length+2).trim()
if(!termo)return enviar(`📌 Uso: ${prefix}xv <pesquisa>\nEx: *${prefix}xv cenas quentes*`)
try{
await client.sendPresenceUpdate('composing',from)
const{data}=await axios.get(`https://www.xvideos.com/?k=${encodeURIComponent(termo)}`,{
headers:{'User-Agent':'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'}})
const $=cheerio.load(data)
const videos=[]
$('.mozaique .thumb-block').each((i,el)=>{
if(i>=5)return
const title=$(el).find('.title a').text().trim()
const duration=$(el).find('.duration').text().trim()
const url='https://www.xvideos.com'+$(el).find('a').attr('href').split('?')[0]
const thumb=$(el).find('img').attr('data-src')||$(el).find('img').attr('src')
videos.push({title,duration,url,thumb})})
if(!videos.length)return enviar(`🔍 Nada encontrado para: *${termo}*`)
xvCache.set(sender,{results:videos,expires:Date.now()+6e5})
const lista=videos.map((v,i)=>`*${i+1}.* ${v.title.slice(0,50)}${v.title.length>50?'...':''}\n⏱ ${v.duration} | 🔗 ${v.url.replace('xvideos.com','xvdl.io')}`).join('\n\n▬▬▬▬▬▬▬▬▬▬\n')
enviar(`🔞 *Resultados para "${termo}"*\n\n${lista}\n\n📥 *Para baixar:*\n*${prefix}dxv <número>*\n⚠️ Links expiram em 10 minutos`)}
catch(e){enviar(`❌ Erro: ${e.code||'Tente mais tarde'}`)}
break;}

case 'dxv':{
if(isGroup&&!isNSFW(from))return enviar('❌ Comando bloqueado em grupos familiares!\n▸ Modo +18 desativado peça ao adm para ativar')
if(!isVip(sender))return enviar('🤑 *Exclusivo para VIPs!*')
const cache=xvCache.get(sender)
if(!cache||Date.now()>cache.expires)return enviar('⏳ *Pesquisa expirada!*\nUse *'+prefix+'xv* novamente')
const num=parseInt(body.split(' ')[1])
if(isNaN(num)||num<1||num>cache.results.length)return enviar(`❌ Use 1-${cache.results.length}\nEx: *${prefix}dxv 2*`)
try{
const video=cache.results[num-1]
enviar('⏳ *Processando...*\n▸ Enviando no seu privado!')
const{data}=await axios.get(video.url,{headers:{'User-Agent':'Mozilla/5.0'},timeout:2e4})
const $=cheerio.load(data)
const downloadUrl=$('script:contains("setVideoUrlHigh")').html().match(/setVideoUrlHigh\('(.*?)'/)[1]
if(!downloadUrl)return enviar('⚠️ Vídeo não disponível')
await client.sendMessage(sender,{video:{url:downloadUrl},caption:`✅ ${video.title}\n⏱ ${video.duration}`})}
catch(e){enviar(`❌ Falha: ${e.message.includes('timeout')?'Tempo excedido':'Erro no servidor'}`)}
break;}

case 'xvideos':{try{if(!isNSFW(from))return enviar('❌ *Este comando requer o modo +18 ativado!*\n👉 Peça a um admin usar *'+prefix+'18 1*')
const userJid=info.key.participant||info.key.remoteJid
const searchTerm=body.slice(prefix.length+7).trim()
if(!searchTerm)return enviar(`❌ Formato incorreto!\nUse: *${prefix}xvideos pesquisa*`)
const searchUrl=`https://www.xvideos.com/?k=${encodeURIComponent(searchTerm)}`
await client.sendMessage(userJid,{text:`🔍 Pesquisando: *${searchTerm}*...`})
const{data:searchData}=await axios.get(searchUrl,{headers:{'User-Agent':'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36','Cookie':'content=1; age-check-done=1'},timeout:15000})
const $=cheerio.load(searchData)
const firstVideo=$('div.thumb-block').first()
if(!firstVideo.length)return client.sendMessage(userJid,{text:'❌ Nenhum vídeo encontrado'})
const videoLink=firstVideo.find('a').attr('href')
const videoTitle=firstVideo.find('p.title').text().trim().replace(/[^\w\s]/gi,'')||'video'
const videoPageUrl=`https://www.xvideos.com${videoLink}`
await client.sendMessage(userJid,{text:`📥 Obtendo: *${videoTitle}*...`})
const{data:videoPage}=await axios.get(videoPageUrl,{headers:{'Referer':searchUrl,'User-Agent':'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36'},timeout:20000})
const videoRegex=/html5player\.setVideoUrlHigh\(\s*'([^']+)'\s*\)/
const match=videoPage.match(videoRegex)
if(!match)return client.sendMessage(userJid,{text:'❌ Formato do vídeo não suportado'})
const videoUrl=match[1].replace(/\\\//g,'/')
const fileName=`${videoTitle.substring(0,50).replace(/\s+/g,'_')}.mp4`
await client.sendMessage(userJid,{text:`⬇️ Baixando... (${videoUrl.split('/')[3].substring(0,15)})`})
const tmpFile=`./temp/${Date.now()}_${videoTitle.substring(0,10)}.mp4`
const writer=fs.createWriteStream(tmpFile)
const videoResponse=await axios({method:'GET',url:videoUrl,responseType:'stream',headers:{'Referer':videoPageUrl,'Origin':'https://www.xvideos.com'},timeout:600000})
videoResponse.data.pipe(writer)
await new Promise((resolve,reject)=>{writer.on('finish',resolve)
writer.on('error',(error)=>{fs.unlinkSync(tmpFile)
client.sendMessage(userJid,{text:'❌ Erro durante o download'})
reject(error)})})
await client.sendMessage(userJid,{document:fs.readFileSync(tmpFile),fileName:fileName,caption:`🔞 ${videoTitle}`,mimetype:'video/mp4',viewOnce:true})
fs.unlinkSync(tmpFile)
enviar(`✅ Vídeo enviado no privado de @${userJid.split('@')[0]}`,{mentions:[userJid]})}
catch(error){console.error('Erro xvideos:',error)
const errorMsg=error.response?.status===403?'Acesso bloqueado':error.code==='ECONNRESET'?'Conexão interrompida':error.message.substring(0,50)
client.sendMessage(userJid,{text:`❌ Falha: ${errorMsg}`})}
break;}

case 'neter': {
    if (!isNSFW(from)) {
        return enviar('❌ *Este comando requer o modo +18 ativado!*\n' +
                     `👉 Peça a um admin usar *${prefix}18 1*`);
    }
    const isGroupCheck = info.key.remoteJid.endsWith('@g.us');
    const privateJid = info.key.participant;
    
    if (isGroupCheck) {
        const groupMetadata = await client.groupMetadata(info.key.remoteJid);
        if (!isVip(info.key.participant)) {
            return enviar('🤑 *Apenas usuários VIPs podem usar este comando*');
        }
    }

    const messageText = `${isGroupCheck ? "*Olha o PV amor...*" : "Enviando"} 😈`;
    enviar(messageText, privateJid);

    const numb = Math.floor(Math.random() * 30) + 1;
    const imageUrl = `https://raw.githubusercontent.com/Herojoii/midiiporno/main/packs/netersg/%20${numb}.jpg`;
    const buttonMessage = {
        image: { url: imageUrl },
        caption: '🔞netersg🔞',
        footer: `${bot}`,
        headerType: 4,
    };
    await client.sendMessage(privateJid, buttonMessage);
}
break;

case 'egrilvideo': {
    if (!isNSFW(from)) {
        return enviar('❌ *Este comando requer o modo +18 ativado!*\n' +
                     `👉 Peça a um admin usar *${prefix}18 1*`);
    }
    const isGroupCheck = info.key.remoteJid.endsWith('@g.us');
    const privateJid = info.key.participant;
    
    if (isGroupCheck) {
        const groupMetadata = await client.groupMetadata(info.key.remoteJid);
        if (!isVip(info.key.participant)) {
            return enviar('🤑 *Apenas usuários VIPs podem usar este comando*');
        }
    }

    const messageText = `${isGroup ? "*Olha o PV amor...*" : "Enviando"} 😈`;
    enviar(messageText, privateJid);
    
    const numb = Math.floor(Math.random() * 14) + 1;
    const videoUrl = `https://github.com/Herojoii/midiiporno/raw/main/packs/EgrilVideo/%20${numb}.mp4`;
    const buttonMessage = {
        video: { url: videoUrl },
        caption: '🔞EgrilVideo🔞',
        footer: `${bot}`,
        headerType: 4,
    };
    await client.sendMessage(privateJid, buttonMessage);
}
break;

case 'vita': {
    if (!isNSFW(from)) {
        return enviar('❌ *Este comando requer o modo +18 ativado!*\n' +
                     `👉 Peça a um admin usar *${prefix}18 1*`);
    }
    const isGroupCheck = info.key.remoteJid.endsWith('@g.us');
    const privateJid = info.key.participant;
    if (isGroupCheck) {
        const groupMetadata = await client.groupMetadata(info.key.remoteJid);
        if (!isVip(info.key.participant)) {
            return enviar('🤑 *Apenas usuários VIPs podem usar este comando*');
        }
    }

    const messageText = `${isGroupCheck ? "*Olha o PV amor...*" : "Enviando"} 😈`;
    enviar(messageText, privateJid);

    const numb = Math.floor(Math.random() * 30) + 1;
    const imageUrl = `https://raw.githubusercontent.com/Herojoii/midiiporno/main/packs/VitaCelestine/%20${numb}.jpg`;
    const buttonMessage = {
        image: { url: imageUrl },
        caption: '🔞VitaCelestine🔞',
        footer: `${bot}`,
        headerType: 4,
    };
    await client.sendMessage(privateJid, buttonMessage);
}
break;

case 'carnie': {
    if (!isNSFW(from)) {
        return enviar('❌ *Este comando requer o modo +18 ativado!*\n' +
                     `👉 Peça a um admin usar *${prefix}18 1*`);
    }
    const isGroupCheck = info.key.remoteJid.endsWith('@g.us');
    const privateJid = info.key.participant;
    
    if (isGroupCheck) {
        const groupMetadata = await client.groupMetadata(info.key.remoteJid);
        if (!isVip(info.key.participant)) {
            return enviar('🤑 *Apenas usuários VIPs podem usar este comando*');
        }
    }

    const messageText = `${isGroupCheck ? "*Olha o PV amor...*" : "Enviando"} 😈`;
    enviar(messageText, privateJid);
    
    const numb = Math.floor(Math.random() * 29) + 1;
    const imageUrl = `https://raw.githubusercontent.com/Herojoii/midiiporno/main/packs/carniello/%20${numb}.jpg`;
    const buttonMessage = {
        image: { url: imageUrl },
        caption: '🔞carniello🔞',
        footer: `${bot}`,
        headerType: 4,
    };
    await client.sendMessage(privateJid, buttonMessage);
}
break;

case 'egril': {
    if (!isNSFW(from)) {
        return enviar('❌ *Este comando requer o modo +18 ativado!*\n' +
                     `👉 Peça a um admin usar *${prefix}18 1*`);
    }
    const isGroupCheck = info.key.remoteJid.endsWith('@g.us');
    const privateJid = info.key.participant;    
    if (isGroupCheck) {
        const groupMetadata = await client.groupMetadata(info.key.remoteJid);
        if (!isVip(info.key.participant)) {
            return enviar('🤑 *Apenas usuários VIPs podem usar este comando*');
        }
    }

    const messageText = `${isGroupCheck ? "*Olha o PV amor...*" : "Enviando"} 😈`;
    enviar(messageText, privateJid);
    
    const numb = Math.floor(Math.random() * 36) + 1;
    const imageUrl = `https://raw.githubusercontent.com/Herojoii/midiiporno/main/packs/egril/%20${numb}.jpg`;
    const buttonMessage = {
        image: { url: imageUrl },
        caption: '🔞egril🔞',
        footer: `${bot}`,
        headerType: 4,
    };
    await client.sendMessage(privateJid, buttonMessage);
}
break;
case 'trap': {
    if (isGroup && !isNSFW(from)) {
        return enviar('🔞 Conteúdo NSFW bloqueado! Ative com *!nsfw on*');
    }
    if (!isGroup && !isVip(sender)) { 
        setTimeout(() => reagir("🚫"), 300);
        enviar("[❗] *Este recurso no PV só está liberado para os usuários VIP* ❌");
        return client.sendMessage(from, { 
            audio: { url: './arquivos/audios/vip.mp3' }, 
            mimetype: 'audio/mp4', 
            ptt: true 
        }, { quoted: info });
    }
    try {
        setTimeout(() => reagir( "😈"), 300);
        const responseMsg = isGroup 
            ? `*Olha o PV, amor...* 😈` 
            : "Gerando conteúdo... 😈\nSó um instante!";
        
        await client.sendMessage(from, { text: responseMsg }, { quoted: info });

        const { trap } = require('./arquivos/nsfw/animes.js');
        const totalnsfw = trap[Math.floor(Math.random() * trap.length)];
        
        await client.sendMessage(sender, {
            image: { url: totalnsfw },
            caption: `🔞 *Aqui está seu conteúdo ${pushname}*\n` +
                     `${bot} • ${new Date().toLocaleTimeString('pt-BR')}`,
            mentions: [sender]
        }, { quoted: info });

    } catch (error) {
        console.error('Erro no comando trap:', error);
        client.sendMessage(from, { 
            text: `❌ Erro ao enviar conteúdo: ${error.message}` 
        }, { quoted: info });
        setTimeout(() => reagir( "❌"), 300);
    }
    break;
}
case 'loli': {
    if (isGroup && !isNSFW(from)) {
        return enviar('🔞 Conteúdo bloqueado! Use *!nsfw on* para desbloquear');
    }
    
    if (!isGroup && !isVip(sender)) {
        setTimeout(() => reagir("🚫"), 300);
        enviar("[⚠️] *Recurso VIP! Adquira VIP para usar no PV*");
        return client.sendMessage(from, { 
            audio: { url: './arquivos/audios/vip.mp3' }, 
            mimetype: 'audio/mp4', 
            ptt: true 
        }, { quoted: info });
    }
    
    try {
        setTimeout(() => reagir( "👧"), 300);
        const responseMsg = isGroup 
            ? `*Cheque seu PV, querido...* 👀` 
            : "Preparando sua mídia... 🧸";
        
        await client.sendMessage(from, { text: responseMsg }, { quoted: info });

        const { loli } = require('./arquivos/nsfw/animes.js');
        const media = loli[Math.floor(Math.random() * loli.length)];
        
        await client.sendMessage(sender, {
            image: { url: media },
            caption: `🎀 *Sua pequena chegou ${pushname}*\n` +
                     `${bot} • ${new Date().toLocaleTimeString('pt-BR')}`,
            mentions: [sender]
        }, { quoted: info });

    } catch (error) {
        console.error('Erro no comando loli:', error);
        client.sendMessage(from, { 
            text: `❌ Falha ao enviar: ${error.message}` 
        }, { quoted: info });
        setTimeout(() => reagir("💢"), 300);
    }
    break;
}

// Comando Hentai
case 'hentai': {
    if (isGroup && !isNSFW(from)) {
        return enviar('🔞 Conteúdo adulto bloqueado! Ative o NSFW');
    }
    
    if (!isGroup && !isVip(sender)) { 
        setTimeout(() => reagir( "🔇"), 300);
        enviar("[🔒] *Acesso exclusivo para VIPs!*");
        return client.sendMessage(from, { 
            audio: { url: './arquivos/audios/vip.mp3' }, 
            mimetype: 'audio/mp4', 
            ptt: true 
        }, { quoted: info });
    }
    
    try {
        setTimeout(() => reagir("??"), 300);
        const responseMsg = isGroup 
            ? `*Verifique suas mensagens privadas...* 📩` 
            : "Sua mídia está sendo processada... 💦";
        
        await client.sendMessage(from, { text: responseMsg }, { quoted: info });

        const { hentai } = require('./arquivos/nsfw/animes.js');
        const media = hentai[Math.floor(Math.random() * hentai.length)];
        
        await client.sendMessage(sender, {
            image: { url: media },
            caption: `💢 *Hentai quentinho para ${pushname}*\n` +
                     `${bot} • ${new Date().toLocaleTimeString('pt-BR')}`,
            mentions: [sender]
        }, { quoted: info });

    } catch (error) {
        console.error('Erro no comando hentai:', error);
        client.sendMessage(from, { 
            text: `⛔ Erro crítico: ${error.message}` 
        }, { quoted: info });
        setTimeout(() => reagir( "💥"), 300);
    }
    break;
}
// Comando Ass
case 'ass': {
    if (isGroup && !isNSFW(from)) {
        return enviar('🔞 Conteúdo proibido! Ative o NSFW primeiro');
    }
    
    if (!isGroup && !isVip(sender)) { 
        setTimeout(() => reagir("🍑"), 300);
        enviar("[⚠️] *Visualizar esta parte requer VIP!*");
        return client.sendMessage(from, { 
            audio: { url: './arquivos/audios/vip.mp3' }, 
            mimetype: 'audio/mp4', 
            ptt: true 
        }, { quoted: info });
    }
    
    try {
        setTimeout(() => reagir("😏"), 300);
        const responseMsg = isGroup 
            ? `*Bum bum chegando no PV...* 🍑` 
            : "Selecionando o melhor ângulo... 📸";
        
        await client.sendMessage(from, { text: responseMsg }, { quoted: info });

        const { ass } = require('./arquivos/nsfw/animes.js');
        const media = ass[Math.floor(Math.random() * ass.length)];
        
        await client.sendMessage(sender, {
            image: { url: media },
            caption: `🍑 *Sua foto exclusiva ${pushname}*\n` +
                     `${bot} • ${new Date().toLocaleTimeString('pt-BR')}`,
            mentions: [sender]
        }, { quoted: info });

    } catch (error) {
        console.error('Erro no comando ass:', error);
        client.sendMessage(from, { 
            text: `❌ Não foi possível enviar o conteúdo: ${error.message}` 
        }, { quoted: info });
        setTimeout(() => reagir("🤦"), 300);
    }
    break;
}

// Comando Gangbang
case 'gangbang': {
    if (isGroup && !isNSFW(from)) {
        return enviar('🚫 Conteúdo explícito bloqueado! Ative o modo adulto');
    }
    
    if (!isGroup && !isVip(sender)) { 
        setTimeout(() => reagir("🔞"), 300);
        enviar("[💢] *Conteúdo intenso apenas para VIPs!*");
        return client.sendMessage(from, { 
            audio: { url: './arquivos/audios/vip.mp3' }, 
            mimetype: 'audio/mp4', 
            ptt: true 
        }, { quoted: info });
    }
    
    try {
        setTimeout(() => reagir("👥"), 300);
        const responseMsg = isGroup 
            ? `*Conteúdo pesado chegando no PV...* 💥` 
            : "Montando cena quente... 🔥";
        
        await client.sendMessage(from, { text: responseMsg }, { quoted: info });

        const { gangbang } = require('./arquivos/nsfw/animes.js');
        const media = gangbang[Math.floor(Math.random() * gangbang.length)];
        
        await client.sendMessage(sender, {
            image: { url: media },
            caption: `👥 *Cena intensa para ${pushname}*\n` +
                     `${bot} • ${new Date().toLocaleTimeString('pt-BR')}`,
            mentions: [sender]
        }, { quoted: info });

    } catch (error) {
        console.error('Erro no comando gangbang:', error);
        client.sendMessage(from, { 
            text: `💣 Explosão de erro: ${error.message}` 
        }, { quoted: info });
        setTimeout(() => reagir("💥"), 300);
    }
    break;
}

// Comando Kasedaiki (personalizado)
case 'kasedaiki': {
    if (isGroup && !isNSFW(from)) {
        return enviar('🎌 Conteúdo especial bloqueado! Ative o NSFW');
    }
    
    if (!isGroup && !isVip(sender)) { 
        setTimeout(() => reagir( "🎎"), 300);
        enviar("[🎏] *Conteúdo japonês premium apenas para VIPs!*");
        return client.sendMessage(from, { 
            audio: { url: './arquivos/audios/vip.mp3' }, 
            mimetype: 'audio/mp4', 
            ptt: true 
        }, { quoted: info });
    }
    
    try {
        setTimeout(() => reagir( "🌸"), 300);
        const responseMsg = isGroup 
            ? `*Segure o ar... conteúdo chegando!* 🎐` 
            : "Preparando arte japonesa... 🎨";
        
        await client.sendMessage(from, { text: responseMsg }, { quoted: info });

        const { kasedaiki } = require('./arquivos/nsfw/animes.js');
        const media = kasedaiki[Math.floor(Math.random() * kasedaiki.length)];
        
        await client.sendMessage(sender, {
            image: { url: media },
            caption: `🎴 *Kawaii desu ne, ${pushname}-kun*\n` +
                     `${bot} • ${new Date().toLocaleTimeString('pt-BR')}`,
            mentions: [sender]
        }, { quoted: info });

    } catch (error) {
        console.error('Erro no comando kasedaiki:', error);
        client.sendMessage(from, { 
            text: `🎭 Erro na apresentação: ${error.message}` 
        }, { quoted: info });
        setTimeout(() => reagir("🗻"), 300);
    }
    break;
}
// Comando Neko2 (versão alternativa)
case 'neko': {
    if (isGroup && !isNSFW(from)) {
        return enviar('🔞 Conteúdo bloqueado! Ative o modo adulto');
    }
    
    if (!isGroup && !isVip(sender)) { 
        setTimeout(() => reagir("🐾"), 300);
        enviar("[😿] *Feature especial para membros VIP*");
        return client.sendMessage(from, { 
            audio: { url: './arquivos/audios/vip.mp3' }, 
            mimetype: 'audio/mp4', 
            ptt: true 
        }, { quoted: info });
    }
    
    try {
        setTimeout(() => reagir( "😻"), 300);
        const responseMsg = isGroup 
            ? `*Miau~ Check your DM* 🐱` 
            : "Garimpando nekos... 🎣";
        
        await client.sendMessage(from, { text: responseMsg }, { quoted: info });

        const { neko2 } = require('./arquivos/nsfw/animes.js');
        const media = neko2[Math.floor(Math.random() * neko2.length)];
        
        await client.sendMessage(sender, {
            image: { url: media },
            caption: `🐾 *Nyaa~ ${pushname}-senpai*\n` +
                     `${bot} • ${new Date().toLocaleTimeString('pt-BR')}`,
            mentions: [sender]
        }, { quoted: info });

    } catch (error) {
        console.error('Erro no comando neko2:', error);
        client.sendMessage(from, { 
            text: `😾 Falha na entrega: ${error.message}` 
        }, { quoted: info });
        setTimeout(() => reagir( "🌪️"), 300);
    }
    break;
}
case 'plaq': {
    try {
        // Obter texto após o comando
        const text = body.split(' ').slice(1).join(' ');
        if (!text) return enviar(`❌ Formato incorreto! Use: *${prefix}plaq Seu Texto Aqui*`);

        // URL da API com encodeURIComponent para caracteres especiais
        const apiUrl = `http://0.0.0.0:3239/image/Henrique10/texto=${encodeURIComponent(text)}`;
        
        // Baixar a imagem da rota
        const response = await axios.get(apiUrl, { responseType: 'arraybuffer' });
        
        // Enviar a imagem diretamente
        await client.sendMessage(from, {
            image: Buffer.from(response.data, 'binary'),
            mimetype: 'image/jpeg',
            caption: `✅ *Placa gerada com sucesso!*\nTexto: ${text}`,
            mentions: [sender]
        }, { quoted: info });

    } catch (error) {
        console.error('Erro no comando plaq:', error);
        enviar('❌ Falha na geração da placa. Tente novamente mais tarde!');
    }
    break;
}

//fim
// case sticker
case 'sticker':
case 's':
    try {
        const { exec } = require('child_process');
        const fs = require('fs');

        if (!info.message.extendedTextMessage || !info.message.extendedTextMessage.contextInfo.quotedMessage) {
            return client.sendMessage(from, { text: 'Marque uma imagem, vídeo ou figurinha!' }, { quoted: info });
        }

        client.sendMessage(from, { text: '🕡 Criando sua fig aguarde' }, { quoted: info });

        async function getFileBuffer(message, type) {
            const stream = await downloadContentFromMessage(message, type);
            let buffer = Buffer.from([]);
            for await (const chunk of stream) {
                buffer = Buffer.concat([buffer, chunk]);
            }
            return buffer;
        }

        function getRandom(ext) {
            return `${Math.floor(Math.random() * 10000)}${ext}`;
        }

        const quotedMsg = info.message.extendedTextMessage.contextInfo.quotedMessage;
        const mediaObj = quotedMsg.imageMessage || quotedMsg.videoMessage || quotedMsg.stickerMessage;

        if (!mediaObj || !mediaObj.mimetype) {
            return client.sendMessage(from, { text: 'Mídia inválida ou não reconhecida!' }, { quoted: info });
        }

        const mediaType = mediaObj.mimetype.includes('image') ? 'image' :
                          mediaObj.mimetype.includes('video') ? 'video' : 'sticker';

        const buffer = await getFileBuffer(mediaObj, mediaType);

        const tempFile = getRandom(`.${mediaObj.mimetype.split('/')[1]}`);
        fs.writeFileSync(tempFile, buffer);
        const outputSticker = getRandom('.webp');
        const tempExif = 'temp.exif';

        const stickerPackName = info.pushName || 'Usuário';
        const stickerPackPublisher = `Bot:MinatoMd\nUser:${info.pushName}\ndonoBot:${dono}`;

        const json = {
            "sticker-pack-name": stickerPackName,
            "sticker-pack-publisher": stickerPackPublisher
        };
        const exifAttr = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00, 0x00, 0x00, 0x00, 0x00, 0x16, 0x00, 0x00, 0x00]);
        const jsonBuff = Buffer.from(JSON.stringify(json), "utf-8");
        const exif = Buffer.concat([exifAttr, jsonBuff]);
        exif.writeUIntLE(jsonBuff.length, 14, 4);
        fs.writeFileSync(tempExif, exif);

        let ffmpegCommand;
        if (mediaType === 'video') {
            ffmpegCommand = `ffmpeg -i ${tempFile} -vf "scale=512:512:force_original_aspect_ratio=decrease,pad=512:512:-1:-1:color=black,fps=15" -vcodec libwebp -lossless 1 -preset default -loop 0 -an -vsync 0 -t 10 ${outputSticker}`;
        } else {
            ffmpegCommand = `ffmpeg -i ${tempFile} -vf "scale=512:512:force_original_aspect_ratio=decrease" -vcodec libwebp -lossless 1 -preset default -loop 0 -an -vsync 0 ${outputSticker}`;
        }

        exec(ffmpegCommand, (err) => {
            fs.unlinkSync(tempFile);
            if (err) {
                console.error(err);
                return client.sendMessage(from, { text: 'Erro ao criar o sticker. Tente novamente!' }, { quoted: info });
            }

            exec(`webpmux -set exif ${tempExif} ${outputSticker} -o ${outputSticker}`, (err) => {
                fs.unlinkSync(tempExif);
                if (err) {
                    console.error(err);
                    return client.sendMessage(from, { text: 'Erro ao adicionar metadados. Tente novamente!' }, { quoted: info });
                }

                client.sendMessage(from, { sticker: fs.readFileSync(outputSticker) }, { quoted: info });
                fs.unlinkSync(outputSticker);
            });
        });
    } catch (error) {
        console.error(error);
        client.sendMessage(from, { text: '❌ Algo deu errado! Tente novamente.' }, { quoted: info });
    }
    break; 
    // OTAKU
case 'menuaot': {
    if (!isRpg(from)) return enviar(`❌ *Modo RPG desativado!*\nUse ${prefix}rpg 1 para ativar`)
    const menuText = `
╭─────────────── *ATTACK ON TITAN RPG* ────────────────╮
│                                                      │
│  🔰 _Sobrevivência | Estratégia | Batalhas Épicas_   │
│                                                      │
╠════════════════≪ *COMANDOS PRINCIPAIS* ≫═════════════╣
║                                                      │
╠═ *📝 REGISTRO*                                       │
║ ${prefix}rgaot [personagem]                   │
║ Ex: ${prefix}rgaot Levi                       │
║                                                      │
╠═ *⚔️ SISTEMA DE COMBATE*                             │
║ ${prefix}atacar @jogador                             │
║ ${prefix}rankaot (Top 5 jogadores)                   │
║ ${prefix}cassino (apostar)                                                     │
║
╠═ *💼 GERENCIAMENTO*                                  │
║ ${prefix}paot (Ver perfil)                           │
║ ${prefix}loja (Itens disponíveis)                    │
║ ${prefix}comprar [item] (Comprar equipamentos)       │
║                                                      │
╠═ *🛠️ COMANDOS ADMIN*                                 │
║ ${prefix}rpg 1/0 (Ativar/Desativar sistema)          │
║                                                      │
╠════════════════≪ *MECÂNICAS* ≫═══════════════════════╣
║                                                      │
╠═ *💰 GANHAR FUNDOS*                                  │
║ - Eliminar inimigos (+500 por kill)                  │
║ - Roubar fundos em combate (10% chance)              │
║ - Comprar Cristal de Coordenadas (+2000)             │
║ - Bônus VIP (Até 1000 por roubo)                     │
║                                                      │
╠═ *🎯 SISTEMA DE RANKS*                               │
║ Recruta → Soldado ODM → Veterano Elite               │
║ Capitão → Comandante → Herói Paradis → Titã Ancestral│
║                                                      │
╰───────────────≪ *進撃の巨人* ≫───────────────────────╯`.trim()

    try {
        await client.sendMessage(from, { 
            image: { url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqlTYhhrKvlgfoiXpM7MOzWmU1GkHaVCbX_AFkTlbfggpsV8TwHOkj4Mk4&s=10' }, // Imagem AOT
            caption: menuText,
            footer: `⚔️ ${prefix}help para detalhes`,
            mentions: [sender]
        }, { quoted: info })
    } catch (e) {
        console.error('Erro no menu:', e)
        await client.sendMessage(from, { 
            text: `*MENU DA LEGIÃO*\n\n${menuText}`,
            mentions: [sender]
        }, { quoted: info })
    }
    break;
}
case 'listaaot':
case 'participantes':{
if(!isRpg(from))return enviar('❌ *Este comando requer o modo RPG ativado!*\n👉 Peça a um admin usar *'+prefix+'rpg 1*')
if(!isGroup)return enviar('⚠️ Este comando só funciona em grupos!')
try{
const aotData=loadAOTData()
const groupMetadata=await client.groupMetadata(from)
const groupName=groupMetadata.subject||'Grupo Desconhecido'
const membros=Object.entries(aotData).filter(([userId])=>!aotData.blocked?.includes(userId)&&groupMetadata.participants.some(p=>p.id===userId)).map(([userId,data])=>`➤ @${userId.replace('@s.whatsapp.net','')} (${data.personagem}) - ${groupName}`)
if(membros.length===0)return enviar(`🏰 *${groupName}*\n\nNenhum soldado alistado na Legião!`)
const lista=`⚔️ *LEGIÃO DE RECONHECIMENTO - ${groupName}* ⚔️\n\n👥 Membros Ativos (${membros.length}):\n\n${membros.join('\n')}`
const mentions=membros.map(m=>m.split('@')[1].split(' ')[0]+'@s.whatsapp.net')
await client.sendMessage(from,{text:lista,mentions:mentions},{quoted:info})}
catch(error){console.error('Erro na listagem AOT:',error)
enviar('❌ Ocorreu um erro ao gerar a lista de participantes')}
break;}

case 'rpg':
case 'RPG':{if(!isGroup)return enviar('❌ *Este comando só funciona em grupos!*')
if(!isGroupAdmins)return enviar('⚠️ *Apenas administradores podem usar este comando!*')
const args=body.split(' ')
const action=args[1]
if(!action||!['0','1'].includes(action))return enviar(`❌ *Uso correto:*\n${prefix}rpg 1 (ativar)\n${prefix}rpg 0 (desativar)`)
initializeGroupConfig(from)
const config=loadConfig()
config[from].rpg=action==='1'
saveConfig(config)
const status=action==='1'?'✅ *MODO RPG ATIVADO*\n▸ Sistema Attack on Titan liberado!':'❌ *MODO RPG DESATIVADO*\n▸ Comandos de RPG bloqueados'
enviar(`${status}\n\n» Modo atual: ${action==='1'?'🟢 ATIVO':'🔴 INATIVO'}`)
break;}

case 'addsaldo':
case 'adicionarsaldo':{if(!isDono)return enviar('⛔ *Acesso Negado!* \nApenas o Comandante Supremo pode usar este comando!')
const mention=info.message.extendedTextMessage?.contextInfo?.mentionedJid?.[0]
const[cmd,,valorStr]=body.split(/\s+/)
if(!mention||!valorStr||isNaN(valorStr))return enviar(`❌ *Uso correto:*\n${prefix}addsaldo @usuário valor\nEx: ${prefix}addsaldo @5561999999999 5000`)
const valor=parseInt(valorStr.replace(/[.,]/g,''))
if(valor<0||valor>100000)return enviar('⚠️ Valor inválido! (0 - 100.000)\nUse 0 para zerar o saldo')
try{
const aotData=loadAOTData()
const targetId=mention.replace(/@s\.whatsapp\.net/g,'')+'@s.whatsapp.net'
if(!aotData[targetId])aotData[targetId]={fundos:0}
aotData[targetId].fundos=valor===0?0:Math.min(aotData[targetId].fundos+valor,100000)
saveAOTData(aotData)
const acao=valor===0?'ZERADO':'+'+valor.toLocaleString('pt-BR')
const newSaldo=aotData[targetId].fundos.toLocaleString('pt-BR')
enviar(`💰 *${valor===0?'SALDO RESETADO':'FUNDOS ADICIONADOS'}*!\n➤ Soldado: @${targetId.split('@')[0]}\n➤ Ação: ${acao}\n➤ Novo Saldo: ${newSaldo}`,{mentions:[targetId]})}
catch(error){console.error('Erro ao modificar saldo:',error)
enviar('❌ Falha ao atualizar os fundos do soldado!')}
break;}

case 'rgaot':
case 'registraraot':{if(!isRpg(from))return enviar('❌ *Este comando requer o modo RPG ativado!*\n👉 Peça a um admin usar *'+prefix+'rpg 1*')
const aotData=loadAOTData()
if(aotData.blocked?.includes(sender))return enviar('⛔ *VOCÊ FOI EXPULSO DA LEGIÃO!*\nMotivo: HP Máximo reduzido a níveis críticos\n❌ Registro permanente bloqueado')
const personagens={
'Eren':{hp:120,ataque:30,defesa:20,habilidade:'Titã de Ataque'},
'Mikasa':{hp:100,ataque:25,defesa:15,habilidade:'Precisão Absoluta'},
'Levi':{hp:90,ataque:35,defesa:10,habilidade:'Agilidade Suprema'},
'Armin':{hp:80,ataque:15,defesa:25,habilidade:'Estratégia Brillante'},
'Historia':{hp:95,ataque:20,defesa:30,habilidade:'Liderança Real'},
'Erwin':{hp:110,ataque:28,defesa:18,habilidade:'Sacrifício Tático'},
'Zeke':{hp:150,ataque:40,defesa:40,habilidade:'Titã Besta'},
'Sasha':{hp:85,ataque:22,defesa:12,habilidade:'Tiro Certeiro'}
}
const[cmd,escolha]=body.split(' ')
if(!escolha||!personagens[escolha])return enviar(`⚔️ *ESCOLHA SEU SOLDADO*:\n${Object.keys(personagens).join('\n')}\n\nExemplo: *${prefix}registraraot Levi*`)
if(aotData[sender])return enviar('❌ Você já está alistado na Legião!\nUse *'+prefix+'status* para ver seus dados')
const newSoldier={
personagem:escolha,
...personagens[escolha],
hpMax:personagens[escolha].hp,
titanKills:0,
expedicoes:0,
rank:'Recruta',
equipamento:'ODM Básico',
fundos:1000,
lastCombat:0,
inventario:[]
}
aotData[sender]=newSoldier
saveAOTData(aotData)
enviar(`🎖️ *${escolha.toUpperCase()}* ALISTADO COM SUCESSO!\n❤️ HP: ${personagens[escolha].hp}\n⚔️ Ataque: ${personagens[escolha].ataque}\n🛡️ Defesa: ${personagens[escolha].defesa}\n✨ Habilidade: ${personagens[escolha].habilidade}\n💰 Fundos: 1.000\n\nUse *${prefix}status* para ver seus dados completos`)
break;}

case 'atacar':{
if(!isRpg(from))return enviar('❌ *Este comando requer o modo Rpg ativado!*\n👉 Peça a um admin usar *'+prefix+'rpg 1*')
const aotData=loadAOTData()
const attacker=aotData[sender]
if(aotData.blocked?.includes(sender))return enviar('⛔ Você foi banido permanentemente da Legião!')
if(!attacker)return enviar('❌ Aliste-se primeiro com registraraot')
const mention=info.message.extendedTextMessage?.contextInfo?.mentionedJid?.[0]
if(!mention)return enviar('⚔️ Marque um inimigo Titan!')
const targetId=mention.split('@')[0]+'@s.whatsapp.net'
const target=aotData[targetId]
if(aotData.blocked?.includes(targetId))return enviar('☠️ Este soldado foi eliminado das fileiras!')
if(!target)return enviar('☠️ Alvo não encontrado nas fileiras!')
const cooldownTime=isVip(sender)?60000:180000
if(Date.now()-attacker.lastCombat<cooldownTime){
const remaining=cooldownTime-(Date.now()-attacker.lastCombat)
const minutes=Math.ceil(remaining/60000)
return enviar(`⏳ Recarregando Gás ODM! (Espere ${minutes}min)`)}
const danoBase=Math.floor((attacker.ataque*(Math.random()*0.5+0.75))-(target.defesa*0.3))
const critical=Math.random()<0.15||attacker.equipamento.includes('Lâminas')
const danoTotal=Math.max(critical?danoBase*2:danoBase,5)
let resultado=`⚔️ *${attacker.personagem}* atacou *${target.personagem}* com ${attacker.equipamento}!\n`
resultado+=critical?'💥 *CRÍTICO NO PESCOÇO!* ':''
target.hp-=danoTotal
if(target.hp<=0){
attacker.hpMax+=5
attacker.hp=attacker.hpMax
const novoHPMax=target.hpMax-5
resultado+=`\n☠️ *${target.personagem}* foi devorado!\n❤️ *${attacker.personagem}* +5 HP Permanente!\n💔 ${target.personagem} HP Máximo: ${novoHPMax}/100`
attacker.titanKills+=1
attacker.expedicoes+=1
attacker.fundos+=500
attacker.rank=calcularRank(attacker.expedicoes)
if(novoHPMax<=10){
aotData.blocked=aotData.blocked||[]
if(!aotData.blocked.includes(targetId))aotData.blocked.push(targetId)
resultado+=`\n⛔ *${target.personagem}* FOI BANIDO DA LEGIÃO! (HP Máximo ≤10)`
delete aotData[targetId]}
else{target.hpMax=novoHPMax
target.hp=target.hpMax}}
else{resultado+=`\n🩸 Dano: ${danoTotal}HP | HP Restante: ${target.hp}`
if(target.fundos>0&&Math.random()<0.10){
let roubo=isVip(sender)?Math.floor(Math.random()*901)+100:Math.floor(Math.random()*100)+1
roubo=Math.min(roubo,target.fundos)
if(roubo>0){attacker.fundos+=roubo
target.fundos-=roubo
const vipTag=isVip(sender)?'[VIP] ':''
resultado+=`\n💰 *${vipTag}ROUBOU ${roubo} FUNDOS* durante o combate!`}}}
attacker.lastCombat=Date.now()
saveAOTData(aotData)
enviar(resultado)
break;}

case 'paot':
case 'perfilaot':{
if(!isRpg(from))return enviar('❌ *Este comando requer o modo Rpg ativado!*\n👉 Peça a um admin usar *'+prefix+'rpg 1*')
const player=loadAOTData()[sender]
if(!player)return enviar('❌ Aliste-se na Legião primeiro!')
const progresso=`🏰 *Legião de Reconhecimento*\n\n👤 Soldado: ${player.personagem}\n⭐ Rank: ${player.rank}\n❤️ HP: ${player.hp}/${player.hpMax}\n⚔️ Ataque: ${Math.round(player.ataque)}\n🛡️ Defesa: ${Math.round(player.defesa)}\n🌍 Expedições: ${player.expedicoes}\n💰 Fundos: ${player.fundos}\n🔧 Equipamento: ${player.equipamento}\n✨ Habilidade: ${player.habilidade}`
enviar(progresso)
break;}

case 'loja':
case 'lojaaot':{
if(!isRpg(from))return enviar('❌ *Este comando requer o modo Rpg ativado!*\n👉 Peça a um admin usar *'+prefix+'rpg 1*')
const aotData=loadAOTData()
if(!aotData.storeItens){
aotData.storeItens={
gasodm:{preco:600,efeito:'+5 HP Máximo'},
laminas:{preco:3000,efeito:'+15% Dano'},
kitcura:{preco:500,efeito:'Recupera 10 HP'},
soro:{preco:10000,efeito:'+30% Dano (HP-10%)'},
titafundador:{preco:50000,efeito:'+50% ATQ/DEF'},
titacolossal:{preco:30000,efeito:'+30% ATQ + Explosão'},
titablindado:{preco:40000,efeito:'+40% DEF'},
titafemea:{preco:25000,efeito:'+20% ATQ/AGI'},
cinturaoexplosivo:{preco:15000,efeito:'Dano em área +25%'},
armaduraantiperfurante:{preco:20000,efeito:'-25% Dano recebido'},
treinamentoelite:{preco:10000,efeito:'+10% Todos atributos'},
sorotitancarregado:{preco:45000,efeito:'Transforma em Titã'},
manopladestruicao:{preco:35000,efeito:'+50% ATQ (-10% AGI)'},
amuletoparadis:{preco:100000,efeito:'Habilidades Titânicas'},
cristalcoordenadas:{preco:75000,efeito:'Revela inimigos'}
}
saveAOTData(aotData)}
const itens=aotData.storeItens
let listaItens='🛒 *Loja do Exército - Novos Itens!*\n\n'
for(const[item,info]of Object.entries(itens))listaItens+=`🔸 ${item}: ${info.preco.toLocaleString('pt-BR')} Fundos\n   → ${info.efeito}\n`
listaItens+=`\nUse: ${prefix}compraraot [item]`
enviar(listaItens)
break;}

case 'comprar':
case 'compraraot':{
if(!isRpg(from))return enviar('❌ *Este comando requer o modo Rpg ativado!*\n👉 Peça a um admin usar *'+prefix+'rpg 1*')
const[cmd,item]=body.split(' ')
const player=loadAOTData()[sender]
if(!player)return enviar('❌ Aliste-se primeiro!')
const aotData=loadAOTData()
const itens=aotData.storeItens||{}
if(!itens[item])return enviar('❌ Item não encontrado!')
if(player.fundos<itens[item].preco)return enviar('❌ Fundos insuficientes!')
const itemConfig={
gasodm:()=>{player.hpMax+=5;player.hp+=5;return'⛽ Gás ODM Premium (+5 HP)'},
laminas:()=>{player.equipamento='Lâminas de Aço Certeiro';player.ataque*=1.15;return'🔪 Lâminas Afiadas (+15% ATQ)'},
soro:()=>{const oldHP=player.hpMax;player.equipamento='Soro Titã';player.ataque*=1.30;player.hpMax=Math.floor(player.hpMax*0.90);player.hp=Math.min(player.hp,player.hpMax);return`🧪 Soro Titã (+30% ATQ) | HP reduzido: ${oldHP} → ${player.hpMax}`},
kitcura:()=>{player.hp=Math.min(player.hp+10,player.hpMax);return'🩹 Kit Médico (+10 HP)'},
titafundador:()=>{player.ataque*=1.50;player.defesa*=1.50;return'👑 Titã Fundador: +50% ATQ/DEF!'},
titacolossal:()=>{player.ataque*=1.30;player.defesa*=1.10;return'💥 Titã Colossal: +30% ATQ + Explosão!'},
titablindado:()=>{player.defesa*=1.40;player.ataque*=0.90;return'🛡️ Titã Blindado: +40% DEF (-10% ATQ)!'},
titafemea:()=>{player.agilidade*=1.20;player.ataque*=1.20;return'🐻 Titã Fêmea: +20% ATQ/AGI!'},
cinturaoexplosivo:()=>{player.equipamento='Cinturão Explosivo';player.ataque*=1.25;return'💣 Cinturão Explosivo: +25% ATQ em área!'},
armaduraantiperfurante:()=>{player.defesa*=1.25;player.agilidade*=0.95;return'🛡️ Armadura Anti-Perfuração: +25% DEF (-5% AGI)!'},
treinamentoelite:()=>{player.ataque*=1.10;player.defesa*=1.10;player.hpMax+=10;player.hp=Math.min(player.hp+10,player.hpMax+10);return'🎖️ Treinamento Elite: +10% ATQ/DEF +10HP!'},
sorotitancarregado:()=>{player.ataque*=2;player.defesa*=2;player.hpMax=Math.floor(player.hpMax*0.8);player.hp=Math.min(player.hp,player.hpMax);return'🧪 Soro Carregado: ATQ/DEF x2, HP-20%!'},
manopladestruicao:()=>{player.ataque*=1.5;player.agilidade*=0.9;return'🧤 Manopla Destruição: +50% ATQ, -10% AGI!'},
amuletoparadis:()=>{player.hpMax*=1.5;player.defesa*=1.3;player.ataque*=1.3;return'🔱 Amuleto Paradis: +50% HP, +30% ATQ/DEF!'},
cristalcoordenadas:()=>{player.expedicoes+=5;player.titanKills+=3;return'💎 Cristal de Coordenadas: +5 Expedições e +3 Titãs Abatidos!'}
}
if(!itemConfig[item])return enviar('❌ Item inválido!')
player.fundos-=itens[item].preco
const resultado=itemConfig[item]()
aotData[sender]=player
saveAOTData(aotData)
enviar(`✅ ${resultado}\n💰 Fundos restantes: ${player.fundos.toLocaleString('pt-BR')}`)
break;}

case 'removeritemaot':{
if(!isDono(sender))return enviar('❌ Apenas o Ser Supremo pode usar isso!')
const item=body.split(' ')[1]
if(!item)return enviar('❌ Especifique um item!')
const aotData=loadAOTData()
if(!aotData.storeItens)return enviar('❌ Loja não inicializada!')
if(!aotData.storeItens[item])return enviar('❌ Item não encontrado!')
delete aotData.storeItens[item]
saveAOTData(aotData)
enviar(`✅ Item *${item}* removido da loja!`)
break;}

case 'rankaot':{
if(!isRpg(from))return enviar('❌ *Este comando requer o modo Rpg ativado!*\n👉 Peça a um admin usar *'+prefix+'rpg 1*')
const aotData=loadAOTData()
// Filtrar apenas jogadores reais
const soldados=Object.entries(aotData)
.filter(([id,data])=>id.includes('@s.whatsapp.net')&&data.personagem) // Filtra chaves válidas
.sort(([,a],[,b])=>(b.titanKills||0)-(a.titanKills||0)||(b.expedicoes||0)-(a.expedicoes||0))
.slice(0,5)

let ranking='🏆 *Ranking da Humanidade - Top 5*\n\n'
soldados.forEach(([id,s],index)=>{
const ataque=Math.round(s.ataque||0)
const defesa=Math.round(s.defesa||0)
ranking+=`${index+1}. ${s.personagem} (@${id.split('@')[0]})\n`+
`☠️ Titãs: ${s.titanKills||0} | 🌍 Expedições: ${s.expedicoes||0}\n`+
`⚔️ Ataque: ${ataque} | 🛡️ Defesa: ${defesa}\n`+
`⭐ Rank: ${s.rank||'Recruta'}\n\n`
})
enviar(ranking)
break;}

function calcularRank(expedicoes){
if(expedicoes>=10000)return 'Titã Ancestral'
if(expedicoes>=500)return 'Herói Paradis'
if(expedicoes>=300)return 'Comandante Supremo'
if(expedicoes>=200)return 'Capitão da Legião'
if(expedicoes>=100)return 'Veterano Elite'
if(expedicoes>=50)return 'Soldado ODM'
return 'Recruta'
}
case 'cassino': {
    if(!isRpg(from)) return enviar('❌ *Modo RPG necessário!* Use: ' + prefix + 'rpg 1');
    const aotData = loadAOTData();
    const player = aotData[sender];
    if(!player) return enviar('❌ Cadastre-se primeiro com ' + prefix + 'registraraot');
    
    // Sistema de apostas
    const args = body.slice(prefix.length).trim().split(' ');
    const aposta = parseInt(args[1]) || 0;
    
    if(!aposta || aposta < 100 || aposta > 10000) 
        return enviar(`🎰 *APOSTA INVÁLIDA!*\nUse: ${prefix}cassino [valor]\nMín: 100 - Máx: 10.000`);
    
    if(player.fundos < aposta) 
        return enviar(`❌ Saldo insuficiente! Seus fundos: ${player.fundos.toLocaleString()}`);

    // Debitar aposta
    player.fundos -= aposta;
    saveAOTData(aotData);

    // Gerar combinações
    const frutas = ['🤑','💰','🤩','😎','⚡','💵'];
    const [f1, f2, f3] = Array.from({length:3}, () => frutas[Math.floor(Math.random()*frutas.length)]);
    
    // Verificar vitória
    const vitoria = f1 === f2 && f2 === f3;
    const multiplicador = vitoria ? 5 : 0;
    const ganho = multiplicador * aposta;
    
    // Atualizar saldo
    if(vitoria) {
        player.fundos += ganho;
        saveAOTData(aotData);
    }

    // Função de formatação
    const displayCassino = (result, status) => `
┏━━━❰🎰❱━━━
┃ ${result}
┗━━━❰💰❱━━━
${status || ''}`;

    // Animação
    try {
        const {key} = await client.sendMessage(from, {text: displayCassino('🎰｜🎰｜🎰')}, {quoted: info});
        
        const steps = [
            {text: '🎰｜🎰｜🎰', delay: 700},
            {text: `${f1}｜🎰｜🎰`, delay: 700},
            {text: `${f1}｜${f2}｜🎰`, delay: 700},
            {text: `${f1}｜${f2}｜${f3}`, delay: 700},
            {text: `${f1}｜${f2}｜${f3}\n` + 
                   (vitoria ? 
                   `🎉 *GANHOU ${ganho.toLocaleString()}!*\n💰 Saldo: ${player.fundos.toLocaleString()}` : 
                   `💸 Perdeu ${aposta.toLocaleString()}\n💵 Saldo: ${player.fundos.toLocaleString()}`), delay: 1000}
        ];

        for(const step of steps) {
            await esperar(step.delay);
            await client.sendMessage(from, {text: displayCassino(step.text), edit: key}, {quoted: info});
        }
        
    } catch(error) {
        console.error('Erro no cassino:', error);
        enviar('❌ Falha na roleta! Seu saldo foi devolvido.');
        player.fundos += aposta; // Rollback em caso de erro
        saveAOTData(aotData);
    }
    break;
} 
//fim
///////FIM DAS CASES///////////////
//cases ficam acima 👆


//nao mecha nessa mini tag abaixo se nao fode o bot todo

//NAO MECHA

// IF ABAIXO 👇


}
//IF ACIMA👆   
} catch (erro) {
console.log(erro)
}}) 

client.ev.on('connection.update', (update) => {
const { connection, lastDisconnect } = update
if(lastDisconnect === undefined) {

}

if(connection === 'close') {
var shouldReconnect = (lastDisconnect.error.Boom)?.output?.statusCode !== DisconnectReason.loggedOut  
ligarbot()
}
if(update.isNewLogin) {
console.log(`Conectei me da um pix⚡`)
}})}
ligarbot()

fs.watchFile('./index.js', (curr, prev) => {
if (curr.mtime.getTime() !== prev.mtime.getTime()) {
console.log('A index foi editada, irei reiniciar...');
process.exit()
}
})