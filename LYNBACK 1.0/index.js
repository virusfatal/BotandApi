const _0x338051 = _0x497e;
(function (_0x4a1fb8, _0x89cf10) {
    const _0x595e61 = _0x497e, _0x3454a6 = _0x4a1fb8();
    while (!![]) {
        try {
            const _0x9d8be2 = -parseInt(_0x595e61(0x78a)) / (-0x1e52 + -0x1 * -0xce7 + 0x4 * 0x45b) * (-parseInt(_0x595e61(0x550)) / (0x2022 + 0x463 * 0x1 + -0x2483)) + parseInt(_0x595e61(0x6d4)) / (0x1c61 + 0x247 * 0x5 + -0x27c1 * 0x1) * (-parseInt(_0x595e61(0x3a5)) / (-0x1423 + 0x5 * -0x53a + -0x1 * -0x2e49)) + -parseInt(_0x595e61(0x813)) / (0x796 * -0x2 + 0x1ec7 * 0x1 + -0xf96) * (-parseInt(_0x595e61(0x47d)) / (0x1549 + -0x5 * -0x378 + -0x269b)) + -parseInt(_0x595e61(0x1e9)) / (-0x9c1 + 0x102 + 0x8c6) + -parseInt(_0x595e61(0x6e7)) / (-0x15b + -0x8f * -0x2f + -0x18de) * (parseInt(_0x595e61(0x97a)) / (0x10af + 0x2444 + -0x34ea)) + -parseInt(_0x595e61(0x4ea)) / (0x1cc + 0x147d + -0x163f * 0x1) + parseInt(_0x595e61(0x2e9)) / (0x12a3 + 0x2 * 0x19d + -0x15d2);
            if (_0x9d8be2 === _0x89cf10)
                break;
            else
                _0x3454a6['push'](_0x3454a6['shift']());
        } catch (_0x300815) {
            _0x3454a6['push'](_0x3454a6['shift']());
        }
    }
}(_0x33bf, -0xcc85a * 0x1 + -0x83e39 + 0x23ce5d));
const {
    default: makeWASocket,
    downloadContentFromMessage,
    emitGroupParticipantsUpdate,
    emitGroupUpdate,
    makeInMemoryStore,
    prepareWAMessageMedia,
    MediaType,
    WAMessageStatus,
    AuthenticationState,
    GroupMetadata,
    initInMemoryKeyStore,
    MiscMessageGenerationOptions,
    useMultiFileAuthState,
    BufferJSON,
    WAMessageProto,
    MessageOptions,
    PHONENUMBER_MCC,
    WAFlag,
    WANode,
    WAMetric,
    ChatModification,
    MessageTypeProto,
    WALocationMessage,
    ReconnectMode,
    WAContextInfo,
    proto,
    WAGroupMetadata,
    ProxyAgent,
    waChatKey,
    MimetypeMap,
    MediaPathMap,
    WAContactMessage,
    WAContactsArrayMessage,
    WAGroupInviteMessage,
    WATextMessage,
    WAMessageContent,
    WAMessage,
    BaileysError,
    WA_MESSAGE_STATUS_TYPE,
    MediaConnInfo,
    generateWAMessageContent,
    URL_REGEX,
    Contact,
    WAUrlInfo,
    WA_DEFAULT_EPHEMERAL,
    WAMediaUpload,
    mentionedJid,
    processTime,
    Browser,
    makeCacheableSignalKeyStore,
    MessageType,
    Presence,
    WA_MESSAGE_STUB_TYPES,
    Mimetype,
    relayWAMessage,
    Browsers,
    GroupSettingChange,
    delay,
    DisconnectReason,
    WASocket,
    getStream,
    WAProto,
    isBaileys,
    AnyMessageContent,
    generateWAMessageFromContent,
    fetchLatestBaileysVersion,
    processMessage,
    processingMutex
} = require(_0x338051(0xccc) + _0x338051(0xb17) + _0x338051(0x6c7));
let pino = require(_0x338051(0x811));
const fs = require('fs'), axios = require(_0x338051(0x465)), Pino = require(_0x338051(0x811)), cheerio = require(_0x338051(0xc3f)), PDFDocument = require(_0x338051(0xbd8)), {imageSize: sizeOf} = require(_0x338051(0xa23)), xvCache = new Map(), Jimp = require(_0x338051(0x7a7)), tmp = require(_0x338051(0x83a)), PhoneNumber = require(_0x338051(0x1cf) + _0x338051(0xc08)), chalk = require(_0x338051(0x6bd));
let phoneNumber = _0x338051(0x3b4) + '54';
function _0x497e(_0x591ca8, _0xbd6246) {
    const _0xc543bd = _0x33bf();
    return _0x497e = function (_0x46b57c, _0x45db75) {
        _0x46b57c = _0x46b57c - (0x4f * 0x32 + 0x23a6 + -0x3192);
        let _0x3b1575 = _0xc543bd[_0x46b57c];
        return _0x3b1575;
    }, _0x497e(_0x591ca8, _0xbd6246);
}
const pairingCode = !!phoneNumber || process[_0x338051(0xb91)][_0x338051(0xd16)](_0x338051(0x22f) + _0x338051(0x24b)), useMobile = process[_0x338051(0xb91)][_0x338051(0xd16)](_0x338051(0xce2)), readline = require(_0x338051(0x981)), rl = readline[_0x338051(0x638) + _0x338051(0xcfc)]({
        'input': process[_0x338051(0x2f7)],
        'output': process[_0x338051(0x186)]
    }), question = _0x2ba391 => new Promise(_0x56ab49 => rl[_0x338051(0x6d9)](_0x2ba391, _0x56ab49)), NodeCache = require(_0x338051(0x84d)), args = process[_0x338051(0xb91)][_0x338051(0x924)](-0x10b1 + -0xd58 + -0x1 * -0x1e0b), query = args[_0x338051(0x706)]('\x20'), path = require(_0x338051(0xc31)), os = require('os'), extractYouTubeID = _0x3ff144 => {
        const _0x382eee = _0x338051, _0x373779 = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^&\n]{11})/, _0x471ca5 = _0x3ff144[_0x382eee(0x257)](_0x373779);
        return _0x471ca5 ? _0x471ca5[0x85 + -0x1f35 * -0x1 + -0x1fb9] : null;
    }, TEMP_DIRECTORY = path[_0x338051(0x706)](os[_0x338051(0x35a)](), _0x338051(0x6ce) + 'ds');
function _0x33bf() {
    const _0x231d6e = [
        ',\x20-10%\x20AGI',
        '\x20*Notícia',
        'KWadR',
        'YsRHN',
        '\x20Morreu\x20d',
        'hentai',
        'mpletos\x20da',
        'normalize',
        'ObrUi',
        'GQkDw',
        '*\x20\x20\x20\x20\x20\x20\x20\x20\x20',
        '!\x0a\x20Peça\x20a',
        'FipMa',
        '*\x20GANHAR\x20',
        '\x20',
        '\x20Nenhuma\x20',
        'HeRvD',
        'image/Henr',
        '\x20Use\x201-',
        'ores\x20podem',
        '\x20de\x20empare',
        '\x20*Sua\x20peq',
        '\x20*Horário',
        'HdeKC',
        'ttonId',
        'UxyVJ',
        '+40%\x20DEF',
        'GviDc',
        'xvideos',
        'xpedições\x20',
        'entry-cont',
        'º\x20\x20@',
        'cadov',
        'onenumber',
        '*Cheque\x20se',
        '/pt-br',
        'xyfCC',
        'GADO\x20NVL\x20M',
        'lor\x0aEx:\x20',
        'zNPvW',
        'zsmOm',
        'https://gi',
        '50%\x20HP,\x20+3',
        'title',
        '\x20Enviando\x20',
        '\x205\x20latões!',
        'vita',
        '\x20default\x20-',
        'UXvLb',
        'idade:*\x20',
        'LjZCI',
        'JdeWX',
        'Marque\x20uma',
        'agem\x20',
        'o\x20dono\x20pod',
        'writeFile',
        'uentes*',
        '\x20*Resulta',
        '\x20parte\x20req',
        'ZBebg',
        'OVXfV',
        'comprar',
        'ass',
        'JTbQO',
        'ores)\x20\x20\x20\x20\x20',
        'url_video',
        'Apagou\x20his',
        '5\x20HP)',
        '\x20um\x20erro\x20a',
        'YdDxT',
        'andtT',
        'cle-body,\x20',
        '0%\x20ATQ/DEF',
        'onhecida',
        'path',
        'e/Capítulo',
        'DfaiX',
        'ikTok',
        'Tempo\x20limi',
        'CakPG',
        'listRespon',
        'gtGoM',
        'Data\x20desco',
        'ear\x20mano,\x20',
        'HP\x20Máximo\x20',
        '\x20Soro\x20Car',
        'MDSAU',
        'pxnCs',
        'cheerio',
        '\x20*Aqui\x20es',
        '\x0a\x20Fundos:',
        'uHkrZ',
        'QOOIn',
        '\x20Modo\x20bri',
        'q\x20ele\x20fez\x20',
        'ista\x20de\x20pa',
        'TeDqi',
        'eLIFj',
        '.title\x20a',
        'GqGGb',
        'ível:\x20Tá\x20v',
        'xxsDN',
        'ECNhz',
        '\x20-\x20R$\x20',
        'arch?q=',
        'do\x20reinici',
        'NCIPAIS*\x20',
        'find',
        'mKZlX',
        'Precisão\x20A',
        'XiXrB',
        '\x20*APOSTA\x20',
        'groupId',
        'rde',
        '\x20mangás\x20en',
        'notícia\x20en',
        '\x20BOA',
        'so\x20VIP!\x20Ad',
        '\x20Obtendo:',
        '\x20reiniciad',
        'gofae',
        'ok.com/ZMB',
        'ecisa\x20ser\x20',
        'https://ww',
        'cVpzi',
        'KtkBe',
        'oiVYa',
        'o>*\x0a\x20Link',
        'glsTr',
        'llpapers/',
        'a\x20ativado!',
        'VitaCeles',
        '/audios/vi',
        '\x20Use:\x20',
        '1:-1:color',
        'diiporno/r',
        'nte',
        'SVpzK',
        'JNQLU',
        'loadMessag',
        'uZXZa',
        'ar...\x20cont',
        'Erro\x20ao\x20en',
        'NHFOd',
        'okhsl',
        'hegando\x20no',
        'debug',
        'Resposta\x20i',
        'setnome',
        'a\x20música',
        'random',
        'setando\x20co',
        'vmEjp',
        'brincar',
        'ueado!\x20Ati',
        'hQIcp',
        'a\x20flor!',
        '(HP-10%)',
        'rmvip',
        'cmFUc',
        'GUSiO',
        'Conteúdo\x20n',
        'ara\x20grupos',
        'FkCvU',
        'DOS\x20MAIS\x20G',
        'para\x20melho',
        'ALOS\x20DO\x20GR',
        'gDHye',
        'Agilidade\x20',
        'nRjDa',
        'Erro\x20geral',
        '\x20geração\x20d',
        'short',
        '\x20adulto\x20bl',
        'ÃO!\x20(HP\x20Má',
        '/ytsearch/',
        'Paradis:\x20+',
        '\x20favor,\x20es',
        'messageTim',
        'ike\x20Gecko)',
        '\x0a\x20Mostran',
        'Criador:\x20',
        'LdJjp',
        'FDjwN',
        '*\x20ALISTADO',
        'qJfZk',
        'WlLVd',
        'ZHvzf',
        '*\x20\x0a\x0a',
        'o!*\x0a»\x20Use\x20',
        'Tentativa\x20',
        'ate',
        'onkOR',
        'ABCbP',
        'cOikX',
        'rankaot\x20(T',
        'Capitão\x20da',
        'LsMtz',
        'PwvVh',
        'fechar',
        '\x20Fundos\x0a\x20\x20',
        '\x20*Modo\x20RP',
        'reto:*\x0a',
        'dis',
        '\x20Vídeo\x20en',
        'dgDNP',
        'uena\x20chego',
        'default',
        'now',
        'entries',
        'DsyVh',
        'xtMessage',
        '\x20de\x20link\x20i',
        'VIP!',
        'LWNYc',
        './temp/',
        '?nome_da_m',
        'gQjRB',
        'usar\x20este\x20',
        'a\x20gigantes',
        '\x20PV\x20só\x20est',
        'UdurT',
        'ens!*\x0a\x0a',
        'NWSfj',
        '\x20+10%\x20ATQ/',
        'TKZzE',
        'usuário\x20va',
        'DO\x20DA\x20INVE',
        'eStream',
        '@whiskeyso',
        'thub.com/H',
        'money',
        '=512:512:-',
        '\x20Grupo:\x20*',
        'io!*\x20Use:\x20',
        '\x20Nenhum\x20r',
        '\x20gerar\x20a\x20l',
        'mGJdK',
        '%\x20ATQ\x20+\x20Ex',
        's\x20membros\x20',
        '07:30',
        'tem]\x20(Comp',
        'jIRol',
        '\x20Fonte:\x20',
        '\x20<<<\x20\x20',
        '\x20incorreto',
        'qLHrz',
        'LYAeh',
        'irusfatal/',
        'pDVJg',
        'var)\x0a»\x20*',
        '--mobile',
        'GERENCIAME',
        '',
        'var)\x0a',
        'ndado:\x20+40',
        'RXxRw',
        'OSIPa',
        'close',
        '%\x20DEF\x20(-10',
        '\x20Vídeo\x20nã',
        '/%20',
        'afYFL',
        'brincarMen',
        'contrada',
        'mando\x20requ',
        'A\x20index\x20fo',
        'mpletos',
        't_ratio=de',
        'do\x205\x20de\x20',
        '\x0a\x20Equipam',
        'oIepz',
        'pesado\x20che',
        'dos',
        'pYUmK',
        '\x20*Link\x20in',
        'plaq\x20Seu\x20T',
        'rface',
        'DcCBz',
        'rnNlj',
        'XSdLE',
        'uarde',
        'qUOhE',
        '\x0a\x20•\x20',
        'nxEms',
        'ivyFp',
        'rankpau',
        'seMessage',
        'o\x20nas\x20file',
        '\x20Comandos',
        '',
        'black',
        '\x201.000\x0a\x0aUs',
        'paot\x20(Ver\x20',
        'ro\x20socorro',
        'oSWDW',
        '[VIP]\x20',
        'NTO*\x20\x20\x20\x20\x20\x20',
        'com/?k=',
        'trim',
        '\x20HP\x20Máximo',
        'C\x20aberto',
        'o\x20adm\x20para',
        'includes',
        'm\x20a\x20API',
        '\x20',
        'Conexão\x20in',
        '\x20',
        'encontrado',
        'ynRPW',
        'que\x20um\x20ite',
        '\x20',
        '\x20para\x20vali',
        'suficiente',
        'o\x20disponív',
        'preco',
        'HUbSZ',
        'ponseMessa',
        'gzip,\x20defl',
        '\x20*Tempo\x20d',
        'to\x20com\x20a\x20A',
        'yWVBf',
        'cCRvM',
        'bgQWx',
        'tCHyC',
        'te\x20comando',
        'eCShs',
        'o\x20demora\x20u',
        '\x20Criando\x20',
        'pt-BR',
        '\x20carregar\x20',
        '=black,fps',
        '\x20Erro\x20no\x20',
        'eAkrW',
        'video/mp4',
        '\x20seu\x20numer',
        'aldo',
        'SOKEB',
        'FwHBb',
        'este\x20modo!',
        'mencione\x20o',
        '*\x20\x0a\x0a\x20Mem',
        'com\x20sucess',
        'eJJcY',
        '\x20*Kawaii\x20',
        'MxNmo',
        'd9GcTqlTYh',
        'usuários\x20V',
        'mando\x20gang',
        'PgvbV',
        'ião!\x0aUse\x20*',
        'superadmin',
        'iras!',
        'em\x2010\x20minu',
        'XWuSM',
        'Gaxvn',
        '\x20*LEGIÃO\x20',
        'o\x20aos\x20VIPs',
        'HCyEY',
        '\x0a\x20*',
        '90%',
        'opa',
        '[ERRO\x20PLAY',
        'o\x20termo',
        'Ntzbd',
        'ante\x20o\x20dow',
        '\x20COM\x20SUCES',
        'tIfII',
        'menuaot',
        'targetTime',
        'ação:\x20',
        'Erro\x20ao\x20al',
        'QEErz',
        'zBpRr',
        'CekGz',
        '\x20Comprar\x20C',
        'tine',
        'Erro\x20no\x20co',
        'QGiaO',
        '%\x0a\x0a',
        '...\x20',
        'hxitG',
        'DM!\x20(Esper',
        'válido!\x20(0',
        'modozoeira',
        'com/channe',
        '\x20modo\x20+18\x20',
        'oBzEV',
        'cwLFX',
        'sBNin',
        'composing',
        'templateBu',
        '\x20*TOP\x205\x20B',
        'codec\x20libw',
        'pEkzV',
        '\x20de\x20erro:\x20',
        'soldado\x20al',
        'º\x20\x20@',
        'do\x20com\x20o\x20p',
        'no\x20Motel\x20X',
        'o\x20para\x20VIP',
        'ando\x20só\x20fu',
        'xzFRe',
        'vel',
        'nfMEy',
        'Apenas\x20adm',
        'que\x20a\x20orto',
        'nQlpB',
        'some',
        '2142954:\x20',
        'TjNPI',
        'stdout',
        '/manga/',
        'ente.',
        'á\x20liberado',
        'adas:\x20+5\x20E',
        'wFQBk',
        '\x20-vsync\x200\x20',
        's\x20sobre\x20\x22',
        'vRWYu',
        '.\x20[Erro\x20ao',
        'response',
        'Ex:\x20',
        '\x20-\x20Capítul',
        'NfjGQ',
        'ctReply',
        'rgaot\x20[per',
        'kjWdl',
        'JXECn',
        '*\x20Este\x20co',
        'caption',
        'ições:\x20',
        ':\x20_&',
        'cos\x20libera',
        'GADO\x20FF',
        'MFFhM',
        '\x20Uso:\x20',
        'BWpkS',
        '\x20já\x20é\x20VIP!',
        '\x20*Acesso\x20',
        'FTPpD',
        'jQPUz',
        'menudono',
        'qVCZd',
        'KRnIe',
        '\x20atualizar',
        'string',
        'apenas\x20em\x20',
        'PqzJo',
        '',
        'RdAef',
        'bind',
        'ggSSI',
        'na\x20lista\x20d',
        ',\x20amor...*',
        '[]\x20*Visua',
        '\x20Explosão',
        'jUVSm',
        'kasedaiki',
        'mhOVK',
        '\x20Alvo\x20não',
        '\x20Rolando\x20D',
        '\x0aPor\x20exemp',
        'Hcthm',
        'w.githubus',
        'omhmT',
        'LnRwG',
        'os:',
        '\x20*Apenas\x20',
        'fwBvW',
        'webpmux\x20-s',
        'ErdgD',
        'Conectei\x20m',
        '=wp-manga',
        '\x20Gás\x20ODM\x20',
        'eKvqz',
        'min',
        '\x20Site\x20onli',
        'istente\x0a3.',
        'NoWbg',
        'oSDNF',
        'agens\x20priv',
        'mentionedJ',
        'op\x205\x20jogad',
        'awesome-ph',
        'audio_',
        'Lâminas',
        'istado\x20na\x20',
        'ffmpeg\x20-i\x20',
        ':\x0a1.\x20Nome\x20',
        'loop\x200\x20-an',
        'Iudhk',
        'SNLvJ',
        '\x0a',
        'NTjzK',
        'sa>\x0aEx:\x20*',
        '*Este\x20coma',
        'QhKKA',
        'dministrad',
        'adeira\x20com',
        'get',
        'erado!',
        'o!*\x0a\x20Peça',
        'para\x20',
        'Afiadas\x20(+',
        'OSIRv',
        'fundos',
        'cWidC',
        'Olá\x20por\x20fa',
        'IfrRz',
        '8291185IwqAyP',
        'jQXRC',
        'xXIVm',
        '\x20Este\x20sol',
        'foipi',
        '\x20Tamanho\x20',
        'ra\x20ver\x20seu',
        'ZuVXF',
        's!*',
        'FYwoT',
        'rpg\x200\x20(des',
        'html',
        '\x200\x20',
        '\x20*RANKING',
        'rar\x20equipa',
        'textInfo',
        '\x20Falha\x20na',
        '):\x0a\x0a',
        '\x20*\x20SISTEM',
        '\x20(ligar)\x20o',
        'é\x20a\x20água\x20d',
        '.com/@user',
        'WhwJg',
        'DA\x20LEGIÃO!',
        'Sua\x20mídia\x20',
        '\x0a\x20\x20\x20Sig',
        'czjli',
        'XJkAt',
        'ado\x20peça\x20a',
        '\x20',
        'rCkIW',
        'qSrFV',
        '\x0a\x0a',
        '\x20Lâminas\x20',
        'iJjkL',
        'bang:',
        'BcttT',
        '2142954\x20:\x20',
        '',
        '\x20Você\x20foi',
        'omandante\x20',
        'cos\x20bloque',
        '\x0a\x0a',
        'er\x20o\x20modo\x20',
        'w.tiktok.c',
        'o\x20banir\x20os',
        'HRmWN',
        'G\x20necessár',
        '\x20(',
        'zzshg',
        '\x20NO\x20PESCOÇ',
        'applicatio',
        'fJWMf',
        'map',
        '\x20resultado',
        'DpXwV',
        '\x20Explosivo',
        '\x20Tempo\x20es',
        '\x20Chrome/12',
        'wallpaper',
        'ados:',
        'as\x201*\x20(ati',
        'o\x20que\x20dese',
        '\x20',
        'nus\x20VIP\x20(A',
        '\x20LENTA',
        'nhbei',
        'HTtgK',
        'ADOS*\x20\x0a\x0a',
        'rankpocoto',
        '--pairing-',
        'KEmqV',
        'JRToM',
        'eis)\x20\x20\x20\x20\x20\x20',
        'UQPiI',
        'DEAmU',
        'YUwgs',
        '\x20*Ocorreu',
        'oTaZH',
        'RoKos',
        '\x20concluída',
        'rHPQP',
        'fAafS',
        'e\x20poder:\x20',
        'nmXDO',
        'XCqZD',
        'shift',
        'rlHAb',
        'ena\x20quente',
        's\x20tarde',
        'nesa...\x20',
        '\x20bot\x20alter',
        '\x20\x20',
        'ZopoD',
        'meString',
        'jUFlC',
        'dido*\x20-\x20O\x20',
        'recebido',
        'code',
        'UVMqj',
        'bot',
        'creds.upda',
        'ão:\x20',
        'ringCode',
        'enção\x20cont',
        'Potro\x20selv',
        'SihCg',
        '\x20',
        '\x20*RESULTA',
        'e\x20pareamen',
        'match',
        'DrMaQ',
        'ABXSS',
        'block',
        '\x20*Usuário\x20',
        'WfzdH',
        '\x20Erro\x20na\x20',
        'sendMessag',
        '*MENU\x20DA\x20L',
        'modo\x20brinc',
        'allSettled',
        'ataque',
        'addvip',
        '\x20Índice\x20d',
        'Cinturão\x20E',
        'bCefl',
        'Buceta\x20peq',
        'getTime',
        're\x20especia',
        'ess',
        'UqxdN',
        'ique10/tex',
        'YkwsL',
        'h\x0a\x0a',
        'toLocaleTi',
        '\x20ativar',
        '\x20*Nyaa~\x20',
        'RneJO',
        '6.0.0.0\x20Sa',
        '-25%\x20Dano\x20',
        'RouFV',
        'com',
        'pUNeZ',
        'o!*\x0a',
        'prxQF',
        'kAaZS',
        'p.title',
        '\x20Aço\x20Certe',
        '=0.9',
        '...',
        'XcpOF',
        'rota:\x20',
        '\x0a\x20Wa.me/',
        '[]\x20*Este\x20',
        'opgbn',
        'o\x20número\x20c',
        'Não\x20é\x20poss',
        '\x20Número\x20d',
        'Bot:Minato',
        'Vídeo\x20do\x20T',
        'o\x20\x0a\x20exemp',
        'item',
        'NutpQ',
        'lgzvo',
        '+50%\x20ATQ/D',
        'IMRAL',
        'plosão!',
        '',
        'dores\x20pode',
        'um\x20erro\x20ao',
        'YSKpz',
        'BbOyB',
        '\x20*INICIAN',
        'request',
        '4|6',
        'MErMf',
        'ema)\x20\x20\x20\x20\x20\x20',
        'membros\x20nã',
        '\x20\x0a\x20-\x20Eli',
        'bpNRh',
        'veemv',
        '5561999999',
        'loqueado',
        'figGP.json',
        'woKvg',
        'sqJCb',
        '\x20removido\x20',
        'O!*\x20',
        '23:30',
        'e\x20na\x20Legiã',
        '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20',
        'acao',
        '\x20Supremo',
        '\x20',
        '\x20explícito',
        'fhrSz',
        'brincadeir',
        '\x20Ative\x20o\x20N',
        'squisa*',
        'vips',
        '\x20\x0a',
        '\x0a\x20Dano:\x20',
        '\x20irei\x20rein',
        '+15%\x20Dano',
        '-an\x20-vsync',
        'vzlUH',
        'listavip',
        'BTQhM',
        '',
        'loggedOut',
        'l\x20para\x20mem',
        'VUrnT',
        'qfeOc',
        'Erro\x20no\x20me',
        'wuysL',
        'Tente\x20mais',
        'thumbnail',
        'tannia.com',
        'defesa',
        'o!_',
        'mimetype',
        'ALqQD',
        'jdkWB',
        'fique\x20se\x20d',
        './sessao',
        'text',
        'NJELm',
        'adivinha\x20o',
        'lvedor',
        'a\x20é\x20totalm',
        'ento\x20foi\x20r',
        'om/',
        'istidas:\x20',
        'ESTE\x20CONTE',
        'zHQoU',
        'Erro\x20no\x20ar',
        'MjLpb',
        'isa\x20witch*',
        'HxkWT',
        '\x20adulto\x20li',
        'LLKzf',
        'AfSAN',
        '\x20acertou\x20*',
        'onto\x20para\x20',
        'comprar\x20[i',
        'e\x20resposta',
        'FUNDOS\x20ADI',
        '\x0a\x20\x20\x20\x20\x20\x20\x20\x20',
        'Herói\x20Para',
        '*\x20TAPA!*\x20',
        'ttonReplyM',
        '\x20-\x20',
        'attr',
        '\x20Erro\x20ao\x20',
        '\x0a\x0a\x20Public',
        'srllw',
        '34242549SlmyEv',
        'DE\x20RECONHE',
        'carnie',
        'uração:\x20+2',
        'LCSAv',
        'ZQEPL',
        '\x20Conteúdo',
        'Opera\x20(Lin',
        '\x20Chrome/91',
        '\x20*RANKING',
        '\x22:*\x0a\x0a',
        'ado*',
        'oes',
        'RljfC',
        'stdin',
        'iro',
        'audio/mp4',
        ')\x0aUse\x200\x20pa',
        'baixar:*\x0a*',
        '0\x20HP',
        'suários\x20VI',
        'XQJ/',
        'Apenas\x20o\x20C',
        'ws.google.',
        'ã\x20(+30%\x20AT',
        '\x20para:\x20',
        'xHTRZ',
        'oqueado!\x20A',
        '\x20*TOP\x20CAV',
        '\x20*Sua\x20fot',
        'ZGwad',
        '+lang:pt&h',
        'ao\x20desenvo',
        '1|0|2|5|3|',
        'ceil',
        '\x20\x20\x20Tente',
        '\x20Apenas\x20a',
        'falhou\x20na\x20',
        '.*\x20',
        'habilidade',
        'omo\x20que\x20a\x20',
        'terar\x20nome',
        '+18\x20ativad',
        'YhoCp',
        'ywsdy',
        'AzsrG',
        '\x20*Limpeza',
        'lLvIM',
        'SvIOG',
        'KUS*\x20\x0a',
        'Erro\x20na\x20li',
        '\x0a',
        'zOVeI',
        'bloqueado\x20',
        'set',
        '\x20@',
        'tos',
        '[]\x20*Recur',
        'bKYeY',
        '.mozaique\x20',
        'unlinkSync',
        'XIsvL',
        'você!',
        '\x20*Erro\x20de',
        'unlink',
        'link',
        'selectedId',
        'Recruta',
        'muito\x20long',
        'storeItens',
        'apa.jpg',
        'lUwzk',
        'https://ne',
        'liminado\x20d',
        'nIvQK',
        'tewQb',
        'OwGlv',
        'status',
        'LsyAt',
        'PnlVC',
        'do:\x20@',
        '\x20|\x20\x20Defes',
        'pFBxC',
        'existsSync',
        'TavIY',
        'r,\x20digite\x20',
        'dificar\x20sa',
        'ando\x20Gás\x20O',
        '.js',
        'lHczD',
        '\x20inválido!',
        'ando...*\x0a',
        'Transforma',
        'VJgpS',
        'error',
        'KtauM',
        '\x20Resposta',
        'iqoLB',
        'Usuário',
        '2.0.0.0\x20Sa',
        '_O\x20agendam',
        'zlHgM',
        '\x20Ex:\x20',
        'ZRyMb',
        'brmis',
        'vrzJw',
        'IPs\x20podem\x20',
        '\x20Digite\x20o',
        'ercontent.',
        'titulo',
        '\x20amorosa!*',
        'ambRA',
        'YHDAX',
        'tmpdir',
        'img',
        'VbHNL',
        'rpg',
        '\x20Não\x20foi\x20',
        'igos\x20(+500',
        'participan',
        'OXWFo',
        'ados',
        'us/comando',
        'fHiuy',
        'tnRaz',
        '\x20*CRÍTICO',
        '\x20',
        'YGBAt',
        'vOmlZ',
        'WOtzr',
        'CXyNF',
        ':',
        'remover\x20VI',
        'GXqSZ',
        '*Segure\x20o\x20',
        '\x20',
        'V...*\x20',
        '\x20*Placa\x20g',
        'servidor\x20d',
        'hHdkJ',
        '\x20\x20\x20\x20\x20\x20\x20\x0a',
        'gpXoM',
        'p.net',
        '\x0a',
        'RdfEp',
        '\x20tarde',
        '\x20Abatidos!',
        'mtime',
        'TnWqP',
        'com/Herojo',
        'donos\x20pode',
        'Resultados',
        'tá\x20seu\x20con',
        'omiNa',
        'GRUPO*\x20\x0a\x0a',
        '\x20*Argumen',
        '\x20encontrad',
        'qOtlM',
        '-\x20Reporte\x20',
        '\x20',
        '*\x20BAM!*\x20',
        'split',
        'ente\x20aleat',
        'vt.tiktok.',
        'wVqQQ',
        'do\x20Final:*',
        'ownload\x20de',
        'mDKBs',
        'xv*\x20novame',
        'lida\x20ou\x20nã',
        '+50%\x20ATQ\x20(',
        '\x201\x20-preset',
        'omando.',
        'miNdj',
        'long',
        'incadeiras',
        'NMDyJ',
        'AS*\x20',
        'szBBG',
        'erada\x20com\x20',
        'sticker',
        'e\x20cirrose!',
        '\x20FAKE\x20RICH',
        'xvideos\x20pe',
        'cesso!*',
        'data-src',
        'pecíficos\x20',
        '',
        '1536vPvhGd',
        'xv\x20cenas\x20q',
        'YWWLh',
        '[]\x20*Featu',
        '\x20do\x20Dia\x20é.',
        '\x20*',
        '\x20Aqui\x20est',
        'a*\x20-\x20Tente',
        'cimento*\x0a\x0a',
        '\x20Servidor',
        'JTAkZ',
        ',00',
        'ngUpdate',
        'psert',
        'o\x20voou\x20ráp',
        '5577921429',
        'readFileSy',
        'htLpm',
        'viado\x20no\x20p',
        'BkEQM',
        'ThGML',
        'replace',
        'BkEfu',
        'UfwBA',
        'push',
        'timeoutId',
        'senderKeyD',
        'ftJKL',
        'áginas',
        'NFD',
        'dade\x20-\x20Top',
        'NQtnc',
        'sxnqP',
        '\x20\x20\x20\x20\x0a\x20\x20\x20',
        '\x20-vf\x20\x22scal',
        'WUnbv',
        '*\x20',
        'PPxEp',
        'eQEyZ',
        '\x20Marque\x20u',
        '!*\x20\x20\x0a\x20\x20\x20\x20',
        'pesquisa>\x0a',
        'desu\x20ne,\x20',
        '\x20errado!\x20T',
        'so!\x20Grupo\x20',
        'mvKlJ',
        'yWiiD',
        's\x20expiram\x20',
        'xmTjV',
        'Titã\x20Ances',
        'estral\x0a\x20',
        'status@bro',
        '\x20',
        'Vpcby',
        'LwEET',
        'ZdcRl',
        '\x20Bêbado\x20n',
        'IRDJp',
        '*\x20\x0a\x0a',
        'ZOIGf',
        '*Somente\x20e',
        'conhecido',
        '.mp3',
        'd\x20link\x20do\x20',
        '\x20*Este\x20co',
        'fxeod',
        'https://en',
        'o\x20capítulo',
        'stagem\x20AOT',
        '\x20_',
        'registered',
        'hrKvlgfoiX',
        'Bucetuda',
        'duracao',
        '\x20níveis\x20cr',
        'ado',
        's\x20dados\x20co',
        '\x20Falha\x20ao',
        'yDQPe',
        'Batalhas\x20É',
        '\x20limpos',
        'fcbeA',
        '\x20seu\x20númer',
        'tEqyJ',
        'concat',
        '\x20*Grupo\x20va',
        'OsPnE',
        'ada!',
        'Erro\x20ao\x20ba',
        '@s.whatsap',
        '',
        'aadXi',
        '\x20indisponí',
        '\x20(KHTML,\x20l',
        'Gerando\x20co',
        'registrara',
        'nte\x20da\x20Leg',
        '\x0a\x20',
        'possível\x20e',
        'o\x20apenas\x20p',
        'inSlp',
        '\x20*Uso\x20cor',
        '\x20inválida\x20',
        'Bucetonild',
        'fbJvk',
        'utf8',
        '\x20Baixando',
        '\x20humorísti',
        'tgODv',
        'xInil',
        'SbxFe',
        '..\x20\x20@',
        'ggBVd',
        'hePVG',
        'boIBc',
        '\x20médico!',
        '\x20testoster',
        '\x20Erro:\x20',
        'tains(\x22set',
        '\x20DOS\x20DOTAD',
        '\x0a\x0a',
        'IZGjd',
        'foram\x20bani',
        'ync',
        'HYCHi',
        'endsWith',
        'EZEhd',
        'binary',
        'ux)',
        'BglsU',
        'jdshO',
        'com/ZMBsBe',
        '\x20*Este\x20co',
        'bros\x20Ativo',
        '\x20*Conexão',
        'ando\x20por:*',
        'SQpor',
        'AEiqi',
        'ta\x20do\x20site',
        '\x20a\x2022.',
        'OufuU',
        'Motivo:\x20',
        'iciar...',
        'UvQIC',
        'rnet',
        '\x20\x20\x20\x0a',
        'bros\x20VIP*',
        'loja',
        'BrkVu',
        '\x20Fundos\x20i',
        'ião!',
        'o\x20com\x20suce',
        'NumberForm',
        '',
        'retamente\x0a',
        'dos\x20VIPs!',
        'Wunxv',
        'generateAs',
        'rpg\x201',
        'SSIONAL',
        'ZLZTt',
        'ar!\x0aExempl',
        'chapters',
        'paot',
        'Puro\x20sangu',
        'us/menuadm',
        '\x20em\x20Titã',
        '\x20Total\x20de',
        'fctkf',
        '\x20usar\x20este',
        'hIlWu',
        'Pcygx',
        'getDate',
        'm\x20grupos!*',
        'reto:*\x20',
        'wywRo',
        '\x20',
        'file',
        'parse',
        'us/menudon',
        'alor]\x0aMín:',
        'audio/mpeg',
        'key',
        'JVuDy',
        '30%',
        'ceUpdate',
        'Lgdgx',
        'Erro\x20desco',
        'nciona\x20em\x20',
        'teString',
        'mando\x20plaq',
        'PnZfS',
        'axios',
        'de\x20Coorden',
        'output',
        'IbRJL',
        'Publicação',
        'adcast',
        'álidos:\x0a',
        'gTdTU',
        ':*\x20\x0a\x20\x20\x20',
        '5521969869',
        'child',
        '3|1|0|2|4',
        '\x20Loja\x20não',
        'I\x20inválida',
        '\x20*',
        'neko',
        'G\x20DESATIVA',
        'nversas...',
        'nXUje',
        'toPrimitiv',
        '/imagens/t',
        'rgaot\x20Levi',
        'LynNt',
        'HEtPx',
        '29616cogDdr',
        '5%\x20DEF\x20(-5',
        'Habilidade',
        'duzido:\x20',
        '\x20alterado\x20',
        'DO*:\x0a',
        'qbchD',
        'results',
        'pters',
        'fulfilled',
        '\x20so\x20falta\x20',
        'rkkNY',
        '\x20*',
        'OKVD]',
        'M\x20999+\x20CHI',
        've\x20com\x20*!n',
        '\x20especial\x20',
        ':\x20',
        '.jpg',
        'dTnMr',
        '/ytvideo/',
        'json',
        'TRI4SpkFOl',
        'Capítulo\x20n',
        'EgrilVide',
        'ximo\x2010)',
        'GjFKj',
        '-senpai*\x0a',
        'XnYwK',
        'ldo:\x20',
        '\x0aCo',
        '-\x20Verifiqu',
        '!\x20Ative\x20o\x20',
        'floor',
        'promises',
        'BAFaG',
        'Garanhão',
        'os\x20mais\x20es',
        'agilidade',
        'Erro\x20inter',
        'removerite',
        'Coordenada',
        '\x20atributos',
        'fdLwl',
        'arraybuffe',
        'rmanente\x20b',
        '\x20para\x20os\x20u',
        'tive\x20o\x20NSF',
        'tpSnO',
        'abrir',
        'gIpUH',
        'glvAt',
        'CQtwL',
        'hVgJu',
        'n\x20usar\x20*',
        '+20%\x20ATQ/A',
        'JTwvQ',
        'rivado\x20de\x20',
        'tórico',
        'puXlB',
        'dcBgY',
        'vjyxx',
        'as\x20fileira',
        '\x0a\x20*\x20',
        '\x20•\x20',
        'munidade\x0a',
        'href',
        'WSSog',
        'nte\x20novame',
        'sAVSX',
        'm\x20poukinho',
        '*\x20removido',
        '456789\x0a',
        'Recupera\x201',
        'dy\x22]',
        '\x0a\x20\x20\x20\x20\x20\x20\x20\x20',
        'nuker',
        'efix}playv',
        'Visualizaç',
        'aiu\x20fora\x20d',
        'CYGKo',
        'o\x20rolagem.',
        'perfil)\x20\x20\x20',
        'colha\x20um\x20n',
        '-\x20Novos\x20It',
        'lizar\x20esta',
        'pFVqY',
        'gurinha!',
        '*Funciona\x20',
        '\x20\x20Número\x20',
        'quotedMess',
        'do\x20em\x20grup',
        'hGAiZ',
        '\x20número\x20do',
        '100%',
        'xUGas',
        'afxcJ',
        'HuFkF',
        '\x20*Process',
        '18\x201',
        '18\x20desativ',
        'tBMlc',
        'bqNST',
        'xplosivo',
        'o',
        '\x20|\x20\x20',
        'TADO',
        '*...',
        'dos\x20com\x20su',
        '2153340lyyWqI',
        'ClKwp',
        'ec\x20libwebp',
        'mFWFa',
        'listaaot',
        '\x20*A',
        'Status\x20des',
        'm\x20usar\x20est',
        'Otbcs',
        '*\x0a\x20Verifi',
        'JNJee',
        'ping',
        'viar\x20image',
        'ulte:\x20',
        '\x20(atualiza',
        '\x20Anti-Perf',
        'pM7MOzWmU1',
        'QKdFj',
        'noticias\x20<',
        'LyaYC',
        'EGIÃO*\x0a\x0a',
        'lo:\x20+55779',
        'ea:\x20+20%\x20A',
        './index.js',
        'VccLL',
        'ZjZRG',
        'iAyOj',
        'tual:\x20',
        'bloqueado!',
        'tQBcY',
        'GkHaVCbX_A',
        'Tiro\x20Certe',
        'para:*\x20',
        'FsaVc',
        'D6...\x0a',
        'inistrador',
        '*!\x20',
        'GLVlz',
        'cbook+zip',
        'Acesso\x20blo',
        'e,\x20o\x20pedid',
        'EOZXt',
        'contextInf',
        'HbHjm',
        'Q)\x20|\x20HP\x20re',
        'Exemplos\x20v',
        'FUNDOS*\x20\x20\x20',
        'DZrGn',
        'para:\x20*',
        'STEMA\x20DE\x20C',
        'aJtNW',
        'ibeTO',
        'TQ/AGI!',
        '\x20\x20\x0a\x20-\x20Bô',
        'o\x20modo\x20+18',
        'RNoKh',
        '\x20Titã\x20Col',
        'Buceta\x20Cri',
        'videoUrl',
        'Boom',
        '\x20-\x20Nível\x20',
        'acks/egril',
        'd\x20do\x20TikTo',
        'terrompida',
        'nsfw',
        'Dano\x20em\x20ár',
        'a...\x20',
        'DLihD',
        'WwPzP',
        'ra:\x20*',
        '\x20Por\x20favo',
        'Win64;\x20x64',
        'LjSfq',
        'EcZSm',
        'PDXIV',
        'MSINv',
        'dado\x20foi\x20e',
        '\x20*Resulta',
        '\x0a\x0a\x20\x20\x20',
        'e\x20+3\x20Titãs',
        'SjNIj',
        '.webp',
        '/video/123',
        'restantes:',
        'NgDJm',
        'l/0029Vb5e',
        'VzylU',
        'LTsBK',
        'Selecionan',
        'nteúdo...\x20',
        '-kun*\x0a',
        'Falha\x20desc',
        'white',
        'pesquisa',
        '\x20\x0a\x0a\x22',
        '\x20Pronto\x20p',
        'KJBRI',
        'fatal',
        '\x20\x20\x20\x20\x20\x20\x20\x20\x20',
        'TviZH',
        '22:00',
        'vídeo\x20priv',
        '2TEAFIi',
        '\x20age-check',
        '.update',
        'teúdo\x20',
        'ZKANV',
        '\x20Erro\x20dur',
        'int',
        'conversati',
        'lunnar\x20vai',
        'VeIdR',
        'TMTzP',
        'JqXIe',
        '\x20sempre\x20pr',
        '\x20*Hentai\x20',
        'oMttC',
        'Negado!*\x20\x0a',
        '\x20*VOCÊ\x20FO',
        'iPMNb',
        'em__conten',
        'grupos!',
        'stringify',
        './dono/men',
        'createWrit',
        '\x20inicializ',
        '\x20*Cena\x20in',
        'fssnz',
        'IfWej',
        '.0.0:3239/',
        '0\x20(Windows',
        'te\x20excedid',
        'ncayH',
        'fEFNt',
        'dos\x20para\x20\x22',
        'sUDIY',
        '\x0a\x20Defesa:',
        'eWGfR',
        'YBJMa',
        '.json',
        's\x20(+2000)\x20',
        'cyYII',
        '-do-tiktok',
        'XAOYw',
        '\x20Brillante',
        'elestine/%',
        'YmidR',
        'ão\x20disponí',
        'oqueado',
        'lffuT',
        'OGZFq',
        'es.js',
        'CJumk',
        'hkjgC',
        'HLlNl',
        '\x20Algo\x20deu',
        'updateProf',
        'qJbKE',
        'ring',
        '\x0aUse:\x20*',
        '\x20Iniciand',
        'CIMENTO\x20-\x20',
        'dURNH',
        'rvidor',
        'Lâminas\x20de',
        'mentos)\x20\x20\x20',
        'TZziz',
        'TvRbD',
        'Tempo\x20exce',
        '.total-cha',
        'ttvd\x20https',
        '!*\x0a\x20Saldo',
        'JMxkF',
        '\x20-\x20Cap.\x20',
        'ITwoZ',
        'R:pt-419',
        'vor\x20digite',
        'idar!)',
        '\x20*Problem',
        '+30%\x20Dano\x20',
        'us/menu18.',
        '.duration',
        'smvtC',
        'WRyoc',
        'addsaldo\x20@',
        'a\x20desbloqu',
        'egistrado\x20',
        '!*\x0aUse\x20*',
        'egrilvideo',
        'ões:\x20',
        'iar\x20o\x20stic',
        'Erro\x20ao\x20',
        'nWvMz',
        'numeric',
        '\x0a\x20',
        '\x0a\x20\x20\x20\x20',
        'selectedRo',
        'arios.json',
        '\x20',
        's\x20premium\x20',
        '\x20Recarreg',
        'contacts.s',
        '\x20Kit\x20Médi',
        'HDckG',
        'lo\x20:\x20+5577',
        'dtfzB',
        'endo\x20duplo',
        'jdMUB',
        'announceme',
        'u\x20*0*\x20(des',
        'oxSLt',
        'script:con',
        'autor_desc',
        'sendPresen',
        'play',
        '\x0aEx:\x20*',
        'IFHuO',
        '\x20por\x20kill)',
        'tCtxn',
        'mando\x20ass:',
        'ídeo\x20encon',
        'apão\x20em\x20*@',
        '\x20Amuleto\x20',
        'e\x20h3\x20a',
        'RPG\x20ativad',
        'para\x20usar\x20',
        '\x20*',
        'I\x20EXPULSO\x20',
        'messageCon',
        'AiylR',
        '\x20Tá\x20falan',
        '\x20usuário\x20o',
        '\x20os\x20fundos',
        'uta\x20\x20Sold',
        'Seu\x20código',
        'cassino',
        'HyKzl',
        'vNpnt',
        'hpMax',
        '\x20dono\x20alte',
        'cScZk',
        '\x20:',
        'TpOuh',
        'Erro\x20no\x20se',
        'min)',
        'RBwWM',
        'WeKsA',
        'migos',
        'LVxId',
        'lFfuO',
        'gBkfa',
        'LEbvN',
        'válido\x20ou\x20',
        'Nsnri',
        'ente\x20novam',
        '\x20@',
        'rpg\x201*',
        'ANZsH',
        '4\x20Safari/5',
        '\x20estável\x20e',
        '*\x20deu\x20um\x20t',
        'ieMzB',
        'QlIUu',
        'nte\x20\x20Heró',
        '\x20Use\x20term',
        '\x20*',
        'contrados',
        'otrfu',
        '+5\x20HP\x20Máxi',
        'KqALy',
        'isNewLogin',
        'lKUFw',
        '\x20EXCELENT',
        'NGhDU',
        '\x0a\x20Aguarde',
        'hours',
        'wXZvx',
        'compraraot',
        'FGcah',
        '\x20*Ranking',
        'www.tiktok',
        '\x20Use:\x20*',
        '-se\x20primei',
        '\x20outra\x20pal',
        'mando\x20hent',
        'substring',
        './dono/rpg',
        'whASC',
        'viLtd',
        'escreva',
        '18\x201*\x20(ati',
        'acks/carni',
        'dono!*',
        '\x0a\x20\x20\x20\x20',
        'o\x20reconhec',
        'XSWNI',
        'XIzDz',
        '\x20Já\x20virou',
        'hUiiB',
        'gFhqr',
        '\x20\x20\x20\x20\x20\x20\x20\x20\x0a',
        'DFRJn',
        'IqeVN',
        'NVzYE',
        'mplo:\x20${pr',
        'IXvtA',
        'pzcJC',
        '\x20100\x20-\x20Máx',
        '\x20novo\x20nome',
        'o\x20código\x20d',
        'QcQid',
        'to:\x201,\x2001,',
        'ração\x20digi',
        '15%\x20ATQ)',
        '\x20Erro\x20na\x20',
        'redBright',
        'UbXwP',
        '\x20\x20\x20\x20\x20\x20\x0a',
        '\x20\x20\x20\x20\x0a\x20',
        'trap',
        '\x20NSFW\x20bloq',
        'setprefix',
        '\x20Pesquisa',
        '\x0a\x20Fundos\x20',
        'u\x20informe\x20',
        'OMBATE*\x20\x20\x20',
        '\x0a\x20Expediç',
        '\x20Cinturão',
        'playvd',
        'DDWBQ',
        'música.\x20Ex',
        'xHsxH',
        'MSUeo',
        'apítulo\x20ex',
        'createInte',
        '\x20Conteúdo',
        'XBXjQ',
        'UypFa',
        'utvyi',
        'a\x20ação!*',
        'k4&s=10',
        'aBUVB',
        'ão\x20encontr',
        'o\x20argument',
        '.reading-c',
        'CEyzD',
        'pkAgo',
        'ERPsj',
        'ocTlB',
        'TqDnm',
        'xclusivo\x20p',
        'nviar\x20o\x20co',
        '?url=',
        'greenBrigh',
        '\x20Tempo\x20de',
        'SALDO\x20RESE',
        'LGDuu',
        'o!*\x0a»\x20Use:',
        'do\x20downloa',
        '\x20',
        '\x20adicionad',
        'auJlY',
        'message',
        'zSYxc',
        'TuLOD',
        'ossal:\x20+30',
        'YYqHw',
        'sonagem]\x20\x20',
        'exto\x20Aqui*',
        'ello/%20',
        '\x20Rank:\x20',
        'ido\x20como!\x0a',
        'traraot',
        '',
        'tente\x20outr',
        '\x0a',
        'mando\x20trap',
        '\x20Nenhum\x20v',
        '\x20não\x20está\x20',
        'gador\x20\x20\x20\x20\x20',
        'mzFUm',
        '.com/image',
        'OMANDOS\x20AD',
        '*\x20Inician',
        'Iqcjf',
        'visualizac',
        'P*\x20',
        'ilerc',
        '\x20Titan\x20lib',
        'EWUYA',
        '\x20Rolando\x20',
        '92142954',
        'Supremo\x20po',
        '*!\x0a\x0a',
        'mo\x20pode\x20us',
        'familiares',
        'omando!*',
        'da\x20API',
        'igitou\x20cor',
        '\x20roleta!\x20S',
        'e\x20reinicia',
        '+30%\x20ATQ\x20+',
        'RLvov',
        'p.mp3',
        '50%',
        '\x20\x20\x20\x0a\x20\x20\x20',
        'VElTu',
        '\x20*MECÂNIC',
        'a\x20mesa!\x20Te',
        'GJRvx',
        '.0.4472.12',
        '\x20foi\x20banid',
        'mando\x20só\x20f',
        'gAPdu',
        '\x20\x20\x20',
        'vo\x20para\x20VI',
        '\x20com\x20suces',
        '\x20Nível\x20de',
        '\x20*RANKING',
        'ncia\x20|\x20Est',
        'ZHhyz',
        'ijFNQ',
        'Revela\x20ini',
        'NArTP',
        '\x20banido\x20pe',
        '\x20\x20\x20\x20\x20\x20\x20\x20\x20',
        'to=',
        'setnomedon',
        'Use\x20*',
        'psHBJ',
        'UPO*\x20\x0a',
        'gNmgg',
        'fGafq',
        'lmAcN',
        'AxWXI',
        'UusEY',
        'Sem\x20respos',
        '\x20*',
        'bjTKR',
        'jgImt',
        'DEF\x20+10HP!',
        'jGUWp',
        '\x20NT\x2010.0;\x20',
        'lkanM',
        'PzeaL',
        'aedsY',
        'DESATIVADO',
        'amente\x20mai',
        'Seu\x20comand',
        'load',
        'rRAIN',
        'vcEzV',
        'rank',
        '\x20entrega:\x20',
        'ecnologia',
        'sFFhm',
        '\x20Armadura',
        'setprefix\x20',
        'bRsSa',
        'Garimpando',
        'jvmLV',
        'abHFd',
        'action',
        'prefix',
        'length',
        'postar)\x20\x20\x20',
        'crease\x22\x20-v',
        'chalk',
        'adicionars',
        'o-administ',
        'e\x20processa',
        'ciona\x20em\x20g',
        '\x20Valor\x20in',
        'xXQtj',
        '\x20*GANHOU\x20',
        '\x20arte\x20japo',
        '\x20\x20\x20\x20\x20,',
        'eys',
        'tral',
        'radores\x20pa',
        'pop',
        'Falha\x20no\x20d',
        '\x20@',
        '\x0a\x20',
        'yt_downloa',
        'listvip',
        'stante:\x20',
        'eúdo\x20chega',
        'HGaUe',
        'menu\x0a',
        '5286fxgNqE',
        'rpg\x201\x20para',
        'i\x20Paradis\x20',
        'no\x20seu\x20pri',
        '00:15',
        'question',
        'vzTXz',
        'íticos\x0a\x20R',
        '\x20Explosão',
        'zAxiu',
        'QUjMf',
        'ObcyS',
        'processar\x20',
        'rupos!*',
        '\x20Titãs:\x20',
        '\x20\x20\x20',
        'a\x20na\x20API*\x20',
        'TLizQ',
        '\x20algumas\x20p',
        '11184zSgMBo',
        'TdNaY',
        'cmxoH',
        'ECONNRESET',
        'sgrdQ',
        'CIONADOS',
        'getMinutes',
        '\x20**',
        'NyYwP',
        '\x20Você\x20já\x20',
        'SFW\x20primei',
        'JtcXG',
        'yWIUD',
        'ja\x20pesquis',
        'bxXQj',
        'está\x20alist',
        'WfpBc',
        'Kit/537.36',
        ':\x20+25%\x20ATQ',
        '/nsfw/anim',
        'XHglW',
        'do\x20o\x20melho',
        'no\x20WhatsAp',
        'ROvCX',
        'p,\x20h2,\x20h3',
        '\x20Chave\x20AP',
        'VIOBs',
        '\x20API',
        '\x20\x0a',
        'bgGreen',
        'ess\x201\x20-pre',
        'join',
        'Legião!',
        'ROUBOU\x20',
        'toLowerCas',
        'toLocaleDa',
        'JVZtP',
        'SeeGx',
        '[]\x20*Conte',
        'not_announ',
        'acks/neter',
        'exit',
        'vOVOJ',
        '\x20',
        'groupMetad',
        'iGCoF',
        'TPdki',
        'ijYGA',
        'zvwlc',
        '\x20Este\x20com',
        '\x20grupo:',
        '\x20o\x20código\x20',
        'paper!\x20',
        'ImbMH',
        'setnome\x20',
        'nhecido',
        'mando\x20neko',
        'DO*\x0a\x20Coma',
        'jiKxu',
        'HhOWA',
        'co\x20(+10\x20HP',
        'Qxmes',
        '\x20\x20',
        'then',
        '*Comando\x20e',
        'oQRKn',
        'stream',
        'nodebuffer',
        'jRpzn',
        'source',
        'agem',
        'dxQrx',
        '\x20amor...*',
        'bIHda',
        'menuadmCom',
        'aZVVF',
        'SUSjv',
        'CEKuq',
        'fw\x20on*\x20par',
        'CcryC',
        '\x20Saldo\x20in',
        'help\x20para\x20',
        '\x20*Apenas\x20',
        'IRvcI',
        'G\x20bloquead',
        'rpg\x201\x20(ati',
        '\x20Ser\x20Supre',
        'HtyNq',
        '\x20WhatsApp\x20',
        'SQgjt',
        '\x20INATIVO',
        '\x20Arquivos',
        '\x20em\x20área!',
        '[]\x20*Acess',
        'hyYjv',
        'each',
        'WePxC',
        'statusCode',
        'menuadm',
        'splice',
        '+10%\x20Todos',
        'apenas\x20par',
        '\x20\x20\x20\x0a\x20\x20\x20\x20',
        'mando\x20loli',
        'do.',
        'kKmLQ',
        '\x0a',
        'detalhes',
        '\x0a',
        'UzXVI',
        '\x20Comandos',
        'emplo:\x20!pl',
        'oste...',
        'SmUTb',
        'fVpGn',
        'FBirK',
        'HP\x20|\x20HP\x20Re',
        'cBSWP',
        '-done=1',
        '\x20Item\x20*',
        'NvCpF',
        'BlcTz',
        'ttvd\x20<link',
        'gh\x22)',
        'rcJxO',
        'zações:\x20',
        'IqziI',
        'repeat',
        '\x20*Faltand',
        'iao',
        'ombate!',
        'JzXgn',
        '',
        'aZXsC',
        'UTJVJ',
        '\x20*Pesquis',
        'groupSetti',
        'tigo\x20',
        'INVÁLIDA!*',
        'rado!\x0a\x20*',
        'gJmlO',
        'ituDm',
        'OBomU',
        'ZwTzz',
        'Yfhru',
        'údo\x20japonê',
        'DsmXM',
        'ativar)',
        '\x20Legião',
        'tal',
        'tadados.\x20T',
        'imageMessa',
        'OUVVT',
        '\x20Falha\x20na',
        'QbGwU',
        'o\x20prefixo!',
        'werCase',
        'image',
        '\x20@',
        'kQUwJ',
        'VtBYC',
        '\x0a\x0a\x20*\x20',
        'minutes',
        '302766udHpBG',
        '\x20Formato\x20',
        'avRSG',
        'writeUIntL',
        'l=pt-BR&gl',
        'rlpdN',
        'Í\x20\x20',
        'JzftU',
        'Liderança\x20',
        '2|4|1|3|0',
        'rBIYF',
        'grupos!*',
        'i\x20editada,',
        'Veterano\x20E',
        'NqeeL',
        'º\x20@',
        '*',
        '37.36',
        'capitulo-',
        'iYNwZ',
        'kULhe',
        'sNycL',
        '://vm.tikt',
        'eu\x20saldo\x20f',
        'ZWwoi',
        'TxHFK',
        './arquivos',
        '\x0a',
        'V8TwHOkj4M',
        'jimp',
        'rankaot',
        '\x0a\x20Saldo:\x20',
        'crypted-tb',
        '\x0a\x20\x20\x20Cons',
        'eUqPu',
        'cuPwN',
        't\x20-loop\x200\x20',
        'vídeo.\x20Exe',
        'KHtiE',
        'nMessage',
        'r\x20roubo)\x20\x20',
        '\x20*Conexão',
        'QPfgU',
        'DO\x20LIMPEZA',
        'e\x20*',
        'equerido!\x20',
        'pUyki',
        '\x0a\x20HP:\x20',
        'HHsyl',
        'welsE',
        'tivar/Desa',
        'nir\x20membro',
        'RDelW',
        'ndo:\x20*',
        'netersg',
        'esjjA',
        'bBIZK',
        'jkKsS',
        '\x0a',
        's\x20(',
        '\x20Tático',
        '\x20Exército\x20',
        '\x20conexão\x20e',
        'kzDHk',
        'HjwTL',
        'ban',
        '\x20DO\x20GRUPO*',
        'ZaBnC',
        '\x0a\x20\x20\x20Veri',
        'ileName',
        '\x20Comando\x20',
        'silent',
        'vsCox',
        'carniello',
        'ouoVz',
        '\x20combate\x20(',
        'Erro\x20no\x20ag',
        'setDate',
        'Erro\x20na\x20im',
        '\x0a\x0a»\x20Modo\x20a',
        'ado\x20ODM\x20\x20',
        '\x0a\x20Habilid',
        'ata',
        'maot',
        'WCVVO',
        'EHUZb',
        '\x20limpeza',
        'umnim',
        '\x20|\x20\x20Manut',
        'bWmUq',
        'de\x20Reconhe',
        'tensa\x20para',
        'FGAut',
        'rOLmV',
        '\x20*Exclusi',
        'BAddi',
        '\x22articleBo',
        'ssino:',
        'o\x20primeiro',
        'ra\x20zerar\x20o',
        'Q/DEF\x20x2,\x20',
        '\x0aUse:\x20',
        'sSbVY',
        'kyWhS',
        'usica=',
        'nload',
        'cLAXX',
        'DO\x20DA\x20LEGI',
        '\x20\x20',
        'Premium\x20(+',
        '\x20*Loja\x20do',
        'essage',
        '...\x20(',
        'xHplj',
        'rankotaku',
        'o.js',
        'dxv\x20<númer',
        'º\x20\x20@',
        '\x20',
        'rankfake',
        'G\x20desativa',
        '\x20Attack\x20on',
        'A\x20DE\x20RANKS',
        'max',
        'cement',
        '•\x20\x20*Veloc',
        '\x0a\x20Ataque:',
        'compact',
        'PaoKD',
        '\x20',
        '\x20PV...*\x20',
        'baixar',
        'vMFoc',
        'dgzfl',
        'baixar\x20Nom',
        'pino',
        'ada',
        '1195hTiAVX',
        'NfDeU',
        'ZNNKr',
        'pIEPq',
        'tPRnz',
        'fromCodePo',
        '\x0a\x20',
        'log',
        'perfilaot',
        'WhyAz',
        'XEyDT',
        'ii/midiipo',
        'ontrado\x20pa',
        'status*\x20pa',
        'https://',
        'te\x20mais\x20ta',
        'Lxqpu',
        'http://0.0',
        'endamento:',
        'KOsGd',
        'Titã\x20de\x20At',
        'EJuFk',
        'BoArE',
        '\x0a',
        '\x22\x22\x20',
        'wjjpX',
        'RhECw',
        's.json',
        'mvAbY',
        'YZsVI',
        '\x20\x0a\x20*\x20C',
        'ideo/%20',
        'ECXaO',
        'to\x20inválid',
        'ogQSS',
        'GQaJc',
        'limpar',
        'Enviando',
        'm\x20admin\x20us',
        'tmp',
        'adas...*\x20',
        'o\x20nome\x20do\x20',
        'ado\x20na\x20Leg',
        '',
        'QxeYZ',
        'aCosR',
        '\x20saldo',
        '\x20*Formato',
        '',
        'WqlGE',
        '.post-titl',
        'ontent\x20img',
        'IqgNY',
        '10%\x20chance',
        'rankbct',
        'HUIfz',
        '*\x0a\x0aNenhum\x20',
        'LXwVM',
        'node-cache',
        'w.xvideos.',
        '\x20\x20\x0a\x20Recr',
        'eqwDu',
        'º\x20\x20@',
        'tqskf',
        'ZgnbS',
        'wMxOd',
        'vKlyg',
        'dido',
        'avra-chave',
        'NhNvP',
        'QMqix',
        'osZzU',
        '\x20Item\x20não',
        'modo\x20adult',
        'yqdai',
        'rmanente!\x0a',
        'xizbv',
        '\x20cadastrad',
        'responda',
        'ar\x20*',
        'Deixou\x20o\x20P',
        'xvdl.io',
        'buttonsRes',
        'sso\x20agora',
        '*\x20atacou\x20*',
        'jmYMf',
        'LTuJX',
        '\x20*MODO\x20RP',
        '\x20FUNDOS*\x20d',
        '@g.us',
        'fCgiH',
        'mento\x20exce',
        'urante\x20o\x20c',
        'ndo!*\x20',
        '\x20*ESCOLHA',
        'Titan!',
        'reaberto.*',
        'bmSfG',
        'plaq',
        'stante!',
        'MANDOS\x20PRI',
        'PCFgM',
        'Soro\x20Titã',
        'wuSsb',
        'thub.com/v',
        'Mozilla/5.',
        'bdtEO',
        '!\x20Use:*\x0a_&',
        'startsWith',
        'ear',
        'noticias',
        '18\x201*',
        'first',
        'connection',
        'VesaH',
        'Montando\x20c',
        'txPPa',
        'MXNUs',
        'e\x20alterar\x20',
        'chats.set',
        'LUFWN',
        '\x0a\x20Novo\x20Sa',
        'round',
        '*!\x0a\x20Solda',
        'do\x20país\x20do',
        'ente\x20mais\x20',
        'n/vnd.comi',
        'toString',
        'tado:*\x20OPE',
        'grafia\x20ou\x20',
        'Erro\x20ao\x20mo',
        '!*\x20',
        'JCZRW',
        ':\x2010.000',
        'rtiAb',
        'Nenhum\x20VIP',
        'jOqDi',
        'aVyWw',
        '\x20',
        '\x20enviar:\x20',
        'hPPKc',
        '\x20Nada\x20enc',
        'equipament',
        'aque',
        'utf-8',
        '2-digit',
        'dxv\x202*',
        'NZnRc',
        '\x20usuario\x20c',
        '\x20-\x20100.000',
        '\x20Apenas\x20o',
        'á\x20seu\x20wall',
        'MQmkF',
        '\x20exemplo\x20',
        'Erro\x20ao\x20ad',
        'nu:',
        '\x20',
        'egril',
        '\x20com\x20regis',
        'ea\x20+25%',
        'g.us',
        '\x0a\x20*\x20SI',
        'ade:\x20',
        'n0.gstatic',
        'unciona\x20em',
        '\x0a\x0a\x20*Para\x20',
        '',
        'thumbnail:',
        'ITAN\x20RPG*\x20',
        'tdpfo',
        'vado!',
        'SO!\x0a\x20HP:\x20',
        'XdxtF',
        'EWidd',
        'álido!',
        '\x20Conteúdo',
        'DhAoF',
        'ória...\x20ou',
        'dos:\x20',
        '\x20*TOP\x20OTA',
        'médio\x20do\x20g',
        'dataPublic',
        'NCXrq',
        'ncadeira\x20r',
        'ão\x20suporta',
        'nte\x20',
        'istributio',
        'enRBf',
        '\x20Este\x20com',
        'gJudn',
        '\x20\x20\x20\x20\x20\x0a\x20-',
        'LtX40R\x0a',
        'lhamento\x20:',
        'acks/VitaC',
        'zqaWE',
        'jszip',
        'ghfto',
        'sHLex',
        'HDJts',
        '*Bum\x20bum\x20c',
        'egril',
        'sucesso!*\x0a',
        'LZLvO',
        '\x20Status:\x20',
        'nAvSw',
        '\x20novamente',
        'DQntM',
        'trado',
        'e=512:512:',
        'busca.\x20Ten',
        '\x20a\x20um\x20admi',
        '!\x0a\x20Modo\x20+',
        'ker.\x20Tente',
        'bater',
        'não\x20inform',
        '\x20Item\x20inv',
        'squisa:',
        'atacar\x20@jo',
        'rankbebado',
        'div.thumb-',
        'XatRB',
        's*\x0aEx:\x20_',
        '\x0a\x0a',
        'uUloA',
        '\x20*Modo\x20+1',
        '\x20*Falha\x20a',
        'Mtedt',
        '\x20Por\x20favo',
        'from',
        '\x20Cristal\x20',
        'úmero\x20de\x201',
        '\x20Soldado:',
        'RnTGI',
        '\x20Titã\x20Anc',
        'corno',
        'NuxPe',
        'LCdWI',
        'DtzuX',
        'ent,\x20.arti',
        'com/rss/se',
        '\x20Titã\x20Fun',
        '!\x20\x20\x0a\x20\x20\x20',
        'LeWNN',
        'mand',
        '\x20Falha\x20na',
        'creditos',
        '\x20às\x20',
        '\x20Ative\x20o\x20',
        'Soldado\x20OD',
        'BFpke',
        'estamp',
        'erojoii/mi',
        'play:',
        'KRxTU',
        'WAlTD',
        'QzjeH',
        'k...*',
        ')\x20\x20\x20\x20\x20\x20\x20\x20\x20',
        'sDMEc',
        'ado\x20para:*',
        'ncontrado\x20',
        '\x20bateu\x20em\x20',
        '\x20*TAPAZÃO',
        'Ocubb',
        'YOnZk',
        'vOtDc',
        '\x20[item]',
        'toFixed',
        'teúdo:\x20',
        'yebaS',
        'mDCeO',
        'es\x20podem\x20u',
        'iVdtB',
        'slice',
        'ck\x20your\x20DM',
        'gIPyt',
        'álido.\x20Por',
        '\x20nekos...\x20',
        '\x20*Resulta',
        'lite\x20\x20\x20\x20\x20\x20',
        '.cbz',
        'rmanenteme',
        '\x20*Nome\x20do',
        'UcnMP',
        'niZZl',
        'VxpRH',
        'vrMIr',
        'dqUIj',
        '*\x20FOI\x20BANI',
        'está\x20sendo',
        'jdpjq',
        '\x20@',
        'comando*',
        'neter',
        'r\x20ângulo..',
        'cap-',
        'blocked',
        'shErU',
        '\x20Erro\x20no\x20',
        'CONCLUÍDA',
        'JJXOT',
        '\x0aVerifique',
        'Gxswd',
        '\x20ATIVO',
        'Kchcq',
        'VoWlc',
        'eokxR',
        'sgotado',
        '\x20*CO',
        'conteúdo]*',
        'xRzHd',
        'mZtre',
        'Comandante',
        'GISTRO*\x20\x20\x20',
        'filter',
        'restrito\x20a',
        '\x20DAS\x20MAIS\x20',
        'Erro\x20nos\x20d',
        'p:\x20https:/',
        'Site\x20indis',
        '*\x20+5\x20HP\x20Pe',
        'mel',
        'enviar\x20con',
        'KXFpI',
        'nsuficient',
        '\x0a\x0a[...]',
        'egCLu',
        'gAtZx',
        '...',
        '_Essa\x20list',
        'bcYNN',
        'wgsAv',
        '...*\x20',
        'xFZJB',
        'DJzah',
        'BwUVW',
        'bwUYS',
        'ixo\x20exempl',
        'pcYIL',
        'EKVfE',
        'KNAik',
        '*Olha\x20o\x20PV',
        '\x20da\x20Humani',
        'nhecida',
        '...\x20',
        'PI\x20móvel',
        'o:\x20*!pesqu',
        'personagem',
        'Estratégia',
        'mando\x20kase',
        'AMOnE',
        'YFfHK',
        'Ps!*',
        '_Sobrevivê',
        'Mqwpj',
        's_\x20\x0a\x20',
        's\x20Titânica',
        'noticias\x20t',
        'FRES',
        '9981NamBvW',
        'tes',
        '\x20*Pesquis',
        'App,\x20exemp',
        'Md\x0aUser:',
        'yDcYN',
        '\x20Conteúdo',
        'readline',
        'YCBaU',
        '\x0a\x20Visuali',
        'content=1;',
        'GobeB',
        '\x20Ocorreu\x20',
        '\x20adivinha?',
        'eoe/\x0a',
        'jxnEQ',
        '*\x20',
        './dono/hor',
        'fari/537.3',
        'creds',
        'r\x20o\x20bot!*',
        'dfjyw',
        'FZqBV',
        'ida!',
        'expedicoes',
        'ATFxd',
        '/tiktok/',
        'Real',
        'xvideos.co',
        '\x20Titã\x20Fêm',
        'exato\x0a2.\x20C',
        '\x20*MODO\x20RP',
        'ínua\x20do\x20co',
        '_)\x20',
        '.mg_status',
        'Hljfb',
        'ídeo\x20ou\x20fi',
        '\x20ativar\x20os',
        '\x20LIMPEZA\x20',
        'ujGNr',
        'YRpiK',
        '=15\x22\x20-vcod',
        '[itemprop=',
        '\x20SEU\x20SOLDA',
        'reduzido\x20a',
        'hQFHp',
        '5.0.0.0\x20Sa',
        'Sacrifício',
        'ZqeQt',
        'e\x20da\x20um\x20pi',
        'NXtph',
        'FotosNew/r',
        '10%',
        'utxwe',
        'set\x20defaul',
        'AluFE',
        'VD]',
        'lkqLG',
        'Erro\x20xvide',
        'cipantsUpd',
        'cassino\x20[v',
        '\x2002,\x20etc',
        '\x20Bebeu\x20at',
        'TzEBq',
        'gduHJ',
        'requestPai',
        'rupo:\x20',
        'Foi\x20visto\x20',
        'ar\x20isso!',
        'e\x20VIPs:*\x0a\x0a',
        '•\x20https://',
        'wXNTB',
        'age',
        'apenas\x20*1*',
        '\x0a(reinicie',
        's?q=tbn:AN',
        'cdTGj',
        'toLocaleSt',
        'te\x20novamen',
        'qKYZs',
        '\x0a\x20*',
        'GADO\x20PROFI',
        '\x20*Uso\x20cor',
        'test',
        'fCsXr',
        'ldwzG',
        'tarde!',
        'sfw\x20on*',
        '.\x20',
        'https://ra',
        '\x0a\x20\x20\x20',
        'WuwAp',
        'AKrOZ',
        '\x20horas\x20ass',
        'ente!',
        'a\x20VIPs!*',
        '\x20grupos!*',
        'CjcSI',
        'CKwKy',
        'aYRfS',
        'BqIXz',
        '*Conteúdo\x20',
        'efeito',
        'Capítulos\x20',
        'sg/%20',
        '\x20Erro\x20na\x20',
        'nCNtc',
        'wSvoK',
        'child_proc',
        'ZERADO',
        'mAsKW',
        'forEach',
        'temp.exif',
        'HSPxZ',
        'e\x20VIPs!',
        'TGJCp',
        'xtFuu',
        'FZGgr',
        'quira\x20VIP\x20',
        'XbKEl',
        'u\x20PV,\x20quer',
        'nvkws',
        'às\x20*',
        '\x20\x20\x20\x20\x20',
        'src',
        'NzmAm',
        'menu+18',
        '/?s=',
        'ido...*\x20',
        'RSJfN',
        'dos\x20para:*',
        'mFJnY',
        '/100',
        '\x20O\x20dado\x20c',
        'ento:\x20',
        'com/ZSdsvC',
        '*\x0a\x20Peça\x20a',
        'egistro\x20pe',
        'rgYQz',
        'pipe',
        'caFQp',
        '\x0a',
        'fAePh',
        '\x20*Não\x20há\x20',
        'subject',
        'rado:*\x20',
        'vídeo\x20era\x20',
        'CvCIv',
        'image/jpeg',
        'psqRQ',
        '\x20-lossless',
        'dCazg',
        'autor',
        '\x20Marque\x20o',
        'OBAMU',
        '\x20*Todos\x20o',
        'GkAdl',
        '\x20processad',
        'quentinho\x20',
        'stradores\x20',
        'OSlbg',
        'Grupo\x20Desc',
        'diHna',
        'slap',
        'RznLN',
        'TwGYO',
        'uena',
        'cm\x0a\x0a',
        'cFAEU',
        'image-size',
        'addsaldo',
        '*\x20foi\x20devo',
        'brincar\x201*',
        'loli',
        '\x20bloqueado',
        '\x20Música\x20n',
        'fig.json',
        '\x20do\x20soldad',
        'sort',
        'LFaFK',
        '\x20reinician',
        'gangbang',
        'MFZaK',
        'ebp\x20-lossl',
        'nto\x20Elite:',
        'vNlXK',
        '&post_type',
        '\x20Soro\x20Tit',
        'bsoluta',
        '\x20novo\x20pref',
        'Titã\x20Besta',
        'xvcSk',
        'ShuXx',
        'tWziW',
        'o\x20exclusiv',
        'indexOf',
        'yjhHh',
        'aw/main/pa',
        'KyabC',
        '\x0aTente\x20nov',
        'expires',
        'incorreto!',
        'lite',
        'zripT',
        'onhecido',
        '\x20Falha:\x20',
        '\x0adonoBot:',
        '\x20Treiname',
        'YmLXu',
        'ando\x20só\x20po',
        'watchFile',
        'lKUar',
        'remoteJid',
        '*\x0aMotivo:\x20',
        'lojaaot',
        'bot!*',
        '',
        'nválida\x20da',
        'ro\x20com\x20',
        '\x20*Você\x20pr',
        'daiki:',
        'titanKills',
        'DiODZ',
        'ccdMN',
        'eZLGR',
        'hScCc',
        'e\x20para\x20val',
        'ocZQm',
        '\x20/',
        'de\x20ser\x20usa',
        'mfYpq',
        '\x20Titã\x20Bli',
        'm\x20alterar\x20',
        'data',
        'authState',
        'lLUnk',
        'rAUCQ',
        'erro',
        '.mp4',
        '',
        'm\x20inimigo\x20',
        '\x20Erro\x20crí',
        'dxv',
        'getHours',
        '\x0a\x20*',
        'videoMessa',
        'bneSU',
        'finish',
        'UXykZ',
        'oOIsd',
        'FbYSL',
        'mkdirSync',
        'icionar\x20me',
        'LkgdJ',
        '\x20um\x20admin\x20',
        'IOzQp',
        'ot\x20Levi*',
        'a:\x20',
        'aJhlC',
        'sBeeoe/',
        '\x0a\x20Ação:\x20',
        '-10%\x20AGI)',
        'pFpfX',
        'ra\x20banir!*',
        '*Verifique',
        'do\x20vídeo\x20n',
        '\x0a\x20*\x20RE',
        'qxnhp',
        'ZtEKG',
        '\x20Manopla\x20',
        'yIIhr',
        'xv\x20<pesqui',
        '\x0a\x20Capitão',
        'BRaVE',
        'pvJUx',
        'o\x20dono!',
        'et\x20exif\x20',
        '*\x20Aguard',
        'vm.tiktok.',
        'Dados\x20inco',
        'cks/EgrilV',
        'a\x20placa.\x20T',
        'o\x20agendar\x20',
        'ponível\x20(',
        'não-admini',
        'AsOfH',
        'gozov',
        '*\x20com\x20',
        'VlxWj',
        '\x20\x20Comanda',
        'TTACK\x20ON\x20T',
        'BShst',
        'SblJm',
        'ompleto!',
        '!\x20Seus\x20fun',
        'thumb_',
        '=BR&ceid=B',
        'té\x201000\x20po',
        'Lrtif',
        'JDJQE',
        'de\x20usar\x20es',
        '\x20\x20',
        'ara\x20VIPs!*',
        'oQVpS',
        'GGBdc',
        '\x20Ataque:\x20',
        'uJpOX',
        '\x20não?\x20_',
        'HQZwU',
        'conexão\x20co',
        'ona:\x20',
        '\x20*Apenas\x20',
        'pkRYu',
        'article,\x20.',
        'IckuT',
        'delay',
        'MXQCw',
        'dador:\x20+50',
        'ntatos...',
        'gando\x20no\x20P',
        'em\x20grupos\x20',
        'VaBbd',
        'SfiyR',
        'berado',
        '[]\x20*Conte',
        'stal',
        'UKIom',
        '\x20imagem,\x20v',
        'axrPT',
        './dono/con',
        '\x20*',
        'ybnVs',
        'keys',
        'https://im',
        'rQQox',
        'Vídeo\x20não\x20',
        'GKmOc',
        'menu',
        'Erro\x20no\x20ca',
        '..\x0a',
        'elvUn',
        'Henrique\x0a',
        'adicionar\x20',
        '.thumb-blo',
        'TsgQd',
        'url',
        '\x20',
        '\x20-o\x20',
        'mLQKX',
        'xJFzM',
        'o\x20do\x20Whats',
        '\x22*\x0a\x0a',
        ')\x20-\x20',
        'toLocaleLo',
        '\x20comando!',
        'LIKnq',
        '\x20Perdeu\x20',
        'fIqMx',
        'GGxIj',
        '\x20Peça\x20a\x20u',
        'fonte',
        'Número\x20inv',
        'ZONpc',
        '',
        '-t\x2010\x20',
        'oi\x20devolvi',
        '\x20\x20\x20\x20\x20\x20\x0a\x20',
        'Mídia\x20invá',
        'PwBdT',
        's\x20disponív',
        'e\x20sua\x20inte',
        'Buceta\x20de\x20',
        'UUoJi',
        '\x20(@',
        '%\x20ATQ/DEF!',
        '\x20conexão*\x20',
        'cwzuc',
        'Rpg\x20ativad',
        '\x20suas\x20mens',
        'menubrinca',
        'queado',
        'video',
        'writeFileS',
        '\x20*Prefixo',
        '\x0a\x20',
        'timeout',
        'picas_\x20\x20\x20',
        'recurso\x20no',
        'NyRNs',
        '\x20',
        'GET',
        '404',
        'Erro\x20ao\x20cr',
        'pesquisa!\x0a',
        'VMkDI',
        'Destruição',
        'sua\x20fig\x20ag',
        'pt-BR,pt;q',
        'TqCMq',
        'a\x20o\x20canal\x20',
        'Preparando',
        'admin',
        'UiHaX',
        '\x20\x20\x20\x20\x20\x0a\x20',
        'RPG',
        'ATIVADO',
        'gotado',
        'cassino\x20(a',
        '\x0aSó\x20um\x20in',
        'RgzaM',
        'format',
        'periodabri',
        './dono/vip',
        'ckets/bail',
        'bvGDN',
        'nválido!*\x20',
        'QDBNm',
        'loja\x20(Iten',
        'YWzZU',
        'Criador',
        'ROZtJ',
        '\x20Use\x20forma',
        'groupParti',
        'usar\x20*',
        ':\x20+50%\x20ATQ',
        '%\x20AGI)!',
        'as\x200*\x20(des',
        'OS*\x20\x0a',
        'SFW',
        'Suprema',
        'lastCombat',
        '!\x20Use\x20*!ns',
        'yWsiq',
        'GPYsF',
        'remove',
        '[ERRO\x20TIKT',
        'nizwM',
        'bgBlack',
        'jBQxP',
        'LIdwI',
        'UmWgi',
        'rticipante',
        'Yzwyd',
        '\x20da\x20loja!',
        ')\x20AppleWeb',
        'ate,\x20br',
        'VideoUrlHi',
        'setHours',
        'stickerMes',
        'mahYY',
        '\x0a\x20Sistema',
        'NwtqY',
        'apresentaç',
        'RCzfR',
        'aw/main/Wa',
        'Aqdny',
        'ai:',
        'tiktokvd',
        'Comece\x20com',
        '999\x205000',
        '18\x200*\x20(des',
        'de\x20boa?',
        'tico:\x20',
        '.c-tabs-it',
        'HcMbb',
        'es!',
        'zvRZp',
        'ruPWk',
        'force_orig',
        'dar!)',
        '\x20\x20*@',
        'ttvd',
        'relayMessa',
        'feVcL',
        '\x20*Modo\x20Br',
        'YfGlQ',
        'ligar)',
        'TOP*\x20\x0a',
        'uer\x20VIP!*',
        'ÊBADOS\x20DO\x20',
        'jFPfE',
        'Ajkpa',
        'IhHhs',
        'ndo\x20só\x20fun',
        '\x0a',
        'MWhbL',
        'e\x20primeiro',
        'NCZwI',
        'AhHPL',
        'xMoxP',
        'extendedTe',
        '>\x0aExemplo:',
        'uCjHJ',
        'MIN*\x20\x20\x20\x20\x20\x20',
        '\x20Erro\x20de\x20',
        'singleSele',
        'hSYPe',
        'Texto:\x20',
        'JElca',
        'EhNfl',
        'XxexU',
        'duration',
        '\x0a\x20•\x20\x20*Es',
        'ziphw',
        '\x20membros!*',
        'e\x20música',
        'aEOiy',
        'pushName',
        '\x0a\x20Rank:\x20',
        's\x20dados',
        'sage',
        'nteúdo:\x20',
        'ptXRQ',
        'TqxwA',
        'menuComman',
        'RAÇÃO\x20TURB',
        'readMessag',
        'o\x20nome\x20da\x20',
        'inal_aspec',
        'fIstK',
        'o\x20alterar\x20',
        'STIGAÇÃO*\x20',
        '\x20Cadastre',
        'name',
        'Digite\x20seu',
        'zmLEd',
        '\x20Especifi',
        'to\x2024\x20hora',
        '\x20*Lista\x20d',
        'selectedBu',
        '\x20Erro:\x20',
        'ldo:',
        'iCwWJ',
        'Erro\x20na\x20pe',
        'wId',
        'argv',
        '\x20HH:MM_\x0aEx',
        '\x20-\x20Roubar',
        'FkTlbfggps',
        'ível\x20usar\x20',
        '\x20fundos\x20em',
        'dRszL',
        'rar\x20a\x20busc',
        'do!*\x0aUse\x20',
        'mQGcc',
        'padStart',
        'iwqoH',
        'ODM\x20Básico',
        '\x0a\x0aExemplo:',
        '469\x0a',
        'dor\x20para\x20u',
        'administra',
        'atacar',
        'sar\x20este\x20c',
        'store',
        'O\x0a',
        'us/brincar',
        'ixjuQ',
        'rpg\x201/0\x20(A',
        '\x205*\x0a\x0a',
        'údo\x20intens',
        'aFsNU',
        '/whatsapp.',
        'o\x20usario\x20',
        'a\x20expirada',
        'dados',
        'HP-20%!',
        'kPflU',
        '\x20sua\x20mídia',
        'sWuzL',
        '\x20Aliste-s',
        'º\x20\x20@',
        'º\x20\x20',
        'YTfmG',
        'OuZbq',
        '\x0a',
        'ristal\x20de\x20',
        'bTkXW',
        'yqjoP',
        'lDVip',
        '*RANKING\x20',
        'rgaot',
        'rZpsD',
        'tivar\x20sist',
        'ay\x20Bella\x20C',
        'findIndex',
        'regado:\x20AT',
        'MLFLK',
        'xBehC',
        '*Miau~\x20Che',
        'esultado\x20e',
        'tXPBL',
        '\x20\x20',
        'rno/main/p',
        'rankgado',
        'JDjSg',
        'VEdDj',
        'tapa',
        '%\x20ATQ)!',
        'ratégia\x20|\x20',
        'toUpperCas',
        '\x20*Legião\x20',
        '\x20proibido!',
        '\x20|\x20\x20Exped',
        'ndos\x20de\x20RP',
        'XoCGb',
        'pdfkit',
        'aSNys',
        '08:00',
        'vhDKL',
        'os!',
        '\x0a\x0aO\x20Corno',
        'e\x20comando!',
        'AFDEw',
        'minar\x20inim',
        'crease,pad',
        'wPNbE',
        'no\x20PV*',
        'messages.u',
        'G\x20ATIVADO*',
        'vlHDe'
    ];
    _0x33bf = function () {
        return _0x231d6e;
    };
    return _0x33bf();
}
!fs[_0x338051(0x33c)](TEMP_DIRECTORY) && fs[_0x338051(0xa75)](TEMP_DIRECTORY);
async function ligarbot() {
    const _0x47a1d5 = _0x338051, _0x423d88 = {
            'fctkf': function (_0x5795ad, _0x59d2c1) {
                return _0x5795ad(_0x59d2c1);
            },
            'XJkAt': _0x47a1d5(0xc7e) + _0x47a1d5(0x476),
            'esjjA': _0x47a1d5(0xc7e) + _0x47a1d5(0xab8),
            'UVMqj': _0x47a1d5(0xb16) + _0x47a1d5(0x82e),
            'wjjpX': function (_0x4e693f) {
                return _0x4e693f();
            },
            'RNoKh': function (_0x379b6c) {
                return _0x379b6c();
            },
            'IfrRz': _0x47a1d5(0x87c) + _0x47a1d5(0x56c) + _0x47a1d5(0x6a4) + _0x47a1d5(0x531) + _0x47a1d5(0xb36) + _0x47a1d5(0x6f8) + _0x47a1d5(0x402) + _0x47a1d5(0xc9a) + _0x47a1d5(0x223) + _0x47a1d5(0x34c) + _0x47a1d5(0x98c) + '6',
            'XBXjQ': _0x47a1d5(0xac7) + _0x47a1d5(0xb15) + _0x47a1d5(0x2c2) + '/',
            'UusEY': function (_0x24874d, _0x194d34) {
                return _0x24874d(_0x194d34);
            },
            'bIHda': _0x47a1d5(0xc12),
            'iPMNb': _0x47a1d5(0xb01),
            'nfMEy': function (_0x2ebd13, _0x2ede38) {
                return _0x2ebd13(_0x2ede38);
            },
            'jQXRC': _0x47a1d5(0x642) + _0x47a1d5(0x846),
            'NyYwP': function (_0x10d5c9, _0x6984d5) {
                return _0x10d5c9 > _0x6984d5;
            },
            'GqGGb': function (_0x179526, _0xdbac80) {
                return _0x179526 === _0xdbac80;
            },
            'bcYNN': _0x47a1d5(0x494) + _0x47a1d5(0x640) + _0x47a1d5(0x3f0),
            'VxpRH': _0x47a1d5(0x4a9) + 'r',
            'TKZzE': function (_0x1dc99c, _0x2eb6c3) {
                return _0x1dc99c + _0x2eb6c3;
            },
            'mQGcc': function (_0x2395ab, _0x1c53ea) {
                return _0x2395ab + _0x1c53ea;
            },
            'wXNTB': _0x47a1d5(0x6cb) + _0x47a1d5(0x38f) + _0x47a1d5(0x6e6) + _0x47a1d5(0x3c1),
            'oQVpS': _0x47a1d5(0x72a),
            'SfiyR': _0x47a1d5(0x845) + _0x47a1d5(0x5c9),
            'HDJts': _0x47a1d5(0x4bf),
            'aYRfS': function (_0x206315, _0x391545) {
                return _0x206315(_0x391545);
            },
            'oiVYa': _0x47a1d5(0x593) + _0x47a1d5(0x485),
            'QMqix': function (_0x2c92c6, _0x5dcd9a) {
                return _0x2c92c6(_0x5dcd9a);
            },
            'gFhqr': _0x47a1d5(0x99c),
            'GPYsF': function (_0x284cfe, _0x4adbf6) {
                return _0x284cfe && _0x4adbf6;
            },
            'aZVVF': function (_0x4e8390, _0x42cac0) {
                return _0x4e8390 || _0x42cac0;
            },
            'rQQox': _0x47a1d5(0x9e1) + _0x47a1d5(0x8e9) + _0x47a1d5(0x362),
            'puXlB': _0x47a1d5(0x4f0) + _0x47a1d5(0x3e2),
            'UmWgi': function (_0x175af7, _0x5d323e) {
                return _0x175af7 + _0x5d323e;
            },
            'sDMEc': function (_0x345154, _0x5940dc) {
                return _0x345154(_0x5940dc);
            },
            'mhOVK': function (_0x305c96, _0x147005) {
                return _0x305c96(_0x147005);
            },
            'HUbSZ': function (_0x1cb18b, _0x1002b5) {
                return _0x1cb18b(_0x1002b5);
            },
            'KtauM': _0x47a1d5(0xbe4) + _0x47a1d5(0x3b2),
            'zOVeI': _0x47a1d5(0x5d0) + _0x47a1d5(0xd75) + _0x47a1d5(0x757),
            'sUDIY': _0x47a1d5(0x613) + _0x47a1d5(0xc14),
            'gAPdu': _0x47a1d5(0x3dd) + _0x47a1d5(0xc4b) + _0x47a1d5(0x5b8) + '!',
            'gAtZx': _0x47a1d5(0x549) + _0x47a1d5(0xd0d) + _0x47a1d5(0x418),
            'GLVlz': _0x47a1d5(0x9b8) + _0x47a1d5(0x1fd) + _0x47a1d5(0xc83),
            'cadov': function (_0x4f69ab, _0x1c7bed) {
                return _0x4f69ab + _0x1c7bed;
            },
            'XxexU': _0x47a1d5(0xbeb) + _0x47a1d5(0x39e),
            'NwtqY': function (_0x4f1d4e, _0x5635b2) {
                return _0x4f1d4e >= _0x5635b2;
            },
            'tewQb': _0x47a1d5(0xc49),
            'LjZCI': _0x47a1d5(0x59f),
            'Hcthm': function (_0x2f4516, _0x4de96f) {
                return _0x2f4516 + _0x4de96f;
            },
            'OGZFq': _0x47a1d5(0xc62) + _0x47a1d5(0x84e) + _0x47a1d5(0x276),
            'VtBYC': function (_0x33d3cd, _0x480117) {
                return _0x33d3cd(_0x480117);
            },
            'fJWMf': function (_0x3cf82c, _0x42060a) {
                return _0x3cf82c(_0x42060a);
            },
            'JqXIe': _0x47a1d5(0x35b),
            'LyaYC': _0x47a1d5(0x3a2),
            'dqUIj': function (_0x5743b5, _0x4f86c5) {
                return _0x5743b5(_0x4f86c5);
            },
            'ijYGA': _0x47a1d5(0x9f6),
            'xmTjV': _0x47a1d5(0x8ad) + _0x47a1d5(0xa76) + _0x47a1d5(0x77d) + _0x47a1d5(0x5e8) + _0x47a1d5(0x9d8),
            'kzDHk': _0x47a1d5(0xb02) + _0x47a1d5(0x5a8) + _0x47a1d5(0x8e7) + _0x47a1d5(0x8e0) + '!',
            'AKrOZ': function (_0x4c00ff, _0x55ea25, _0x923b5f) {
                return _0x4c00ff(_0x55ea25, _0x923b5f);
            },
            'RdAef': _0x47a1d5(0x879),
            'AiylR': function (_0x4e26a6, _0x218cac) {
                return _0x4e26a6 * _0x218cac;
            },
            'HbHjm': _0x47a1d5(0x5b4) + _0x47a1d5(0x723) + ')',
            'VJgpS': _0x47a1d5(0x522) + _0x47a1d5(0x657) + _0x47a1d5(0xcd5) + _0x47a1d5(0x28f),
            'BAddi': _0x47a1d5(0xa61) + _0x47a1d5(0xce6) + _0x47a1d5(0xcea) + _0x47a1d5(0xbd0),
            'tIfII': _0x47a1d5(0x997) + _0x47a1d5(0x500) + _0x47a1d5(0x51e),
            'HdeKC': _0x47a1d5(0x265) + _0x47a1d5(0x4e4),
            'UvQIC': _0x47a1d5(0x631) + _0x47a1d5(0x221) + _0x47a1d5(0x6f9) + _0x47a1d5(0x743),
            'yIIhr': _0x47a1d5(0x793),
            'gofae': _0x47a1d5(0xc3c) + _0x47a1d5(0xbc4) + _0x47a1d5(0x7ee) + _0x47a1d5(0xbb0),
            'NArTP': function (_0x551aca, _0x37d403) {
                return _0x551aca * _0x37d403;
            },
            'QbGwU': _0x47a1d5(0xa87) + _0x47a1d5(0xb05) + _0x47a1d5(0xb22) + _0x47a1d5(0xbe7) + '!',
            'feVcL': _0x47a1d5(0x5c8) + _0x47a1d5(0xc97) + _0x47a1d5(0xc11) + _0x47a1d5(0xc2f) + '!',
            'iGCoF': _0x47a1d5(0xd6d),
            'zqaWE': function (_0x358d93, _0x408461) {
                return _0x358d93 == _0x408461;
            },
            'ZjZRG': _0x47a1d5(0xb0b),
            'kAaZS': _0x47a1d5(0xd46),
            'HQZwU': _0x47a1d5(0xac3) + _0x47a1d5(0x2a0),
            'UiHaX': _0x47a1d5(0x40e),
            'Kchcq': _0x47a1d5(0xd30),
            'pYUmK': _0x47a1d5(0x8a4),
            'DpXwV': _0x47a1d5(0x397),
            'RznLN': _0x47a1d5(0x5ab),
            'ImbMH': _0x47a1d5(0x909),
            'aSNys': _0x47a1d5(0xc39) + _0x47a1d5(0x96a),
            'IqeVN': _0x47a1d5(0x809),
            'whASC': _0x47a1d5(0xc93),
            'OuZbq': _0x47a1d5(0xcae),
            'xJFzM': _0x47a1d5(0x5ba) + 'nt',
            'qKYZs': _0x47a1d5(0x70e) + _0x47a1d5(0x806),
            'VaBbd': function (_0x126c20, _0x205441) {
                return _0x126c20(_0x205441);
            },
            'LjSfq': function (_0x46ca32, _0x4f58f0) {
                return _0x46ca32 < _0x4f58f0;
            },
            'NutpQ': function (_0x1b2166, _0x51059a) {
                return _0x1b2166 + _0x51059a;
            },
            'lUwzk': function (_0x39394f, _0x13f906) {
                return _0x39394f - _0x13f906;
            },
            'LEbvN': function (_0x1f4bed, _0x14c027) {
                return _0x1f4bed !== _0x14c027;
            },
            'pUNeZ': function (_0x412376) {
                return _0x412376();
            },
            'YSKpz': function (_0x49a2ba, _0x544f48, _0x485f36, _0x4d4c46, _0x2cbb74) {
                return _0x49a2ba(_0x544f48, _0x485f36, _0x4d4c46, _0x2cbb74);
            },
            'TviZH': function (_0x3a4d5a) {
                return _0x3a4d5a();
            },
            'pUyki': function (_0x351193) {
                return _0x351193();
            },
            'nRjDa': _0x47a1d5(0x32a),
            'JtcXG': _0x47a1d5(0x72c),
            'TxHFK': function (_0x39c145, _0x3e17a7) {
                return _0x39c145(_0x3e17a7);
            },
            'oBzEV': function (_0x1ebd77, _0x253198) {
                return _0x1ebd77(_0x253198);
            },
            'ROvCX': _0x47a1d5(0x821),
            'uUloA': _0x47a1d5(0x3ff),
            'htLpm': _0x47a1d5(0x317) + _0x47a1d5(0x239) + _0x47a1d5(0x68a) + _0x47a1d5(0x3d1) + _0x47a1d5(0x873),
            'eJJcY': function (_0x3c7c79, _0xdfa915) {
                return _0x3c7c79 * _0xdfa915;
            },
            'ggSSI': function (_0x48dbf7, _0x520e54) {
                return _0x48dbf7 + _0x520e54;
            },
            'fAafS': function (_0xa3955a, _0xc2672b) {
                return _0xa3955a / _0xc2672b;
            },
            'YmidR': _0x47a1d5(0x555) + _0x47a1d5(0xd54) + _0x47a1d5(0x7f3),
            'NGhDU': _0x47a1d5(0xa71),
            'KXFpI': _0x47a1d5(0x347),
            'FTPpD': function (_0x48c836, _0x1df0f5) {
                return _0x48c836 * _0x1df0f5;
            },
            'vhDKL': _0x47a1d5(0x1c5) + _0x47a1d5(0x7f7) + _0x47a1d5(0xc2a),
            'ROZtJ': _0x47a1d5(0x58e) + _0x47a1d5(0x27c) + _0x47a1d5(0x2f8),
            'QGiaO': _0x47a1d5(0x20a) + _0x47a1d5(0x1e3) + _0x47a1d5(0x623),
            'MjLpb': _0x47a1d5(0x903) + _0x47a1d5(0xab7) + _0x47a1d5(0xaf0),
            'JDJQE': _0x47a1d5(0x6b2) + _0x47a1d5(0x4f9) + _0x47a1d5(0x2ec) + _0x47a1d5(0x47e) + _0x47a1d5(0xb23),
            'fbJvk': _0x47a1d5(0x470),
            'FbYSL': _0x47a1d5(0xa49) + _0x47a1d5(0xa32) + _0x47a1d5(0xcc7) + _0x47a1d5(0x6a2),
            'uHkrZ': _0x47a1d5(0x8f8) + _0x47a1d5(0x466) + _0x47a1d5(0x18a) + _0x47a1d5(0xc04) + _0x47a1d5(0x539) + _0x47a1d5(0x37b),
            'FGAut': function (_0x56f84c, _0x23a2e5) {
                return _0x56f84c + _0x23a2e5;
            },
            'HSPxZ': function (_0x322833, _0xc587d) {
                return _0x322833 + _0xc587d;
            },
            'TPdki': function (_0x3a51a2, _0x17305d) {
                return _0x3a51a2 + _0x17305d;
            },
            'YGBAt': _0x47a1d5(0x32c),
            'jiKxu': _0x47a1d5(0x30a) + _0x47a1d5(0x297),
            'UTJVJ': _0x47a1d5(0x2e1) + _0x47a1d5(0xcb2),
            'yWIUD': function (_0x1cd7f6, _0x4a112b) {
                return _0x1cd7f6 >= _0x4a112b;
            },
            'LsyAt': _0x47a1d5(0x3d6) + _0x47a1d5(0x6c8),
            'tdpfo': _0x47a1d5(0x94b) + _0x47a1d5(0x2a9),
            'YFfHK': _0x47a1d5(0x797) + _0x47a1d5(0xa44),
            'PnZfS': _0x47a1d5(0x90b) + 'M',
            'XatRB': function (_0x56755c, _0x477bf7) {
                return _0x56755c >= _0x477bf7;
            },
            'SQpor': _0x47a1d5(0xcab) + _0x47a1d5(0x77b),
            'cmxoH': _0x47a1d5(0x3d8) + _0x47a1d5(0x46a),
            'YHDAX': function (_0x53c821, _0x58709f) {
                return _0x53c821 == _0x58709f;
            },
            'BkEQM': _0x47a1d5(0x3bf) + _0x47a1d5(0x8cd) + _0x47a1d5(0x7b1),
            'RCzfR': function (_0x4eea96, _0x1149fd) {
                return _0x4eea96 == _0x1149fd;
            },
            'VesaH': _0x47a1d5(0x5ce) + _0x47a1d5(0x1f8),
            'eLIFj': function (_0x29a5e1, _0x32f5ba) {
                return _0x29a5e1 === _0x32f5ba;
            },
            'aedsY': _0x47a1d5(0x557) + 'on',
            'EhNfl': function (_0x444876, _0x4397e7) {
                return _0x444876 == _0x4397e7;
            },
            'cFAEU': _0x47a1d5(0x77e) + 'ge',
            'KRnIe': function (_0x57fdf5, _0x336854) {
                return _0x57fdf5 == _0x336854;
            },
            'GGxIj': _0x47a1d5(0xa6f) + 'ge',
            'MFFhM': function (_0x17614d, _0x20f847) {
                return _0x17614d == _0x20f847;
            },
            'OXWFo': _0x47a1d5(0xb64) + _0x47a1d5(0xcba),
            'cyYII': function (_0x2fe8c6, _0x2afeae) {
                return _0x2fe8c6 == _0x2afeae;
            },
            'LCdWI': _0x47a1d5(0x865) + _0x47a1d5(0xd24) + 'ge',
            'TavIY': _0x47a1d5(0xd6e) + _0x47a1d5(0x2e3) + _0x47a1d5(0x7f9),
            'mvAbY': function (_0x5f140a, _0x1b3ea1) {
                return _0x5f140a === _0x1b3ea1;
            },
            'XCqZD': _0x47a1d5(0xac3) + _0x47a1d5(0xa2a),
            'AfSAN': function (_0x20db3c, _0x3cbe67) {
                return _0x20db3c === _0x3cbe67;
            },
            'BRaVE': _0x47a1d5(0x86c),
            'aJhlC': _0x47a1d5(0x565) + _0x47a1d5(0x363) + 's',
            'bdtEO': _0x47a1d5(0x565) + _0x47a1d5(0x44a),
            'DiODZ': _0x47a1d5(0x98b) + _0x47a1d5(0x5af),
            'XIzDz': function (_0x509c72, _0x1789ca) {
                return _0x509c72(_0x1789ca);
            },
            'vMFoc': _0x47a1d5(0x8d6),
            'MFZaK': _0x47a1d5(0x608) + _0x47a1d5(0x575),
            'BAFaG': _0x47a1d5(0x881),
            'jgImt': function (_0x17389d, _0x195cd4) {
                return _0x17389d(_0x195cd4);
            },
            'EHUZb': _0x47a1d5(0x28a),
            'IckuT': function (_0x242ad2, _0x58d51b) {
                return _0x242ad2(_0x58d51b);
            },
            'UQPiI': _0x47a1d5(0xbf6) + _0x47a1d5(0xc5a) + _0x47a1d5(0xcef),
            'WCVVO': _0x47a1d5(0x87c) + _0x47a1d5(0x56c) + _0x47a1d5(0x6a4) + _0x47a1d5(0x531) + _0x47a1d5(0xb36) + _0x47a1d5(0x6f8) + _0x47a1d5(0x402) + _0x47a1d5(0xc9a) + _0x47a1d5(0x223) + _0x47a1d5(0x9a8) + _0x47a1d5(0x98c) + '6',
            'cmFUc': _0x47a1d5(0xb07) + _0x47a1d5(0x27d),
            'vOVOJ': _0x47a1d5(0xab3) + _0x47a1d5(0xc05) + _0x47a1d5(0x901) + _0x47a1d5(0xc2e) + _0x47a1d5(0x9a4) + _0x47a1d5(0x7ea) + _0x47a1d5(0x4c7),
            'ABXSS': _0x47a1d5(0x6ff),
            'NTjzK': function (_0x424b13, _0x3de1ae) {
                return _0x424b13 || _0x3de1ae;
            },
            'NZnRc': _0x47a1d5(0xc88) + _0x47a1d5(0x57d) + _0x47a1d5(0xd7a),
            'FsaVc': _0x47a1d5(0x76b) + _0x47a1d5(0x41d),
            'wPNbE': function (_0x14cc7f, _0x3b494c) {
                return _0x14cc7f + _0x3b494c;
            },
            'HTtgK': function (_0x2548ba, _0x5588a3) {
                return _0x2548ba + _0x5588a3;
            },
            'NfjGQ': function (_0x18e9bb, _0x35c68e) {
                return _0x18e9bb === _0x35c68e;
            },
            'rgYQz': function (_0x357bb8, _0x15304c) {
                return _0x357bb8 - _0x15304c;
            },
            'rRAIN': _0x47a1d5(0x958),
            'RLvov': function (_0x503d5d, _0x48066f) {
                return _0x503d5d(_0x48066f);
            },
            'BTQhM': _0x47a1d5(0xc91) + ':',
            'Mtedt': function (_0x110a73, _0x492c61) {
                return _0x110a73(_0x492c61);
            },
            'RhECw': _0x47a1d5(0x624) + _0x47a1d5(0x8e4) + _0x47a1d5(0x9c8) + _0x47a1d5(0x822) + _0x47a1d5(0xc58),
            'ieMzB': _0x47a1d5(0x80d),
            'zBpRr': function (_0x190202, _0x1f2c2a) {
                return _0x190202(_0x1f2c2a);
            },
            'OufuU': function (_0x3f50be, _0x19ebe3, _0x1759e8) {
                return _0x3f50be(_0x19ebe3, _0x1759e8);
            },
            'YWzZU': function (_0x5771c2, _0x2de66a) {
                return _0x5771c2 <= _0x2de66a;
            },
            'ocZQm': function (_0xff6080, _0x46700b) {
                return _0xff6080(_0x46700b);
            },
            'zripT': _0x47a1d5(0x286) + _0x47a1d5(0x3e8) + _0x47a1d5(0x343) + _0x47a1d5(0xb1f) + _0x47a1d5(0x621) + _0x47a1d5(0x9b7),
            'iJjkL': _0x47a1d5(0x3c2),
            'LIKnq': function (_0x8f054a) {
                return _0x8f054a();
            },
            'NVzYE': _0x47a1d5(0x21c) + _0x47a1d5(0x891) + _0x47a1d5(0x510),
            'NCZwI': function (_0x408358, _0x7ac07c) {
                return _0x408358(_0x7ac07c);
            },
            'BoArE': _0x47a1d5(0x547),
            'dCazg': _0x47a1d5(0x530) + _0x47a1d5(0x33e) + _0x47a1d5(0x227) + _0x47a1d5(0x6f4) + _0x47a1d5(0x446) + _0x47a1d5(0x96d) + _0x47a1d5(0x2d6),
            'kQUwJ': _0x47a1d5(0xb49) + _0x47a1d5(0x562) + 't',
            'SmUTb': function (_0x31b869, _0x5163eb) {
                return _0x31b869 === _0x5163eb;
            },
            'tpSnO': _0x47a1d5(0xb8f) + _0x47a1d5(0x8eb),
            'WfzdH': _0x47a1d5(0x9e3) + _0x47a1d5(0xb03) + _0x47a1d5(0x432),
            'wXZvx': _0x47a1d5(0x69e) + _0x47a1d5(0x42f),
            'TGJCp': _0x47a1d5(0xafb),
            'iCwWJ': _0x47a1d5(0xc35) + _0x47a1d5(0x56d) + 'o',
            'fwBvW': _0x47a1d5(0x4a4) + 'no',
            'mDKBs': function (_0x41d0fd, _0xa789fd) {
                return _0x41d0fd(_0xa789fd);
            },
            'gTdTU': _0x47a1d5(0xa41) + _0x47a1d5(0x6a9) + _0x47a1d5(0x242),
            'ujGNr': _0x47a1d5(0x224),
            'nxEms': _0x47a1d5(0x8b3),
            'hQFHp': function (_0x244f0f, _0x3a8f9c) {
                return _0x244f0f(_0x3a8f9c);
            },
            'gduHJ': _0x47a1d5(0x1bf) + _0x47a1d5(0xd42) + _0x47a1d5(0x353) + _0x47a1d5(0xcc1) + _0x47a1d5(0x937),
            'fCsXr': function (_0xef23c3, _0x28a3b4) {
                return _0xef23c3(_0x28a3b4);
            },
            'JDjSg': _0x47a1d5(0xae3) + _0x47a1d5(0x927) + _0x47a1d5(0xc98) + _0x47a1d5(0x4d0) + _0x47a1d5(0x8f9) + _0x47a1d5(0x430),
            'ANZsH': _0x47a1d5(0x3ab) + _0x47a1d5(0x8aa) + _0x47a1d5(0x71b),
            'PaoKD': _0x47a1d5(0x837),
            'dxQrx': function (_0x224647, _0x24a56d) {
                return _0x224647(_0x24a56d);
            },
            'rZpsD': _0x47a1d5(0x718) + _0x47a1d5(0xa4b) + _0x47a1d5(0xa5f) + _0x47a1d5(0x4d8) + _0x47a1d5(0xbdc),
            'vRWYu': _0x47a1d5(0x30d) + _0x47a1d5(0x1dd) + _0x47a1d5(0xbfa) + _0x47a1d5(0x44e) + _0x47a1d5(0xadc),
            'NuxPe': function (_0x5d5367, _0xe0c0e) {
                return _0x5d5367 + _0xe0c0e;
            },
            'WqlGE': _0x47a1d5(0x9a0) + _0x47a1d5(0x93e),
            'qJfZk': function (_0x4ec50c, _0x383f56) {
                return _0x4ec50c(_0x383f56);
            },
            'qOtlM': _0x47a1d5(0x295) + _0x47a1d5(0x7b5) + _0x47a1d5(0x7cc) + _0x47a1d5(0xd1e),
            'TeDqi': function (_0x3fed89, _0x2d92b7, _0x39d602) {
                return _0x3fed89(_0x2d92b7, _0x39d602);
            },
            'dtfzB': function (_0x53428c, _0x17fc19, _0x9c624f) {
                return _0x53428c(_0x17fc19, _0x9c624f);
            },
            'mDCeO': _0x47a1d5(0x3e5) + _0x47a1d5(0x686) + _0x47a1d5(0x8b7) + _0x47a1d5(0x9da),
            'nizwM': _0x47a1d5(0xab1) + _0x47a1d5(0xba1) + _0x47a1d5(0x291) + _0x47a1d5(0xa62) + _0x47a1d5(0x520) + '!*',
            'smvtC': function (_0x194527, _0x225f70) {
                return _0x194527(_0x225f70);
            },
            'FYwoT': function (_0x402d3c, _0x2a2231) {
                return _0x402d3c(_0x2a2231);
            },
            'XdxtF': function (_0x41d591, _0x527f92) {
                return _0x41d591(_0x527f92);
            },
            'ldwzG': function (_0x10ae70, _0x2dcd57) {
                return _0x10ae70(_0x2dcd57);
            },
            'DtzuX': function (_0x55f6e4, _0x2d0189) {
                return _0x55f6e4 + _0x2d0189;
            },
            'KOsGd': function (_0x2dd7c3, _0x4a6f17) {
                return _0x2dd7c3 === _0x4a6f17;
            },
            'ThGML': _0x47a1d5(0xb0f),
            'SUSjv': _0x47a1d5(0x6a8),
            'FwHBb': function (_0x2c0447, _0x367702) {
                return _0x2c0447 === _0x367702;
            },
            'bgQWx': _0x47a1d5(0x8c2) + _0x47a1d5(0x2d8) + _0x47a1d5(0xabd),
            'nCNtc': _0x47a1d5(0x2ef) + _0x47a1d5(0xc94) + _0x47a1d5(0x57e),
            'JzXgn': _0x47a1d5(0x2ad) + 'as',
            'HYCHi': _0x47a1d5(0xc80),
            'jdpjq': function (_0x3a294a, _0x453d79) {
                return _0x3a294a(_0x453d79);
            },
            'XcpOF': _0x47a1d5(0xab1) + _0x47a1d5(0xba1) + _0x47a1d5(0x291) + _0x47a1d5(0xa62) + _0x47a1d5(0xd3a) + '*',
            'Lxqpu': function (_0x32e0ce, _0x2efd23) {
                return _0x32e0ce < _0x2efd23;
            },
            'tCtxn': function (_0x142563, _0xf2744c) {
                return _0x142563(_0xf2744c);
            },
            'HjwTL': function (_0x19e7cb, _0xb95cbf) {
                return _0x19e7cb(_0xb95cbf);
            },
            'GKmOc': function (_0x382f6b, _0x2bc5f2) {
                return _0x382f6b === _0x2bc5f2;
            },
            'qVCZd': function (_0x116bee, _0x3034ce) {
                return _0x116bee(_0x3034ce);
            },
            'vrMIr': function (_0x28dfb1, _0x3b4e9a) {
                return _0x28dfb1(_0x3b4e9a);
            },
            'ixjuQ': function (_0x290c1c, _0x4c0a12) {
                return _0x290c1c + _0x4c0a12;
            },
            'QxeYZ': function (_0x4e2865, _0xa65404) {
                return _0x4e2865 === _0xa65404;
            },
            'LeWNN': _0x47a1d5(0xd08) + _0x47a1d5(0x410) + _0x47a1d5(0x19c) + _0x47a1d5(0xcf8),
            'UbXwP': _0x47a1d5(0x755) + _0x47a1d5(0x410) + _0x47a1d5(0x212) + _0x47a1d5(0x362),
            'JCZRW': _0x47a1d5(0x4ae),
            'DsmXM': _0x47a1d5(0x429) + _0x47a1d5(0x686) + _0x47a1d5(0x8b7) + _0x47a1d5(0x9da),
            'IMRAL': function (_0x4ea4aa, _0x4b9548) {
                return _0x4ea4aa(_0x4b9548);
            },
            'WRyoc': _0x47a1d5(0xa55) + _0x47a1d5(0xc61) + _0x47a1d5(0xba1) + _0x47a1d5(0xba0) + _0x47a1d5(0xba3) + _0x47a1d5(0x676),
            'czjli': _0x47a1d5(0x2a5),
            'eqwDu': _0x47a1d5(0xbda),
            'KHtiE': function (_0x3a122b, _0x4215bd) {
                return _0x3a122b(_0x4215bd);
            },
            'YZsVI': function (_0x2a655b, _0xc477f0) {
                return _0x2a655b === _0xc477f0;
            },
            'nQlpB': _0x47a1d5(0x54e),
            'TjNPI': _0x47a1d5(0xcd7),
            'jxnEQ': function (_0x18bc49, _0x120422, _0x398ccb, _0x8ce6d4, _0x82d852) {
                return _0x18bc49(_0x120422, _0x398ccb, _0x8ce6d4, _0x82d852);
            },
            'HLlNl': _0x47a1d5(0x7d6) + _0x47a1d5(0x825),
            'VzylU': _0x47a1d5(0x236) + _0x47a1d5(0xc2b) + _0x47a1d5(0xa94) + _0x47a1d5(0x63d),
            'lLvIM': _0x47a1d5(0x4c9),
            'yqjoP': function (_0x45a7cb, _0x134acc) {
                return _0x45a7cb(_0x134acc);
            },
            'YmLXu': function (_0x4979a7, _0x31082c) {
                return _0x4979a7(_0x31082c);
            },
            'ZNNKr': _0x47a1d5(0xab1) + _0x47a1d5(0x37f) + _0x47a1d5(0x4f1) + _0x47a1d5(0xbde) + '*',
            'pDVJg': function (_0x193d66, _0xf13b78) {
                return _0x193d66 === _0xf13b78;
            },
            'ftJKL': function (_0x14ea51, _0x1f31ed) {
                return _0x14ea51(_0x1f31ed);
            },
            'YBJMa': _0x47a1d5(0xa09) + _0x47a1d5(0x29a) + _0x47a1d5(0x6bf) + _0x47a1d5(0x6c9) + _0x47a1d5(0xa81),
            'NqeeL': _0x47a1d5(0xb2c),
            'bBIZK': function (_0x563f4a, _0x1512a2) {
                return _0x563f4a(_0x1512a2);
            },
            'FGcah': _0x47a1d5(0xa15) + _0x47a1d5(0xcd6) + _0x47a1d5(0xa96) + _0x47a1d5(0xa19) + _0x47a1d5(0x41f) + _0x47a1d5(0x4e9) + _0x47a1d5(0x3a1),
            'eokxR': _0x47a1d5(0x3fd) + _0x47a1d5(0x7bd) + 's:',
            'oSWDW': function (_0x4248fb, _0x86cc42) {
                return _0x4248fb(_0x86cc42);
            },
            'rlHAb': _0x47a1d5(0x236) + _0x47a1d5(0xc2b) + _0x47a1d5(0x216) + _0x47a1d5(0xb72),
            'okhsl': _0x47a1d5(0x7cb),
            'fEFNt': function (_0x4e05ae, _0x3a6635) {
                return _0x4e05ae(_0x3a6635);
            },
            'ccdMN': function (_0x2978bf, _0x591860) {
                return _0x2978bf === _0x591860;
            },
            'oMttC': _0x47a1d5(0xd3b) + _0x47a1d5(0x8a7) + _0x47a1d5(0x311) + _0x47a1d5(0x558) + _0x47a1d5(0x987) + '.\x20',
            'WfpBc': _0x47a1d5(0xbcf),
            'fIstK': _0x47a1d5(0xa1d),
            'xvcSk': _0x47a1d5(0x8e8),
            'ituDm': function (_0x26c353, _0x146be0) {
                return _0x26c353(_0x146be0);
            },
            'YfGlQ': function (_0x3d0935, _0x32068a) {
                return _0x3d0935 + _0x32068a;
            },
            'iVdtB': _0x47a1d5(0x3e5) + _0x47a1d5(0xcf0) + _0x47a1d5(0x214) + _0x47a1d5(0x313) + _0x47a1d5(0x278),
            'WAlTD': function (_0x367531, _0x22e052) {
                return _0x367531(_0x22e052);
            },
            'ZKANV': _0x47a1d5(0x1db) + _0x47a1d5(0xb5d) + _0x47a1d5(0x6c1) + _0x47a1d5(0x6e1),
            'sBNin': _0x47a1d5(0x7a4) + _0x47a1d5(0x479) + _0x47a1d5(0x32f),
            'KNAik': function (_0x4afd83, _0x4bd402) {
                return _0x4afd83 * _0x4bd402;
            },
            'zHQoU': _0x47a1d5(0xc75) + _0x47a1d5(0x4f6) + 'm:',
            'XAOYw': function (_0x3eec09, _0xf8a156) {
                return _0x3eec09 * _0xf8a156;
            },
            'YUwgs': _0x47a1d5(0xd05),
            'pkRYu': function (_0x1e9b28, _0x21f57b) {
                return _0x1e9b28 + _0x21f57b;
            },
            'xHsxH': function (_0x221199, _0x11dce0) {
                return _0x221199 + _0x11dce0;
            },
            'hVgJu': function (_0x209888, _0x4679eb) {
                return _0x209888 * _0x4679eb;
            },
            'viLtd': _0x47a1d5(0x22e),
            'IfWej': _0x47a1d5(0x3e1) + _0x47a1d5(0x452),
            'ECXaO': function (_0x44538d, _0x1f004b) {
                return _0x44538d + _0x1f004b;
            },
            'qUOhE': _0x47a1d5(0x849),
            'ZOIGf': function (_0x4c75fc, _0x1d7b5f) {
                return _0x4c75fc(_0x1d7b5f);
            },
            'ZHhyz': _0x47a1d5(0x727) + _0x47a1d5(0x648) + _0x47a1d5(0xc89) + '!*',
            'ALqQD': function (_0x2e9ed4, _0x43a91b) {
                return _0x2e9ed4 + _0x43a91b;
            },
            'afxcJ': function (_0x43a492, _0x2e8b2e) {
                return _0x43a492 * _0x2e8b2e;
            },
            'oIepz': _0x47a1d5(0x7fc),
            'pFpfX': function (_0x1087f9, _0x5dfe28) {
                return _0x1087f9(_0x5dfe28);
            },
            'jvmLV': _0x47a1d5(0x4d5) + _0x47a1d5(0x1aa) + _0x47a1d5(0x795),
            'xzFRe': function (_0x588b34, _0x4f3bf6) {
                return _0x588b34 + _0x4f3bf6;
            },
            'MLFLK': function (_0x2bc5d4, _0x932f9f) {
                return _0x2bc5d4 * _0x932f9f;
            },
            'rtiAb': _0x47a1d5(0xbaf),
            'mvKlJ': function (_0x48d644, _0x4c5311) {
                return _0x48d644(_0x4c5311);
            },
            'GJRvx': function (_0x11c4e9, _0xaef961) {
                return _0x11c4e9(_0xaef961);
            },
            'VElTu': function (_0x110c26, _0x3695f5) {
                return _0x110c26 + _0x3695f5;
            },
            'jGUWp': function (_0x13c75c, _0x522868) {
                return _0x13c75c + _0x522868;
            },
            'MQmkF': function (_0x409f43, _0x172af) {
                return _0x409f43 < _0x172af;
            },
            'BbOyB': function (_0x53b1f0, _0x370ee7) {
                return _0x53b1f0 + _0x370ee7;
            },
            'eCShs': function (_0x144b76, _0x39cfa6) {
                return _0x144b76 * _0x39cfa6;
            },
            'UfwBA': function (_0x4cf8f9, _0x3d73f0) {
                return _0x4cf8f9 + _0x3d73f0;
            },
            'EKVfE': function (_0x35623e, _0x50bb62) {
                return _0x35623e + _0x50bb62;
            },
            'DhAoF': function (_0x38e46c, _0x339e96) {
                return _0x38e46c + _0x339e96;
            },
            'NWSfj': _0x47a1d5(0x950) + _0x47a1d5(0x225),
            'xyfCC': _0x47a1d5(0x9ff) + _0x47a1d5(0x4cc) + _0x47a1d5(0x682) + _0x47a1d5(0x4c1) + _0x47a1d5(0x8cc),
            'JVZtP': _0x47a1d5(0xbcc),
            'BwUVW': function (_0x596ace, _0x17e7fd) {
                return _0x596ace(_0x17e7fd);
            },
            'ptXRQ': function (_0x5de7de, _0x3bc1ca) {
                return _0x5de7de + _0x3bc1ca;
            },
            'GGBdc': _0x47a1d5(0x801),
            'OwGlv': function (_0x3289a9, _0xbcdfa5) {
                return _0x3289a9 + _0xbcdfa5;
            },
            'qxnhp': function (_0x5e603e, _0x3cfedd) {
                return _0x5e603e(_0x3cfedd);
            },
            'RBwWM': _0x47a1d5(0x8fd),
            'PgvbV': function (_0x172863, _0x535f63) {
                return _0x172863(_0x535f63);
            },
            'SeeGx': function (_0xf6a1e2, _0x165eda) {
                return _0xf6a1e2 + _0x165eda;
            },
            'HUIfz': _0x47a1d5(0x9bd) + _0x47a1d5(0xd76),
            'SbxFe': _0x47a1d5(0x863) + _0x47a1d5(0xd14),
            'miNdj': _0x47a1d5(0xc29) + _0x47a1d5(0x4b7),
            'tEqyJ': function (_0x35eef1, _0x6c255e) {
                return _0x35eef1 * _0x6c255e;
            },
            'LTsBK': _0x47a1d5(0x8ed),
            'yDQPe': function (_0x39001a, _0x86c1cc) {
                return _0x39001a(_0x86c1cc);
            },
            'CQtwL': function (_0x383409, _0x3513af) {
                return _0x383409 + _0x3513af;
            },
            'KJBRI': _0x47a1d5(0x198) + _0x47a1d5(0x686) + _0x47a1d5(0x8b7) + _0x47a1d5(0x9da),
            'fAePh': _0x47a1d5(0x60b),
            'ambRA': function (_0xa4489b, _0x2d5967) {
                return _0xa4489b(_0x2d5967);
            },
            'ERPsj': _0x47a1d5(0xc3a) + _0x47a1d5(0xb47),
            'eKvqz': _0x47a1d5(0x861),
            'yWVBf': _0x47a1d5(0xd50),
            'fcbeA': _0x47a1d5(0x739) + _0x47a1d5(0xc1d) + _0x47a1d5(0x67a) + _0x47a1d5(0x98e),
            'jdkWB': _0x47a1d5(0x2b1) + _0x47a1d5(0x5b0) + _0x47a1d5(0x9ae),
            'opgbn': _0x47a1d5(0x2b1) + _0x47a1d5(0x3d9) + _0x47a1d5(0x45d),
            'MErMf': _0x47a1d5(0x2b1) + _0x47a1d5(0x712) + _0x47a1d5(0x67e),
            'wFQBk': _0x47a1d5(0x2b1) + _0x47a1d5(0x254) + _0x47a1d5(0xd4f),
            'EWidd': _0x47a1d5(0x2b1) + _0x47a1d5(0x254) + _0x47a1d5(0x4db),
            'ghfto': _0x47a1d5(0x95b),
            'diHna': function (_0x488bee, _0x5745b2) {
                return _0x488bee < _0x5745b2;
            },
            'aEOiy': function (_0x564a56, _0xab846e, _0xcc3c7f) {
                return _0x564a56(_0xab846e, _0xcc3c7f);
            },
            'IXvtA': _0x47a1d5(0x695) + 'o',
            'vOmlZ': _0x47a1d5(0x739) + _0x47a1d5(0xc1d) + _0x47a1d5(0x889) + _0x47a1d5(0x83c) + _0x47a1d5(0xa51),
            'SNLvJ': function (_0x198c89, _0x48fd64) {
                return _0x198c89(_0x48fd64);
            },
            'pkAgo': _0x47a1d5(0xd5a) + _0x47a1d5(0x312) + ':',
            'jUVSm': function (_0x25aa14, _0x3ac31c) {
                return _0x25aa14(_0x3ac31c);
            },
            'GQkDw': _0x47a1d5(0x8f4) + _0x47a1d5(0xb82) + _0x47a1d5(0x83c) + _0x47a1d5(0x60e),
            'sgrdQ': _0x47a1d5(0xc7b),
            'VccLL': function (_0x2d2eff, _0x2727c2) {
                return _0x2d2eff + _0x2727c2;
            },
            'pFVqY': function (_0x31fc3f, _0x141f35) {
                return _0x31fc3f(_0x141f35);
            },
            'MDSAU': _0x47a1d5(0x8f4) + _0x47a1d5(0xb82) + _0x47a1d5(0x83c) + _0x47a1d5(0xa51),
            'Gaxvn': _0x47a1d5(0x62b),
            'osZzU': function (_0x53aaac, _0x1fa706) {
                return _0x53aaac(_0x1fa706);
            },
            'HCyEY': _0x47a1d5(0x739) + _0x47a1d5(0xc1d) + _0x47a1d5(0x889) + _0x47a1d5(0x782) + '*',
            'YsRHN': function (_0x1f5034, _0x5be7f8) {
                return _0x1f5034(_0x5be7f8);
            },
            'tqskf': _0x47a1d5(0x263),
            'kjWdl': _0x47a1d5(0x7d0) + _0x47a1d5(0x94e) + _0x47a1d5(0xa8d),
            'VIOBs': _0x47a1d5(0xa13) + _0x47a1d5(0x5d1) + _0x47a1d5(0x62e) + _0x47a1d5(0x284) + _0x47a1d5(0xa9f),
            'TZziz': function (_0x3327e3, _0x432eff) {
                return _0x3327e3(_0x432eff);
            },
            'mLQKX': function (_0x6d2ca, _0x39a7e1) {
                return _0x6d2ca(_0x39a7e1);
            },
            'ybnVs': _0x47a1d5(0x2e6) + _0x47a1d5(0xad0) + _0x47a1d5(0xcbc),
            'UypFa': _0x47a1d5(0xc85),
            'veemv': function (_0x2fca5d, _0x275897) {
                return _0x2fca5d(_0x275897);
            },
            'YdDxT': function (_0x3558a1, _0x28cdcf) {
                return _0x3558a1(_0x28cdcf);
            },
            'CJumk': function (_0x43a010, _0x5f1ad2) {
                return _0x43a010(_0x5f1ad2);
            },
            'TLizQ': _0x47a1d5(0x2e6) + _0x47a1d5(0x36d) + 'P!',
            'mKZlX': _0x47a1d5(0x2b7),
            'BglsU': _0x47a1d5(0x6cf),
            'jUFlC': _0x47a1d5(0x2b0),
            'RneJO': _0x47a1d5(0x89a) + _0x47a1d5(0x860) + 'o.',
            'WhyAz': _0x47a1d5(0x632),
            'CjcSI': _0x47a1d5(0x8f6) + _0x47a1d5(0x33e) + _0x47a1d5(0x83c) + _0x47a1d5(0x7af) + _0x47a1d5(0x61a) + _0x47a1d5(0x4ca) + _0x47a1d5(0x3e4) + _0x47a1d5(0xaf7),
            'OSIRv': _0x47a1d5(0x492),
            'SvIOG': _0x47a1d5(0xac9) + _0x47a1d5(0xd1b),
            'BlcTz': _0x47a1d5(0xd35),
            'LXwVM': _0x47a1d5(0xd51) + _0x47a1d5(0x9b2),
            'rcJxO': _0x47a1d5(0x64c) + _0x47a1d5(0x7c8) + _0x47a1d5(0x946),
            'XoCGb': _0x47a1d5(0xb68) + _0x47a1d5(0xaaf) + _0x47a1d5(0xd17),
            'nvkws': _0x47a1d5(0x349) + _0x47a1d5(0x40b) + _0x47a1d5(0x677),
            'cwzuc': _0x47a1d5(0x460) + _0x47a1d5(0x71e),
            'wMxOd': _0x47a1d5(0xb43),
            'jRpzn': _0x47a1d5(0xb51),
            'uJpOX': function (_0x3aadc7, _0x1a91a1) {
                return _0x3aadc7(_0x1a91a1);
            },
            'OUVVT': _0x47a1d5(0x669) + _0x47a1d5(0x650) + _0x47a1d5(0x528) + _0x47a1d5(0x913),
            'LGDuu': function (_0x51576f, _0x225c14) {
                return _0x51576f(_0x225c14);
            },
            'NhNvP': function (_0x288d4c, _0x476181) {
                return _0x288d4c + _0x476181;
            },
            'LZLvO': _0x47a1d5(0x842) + _0x47a1d5(0xcbb) + _0x47a1d5(0xb19) + _0x47a1d5(0x517) + _0x47a1d5(0x46b),
            'bneSU': _0x47a1d5(0x9c0) + _0x47a1d5(0xa90) + _0x47a1d5(0x428) + _0x47a1d5(0x988),
            'xFZJB': _0x47a1d5(0x9c0) + _0x47a1d5(0x602) + _0x47a1d5(0x1fe) + _0x47a1d5(0x53c) + _0x47a1d5(0x4c5),
            'ZopoD': _0x47a1d5(0x9c0) + _0x47a1d5(0x38c) + _0x47a1d5(0xa01) + _0x47a1d5(0x2fe),
            'UKIom': function (_0x41a9ec, _0x2e7b3e) {
                return _0x41a9ec(_0x2e7b3e);
            },
            'dcBgY': _0x47a1d5(0xb00),
            'HyKzl': _0x47a1d5(0x87c) + _0x47a1d5(0x56c) + _0x47a1d5(0x6a4) + _0x47a1d5(0x531) + _0x47a1d5(0xb36) + _0x47a1d5(0x6f8) + _0x47a1d5(0x402) + _0x47a1d5(0xc9a) + _0x47a1d5(0x2f1) + _0x47a1d5(0x684) + _0x47a1d5(0x5ec) + _0x47a1d5(0x79b),
            'HEtPx': _0x47a1d5(0xd25) + _0x47a1d5(0xb37),
            'bxXQj': _0x47a1d5(0xc62) + _0x47a1d5(0x215) + _0x47a1d5(0x2d0),
            'zlHgM': function (_0x1cb4c3, _0x1b1c93) {
                return _0x1cb4c3 !== _0x1b1c93;
            },
            'SVpzK': _0x47a1d5(0x1a9),
            'FkCvU': _0x47a1d5(0xc7a) + _0x47a1d5(0xa53) + _0x47a1d5(0x702),
            'iqoLB': function (_0x1fb134, _0x592785) {
                return _0x1fb134 + _0x592785;
            },
            'PnlVC': function (_0x106739, _0x53c55c) {
                return _0x106739 + _0x53c55c;
            },
            'tgODv': _0x47a1d5(0x288) + _0x47a1d5(0xc34),
            'HxkWT': _0x47a1d5(0x5be) + _0x47a1d5(0xa46),
            'UqxdN': _0x47a1d5(0x6d8),
            'LkgdJ': function (_0x3e445c, _0x379406) {
                return _0x3e445c(_0x379406);
            },
            'UzXVI': _0x47a1d5(0xb2d) + _0x47a1d5(0x48a),
            'LwEET': _0x47a1d5(0xd26) + _0x47a1d5(0x6c0) + _0x47a1d5(0x86e) + _0x47a1d5(0x249) + _0x47a1d5(0xa0c) + _0x47a1d5(0x32d) + 'o',
            'IFHuO': _0x47a1d5(0x328) + _0x47a1d5(0xaf1) + _0x47a1d5(0x49c) + _0x47a1d5(0xaec) + _0x47a1d5(0x435),
            'nmXDO': _0x47a1d5(0x42b) + _0x47a1d5(0xc5e) + _0x47a1d5(0x3ac) + _0x47a1d5(0x8e0),
            'DLihD': _0x47a1d5(0xcfa) + _0x47a1d5(0x5e6) + _0x47a1d5(0x54f) + _0x47a1d5(0x2f4),
            'NgDJm': _0x47a1d5(0x59c) + _0x47a1d5(0x6e4) + _0x47a1d5(0x387) + _0x47a1d5(0x309) + _0x47a1d5(0x2cd),
            'mAsKW': _0x47a1d5(0x545) + _0x47a1d5(0xc30),
            'fdLwl': function (_0x5632b0, _0x29d2ff) {
                return _0x5632b0(_0x29d2ff);
            },
            'NQtnc': _0x47a1d5(0x5c0),
            'AluFE': function (_0x3874f9, _0x40b70a) {
                return _0x3874f9(_0x40b70a);
            },
            'cuPwN': _0x47a1d5(0x370),
            'NCXrq': _0x47a1d5(0x8f6) + _0x47a1d5(0x33e) + _0x47a1d5(0xb7f) + _0x47a1d5(0x634) + _0x47a1d5(0x756) + _0x47a1d5(0xbc2) + _0x47a1d5(0x768),
            'rlpdN': function (_0x404410, _0x22fda5) {
                return _0x404410(_0x22fda5);
            },
            'UdurT': _0x47a1d5(0x79a) + _0x47a1d5(0xbca) + _0x47a1d5(0x8af) + _0x47a1d5(0x95f),
            'Mqwpj': function (_0x4411a6, _0x42bb65) {
                return _0x4411a6(_0x42bb65);
            },
            'GviDc': _0x47a1d5(0xa91) + _0x47a1d5(0xbed) + _0x47a1d5(0x702),
            'JNJee': function (_0x57fa1d, _0x1e5c2b) {
                return _0x57fa1d(_0x1e5c2b);
            },
            'OVXfV': _0x47a1d5(0x624) + _0x47a1d5(0x8ba),
            'kULhe': function (_0x1bc149, _0x290065) {
                return _0x1bc149 + _0x290065;
            },
            'Wunxv': function (_0x42357b, _0x282dc8) {
                return _0x42357b(_0x282dc8);
            },
            'vzlUH': function (_0x316f1f, _0x37fece) {
                return _0x316f1f(_0x37fece);
            },
            'vOtDc': _0x47a1d5(0x45a),
            'egCLu': _0x47a1d5(0x93d) + _0x47a1d5(0x90f),
            'nIvQK': _0x47a1d5(0x700) + _0x47a1d5(0x472),
            'vjyxx': _0x47a1d5(0xa29) + _0x47a1d5(0x640) + _0x47a1d5(0x812),
            'ijFNQ': _0x47a1d5(0xd33) + _0x47a1d5(0x373) + _0x47a1d5(0xb73),
            'AFDEw': _0x47a1d5(0x222) + _0x47a1d5(0xb10),
            'wuSsb': _0x47a1d5(0x3ae) + _0x47a1d5(0x401) + _0x47a1d5(0xd7a),
            'KRxTU': _0x47a1d5(0x2e6) + _0x47a1d5(0x6e0) + _0x47a1d5(0xc7c),
            'LWNYc': _0x47a1d5(0x4f5),
            'VUrnT': function (_0xdb7580, _0x5c764e) {
                return _0xdb7580 - _0x5c764e;
            },
            'pcYIL': function (_0x38c91f, _0x3ee58b) {
                return _0x38c91f < _0x3ee58b;
            },
            'RoKos': _0x47a1d5(0x5fa) + 'E',
            'JElca': _0x47a1d5(0xc5b),
            'CXyNF': _0x47a1d5(0x22a),
            'bmSfG': _0x47a1d5(0x9f8),
            'WeKsA': function (_0x8dd9b2, _0x4f7ed5) {
                return _0x8dd9b2(_0x4f7ed5);
            },
            'LUFWN': _0x47a1d5(0x565) + _0x47a1d5(0x59e) + 'js',
            'jdMUB': _0x47a1d5(0x1a5),
            'RDelW': _0x47a1d5(0x565) + _0x47a1d5(0x458) + _0x47a1d5(0x7fd),
            'xInil': _0x47a1d5(0xacb),
            'gJmlO': function (_0x4f8463, _0x19f1e7) {
                return _0x4f8463(_0x19f1e7);
            },
            'ClKwp': _0x47a1d5(0x749),
            'bRsSa': _0x47a1d5(0xaf5) + 'r',
            'JRToM': _0x47a1d5(0x565) + _0x47a1d5(0xba6) + _0x47a1d5(0x341),
            'psHBJ': _0x47a1d5(0x908),
            'GQaJc': function (_0x3d4239, _0x45e8f0) {
                return _0x3d4239(_0x45e8f0);
            },
            'CEKuq': _0x47a1d5(0x7e8) + _0x47a1d5(0x689) + _0x47a1d5(0x973),
            'boIBc': _0x47a1d5(0x324) + _0x47a1d5(0xad1) + 'ck',
            'SQgjt': function (_0x29b6a1, _0x4a13cd) {
                return _0x29b6a1(_0x4a13cd);
            },
            'inSlp': function (_0x2d8e9a, _0x2464b7) {
                return _0x2d8e9a + _0x2464b7;
            },
            'ShuXx': _0x47a1d5(0x8f1) + _0x47a1d5(0x661),
            'KtkBe': function (_0x5c86bc, _0x367a13) {
                return _0x5c86bc(_0x367a13);
            },
            'sFFhm': _0x47a1d5(0x2c0) + _0x47a1d5(0x37a),
            'DDWBQ': _0x47a1d5(0xa6c),
            'JdeWX': function (_0x1a6f63, _0x4a3165) {
                return _0x1a6f63(_0x4a3165);
            },
            'vNlXK': _0x47a1d5(0x7d0) + _0x47a1d5(0x31e) + _0x47a1d5(0xaba) + _0x47a1d5(0x675) + _0x47a1d5(0x8e6) + _0x47a1d5(0x4e1) + _0x47a1d5(0x205) + _0x47a1d5(0xd15) + _0x47a1d5(0x270),
            'WuwAp': function (_0x4c792b, _0x5b16b1) {
                return _0x4c792b(_0x5b16b1);
            },
            'iYNwZ': function (_0x291fbf, _0x5981b1) {
                return _0x291fbf + _0x5981b1;
            },
            'pvJUx': function (_0x1c2bcf, _0x56ca52) {
                return _0x1c2bcf + _0x56ca52;
            },
            'SjNIj': _0x47a1d5(0x97c) + _0x47a1d5(0xbae) + _0x47a1d5(0x5a5),
            'lffuT': _0x47a1d5(0x391) + _0x47a1d5(0xc6f),
            'hePVG': function (_0x14e4ea, _0xd6f84c) {
                return _0x14e4ea(_0xd6f84c);
            },
            'IbRJL': function (_0x591347, _0x1eedcf) {
                return _0x591347(_0x1eedcf);
            },
            'enRBf': function (_0x1db042, _0x5c8aa9) {
                return _0x1db042 > _0x5c8aa9;
            },
            'OSIPa': function (_0x2db12d, _0x1db443) {
                return _0x2db12d - _0x1db443;
            },
            'oSDNF': _0x47a1d5(0x4df) + _0x47a1d5(0x344) + _0x47a1d5(0xc13) + _0x47a1d5(0x6d7) + _0x47a1d5(0x8bd),
            'TqxwA': _0x47a1d5(0x87c) + '0',
            'ZONpc': _0x47a1d5(0x5bd) + _0x47a1d5(0x41b) + _0x47a1d5(0xb38) + _0x47a1d5(0x762),
            'kKmLQ': function (_0x21565f, _0x5122e9) {
                return _0x21565f(_0x5122e9);
            },
            'afYFL': _0x47a1d5(0xceb) + _0x47a1d5(0xd21) + 'el',
            'cLAXX': function (_0x32d2ec, _0x515880) {
                return _0x32d2ec(_0x515880);
            },
            'tWziW': _0x47a1d5(0x592) + _0x47a1d5(0x856),
            'CKwKy': _0x47a1d5(0x5dd) + _0x47a1d5(0x58d),
            'vcEzV': _0x47a1d5(0xc03),
            'SblJm': function (_0x19c92f, _0x200e11) {
                return _0x19c92f + _0x200e11;
            },
            'WwPzP': _0x47a1d5(0x3e5) + _0x47a1d5(0xcf0) + _0x47a1d5(0x214) + _0x47a1d5(0x313) + _0x47a1d5(0x1e1) + _0x47a1d5(0x8e5) + _0x47a1d5(0x4b3),
            'FZGgr': _0x47a1d5(0x882),
            'BkEfu': _0x47a1d5(0x87c) + _0x47a1d5(0x56c) + _0x47a1d5(0x6a4) + _0x47a1d5(0x531) + _0x47a1d5(0xb36) + _0x47a1d5(0x6f8) + _0x47a1d5(0x402) + _0x47a1d5(0xc9a) + _0x47a1d5(0x223) + _0x47a1d5(0x273) + _0x47a1d5(0x98c) + '6',
            'Ajkpa': _0x47a1d5(0x984) + _0x47a1d5(0x551) + _0x47a1d5(0x75d),
            'iwqoH': _0x47a1d5(0x8ee) + _0x47a1d5(0x25a),
            'AxWXI': _0x47a1d5(0x663) + _0x47a1d5(0x5c6) + _0x47a1d5(0x8e2),
            'lDVip': _0x47a1d5(0x27b),
            'cBSWP': _0x47a1d5(0xaf7),
            'gJudn': _0x47a1d5(0x78b) + _0x47a1d5(0xa83) + _0x47a1d5(0x8cb) + 'do',
            'sNycL': _0x47a1d5(0x729),
            'MXQCw': _0x47a1d5(0x9b4) + _0x47a1d5(0x1be),
            'yebaS': _0x47a1d5(0x511) + _0x47a1d5(0xaf6),
            'pFBxC': function (_0x4310f9, _0x42916e) {
                return _0x4310f9 === _0x42916e;
            },
            'ITwoZ': _0x47a1d5(0x6ea),
            'bpNRh': _0x47a1d5(0xd19) + _0x47a1d5(0x529),
            'JMxkF': _0x47a1d5(0x938),
            'hHdkJ': function (_0x4364e9, _0x4a3364) {
                return _0x4364e9(_0x4a3364);
            },
            'fhrSz': function (_0x487f8a, _0x423d5f) {
                return _0x487f8a(_0x423d5f);
            },
            'QDBNm': function (_0x4387f2, _0x20c64c) {
                return _0x4387f2 + _0x20c64c;
            },
            'jkKsS': function (_0x5d056d, _0x35612f) {
                return _0x5d056d(_0x35612f);
            },
            'utvyi': _0x47a1d5(0x968) + _0x47a1d5(0x72f),
            'RXxRw': _0x47a1d5(0x838),
            'cdTGj': function (_0x3c4ca3, _0x12f467, _0x35c5c5) {
                return _0x3c4ca3(_0x12f467, _0x35c5c5);
            },
            'UcnMP': _0x47a1d5(0x7c0),
            'IOzQp': _0x47a1d5(0x5a6),
            'Pcygx': function (_0x33fbcf, _0x1cca84, _0x28b33e) {
                return _0x33fbcf(_0x1cca84, _0x28b33e);
            },
            'Vpcby': function (_0x2ee63f, _0x3b064f) {
                return _0x2ee63f * _0x3b064f;
            },
            'MSUeo': _0x47a1d5(0x495) + _0x47a1d5(0x4e5),
            'SihCg': _0x47a1d5(0xc15),
            'xtFuu': function (_0x17dfc0, _0x5ab3e1) {
                return _0x17dfc0(_0x5ab3e1);
            },
            'MWhbL': function (_0x13ecd3, _0x2fafaf) {
                return _0x13ecd3 + _0x2fafaf;
            },
            'YYqHw': function (_0x321ce1, _0x521c15) {
                return _0x321ce1(_0x521c15);
            },
            'fxeod': function (_0x162c13, _0x6ff600) {
                return _0x162c13 + _0x6ff600;
            },
            'rAUCQ': function (_0x5b7f79, _0x136a61) {
                return _0x5b7f79 * _0x136a61;
            },
            'ynRPW': _0x47a1d5(0xc6a) + _0x47a1d5(0xd5f),
            'TvRbD': _0x47a1d5(0x2eb),
            'glvAt': function (_0x27e8d9, _0x3940e5) {
                return _0x27e8d9(_0x3940e5);
            },
            'IqziI': function (_0x10715a, _0x52ef18) {
                return _0x10715a(_0x52ef18);
            },
            'DsyVh': function (_0x3182d8, _0x3be797, _0x70b08a) {
                return _0x3182d8(_0x3be797, _0x70b08a);
            },
            'zNPvW': _0x47a1d5(0x7d3) + '',
            'FZqBV': _0x47a1d5(0x8db),
            'nWvMz': function (_0x48a75c, _0x22a7b9, _0x234426) {
                return _0x48a75c(_0x22a7b9, _0x234426);
            },
            'utxwe': _0x47a1d5(0x8b0),
            'welsE': _0x47a1d5(0x629),
            'VEdDj': function (_0x227246, _0x196bdc) {
                return _0x227246(_0x196bdc);
            },
            'ECNhz': _0x47a1d5(0x639) + _0x47a1d5(0x62a) + _0x47a1d5(0xc81) + _0x47a1d5(0x48c) + _0x47a1d5(0x9d1),
            'LnRwG': function (_0x59bb3e, _0x135100, _0x1c1e9a) {
                return _0x59bb3e(_0x135100, _0x1c1e9a);
            },
            'CekGz': _0x47a1d5(0x282) + _0x47a1d5(0xafd) + _0x47a1d5(0xcc3) + _0x47a1d5(0x189) + _0x47a1d5(0x4ab) + _0x47a1d5(0x2fd) + _0x47a1d5(0x66c),
            'YTfmG': _0x47a1d5(0x7a4) + _0x47a1d5(0xc6b) + _0x47a1d5(0x67d),
            'cVpzi': _0x47a1d5(0x2f9),
            'QzjeH': _0x47a1d5(0x403) + _0x47a1d5(0x543) + _0x47a1d5(0xb12) + _0x47a1d5(0x876),
            'gtGoM': function (_0x47c6a3, _0x3bf613) {
                return _0x47c6a3(_0x3bf613);
            },
            'TnWqP': _0x47a1d5(0x7a4) + _0x47a1d5(0x6fa) + _0x47a1d5(0x581),
            'NfDeU': _0x47a1d5(0xd60) + _0x47a1d5(0x662) + ':',
            'eWGfR': function (_0x479501, _0x585982, _0x16222d) {
                return _0x479501(_0x585982, _0x16222d);
            },
            'qSrFV': _0x47a1d5(0xa27),
            'bvGDN': _0x47a1d5(0x639) + _0x47a1d5(0xa28) + _0x47a1d5(0xb29) + _0x47a1d5(0x735) + _0x47a1d5(0x5a3) + _0x47a1d5(0x880),
            'ogQSS': function (_0x109285, _0x1fc90c, _0x4d45e6) {
                return _0x109285(_0x1fc90c, _0x4d45e6);
            },
            'EcZSm': _0x47a1d5(0x322) + _0x47a1d5(0xc5c) + _0x47a1d5(0x9f0) + _0x47a1d5(0x5cb) + _0x47a1d5(0xbe3),
            'PPxEp': _0x47a1d5(0xb0a) + _0x47a1d5(0xbb2) + _0x47a1d5(0xd63),
            'Aqdny': function (_0x55e9be, _0x3b2c79) {
                return _0x55e9be * _0x3b2c79;
            },
            'RdfEp': _0x47a1d5(0xd60) + _0x47a1d5(0x74e) + ':',
            'BrkVu': _0x47a1d5(0xbec),
            'hkjgC': function (_0x3cacca, _0x15051e) {
                return _0x3cacca(_0x15051e);
            },
            'BWpkS': function (_0xf63cc7, _0x446595) {
                return _0xf63cc7(_0x446595);
            },
            'lLUnk': _0x47a1d5(0x639) + _0x47a1d5(0xc94) + _0x47a1d5(0x304) + _0x47a1d5(0x4ac) + 'W',
            'gQjRB': function (_0x343b17, _0x4faaed) {
                return _0x343b17(_0x4faaed);
            },
            'RSJfN': function (_0x25dfd0, _0x11c6d7, _0x593200) {
                return _0x25dfd0(_0x11c6d7, _0x593200);
            },
            'NXtph': _0x47a1d5(0x744) + _0x47a1d5(0xa3c) + _0x47a1d5(0xd77) + _0x47a1d5(0x1f1),
            'hSYPe': function (_0x4c9554, _0x355893, _0x5df4db) {
                return _0x4c9554(_0x355893, _0x5df4db);
            },
            'NyRNs': _0x47a1d5(0x201) + _0x47a1d5(0x934) + _0x47a1d5(0xa17) + _0x47a1d5(0x52c),
            'ZdcRl': function (_0x9c3bd, _0xffe927) {
                return _0x9c3bd * _0xffe927;
            },
            'RouFV': _0x47a1d5(0xd60) + _0x47a1d5(0x606) + _0x47a1d5(0xb42),
            'EJuFk': _0x47a1d5(0xc25),
            'xBehC': function (_0x5073a4, _0x5119b8) {
                return _0x5073a4(_0x5119b8);
            },
            'yWsiq': function (_0x15fb4c, _0x224d0b) {
                return _0x15fb4c(_0x224d0b);
            },
            'Gxswd': _0x47a1d5(0x639) + _0x47a1d5(0xbd4) + _0x47a1d5(0x2ae) + _0x47a1d5(0x6f1) + 'ro',
            'NoWbg': function (_0x26231c, _0x29f33c) {
                return _0x26231c(_0x29f33c);
            },
            'Iqcjf': function (_0xa04a4e, _0x5b6596, _0x1a1190) {
                return _0xa04a4e(_0x5b6596, _0x1a1190);
            },
            'UUoJi': _0x47a1d5(0x1b2) + _0x47a1d5(0x4d2) + _0x47a1d5(0xc21) + _0x47a1d5(0xb58),
            'iAyOj': _0x47a1d5(0x542) + _0x47a1d5(0x6fc) + _0x47a1d5(0x939) + _0x47a1d5(0x9d2),
            'CEyzD': function (_0x51e528, _0x4f9a0d) {
                return _0x51e528 * _0x4f9a0d;
            },
            'IZGjd': function (_0x3126db, _0xbe9bd1) {
                return _0x3126db + _0xbe9bd1;
            },
            'xHplj': _0x47a1d5(0xd60) + _0x47a1d5(0x5c5),
            'VlxWj': _0x47a1d5(0xa2f),
            'gBkfa': function (_0x2d7733, _0x82953) {
                return _0x2d7733(_0x82953);
            },
            'brmis': _0x47a1d5(0x2ef) + _0x47a1d5(0x2ab) + _0x47a1d5(0xa28) + _0x47a1d5(0x49d) + _0x47a1d5(0x85c) + 'o',
            'kPflU': _0x47a1d5(0x70d) + _0x47a1d5(0xbaa) + _0x47a1d5(0x408) + _0x47a1d5(0xaa8),
            'mzFUm': function (_0x30178d, _0x4b50db, _0x2113a3) {
                return _0x30178d(_0x4b50db, _0x2113a3);
            },
            'YhoCp': _0x47a1d5(0x886) + _0x47a1d5(0x241) + _0x47a1d5(0x96b),
            'DEAmU': function (_0x10756c, _0x17b28b) {
                return _0x10756c + _0x17b28b;
            },
            'xHTRZ': _0x47a1d5(0xd60) + _0x47a1d5(0xd43) + _0x47a1d5(0x20c),
            'wSvoK': _0x47a1d5(0x1b5),
            'nhbei': function (_0x952888, _0x3ee4ea) {
                return _0x952888(_0x3ee4ea);
            },
            'gNmgg': function (_0x486f56, _0x1f4360) {
                return _0x486f56(_0x1f4360);
            },
            'qbchD': _0x47a1d5(0x980) + _0x47a1d5(0x48d) + _0x47a1d5(0x506) + _0x47a1d5(0x2ae) + _0x47a1d5(0xb26),
            'Lrtif': function (_0x2282ec, _0x5bd7b9) {
                return _0x2282ec(_0x5bd7b9);
            },
            'fIqMx': _0x47a1d5(0xabe) + _0x47a1d5(0x778) + _0x47a1d5(0x5b1) + _0x47a1d5(0x74c) + _0x47a1d5(0x9d9),
            'ZHvzf': function (_0x331df3, _0x257156, _0x2c46ba) {
                return _0x331df3(_0x257156, _0x2c46ba);
            },
            'LTuJX': _0x47a1d5(0xb0a) + _0x47a1d5(0x6c5) + _0x47a1d5(0x243),
            'mGJdK': function (_0x771414, _0x108567) {
                return _0x771414(_0x108567);
            },
            'WSSog': _0x47a1d5(0xd60) + _0x47a1d5(0x970) + _0x47a1d5(0xa56),
            'ObrUi': _0x47a1d5(0x474),
            'shErU': function (_0x14ec03, _0x2b01cd) {
                return _0x14ec03(_0x2b01cd);
            },
            'PDXIV': function (_0x3a1c66, _0xbc7dcf) {
                return _0x3a1c66(_0xbc7dcf);
            },
            'jmYMf': _0x47a1d5(0x639) + _0x47a1d5(0xa28) + _0x47a1d5(0x49d) + _0x47a1d5(0x85c) + 'o',
            'wgsAv': function (_0xa8ff94, _0x208d3a) {
                return _0xa8ff94(_0x208d3a);
            },
            'eQEyZ': function (_0x390b8f, _0x56dc82, _0xaa0561) {
                return _0x390b8f(_0x56dc82, _0xaa0561);
            },
            'ziphw': _0x47a1d5(0x3a8) + _0x47a1d5(0x269) + _0x47a1d5(0x2bb) + _0x47a1d5(0x437),
            'zvRZp': function (_0x4f21fc, _0xca968d, _0x36ef98) {
                return _0x4f21fc(_0xca968d, _0x36ef98);
            },
            'vsCox': _0x47a1d5(0x6b5) + _0x47a1d5(0x928) + '',
            'UxyVJ': function (_0x21796b, _0x6bbc2e) {
                return _0x21796b + _0x6bbc2e;
            },
            'YOnZk': _0x47a1d5(0xd60) + _0x47a1d5(0x71f) + '2:',
            'hScCc': function (_0xc7e43d, _0x2e4eb, _0x16cfd7) {
                return _0xc7e43d(_0x2e4eb, _0x16cfd7);
            },
            'niZZl': _0x47a1d5(0x875),
            'LFaFK': _0x47a1d5(0x424),
            'rkkNY': _0x47a1d5(0xa0e),
            'rnNlj': _0x47a1d5(0xd60) + _0x47a1d5(0x463) + ':',
            'rOLmV': function (_0x35478e, _0x361e8d) {
                return _0x35478e(_0x361e8d);
            },
            'yqdai': _0x47a1d5(0x907) + _0x47a1d5(0xc92) + _0x47a1d5(0xa93) + _0x47a1d5(0x5e8) + _0x47a1d5(0x890) + _0x47a1d5(0x9d0),
            'JTAkZ': _0x47a1d5(0x39d),
            'OBomU': _0x47a1d5(0x9e6) + _0x47a1d5(0x26a),
            'xXQtj': function (_0x242411, _0x2ebfe0) {
                return _0x242411(_0x2ebfe0);
            },
            'xMoxP': _0x47a1d5(0xc1b) + _0x47a1d5(0xac1) + _0x47a1d5(0x99e) + _0x47a1d5(0x4d4),
            'VMkDI': _0x47a1d5(0xd2f) + _0x47a1d5(0xb06) + _0x47a1d5(0xd00),
            'HtyNq': _0x47a1d5(0xae9) + _0x47a1d5(0x392) + _0x47a1d5(0x610) + _0x47a1d5(0x991),
            'ocTlB': _0x47a1d5(0x784),
            'psqRQ': function (_0x228a06, _0x57270c, _0x1e28ed) {
                return _0x228a06(_0x57270c, _0x1e28ed);
            },
            'wywRo': function (_0x598314, _0x5af669) {
                return _0x598314(_0x5af669);
            },
            'dgDNP': _0x47a1d5(0x53b),
            'hUiiB': _0x47a1d5(0x9ea),
            'mZtre': _0x47a1d5(0x34b),
            'zsmOm': _0x47a1d5(0x8a3),
            'TsgQd': function (_0x10807a, _0x15252e, _0x66dc35) {
                return _0x10807a(_0x15252e, _0x66dc35);
            },
            'yDcYN': _0x47a1d5(0x585) + _0x47a1d5(0x3d0) + _0x47a1d5(0x5e8) + _0x47a1d5(0x188),
            'gozov': _0x47a1d5(0xd57),
            'XiXrB': function (_0xb190ec, _0x3f6684) {
                return _0xb190ec(_0x3f6684);
            },
            'gIPyt': function (_0x379eef, _0x42cf3f) {
                return _0x379eef(_0x42cf3f);
            },
            'XHglW': _0x47a1d5(0x3e7) + _0x47a1d5(0x7aa) + _0x47a1d5(0x8b6) + _0x47a1d5(0x667) + _0x47a1d5(0x9c5) + _0x47a1d5(0xd41) + _0x47a1d5(0x3ec) + _0x47a1d5(0x4fa) + _0x47a1d5(0x508) + _0x47a1d5(0xb94) + _0x47a1d5(0x7a6) + _0x47a1d5(0x63e),
            'ZgnbS': _0x47a1d5(0x2be) + _0x47a1d5(0x8ae),
            'NMDyJ': _0x47a1d5(0x4ee),
            'mahYY': _0x47a1d5(0x360) + _0x47a1d5(0x97b),
            'KqALy': function (_0x40742b, _0x591f82) {
                return _0x40742b(_0x591f82);
            },
            'ibeTO': function (_0x124279, _0x506f35) {
                return _0x124279 + _0x506f35;
            },
            'jIRol': function (_0x57c76d, _0xd40bc0) {
                return _0x57c76d + _0xd40bc0;
            },
            'zzshg': _0x47a1d5(0x3e5) + _0x47a1d5(0xcf0) + _0x47a1d5(0x214) + _0x47a1d5(0x5ca) + _0x47a1d5(0x1e1) + _0x47a1d5(0x8e5) + _0x47a1d5(0x4b3),
            'jFPfE': _0x47a1d5(0x5ea),
            'VbHNL': function (_0x1fcba8, _0x41a9e5) {
                return _0x1fcba8(_0x41a9e5);
            },
            'TqDnm': _0x47a1d5(0x8cf) + _0x47a1d5(0xd78) + _0x47a1d5(0x461) + _0x47a1d5(0x563),
            'hPPKc': function (_0x3f57bd) {
                return _0x3f57bd();
            },
            'DQntM': _0x47a1d5(0xa1b) + _0x47a1d5(0xa46),
            'txPPa': function (_0x55c81d, _0x352a4e) {
                return _0x55c81d === _0x352a4e;
            },
            'ZqeQt': _0x47a1d5(0x31b) + _0x47a1d5(0x3e9) + ':',
            'sHLex': function (_0x57216d, _0x43419b) {
                return _0x57216d(_0x43419b);
            },
            'VeIdR': _0x47a1d5(0x986) + _0x47a1d5(0x292) + _0x47a1d5(0xcd3) + _0x47a1d5(0xc46) + _0x47a1d5(0xb33) + 's',
            'glsTr': _0x47a1d5(0x35d),
            'LsMtz': _0x47a1d5(0xb0e),
            'AhHPL': function (_0x5dcd73, _0x1bc48f) {
                return _0x5dcd73(_0x1bc48f);
            },
            'kyWhS': _0x47a1d5(0xab1) + _0x47a1d5(0xba1) + _0x47a1d5(0x291) + _0x47a1d5(0x4f1) + _0x47a1d5(0xbde) + '*',
            'DFRJn': function (_0x43d5b6, _0x30be76) {
                return _0x43d5b6(_0x30be76);
            },
            'bqNST': function (_0xbcfbee, _0x472bfd) {
                return _0xbcfbee === _0x472bfd;
            },
            'UXvLb': _0x47a1d5(0x86a) + _0x47a1d5(0xbe5) + _0x47a1d5(0xb3c) + _0x47a1d5(0x803) + _0x47a1d5(0x66e) + _0x47a1d5(0x1e0),
            'HHsyl': _0x47a1d5(0x999) + _0x47a1d5(0x475) + _0x47a1d5(0x720) + _0x47a1d5(0xbd6) + _0x47a1d5(0x73b) + 'os',
            'XIsvL': function (_0x3ed446, _0x525a12) {
                return _0x3ed446(_0x525a12);
            },
            'szBBG': function (_0x489d2d, _0x597d96) {
                return _0x489d2d === _0x597d96;
            },
            'ErdgD': _0x47a1d5(0x942),
            'aVyWw': _0x47a1d5(0x741),
            'YWWLh': _0x47a1d5(0xa24),
            'aJtNW': _0x47a1d5(0x6be) + _0x47a1d5(0xd37),
            'ywsdy': function (_0x9188e9, _0x1aa6c3) {
                return _0x9188e9(_0x1aa6c3);
            },
            'fGafq': _0x47a1d5(0x1a2) + _0x47a1d5(0x55f) + _0x47a1d5(0x2ff) + _0x47a1d5(0x211) + _0x47a1d5(0x672) + _0x47a1d5(0xaa6) + _0x47a1d5(0xd2c) + '!',
            'qLHrz': function (_0x43e4c5, _0x242ff4) {
                return _0x43e4c5 || _0x242ff4;
            },
            'TMTzP': function (_0x12fce3, _0x2079c9) {
                return _0x12fce3(_0x2079c9);
            },
            'pIEPq': _0x47a1d5(0x6c2) + _0x47a1d5(0xd66) + _0x47a1d5(0x8a8) + _0x47a1d5(0x2fa) + _0x47a1d5(0x7ed) + _0x47a1d5(0x841),
            'ZLZTt': _0x47a1d5(0x3fe) + _0x47a1d5(0x377),
            'WUnbv': _0x47a1d5(0x9e7),
            'TwGYO': function (_0x61a5a8, _0x3dc449) {
                return _0x61a5a8 === _0x3dc449;
            },
            'IqgNY': _0x47a1d5(0x64d) + _0x47a1d5(0x4e7),
            'axrPT': _0x47a1d5(0x2df) + _0x47a1d5(0x6ec),
            'GobeB': _0x47a1d5(0x895) + _0x47a1d5(0x33f) + _0x47a1d5(0xb8d),
            'mFJnY': _0x47a1d5(0x3f2) + _0x47a1d5(0x1a8) + _0x47a1d5(0x5d2) + _0x47a1d5(0xa2b) + 'o!',
            'NvCpF': _0x47a1d5(0xbbf),
            'vlHDe': _0x47a1d5(0x404) + 'ot',
            'dTnMr': function (_0x243bb5) {
                return _0x243bb5();
            },
            'gpXoM': _0x47a1d5(0x560) + _0x47a1d5(0x5cd) + _0x47a1d5(0x200) + _0x47a1d5(0xa4f) + _0x47a1d5(0xc3b) + _0x47a1d5(0x9a6) + _0x47a1d5(0x3ef) + _0x47a1d5(0x6db) + _0x47a1d5(0xa03) + _0x47a1d5(0x4aa) + _0x47a1d5(0x29f),
            'QKdFj': _0x47a1d5(0x827) + _0x47a1d5(0x8a2),
            'abHFd': _0x47a1d5(0xc54) + _0x47a1d5(0xa36),
            'LdJjp': _0x47a1d5(0xc8f) + _0x47a1d5(0xb27),
            'ncayH': _0x47a1d5(0x96f) + _0x47a1d5(0x57a),
            'JTwvQ': _0x47a1d5(0x792) + _0x47a1d5(0x995),
            'hyYjv': _0x47a1d5(0x9a9) + _0x47a1d5(0x7c6),
            'mfYpq': _0x47a1d5(0xa38),
            'aCosR': _0x47a1d5(0x509) + _0x47a1d5(0x2f8),
            'dURNH': function (_0x50624c, _0x187d48) {
                return _0x50624c(_0x187d48);
            },
            'xXIVm': function (_0x5e2597, _0x22a79b) {
                return _0x5e2597(_0x22a79b);
            },
            'TdNaY': function (_0x5b260d, _0x4c4862) {
                return _0x5b260d + _0x4c4862;
            },
            'foipi': _0x47a1d5(0x6f0) + _0x47a1d5(0x6f6) + _0x47a1d5(0x83d) + _0x47a1d5(0xd45),
            'Iudhk': _0x47a1d5(0x820) + _0x47a1d5(0x1ef) + _0x47a1d5(0xb77),
            'MSINv': _0x47a1d5(0xb9d),
            'ilerc': _0x47a1d5(0xba2),
            'IRDJp': function (_0x2185bf, _0x99e4d1) {
                return _0x2185bf(_0x99e4d1);
            },
            'jOqDi': function (_0x4c5090, _0xac1a27) {
                return _0x4c5090(_0xac1a27);
            },
            'WhwJg': function (_0x33c6bd, _0x12ca86) {
                return _0x33c6bd + _0x12ca86;
            },
            'oTaZH': _0x47a1d5(0x3e5) + _0x47a1d5(0xcf0) + _0x47a1d5(0x214) + _0x47a1d5(0xaf3) + _0x47a1d5(0x1e1) + _0x47a1d5(0x8e5) + _0x47a1d5(0x4b3),
            'uCjHJ': _0x47a1d5(0x210) + _0x47a1d5(0x692) + _0x47a1d5(0x92c) + _0x47a1d5(0x405) + _0x47a1d5(0x43b),
            'OSlbg': _0x47a1d5(0xbb4) + _0x47a1d5(0xb60) + _0x47a1d5(0x8b1) + _0x47a1d5(0x65e),
            'FDjwN': function (_0x12ec3e, _0x3238a7) {
                return _0x12ec3e(_0x3238a7);
            },
            'aadXi': _0x47a1d5(0x3cc) + _0x47a1d5(0xa6a) + _0x47a1d5(0x872),
            'gIpUH': _0x47a1d5(0x1ec) + _0x47a1d5(0x536) + _0x47a1d5(0x332) + _0x47a1d5(0x4bb) + 's!',
            'bWmUq': function (_0x3257a1, _0x395e55) {
                return _0x3257a1(_0x395e55);
            },
            'QUjMf': _0x47a1d5(0x1b7) + _0x47a1d5(0x385) + _0x47a1d5(0xd07) + _0x47a1d5(0xd47),
            'GkAdl': function (_0x51090c, _0xfb99ca) {
                return _0x51090c(_0xfb99ca);
            },
            'vrzJw': function (_0x41da5e, _0x4b5ae9) {
                return _0x41da5e < _0x4b5ae9;
            },
            'NHFOd': function (_0xf576f6, _0x116886) {
                return _0xf576f6 - _0x116886;
            },
            'BShst': function (_0x3e7026, _0x5488b5) {
                return _0x3e7026(_0x5488b5);
            },
            'ZBebg': function (_0x4749fc, _0x88fc9d) {
                return _0x4749fc * _0x88fc9d;
            },
            'yjhHh': function (_0x335c6a, _0x2b54b7) {
                return _0x335c6a * _0x2b54b7;
            },
            'auJlY': function (_0x2b558c, _0x3a0c82) {
                return _0x2b558c * _0x3a0c82;
            },
            'avRSG': function (_0x3bd37f, _0x710820) {
                return _0x3bd37f < _0x710820;
            },
            'srllw': _0x47a1d5(0x1d1),
            'JzftU': _0x47a1d5(0x366) + _0x47a1d5(0x21b) + _0x47a1d5(0x2a4),
            'LVxId': function (_0x3aa84a, _0x87dff9) {
                return _0x3aa84a < _0x87dff9;
            },
            'rHPQP': function (_0x30bbd0, _0x3a8cbd) {
                return _0x30bbd0(_0x3a8cbd);
            },
            'ouoVz': function (_0x3382dd, _0x40d5c2) {
                return _0x3382dd * _0x40d5c2;
            },
            'HuFkF': function (_0x498942, _0x35916d) {
                return _0x498942 + _0x35916d;
            },
            'ZwTzz': function (_0x2195ed, _0xecf3c4) {
                return _0x2195ed > _0xecf3c4;
            },
            'ObcyS': function (_0x47b00e, _0x1ec9e3) {
                return _0x47b00e(_0x1ec9e3);
            },
            'tQBcY': _0x47a1d5(0xd0f),
            'tPRnz': function (_0x29ea17, _0x1e140f) {
                return _0x29ea17(_0x1e140f);
            },
            'GjFKj': _0x47a1d5(0x448),
            'LCSAv': _0x47a1d5(0x81b),
            'CYGKo': function (_0x39fd1c, _0x4ce493) {
                return _0x39fd1c + _0x4ce493;
            },
            'SOKEB': function (_0x4f699c, _0x3da655) {
                return _0x4f699c + _0x3da655;
            },
            'DZrGn': _0x47a1d5(0xbb4) + _0x47a1d5(0x2a6) + _0x47a1d5(0x7ec) + '!',
            'zAxiu': _0x47a1d5(0x438),
            'WePxC': _0x47a1d5(0xa50),
            'HhOWA': function (_0x3269bd, _0x2ca626) {
                return _0x3269bd + _0x2ca626;
            },
            'JVuDy': function (_0x3e9d18, _0x5cf45b) {
                return _0x3e9d18 + _0x5cf45b;
            },
            'sqJCb': function (_0x47bb2e) {
                return _0x47bb2e();
            },
            'jQPUz': _0x47a1d5(0x5f6) + 'mo',
            'jBQxP': _0x47a1d5(0x2b4),
            'YCBaU': _0x47a1d5(0x4c6) + _0x47a1d5(0x2fc),
            'zSYxc': _0x47a1d5(0x59d) + _0x47a1d5(0xc84),
            'FBirK': _0x47a1d5(0x28d) + 'EF',
            'ruPWk': _0x47a1d5(0x67b) + _0x47a1d5(0x1b3),
            'GXqSZ': _0x47a1d5(0xc01),
            'aFsNU': _0x47a1d5(0x4b4) + 'GI',
            'AsOfH': _0x47a1d5(0x52b) + _0x47a1d5(0x8b2),
            'vKlyg': _0x47a1d5(0x274) + _0x47a1d5(0x24a),
            'pEkzV': _0x47a1d5(0x74b) + _0x47a1d5(0x4a7),
            'yWiiD': _0x47a1d5(0x345) + _0x47a1d5(0x44b),
            'CcryC': _0x47a1d5(0x393) + _0x47a1d5(0xa7f),
            'lKUar': _0x47a1d5(0x47f) + _0x47a1d5(0x977) + 's',
            'BFpke': _0x47a1d5(0x690) + _0x47a1d5(0x5e1),
            'ZaBnC': _0x47a1d5(0x7f8) + _0x47a1d5(0x7c7) + _0x47a1d5(0x4d1) + _0x47a1d5(0xcc5),
            'ATFxd': function (_0x44eba8, _0x5496c9) {
                return _0x44eba8(_0x5496c9);
            },
            'KyabC': _0x47a1d5(0xc24),
            'pzcJC': _0x47a1d5(0x5ff),
            'RljfC': function (_0x534ef5, _0x459668) {
                return _0x534ef5(_0x459668);
            },
            'DcCBz': function (_0x5af0eb) {
                return _0x5af0eb();
            },
            'omhmT': _0x47a1d5(0xbb4) + _0x47a1d5(0xb60) + '!',
            'Otbcs': _0x47a1d5(0x85b) + _0x47a1d5(0x385) + 'o!',
            'ZGwad': function (_0x1a11cd, _0x1db8cc) {
                return _0x1a11cd < _0x1db8cc;
            },
            'lkanM': function (_0x196705, _0x1d04d0) {
                return _0x196705(_0x1d04d0);
            },
            'PwBdT': _0x47a1d5(0x43a) + _0x47a1d5(0x957) + _0x47a1d5(0xb4b),
            'tBMlc': function (_0x189d55, _0x21f3af) {
                return _0x189d55(_0x21f3af);
            },
            'tnRaz': _0x47a1d5(0x8ea) + _0x47a1d5(0x8c1),
            'KWadR': _0x47a1d5(0x4a5) + _0x47a1d5(0x7dd),
            'gDHye': _0x47a1d5(0x8a9) + _0x47a1d5(0x73d) + _0x47a1d5(0x674) + _0x47a1d5(0x9be),
            'eZLGR': _0x47a1d5(0xb88) + _0x47a1d5(0xd1d) + 'm!',
            'Yzwyd': function (_0x28076c, _0x31258c) {
                return _0x28076c(_0x31258c);
            },
            'TqCMq': _0x47a1d5(0x471) + _0x47a1d5(0x567) + _0x47a1d5(0x3fc),
            'Qxmes': function (_0x467fc7, _0x43485b) {
                return _0x467fc7(_0x43485b);
            },
            'aZXsC': function (_0x14c85c, _0x52e6e2) {
                return _0x14c85c(_0x52e6e2);
            },
            'vmEjp': _0x47a1d5(0x7a8),
            'woKvg': function (_0x2a29e8, _0x33e814) {
                return _0x2a29e8(_0x33e814);
            },
            'rBIYF': function (_0x1e0edf, _0x16350b) {
                return _0x1e0edf(_0x16350b);
            },
            'XbKEl': function (_0x465d14) {
                return _0x465d14();
            },
            'sAVSX': _0x47a1d5(0x601) + _0x47a1d5(0x969) + _0x47a1d5(0x3c3) + _0x47a1d5(0xba9),
            'AEiqi': function (_0x2fde62, _0x1e7ab8) {
                return _0x2fde62(_0x1e7ab8);
            },
            'xizbv': _0x47a1d5(0x5d5),
            'HGaUe': function (_0xd797a8, _0x46f72f) {
                return _0xd797a8(_0x46f72f);
            },
            'sxnqP': function (_0x128d63, _0x60b0c3) {
                return _0x128d63(_0x60b0c3);
            },
            'lFfuO': function (_0x6c6f42, _0x436e37) {
                return _0x6c6f42 + _0x436e37;
            },
            'LLKzf': _0x47a1d5(0xcb0) + _0x47a1d5(0x218) + _0x47a1d5(0xcd1),
            'OsPnE': _0x47a1d5(0x443),
            'ZtEKG': function (_0x17d8a2) {
                return _0x17d8a2();
            },
            'PzeaL': function (_0x5bbff0, _0x2ce2d0) {
                return _0x5bbff0(_0x2ce2d0);
            },
            'LYAeh': function (_0x40af5c, _0x561c86) {
                return _0x40af5c + _0x561c86;
            },
            'dfjyw': function (_0x2c8c1f, _0x14d0c3) {
                return _0x2c8c1f + _0x14d0c3;
            },
            'lHczD': _0x47a1d5(0xb84) + _0x47a1d5(0x604) + _0x47a1d5(0xa54),
            'fCgiH': function (_0x32e122, _0xb70e32) {
                return _0x32e122 < _0xb70e32;
            },
            'sSbVY': function (_0x97c4eb, _0x98d7f6) {
                return _0x97c4eb > _0x98d7f6;
            },
            'umnim': function (_0x4f6e36, _0x17af4d) {
                return _0x4f6e36(_0x17af4d);
            },
            'nAvSw': function (_0x44a205, _0x46aa50) {
                return _0x44a205(_0x46aa50);
            },
            'andtT': function (_0x5067ca, _0x56bcb2) {
                return _0x5067ca(_0x56bcb2);
            },
            'ABCbP': _0x47a1d5(0x43e),
            'bTkXW': function (_0x1c6bb2, _0x25f347) {
                return _0x1c6bb2 + _0x25f347;
            },
            'XSdLE': function (_0x42d255, _0x4c3ff9) {
                return _0x42d255(_0x4c3ff9);
            },
            'LIdwI': function (_0x292931, _0x4a651a) {
                return _0x292931(_0x4a651a);
            },
            'OBAMU': _0x47a1d5(0xacc) + _0x47a1d5(0x7eb),
            'vzTXz': function (_0x131d8c, _0x303fbb) {
                return _0x131d8c(_0x303fbb);
            },
            'ZWwoi': _0x47a1d5(0x907) + _0x47a1d5(0x679) + _0x47a1d5(0x7a1) + _0x47a1d5(0xae7) + _0x47a1d5(0x74f),
            'eAkrW': function (_0x2e6cc3, _0x51aea7) {
                return _0x2e6cc3(_0x51aea7);
            },
            'otrfu': function (_0x2888e9, _0x3f61be) {
                return _0x2888e9 === _0x3f61be;
            },
            'hQIcp': function (_0x39e6d2, _0x30a514) {
                return _0x39e6d2 === _0x30a514;
            },
            'RnTGI': _0x47a1d5(0xce9),
            'MxNmo': _0x47a1d5(0xc79),
            'cOikX': _0x47a1d5(0xba4),
            'GUSiO': function (_0x424f87, _0x246bf5) {
                return _0x424f87(_0x246bf5);
            },
            'LynNt': _0x47a1d5(0x2c9),
            'xUGas': function (_0x566f61) {
                return _0x566f61();
            },
            'bwUYS': function (_0x5e3916, _0x45f252) {
                return _0x5e3916(_0x45f252);
            },
            'EOZXt': _0x47a1d5(0x7d1),
            'EZEhd': _0x47a1d5(0x2f0) + _0x47a1d5(0x425),
            'nXUje': function (_0x12a947, _0x589431, _0x1736e7) {
                return _0x12a947(_0x589431, _0x1736e7);
            },
            'Yfhru': _0x47a1d5(0x54b),
            'HDckG': _0x47a1d5(0x285) + _0x47a1d5(0xb95) + _0x47a1d5(0x61f) + _0x47a1d5(0x256) + _0x47a1d5(0xd27) + _0x47a1d5(0x96c),
            'pxnCs': _0x47a1d5(0xb44) + _0x47a1d5(0x71a) + _0x47a1d5(0x88f) + _0x47a1d5(0x3f7) + _0x47a1d5(0xad8) + _0x47a1d5(0x97d) + _0x47a1d5(0x5b6) + _0x47a1d5(0x671),
            'zmLEd': function (_0x3e56e5, _0x1fb23f) {
                return _0x3e56e5(_0x1fb23f);
            },
            'bjTKR': _0x47a1d5(0x88a),
            'YkwsL': _0x47a1d5(0x5b3) + 'et',
            'Lgdgx': _0x47a1d5(0x24e) + 'te',
            'caFQp': _0x47a1d5(0x884) + _0x47a1d5(0x552)
        }, _0x797690 = _0x423d88[_0x47a1d5(0xb61)](makeInMemoryStore, {
            'logger': _0x423d88[_0x47a1d5(0x521)](pino)[_0x47a1d5(0x46f)]({
                'level': _0x423d88[_0x47a1d5(0xd40)],
                'stream': _0x423d88[_0x47a1d5(0xca9)]
            })
        }), {
            state: _0x3542f8,
            saveCreds: _0x3e01eb
        } = await _0x423d88[_0x47a1d5(0xc87)](useMultiFileAuthState, _0x423d88[_0x47a1d5(0x47b)]), {
            version: _0x865736,
            isLatest: _0x15b00f
        } = await _0x423d88[_0x47a1d5(0x4dc)](fetchLatestBaileysVersion), _0x3e0b98 = new NodeCache(), _0x410b95 = _0x423d88[_0x47a1d5(0x963)](makeWASocket, {
            'logger': _0x423d88[_0x47a1d5(0x6c3)](pino, { 'level': _0x423d88[_0x47a1d5(0x513)] }),
            'printQRInTerminal': !pairingCode,
            'mobile': useMobile,
            'browser': [
                _0x423d88[_0x47a1d5(0x423)],
                '',
                ''
            ],
            'auth': {
                'creds': _0x3542f8[_0x47a1d5(0x98d)],
                'keys': _0x423d88[_0x47a1d5(0x477)](makeCacheableSignalKeyStore, _0x3542f8[_0x47a1d5(0xac6)], _0x423d88[_0x47a1d5(0x35c)](Pino, { 'level': _0x423d88[_0x47a1d5(0x777)] })[_0x47a1d5(0x46f)]({ 'level': _0x423d88[_0x47a1d5(0x777)] }))
            },
            'browser': [
                _0x423d88[_0x47a1d5(0x423)],
                '',
                ''
            ],
            'markOnlineOnConnect': !![],
            'generateHighQualityLinkPreview': !![],
            'getMessage': async _0x3882b8 => {
                const _0x4b95d8 = _0x47a1d5;
                let _0x3ed8e4 = _0x423d88[_0x4b95d8(0x44d)](jidNormalizedUser, _0x3882b8[_0x4b95d8(0xa4e)]), _0x832cb9 = await _0x797690[_0x4b95d8(0xc72) + 'e'](_0x3ed8e4, _0x3882b8['id']);
                return _0x832cb9?.[_0x4b95d8(0x654)] || '';
            },
            'msgRetryCounterCache': _0x3e0b98,
            'defaultQueryTimeoutMs': undefined
        });
    _0x797690[_0x47a1d5(0x1ae)](_0x410b95['ev']);
    if (pairingCode && !_0x410b95[_0x47a1d5(0xa64)][_0x47a1d5(0x98d)][_0x47a1d5(0x3eb)]) {
        if (useMobile)
            throw new Error(_0x423d88[_0x47a1d5(0x5b5)]);
        let _0x3d9628;
        !!_0x3d9628 ? (_0x3d9628 = _0x3d9628[_0x47a1d5(0x3ba)](/[^0-9]/g, ''), !Object[_0x47a1d5(0xac6)](PHONENUMBER_MCC)[_0x47a1d5(0x183)](_0x47ecd9 => _0x3d9628[_0x47a1d5(0x87f)](_0x47ecd9)) && (console[_0x47a1d5(0x81a)](chalk[_0x47a1d5(0xb2f)](chalk[_0x47a1d5(0x625)](_0x423d88[_0x47a1d5(0xc3e)]))), process[_0x47a1d5(0x710)](-0x13ba + -0x20ce + 0x148 * 0x29))) : (_0x3d9628 = await _0x423d88[_0x47a1d5(0xb62)](question, chalk[_0x47a1d5(0xb2f)](chalk[_0x47a1d5(0x64b) + 't'](_0x47a1d5(0xb86) + _0x47a1d5(0x4da) + _0x47a1d5(0x73f) + _0x47a1d5(0x1b9) + _0x47a1d5(0x4ff) + _0x47a1d5(0x184)))), _0x3d9628 = _0x3d9628[_0x47a1d5(0x3ba)](/[^0-9]/g, ''), !Object[_0x47a1d5(0xac6)](PHONENUMBER_MCC)[_0x47a1d5(0x183)](_0x60928d => _0x3d9628[_0x47a1d5(0x87f)](_0x60928d)) && (console[_0x47a1d5(0x81a)](chalk[_0x47a1d5(0xb2f)](chalk[_0x47a1d5(0x625)](_0x423d88[_0x47a1d5(0xc3e)]))), _0x3d9628 = await _0x423d88[_0x47a1d5(0xb87)](question, chalk[_0x47a1d5(0xb2f)](chalk[_0x47a1d5(0x64b) + 't'](_0x47a1d5(0x1e7) + _0x47a1d5(0x59a) + _0x47a1d5(0xd36) + _0x47a1d5(0x289) + _0x47a1d5(0x4ff) + _0x47a1d5(0x20e)))), _0x3d9628 = _0x3d9628[_0x47a1d5(0x3ba)](/[^0-9]/g, ''), rl[_0x47a1d5(0xce9)]())), _0x423d88[_0x47a1d5(0x450)](setTimeout, async () => {
            const _0x49d8b2 = _0x47a1d5;
            let _0x4c5494 = await _0x410b95[_0x49d8b2(0x9bb) + _0x49d8b2(0x250)](_0x3d9628);
            _0x4c5494 = _0x4c5494?.[_0x49d8b2(0x257)](/.{1,4}/g)?.[_0x49d8b2(0x706)]('-') || _0x4c5494, console[_0x49d8b2(0x81a)](chalk[_0x49d8b2(0xd0a)](chalk[_0x49d8b2(0x704)](_0x49d8b2(0x5d4) + _0x49d8b2(0xbfb) + _0x49d8b2(0x8d3) + '\x20')), chalk[_0x49d8b2(0xd0a)](chalk[_0x49d8b2(0x546)](_0x4c5494)));
        }, 0x1504 + -0x17c2 + 0x2 * 0x73b);
    }
    astaroth = _0x410b95, _0x410b95['ev']['on'](_0x423d88[_0x47a1d5(0x6a0)], () => {
        const _0x31bd82 = _0x47a1d5;
        console[_0x31bd82(0x81a)](_0x423d88[_0x31bd82(0x204)]);
    }), _0x410b95['ev']['on'](_0x423d88[_0x47a1d5(0x26d)], () => {
        const _0x29cb40 = _0x47a1d5;
        console[_0x29cb40(0x81a)](_0x423d88[_0x29cb40(0x7c1)]);
    }), _0x410b95['ev']['on'](_0x423d88[_0x47a1d5(0x45f)], _0x3e01eb), _0x410b95['ev']['on'](_0x423d88[_0x47a1d5(0x348)], async ({messages: _0x5b07cf}) => {
        const _0x965d42 = _0x47a1d5, _0x1bb139 = {
                'cwLFX': _0x423d88[_0x965d42(0x714)],
                'xxsDN': function (_0x47020e, _0x5b86e1) {
                    const _0x355ebd = _0x965d42;
                    return _0x423d88[_0x355ebd(0x21d)](_0x47020e, _0x5b86e1);
                },
                'dRszL': function (_0x24418f, _0x1dff4c) {
                    const _0x1df476 = _0x965d42;
                    return _0x423d88[_0x1df476(0x8d5)](_0x24418f, _0x1dff4c);
                },
                'CakPG': _0x423d88[_0x965d42(0x503)],
                'tXPBL': _0x423d88[_0x965d42(0x27a)],
                'aBUVB': _0x423d88[_0x965d42(0xaae)],
                'lgzvo': _0x423d88[_0x965d42(0xb0c)],
                'PwvVh': function (_0x36fdce, _0x45eed0) {
                    const _0x5c5261 = _0x965d42;
                    return _0x423d88[_0x5c5261(0x1ba)](_0x36fdce, _0x45eed0);
                },
                'TzEBq': _0x423d88[_0x965d42(0x943)],
                'YRpiK': _0x423d88[_0x965d42(0xcf9)],
                'oOIsd': _0x423d88[_0x965d42(0x220)],
                'omiNa': _0x423d88[_0x965d42(0xa1e)],
                'XEyDT': _0x423d88[_0x965d42(0x71c)],
                'QcQid': _0x423d88[_0x965d42(0xbd9)],
                'PqzJo': _0x423d88[_0x965d42(0x618)],
                'cScZk': _0x423d88[_0x965d42(0x609)],
                'JTbQO': function (_0x135376, _0x21cf4e) {
                    const _0x48cd90 = _0x965d42;
                    return _0x423d88[_0x48cd90(0x732)](_0x135376, _0x21cf4e);
                },
                'TuLOD': _0x423d88[_0x965d42(0x24c)],
                'JXECn': function (_0x30735d, _0x36b97e) {
                    const _0x13a890 = _0x965d42;
                    return _0x423d88[_0x13a890(0xc4a)](_0x30735d, _0x36b97e);
                },
                'HcMbb': _0x423d88[_0x965d42(0xbb8)],
                'DrMaQ': _0x423d88[_0x965d42(0xad7)],
                'Ntzbd': _0x423d88[_0x965d42(0x9c9)],
                'HRmWN': function (_0x80a4af, _0x2560cb) {
                    const _0x236782 = _0x965d42;
                    return _0x423d88[_0x236782(0xabb)](_0x80a4af, _0x2560cb);
                },
                'hIlWu': function (_0x27b719) {
                    const _0x4fe911 = _0x965d42;
                    return _0x423d88[_0x4fe911(0x82c)](_0x27b719);
                },
                'wVqQQ': function (_0x57b711, _0x4f72af) {
                    const _0x11afb9 = _0x965d42;
                    return _0x423d88[_0x11afb9(0x532)](_0x57b711, _0x4f72af);
                },
                'wuysL': function (_0x46ddcd, _0x1ab9e0) {
                    const _0x2a2fe2 = _0x965d42;
                    return _0x423d88[_0x2a2fe2(0x28b)](_0x46ddcd, _0x1ab9e0);
                },
                'XnYwK': function (_0x59508a, _0x5ac26d) {
                    const _0x56a91d = _0x965d42;
                    return _0x423d88[_0x56a91d(0x330)](_0x59508a, _0x5ac26d);
                },
                'XSWNI': function (_0x184514, _0x21eb72, _0x1a25cc) {
                    const _0x18fb32 = _0x965d42;
                    return _0x423d88[_0x18fb32(0x9d6)](_0x184514, _0x21eb72, _0x1a25cc);
                },
                'sWuzL': function (_0x2e2e80, _0x4cf006) {
                    const _0x23154f = _0x965d42;
                    return _0x423d88[_0x23154f(0x5e5)](_0x2e2e80, _0x4cf006);
                },
                'QhKKA': function (_0x324bb5) {
                    const _0x3b815d = _0x965d42;
                    return _0x423d88[_0x3b815d(0x277)](_0x324bb5);
                },
                'oxSLt': function (_0x2ee60e, _0x28b5b7) {
                    const _0x54c4b9 = _0x965d42;
                    return _0x423d88[_0x54c4b9(0x6ef)](_0x2ee60e, _0x28b5b7);
                },
                'HeRvD': function (_0x159110, _0x4303e7, _0xe06767, _0x14f2fd, _0x9a01b3) {
                    const _0x5bef7d = _0x965d42;
                    return _0x423d88[_0x5bef7d(0x293)](_0x159110, _0x4303e7, _0xe06767, _0x14f2fd, _0x9a01b3);
                },
                'ZuVXF': function (_0x2942dc, _0x59f231) {
                    const _0x4a0e75 = _0x965d42;
                    return _0x423d88[_0x4a0e75(0x44d)](_0x2942dc, _0x59f231);
                },
                'QOOIn': function (_0x2ee934) {
                    const _0x57280d = _0x965d42;
                    return _0x423d88[_0x57280d(0x54d)](_0x2ee934);
                },
                'lkqLG': function (_0x2c7cac) {
                    const _0x556c0f = _0x965d42;
                    return _0x423d88[_0x556c0f(0x7b8)](_0x2c7cac);
                },
                'IRvcI': _0x423d88[_0x965d42(0x730)],
                'ggBVd': _0x423d88[_0x965d42(0xc90)],
                'lKUFw': _0x423d88[_0x965d42(0x6f2)],
                'eUqPu': function (_0x38ccd7, _0x40b0b6) {
                    const _0x774b29 = _0x965d42;
                    return _0x423d88[_0x774b29(0x7a3)](_0x38ccd7, _0x40b0b6);
                },
                'NzmAm': _0x423d88[_0x965d42(0x4fd)],
                'JJXOT': function (_0x44ec6b, _0x4368fd) {
                    const _0x5498b8 = _0x965d42;
                    return _0x423d88[_0x5498b8(0xd6a)](_0x44ec6b, _0x4368fd);
                },
                'vNpnt': _0x423d88[_0x965d42(0x716)],
                'prxQF': _0x423d88[_0x965d42(0x6fe)],
                'xRzHd': function (_0x1412dd, _0x10a1b6) {
                    const _0x4725ac = _0x965d42;
                    return _0x423d88[_0x4725ac(0x44d)](_0x1412dd, _0x10a1b6);
                },
                'cCRvM': _0x423d88[_0x965d42(0x8f2)],
                'QPfgU': function (_0x1e0229, _0x24cd2c, _0x477f7c) {
                    const _0x33d50a = _0x965d42;
                    return _0x423d88[_0x33d50a(0x9d6)](_0x1e0229, _0x24cd2c, _0x477f7c);
                },
                'QlIUu': _0x423d88[_0x965d42(0x3b6)],
                'FipMa': function (_0x560b03, _0x14ffb7) {
                    const _0x523c46 = _0x965d42;
                    return _0x423d88[_0x523c46(0xd3e)](_0x560b03, _0x14ffb7);
                },
                'NJELm': function (_0x5171d6, _0x266c7c) {
                    const _0x5c297a = _0x965d42;
                    return _0x423d88[_0x5c297a(0x1af)](_0x5171d6, _0x266c7c);
                },
                'JNQLU': function (_0x16bcad, _0x172c64) {
                    const _0x13e582 = _0x965d42;
                    return _0x423d88[_0x13e582(0x23b)](_0x16bcad, _0x172c64);
                },
                'Ocubb': function (_0x4e18c0, _0x3f9750) {
                    const _0xa8424e = _0x965d42;
                    return _0x423d88[_0xa8424e(0x330)](_0x4e18c0, _0x3f9750);
                },
                'AzsrG': _0x423d88[_0x965d42(0x57c)],
                'IhHhs': _0x423d88[_0x965d42(0x5fb)],
                'MXNUs': _0x423d88[_0x965d42(0x956)],
                'fHiuy': function (_0xe46baf, _0x1101c2, _0x3d3e9a) {
                    const _0x19c377 = _0x965d42;
                    return _0x423d88[_0x19c377(0x9d6)](_0xe46baf, _0x1101c2, _0x3d3e9a);
                },
                'VoWlc': function (_0xa1eb54, _0x5acb4c) {
                    const _0x17934c = _0x965d42;
                    return _0x423d88[_0x17934c(0x1a3)](_0xa1eb54, _0x5acb4c);
                },
                'AMOnE': _0x423d88[_0x965d42(0xbdb)],
                'Nsnri': _0x423d88[_0x965d42(0xb1e)],
                'qfeOc': _0x423d88[_0x965d42(0xd61)],
                'WOtzr': _0x423d88[_0x965d42(0x2d5)],
                'fVpGn': _0x423d88[_0x965d42(0xaa5)],
                'Hljfb': _0x423d88[_0x965d42(0x40d)],
                'QEErz': _0x423d88[_0x965d42(0xa74)],
                'zvwlc': _0x423d88[_0x965d42(0xc42)],
                'qJbKE': function (_0x2c41c0, _0x6eaf87) {
                    const _0x4401c8 = _0x965d42;
                    return _0x423d88[_0x4401c8(0x7e6)](_0x2c41c0, _0x6eaf87);
                },
                'bCefl': function (_0x185e9f, _0x35dbed) {
                    const _0x5e0a57 = _0x965d42;
                    return _0x423d88[_0x5e0a57(0x9eb)](_0x185e9f, _0x35dbed);
                },
                'EWUYA': function (_0x227d9e, _0x42a8e5) {
                    const _0x3765b1 = _0x965d42;
                    return _0x423d88[_0x3765b1(0x715)](_0x227d9e, _0x42a8e5);
                },
                'mFWFa': _0x423d88[_0x965d42(0x368)],
                'dgzfl': _0x423d88[_0x965d42(0x721)],
                'ivyFp': function (_0x3124e2, _0x52144c) {
                    const _0x317d16 = _0x965d42;
                    return _0x423d88[_0x317d16(0xb3d)](_0x3124e2, _0x52144c);
                },
                'onkOR': _0x423d88[_0x965d42(0x76d)],
                'bKYeY': function (_0x454c6d, _0x3d4a6b) {
                    const _0x2bb5d6 = _0x965d42;
                    return _0x423d88[_0x2bb5d6(0x6f3)](_0x454c6d, _0x3d4a6b);
                },
                'BqIXz': _0x423d88[_0x965d42(0x337)],
                'ZQEPL': function (_0x2f756a, _0x507c37) {
                    const _0x29c5ae = _0x965d42;
                    return _0x423d88[_0x29c5ae(0xb3d)](_0x2f756a, _0x507c37);
                },
                'WlLVd': _0x423d88[_0x965d42(0x8bc)],
                'KEmqV': _0x423d88[_0x965d42(0x972)],
                'DfaiX': function (_0x1de6a7, _0x47fd01) {
                    const _0x3a6dba = _0x965d42;
                    return _0x423d88[_0x3a6dba(0xb3d)](_0x1de6a7, _0x47fd01);
                },
                'DJzah': _0x423d88[_0x965d42(0x464)],
                'oQRKn': function (_0x3135b6, _0x25359b) {
                    const _0x166e5e = _0x965d42;
                    return _0x423d88[_0x166e5e(0x8ef)](_0x3135b6, _0x25359b);
                },
                'hGAiZ': _0x423d88[_0x965d42(0x42d)]
            };
        try {
            const _0x13288e = _0x5b07cf[-0x4ce + 0x4cc + 0x2];
            if (!_0x13288e[_0x965d42(0x654)])
                return;
            const _0x57491b = {
                'remoteJid': _0x13288e[_0x965d42(0x45b)][_0x965d42(0xa4e)],
                'id': _0x13288e[_0x965d42(0x45b)]['id'],
                'participant': _0x13288e[_0x965d42(0x45b)][_0x965d42(0x360) + 't']
            };
            await _0x410b95[_0x965d42(0xb7e) + 'es']([_0x57491b]);
            if (_0x13288e[_0x965d42(0x45b)] && _0x423d88[_0x965d42(0x8d5)](_0x13288e[_0x965d42(0x45b)][_0x965d42(0xa4e)], _0x423d88[_0x965d42(0x6e9)]))
                return;
            const _0x19425f = Object[_0x965d42(0xac6)](_0x13288e[_0x965d42(0x654)]), _0x5dcb1b = _0x423d88[_0x965d42(0x359)](_0x19425f[0x601 * -0x1 + 0xf87 + -0x986], _0x423d88[_0x965d42(0x3b8)]) ? _0x423d88[_0x965d42(0xb3f)](_0x19425f[0x1e4 + -0x266 * -0xd + -0x1 * 0x2111], _0x423d88[_0x965d42(0x885)]) ? _0x19425f[0x45a + 0x1caf * -0x1 + 0x1857] : _0x19425f[-0x1 * -0x1529 + -0x14d0 + -0x2c * 0x2] : _0x19425f[0x1a51 + -0x1658 + -0x3f9 * 0x1], _0x54b0b3 = _0x13288e[_0x965d42(0x45b)][_0x965d42(0xa4e)];
            var _0x4d25d3 = _0x423d88[_0x965d42(0xc48)](_0x5dcb1b, _0x423d88[_0x965d42(0x6a7)]) ? _0x13288e[_0x965d42(0x654)][_0x965d42(0x557) + 'on'] : _0x423d88[_0x965d42(0xb6d)](_0x5dcb1b, _0x423d88[_0x965d42(0xa22)]) ? _0x13288e[_0x965d42(0x654)][_0x965d42(0x77e) + 'ge'][_0x965d42(0x199)] : _0x423d88[_0x965d42(0x1a7)](_0x5dcb1b, _0x423d88[_0x965d42(0xae0)]) ? _0x13288e[_0x965d42(0x654)][_0x965d42(0xa6f) + 'ge'][_0x965d42(0x199)] : _0x423d88[_0x965d42(0x19e)](_0x5dcb1b, _0x423d88[_0x965d42(0x361)]) ? _0x13288e[_0x965d42(0x654)][_0x965d42(0xb64) + _0x965d42(0xcba)][_0x965d42(0x2ca)] : _0x423d88[_0x965d42(0x577)](_0x5dcb1b, _0x423d88[_0x965d42(0x8ff)]) ? _0x13288e[_0x965d42(0x654)][_0x965d42(0x865) + _0x965d42(0xd24) + 'ge'][_0x965d42(0xb8b) + _0x965d42(0xbff)] : _0x13288e[_0x965d42(0x654)][_0x965d42(0xc37) + _0x965d42(0xd06)] && _0x13288e[_0x965d42(0x654)][_0x965d42(0xc37) + _0x965d42(0xd06)][_0x965d42(0xb69) + _0x965d42(0x194)][_0x965d42(0x5ae) + _0x965d42(0xb90)][_0x965d42(0x87f)](_0x4396ff) && _0x13288e[_0x965d42(0x654)][_0x965d42(0xc37) + _0x965d42(0xd06)][_0x965d42(0xb69) + _0x965d42(0x194)][_0x965d42(0x5ae) + _0x965d42(0xb90)] ? _0x13288e[_0x965d42(0x654)][_0x965d42(0xc37) + _0x965d42(0xd06)][_0x965d42(0xb69) + _0x965d42(0x194)][_0x965d42(0x5ae) + _0x965d42(0xb90)] : _0x423d88[_0x965d42(0xb3f)](_0x5dcb1b, _0x423d88[_0x965d42(0x33d)]) ? _0x13288e[_0x965d42(0x654)][_0x965d42(0xd6e) + _0x965d42(0x2e3) + _0x965d42(0x7f9)][_0x965d42(0x32b)] : _0x423d88[_0x965d42(0x82f)](_0x5dcb1b, _0x423d88[_0x965d42(0x885)]) ? _0x13288e[_0x965d42(0x654)][_0x965d42(0x865) + _0x965d42(0xd24) + 'ge']?.[_0x965d42(0xb8b) + _0x965d42(0xbff)] || _0x13288e[_0x965d42(0x654)][_0x965d42(0xc37) + _0x965d42(0xd06)]?.[_0x965d42(0xb69) + _0x965d42(0x194)][_0x965d42(0x5ae) + _0x965d42(0xb90)] || _0x13288e[_0x965d42(0x2ca)] : '';
            const {
                    Criador: _0x470700,
                    apiUrl: _0x88766c,
                    apiKey: _0x5597e4,
                    dono: _0x9548ae,
                    dono2: _0x5ed8de,
                    bot: _0x35260a,
                    prefix: _0x4396ff,
                    numeroBot: _0x2a4505
                } = _0x423d88[_0x965d42(0x932)](require, _0x423d88[_0x965d42(0x23e)]), _0x5db4c2 = _0x4d25d3[_0x965d42(0x87f)](_0x4396ff), _0x384405 = _0x5db4c2 ? _0x4d25d3[_0x965d42(0x924)](-0x17e9 * -0x1 + -0x1 * -0x9a0 + -0x2188)[_0x965d42(0xd12)]()[_0x965d42(0x38a)](/ +/)[_0x965d42(0x23f)]()[_0x965d42(0xadb) + _0x965d42(0x783)]() : null;
            var _0x203abc = _0x423d88[_0x965d42(0xc4a)](_0x5dcb1b, _0x423d88[_0x965d42(0x6a7)]) ? _0x13288e[_0x965d42(0x654)][_0x965d42(0x557) + 'on'] : _0x423d88[_0x965d42(0x2da)](_0x5dcb1b, _0x423d88[_0x965d42(0x361)]) ? _0x13288e[_0x965d42(0x654)][_0x965d42(0xb64) + _0x965d42(0xcba)][_0x965d42(0x2ca)] : '';
            async function _0x328f5d(_0x212208) {
                const _0x24d659 = _0x965d42;
                await _0x410b95[_0x24d659(0x5bf) + _0x24d659(0x45e)](_0x1bb139[_0x24d659(0xd6b)], _0x54b0b3), await _0x1bb139[_0x24d659(0xc4c)](_0x1b425e, -0x3e * 0x82 + -0x16e8 + -0x3a4c * -0x1), _0x410b95[_0x24d659(0x25e) + 'e'](_0x54b0b3, { 'text': _0x212208 }, { 'quoted': _0x13288e });
            }
            const _0x2590ba = _0x30a1f6 => {
                    const _0x11445c = _0x965d42;
                    admins = [];
                    for (let _0x5e5717 of _0x30a1f6) {
                        if (_0x1bb139[_0x11445c(0xb97)](_0x5e5717[_0x11445c(0xb0b)], _0x1bb139[_0x11445c(0xc36)]))
                            admins[_0x11445c(0x3bd)](_0x5e5717['id']);
                        if (_0x1bb139[_0x11445c(0xb97)](_0x5e5717[_0x11445c(0xb0b)], _0x1bb139[_0x11445c(0xbc9)]))
                            admins[_0x11445c(0x3bd)](_0x5e5717['id']);
                    }
                    return admins;
                }, _0x23db31 = _0x13288e[_0x965d42(0x45b)][_0x965d42(0xa4e)][_0x965d42(0x422)](_0x423d88[_0x965d42(0xa8b)]), _0x3845fe = _0x23db31 ? await _0x410b95[_0x965d42(0x713) + _0x965d42(0x7dc)](_0x54b0b3) : '', _0x27029f = _0x23db31 ? _0x3845fe[_0x965d42(0x360) + 'ts'] : '', _0x2c9235 = _0x23db31 ? _0x423d88[_0x965d42(0x1b6)](_0x2590ba, _0x27029f) : '', _0x306d2a = _0x2c9235[_0x965d42(0xd16)](_0x9548ae) || ![], _0x17cc35 = _0x23db31 ? _0x13288e[_0x965d42(0x45b)][_0x965d42(0x360) + 't'] : _0x13288e[_0x965d42(0x45b)][_0x965d42(0xa4e)], _0x3d070f = _0x2c9235[_0x965d42(0xd16)](_0x17cc35) || ![];
            let _0x38efbb = _0x423d88[_0x965d42(0x330)](_0x423d88[_0x965d42(0x23b)](Date[_0x965d42(0xcb7)](), 0x1f * 0x1c + -0x1 * 0x191b + 0x199f), _0x13288e[_0x965d42(0xc99) + _0x965d42(0x90d)] || 0x1 * -0x1451 + 0x1b4d * 0x1 + -0x254 * 0x3), _0x478974;
            const _0x53d5b1 = _0xa0badd => {
                    const _0x397881 = _0x965d42;
                    _0x410b95[_0x397881(0x25e) + 'e'](_0x54b0b3, { 'text': _0xa0badd }, { 'quoted': _0x13288e });
                }, _0x1b425e = async _0x12ec36 => {
                    return new Promise(_0xc96248 => setTimeout(_0xc96248, _0x12ec36));
                }, _0x3bd4a2 = _0x423d88[_0x965d42(0x23e)], _0x506714 = _0x17cc35[_0x965d42(0xd16)](_0x9548ae) || _0x17cc35[_0x965d42(0xd16)](_0x5ed8de), _0xdd9c52 = () => {
                    const _0x4b8e70 = _0x965d42, _0x3d6f69 = _0x1bb139[_0x4b8e70(0x63f)];
                    if (fs[_0x4b8e70(0x33c)](_0x3d6f69))
                        return JSON[_0x4b8e70(0x457)](fs[_0x4b8e70(0x3b5) + 'nc'](_0x3d6f69, _0x1bb139[_0x4b8e70(0x28c)]));
                    return {};
                }, _0x403c70 = _0x50cc93 => {
                    const _0x502088 = _0x965d42, _0x1c58a5 = _0x1bb139[_0x502088(0x63f)];
                    fs[_0x502088(0xaf8) + _0x502088(0x420)](_0x1c58a5, JSON[_0x502088(0x564)](_0x50cc93, null, 0x324 + -0x247d + -0x215b * -0x1), _0x1bb139[_0x502088(0x28c)]);
                };
            let _0x1d2b19 = _0x423d88[_0x965d42(0x82c)](_0xdd9c52);
            const _0x491b0b = _0x462fe0 => {
                    const _0x31a942 = _0x965d42;
                    !_0x1d2b19[_0x462fe0] && (_0x1d2b19[_0x462fe0] = {
                        'nsfw': ![],
                        'modozoeira': ![],
                        'rpg': ![]
                    }, _0x423d88[_0x31a942(0x44d)](_0x403c70, _0x1d2b19));
                }, _0x5c1b27 = _0x13288e[_0x965d42(0xb75)] ? _0x13288e[_0x965d42(0xb75)] : '', _0x51bc5e = _0x2b48c5 => {
                    const _0x24ef02 = _0x965d42;
                    _0x410b95[_0x24ef02(0x25e) + 'e'](_0x54b0b3, {
                        'react': {
                            'text': _0x2b48c5,
                            'key': _0x13288e[_0x24ef02(0x45b)]
                        }
                    });
                };
            function _0x255276(_0x1b7bc7) {
                const _0x414d67 = _0x965d42;
                try {
                    const _0x51064a = new Date(_0x1b7bc7);
                    return _0x1bb139[_0x414d67(0xcad)](_0x1bb139[_0x414d67(0xcad)](_0x51064a[_0x414d67(0x70a) + _0x414d67(0x462)](_0x1bb139[_0x414d67(0x9b9)], {
                        'day': _0x1bb139[_0x414d67(0x9a2)],
                        'month': _0x1bb139[_0x414d67(0xa73)],
                        'year': _0x1bb139[_0x414d67(0x382)]
                    }), _0x1bb139[_0x414d67(0x81d)]), _0x51064a[_0x414d67(0x26f) + _0x414d67(0x247)](_0x1bb139[_0x414d67(0x9b9)], {
                        'hour': _0x1bb139[_0x414d67(0x9a2)],
                        'minute': _0x1bb139[_0x414d67(0x9a2)]
                    }));
                } catch {
                    return _0x1bb139[_0x414d67(0x620)];
                }
            }
            function _0x3db25f(_0x44d89d) {
                const _0x20742f = _0x965d42;
                return new Intl[(_0x20742f(0x43d)) + 'at'](_0x1bb139[_0x20742f(0x9b9)], {
                    'notation': _0x1bb139[_0x20742f(0x1ab)],
                    'compactDisplay': _0x1bb139[_0x20742f(0x5da)],
                    'minimumFractionDigits': 0x1
                })[_0x20742f(0xb14)](_0x1bb139[_0x20742f(0xc26)](_0x44d89d, -0x150a * -0x1 + -0x20ac + 0xba2));
            }
            const _0x593a92 = _0x423d88[_0x965d42(0x859)](require, _0x423d88[_0x965d42(0xa7c)]), _0x2a626a = _0x423d88[_0x965d42(0x859)](require, _0x423d88[_0x965d42(0x87d)]), _0x71b6c5 = () => {
                    const _0x21f4f9 = _0x965d42, _0x22a247 = _0x423d88[_0x21f4f9(0x24c)];
                    if (!fs[_0x21f4f9(0x33c)](_0x22a247))
                        return fs[_0x21f4f9(0xaf8) + _0x21f4f9(0x420)](_0x22a247, '[]'), [];
                    return JSON[_0x21f4f9(0x457)](fs[_0x21f4f9(0x3b5) + 'nc'](_0x22a247));
                }, _0x3703fd = _0x497dc0 => {
                    const _0x415a13 = _0x965d42;
                    fs[_0x415a13(0xaf8) + _0x415a13(0x420)](_0x1bb139[_0x415a13(0x656)], JSON[_0x415a13(0x564)](_0x497dc0, null, 0xc35 + -0x1a + -0xc19));
                }, _0x42b0c8 = _0xe0cd1c => {
                    const _0x1fdadc = _0x965d42, _0x29a999 = _0x423d88[_0x1fdadc(0x82c)](_0x71b6c5);
                    return _0x29a999[_0x1fdadc(0xd16)](_0xe0cd1c);
                }, _0x2fe1fd = _0x423d88[_0x965d42(0xa58)], _0x54f3ae = () => {
                    const _0x12ef5f = _0x965d42;
                    if (!fs[_0x12ef5f(0x33c)](_0x2fe1fd))
                        return fs[_0x12ef5f(0xaf8) + _0x12ef5f(0x420)](_0x2fe1fd, '[]'), [];
                    return JSON[_0x12ef5f(0x457)](fs[_0x12ef5f(0x3b5) + 'nc'](_0x2fe1fd));
                }, _0x148f74 = _0x5afcdd => {
                    const _0x858ddd = _0x965d42;
                    fs[_0x858ddd(0xaf8) + _0x858ddd(0x420)](_0x2fe1fd, JSON[_0x858ddd(0x564)](_0x5afcdd, null, -0x4ef + -0xa49 + -0xf3a * -0x1));
                }, _0x26ae04 = async (_0x310ac1, _0x33ecb1, _0x2986ef, _0x43e460) => {
                    const _0x34df01 = _0x965d42, _0x1e018c = {
                            'PCFgM': function (_0x481415, _0x46cff5) {
                                const _0xe937d8 = _0x497e;
                                return _0x1bb139[_0xe937d8(0x197)](_0x481415, _0x46cff5);
                            },
                            'XWuSM': _0x1bb139[_0x34df01(0xb4a)],
                            'rCkIW': _0x1bb139[_0x34df01(0x258)],
                            'fssnz': _0x1bb139[_0x34df01(0xd53)],
                            'ZRyMb': function (_0x454e3e, _0x46cb28) {
                                const _0x916bfe = _0x34df01;
                                return _0x1bb139[_0x916bfe(0x217)](_0x454e3e, _0x46cb28);
                            },
                            'BcttT': function (_0x36dd8d) {
                                const _0x1d2fa9 = _0x34df01;
                                return _0x1bb139[_0x1d2fa9(0x44f)](_0x36dd8d);
                            },
                            'tCHyC': function (_0x5147bb, _0x177b07) {
                                const _0x50c4c7 = _0x34df01;
                                return _0x1bb139[_0x50c4c7(0xc4c)](_0x5147bb, _0x177b07);
                            }
                        }, _0x46122d = new Date(), _0xf4b1cf = new Date(_0x46122d);
                    _0xf4b1cf[_0x34df01(0xb39)](_0x2986ef, _0x43e460, -0xdb7 + 0x797 * -0x4 + 0x2c13, -0xe8a + 0x1 * -0x185f + 0x26e9);
                    if (_0x1bb139[_0x34df01(0x38d)](_0xf4b1cf, _0x46122d))
                        _0xf4b1cf[_0x34df01(0x7d7)](_0x1bb139[_0x34df01(0x2bf)](_0xf4b1cf[_0x34df01(0x451)](), 0x1b6 * 0xc + -0x23b6 + 0xf2f));
                    const _0x4e1047 = _0x1bb139[_0x34df01(0x499)](_0xf4b1cf[_0x34df01(0x268)](), _0x46122d[_0x34df01(0x268)]()), _0x4f28bc = _0x1bb139[_0x34df01(0x611)](setTimeout, async () => {
                            const _0x4f108b = _0x34df01;
                            try {
                                await _0x410b95[_0x4f108b(0x76f) + _0x4f108b(0x3b1)](_0x310ac1, _0x1e018c[_0x4f108b(0x878)](_0x33ecb1, _0x1e018c[_0x4f108b(0xd49)]) ? _0x1e018c[_0x4f108b(0x207)] : _0x1e018c[_0x4f108b(0x569)]), _0x1e018c[_0x4f108b(0x350)](_0x53d5b1, _0x4f108b(0xac4) + _0x33ecb1[_0x4f108b(0xbd2) + 'e']() + (_0x4f108b(0xcdb) + _0x4f108b(0xa5e) + _0x4f108b(0x7f6)) + _0x2986ef + ':' + _0x43e460[_0x4f108b(0x892)]()[_0x4f108b(0xb9b)](0x49 * 0x3 + 0x7 * 0x373 + -0x18fe, '0') + '!*');
                                const _0x1d3976 = _0x1e018c[_0x4f108b(0x20d)](_0x54f3ae), _0x5ccc35 = _0x1d3976[_0x4f108b(0x94d)](_0x46a0a4 => _0x46a0a4[_0x4f108b(0xc57)] !== _0x310ac1);
                                _0x1e018c[_0x4f108b(0xd2b)](_0x148f74, _0x5ccc35);
                            } catch (_0x218c00) {
                                console[_0x4f108b(0x347)](_0x4f108b(0x5a9) + _0x33ecb1 + _0x4f108b(0x719), _0x218c00);
                            }
                        }, _0x4e1047), _0x18d4d4 = _0x1bb139[_0x34df01(0x44f)](_0x54f3ae), _0x473198 = _0x18d4d4[_0x34df01(0xbc3)](_0x5605e3 => _0x5605e3[_0x34df01(0xc57)] === _0x310ac1);
                    return _0x1bb139[_0x34df01(0xbb3)](_0x473198, -(0x1a * 0x30 + 0xf24 + -0x1403)) && (_0x1bb139[_0x34df01(0x217)](clearTimeout, _0x18d4d4[_0x473198][_0x34df01(0x3be)]), _0x18d4d4[_0x34df01(0x74a)](_0x473198, 0xb * 0x343 + -0x2491 + 0xb1)), _0x18d4d4[_0x34df01(0x3bd)]({
                        'groupId': _0x310ac1,
                        'action': _0x33ecb1,
                        'targetTime': _0xf4b1cf[_0x34df01(0x268)](),
                        'timeoutId': _0x4f28bc[Symbol[_0x34df01(0x478) + 'e']]()
                    }), _0x1bb139[_0x34df01(0xc4c)](_0x148f74, _0x18d4d4), _0x4f28bc;
                }, _0x255f7d = async () => {
                    const _0x2ccf28 = _0x965d42, _0x543bd2 = _0x1bb139[_0x2ccf28(0x1dc)](_0x54f3ae), _0x55ded2 = new Date()[_0x2ccf28(0x268)]();
                    for (const _0x888730 of _0x543bd2) {
                        const _0x3d2409 = _0x1bb139[_0x2ccf28(0x499)](_0x888730[_0x2ccf28(0xd58)], _0x55ded2);
                        if (_0x1bb139[_0x2ccf28(0x5bc)](_0x3d2409, 0x1de6 + -0x678 + -0x2 * 0xbb7))
                            _0x1bb139[_0x2ccf28(0xbf7)](_0x26ae04, _0x888730[_0x2ccf28(0xc57)], _0x888730[_0x2ccf28(0x6b8)], new Date(_0x888730[_0x2ccf28(0xd58)])[_0x2ccf28(0xa6d)](), new Date(_0x888730[_0x2ccf28(0xd58)])[_0x2ccf28(0x6ed)]());
                        else {
                            const _0x4adaaf = _0x543bd2[_0x2ccf28(0x94d)](_0x237f57 => _0x237f57[_0x2ccf28(0xc57)] !== _0x888730[_0x2ccf28(0xc57)]);
                            _0x1bb139[_0x2ccf28(0x1f0)](_0x148f74, _0x4adaaf);
                        }
                    }
                };
            function _0x4850d2(_0x4338f2) {
                const _0x1dd12c = _0x965d42, _0x215b6e = /^([01]?[0-9]|2[0-3]):([0-5][0-9])$/;
                if (!_0x215b6e[_0x1dd12c(0x9cd)](_0x4338f2))
                    return null;
                const [_0x2ed5e4, _0x1dbc25] = _0x4338f2[_0x1dd12c(0x38a)](':')[_0x1dd12c(0x21e)](Number);
                return {
                    'hours': _0x2ed5e4,
                    'minutes': _0x1dbc25,
                    'toString': () => String(_0x2ed5e4)[_0x1dd12c(0xb9b)](-0x3 * -0xa99 + -0xa04 * -0x2 + -0x1 * 0x33d1, '0') + ':' + String(_0x1dbc25)[_0x1dd12c(0xb9b)](0x1 * 0x5ae + -0x1 * 0x10d3 + 0xb27, '0')
                };
            }
            const _0x1614a9 = _0x196679 => {
                    const _0xd984c2 = _0x965d42, _0x249a39 = _0x1bb139[_0xd984c2(0xc43)](_0xdd9c52);
                    return _0x249a39[_0x196679]?.[_0xd984c2(0x52a)] || ![];
                }, _0x3cc52f = _0x597c9e => {
                    const _0x31e533 = _0x965d42, _0x273d36 = _0x423d88[_0x31e533(0x521)](_0xdd9c52);
                    return _0x273d36[_0x597c9e]?.[_0x31e533(0xd67)] || ![];
                }, _0x4cadf5 = _0x372f38 => {
                    const _0x3a5e95 = _0x965d42, _0x5dd662 = _0x1bb139[_0x3a5e95(0x9b3)](_0xdd9c52);
                    return _0x5dd662[_0x372f38]?.[_0x3a5e95(0x35d)] || ![];
                }, _0x4dd328 = _0x423d88[_0x965d42(0x612)](require, _0x423d88[_0x965d42(0x80e)]), _0x4c625d = _0x423d88[_0x965d42(0xa30)], _0x5d3966 = () => {
                    const _0x655c61 = _0x965d42;
                    return !fs[_0x655c61(0x33c)](_0x4c625d) && fs[_0x655c61(0xaf8) + _0x655c61(0x420)](_0x4c625d, '{}'), JSON[_0x655c61(0x457)](fs[_0x655c61(0x3b5) + 'nc'](_0x4c625d));
                }, _0x2028ab = _0x5f5550 => {
                    const _0xcb142a = _0x965d42;
                    fs[_0xcb142a(0xaf8) + _0xcb142a(0x420)](_0x4c625d, JSON[_0xcb142a(0x564)](_0x5f5550, null, 0xb36 + 0x16a6 + 0x4d6 * -0x7));
                };
            switch (_0x384405) {
            default:
                if (_0x5db4c2) {
                    const _0x10d061 = (_0x965d42(0xb5e) + _0x965d42(0x843) + _0x965d42(0xafa) + _0x965d42(0x6c6) + '\x20' + _0x5c1b27 + (_0x965d42(0x904) + _0x965d42(0x2aa) + _0x965d42(0x228) + _0x965d42(0x48e)) + _0x384405 + (_0x965d42(0x538) + _0x965d42(0x5db) + _0x965d42(0x7ce) + _0x965d42(0x2c8) + _0x965d42(0x678) + _0x965d42(0x43f) + _0x965d42(0x30c) + _0x965d42(0x605) + _0x965d42(0x857) + _0x965d42(0x7ab) + _0x965d42(0x4f7)) + _0x4396ff + (_0x965d42(0x6d3) + _0x965d42(0x843) + _0x965d42(0xae5) + _0x965d42(0x5ad)))[_0x965d42(0xd12)]();
                    return _0x423d88[_0x965d42(0x787)](_0x53d5b1, _0x10d061);
                }
                break;
            case _0x423d88[_0x965d42(0x4a0)]: {
                    try {
                        const _0x51a34c = _0x4d25d3[_0x965d42(0x924)](_0x423d88[_0x965d42(0x28b)](_0x4396ff[_0x965d42(0x6ba)], 0x6b * -0x18 + -0x18a0 + -0x53 * -0x6b))[_0x965d42(0xd12)]();
                        if (!_0x51a34c)
                            return _0x423d88[_0x965d42(0x6a1)](_0x53d5b1, _0x965d42(0x19f) + _0x4396ff + (_0x965d42(0x4fc) + _0x965d42(0x3ce) + _0x965d42(0x191)) + _0x4396ff + (_0x965d42(0x978) + _0x965d42(0x6b0)));
                        const _0x1a61aa = _0x965d42(0x331) + _0x965d42(0x300) + _0x965d42(0x902) + _0x965d42(0xc4f) + _0x423d88[_0x965d42(0x69d)](encodeURIComponent, _0x51a34c) + (_0x965d42(0x308) + _0x965d42(0x78e) + _0x965d42(0xaa2) + _0x965d42(0x599)), {data: _0x1884ff} = await axios[_0x965d42(0x1df)](_0x1a61aa, { 'timeout': 0x2710 }), _0x537e7d = cheerio[_0x965d42(0x6ab)](_0x1884ff, { 'xmlMode': !![] }), _0x1829e3 = [];
                        _0x423d88[_0x965d42(0x44d)](_0x537e7d, _0x423d88[_0x965d42(0x7df)])[_0x965d42(0x924)](-0xb + -0x219c + -0x5 * -0x6bb, 0x1bc1 * -0x1 + -0x3 * -0x241 + 0x1501)[_0x965d42(0x746)]((_0x2bd31c, _0x2d37e8) => {
                            const _0x54c44a = _0x965d42, _0xfefa80 = _0x1bb139[_0x54c44a(0x1f0)](_0x537e7d, _0x2d37e8);
                            _0x1829e3[_0x54c44a(0x3bd)]({
                                'titulo': _0xfefa80[_0x54c44a(0xc52)](_0x1bb139[_0x54c44a(0x73a)])[_0x54c44a(0x2ca)]()[_0x54c44a(0xd12)](),
                                'link': _0xfefa80[_0x54c44a(0xc52)](_0x1bb139[_0x54c44a(0x415)])[_0x54c44a(0x2ca)]()[_0x54c44a(0xd12)](),
                                'fonte': _0xfefa80[_0x54c44a(0xc52)](_0x1bb139[_0x54c44a(0x5f9)])[_0x54c44a(0x2ca)]()[_0x54c44a(0xd12)]()
                            });
                        });
                        if (_0x423d88[_0x965d42(0xc4a)](_0x1829e3[_0x965d42(0x6ba)], 0x189f * 0x1 + -0x11e6 + 0x6b9 * -0x1))
                            return _0x423d88[_0x965d42(0xab4)](_0x53d5b1, _0x423d88[_0x965d42(0x233)]);
                        let _0x15b40b = _0x965d42(0xbe8) + _0x965d42(0x18d) + _0x51a34c + _0x965d42(0x2f3);
                        for (const [_0x53cbd4, _0x15c958] of _0x1829e3[_0x965d42(0xcb8)]()) {
                            try {
                                const {data: _0x4f5012} = await axios[_0x965d42(0x1df)](_0x15c958[_0x965d42(0x32a)], {
                                        'headers': {
                                            'User-Agent': _0x423d88[_0x965d42(0x7de)],
                                            'Accept-Language': _0x423d88[_0x965d42(0xc86)]
                                        },
                                        'timeout': 0x3a98
                                    }), _0x3e9d9c = cheerio[_0x965d42(0x6ab)](_0x4f5012), _0x1785ac = _0x423d88[_0x965d42(0xd7b)](_0x3e9d9c, _0x423d88[_0x965d42(0x711)])[_0x965d42(0xc52)](_0x423d88[_0x965d42(0x259)])[_0x965d42(0x21e)]((_0x1030c5, _0x1ee3ae) => _0x3e9d9c(_0x1ee3ae)[_0x965d42(0x2ca)]()[_0x965d42(0xd12)]())[_0x965d42(0x1df)]()[_0x965d42(0x706)]('\x0a\x0a')[_0x965d42(0x607)](0x1341 * 0x1 + -0x6b * 0x23 + -0x4a0, -0x16f1 * 0x1 + -0x1663 * 0x1 + 0x26 * 0x166);
                                _0x15b40b += '*' + _0x423d88[_0x965d42(0xb32)](_0x53cbd4, -0x6c * 0x3b + -0x22cf + 0x3bb4) + '.\x20' + _0x15c958[_0x965d42(0x356)] + '*\x0a', _0x15b40b += _0x965d42(0xcda) + _0x15c958[_0x965d42(0xae2)] + '\x0a', _0x15b40b += _0x423d88[_0x965d42(0x1d9)](_0x1785ac, _0x423d88[_0x965d42(0x8a6)]) + '\x0a\x0a', _0x15b40b += _0x423d88[_0x965d42(0x50b)];
                            } catch (_0x3129a7) {
                                console[_0x965d42(0x347)](_0x965d42(0x2d4) + _0x965d42(0x770) + _0x423d88[_0x965d42(0xbe2)](_0x53cbd4, 0x1abf + -0xc * -0xde + -0x2526) + ':', _0x3129a7), _0x15b40b += '*' + _0x423d88[_0x965d42(0x7e6)](_0x53cbd4, 0x1c04 + 0xc1 * -0x1a + -0x869) + (_0x965d42(0x18f) + _0x965d42(0xd31) + _0x965d42(0x948) + '\x0a\x0a');
                            }
                        }
                        const _0x388990 = _0x15b40b[_0x965d42(0x257)](/[\s\S]{1,4096}/g) || [];
                        for (const [_0x473f5e, _0x542c69] of _0x388990[_0x965d42(0xcb8)]()) {
                            await _0x423d88[_0x965d42(0x915)](_0x53d5b1, _0x423d88[_0x965d42(0x22c)](_0x542c69, _0x423d88[_0x965d42(0x193)](_0x473f5e, _0x423d88[_0x965d42(0xa04)](_0x388990[_0x965d42(0x6ba)], -0x1c38 + 0x265 + -0x57 * -0x4c)) ? '' : _0x423d88[_0x965d42(0x6ac)])), await _0x423d88[_0x965d42(0x67c)](_0x1b425e, 0x4 * 0x42c + -0x15ed + 0x101 * 0xd);
                        }
                    } catch (_0x3005d9) {
                        console[_0x965d42(0x347)](_0x423d88[_0x965d42(0x2b8)], _0x3005d9), _0x423d88[_0x965d42(0x8f5)](_0x53d5b1, _0x423d88[_0x965d42(0x82d)]);
                    }
                    break;
                }
            case _0x423d88[_0x965d42(0x5ef)]: {
                    try {
                        const [_0x5beff5, _0x3bc459] = _0x4d25d3[_0x965d42(0x924)](_0x423d88[_0x965d42(0x28b)](_0x4396ff[_0x965d42(0x6ba)], -0x1 * -0x12e + -0xd5 * -0x2 + -0x2d2 * 0x1))[_0x965d42(0x38a)]('/');
                        if (_0x423d88[_0x965d42(0x732)](!_0x5beff5, !_0x3bc459))
                            return _0x423d88[_0x965d42(0xd5c)](_0x53d5b1, _0x965d42(0x78b) + _0x965d42(0xa43) + _0x965d42(0xc6c) + _0x4396ff + (_0x965d42(0x810) + _0x965d42(0xc32)));
                        const _0x3a9391 = _0x3bc459[_0x965d42(0x3ba)](/\/$/, ''), _0x3e3708 = _0x423d88[_0x965d42(0x431)](parseInt, _0x3a9391, 0x20a4 + -0x1 * 0x2b6 + -0x1de4);
                        if (_0x423d88[_0x965d42(0x9dd)](isNaN, _0x3e3708) || _0x423d88[_0x965d42(0xb1c)](_0x3e3708, -0x87 + 0x4d7 + -0x17 * 0x30))
                            return _0x423d88[_0x965d42(0xa5d)](_0x53d5b1, _0x423d88[_0x965d42(0xa45)]);
                        const _0x151d34 = _0x5beff5[_0x965d42(0x709) + 'e']()[_0x965d42(0xbee)](_0x423d88[_0x965d42(0x20b)])[_0x965d42(0x3ba)](/[\u0300-\u036f]/g, '')[_0x965d42(0x3ba)](/[^a-z0-9]+/g, '-')[_0x965d42(0x3ba)](/-+/g, '-')[_0x965d42(0x3ba)](/^-|-$/g, ''), _0x3bfb51 = async () => {
                                const _0x3236d0 = _0x965d42;
                                try {
                                    const _0x46da94 = [
                                        _0x3236d0(0x79c) + _0x3a9391,
                                        _0x3236d0(0x93a) + _0x3a9391,
                                        _0x3236d0(0x79c) + _0x3e3708,
                                        _0x3236d0(0x93a) + _0x3e3708,
                                        _0x3a9391 + _0x3236d0(0xc0a)
                                    ];
                                    let _0x18f7ec = [];
                                    for (const _0x3ce36f of _0x46da94) {
                                        const _0x54d8cd = _0x3236d0(0xac7) + _0x3236d0(0xb15) + _0x3236d0(0x2c2) + _0x3236d0(0x187) + _0x151d34 + '/' + _0x3ce36f + '/';
                                        try {
                                            const {data: _0xe512c} = await axios[_0x3236d0(0x1df)](_0x54d8cd, {
                                                    'headers': {
                                                        'User-Agent': _0x423d88[_0x3236d0(0x1e8)],
                                                        'Referer': _0x423d88[_0x3236d0(0x63a)]
                                                    },
                                                    'timeout': 0x3a98
                                                }), _0x1a91c5 = cheerio[_0x3236d0(0x6ab)](_0xe512c);
                                            if (_0x423d88[_0x3236d0(0x69d)](_0x1a91c5, _0x423d88[_0x3236d0(0x730)])[_0x3236d0(0x2ca)]()[_0x3236d0(0xd16)](_0x423d88[_0x3236d0(0x561)]))
                                                continue;
                                            _0x423d88[_0x3236d0(0xd7b)](_0x1a91c5, _0x423d88[_0x3236d0(0x1ea)])[_0x3236d0(0x746)]((_0x3be6f6, _0x29503e) => {
                                                const _0x2af440 = _0x3236d0;
                                                let _0x32e826 = _0x1bb139[_0x2af440(0x7ac)](_0x1a91c5, _0x29503e)[_0x2af440(0x2e5)](_0x1bb139[_0x2af440(0x9f7)]) || _0x1bb139[_0x2af440(0x93f)](_0x1a91c5, _0x29503e)[_0x2af440(0x2e5)](_0x1bb139[_0x2af440(0x5d7)]);
                                                _0x32e826 && (_0x32e826 = _0x32e826[_0x2af440(0x3ba)](/^\/\//, _0x1bb139[_0x2af440(0x279)])[_0x2af440(0x3ba)](/-scaled\./, '.')[_0x2af440(0x38a)]('?')[-0x2b * -0x88 + 0x76 * -0x10 + -0xf78], _0x18f7ec[_0x2af440(0x3bd)](_0x32e826));
                                            });
                                            if (_0x423d88[_0x3236d0(0x6ef)](_0x18f7ec[_0x3236d0(0x6ba)], 0xf4 * -0x25 + -0x2 * 0x932 + 0x35a8))
                                                break;
                                        } catch (_0x10bc2d) {
                                            console[_0x3236d0(0x81a)](_0x3236d0(0xca5) + _0x3236d0(0x30e) + _0x3236d0(0x280) + _0x3ce36f);
                                        }
                                    }
                                    if (_0x423d88[_0x3236d0(0xc4a)](_0x18f7ec[_0x3236d0(0x6ba)], 0x25c9 + -0x96d * -0x2 + -0x38a3))
                                        throw new Error(_0x423d88[_0x3236d0(0x95d)]);
                                    const _0xdfc9d7 = new _0x4dd328();
                                    for (const [_0x2b2bd1, _0x282ead] of _0x18f7ec[_0x3236d0(0xcb8)]()) {
                                        try {
                                            const {data: _0x5d5482} = await axios[_0x3236d0(0x1df)](_0x282ead, {
                                                    'responseType': _0x423d88[_0x3236d0(0x930)],
                                                    'headers': { 'Referer': _0x423d88[_0x3236d0(0x63a)] },
                                                    'timeout': 0x4e20
                                                }), _0x524135 = _0x282ead[_0x3236d0(0x38a)]('.')[_0x3236d0(0x6ca)]()[_0x3236d0(0x709) + 'e']();
                                            _0xdfc9d7[_0x3236d0(0x456)](_0x423d88[_0x3236d0(0xcc8)](_0x2b2bd1, -0x175 * 0x19 + 0x1 * 0x53 + 0x75 * 0x4f)[_0x3236d0(0x892)]()[_0x3236d0(0xb9b)](-0x3 * 0x3df + 0x1ebe + -0x131e, '0') + '.' + _0x524135, _0x5d5482);
                                        } catch (_0x26aa72) {
                                            console[_0x3236d0(0x347)](_0x3236d0(0x7d8) + _0x3236d0(0xc1c) + _0x423d88[_0x3236d0(0xb9a)](_0x2b2bd1, 0x25df * -0x1 + -0x9 * 0xc2 + 0x2cb2) + ':', _0x26aa72[_0x3236d0(0x654)]);
                                            throw new Error(_0x423d88[_0x3236d0(0x9c1)]);
                                        }
                                    }
                                    return await _0xdfc9d7[_0x3236d0(0x442) + _0x3236d0(0x420)]({ 'type': _0x423d88[_0x3236d0(0xaa9)] });
                                } catch (_0x42df2d) {
                                    throw new Error(_0x42df2d[_0x3236d0(0x654)]);
                                }
                            }, _0x4e6aeb = Date[_0x965d42(0xcb7)](), _0x1505aa = await _0x423d88[_0x965d42(0xadd)](_0x3bfb51);
                        await _0x410b95[_0x965d42(0x25e) + 'e'](_0x54b0b3, {
                            'document': _0x1505aa,
                            'fileName': _0x5beff5 + _0x965d42(0x597) + _0x3a9391 + _0x965d42(0x92b),
                            'mimetype': _0x423d88[_0x965d42(0x619)],
                            'caption': '\x20' + _0x5beff5 + (_0x965d42(0x192) + 'o\x20') + _0x3a9391
                        }, { 'quoted': _0x13288e });
                    } catch (_0x57241e) {
                        _0x423d88[_0x965d42(0xb61)](_0x53d5b1, _0x965d42(0x41a) + _0x57241e[_0x965d42(0x654)] + (_0x965d42(0x940) + _0x965d42(0x1d4) + _0x965d42(0x998) + _0x965d42(0x637) + _0x965d42(0x1c9) + _0x965d42(0x1c8) + 'ne'));
                    }
                    break;
                }
            case _0x423d88[_0x965d42(0x829)]: {
                    try {
                        const _0x144ffd = _0x4d25d3[_0x965d42(0x924)](_0x423d88[_0x965d42(0xcc8)](_0x4396ff[_0x965d42(0x6ba)], 0x1510 + -0x1a51 + -0xa9 * -0x8))[_0x965d42(0xd12)]();
                        if (!_0x144ffd)
                            return _0x423d88[_0x965d42(0x67c)](_0x53d5b1, _0x423d88[_0x965d42(0xa11)]);
                        const _0x2b308e = _0x423d88[_0x965d42(0x21d)](encodeURIComponent, _0x144ffd), _0x212d72 = _0x965d42(0xac7) + _0x965d42(0xb15) + _0x965d42(0x2c2) + _0x965d42(0x9f9) + _0x2b308e + (_0x965d42(0xa34) + _0x965d42(0x1c4));
                        await _0x410b95[_0x965d42(0x25e) + 'e'](_0x54b0b3, { 'text': _0x965d42(0x76e) + _0x965d42(0x42c) + '\x20' + _0x144ffd + (_0x965d42(0x5fc) + _0x965d42(0x27e)) }, { 'quoted': _0x13288e });
                        const {data: _0x137624} = await axios[_0x965d42(0x1df)](_0x212d72, {
                                'headers': {
                                    'User-Agent': _0x423d88[_0x965d42(0x1e8)],
                                    'Referer': _0x423d88[_0x965d42(0x63a)]
                                },
                                'timeout': 0x3a98
                            }), _0x34e48c = cheerio[_0x965d42(0x6ab)](_0x137624), _0x5b3e59 = [];
                        _0x423d88[_0x965d42(0x9dd)](_0x34e48c, _0x423d88[_0x965d42(0x786)])[_0x965d42(0x746)]((_0x324a13, _0x133843) => {
                            const _0x111e8b = _0x965d42, _0x417007 = _0x423d88[_0x111e8b(0x69d)](_0x34e48c, _0x133843)[_0x111e8b(0xc52)](_0x423d88[_0x111e8b(0xabc)])[_0x111e8b(0x2ca)]()[_0x111e8b(0xd12)](), _0x296a8f = _0x423d88[_0x111e8b(0x69d)](_0x34e48c, _0x133843)[_0x111e8b(0xc52)](_0x423d88[_0x111e8b(0xabc)])[_0x111e8b(0x2e5)](_0x423d88[_0x111e8b(0x8d9)]), _0x26a986 = _0x423d88[_0x111e8b(0x9dd)](_0x34e48c, _0x133843)[_0x111e8b(0xc52)](_0x423d88[_0x111e8b(0xc65)])[_0x111e8b(0x2ca)]()[_0x111e8b(0xd12)](), _0x13b4f8 = _0x423d88[_0x111e8b(0x859)](_0x34e48c, _0x133843)[_0x111e8b(0xc52)](_0x423d88[_0x111e8b(0x615)])[_0x111e8b(0x2ca)]()[_0x111e8b(0xd12)]();
                            _0x423d88[_0x111e8b(0xb2b)](_0x417007, _0x296a8f) && _0x5b3e59[_0x111e8b(0x3bd)]({
                                'title': _0x417007,
                                'chapters': _0x423d88[_0x111e8b(0x732)](_0x26a986, _0x423d88[_0x111e8b(0xac8)]),
                                'status': _0x423d88[_0x111e8b(0x732)](_0x13b4f8, _0x423d88[_0x111e8b(0x4b8)])
                            });
                        });
                        if (_0x423d88[_0x965d42(0x758)](_0x5b3e59[_0x965d42(0x6ba)], 0x1 * 0x1d63 + -0x8 * 0x4bd + 0x885 * 0x1))
                            return _0x423d88[_0x965d42(0x859)](_0x53d5b1, _0x965d42(0xcd2) + _0x965d42(0xbc8) + _0x965d42(0x917) + _0x965d42(0x51a) + _0x144ffd + (_0x965d42(0x4f3) + _0x965d42(0xd7d) + _0x965d42(0x894) + _0x965d42(0x660) + _0x965d42(0xd52)));
                        let _0x2a2249 = _0x965d42(0x537) + _0x965d42(0x9fc) + '\x20' + _0x144ffd + '\x0a\x0a';
                        _0x5b3e59[_0x965d42(0x924)](0x40 * -0x44 + -0x332 + 0x1432, -0x53 * -0x6d + 0x16f7 * -0x1 + 0xc5b * -0x1)[_0x965d42(0x9e9)]((_0x4f1052, _0x45b072) => {
                            const _0x1e392d = _0x965d42;
                            _0x2a2249 += _0x423d88[_0x1e392d(0xb9a)](_0x423d88[_0x1e392d(0xcc8)](_0x1e392d(0x5cc) + _0x423d88[_0x1e392d(0xb32)](_0x45b072, 0xc39 + 0x18d * -0x5 + -0x477 * 0x1) + '.\x20' + _0x4f1052[_0x1e392d(0xc12)] + '*\x0a', _0x1e392d(0xd1a) + _0x4f1052[_0x1e392d(0x447)] + '\x0a'), _0x1e392d(0x367) + _0x4f1052[_0x1e392d(0x336)] + '\x0a\x0a');
                        }), _0x423d88[_0x965d42(0x6ef)](_0x5b3e59[_0x965d42(0x6ba)], 0x1 * 0x1e49 + 0x1e35 + -0x3c79) && (_0x2a2249 += _0x423d88[_0x965d42(0xb32)](_0x965d42(0xc9b) + _0x965d42(0xcf4) + _0x5b3e59[_0x965d42(0x6ba)] + (_0x965d42(0x21f) + 's\x0a'), _0x965d42(0x5f2) + _0x965d42(0x4a2) + _0x965d42(0x3a3) + _0x965d42(0xc8c) + _0x965d42(0xb98) + 'a')), await _0x410b95[_0x965d42(0x25e) + 'e'](_0x54b0b3, {
                            'text': _0x2a2249,
                            'linkPreview': {
                                'url': _0x212d72,
                                'title': _0x965d42(0x380) + _0x965d42(0x302) + _0x144ffd,
                                'description': _0x5b3e59[_0x965d42(0x6ba)] + (_0x965d42(0xc59) + _0x965d42(0x5f4))
                            }
                        }, { 'quoted': _0x13288e });
                    } catch (_0x560ea9) {
                        console[_0x965d42(0x347)](_0x423d88[_0x965d42(0x4ad)], _0x560ea9);
                        let _0x3d4f69 = _0x423d88[_0x965d42(0x25c)];
                        if (_0x560ea9[_0x965d42(0x190)])
                            _0x3d4f69 += _0x965d42(0x952) + _0x965d42(0xa95) + _0x560ea9[_0x965d42(0x190)][_0x965d42(0x336)] + ')';
                        else
                            _0x560ea9[_0x965d42(0x296)] ? _0x3d4f69 += _0x423d88[_0x965d42(0x5fe)] : _0x3d4f69 += _0x560ea9[_0x965d42(0x654)][_0x965d42(0xd16)](_0x423d88[_0x965d42(0x9ed)]) ? _0x423d88[_0x965d42(0xb8e)] : _0x423d88[_0x965d42(0x1c0)];
                        _0x423d88[_0x965d42(0x390)](_0x53d5b1, _0x423d88[_0x965d42(0x9eb)](_0x3d4f69, _0x423d88[_0x965d42(0x46c)]));
                    }
                    break;
                }
            case _0x423d88[_0x965d42(0x9a1)]: {
                    const _0x1f80a1 = _0x13288e[_0x965d42(0x45b)][_0x965d42(0x360) + 't'];
                    if (_0x13288e[_0x965d42(0x45b)][_0x965d42(0xa4e)][_0x965d42(0x422)](_0x423d88[_0x965d42(0xd03)])) {
                        const _0x3c6cee = await _0x410b95[_0x965d42(0x713) + _0x965d42(0x7dc)](_0x13288e[_0x965d42(0x45b)][_0x965d42(0xa4e)]);
                        if (!_0x42b0c8)
                            return _0x423d88[_0x965d42(0x9a7)](_0x53d5b1, _0x423d88[_0x965d42(0x9ba)]);
                    }
                    _0x423d88[_0x965d42(0x69d)](_0x53d5b1, _0x965d42(0x388) + _0x965d42(0x6e3) + _0x965d42(0x245) + _0x965d42(0x9f5) + _0x965d42(0x206) + _0x965d42(0x800) + _0x965d42(0x688) + _0x965d42(0x36c));
                    const _0x206a38 = async _0x32d40e => {
                            const _0x14eb7b = _0x965d42, _0x3f69c1 = {
                                    'TpOuh': function (_0x3c3a0d, _0x2fce54) {
                                        const _0x133eba = _0x497e;
                                        return _0x423d88[_0x133eba(0xc4a)](_0x3c3a0d, _0x2fce54);
                                    },
                                    'hxitG': function (_0x4c6974, _0x3ff73c) {
                                        const _0x1ee9d8 = _0x497e;
                                        return _0x423d88[_0x1ee9d8(0x915)](_0x4c6974, _0x3ff73c);
                                    },
                                    'elvUn': function (_0xa5fa21, _0x46066d) {
                                        const _0x25dc56 = _0x497e;
                                        return _0x423d88[_0x25dc56(0x1b6)](_0xa5fa21, _0x46066d);
                                    },
                                    'uZXZa': function (_0x347209, _0x109829) {
                                        const _0x2829be = _0x497e;
                                        return _0x423d88[_0x2829be(0xd23)](_0x347209, _0x109829);
                                    },
                                    'jdshO': _0x423d88[_0x14eb7b(0x348)]
                                };
                            return new Promise(_0x143043 => {
                                const _0x11ff7e = _0x14eb7b;
                                _0x410b95['ev']['on'](_0x3f69c1[_0x11ff7e(0x427)], async ({messages: _0x3cc7cd}) => {
                                    const _0x145fc4 = _0x11ff7e, _0x5cd92b = _0x3cc7cd[-0x564 + -0x43 * -0x86 + -0x3a * 0x83];
                                    if (_0x3f69c1[_0x145fc4(0x5dc)](_0x5cd92b[_0x145fc4(0x45b)][_0x145fc4(0x360) + 't'], _0x32d40e) && _0x5cd92b[_0x145fc4(0x654)]) {
                                        const _0xbf3b3e = _0x3f69c1[_0x145fc4(0xd64)](parseInt, _0x5cd92b[_0x145fc4(0x654)][_0x145fc4(0x557) + 'on'] || _0x5cd92b[_0x145fc4(0x654)][_0x145fc4(0xb64) + _0x145fc4(0xcba)][_0x145fc4(0x2ca)]);
                                        !_0x3f69c1[_0x145fc4(0xace)](isNaN, _0xbf3b3e) && _0x3f69c1[_0x145fc4(0xc73)](_0x143043, _0xbf3b3e);
                                    }
                                });
                            });
                        }, _0x2e32e8 = await _0x423d88[_0x965d42(0x9ce)](_0x206a38, _0x1f80a1);
                    if (_0x423d88[_0x965d42(0x532)](_0x2e32e8, -0x1 * 0x266b + 0x2c9 * -0xd + -0x5 * -0xeed) || _0x423d88[_0x965d42(0x6ef)](_0x2e32e8, -0x218f + -0xad * 0x20 + -0x1 * -0x3745))
                        return _0x410b95[_0x965d42(0x25e) + 'e'](_0x1f80a1, { 'text': _0x423d88[_0x965d42(0xbcd)] });
                    const _0x46b6da = _0x965d42(0xc10) + _0x965d42(0x87b) + _0x965d42(0xcdf) + _0x965d42(0x9ad) + _0x965d42(0xb40) + _0x965d42(0xc68) + _0x2e32e8 + _0x965d42(0xa68), _0x271ddc = {
                            'video': { 'url': _0x46b6da },
                            'caption': _0x423d88[_0x965d42(0x5eb)],
                            'footer': '' + _0x35260a,
                            'headerType': 0x4
                        };
                    await _0x410b95[_0x965d42(0x25e) + 'e'](_0x1f80a1, _0x271ddc);
                }
                break;
            case _0x423d88[_0x965d42(0x80a)]:
                _0x423d88[_0x965d42(0x9d6)](setTimeout, () => {
                    const _0x3a0d4b = _0x965d42;
                    _0x1bb139[_0x3a0d4b(0x949)](_0x51bc5e, _0x1bb139[_0x3a0d4b(0xd29)]);
                }, -0x17d6 + 0x1 * -0x9fe + 0x2300);
                if (!_0x23db31)
                    return _0x423d88[_0x965d42(0x72e)](_0x53d5b1, _0x423d88[_0x965d42(0xbc0)]);
                if (!_0x3d070f)
                    return _0x423d88[_0x965d42(0x612)](_0x53d5b1, _0x423d88[_0x965d42(0x18e)]);
                clearMsg = _0x423d88[_0x965d42(0x8fe)]((_0x965d42(0xa69) + _0x965d42(0xa69) + '\x0a')[_0x965d42(0x766)](0x1 * -0x267b + -0x4b1 * 0x5 + 0x1 * 0x3e86), _0x423d88[_0x965d42(0x8f2)]), clearFinal = _0x423d88[_0x965d42(0x28b)]((_0x965d42(0xa69) + _0x965d42(0xa69) + '\x0a')[_0x965d42(0x766)](0x124c * -0x1 + 0x2 * -0x7ab + 0x88e * 0x4), _0x423d88[_0x965d42(0x844)]), _0x423d88[_0x965d42(0xca0)](_0x53d5b1, _0x423d88[_0x965d42(0x386)]), _0x410b95[_0x965d42(0x76f) + _0x965d42(0x3b1)](_0x54b0b3, _0x423d88[_0x965d42(0xad7)]);
                const _0x35fdad = async (_0x17b1ad, _0x48da1e) => {
                    const _0x1506d5 = _0x965d42;
                    _0x1bb139[_0x1506d5(0x7b4)](setTimeout, async () => {
                        const _0xa264f1 = _0x1506d5;
                        await _0x410b95[_0xa264f1(0x25e) + 'e'](_0x54b0b3, { 'text': _0x48da1e });
                    }, _0x17b1ad);
                };
                _0x423d88[_0x965d42(0x9d6)](_0x35fdad, -0x1405 + -0x5 * 0x6bd + -0x24e * -0x19, clearMsg), _0x423d88[_0x965d42(0x431)](_0x35fdad, -0x58 * -0x2b + 0x1c68 + 0x3f0 * -0x7, clearMsg), _0x423d88[_0x965d42(0x431)](_0x35fdad, -0x6c2 + 0x1 * -0xb23 + 0x2d3d * 0x1, clearMsg), _0x423d88[_0x965d42(0x9d6)](_0x35fdad, -0x4c58 + 0xb17 + 0x6851, clearMsg), _0x423d88[_0x965d42(0x9d6)](_0x35fdad, -0x1140 + 0x2287 * -0x2 + 0x8916, clearMsg), _0x423d88[_0x965d42(0xc47)](_0x35fdad, -0x1 * -0x16db + -0x2 * 0x671 + 0x3487, clearMsg), _0x423d88[_0x965d42(0x9d6)](_0x35fdad, 0xe9e * -0x3 + -0x4d25 * 0x1 + 0x270b * 0x5, clearMsg), _0x423d88[_0x965d42(0xc47)](_0x35fdad, -0x35 * 0x1c1 + 0x3f29 + -0x12 * -0x66e, clearMsg), _0x423d88[_0x965d42(0x5b7)](_0x35fdad, -0x1203 * 0x3 + -0x2a36 * 0x2 + 0xec1d, clearMsg), _0x423d88[_0x965d42(0x9d6)](setTimeout, async () => {
                    const _0x5373bd = _0x965d42;
                    await _0x410b95[_0x5373bd(0x25e) + 'e'](_0x54b0b3, { 'text': clearFinal }), _0x410b95[_0x5373bd(0x76f) + _0x5373bd(0x3b1)](_0x54b0b3, _0x1bb139[_0x5373bd(0xd53)]), _0x1bb139[_0x5373bd(0x949)](_0x53d5b1, _0x1bb139[_0x5373bd(0x5f0)]);
                }, -0x7cbb + -0x85d9 + -0x177c4 * -0x1);
                break;
            case '18': {
                    if (!_0x23db31)
                        return _0x423d88[_0x965d42(0xd23)](_0x53d5b1, _0x423d88[_0x965d42(0x921)]);
                    if (!_0x3d070f)
                        return _0x423d88[_0x965d42(0x390)](_0x53d5b1, _0x423d88[_0x965d42(0xb2e)]);
                    const _0x3ad158 = _0x4d25d3[_0x965d42(0xd12)]()[_0x965d42(0x38a)](/\s+/)[_0x965d42(0x924)](0x356 + 0x1 * -0x22c7 + 0x1f72);
                    if (_0x423d88[_0x965d42(0x532)](_0x3ad158[_0x965d42(0x6ba)], -0x2408 + -0x16 * -0xff + -0x1 * -0xe1f))
                        return _0x423d88[_0x965d42(0x5a0)](_0x53d5b1, _0x965d42(0x767) + _0x965d42(0x641) + _0x965d42(0x64f) + '\x20*' + _0x4396ff + (_0x965d42(0x60c) + _0x965d42(0xce1)) + _0x4396ff + (_0x965d42(0xb46) + _0x965d42(0x77a)));
                    const _0x4f0ee3 = _0x3ad158[-0x11 * 0x7 + 0x5c5 + 0xc2 * -0x7];
                    if (![
                            '0',
                            '1'
                        ][_0x965d42(0xd16)](_0x4f0ee3))
                        return _0x423d88[_0x965d42(0x1f2)](_0x53d5b1, _0x965d42(0x384) + _0x965d42(0x834) + _0x965d42(0xca4) + _0x965d42(0x9c3) + _0x965d42(0x1fc) + _0x965d42(0x5bb) + _0x965d42(0xb56));
                    _0x423d88[_0x965d42(0x9ce)](_0x491b0b, _0x54b0b3);
                    const _0x49b68f = _0x423d88[_0x965d42(0x7b8)](_0xdd9c52);
                    return _0x49b68f[_0x54b0b3][_0x965d42(0x52a)] = _0x423d88[_0x965d42(0x193)](_0x4f0ee3, '1'), _0x423d88[_0x965d42(0x8bf)](_0x403c70, _0x49b68f), _0x423d88[_0x965d42(0x9cf)](_0x53d5b1, _0x423d88[_0x965d42(0x8fe)](_0x423d88[_0x965d42(0x900)](_0x965d42(0x8f3) + '8\x20' + (_0x423d88[_0x965d42(0x826)](_0x4f0ee3, '1') ? _0x423d88[_0x965d42(0x3b9)] : _0x423d88[_0x965d42(0x733)]) + '*\x0a', _0x965d42(0xcd0) + _0x3845fe[_0x965d42(0xa0a)] + '*\x0a'), _0x965d42(0x8de) + (_0x423d88[_0x965d42(0xd39)](_0x4f0ee3, '1') ? _0x423d88[_0x965d42(0xd2a)] : _0x423d88[_0x965d42(0x9e4)])));
                }
            case _0x423d88[_0x965d42(0x76a)]:
            case _0x423d88[_0x965d42(0x421)]: {
                    if (!_0x23db31)
                        return _0x423d88[_0x965d42(0x935)](_0x53d5b1, _0x423d88[_0x965d42(0x921)]);
                    if (!_0x3d070f)
                        return _0x423d88[_0x965d42(0xabb)](_0x53d5b1, _0x423d88[_0x965d42(0x27f)]);
                    const _0x4ac9d1 = _0x4d25d3[_0x965d42(0xd12)]()[_0x965d42(0x38a)](/\s+/)[_0x965d42(0x924)](0x1 * 0x2327 + -0x1 * 0x445 + -0x1ee1);
                    if (_0x423d88[_0x965d42(0x823)](_0x4ac9d1[_0x965d42(0x6ba)], 0x1f55 * 0x1 + 0xc9f + 0x1 * -0x2bf3))
                        return _0x423d88[_0x965d42(0x5c4)](_0x53d5b1, _0x965d42(0x767) + _0x965d42(0x641) + _0x965d42(0x64f) + '\x20*' + _0x4396ff + (_0x965d42(0x2ad) + _0x965d42(0x226) + _0x965d42(0xce1)) + _0x4396ff + (_0x965d42(0x2ad) + _0x965d42(0xb24) + _0x965d42(0x77a)));
                    const _0x10b7ba = _0x4ac9d1[0x1 * -0xc46 + 0xf82 + -0x33c];
                    if (![
                            '0',
                            '1'
                        ][_0x965d42(0xd16)](_0x10b7ba))
                        return _0x423d88[_0x965d42(0x9cf)](_0x53d5b1, _0x965d42(0x384) + _0x965d42(0x834) + _0x965d42(0xca4) + _0x965d42(0x9c3) + _0x965d42(0x1fc) + _0x965d42(0x5bb) + _0x965d42(0xb56));
                    _0x423d88[_0x965d42(0x7ca)](_0x491b0b, _0x54b0b3);
                    const _0x2070e1 = _0x423d88[_0x965d42(0x521)](_0xdd9c52);
                    return _0x2070e1[_0x54b0b3][_0x965d42(0xd67)] = _0x423d88[_0x965d42(0xaca)](_0x10b7ba, '1'), _0x423d88[_0x965d42(0x1a6)](_0x403c70, _0x2070e1), _0x423d88[_0x965d42(0x931)](_0x53d5b1, _0x423d88[_0x965d42(0xba7)](_0x423d88[_0x965d42(0x28b)](_0x965d42(0xb54) + _0x965d42(0x398) + '\x20' + (_0x423d88[_0x965d42(0x83f)](_0x10b7ba, '1') ? _0x423d88[_0x965d42(0x3b9)] : _0x423d88[_0x965d42(0x733)]) + '*\x0a', _0x965d42(0xcd0) + _0x3845fe[_0x965d42(0xa0a)] + '*\x0a'), _0x965d42(0x8de) + (_0x423d88[_0x965d42(0x82f)](_0x10b7ba, '1') ? _0x423d88[_0x965d42(0x905)] : _0x423d88[_0x965d42(0x626)])));
                }
            case _0x423d88[_0x965d42(0xbb8)]:
            case _0x423d88[_0x965d42(0x897)]: {
                    if (!_0x23db31)
                        return _0x423d88[_0x965d42(0x9cf)](_0x53d5b1, _0x423d88[_0x965d42(0x779)]);
                    if (!_0x3d070f)
                        return _0x423d88[_0x965d42(0x28e)](_0x53d5b1, _0x423d88[_0x965d42(0x5a1)]);
                    const _0x1dc015 = _0x4d25d3[_0x965d42(0x38a)]('\x20')[0x34 * -0x33 + -0x1f7 * 0x8 + 0x1a15];
                    if (!_0x1dc015)
                        return _0x423d88[_0x965d42(0x932)](_0x53d5b1, _0x965d42(0x842) + _0x965d42(0xcdc) + _0x965d42(0x87e) + _0x384405 + (_0x965d42(0xb92) + _0x965d42(0x19b)) + _0x384405 + '\x20' + (_0x423d88[_0x965d42(0x826)](_0x384405, _0x423d88[_0x965d42(0xbb8)]) ? _0x423d88[_0x965d42(0x203)] : _0x423d88[_0x965d42(0x850)]) + '_');
                    const _0x245b62 = _0x423d88[_0x965d42(0x6a1)](_0x4850d2, _0x1dc015);
                    if (!_0x245b62)
                        return _0x423d88[_0x965d42(0x7b0)](_0x53d5b1, _0x965d42(0xbfd) + _0x965d42(0x343) + _0x965d42(0xb1f) + _0x965d42(0xb89) + _0x965d42(0x8f0) + (_0x423d88[_0x965d42(0x830)](_0x384405, _0x423d88[_0x965d42(0xbb8)]) ? _0x423d88[_0x965d42(0x182)] : _0x423d88[_0x965d42(0x185)]) + '_');
                    try {
                        await _0x423d88[_0x965d42(0x989)](_0x26ae04, _0x54b0b3, _0x384405, _0x245b62[_0x965d42(0x5fd)], _0x245b62[_0x965d42(0x789)]);
                        const _0x34407e = _0x423d88[_0x965d42(0x82f)](_0x384405, _0x423d88[_0x965d42(0xbb8)]) ? '' : '';
                        _0x423d88[_0x965d42(0x931)](_0x53d5b1, _0x423d88[_0x965d42(0x22c)](_0x423d88[_0x965d42(0xbe2)](_0x34407e + (_0x965d42(0x3fa) + 'i\x20') + _0x384405[_0x965d42(0xbd2) + 'e']() + '*\x20', _0x965d42(0x9f4) + _0x245b62[_0x965d42(0x892)]() + _0x965d42(0x673)), _0x965d42(0x34d) + _0x965d42(0x2cf) + _0x965d42(0x5a4) + _0x965d42(0xd3d) + _0x965d42(0x2c4)));
                    } catch (_0x1f69b0) {
                        console[_0x965d42(0x347)](_0x423d88[_0x965d42(0x584)], _0x1f69b0), _0x423d88[_0x965d42(0x9ce)](_0x53d5b1, _0x423d88[_0x965d42(0x540)]);
                    }
                    break;
                }
            case _0x423d88[_0x965d42(0x318)]: {
                    _0x423d88[_0x965d42(0xbbc)](_0x51bc5e, '');
                    if (!_0x23db31)
                        return _0x423d88[_0x965d42(0xab4)](_0x53d5b1, _0x423d88[_0x965d42(0x921)]);
                    if (!_0x506714)
                        return _0x423d88[_0x965d42(0xa4a)](_0x53d5b1, _0x423d88[_0x965d42(0x815)]);
                    const {
                            id: _0xe59e98,
                            participants: _0xdebfdf
                        } = _0x3845fe, _0x480097 = _0xdebfdf[_0x965d42(0x94d)](_0x5a96d0 => !_0x2c9235[_0x965d42(0xd16)](_0x5a96d0['id']));
                    if (_0x423d88[_0x965d42(0xce0)](_0x480097[_0x965d42(0x6ba)], 0x2088 + -0x99e + -0x7 * 0x346))
                        return _0x423d88[_0x965d42(0x3c0)](_0x53d5b1, _0x423d88[_0x965d42(0x574)]);
                    try {
                        for (const _0x3fb298 of _0x480097) {
                            await _0x410b95[_0x965d42(0xb20) + _0x965d42(0x9b5) + _0x965d42(0xca6)](_0xe59e98, [_0x3fb298['id']], _0x423d88[_0x965d42(0x798)]), await _0x423d88[_0x965d42(0x787)](delay, 0x2 * -0xa78 + 0x20 * 0x119 + -0xa48);
                        }
                        await _0x423d88[_0x965d42(0x7c2)](_0x53d5b1, _0x423d88[_0x965d42(0x600)]);
                    } catch (_0x10d91e) {
                        console[_0x965d42(0x347)](_0x423d88[_0x965d42(0x945)], _0x10d91e), await _0x423d88[_0x965d42(0xd0e)](_0x53d5b1, _0x423d88[_0x965d42(0x240)]);
                    }
                    break;
                }
            case _0x423d88[_0x965d42(0xc77)]: {
                    if (_0x13288e[_0x965d42(0x45b)][_0x965d42(0xa4e)][_0x965d42(0x422)](_0x423d88[_0x965d42(0xa8b)])) {
                        const _0x5eb653 = _0x423d88[_0x965d42(0x56f)](_0x2590ba, await _0x410b95[_0x965d42(0x713) + _0x965d42(0x7dc)](_0x13288e[_0x965d42(0x45b)][_0x965d42(0xa4e)])[_0x965d42(0x360) + 'ts']);
                        if (!_0x5eb653[_0x965d42(0xd16)](_0x17cc35))
                            return _0x410b95[_0x965d42(0x25e) + 'e'](_0x13288e[_0x965d42(0x45b)][_0x965d42(0xa4e)], { 'text': _0x965d42(0xd7c) + _0x965d42(0x50d) + _0x965d42(0x922) + _0x965d42(0xba3) + _0x965d42(0x395) });
                    }
                    const _0x949054 = _0x4d25d3[_0x965d42(0x38a)]('\x20')[_0x965d42(0x924)](0x832 + 0x1 * 0xe21 + -0x1652);
                    if (_0x423d88[_0x965d42(0xa59)](_0x949054[_0x965d42(0x6ba)], 0x921 + 0x31c + -0xc3d) || !_0x949054[0x24fa * 0x1 + -0x17d + 0x719 * -0x5][_0x965d42(0x87f)]('@'))
                        return _0x410b95[_0x965d42(0x25e) + 'e'](_0x13288e[_0x965d42(0x45b)][_0x965d42(0xa4e)], { 'text': _0x423d88[_0x965d42(0x55e)] });
                    const _0x5be3ca = _0x949054[-0x1 * -0x25bb + 0x1 * -0x1dad + -0x80e][_0x965d42(0x3ba)]('@', '');
                    try {
                        return await _0x410b95[_0x965d42(0xb20) + _0x965d42(0x9b5) + _0x965d42(0xca6)](_0x13288e[_0x965d42(0x45b)][_0x965d42(0xa4e)], [_0x5be3ca + (_0x965d42(0x3fe) + _0x965d42(0x377))], _0x423d88[_0x965d42(0x798)]), _0x410b95[_0x965d42(0x25e) + 'e'](_0x13288e[_0x965d42(0x45b)][_0x965d42(0xa4e)], { 'text': _0x965d42(0xbad) + _0x949054[-0x1060 + -0x505 * -0x6 + 0xdbe * -0x1] + (_0x965d42(0x685) + _0x965d42(0x43c) + _0x965d42(0x866) + _0x965d42(0x487) + _0x965d42(0x2cc) + _0x965d42(0xc45)) });
                    } catch (_0x10bdcf) {
                    }
                    break;
                }
            case _0x423d88[_0x965d42(0x6f7)]:
            case _0x423d88[_0x965d42(0xb81)]:
            case _0x423d88[_0x965d42(0xa39)]: {
                    if (!_0x423d88[_0x965d42(0x774)](_0x3cc52f, _0x54b0b3))
                        return _0x423d88[_0x965d42(0x21d)](_0x53d5b1, _0x423d88[_0x965d42(0xb55)](_0x423d88[_0x965d42(0x923)], _0x965d42(0xae1) + _0x965d42(0x839) + _0x965d42(0x862) + _0x4396ff + _0x965d42(0xa26)));
                    if (!_0x23db31)
                        return _0x423d88[_0x965d42(0x911)](_0x53d5b1, _0x423d88[_0x965d42(0x554)]);
                    const _0x28b45e = _0x13288e[_0x965d42(0x654)][_0x965d42(0xb64) + _0x965d42(0xcba)]?.[_0x965d42(0x514) + 'o']?.[_0x965d42(0x1cd) + 'id'] || [], _0x46ea30 = _0x13288e[_0x965d42(0x654)][_0x965d42(0xb64) + _0x965d42(0xcba)]?.[_0x965d42(0x514) + 'o']?.[_0x965d42(0x360) + 't'], _0x1f9ff7 = _0x28b45e[-0x270d * -0x1 + -0x6f9 + -0x2014] || _0x46ea30 || _0x17cc35, _0x2d0de9 = [
                            '*' + _0x5c1b27 + (_0x965d42(0x5ee) + _0x965d42(0x5c7)) + _0x1f9ff7[_0x965d42(0x38a)]('@')[-0x2 * 0x6c4 + 0x13a * -0x4 + 0x5 * 0x3b0] + _0x965d42(0x50e),
                            _0x965d42(0x2e2) + _0x5c1b27 + (_0x965d42(0x918) + '*@') + _0x1f9ff7[_0x965d42(0x38a)]('@')[-0x13ef + -0x5 * 0x74a + 0x11b * 0x33] + '*',
                            _0x965d42(0x389) + _0x5c1b27 + _0x965d42(0xb50) + _0x1f9ff7[_0x965d42(0x38a)]('@')[0x1afe + 0xdd9 + -0x3 * 0xd9d] + '*',
                            _0x965d42(0x919) + _0x965d42(0x896) + _0x5c1b27 + (_0x965d42(0x2db) + '@') + _0x1f9ff7[_0x965d42(0x38a)]('@')[0xe8c + 0x3 * -0x151 + -0xa99] + '*'
                        ];
                    try {
                        const _0x3a7872 = _0x423d88[_0x965d42(0xd6c)], _0x44d640 = fs[_0x965d42(0x3b5) + 'nc'](_0x3a7872);
                        await _0x410b95[_0x965d42(0x25e) + 'e'](_0x54b0b3, {
                            'image': _0x44d640,
                            'caption': _0x2d0de9[Math[_0x965d42(0x49e)](_0x423d88[_0x965d42(0x967)](Math[_0x965d42(0xc7d)](), _0x2d0de9[_0x965d42(0x6ba)]))],
                            'mentions': [_0x1f9ff7],
                            'jpegThumbnail': _0x44d640
                        }, { 'quoted': _0x13288e });
                    } catch (_0x2cbd28) {
                        console[_0x965d42(0x347)](_0x423d88[_0x965d42(0x2d3)], _0x2cbd28), await _0x410b95[_0x965d42(0x25e) + 'e'](_0x54b0b3, {
                            'text': _0x2d0de9[Math[_0x965d42(0x49e)](_0x423d88[_0x965d42(0x579)](Math[_0x965d42(0xc7d)](), _0x2d0de9[_0x965d42(0x6ba)]))],
                            'mentions': [_0x1f9ff7]
                        }, { 'quoted': _0x13288e });
                    }
                    break;
                }
            case _0x423d88[_0x965d42(0x235)]: {
                    if (!_0x423d88[_0x965d42(0x1a6)](_0x3cc52f, _0x54b0b3))
                        return _0x423d88[_0x965d42(0x911)](_0x53d5b1, _0x965d42(0x3e5) + _0x965d42(0xcf0) + _0x965d42(0x214) + _0x965d42(0x2ad) + _0x965d42(0xc69) + _0x965d42(0xa02) + _0x965d42(0xa78) + _0x965d42(0xb21) + _0x4396ff + _0x965d42(0xa26));
                    if (!_0x23db31)
                        return _0x423d88[_0x965d42(0x7a3)](_0x53d5b1, _0x423d88[_0x965d42(0x554)]);
                    const _0x43fcc2 = _0x27029f[_0x965d42(0xa2c)](() => Math[_0x965d42(0xc7d)]() - (-0xb97 + -0x110f + -0x13 * -0x182 + 0.5)), _0x4e9dbb = _0x43fcc2[_0x965d42(0x924)](-0x1f7e * 0x1 + 0x1652 * 0x1 + 0x92c, -0x1 * -0x1d78 + 0xb51 + 0x4 * -0xa31), _0x3e10d9 = _0x4e9dbb[_0x965d42(0x21e)]((_0x31bf8d, _0xba5a2c) => _0xba5a2c + (-0x1c98 + 0x1906 + -0x131 * -0x3) + _0x965d42(0xc06) + _0x31bf8d['id'][_0x965d42(0x38a)]('@')[0x1b02 + 0xd * -0x79 + -0x14dd] + _0x965d42(0x2e4) + Math[_0x965d42(0x49e)](Math[_0x965d42(0xc7d)]() * (0x151 * 0x10 + -0x14bd + -0x2b) + (0xeed * 0x1 + -0x6 * -0x65d + -0x351a)) + 'cm')[_0x965d42(0x706)]('\x0a');
                    await _0x410b95[_0x965d42(0x25e) + 'e'](_0x54b0b3, {
                        'text': _0x423d88[_0x965d42(0xab2)](_0x965d42(0x68c) + _0x965d42(0x41c) + _0x965d42(0xb25), _0x965d42(0x1ee) + _0x965d42(0x8c7) + _0x965d42(0x9bc) + Math[_0x965d42(0x49e)](_0x423d88[_0x965d42(0x635)](_0x423d88[_0x965d42(0x4b2)](Math[_0x965d42(0xc7d)](), -0x222e + 0x1fb * 0x11 + 0x92), 0xf72 + -0x2464 + 0x14fc)) + _0x965d42(0xa21) + _0x3e10d9),
                        'mentions': _0x4e9dbb[_0x965d42(0x21e)](_0x1ff795 => _0x1ff795['id'])
                    }, { 'quoted': _0x13288e });
                    break;
                }
            case _0x423d88[_0x965d42(0x60a)]: {
                    if (!_0x423d88[_0x965d42(0xd23)](_0x3cc52f, _0x54b0b3))
                        return _0x423d88[_0x965d42(0x67c)](_0x53d5b1, _0x965d42(0xc44) + _0x965d42(0x8ca) + _0x965d42(0x7b7) + _0x965d42(0x696) + _0x4396ff + _0x965d42(0xa26));
                    if (!_0x23db31)
                        return _0x423d88[_0x965d42(0x21d)](_0x53d5b1, _0x423d88[_0x965d42(0x56a)]);
                    const _0x1acaa2 = _0x27029f[_0x965d42(0xa2c)](() => Math[_0x965d42(0xc7d)]() - (0xadd * -0x1 + 0x1826 * -0x1 + -0x2303 * -0x1 + 0.5))[_0x965d42(0x924)](0x1 * -0x219 + 0xa7 * -0x7 + 0x6aa, 0x17b8 + 0x7ca * -0x1 + -0xfe9 * 0x1)[_0x965d42(0x21e)]((_0x36b575, _0xefeb37) => _0xefeb37 + (-0xc9 * -0x1d + 0x16b * -0x9 + 0xd * -0xc5) + _0x965d42(0x851) + _0x36b575['id'][_0x965d42(0x38a)]('@')[0x1 * 0xdfa + 0x174b + -0x2545] + _0x965d42(0x2e4) + [
                        _0x965d42(0x252) + _0x965d42(0x72d),
                        _0x965d42(0x4a1),
                        _0x965d42(0x449) + 'e'
                    ][Math[_0x965d42(0x49e)](Math[_0x965d42(0xc7d)]() * (0x1 * -0x1feb + 0x21af * -0x1 + -0x5f7 * -0xb))]);
                    await _0x410b95[_0x965d42(0x25e) + 'e'](_0x54b0b3, {
                        'text': _0x423d88[_0x965d42(0x833)](_0x965d42(0x305) + _0x965d42(0xc8d) + _0x965d42(0x698), _0x965d42(0x68b) + _0x965d42(0x419) + _0x965d42(0xab0) + Math[_0x965d42(0xc7d)]()[_0x965d42(0x91e)](0x1 * -0x11a + -0x1f31 + -0x1 * -0x204d) + _0x965d42(0xd62) + _0x1acaa2[_0x965d42(0x706)]('\x0a')),
                        'mentions': _0x1acaa2[_0x965d42(0x21e)](_0x11e1e6 => _0x11e1e6['id'])
                    }, { 'quoted': _0x13288e });
                    break;
                }
            case _0x423d88[_0x965d42(0xd01)]: {
                    if (!_0x423d88[_0x965d42(0x3e0)](_0x3cc52f, _0x54b0b3))
                        return _0x423d88[_0x965d42(0xd6a)](_0x53d5b1, _0x965d42(0x90a) + _0x965d42(0x260) + _0x965d42(0x1de) + '\x20*' + _0x4396ff + _0x965d42(0xa26));
                    if (!_0x23db31)
                        return _0x423d88[_0x965d42(0x44d)](_0x53d5b1, _0x423d88[_0x965d42(0x68e)]);
                    const _0x29e901 = _0x27029f[_0x965d42(0xa2c)](() => Math[_0x965d42(0xc7d)]() - (-0x220 + -0x836 * -0x1 + -0x13 * 0x52 + 0.5))[_0x965d42(0x924)](-0x2 * 0xa70 + -0x24da + 0x39ba, -0x5 * 0x497 + 0x1 * -0x1a0 + 0x1898 * 0x1)[_0x965d42(0x21e)]((_0x1cb954, _0x1a3318) => _0x1a3318 + (0x210f + -0x2b + -0x20e3) + _0x965d42(0xd74) + _0x1cb954['id'][_0x965d42(0x38a)]('@')[-0xe5a + -0x2dd + 0x1137] + _0x965d42(0x2e4) + [
                        _0x965d42(0x3ed),
                        _0x965d42(0x523) + _0x965d42(0xabf),
                        _0x965d42(0xaed) + _0x965d42(0x954),
                        _0x965d42(0x267) + _0x965d42(0xa20),
                        _0x965d42(0x40c) + _0x965d42(0xcc2) + 'ca'
                    ][Math[_0x965d42(0x49e)](Math[_0x965d42(0xc7d)]() * (-0x1bfd + 0x28 * -0x40 + 0x2602))]);
                    await _0x410b95[_0x965d42(0x25e) + 'e'](_0x54b0b3, {
                        'text': _0x423d88[_0x965d42(0x2c6)](_0x965d42(0x1f6) + _0x965d42(0x94f) + _0x965d42(0xb57), _0x965d42(0x264) + _0x965d42(0x23c) + Math[_0x965d42(0x49e)](_0x423d88[_0x965d42(0x4dd)](Math[_0x965d42(0xc7d)](), 0x25 + 0x2d0 * 0x2 + -0x561)) + _0x965d42(0xd62) + _0x29e901[_0x965d42(0x706)]('\x0a')),
                        'mentions': _0x29e901[_0x965d42(0x21e)](_0x20ae62 => _0x20ae62[_0x965d42(0x38a)]('@')[0x22de + 0x65 + -0x2342 * 0x1])
                    }, { 'quoted': _0x13288e });
                    break;
                }
            case _0x423d88[_0x965d42(0xcf6)]: {
                    if (!_0x23db31)
                        return _0x423d88[_0x965d42(0xa80)](_0x53d5b1, _0x423d88[_0x965d42(0x6b6)]);
                    const _0x2ad35e = _0x27029f[_0x965d42(0xa2c)](() => Math[_0x965d42(0xc7d)]() - (-0xeec + -0x1543 * 0x1 + 0x242f + 0.5))[_0x965d42(0x924)](0x1f2d + 0x1e11 + -0x3d3e, -0xff2 + 0x93 * -0x43 + 0x3670)[_0x965d42(0x21e)]((_0xf6b642, _0x546bb7) => {
                        const _0x49f67f = _0x965d42, _0x2339ed = Math[_0x49f67f(0x49e)](_0x1bb139[_0x49f67f(0xbf3)](Math[_0x49f67f(0xc7d)](), -0x16ee + -0x2472 + 0x2 * 0x1de2));
                        return _0x1bb139[_0x49f67f(0x2cb)](_0x546bb7, 0xaf3 + 0x1 * -0x175f + 0xc6d * 0x1) + _0x49f67f(0xbb5) + _0xf6b642['id'][_0x49f67f(0x38a)]('@')[-0x1622 * 0x1 + 0x3f * -0x36 + 0x236c] + _0x49f67f(0x526) + _0x2339ed + '\x20[' + ''[_0x49f67f(0x766)](_0x1bb139[_0x49f67f(0xc71)](_0x2339ed, -0x1b16 + -0x1 * -0x20b5 + 0x1 * -0x595)) + ''[_0x49f67f(0x766)](_0x1bb139[_0x49f67f(0x91a)](0x1a95 * -0x1 + -0xbb6 * 0x2 + -0x22d * -0x17, _0x1bb139[_0x49f67f(0xc71)](_0x2339ed, -0x3 * -0x7ec + 0x255e + -0x3d18))) + ']';
                    });
                    await _0x410b95[_0x965d42(0x25e) + 'e'](_0x54b0b3, {
                        'text': _0x423d88[_0x965d42(0xd79)](_0x965d42(0x8c6) + _0x965d42(0x31a), _0x965d42(0x44c) + _0x965d42(0x9d7) + _0x965d42(0x2d1) + Math[_0x965d42(0x49e)](_0x423d88[_0x965d42(0xbc5)](Math[_0x965d42(0xc7d)](), -0x904 * -0x3 + 0xd7 + 0x7 * -0x36d)) + _0x965d42(0x26e) + _0x2ad35e[_0x965d42(0x706)]('\x0a')),
                        'mentions': _0x2ad35e[_0x965d42(0x21e)](_0x26f10e => _0x26f10e['id'])
                    }, { 'quoted': _0x13288e });
                    break;
                }
            case _0x423d88[_0x965d42(0x899)]: {
                    if (!_0x423d88[_0x965d42(0x3d2)](_0x3cc52f, _0x54b0b3))
                        return _0x423d88[_0x965d42(0x683)](_0x53d5b1, _0x423d88[_0x965d42(0x680)](_0x423d88[_0x965d42(0x923)], _0x965d42(0xae1) + _0x965d42(0x839) + _0x965d42(0x862) + _0x4396ff + _0x965d42(0xa26)));
                    try {
                        const _0x4340a8 = await _0x410b95[_0x965d42(0x25e) + 'e'](_0x54b0b3, { 'text': _0x423d88[_0x965d42(0x2c6)](_0x423d88[_0x965d42(0x6a3)](_0x965d42(0x58a) + _0x965d42(0x4ce) + _0x965d42(0xacd), _0x965d42(0x31c)), String[_0x965d42(0x818) + _0x965d42(0x556)](-0x1 * -0xf07 + -0x21 * 0x22a + 0x5ee3) + (_0x965d42(0x1b8) + '6!')) }, { 'quoted': _0x13288e }), _0x1a46a5 = [
                                String[_0x965d42(0x818) + _0x965d42(0x556)](-0x4830 + 0x1e1a + 0x5096),
                                String[_0x965d42(0x818) + _0x965d42(0x556)](0x1e9e + 0x3 * 0x463 + -0x1 * 0x546),
                                String[_0x965d42(0x818) + _0x965d42(0x556)](-0x1eb * 0x25 + -0x14e3 * 0x1 + 0x825c),
                                String[_0x965d42(0x818) + _0x965d42(0x556)](-0x137e * 0x3 + -0x2b57 * 0x1 + 0x8c54),
                                String[_0x965d42(0x818) + _0x965d42(0x556)](-0x48b + 0x66 * 0xb7 + -0x1ddb),
                                String[_0x965d42(0x818) + _0x965d42(0x556)](0x3dc4 + -0x3 * 0x93e + 0x47b)
                            ];
                        let _0x4c8730;
                        for (let _0x56b052 = -0xd * -0x97 + -0x1112 + 0x967; _0x423d88[_0x965d42(0x8ab)](_0x56b052, -0xdd9 * 0x1 + 0x977 * -0x1 + 0x1755); _0x56b052++) {
                            _0x4c8730 = _0x1a46a5[Math[_0x965d42(0x49e)](_0x423d88[_0x965d42(0x5cf)](Math[_0x965d42(0xc7d)](), 0x481 + -0x1 * 0xfcc + 0xb51))], await _0x410b95[_0x965d42(0xb52) + 'ge'](_0x54b0b3, {
                                'protocolMessage': {
                                    'key': _0x4340a8[_0x965d42(0x45b)],
                                    'type': 0xe,
                                    'editedMessage': { 'conversation': _0x423d88[_0x965d42(0x8fe)](_0x423d88[_0x965d42(0x294)](_0x965d42(0x670) + _0x965d42(0x50c), '' + ''[_0x965d42(0x766)](_0x56b052) + ''[_0x965d42(0x766)](_0x423d88[_0x965d42(0x330)](-0x354 * 0x2 + 0x62f * 0x1 + -0x2b * -0x3, _0x56b052)) + '\x0a'), _0x4c8730) }
                                }
                            }, {}), await new Promise(_0x32c263 => setTimeout(_0x32c263, 0x5f * 0x22 + -0x17 * 0x1f + -0x8a9 + _0x56b052 * (0x86b * 0x3 + 0x59 * -0x57 + -0x6a * -0xd)));
                        }
                        const _0x501b26 = _0x1a46a5[Math[_0x965d42(0x49e)](_0x423d88[_0x965d42(0xd2d)](Math[_0x965d42(0xc7d)](), 0x1487 + 0x5 * -0x477 + 0x1d2))];
                        await _0x410b95[_0x965d42(0x25e) + 'e'](_0x54b0b3, { 'text': _0x423d88[_0x965d42(0x3bc)](_0x423d88[_0x965d42(0x966)](_0x965d42(0x929) + _0x965d42(0x38e) + '\x0a', _0x501b26 + (_0x965d42(0x4d6) + '*') + _0x423d88[_0x965d42(0x8c3)](_0x1a46a5[_0x965d42(0xa3d)](_0x501b26), -0xc2f * 0x2 + -0x25a * 0xa + 0x2fe3) + '*\x0a'), _0x965d42(0x219) + _0x965d42(0x99b) + '') }, { 'quoted': _0x13288e });
                    } catch (_0x24535b) {
                        console[_0x965d42(0x347)](_0x423d88[_0x965d42(0xcc6)], _0x24535b), _0x423d88[_0x965d42(0x915)](_0x53d5b1, _0x423d88[_0x965d42(0xc0b)]);
                    }
                    break;
                }
            case _0x423d88[_0x965d42(0x70b)]: {
                    if (!_0x423d88[_0x965d42(0x3c0)](_0x3cc52f, _0x54b0b3))
                        return _0x423d88[_0x965d42(0x962)](_0x53d5b1, _0x423d88[_0x965d42(0xb7a)](_0x423d88[_0x965d42(0x923)], _0x965d42(0xae1) + _0x965d42(0x839) + _0x965d42(0x862) + _0x4396ff + _0x965d42(0xa26)));
                    const _0x18f1fd = _0x27029f[_0x965d42(0xa2c)](() => Math[_0x965d42(0xc7d)]() - (0x22df + -0x4fd * 0x1 + -0x1de2 + 0.5))[_0x965d42(0x924)](0xa9a + 0x103f * 0x2 + -0x2b18, -0x1529 + 0x1 * -0x229 + -0x5 * -0x4ab)[_0x965d42(0x21e)]((_0x42c9ef, _0x58f6b0) => _0x58f6b0 + (0xb8b * -0x2 + 0x3 * 0x74f + 0x1 * 0x12a) + _0x965d42(0x7ff) + _0x42c9ef['id'][_0x965d42(0x38a)]('@')[0x1bd5 + -0x1616 * -0x1 + -0x31eb] + _0x965d42(0x2e4) + ([
                        _0x965d42(0x19d),
                        _0x965d42(0xc0c) + 'AX',
                        _0x965d42(0x9cb) + _0x965d42(0x444)
                    ][_0x58f6b0] || _0x965d42(0x2d2) + _0x965d42(0x48b) + _0x965d42(0x979)));
                    _0x423d88[_0x965d42(0xa5d)](_0x53d5b1, _0x965d42(0xbbe) + _0x965d42(0xc8b) + _0x965d42(0x22d) + _0x18f1fd[_0x965d42(0x706)]('\x0a'));
                    break;
                }
            case _0x423d88[_0x965d42(0xaaa)]: {
                    if (!_0x423d88[_0x965d42(0x8f5)](_0x3cc52f, _0x54b0b3))
                        return _0x423d88[_0x965d42(0xa4a)](_0x53d5b1, _0x423d88[_0x965d42(0x335)](_0x423d88[_0x965d42(0x923)], _0x965d42(0xae1) + _0x965d42(0x839) + _0x965d42(0x862) + _0x4396ff + _0x965d42(0xa26)));
                    const _0x413c25 = _0x27029f[_0x965d42(0x924)](-0x185d + -0xcb0 + 0x250d, -0x119a + -0x1 * -0x1999 + -0x3fd * 0x2)[_0x965d42(0x21e)](_0x124103 => ({
                            'name': '@' + _0x124103['id'][_0x965d42(0x38a)]('@')[0xd16 + 0x1 * -0x94d + 0x33 * -0x13],
                            'money': Math[_0x965d42(0x49e)](Math[_0x965d42(0xc7d)]() * (0xa3106 + -0x16574 + 0x676ae))
                        }))[_0x965d42(0xa2c)]((_0xa6940a, _0x7d221c) => _0x7d221c[_0x965d42(0xcce)] - _0xa6940a[_0x965d42(0xcce)]), _0x4aae65 = _0x413c25[_0x965d42(0x21e)]((_0x587a6b, _0x59cfd1) => _0x59cfd1 + (0xcff + -0x1bdd * -0x1 + 0x1 * -0x28db) + _0x965d42(0xbb6) + _0x587a6b[_0x965d42(0xb85)] + _0x965d42(0xc4e) + _0x587a6b[_0x965d42(0xcce)][_0x965d42(0x9c7) + _0x965d42(0x588)]() + _0x965d42(0x3b0))[_0x965d42(0x706)]('\x0a');
                    _0x423d88[_0x965d42(0xa85)](_0x53d5b1, _0x965d42(0x2f2) + _0x965d42(0x39f) + _0x965d42(0x3df) + _0x4aae65);
                    break;
                }
            case _0x423d88[_0x965d42(0x5df)]: {
                    if (!_0x423d88[_0x965d42(0xd44)](_0x3cc52f, _0x54b0b3))
                        return _0x423d88[_0x965d42(0x612)](_0x53d5b1, _0x423d88[_0x965d42(0x70c)](_0x423d88[_0x965d42(0x923)], _0x965d42(0xae1) + _0x965d42(0x839) + _0x965d42(0x862) + _0x4396ff + _0x965d42(0xa26)));
                    const _0x3a8393 = _0x27029f[_0x965d42(0x21e)](_0x38cae5 => _0x38cae5['id']), _0x1bd172 = _0x3a8393[Math[_0x965d42(0x49e)](_0x423d88[_0x965d42(0x4dd)](Math[_0x965d42(0xc7d)](), _0x3a8393[_0x965d42(0x6ba)]))];
                    await _0x410b95[_0x965d42(0x25e) + 'e'](_0x54b0b3, {
                        'text': _0x965d42(0x255) + _0x965d42(0xcca) + _0x965d42(0xb83) + _0x965d42(0xbdd) + _0x965d42(0x3a9) + _0x965d42(0x414) + _0x1bd172[_0x965d42(0x38a)]('@')[-0xdb + -0x4e0 + 0x5bb] + _0x965d42(0x548) + [
                            _0x423d88[_0x965d42(0x84a)],
                            _0x423d88[_0x965d42(0x413)],
                            _0x423d88[_0x965d42(0x396)]
                        ][Math[_0x965d42(0x49e)](_0x423d88[_0x965d42(0x3f8)](Math[_0x965d42(0xc7d)](), -0x163d + -0x39c + 0x19dc * 0x1))] + '\x22',
                        'mentions': [_0x1bd172]
                    }, { 'quoted': _0x13288e });
                    break;
                }
            case _0x423d88[_0x965d42(0x541)]: {
                    if (!_0x423d88[_0x965d42(0x3f3)](_0x3cc52f, _0x54b0b3))
                        return _0x423d88[_0x965d42(0x69d)](_0x53d5b1, _0x423d88[_0x965d42(0x4b1)](_0x423d88[_0x965d42(0x923)], _0x965d42(0xae1) + _0x965d42(0x839) + _0x965d42(0x862) + _0x4396ff + _0x965d42(0xa26)));
                    if (!_0x23db31)
                        return _0x423d88[_0x965d42(0x3f3)](_0x53d5b1, _0x423d88[_0x965d42(0x54a)]);
                    const _0x28e895 = _0x27029f[_0x965d42(0xa2c)](() => Math[_0x965d42(0xc7d)]() - (-0x1 * 0x17f0 + 0x1c6 + 0x162a + 0.5))[_0x965d42(0x924)](-0x1183 + 0x50 * 0x24 + 0x643, -0x2 * -0x4d5 + 0x1 * -0x1473 + 0x2 * 0x567)[_0x965d42(0x21e)]((_0x1d5203, _0x3456ee) => {
                        const _0x52aa52 = _0x965d42, _0x3c6fd0 = [
                                _0x423d88[_0x52aa52(0x31d)],
                                _0x423d88[_0x52aa52(0x571)],
                                _0x423d88[_0x52aa52(0x687)],
                                _0x423d88[_0x52aa52(0x95a)],
                                _0x423d88[_0x52aa52(0x50f)]
                            ];
                        return _0x423d88[_0x52aa52(0xc07)](_0x3456ee, 0x3 * -0xb29 + 0x23a * -0x11 + 0x4756) + _0x52aa52(0x799) + _0x1d5203['id'][_0x52aa52(0x38a)]('@')[-0xb1b + -0x10c1 + 0x1bdc] + _0x52aa52(0x2e4) + (_0x3c6fd0[_0x3456ee] || _0x423d88[_0x52aa52(0xb6e)]);
                    });
                    await _0x410b95[_0x965d42(0x25e) + 'e'](_0x54b0b3, {
                        'text': _0x423d88[_0x965d42(0x7e6)](_0x965d42(0xd6f) + _0x965d42(0xb59) + _0x965d42(0x383) + _0x28e895[_0x965d42(0x706)]('\x0a') + '\x0a\x0a', _0x965d42(0x95c) + _0x965d42(0x2ce) + _0x965d42(0x38b) + _0x965d42(0x8c4) + _0x965d42(0xaad)),
                        'mentions': _0x27029f[_0x965d42(0x21e)](_0x516d28 => _0x516d28['id'])
                    }, { 'quoted': _0x13288e });
                    break;
                }
            case _0x423d88[_0x965d42(0xa08)]:
                _0x423d88[_0x965d42(0x358)](_0x328f5d, _0x423d88[_0x965d42(0x645)]);
                break;
            case _0x423d88[_0x965d42(0x1c6)]:
                _0x423d88[_0x965d42(0xd7b)](_0x53d5b1, _0x423d88[_0x965d42(0xd28)]);
                break;
            case 'rr': {
                    if (!_0x506714)
                        return _0x423d88[_0x965d42(0x9cf)](_0x53d5b1, _0x423d88[_0x965d42(0x3f6)]);
                    const _0x51b15d = [
                            _0x423d88[_0x965d42(0x2c7)],
                            _0x423d88[_0x965d42(0x283)],
                            _0x423d88[_0x965d42(0x298)],
                            _0x423d88[_0x965d42(0x18b)],
                            _0x423d88[_0x965d42(0x8c0)],
                            _0x35260a + (_0x965d42(0xa2e) + _0x965d42(0x74f))
                        ], {key: _0x37432a} = await _0x410b95[_0x965d42(0x25e) + 'e'](_0x54b0b3, { 'text': _0x423d88[_0x965d42(0x8d7)] }, { 'quoted': _0x13288e });
                    for (let _0x2f160f = 0x12 * 0xa2 + -0x6c9 + -0x189 * 0x3; _0x423d88[_0x965d42(0xa1c)](_0x2f160f, _0x51b15d[_0x965d42(0x6ba)]); _0x2f160f++) {
                        await _0x423d88[_0x965d42(0x932)](delay, -0x119 * 0x2 + 0x8f * 0x1c + -0x98a), await _0x410b95[_0x965d42(0x25e) + 'e'](_0x54b0b3, {
                            'text': _0x51b15d[_0x2f160f],
                            'edit': _0x37432a
                        });
                    }
                    _0x423d88[_0x965d42(0xb74)](setTimeout, () => {
                        const _0xec3d00 = _0x965d42;
                        process[_0xec3d00(0x710)](-0x18cb + -0x2c1 + 0x56 * 0x52);
                    }, 0x2 * -0x42f + 0x21 * -0x97 + 0x1fbd);
                    break;
                }
            case _0x423d88[_0x965d42(0x61b)]: {
                    if (!_0x506714)
                        return _0x423d88[_0x965d42(0xa80)](_0x53d5b1, _0x423d88[_0x965d42(0x369)]);
                    const _0x87b6ea = _0x4d25d3[_0x965d42(0x924)](_0x423d88[_0x965d42(0x22c)](_0x4396ff[_0x965d42(0x6ba)], _0x423d88[_0x965d42(0x61b)][_0x965d42(0x6ba)]))[_0x965d42(0xd12)]();
                    if (!_0x87b6ea)
                        return _0x423d88[_0x965d42(0x1d7)](_0x53d5b1, _0x965d42(0x354) + _0x965d42(0x61e) + _0x965d42(0x8ac) + _0x4396ff + (_0x965d42(0x695) + 'o\x20') + _0x470700);
                    try {
                        return await _0x410b95[_0x965d42(0x586) + _0x965d42(0x7cf)](_0x87b6ea), _0x1d2b19[_0x965d42(0xb1d)] = _0x87b6ea, fs[_0x965d42(0xaf8) + _0x965d42(0x420)](_0x423d88[_0x965d42(0x23e)], JSON[_0x965d42(0x564)](_0x1d2b19, null, 0x1 * 0xd37 + 0x1 * -0xb42 + -0x1f3)), _0x423d88[_0x965d42(0x1b6)](_0x53d5b1, _0x965d42(0x92d) + _0x965d42(0x5d9) + _0x965d42(0xa0b) + _0x87b6ea + (_0x965d42(0x9c4) + _0x965d42(0xd1f) + _0x965d42(0xb4f)));
                    } catch (_0xed2cb7) {
                        return console[_0x965d42(0x347)](_0x423d88[_0x965d42(0x644)], _0xed2cb7), _0x423d88[_0x965d42(0x1b4)](_0x53d5b1, _0x423d88[_0x965d42(0xbf0)]);
                    }
                    break;
                }
            case _0x423d88[_0x965d42(0x6eb)]: {
                    if (!_0x506714)
                        return _0x423d88[_0x965d42(0x7a3)](_0x53d5b1, _0x423d88[_0x965d42(0x369)]);
                    const _0x191506 = _0x4d25d3[_0x965d42(0x924)](_0x423d88[_0x965d42(0x502)](_0x4396ff[_0x965d42(0x6ba)], _0x423d88[_0x965d42(0x6eb)][_0x965d42(0x6ba)]))[_0x965d42(0xd12)]();
                    if (!_0x191506)
                        return _0x423d88[_0x965d42(0x8bf)](_0x53d5b1, _0x965d42(0x354) + _0x965d42(0x61e) + _0x965d42(0x8ac) + _0x4396ff + _0x965d42(0x71d) + _0x35260a);
                    try {
                        return await _0x410b95[_0x965d42(0x586) + _0x965d42(0x7cf)](_0x191506), _0x1d2b19[_0x965d42(0x24d)] = _0x191506, fs[_0x965d42(0xaf8) + _0x965d42(0x420)](_0x423d88[_0x965d42(0x23e)], JSON[_0x965d42(0x564)](_0x1d2b19, null, -0x1 * -0x18aa + 0x132 * 0x17 + -0x3426)), _0x423d88[_0x965d42(0x962)](_0x53d5b1, _0x965d42(0x92d) + _0x965d42(0x244) + _0x965d42(0x916) + '\x20' + _0x191506 + (_0x965d42(0x9c4) + _0x965d42(0xd1f) + _0x965d42(0xb4f)));
                    } catch (_0x47b87f) {
                        return console[_0x965d42(0x347)](_0x423d88[_0x965d42(0x644)], _0x47b87f), _0x423d88[_0x965d42(0x4d3)](_0x53d5b1, _0x423d88[_0x965d42(0xc3d)]);
                    }
                    break;
                }
            case _0x423d88[_0x965d42(0xd4a)]: {
                    if (!_0x506714)
                        return _0x423d88[_0x965d42(0x85a)](_0x53d5b1, _0x423d88[_0x965d42(0xd4d)]);
                    const _0x54ff92 = _0x4d25d3[_0x965d42(0x38a)]('\x20')[0x1fbc + -0xbee + -0x13cd];
                    if (!_0x54ff92)
                        return _0x423d88[_0x965d42(0xbea)](_0x53d5b1, _0x965d42(0x354) + _0x965d42(0xa37) + _0x965d42(0x964) + 'o\x20' + _0x4396ff + (_0x965d42(0x6b3) + '&'));
                    _0x1d2b19[_0x965d42(0x6b9)] = _0x54ff92, fs[_0x965d42(0xaf8) + _0x965d42(0x420)](_0x423d88[_0x965d42(0x23e)], JSON[_0x965d42(0x564)](_0x1d2b19, null, -0xf23 + 0x26 * -0xf7 + -0x3 * -0x1145));
                    return _0x423d88[_0x965d42(0xbea)](_0x53d5b1, _0x965d42(0xaf9) + _0x965d42(0x481) + _0x965d42(0x50a) + _0x54ff92 + (_0x965d42(0x4f8) + _0x965d42(0xc50) + _0x965d42(0xa5c) + _0x965d42(0x59b)));
                    break;
                }
            case _0x423d88[_0x965d42(0x852)]:
                if (!_0x506714)
                    return _0x423d88[_0x965d42(0x56f)](_0x53d5b1, _0x423d88[_0x965d42(0x196)]);
                const _0x1d21cb = _0x13288e[_0x965d42(0x654)]?.[_0x965d42(0xb64) + _0x965d42(0xcba)]?.[_0x965d42(0x514) + 'o']?.[_0x965d42(0x1cd) + 'id'], _0x1d2a28 = _0x1d21cb?.[0xd3 * 0x2b + -0x19b7 + -0x2 * 0x4dd] || _0x4d25d3[_0x965d42(0x38a)]('\x20')[-0x172 + 0x142b + -0x12b8]?.[_0x965d42(0x3ba)](/[^0-9]/g, '');
                if (!_0x1d2a28)
                    return _0x423d88[_0x965d42(0x67c)](_0x53d5b1, _0x423d88[_0x965d42(0x701)]);
                const _0x4b0281 = _0x1d2a28[_0x965d42(0xd16)]('@') ? _0x1d2a28 : _0x1d2a28 + (_0x965d42(0x3fe) + _0x965d42(0x377));
                try {
                    const _0x3678ac = _0x423d88[_0x965d42(0x7b8)](_0x71b6c5);
                    if (_0x3678ac[_0x965d42(0xd16)](_0x4b0281))
                        return _0x423d88[_0x965d42(0x590)](_0x53d5b1, _0x965d42(0x5e9) + _0x4b0281[_0x965d42(0x38a)]('@')[0x1507 + 0x82 + -0x95 * 0x25] + _0x965d42(0x1a1));
                    _0x3678ac[_0x965d42(0x3bd)](_0x4b0281), _0x423d88[_0x965d42(0x28e)](_0x3703fd, _0x3678ac), _0x423d88[_0x965d42(0xad6)](_0x53d5b1, _0x965d42(0x320) + _0x4b0281[_0x965d42(0x38a)]('@')[0xb8 + 0x50 * 0x61 + -0x7c2 * 0x4] + (_0x965d42(0x652) + _0x965d42(0xd4c) + '!'));
                } catch (_0x4e9014) {
                    console[_0x965d42(0x347)](_0x4e9014), _0x423d88[_0x965d42(0x390)](_0x53d5b1, _0x423d88[_0x965d42(0xac5)]);
                }
                break;
            case _0x423d88[_0x965d42(0x63b)]:
                if (!_0x506714)
                    return _0x423d88[_0x965d42(0x29d)](_0x53d5b1, _0x423d88[_0x965d42(0x196)]);
                const _0x441a3a = _0x13288e[_0x965d42(0x654)]?.[_0x965d42(0xb64) + _0x965d42(0xcba)]?.[_0x965d42(0x514) + 'o']?.[_0x965d42(0x1cd) + 'id'], _0x2dd41f = _0x441a3a?.[0x87b + -0x5b * -0x4c + 0xd * -0x2bb] || _0x4d25d3[_0x965d42(0x38a)]('\x20')[-0x23c4 + -0x240 + 0x2605 * 0x1]?.[_0x965d42(0x3ba)](/[^0-9]/g, '');
                if (!_0x2dd41f)
                    return _0x423d88[_0x965d42(0x29d)](_0x53d5b1, _0x423d88[_0x965d42(0x701)]);
                const _0x582dfe = _0x2dd41f[_0x965d42(0xd16)]('@') ? _0x2dd41f : _0x2dd41f + (_0x965d42(0x3fe) + _0x965d42(0x377));
                try {
                    let _0x4a6a9f = _0x423d88[_0x965d42(0xadd)](_0x71b6c5);
                    if (!_0x4a6a9f[_0x965d42(0xd16)](_0x582dfe))
                        return _0x423d88[_0x965d42(0xc2c)](_0x53d5b1, _0x965d42(0x5e9) + _0x582dfe[_0x965d42(0x38a)]('@')[0x95 * 0x38 + 0x1 * -0x16fb + 0x6b * -0x17] + (_0x965d42(0x664) + _0x965d42(0x1b0) + _0x965d42(0x9ec)));
                    _0x4a6a9f = _0x4a6a9f[_0x965d42(0x94d)](_0x5e7c14 => _0x5e7c14 !== _0x582dfe), _0x423d88[_0x965d42(0x7ca)](_0x3703fd, _0x4a6a9f), _0x423d88[_0x965d42(0x582)](_0x53d5b1, _0x965d42(0x320) + _0x582dfe[_0x965d42(0x38a)]('@')[-0x446 * 0x3 + -0x2093 + 0x2d65] + (_0x965d42(0x2a3) + _0x965d42(0x440)));
                } catch (_0x38f2a5) {
                    console[_0x965d42(0x347)](_0x38f2a5), _0x423d88[_0x965d42(0x6a1)](_0x53d5b1, _0x423d88[_0x965d42(0x6e5)]);
                }
                break;
            case _0x423d88[_0x965d42(0xc53)]:
            case _0x423d88[_0x965d42(0x426)]:
            case _0x423d88[_0x965d42(0x248)]:
                if (!_0x506714)
                    return _0x423d88[_0x965d42(0xa5d)](_0x53d5b1, _0x423d88[_0x965d42(0x196)]);
                const _0x36024e = _0x423d88[_0x965d42(0x521)](_0x71b6c5), _0xc7b3ef = _0x36024e[_0x965d42(0x21e)](_0x568f9f => _0x965d42(0x6cc) + _0x568f9f[_0x965d42(0x38a)]('@')[0x21ce + 0x3 * -0x6d3 + -0xd55])[_0x965d42(0x706)]('\x0a');
                _0x423d88[_0x965d42(0x683)](_0x53d5b1, _0x965d42(0xb8a) + _0x965d42(0x9bf) + _0x423d88[_0x965d42(0x732)](_0xc7b3ef, _0x423d88[_0x965d42(0x272)]));
                break;
            case _0x423d88[_0x965d42(0x81c)]: {
                    _0x423d88[_0x965d42(0x859)](_0x51bc5e, ''), await _0x423d88[_0x965d42(0x1b6)](_0x1b425e, -0x11b1 + -0x16ac + -0x1 * -0x2be1);
                    const _0x4ceea2 = _0x4d25d3[_0x965d42(0x924)](_0x4396ff[_0x965d42(0x6ba)])[_0x965d42(0xd12)]()[_0x965d42(0x38a)](/ +/)[_0x965d42(0x924)](0x21f8 + 0x20 * -0x34 + -0x1b77)[_0x965d42(0x706)]('\x20');
                    if (!_0x4ceea2)
                        return _0x423d88[_0x965d42(0xd5c)](_0x53d5b1, _0x423d88[_0x965d42(0x9db)]);
                    try {
                        _0x423d88[_0x965d42(0xabb)](_0x53d5b1, _0x965d42(0xa8f) + _0x965d42(0x512) + _0x965d42(0xd2e) + _0x965d42(0x4c3) + '*');
                        const _0x3098bf = _0x88766c + _0x965d42(0x491) + _0x5597e4 + _0x965d42(0x64a) + _0x423d88[_0x965d42(0x935)](encodeURIComponent, _0x4ceea2), _0xf9f119 = await axios[_0x965d42(0x1df)](_0x3098bf, {
                                'responseType': _0x423d88[_0x965d42(0x1e4)],
                                'timeout': 0x927c0
                            });
                        if (!_0xf9f119[_0x965d42(0xa63)] || !_0xf9f119[_0x965d42(0xa63)][_0x965d42(0x524)])
                            throw new Error(_0x423d88[_0x965d42(0x319)]);
                        const _0x3cf949 = _0xf9f119[_0x965d42(0xa63)][_0x965d42(0x524)];
                        await _0x410b95[_0x965d42(0x25e) + 'e'](_0x54b0b3, {
                            'video': { 'url': _0x3cf949 },
                            'mimetype': _0x423d88[_0x965d42(0x760)],
                            'caption': _0x965d42(0xad4) + _0x4ceea2
                        });
                    } catch (_0xa10dd1) {
                        console[_0x965d42(0x347)](_0x423d88[_0x965d42(0x84c)], _0xa10dd1);
                        const _0x2caa80 = {
                            'ECONNABORTED': _0x423d88[_0x965d42(0x763)],
                            'ENOTFOUND': _0x423d88[_0x965d42(0xbd7)],
                            'ERR_BAD_RESPONSE': _0x423d88[_0x965d42(0x9f3)],
                            'default': '\x20' + (_0xa10dd1[_0x965d42(0x654)] || _0x423d88[_0x965d42(0xaf2)])
                        };
                        _0x423d88[_0x965d42(0xb61)](_0x53d5b1, _0x2caa80[_0xa10dd1[_0x965d42(0x24b)]] || _0x2caa80[_0x965d42(0xcb6)]);
                    }
                    break;
                }
            case _0x423d88[_0x965d42(0x854)]:
            case _0x423d88[_0x965d42(0x72b)]: {
                    try {
                        _0x423d88[_0x965d42(0xaac)](_0x51bc5e, ''), await _0x423d88[_0x965d42(0x29d)](_0x1b425e, 0xa1 * 0x2e + 0x25 * -0x3e + -0x1204);
                        const _0x370759 = _0x203abc[_0x965d42(0x38a)]('\x20')[_0x965d42(0x924)](-0x1067 + 0xc7f + 0x3e9), _0x34acba = _0x370759[_0x965d42(0x706)]('\x20')[_0x965d42(0xd12)]();
                        if (!_0x34acba)
                            return _0x423d88[_0x965d42(0x859)](_0x53d5b1, _0x965d42(0x40a) + _0x965d42(0x453) + _0x4396ff + (_0x965d42(0x761) + _0x965d42(0x578) + _0x965d42(0xb65) + '\x20') + _0x4396ff + (_0x965d42(0x594) + _0x965d42(0x7a0) + _0x965d42(0xc60) + _0x965d42(0xa7d)));
                        const _0x5cb04f = await _0x423d88[_0x965d42(0xa5d)](_0x53d5b1, _0x423d88[_0x965d42(0x77f)]), _0x693c9 = /https?:\/\/(?:www\.|vm\.|vt\.|m\.)?tiktok\.com\/(?:t\/\w+|@[\w.-]+\/video\/\d+|\w+\/video\/\d+|\S+)/i;
                        if (!_0x693c9[_0x965d42(0x9cd)](_0x34acba))
                            return await _0x410b95[_0x965d42(0x25e) + 'e'](_0x54b0b3, { 'delete': _0x5cb04f[_0x965d42(0x45b)] }), _0x423d88[_0x965d42(0x64e)](_0x53d5b1, _0x423d88[_0x965d42(0x8fe)](_0x423d88[_0x965d42(0xc07)](_0x423d88[_0x965d42(0x858)](_0x423d88[_0x965d42(0x8dd)], _0x423d88[_0x965d42(0xa70)]), _0x423d88[_0x965d42(0x960)]), _0x423d88[_0x965d42(0x246)]));
                        const _0x1356ba = _0x88766c + _0x965d42(0x994) + _0x5597e4 + _0x965d42(0x64a) + _0x423d88[_0x965d42(0xac0)](encodeURIComponent, _0x34acba), _0x479d03 = await _0x423d88[_0x965d42(0xad6)](axios, {
                                'method': _0x423d88[_0x965d42(0x4b9)],
                                'url': _0x1356ba,
                                'headers': {
                                    'User-Agent': _0x423d88[_0x965d42(0x5d6)],
                                    'Accept-Encoding': _0x423d88[_0x965d42(0x47c)],
                                    'Referer': _0x423d88[_0x965d42(0x6f5)]
                                },
                                'timeout': 0x249f0
                            });
                        if (!_0x479d03[_0x965d42(0xa63)]?.[_0x965d42(0xc28)] || _0x423d88[_0x965d42(0x34e)](typeof _0x479d03[_0x965d42(0xa63)][_0x965d42(0xc28)], _0x423d88[_0x965d42(0xc70)]))
                            throw new Error(_0x479d03[_0x965d42(0xa63)]?.[_0x965d42(0xa67)] || _0x423d88[_0x965d42(0xc8a)]);
                        await _0x410b95[_0x965d42(0x25e) + 'e'](_0x54b0b3, {
                            'video': { 'url': _0x479d03[_0x965d42(0xa63)][_0x965d42(0xc28)] },
                            'mimetype': _0x423d88[_0x965d42(0x760)],
                            'caption': _0x423d88[_0x965d42(0x34a)](_0x423d88[_0x965d42(0x34a)](_0x423d88[_0x965d42(0x338)](_0x965d42(0x473) + (_0x479d03[_0x965d42(0xa63)][_0x965d42(0x356)] || _0x423d88[_0x965d42(0x411)]) + '*\x0a', _0x965d42(0x785) + (_0x479d03[_0x965d42(0xa63)][_0x965d42(0xa12)] || _0x423d88[_0x965d42(0x2d7)]) + '\x0a'), '\x20' + (_0x479d03[_0x965d42(0xa63)][_0x965d42(0x3ee)] || _0x423d88[_0x965d42(0x26b)]) + '\x0a'), _0x965d42(0x89d) + _0x34acba),
                            'mentions': [_0x17cc35]
                        }), await _0x410b95[_0x965d42(0x25e) + 'e'](_0x54b0b3, { 'delete': _0x5cb04f[_0x965d42(0x45b)] }), _0x423d88[_0x965d42(0xa77)](_0x51bc5e, '');
                    } catch (_0x37c1ed) {
                        console[_0x965d42(0x347)](chalk[_0x965d42(0x625)](_0x423d88[_0x965d42(0x754)]), _0x37c1ed);
                        const _0x5538b0 = {
                                'ECONNABORTED': _0x423d88[_0x965d42(0x3db)],
                                'ENOTFOUND': _0x423d88[_0x965d42(0x5c2)],
                                'ECONNRESET': _0x423d88[_0x965d42(0x23d)],
                                'ERR_BAD_REQUEST': _0x423d88[_0x965d42(0x52d)],
                                'ERR_BAD_RESPONSE': _0x423d88[_0x965d42(0x53e)],
                                'default': _0x965d42(0xb8c) + (_0x37c1ed[_0x965d42(0x654)] || _0x423d88[_0x965d42(0x9e8)])
                            }, _0x43cef6 = _0x5538b0[_0x37c1ed[_0x965d42(0x24b)]] || _0x5538b0[_0x965d42(0xcb6)];
                        _0x423d88[_0x965d42(0x1b6)](_0x53d5b1, _0x43cef6), _0x423d88[_0x965d42(0x4a8)](_0x51bc5e, ''), processingMsg && await _0x410b95[_0x965d42(0x25e) + 'e'](_0x54b0b3, { 'delete': processingMsg[_0x965d42(0x45b)] });
                    }
                    break;
                }
            case _0x423d88[_0x965d42(0x3c4)]: {
                    _0x423d88[_0x965d42(0x9b1)](_0x51bc5e, _0x423d88[_0x965d42(0x7ad)]), await _0x423d88[_0x965d42(0xd44)](_0x1b425e, -0x2422 + 0x7 * 0x549 + -0x7 * -0x61);
                    const _0x22567c = _0x4d25d3[_0x965d42(0x924)](_0x4396ff[_0x965d42(0x6ba)])[_0x965d42(0xd12)]()[_0x965d42(0x38a)](/ +/)[_0x965d42(0x924)](0x8fa + 0xf93 + -0x188c)[_0x965d42(0x706)]('\x20');
                    if (!_0x22567c)
                        return _0x423d88[_0x965d42(0xabb)](_0x53d5b1, _0x423d88[_0x965d42(0x8c9)]);
                    try {
                        _0x423d88[_0x965d42(0x78f)](_0x53d5b1, _0x423d88[_0x965d42(0xcc4)]);
                        const _0x50ecef = _0x88766c + _0x965d42(0xc96) + _0x5597e4 + (_0x965d42(0xcbf) + _0x965d42(0x7f2)) + _0x423d88[_0x965d42(0x975)](encodeURIComponent, _0x22567c), _0x3c1a4d = await axios[_0x965d42(0x1df)](_0x50ecef, { 'timeout': 0x16e360 }), {
                                videoData: _0x295971,
                                audioLink: _0x158993
                            } = _0x3c1a4d[_0x965d42(0xa63)];
                        if (_0x423d88[_0x965d42(0x732)](!_0x295971, !_0x158993))
                            throw new Error(_0x423d88[_0x965d42(0xc02)]);
                        let _0x55fbc3 = null;
                        if (_0x295971[_0x965d42(0x2c1)])
                            try {
                                const _0x1aecf7 = await axios[_0x965d42(0x1df)](_0x295971[_0x965d42(0x2c1)], {
                                    'responseType': _0x423d88[_0x965d42(0x930)],
                                    'timeout': 0xf4240
                                });
                                _0x55fbc3 = path[_0x965d42(0x706)](TEMP_DIRECTORY, _0x965d42(0xaa1) + Date[_0x965d42(0xcb7)]() + _0x965d42(0x48f)), await fs[_0x965d42(0x49f)][_0x965d42(0xc1e)](_0x55fbc3, _0x1aecf7[_0x965d42(0xa63)]), await _0x410b95[_0x965d42(0x25e) + 'e'](_0x54b0b3, {
                                    'image': { 'url': _0x55fbc3 },
                                    'caption': _0x423d88[_0x965d42(0x966)](_0x423d88[_0x965d42(0xab2)](_0x965d42(0x98a) + _0x295971[_0x965d42(0x356)] + '*', _0x965d42(0x2e7) + _0x965d42(0xd59) + _0x423d88[_0x965d42(0x4f4)](_0x255276, _0x295971[_0x965d42(0x8c8) + _0x965d42(0x2a8)])), _0x965d42(0x983) + _0x965d42(0x764) + _0x423d88[_0x965d42(0xc2c)](_0x3db25f, _0x295971[_0x965d42(0x66b) + _0x965d42(0x2f5)])),
                                    'mentions': [_0x54b0b3]
                                });
                            } catch (_0x18179d) {
                                console[_0x965d42(0x81a)](_0x423d88[_0x965d42(0xc23)], _0x18179d[_0x965d42(0x654)]), _0x423d88[_0x965d42(0x582)](_0x53d5b1, _0x423d88[_0x965d42(0x79e)](_0x423d88[_0x965d42(0x338)](_0x965d42(0x98a) + _0x295971[_0x965d42(0x356)] + '*\x0a', _0x965d42(0x469) + ':\x20' + _0x423d88[_0x965d42(0x441)](_0x255276, _0x295971[_0x965d42(0x8c8) + _0x965d42(0x2a8)]) + '\x0a'), _0x965d42(0x4cb) + _0x965d42(0x5a7) + _0x423d88[_0x965d42(0x2b6)](_0x3db25f, _0x295971[_0x965d42(0x66b) + _0x965d42(0x2f5)])));
                            }
                        const _0x3e4f93 = await axios[_0x965d42(0x1df)](_0x158993, {
                                'responseType': _0x423d88[_0x965d42(0x930)],
                                'timeout': 0x2dc6c0
                            }), _0x6a765e = path[_0x965d42(0x706)](TEMP_DIRECTORY, _0x965d42(0x1d0) + Date[_0x965d42(0xcb7)]() + _0x965d42(0x3e3));
                        await fs[_0x965d42(0x49f)][_0x965d42(0xc1e)](_0x6a765e, _0x3e4f93[_0x965d42(0xa63)]), await _0x410b95[_0x965d42(0x25e) + 'e'](_0x54b0b3, {
                            'audio': { 'url': _0x6a765e },
                            'mimetype': _0x423d88[_0x965d42(0x91c)],
                            'contextInfo': { 'mentionedJid': [_0x54b0b3] }
                        }), _0x423d88[_0x965d42(0xc47)](setTimeout, async () => {
                            const _0x13bf64 = _0x965d42, _0x166fc9 = [];
                            if (_0x55fbc3)
                                _0x166fc9[_0x13bf64(0x3bd)](fs[_0x13bf64(0x49f)][_0x13bf64(0x329)](_0x55fbc3));
                            _0x166fc9[_0x13bf64(0x3bd)](fs[_0x13bf64(0x49f)][_0x13bf64(0x329)](_0x6a765e)), Promise[_0x13bf64(0x261)](_0x166fc9)[_0x13bf64(0x726)](_0x3bdd3a => _0x3bdd3a[_0x13bf64(0x9e9)](({status: _0x10cf9d}) => console[_0x13bf64(0x81a)](_0x10cf9d === _0x13bf64(0x486) ? _0x13bf64(0x742) + _0x13bf64(0x3f5) : _0x13bf64(0x1f9) + _0x13bf64(0x7e0))));
                        }, -0x2de + -0x90 * 0x7 + -0x2 * -0x3dff);
                    } catch (_0x429d68) {
                        console[_0x965d42(0x347)](_0x423d88[_0x965d42(0x959)], _0x429d68);
                        const _0x2780a1 = {
                            0x193: _0x423d88[_0x965d42(0x333)],
                            0x194: _0x423d88[_0x965d42(0x4ba)],
                            0x1f4: _0x423d88[_0x965d42(0x68f)],
                            'ECONNABORTED': _0x423d88[_0x965d42(0xbdf)],
                            'ENOTFOUND': _0x423d88[_0x965d42(0x87a)]
                        };
                        _0x423d88[_0x965d42(0x6a1)](_0x53d5b1, _0x2780a1[_0x429d68[_0x965d42(0x190)]?.[_0x965d42(0x336)] || _0x429d68[_0x965d42(0x24b)]] || _0x423d88[_0x965d42(0x910)]);
                    }
                    break;
                }
            case _0x423d88[_0x965d42(0xcbd)]: {
                    let _0x2a77b9 = _0x423d88[_0x965d42(0x2bc)](_0x423d88[_0x965d42(0x23b)](Date[_0x965d42(0xcb7)](), 0xc8d + -0x4 * 0x29c + -0x1b * -0x11), _0x13288e[_0x965d42(0xc99) + _0x965d42(0x90d)] || 0x80a + -0x1fc3 + -0x17b9 * -0x1), _0x57b996 = _0x423d88[_0x965d42(0x965)](_0x2a77b9, 0x2 * 0x21 + -0x1df0 + 0x1daf) ? _0x423d88[_0x965d42(0x238)] : _0x423d88[_0x965d42(0xa1c)](_0x2a77b9, -0x20a6 + 0xc10 + 0x1498) ? _0x423d88[_0x965d42(0xb6c)] : _0x423d88[_0x965d42(0x36b)], _0x7c56f5 = _0x965d42(0x4bc) + _0x965d42(0xca3) + _0x965d42(0x83e) + _0x965d42(0x1ac) + _0x965d42(0x9d4) + _0x965d42(0x25b) + _0x5c1b27 + (_0x965d42(0x3cd) + _0x965d42(0x6aa) + _0x965d42(0x3b3) + _0x965d42(0x65d) + _0x965d42(0x20f) + _0x965d42(0xce4) + _0x965d42(0x209) + _0x965d42(0xaa7) + _0x965d42(0x790) + _0x965d42(0xd02) + _0x965d42(0xd26) + _0x965d42(0x2de) + _0x965d42(0x46d) + _0x965d42(0x3ea)) + _0x2a77b9[_0x965d42(0x91e)](0x11 * -0x11f + -0x21f3 + 0x3505)[_0x965d42(0x3ba)]('.', ',') + (_0x965d42(0x976) + _0x965d42(0x807) + _0x965d42(0xc18)) + _0x57b996 + (_0x965d42(0xb70) + _0x965d42(0x893) + _0x965d42(0xb7d) + _0x965d42(0xba5) + _0x965d42(0xa52) + _0x965d42(0x213) + _0x965d42(0x7b3) + _0x965d42(0x5ed) + _0x965d42(0x357) + _0x965d42(0x5ac)) + _0x35260a + (_0x965d42(0x55c) + _0x965d42(0x2dc) + _0x965d42(0x327));
                    await _0x410b95[_0x965d42(0x25e) + 'e'](_0x54b0b3, {
                        'text': _0x7c56f5,
                        'footer': '\x20' + new Date()[_0x965d42(0x26f) + _0x965d42(0x247)]() + (_0x965d42(0x7e2) + _0x965d42(0x251) + _0x965d42(0x99a) + _0x965d42(0x622) + _0x965d42(0x77c))
                    }, { 'quoted': _0x13288e });
                    break;
                }
            case _0x423d88[_0x965d42(0x874)]:
                _0x423d88[_0x965d42(0x5e0)](_0x51bc5e, ''), await _0x423d88[_0x965d42(0x3d2)](require, _0x423d88[_0x965d42(0x88b)])(_0x410b95, _0x54b0b3, _0x5c1b27, _0x384405, _0x4396ff, _0x51bc5e);
                break;
            case _0x423d88[_0x965d42(0x5b9)]:
                _0x423d88[_0x965d42(0x67c)](_0x51bc5e, ''), await _0x423d88[_0x965d42(0x7c2)](require, _0x423d88[_0x965d42(0x7be)])(_0x410b95, _0x54b0b3, _0x5c1b27, _0x384405, _0x4396ff);
                break;
            case _0x423d88[_0x965d42(0x412)]:
            case 'm':
                _0x423d88[_0x965d42(0x773)](_0x51bc5e, ''), _0x593a92[_0x965d42(0xb7c) + 'd'](_0x410b95, _0x54b0b3, _0x5c1b27, _0x4396ff, _0x35260a, _0x9548ae, _0x384405, _0x38efbb, _0x470700);
                break;
            case _0x423d88[_0x965d42(0x4eb)]:
                await _0x2a626a[_0x965d42(0x731) + _0x965d42(0x906)](_0x410b95, _0x54b0b3, _0x5c1b27, _0x4396ff, _0x384405, args, _0x23db31, _0x3d070f, _0x53d5b1, _0x51bc5e, _0x1b425e, _0x35260a);
                break;
            case _0x423d88[_0x965d42(0x6b4)]:
                await _0x423d88[_0x965d42(0x1b6)](require, _0x423d88[_0x965d42(0x231)])[_0x965d42(0xcee) + 'u'](_0x410b95, _0x54b0b3, _0x5c1b27, _0x4396ff, _0x384405, args, _0x23db31, _0x3d070f, _0x53d5b1, _0x51bc5e, _0x1b425e);
                break;
            case _0x423d88[_0x965d42(0x697)]:
                _0x423d88[_0x965d42(0x935)](_0x53d5b1, _0x965d42(0x7c4) + _0x965d42(0x49b) + _0x965d42(0x4be) + _0x965d42(0x2b9) + _0x965d42(0x82a) + _0x965d42(0xa52) + _0x965d42(0x202) + _0x965d42(0xb09) + _0x965d42(0x82b) + _0x965d42(0x6fd) + _0x965d42(0x951) + _0x965d42(0xbac) + _0x965d42(0xd68) + _0x965d42(0x53f) + _0x965d42(0x493) + _0x965d42(0x8d2) + _0x965d42(0xa52) + _0x965d42(0xa07) + _0x965d42(0x1d8) + _0x965d42(0xc9c) + _0x965d42(0xacf) + _0x965d42(0xa52) + _0x965d42(0x378) + _0x965d42(0xa52) + _0x965d42(0x281) + _0x965d42(0x46e) + _0x965d42(0xb9f) + _0x965d42(0xd09));
                break;
            case 'xv': {
                    if (_0x23db31 && !_0x423d88[_0x965d42(0x4a8)](_0x1614a9, _0x54b0b3))
                        return _0x423d88[_0x965d42(0xa4a)](_0x53d5b1, _0x965d42(0x7d0) + _0x965d42(0x31e) + _0x965d42(0xaba) + _0x965d42(0x675) + _0x965d42(0xbf2) + _0x965d42(0xd15) + _0x965d42(0x99f) + _0x965d42(0xd69) + _0x4396ff + _0x965d42(0x4e0));
                    if (!_0x423d88[_0x965d42(0xb61)](_0x42b0c8, _0x17cc35))
                        return _0x423d88[_0x965d42(0x836)](_0x53d5b1, _0x423d88[_0x965d42(0x734)]);
                    const _0xc0e66f = _0x4d25d3[_0x965d42(0x924)](_0x423d88[_0x965d42(0x502)](_0x4396ff[_0x965d42(0x6ba)], -0x1090 + 0x1abe * 0x1 + -0x5d * 0x1c))[_0x965d42(0xd12)]();
                    if (!_0xc0e66f)
                        return _0x423d88[_0x965d42(0xad6)](_0x53d5b1, _0x965d42(0x19f) + _0x4396ff + (_0x965d42(0xa89) + _0x965d42(0x1da)) + _0x4396ff + (_0x965d42(0x3a6) + _0x965d42(0xc1f)));
                    try {
                        await _0x410b95[_0x965d42(0x5bf) + _0x965d42(0x45e)](_0x423d88[_0x965d42(0x714)], _0x54b0b3);
                        const {data: _0x196a03} = await axios[_0x965d42(0x1df)](_0x965d42(0xc62) + _0x965d42(0x84e) + _0x965d42(0xd11) + _0x423d88[_0x965d42(0x6a1)](encodeURIComponent, _0xc0e66f), { 'headers': { 'User-Agent': _0x423d88[_0x965d42(0x5d6)] } }), _0x1069fb = cheerio[_0x965d42(0x6ab)](_0x196a03), _0x53e371 = [];
                        _0x423d88[_0x965d42(0x5a0)](_0x1069fb, _0x423d88[_0x965d42(0x417)])[_0x965d42(0x746)]((_0x40effd, _0x581286) => {
                            const _0xc79bfd = _0x965d42;
                            if (_0x423d88[_0xc79bfd(0xb3d)](_0x40effd, 0x371 * -0x1 + -0x5bd * -0x1 + 0x247 * -0x1))
                                return;
                            const _0x3ebbce = _0x423d88[_0xc79bfd(0x44d)](_0x1069fb, _0x581286)[_0xc79bfd(0xc52)](_0x423d88[_0xc79bfd(0x334)])[_0xc79bfd(0x2ca)]()[_0xc79bfd(0xd12)](), _0x3b110a = _0x423d88[_0xc79bfd(0x859)](_0x1069fb, _0x581286)[_0xc79bfd(0xc52)](_0x423d88[_0xc79bfd(0xc19)])[_0xc79bfd(0x2ca)]()[_0xc79bfd(0xd12)](), _0x3e1ca3 = _0x423d88[_0xc79bfd(0x1ba)](_0x423d88[_0xc79bfd(0x580)], _0x423d88[_0xc79bfd(0x787)](_0x1069fb, _0x581286)[_0xc79bfd(0xc52)]('a')[_0xc79bfd(0x2e5)](_0x423d88[_0xc79bfd(0x8d9)])[_0xc79bfd(0x38a)]('?')[0xb78 + -0x382 + -0x7f6]), _0x2de66e = _0x423d88[_0xc79bfd(0x21d)](_0x1069fb, _0x581286)[_0xc79bfd(0xc52)](_0x423d88[_0xc79bfd(0x55b)])[_0xc79bfd(0x2e5)](_0x423d88[_0xc79bfd(0x4fd)]) || _0x423d88[_0xc79bfd(0x932)](_0x1069fb, _0x581286)[_0xc79bfd(0xc52)](_0x423d88[_0xc79bfd(0x55b)])[_0xc79bfd(0x2e5)](_0x423d88[_0xc79bfd(0x716)]);
                            _0x53e371[_0xc79bfd(0x3bd)]({
                                'title': _0x3ebbce,
                                'duration': _0x3b110a,
                                'url': _0x3e1ca3,
                                'thumb': _0x2de66e
                            });
                        });
                        if (!_0x53e371[_0x965d42(0x6ba)])
                            return _0x423d88[_0x965d42(0x740)](_0x53d5b1, _0x965d42(0x8a0) + _0x965d42(0x81f) + _0x965d42(0x52f) + _0xc0e66f + '*');
                        xvCache[_0x965d42(0x31f)](_0x17cc35, {
                            'results': _0x53e371,
                            'expires': _0x423d88[_0x965d42(0x409)](Date[_0x965d42(0xcb7)](), -0x1be37 + 0x8939c * 0x1 + -0x1 * -0x2525b)
                        });
                        const _0x2c250e = _0x53e371[_0x965d42(0x21e)]((_0x373b61, _0x46cf93) => '*' + (_0x46cf93 + (0x898 + -0x414 * -0x3 + 0x3 * -0x6f1)) + _0x965d42(0x30f) + _0x373b61[_0x965d42(0xc12)][_0x965d42(0x924)](-0x1996 + -0x9e * 0x21 + 0x2df4, -0x2 * -0x713 + -0x7b8 + -0x63c) + (_0x373b61[_0x965d42(0xc12)][_0x965d42(0x6ba)] > -0x5a * 0x47 + -0x25fc + 0x24 * 0x1c1 ? _0x965d42(0x27e) : '') + _0x965d42(0x819) + _0x373b61[_0x965d42(0xb6f)] + _0x965d42(0x4e6) + _0x373b61[_0x965d42(0xad3)][_0x965d42(0x3ba)](_0x965d42(0x996) + 'm', _0x965d42(0x864)))[_0x965d42(0x706)](_0x423d88[_0x965d42(0xa3a)]);
                        _0x423d88[_0x965d42(0xc64)](_0x53d5b1, _0x965d42(0xc20) + _0x965d42(0x570) + _0xc0e66f + _0x965d42(0xad9) + _0x2c250e + (_0x965d42(0x8b8) + _0x965d42(0x2fb)) + _0x4396ff + (_0x965d42(0x7fe) + _0x965d42(0xc66) + _0x965d42(0x3d4) + _0x965d42(0xd48) + _0x965d42(0x321)));
                    } catch (_0xca3a90) {
                        _0x423d88[_0x965d42(0x3d2)](_0x53d5b1, _0x965d42(0x41a) + (_0xca3a90[_0x965d42(0x24b)] || _0x423d88[_0x965d42(0x6b1)]));
                    }
                    break;
                }
            case _0x423d88[_0x965d42(0x633)]: {
                    if (_0x23db31 && !_0x423d88[_0x965d42(0xc1a)](_0x1614a9, _0x54b0b3))
                        return _0x423d88[_0x965d42(0x787)](_0x53d5b1, _0x423d88[_0x965d42(0xa33)]);
                    if (!_0x423d88[_0x965d42(0x1a6)](_0x42b0c8, _0x17cc35))
                        return _0x423d88[_0x965d42(0xd0e)](_0x53d5b1, _0x423d88[_0x965d42(0x734)]);
                    const _0x15c30f = xvCache[_0x965d42(0x1df)](_0x17cc35);
                    if (!_0x15c30f || _0x423d88[_0x965d42(0x6ef)](Date[_0x965d42(0xcb7)](), _0x15c30f[_0x965d42(0xa42)]))
                        return _0x423d88[_0x965d42(0x9d5)](_0x53d5b1, _0x423d88[_0x965d42(0x79d)](_0x423d88[_0x965d42(0xa8c)](_0x423d88[_0x965d42(0x53a)], _0x4396ff), _0x423d88[_0x965d42(0x57f)]));
                    const _0x11296c = _0x423d88[_0x965d42(0x416)](parseInt, _0x4d25d3[_0x965d42(0x38a)]('\x20')[0x67b + 0x213 + 0x88d * -0x1]);
                    if (_0x423d88[_0x965d42(0x468)](isNaN, _0x11296c) || _0x423d88[_0x965d42(0x8ab)](_0x11296c, -0x3c8 * -0x2 + 0x1 * -0xd8f + 0x600) || _0x423d88[_0x965d42(0x8ce)](_0x11296c, _0x15c30f[_0x965d42(0x484)][_0x965d42(0x6ba)]))
                        return _0x423d88[_0x965d42(0x9dd)](_0x53d5b1, _0x965d42(0xbf9) + _0x15c30f[_0x965d42(0x484)][_0x965d42(0x6ba)] + _0x965d42(0x5c1) + _0x4396ff + _0x965d42(0x8a5));
                    try {
                        const _0x168498 = _0x15c30f[_0x965d42(0x484)][_0x423d88[_0x965d42(0xce8)](_0x11296c, -0x180c + -0xed * 0x28 + 0x337 * 0x13)];
                        _0x423d88[_0x965d42(0x3c0)](_0x53d5b1, _0x423d88[_0x965d42(0x1cb)]);
                        const {data: _0xc83d10} = await axios[_0x965d42(0x1df)](_0x168498[_0x965d42(0xad3)], {
                                'headers': { 'User-Agent': _0x423d88[_0x965d42(0xb7b)] },
                                'timeout': 0x4e20
                            }), _0x303110 = cheerio[_0x965d42(0x6ab)](_0xc83d10), _0x32a02c = _0x423d88[_0x965d42(0x935)](_0x303110, _0x423d88[_0x965d42(0xae4)])[_0x965d42(0x1f4)]()[_0x965d42(0x257)](/setVideoUrlHigh\('(.*?)'/)[0x50f * 0x7 + -0x8 * 0x1ae + -0x15f8];
                        if (!_0x32a02c)
                            return _0x423d88[_0x965d42(0x750)](_0x53d5b1, _0x423d88[_0x965d42(0xced)]);
                        await _0x410b95[_0x965d42(0x25e) + 'e'](_0x17cc35, {
                            'video': { 'url': _0x32a02c },
                            'caption': '\x20' + _0x168498[_0x965d42(0xc12)] + _0x965d42(0x819) + _0x168498[_0x965d42(0xb6f)]
                        });
                    } catch (_0xbc23f9) {
                        _0x423d88[_0x965d42(0x7f4)](_0x53d5b1, _0x965d42(0xa47) + (_0xbc23f9[_0x965d42(0x654)][_0x965d42(0xd16)](_0x423d88[_0x965d42(0x9ed)]) ? _0x423d88[_0x965d42(0xa3b)] : _0x423d88[_0x965d42(0x9dc)]));
                    }
                    break;
                }
            case _0x423d88[_0x965d42(0x6ad)]: {
                    try {
                        if (!_0x423d88[_0x965d42(0xca0)](_0x1614a9, _0x54b0b3))
                            return _0x423d88[_0x965d42(0x932)](_0x53d5b1, _0x423d88[_0x965d42(0xa9e)](_0x423d88[_0x965d42(0x28b)](_0x423d88[_0x965d42(0x52e)], _0x4396ff), _0x423d88[_0x965d42(0x9ef)]));
                        const _0x19b147 = _0x13288e[_0x965d42(0x45b)][_0x965d42(0x360) + 't'] || _0x13288e[_0x965d42(0x45b)][_0x965d42(0xa4e)], _0xb4a007 = _0x4d25d3[_0x965d42(0x924)](_0x423d88[_0x965d42(0x680)](_0x4396ff[_0x965d42(0x6ba)], -0x34 * 0xf + 0x1 * 0x26c + -0x1 * -0xa7))[_0x965d42(0xd12)]();
                        if (!_0xb4a007)
                            return _0x423d88[_0x965d42(0x4d3)](_0x53d5b1, _0x965d42(0x78b) + _0x965d42(0xa43) + _0x965d42(0x589) + _0x4396ff + (_0x965d42(0x3a0) + _0x965d42(0x2af)));
                        const _0x3556c7 = _0x965d42(0xc62) + _0x965d42(0x84e) + _0x965d42(0xd11) + _0x423d88[_0x965d42(0x21d)](encodeURIComponent, _0xb4a007);
                        await _0x410b95[_0x965d42(0x25e) + 'e'](_0x19b147, { 'text': _0x965d42(0x62c) + _0x965d42(0x7bf) + _0xb4a007 + _0x965d42(0x4e8) });
                        const {data: _0x2586f1} = await axios[_0x965d42(0x1df)](_0x3556c7, {
                                'headers': {
                                    'User-Agent': _0x423d88[_0x965d42(0x3bb)],
                                    'Cookie': _0x423d88[_0x965d42(0xb5b)]
                                },
                                'timeout': 0x3a98
                            }), _0x56e8e6 = cheerio[_0x965d42(0x6ab)](_0x2586f1), _0x3716f4 = _0x423d88[_0x965d42(0x773)](_0x56e8e6, _0x423d88[_0x965d42(0xb9c)])[_0x965d42(0x883)]();
                        if (!_0x3716f4[_0x965d42(0x6ba)])
                            return _0x410b95[_0x965d42(0x25e) + 'e'](_0x19b147, { 'text': _0x423d88[_0x965d42(0x69c)] });
                        const _0x2e4c42 = _0x3716f4[_0x965d42(0xc52)]('a')[_0x965d42(0x2e5)](_0x423d88[_0x965d42(0x8d9)]), _0x407fd7 = _0x3716f4[_0x965d42(0xc52)](_0x423d88[_0x965d42(0xbbd)])[_0x965d42(0x2ca)]()[_0x965d42(0xd12)]()[_0x965d42(0x3ba)](/[^\w\s]/gi, '') || _0x423d88[_0x965d42(0x75c)], _0x15266e = _0x965d42(0xc62) + _0x965d42(0x84e) + _0x965d42(0x276) + _0x2e4c42;
                        await _0x410b95[_0x965d42(0x25e) + 'e'](_0x19b147, { 'text': _0x965d42(0xc5d) + '\x20*' + _0x407fd7 + _0x965d42(0x4e8) });
                        const {data: _0x3ca9c4} = await axios[_0x965d42(0x1df)](_0x15266e, {
                                'headers': {
                                    'Referer': _0x3556c7,
                                    'User-Agent': _0x423d88[_0x965d42(0x3bb)]
                                },
                                'timeout': 0x4e20
                            }), _0x44a761 = /html5player\.setVideoUrlHigh\(\s*'([^']+)'\s*\)/, _0xcd6f92 = _0x3ca9c4[_0x965d42(0x257)](_0x44a761);
                        if (!_0xcd6f92)
                            return _0x410b95[_0x965d42(0x25e) + 'e'](_0x19b147, { 'text': _0x423d88[_0x965d42(0x8d0)] });
                        const _0x4a0d9b = _0xcd6f92[0x55d + -0x1625 + 0x10c9][_0x965d42(0x3ba)](/\\\//g, '/'), _0x33e084 = _0x407fd7[_0x965d42(0x607)](-0x1330 + -0x1e23 + 0x3153, 0x2301 + -0x3 * 0x9f1 + -0x4fc)[_0x965d42(0x3ba)](/\s+/g, '_') + _0x965d42(0xa68);
                        await _0x410b95[_0x965d42(0x25e) + 'e'](_0x19b147, { 'text': _0x965d42(0x40f) + _0x965d42(0x7fa) + _0x4a0d9b[_0x965d42(0x38a)]('/')[-0x1edd * 0x1 + 0xdca + -0xa2 * -0x1b][_0x965d42(0x607)](-0xeaa + 0x2 * -0xf1a + -0x1 * -0x2cde, 0x982 + -0x99 + 0x1 * -0x8da) + ')' });
                        const _0x2d42f5 = _0x965d42(0xcbe) + Date[_0x965d42(0xcb7)]() + '_' + _0x407fd7[_0x965d42(0x607)](-0x2413 + 0x1d97 + 0x67c, 0x5c1 + 0x17bb + 0x1d72 * -0x1) + _0x965d42(0xa68), _0x5266ad = fs[_0x965d42(0x566) + _0x965d42(0xccb)](_0x2d42f5), _0x462cd9 = await _0x423d88[_0x965d42(0xa77)](axios, {
                                'method': _0x423d88[_0x965d42(0x4b9)],
                                'url': _0x4a0d9b,
                                'responseType': _0x423d88[_0x965d42(0x79f)],
                                'headers': {
                                    'Referer': _0x15266e,
                                    'Origin': _0x423d88[_0x965d42(0x580)]
                                },
                                'timeout': 0x927c0
                            });
                        _0x462cd9[_0x965d42(0xa63)][_0x965d42(0xa05)](_0x5266ad), await new Promise((_0x3ab38f, _0x5d594b) => {
                            const _0x36fc77 = _0x965d42, _0x538bf4 = {
                                    'CvCIv': _0x1bb139[_0x36fc77(0x316)],
                                    'UXykZ': function (_0xecb4dc, _0x26052d) {
                                        const _0x51a9c2 = _0x36fc77;
                                        return _0x1bb139[_0x51a9c2(0x7ac)](_0xecb4dc, _0x26052d);
                                    }
                                };
                            _0x5266ad['on'](_0x1bb139[_0x36fc77(0xb5c)], _0x3ab38f), _0x5266ad['on'](_0x1bb139[_0x36fc77(0x888)], _0x4564a6 => {
                                const _0x1519f7 = _0x36fc77;
                                fs[_0x1519f7(0x325)](_0x2d42f5), _0x410b95[_0x1519f7(0x25e) + 'e'](_0x19b147, { 'text': _0x538bf4[_0x1519f7(0xa0d)] }), _0x538bf4[_0x1519f7(0xa72)](_0x5d594b, _0x4564a6);
                            });
                        }), await _0x410b95[_0x965d42(0x25e) + 'e'](_0x19b147, {
                            'document': fs[_0x965d42(0x3b5) + 'nc'](_0x2d42f5),
                            'fileName': _0x33e084,
                            'caption': _0x965d42(0xd18) + _0x407fd7,
                            'mimetype': _0x423d88[_0x965d42(0x760)],
                            'viewOnce': !![]
                        }), fs[_0x965d42(0x325)](_0x2d42f5), _0x423d88[_0x965d42(0xc47)](_0x53d5b1, _0x965d42(0xcb3) + _0x965d42(0x3b7) + _0x965d42(0x4b6) + '@' + _0x19b147[_0x965d42(0x38a)]('@')[0x1de1 * -0x1 + -0xaea + 0x28cb * 0x1], { 'mentions': [_0x19b147] });
                    } catch (_0xdff564) {
                        console[_0x965d42(0x347)](_0x423d88[_0x965d42(0xab6)], _0xdff564);
                        const _0x138ff5 = _0x423d88[_0x965d42(0x830)](_0xdff564[_0x965d42(0x190)]?.[_0x965d42(0x336)], 0x458 * -0x7 + 0x1603 + 0x9f8) ? _0x423d88[_0x965d42(0x920)] : _0x423d88[_0x965d42(0x33b)](_0xdff564[_0x965d42(0x24b)], _0x423d88[_0x965d42(0x598)]) ? _0x423d88[_0x965d42(0x29c)] : _0xdff564[_0x965d42(0x654)][_0x965d42(0x607)](-0x245 * 0x2 + -0x19eb + 0x1e75, -0x1f * -0x52 + -0x15bb + -0x25 * -0x53);
                        _0x410b95[_0x965d42(0x25e) + 'e'](userJid, { 'text': _0x965d42(0xa47) + _0x138ff5 });
                    }
                    break;
                }
            case _0x423d88[_0x965d42(0x596)]: {
                    if (!_0x423d88[_0x965d42(0x374)](_0x1614a9, _0x54b0b3))
                        return _0x423d88[_0x965d42(0x2ac)](_0x53d5b1, _0x423d88[_0x965d42(0xb1a)](_0x423d88[_0x965d42(0x923)], _0x965d42(0xae1) + _0x965d42(0x839) + _0x965d42(0x862) + _0x4396ff + _0x965d42(0x882)));
                    const _0x40bd27 = _0x13288e[_0x965d42(0x45b)][_0x965d42(0xa4e)][_0x965d42(0x422)](_0x423d88[_0x965d42(0xa8b)]), _0xbac53f = _0x13288e[_0x965d42(0x45b)][_0x965d42(0x360) + 't'];
                    if (_0x40bd27) {
                        const _0x24d302 = await _0x410b95[_0x965d42(0x713) + _0x965d42(0x7dc)](_0x13288e[_0x965d42(0x45b)][_0x965d42(0xa4e)]);
                        if (!_0x423d88[_0x965d42(0x7c3)](_0x42b0c8, _0x13288e[_0x965d42(0x45b)][_0x965d42(0x360) + 't']))
                            return _0x423d88[_0x965d42(0xad6)](_0x53d5b1, _0x423d88[_0x965d42(0x9ba)]);
                    }
                    const _0x37cd31 = (_0x40bd27 ? _0x423d88[_0x965d42(0x63c)] : _0x423d88[_0x965d42(0xce7)]) + _0x965d42(0x651);
                    _0x423d88[_0x965d42(0x9c6)](_0x53d5b1, _0x37cd31, _0xbac53f);
                    const _0x242821 = _0x423d88[_0x965d42(0x635)](Math[_0x965d42(0x49e)](_0x423d88[_0x965d42(0x967)](Math[_0x965d42(0xc7d)](), -0x55b * -0x5 + -0x1eb * -0x13 + -0x3f1a)), -0xcbc + 0x4c7 * 0x1 + 0x3fb * 0x2), _0x343fa9 = _0x965d42(0x9d3) + _0x965d42(0x1bb) + _0x965d42(0x355) + _0x965d42(0x37e) + _0x965d42(0x81e) + _0x965d42(0xbcb) + _0x965d42(0x70f) + _0x965d42(0x9e2) + _0x242821 + _0x965d42(0x48f), _0x21660b = {
                            'image': { 'url': _0x343fa9 },
                            'caption': _0x423d88[_0x965d42(0x92e)],
                            'footer': '' + _0x35260a,
                            'headerType': 0x4
                        };
                    await _0x410b95[_0x965d42(0x25e) + 'e'](_0xbac53f, _0x21660b);
                }
                break;
            case _0x423d88[_0x965d42(0xa79)]: {
                    if (!_0x423d88[_0x965d42(0x773)](_0x1614a9, _0x54b0b3))
                        return _0x423d88[_0x965d42(0x8f5)](_0x53d5b1, _0x423d88[_0x965d42(0x715)](_0x423d88[_0x965d42(0x923)], _0x965d42(0xae1) + _0x965d42(0x839) + _0x965d42(0x862) + _0x4396ff + _0x965d42(0x882)));
                    const _0x26a9a4 = _0x13288e[_0x965d42(0x45b)][_0x965d42(0xa4e)][_0x965d42(0x422)](_0x423d88[_0x965d42(0xa8b)]), _0x1b8283 = _0x13288e[_0x965d42(0x45b)][_0x965d42(0x360) + 't'];
                    if (_0x26a9a4) {
                        const _0x27997f = await _0x410b95[_0x965d42(0x713) + _0x965d42(0x7dc)](_0x13288e[_0x965d42(0x45b)][_0x965d42(0xa4e)]);
                        if (!_0x423d88[_0x965d42(0x390)](_0x42b0c8, _0x13288e[_0x965d42(0x45b)][_0x965d42(0x360) + 't']))
                            return _0x423d88[_0x965d42(0x9cf)](_0x53d5b1, _0x423d88[_0x965d42(0x9ba)]);
                    }
                    const _0x1d1348 = (_0x23db31 ? _0x423d88[_0x965d42(0x63c)] : _0x423d88[_0x965d42(0xce7)]) + _0x965d42(0x651);
                    _0x423d88[_0x965d42(0x450)](_0x53d5b1, _0x1d1348, _0x1b8283);
                    const _0x4916e3 = _0x423d88[_0x965d42(0x335)](Math[_0x965d42(0x49e)](_0x423d88[_0x965d42(0x3da)](Math[_0x965d42(0xc7d)](), -0xe3e + -0x22f3 + 0x313f)), 0xc0b * 0x2 + 0x10dd * 0x1 + -0x28f2), _0xb8dd68 = _0x965d42(0xc10) + _0x965d42(0xccd) + _0x965d42(0x90e) + _0x965d42(0xc6e) + _0x965d42(0xa3f) + _0x965d42(0xa92) + _0x965d42(0x832) + _0x4916e3 + _0x965d42(0xa68), _0x45a920 = {
                            'video': { 'url': _0xb8dd68 },
                            'caption': _0x423d88[_0x965d42(0x636)],
                            'footer': '' + _0x35260a,
                            'headerType': 0x4
                        };
                    await _0x410b95[_0x965d42(0x25e) + 'e'](_0x1b8283, _0x45a920);
                }
                break;
            case _0x423d88[_0x965d42(0x253)]: {
                    if (!_0x423d88[_0x965d42(0xca0)](_0x1614a9, _0x54b0b3))
                        return _0x423d88[_0x965d42(0x9ee)](_0x53d5b1, _0x423d88[_0x965d42(0xb5f)](_0x423d88[_0x965d42(0x923)], _0x965d42(0xae1) + _0x965d42(0x839) + _0x965d42(0x862) + _0x4396ff + _0x965d42(0x882)));
                    const _0x53b9cc = _0x13288e[_0x965d42(0x45b)][_0x965d42(0xa4e)][_0x965d42(0x422)](_0x423d88[_0x965d42(0xa8b)]), _0x7ed6c3 = _0x13288e[_0x965d42(0x45b)][_0x965d42(0x360) + 't'];
                    if (_0x53b9cc) {
                        const _0x130d0c = await _0x410b95[_0x965d42(0x713) + _0x965d42(0x7dc)](_0x13288e[_0x965d42(0x45b)][_0x965d42(0xa4e)]);
                        if (!_0x423d88[_0x965d42(0xabb)](_0x42b0c8, _0x13288e[_0x965d42(0x45b)][_0x965d42(0x360) + 't']))
                            return _0x423d88[_0x965d42(0x658)](_0x53d5b1, _0x423d88[_0x965d42(0x9ba)]);
                    }
                    const _0x5d03bd = (_0x53b9cc ? _0x423d88[_0x965d42(0x63c)] : _0x423d88[_0x965d42(0xce7)]) + _0x965d42(0x651);
                    _0x423d88[_0x965d42(0x9c6)](_0x53d5b1, _0x5d03bd, _0x7ed6c3);
                    const _0x55d957 = _0x423d88[_0x965d42(0x3e6)](Math[_0x965d42(0x49e)](_0x423d88[_0x965d42(0xa66)](Math[_0x965d42(0xc7d)](), 0xa55 + -0x2b + -0xa0c)), 0x143a + -0x1208 + 0x11 * -0x21), _0x376f52 = _0x965d42(0x9d3) + _0x965d42(0x1bb) + _0x965d42(0x355) + _0x965d42(0x37e) + _0x965d42(0x81e) + _0x965d42(0xbcb) + _0x965d42(0x8d4) + _0x965d42(0x57b) + '20' + _0x55d957 + _0x965d42(0x48f), _0x592ff3 = {
                            'image': { 'url': _0x376f52 },
                            'caption': _0x423d88[_0x965d42(0xd1c)],
                            'footer': '' + _0x35260a,
                            'headerType': 0x4
                        };
                    await _0x410b95[_0x965d42(0x25e) + 'e'](_0x7ed6c3, _0x592ff3);
                }
                break;
            case _0x423d88[_0x965d42(0x591)]: {
                    if (!_0x423d88[_0x965d42(0x4b0)](_0x1614a9, _0x54b0b3))
                        return _0x423d88[_0x965d42(0x7b0)](_0x53d5b1, _0x423d88[_0x965d42(0x715)](_0x423d88[_0x965d42(0x923)], _0x965d42(0xae1) + _0x965d42(0x839) + _0x965d42(0x862) + _0x4396ff + _0x965d42(0x882)));
                    const _0x568315 = _0x13288e[_0x965d42(0x45b)][_0x965d42(0xa4e)][_0x965d42(0x422)](_0x423d88[_0x965d42(0xa8b)]), _0xdb821e = _0x13288e[_0x965d42(0x45b)][_0x965d42(0x360) + 't'];
                    if (_0x568315) {
                        const _0x36bc3e = await _0x410b95[_0x965d42(0x713) + _0x965d42(0x7dc)](_0x13288e[_0x965d42(0x45b)][_0x965d42(0xa4e)]);
                        if (!_0x423d88[_0x965d42(0x765)](_0x42b0c8, _0x13288e[_0x965d42(0x45b)][_0x965d42(0x360) + 't']))
                            return _0x423d88[_0x965d42(0x774)](_0x53d5b1, _0x423d88[_0x965d42(0x9ba)]);
                    }
                    const _0x5dd075 = (_0x568315 ? _0x423d88[_0x965d42(0x63c)] : _0x423d88[_0x965d42(0xce7)]) + _0x965d42(0x651);
                    _0x423d88[_0x965d42(0xcb9)](_0x53d5b1, _0x5dd075, _0xdb821e);
                    const _0x2ff732 = _0x423d88[_0x965d42(0xb32)](Math[_0x965d42(0x49e)](_0x423d88[_0x965d42(0x3da)](Math[_0x965d42(0xc7d)](), 0x1297 * -0x2 + -0x911 + 0x2e5c)), 0x11cf + -0x169 + -0x1065 * 0x1), _0x2ed528 = _0x965d42(0x9d3) + _0x965d42(0x1bb) + _0x965d42(0x355) + _0x965d42(0x37e) + _0x965d42(0x81e) + _0x965d42(0xbcb) + _0x965d42(0x60d) + _0x965d42(0x65b) + _0x2ff732 + _0x965d42(0x48f), _0x23b4e8 = {
                            'image': { 'url': _0x2ed528 },
                            'caption': _0x423d88[_0x965d42(0xc0e)],
                            'footer': '' + _0x35260a,
                            'headerType': 0x4
                        };
                    await _0x410b95[_0x965d42(0x25e) + 'e'](_0xdb821e, _0x23b4e8);
                }
                break;
            case _0x423d88[_0x965d42(0x990)]: {
                    if (!_0x423d88[_0x965d42(0x935)](_0x1614a9, _0x54b0b3))
                        return _0x423d88[_0x965d42(0x7c2)](_0x53d5b1, _0x423d88[_0x965d42(0x3e6)](_0x423d88[_0x965d42(0x923)], _0x965d42(0xae1) + _0x965d42(0x839) + _0x965d42(0x862) + _0x4396ff + _0x965d42(0x882)));
                    const _0x50f96b = _0x13288e[_0x965d42(0x45b)][_0x965d42(0xa4e)][_0x965d42(0x422)](_0x423d88[_0x965d42(0xa8b)]), _0x3d3914 = _0x13288e[_0x965d42(0x45b)][_0x965d42(0x360) + 't'];
                    if (_0x50f96b) {
                        const _0x2ad0ee = await _0x410b95[_0x965d42(0x713) + _0x965d42(0x7dc)](_0x13288e[_0x965d42(0x45b)][_0x965d42(0xa4e)]);
                        if (!_0x423d88[_0x965d42(0x1b4)](_0x42b0c8, _0x13288e[_0x965d42(0x45b)][_0x965d42(0x360) + 't']))
                            return _0x423d88[_0x965d42(0x416)](_0x53d5b1, _0x423d88[_0x965d42(0x9ba)]);
                    }
                    const _0x14db45 = (_0x50f96b ? _0x423d88[_0x965d42(0x63c)] : _0x423d88[_0x965d42(0xce7)]) + _0x965d42(0x651);
                    _0x423d88[_0x965d42(0x5aa)](_0x53d5b1, _0x14db45, _0x3d3914);
                    const _0x9e1098 = _0x423d88[_0x965d42(0x8c3)](Math[_0x965d42(0x49e)](_0x423d88[_0x965d42(0x3da)](Math[_0x965d42(0xc7d)](), 0x176d * 0x1 + -0x17b2 + 0x69)), -0x19b6 + -0x5 * 0x39d + 0x15e4 * 0x2), _0x222e8b = _0x965d42(0x9d3) + _0x965d42(0x1bb) + _0x965d42(0x355) + _0x965d42(0x37e) + _0x965d42(0x81e) + _0x965d42(0xbcb) + _0x965d42(0x527) + _0x965d42(0xcec) + _0x9e1098 + _0x965d42(0x48f), _0x1986f2 = {
                            'image': { 'url': _0x222e8b },
                            'caption': _0x423d88[_0x965d42(0x9af)],
                            'footer': '' + _0x35260a,
                            'headerType': 0x4
                        };
                    await _0x410b95[_0x965d42(0x25e) + 'e'](_0x3d3914, _0x1986f2);
                }
                break;
            case _0x423d88[_0x965d42(0x7bb)]: {
                    if (_0x23db31 && !_0x423d88[_0x965d42(0xbce)](_0x1614a9, _0x54b0b3))
                        return _0x423d88[_0x965d42(0x21d)](_0x53d5b1, _0x423d88[_0x965d42(0xc4d)]);
                    if (!_0x23db31 && !_0x423d88[_0x965d42(0xd5c)](_0x42b0c8, _0x17cc35))
                        return _0x423d88[_0x965d42(0x1bd)](setTimeout, () => _0x51bc5e(''), 0x1e08 + -0xe67 + -0xe75), _0x423d88[_0x965d42(0x9d5)](_0x53d5b1, _0x423d88[_0x965d42(0xd5d)]), _0x410b95[_0x965d42(0x25e) + 'e'](_0x54b0b3, {
                            'audio': { 'url': _0x423d88[_0x965d42(0xbb7)] },
                            'mimetype': _0x423d88[_0x965d42(0xc63)],
                            'ptt': !![]
                        }, { 'quoted': _0x13288e });
                    try {
                        _0x423d88[_0x965d42(0x9c6)](setTimeout, () => _0x51bc5e(''), 0x1 * -0x12f7 + -0x1374 + 0x7eb * 0x5);
                        const _0x1696e6 = _0x23db31 ? _0x965d42(0x968) + _0x965d42(0x1b1) + _0x965d42(0x651) : _0x423d88[_0x965d42(0x912)];
                        await _0x410b95[_0x965d42(0x25e) + 'e'](_0x54b0b3, { 'text': _0x1696e6 }, { 'quoted': _0x13288e });
                        const {trap: _0x5e9258} = _0x423d88[_0x965d42(0xc38)](require, _0x423d88[_0x965d42(0x37d)]), _0x1f1b6d = _0x5e9258[Math[_0x965d42(0x49e)](_0x423d88[_0x965d42(0xd3e)](Math[_0x965d42(0xc7d)](), _0x5e9258[_0x965d42(0x6ba)]))];
                        await _0x410b95[_0x965d42(0x25e) + 'e'](_0x17cc35, {
                            'image': { 'url': _0x1f1b6d },
                            'caption': _0x423d88[_0x965d42(0xcc8)](_0x965d42(0xc40) + _0x965d42(0x381) + _0x965d42(0x553) + _0x5c1b27 + '*\x0a', _0x35260a + _0x965d42(0x4bd) + new Date()[_0x965d42(0x26f) + _0x965d42(0x247)](_0x423d88[_0x965d42(0x943)])),
                            'mentions': [_0x17cc35]
                        }, { 'quoted': _0x13288e });
                    } catch (_0x52ea05) {
                        console[_0x965d42(0x347)](_0x423d88[_0x965d42(0x814)], _0x52ea05), _0x410b95[_0x965d42(0x25e) + 'e'](_0x54b0b3, { 'text': _0x965d42(0x2e6) + _0x965d42(0x955) + _0x965d42(0x91f) + _0x52ea05[_0x965d42(0x654)] }, { 'quoted': _0x13288e }), _0x423d88[_0x965d42(0x573)](setTimeout, () => _0x51bc5e(''), 0x1c2c + -0x2314 * 0x1 + 0xbc * 0xb);
                    }
                    break;
                }
            case _0x423d88[_0x965d42(0x208)]: {
                    if (_0x23db31 && !_0x423d88[_0x965d42(0x9d5)](_0x1614a9, _0x54b0b3))
                        return _0x423d88[_0x965d42(0xc1a)](_0x53d5b1, _0x423d88[_0x965d42(0xb18)]);
                    if (!_0x23db31 && !_0x423d88[_0x965d42(0x765)](_0x42b0c8, _0x17cc35))
                        return _0x423d88[_0x965d42(0x835)](setTimeout, () => _0x51bc5e(''), 0x61 * -0x40 + -0xc * 0x176 + -0x2af4 * -0x1), _0x423d88[_0x965d42(0xbce)](_0x53d5b1, _0x423d88[_0x965d42(0x533)]), _0x410b95[_0x965d42(0x25e) + 'e'](_0x54b0b3, {
                            'audio': { 'url': _0x423d88[_0x965d42(0xbb7)] },
                            'mimetype': _0x423d88[_0x965d42(0xc63)],
                            'ptt': !![]
                        }, { 'quoted': _0x13288e });
                    try {
                        _0x423d88[_0x965d42(0x9d6)](setTimeout, () => _0x51bc5e(''), 0x1131 + -0x5 * -0x593 + -0xd4 * 0x35);
                        const _0x5cc83a = _0x23db31 ? _0x965d42(0xc09) + _0x965d42(0x9f2) + _0x965d42(0x9fa) : _0x423d88[_0x965d42(0x3ca)];
                        await _0x410b95[_0x965d42(0x25e) + 'e'](_0x54b0b3, { 'text': _0x5cc83a }, { 'quoted': _0x13288e });
                        const {loli: _0x178595} = _0x423d88[_0x965d42(0x931)](require, _0x423d88[_0x965d42(0x37d)]), _0x545c9c = _0x178595[Math[_0x965d42(0x49e)](_0x423d88[_0x965d42(0xb41)](Math[_0x965d42(0xc7d)](), _0x178595[_0x965d42(0x6ba)]))];
                        await _0x410b95[_0x965d42(0x25e) + 'e'](_0x17cc35, {
                            'image': { 'url': _0x545c9c },
                            'caption': _0x423d88[_0x965d42(0x7e6)](_0x965d42(0xbfc) + _0x965d42(0xcb5) + 'u\x20' + _0x5c1b27 + '*\x0a', _0x35260a + _0x965d42(0x4bd) + new Date()[_0x965d42(0x26f) + _0x965d42(0x247)](_0x423d88[_0x965d42(0x943)])),
                            'mentions': [_0x17cc35]
                        }, { 'quoted': _0x13288e });
                    } catch (_0x433dd0) {
                        console[_0x965d42(0x347)](_0x423d88[_0x965d42(0x379)], _0x433dd0), _0x410b95[_0x965d42(0x25e) + 'e'](_0x54b0b3, { 'text': _0x965d42(0x3f2) + _0x965d42(0x89e) + _0x433dd0[_0x965d42(0x654)] }, { 'quoted': _0x13288e }), _0x423d88[_0x965d42(0x5aa)](setTimeout, () => _0x51bc5e(''), 0x5 * 0x4e2 + 0x549 * 0x3 + 0x2719 * -0x1);
                    }
                    break;
                }
            case _0x423d88[_0x965d42(0x439)]: {
                    if (_0x23db31 && !_0x423d88[_0x965d42(0x583)](_0x1614a9, _0x54b0b3))
                        return _0x423d88[_0x965d42(0x1a0)](_0x53d5b1, _0x423d88[_0x965d42(0xa65)]);
                    if (!_0x23db31 && !_0x423d88[_0x965d42(0xcc0)](_0x42b0c8, _0x17cc35))
                        return _0x423d88[_0x965d42(0x9fb)](setTimeout, () => _0x51bc5e(''), -0x21d0 + 0x1 * -0x1de9 + 0x40e5), _0x423d88[_0x965d42(0x1a6)](_0x53d5b1, _0x423d88[_0x965d42(0x9ac)]), _0x410b95[_0x965d42(0x25e) + 'e'](_0x54b0b3, {
                            'audio': { 'url': _0x423d88[_0x965d42(0xbb7)] },
                            'mimetype': _0x423d88[_0x965d42(0xc63)],
                            'ptt': !![]
                        }, { 'quoted': _0x13288e });
                    try {
                        _0x423d88[_0x965d42(0xb6a)](setTimeout, () => _0x51bc5e('??'), 0x259 * 0x4 + -0x7 * -0x17f + -0x12b1);
                        const _0x1a9feb = _0x23db31 ? _0x965d42(0xa82) + _0x965d42(0xaf4) + _0x965d42(0x1cc) + _0x965d42(0x83b) : _0x423d88[_0x965d42(0xafe)];
                        await _0x410b95[_0x965d42(0x25e) + 'e'](_0x54b0b3, { 'text': _0x1a9feb }, { 'quoted': _0x13288e });
                        const {hentai: _0x237ba2} = _0x423d88[_0x965d42(0xad6)](require, _0x423d88[_0x965d42(0x37d)]), _0x26030c = _0x237ba2[Math[_0x965d42(0x49e)](_0x423d88[_0x965d42(0x3dc)](Math[_0x965d42(0xc7d)](), _0x237ba2[_0x965d42(0x6ba)]))];
                        await _0x410b95[_0x965d42(0x25e) + 'e'](_0x17cc35, {
                            'image': { 'url': _0x26030c },
                            'caption': _0x423d88[_0x965d42(0x70c)](_0x965d42(0x55d) + _0x965d42(0xa18) + _0x965d42(0x1e2) + _0x5c1b27 + '*\x0a', _0x35260a + _0x965d42(0x4bd) + new Date()[_0x965d42(0x26f) + _0x965d42(0x247)](_0x423d88[_0x965d42(0x943)])),
                            'mentions': [_0x17cc35]
                        }, { 'quoted': _0x13288e });
                    } catch (_0x5903a6) {
                        console[_0x965d42(0x347)](_0x423d88[_0x965d42(0x275)], _0x5903a6), _0x410b95[_0x965d42(0x25e) + 'e'](_0x54b0b3, { 'text': _0x965d42(0xa6b) + _0x965d42(0xb48) + _0x5903a6[_0x965d42(0x654)] }, { 'quoted': _0x13288e }), _0x423d88[_0x965d42(0x450)](setTimeout, () => _0x51bc5e(''), -0x19 * 0x2 + 0xf8a + -0xe2c);
                    }
                    break;
                }
            case _0x423d88[_0x965d42(0x828)]: {
                    if (_0x23db31 && !_0x423d88[_0x965d42(0xbc6)](_0x1614a9, _0x54b0b3))
                        return _0x423d88[_0x965d42(0xb2a)](_0x53d5b1, _0x423d88[_0x965d42(0x941)]);
                    if (!_0x23db31 && !_0x423d88[_0x965d42(0x1ca)](_0x42b0c8, _0x17cc35))
                        return _0x423d88[_0x965d42(0x66a)](setTimeout, () => _0x51bc5e(''), 0x95 * 0x12 + -0x1 * 0x71a + -0x234), _0x423d88[_0x965d42(0x3f3)](_0x53d5b1, _0x423d88[_0x965d42(0xaee)]), _0x410b95[_0x965d42(0x25e) + 'e'](_0x54b0b3, {
                            'audio': { 'url': _0x423d88[_0x965d42(0xbb7)] },
                            'mimetype': _0x423d88[_0x965d42(0xc63)],
                            'ptt': !![]
                        }, { 'quoted': _0x13288e });
                    try {
                        _0x423d88[_0x965d42(0x450)](setTimeout, () => _0x51bc5e(''), 0xc09 + 0x1f6 * 0xb + -0x1b5 * 0x13);
                        const _0x1afcda = _0x23db31 ? _0x965d42(0x8da) + _0x965d42(0xc78) + _0x965d42(0x80c) : _0x423d88[_0x965d42(0x504)];
                        await _0x410b95[_0x965d42(0x25e) + 'e'](_0x54b0b3, { 'text': _0x1afcda }, { 'quoted': _0x13288e });
                        const {ass: _0x514c18} = _0x423d88[_0x965d42(0x9ee)](require, _0x423d88[_0x965d42(0x37d)]), _0x3c95cf = _0x514c18[Math[_0x965d42(0x49e)](_0x423d88[_0x965d42(0x643)](Math[_0x965d42(0xc7d)](), _0x514c18[_0x965d42(0x6ba)]))];
                        await _0x410b95[_0x965d42(0x25e) + 'e'](_0x17cc35, {
                            'image': { 'url': _0x3c95cf },
                            'caption': _0x423d88[_0x965d42(0x41e)](_0x965d42(0x306) + _0x965d42(0xa3c) + 'a\x20' + _0x5c1b27 + '*\x0a', _0x35260a + _0x965d42(0x4bd) + new Date()[_0x965d42(0x26f) + _0x965d42(0x247)](_0x423d88[_0x965d42(0x943)])),
                            'mentions': [_0x17cc35]
                        }, { 'quoted': _0x13288e });
                    } catch (_0x52dd9e) {
                        console[_0x965d42(0x347)](_0x423d88[_0x965d42(0x7fb)], _0x52dd9e), _0x410b95[_0x965d42(0x25e) + 'e'](_0x54b0b3, { 'text': _0x965d42(0x35e) + _0x965d42(0x407) + _0x965d42(0x649) + _0x965d42(0xb79) + _0x52dd9e[_0x965d42(0x654)] }, { 'quoted': _0x13288e }), _0x423d88[_0x965d42(0x66a)](setTimeout, () => _0x51bc5e(''), 0x1a51 + -0x1 * 0x1e85 + -0x2 * -0x2b0);
                    }
                    break;
                }
            case _0x423d88[_0x965d42(0xa9a)]: {
                    if (_0x23db31 && !_0x423d88[_0x965d42(0x9ce)](_0x1614a9, _0x54b0b3))
                        return _0x423d88[_0x965d42(0x5e4)](_0x53d5b1, _0x423d88[_0x965d42(0x351)]);
                    if (!_0x23db31 && !_0x423d88[_0x965d42(0x5e4)](_0x42b0c8, _0x17cc35))
                        return _0x423d88[_0x965d42(0x66a)](setTimeout, () => _0x51bc5e(''), -0x19 * -0xfd + -0x168d + -0xfc), _0x423d88[_0x965d42(0x9d5)](_0x53d5b1, _0x423d88[_0x965d42(0xbb1)]), _0x410b95[_0x965d42(0x25e) + 'e'](_0x54b0b3, {
                            'audio': { 'url': _0x423d88[_0x965d42(0xbb7)] },
                            'mimetype': _0x423d88[_0x965d42(0xc63)],
                            'ptt': !![]
                        }, { 'quoted': _0x13288e });
                    try {
                        _0x423d88[_0x965d42(0x666)](setTimeout, () => _0x51bc5e(''), -0x683 * 0x1 + -0x267e + -0x1 * -0x2e2d);
                        const _0x242403 = _0x23db31 ? _0x965d42(0x9df) + _0x965d42(0xcf7) + _0x965d42(0xab9) + _0x965d42(0x371) : _0x423d88[_0x965d42(0x314)];
                        await _0x410b95[_0x965d42(0x25e) + 'e'](_0x54b0b3, { 'text': _0x242403 }, { 'quoted': _0x13288e });
                        const {gangbang: _0x4e8ddd} = _0x423d88[_0x965d42(0x3c0)](require, _0x423d88[_0x965d42(0x37d)]), _0x227da1 = _0x4e8ddd[Math[_0x965d42(0x49e)](_0x423d88[_0x965d42(0xd3e)](Math[_0x965d42(0xc7d)](), _0x4e8ddd[_0x965d42(0x6ba)]))];
                        await _0x410b95[_0x965d42(0x25e) + 'e'](_0x17cc35, {
                            'image': { 'url': _0x227da1 },
                            'caption': _0x423d88[_0x965d42(0x234)](_0x965d42(0x568) + _0x965d42(0x7e5) + '\x20' + _0x5c1b27 + '*\x0a', _0x35260a + _0x965d42(0x4bd) + new Date()[_0x965d42(0x26f) + _0x965d42(0x247)](_0x423d88[_0x965d42(0x943)])),
                            'mentions': [_0x17cc35]
                        }, { 'quoted': _0x13288e });
                    } catch (_0x913485) {
                        console[_0x965d42(0x347)](_0x423d88[_0x965d42(0x303)], _0x913485), _0x410b95[_0x965d42(0x25e) + 'e'](_0x54b0b3, { 'text': _0x965d42(0x6dc) + _0x965d42(0xd72) + _0x913485[_0x965d42(0x654)] }, { 'quoted': _0x13288e }), _0x423d88[_0x965d42(0x1bd)](setTimeout, () => _0x51bc5e(''), -0x1aa * -0xd + -0x1693 * -0x1 + -0x2b09);
                    }
                    break;
                }
            case _0x423d88[_0x965d42(0x9e5)]: {
                    if (_0x23db31 && !_0x423d88[_0x965d42(0x22b)](_0x1614a9, _0x54b0b3))
                        return _0x423d88[_0x965d42(0x699)](_0x53d5b1, _0x423d88[_0x965d42(0x483)]);
                    if (!_0x23db31 && !_0x423d88[_0x965d42(0x1b4)](_0x42b0c8, _0x17cc35))
                        return _0x423d88[_0x965d42(0x431)](setTimeout, () => _0x51bc5e(''), 0x13 * 0x98 + 0x1d1 + 0x2b * -0x47), _0x423d88[_0x965d42(0xaa4)](_0x53d5b1, _0x423d88[_0x965d42(0xadf)]), _0x410b95[_0x965d42(0x25e) + 'e'](_0x54b0b3, {
                            'audio': { 'url': _0x423d88[_0x965d42(0xbb7)] },
                            'mimetype': _0x423d88[_0x965d42(0xc63)],
                            'ptt': !![]
                        }, { 'quoted': _0x13288e });
                    try {
                        _0x423d88[_0x965d42(0xca2)](setTimeout, () => _0x51bc5e(''), 0x16ac + -0x5 * 0x287 + -0x8dd * 0x1);
                        const _0x36214c = _0x23db31 ? _0x965d42(0x36f) + _0x965d42(0xc74) + _0x965d42(0x6d1) + _0x965d42(0x870) : _0x423d88[_0x965d42(0x869)];
                        await _0x410b95[_0x965d42(0x25e) + 'e'](_0x54b0b3, { 'text': _0x36214c }, { 'quoted': _0x13288e });
                        const {kasedaiki: _0x561f21} = _0x423d88[_0x965d42(0xcd4)](require, _0x423d88[_0x965d42(0x37d)]), _0xe277bb = _0x561f21[Math[_0x965d42(0x49e)](_0x423d88[_0x965d42(0x643)](Math[_0x965d42(0xc7d)](), _0x561f21[_0x965d42(0x6ba)]))];
                        await _0x410b95[_0x965d42(0x25e) + 'e'](_0x17cc35, {
                            'image': { 'url': _0xe277bb },
                            'caption': _0x423d88[_0x965d42(0x4b1)](_0x965d42(0xd3f) + _0x965d42(0x3cf) + _0x5c1b27 + _0x965d42(0x544), _0x35260a + _0x965d42(0x4bd) + new Date()[_0x965d42(0x26f) + _0x965d42(0x247)](_0x423d88[_0x965d42(0x943)])),
                            'mentions': [_0x17cc35]
                        }, { 'quoted': _0x13288e });
                    } catch (_0x523a46) {
                        console[_0x965d42(0x347)](_0x423d88[_0x965d42(0x4c0)], _0x523a46), _0x410b95[_0x965d42(0x25e) + 'e'](_0x54b0b3, { 'text': _0x965d42(0x25d) + _0x965d42(0xb3e) + _0x965d42(0x24f) + _0x523a46[_0x965d42(0x654)] }, { 'quoted': _0x13288e }), _0x423d88[_0x965d42(0xcb9)](setTimeout, () => _0x51bc5e(''), -0xc * -0x23f + 0x66f + -0x1 * 0x2037);
                    }
                    break;
                }
            case _0x423d88[_0x965d42(0xbef)]: {
                    if (_0x23db31 && !_0x423d88[_0x965d42(0x93c)](_0x1614a9, _0x54b0b3))
                        return _0x423d88[_0x965d42(0x534)](_0x53d5b1, _0x423d88[_0x965d42(0x868)]);
                    if (!_0x23db31 && !_0x423d88[_0x965d42(0x95e)](_0x42b0c8, _0x17cc35))
                        return _0x423d88[_0x965d42(0x3cb)](setTimeout, () => _0x51bc5e(''), 0x1177 * -0x2 + -0x51a * -0x6 + 0x57e), _0x423d88[_0x965d42(0x740)](_0x53d5b1, _0x423d88[_0x965d42(0xb71)]), _0x410b95[_0x965d42(0x25e) + 'e'](_0x54b0b3, {
                            'audio': { 'url': _0x423d88[_0x965d42(0xbb7)] },
                            'mimetype': _0x423d88[_0x965d42(0xc63)],
                            'ptt': !![]
                        }, { 'quoted': _0x13288e });
                    try {
                        _0x423d88[_0x965d42(0xb4c)](setTimeout, () => _0x51bc5e(''), 0x1db3 * 0x1 + 0xb1f + 0xe * -0x2d5);
                        const _0x159f21 = _0x23db31 ? _0x965d42(0xbc7) + _0x965d42(0x925) + _0x965d42(0x3c9) : _0x423d88[_0x965d42(0x7d2)];
                        await _0x410b95[_0x965d42(0x25e) + 'e'](_0x54b0b3, { 'text': _0x159f21 }, { 'quoted': _0x13288e });
                        const {neko2: _0x567fd7} = _0x423d88[_0x965d42(0x1f2)](require, _0x423d88[_0x965d42(0x37d)]), _0x25d076 = _0x567fd7[Math[_0x965d42(0x49e)](_0x423d88[_0x965d42(0x3f8)](Math[_0x965d42(0xc7d)](), _0x567fd7[_0x965d42(0x6ba)]))];
                        await _0x410b95[_0x965d42(0x25e) + 'e'](_0x17cc35, {
                            'image': { 'url': _0x25d076 },
                            'caption': _0x423d88[_0x965d42(0xc00)](_0x965d42(0x271) + _0x5c1b27 + _0x965d42(0x498), _0x35260a + _0x965d42(0x4bd) + new Date()[_0x965d42(0x26f) + _0x965d42(0x247)](_0x423d88[_0x965d42(0x943)])),
                            'mentions': [_0x17cc35]
                        }, { 'quoted': _0x13288e });
                    } catch (_0x4b9076) {
                        console[_0x965d42(0x347)](_0x423d88[_0x965d42(0x91b)], _0x4b9076), _0x410b95[_0x965d42(0x25e) + 'e'](_0x54b0b3, { 'text': _0x965d42(0x780) + _0x965d42(0x6af) + _0x4b9076[_0x965d42(0x654)] }, { 'quoted': _0x13288e }), _0x423d88[_0x965d42(0xa5b)](setTimeout, () => _0x51bc5e(_0x965d42(0x3a4)), -0x1077 + 0x1 * -0x1528 + 0x1 * 0x26cb);
                    }
                    break;
                }
            case _0x423d88[_0x965d42(0x92f)]: {
                    try {
                        const _0xda7553 = _0x4d25d3[_0x965d42(0x38a)]('\x20')[_0x965d42(0x924)](0xa2a + -0x2137 + 0x170e)[_0x965d42(0x706)]('\x20');
                        if (!_0xda7553)
                            return _0x423d88[_0x965d42(0x7b0)](_0x53d5b1, _0x965d42(0x78b) + _0x965d42(0xa43) + _0x965d42(0x603) + _0x4396ff + (_0x965d42(0xcfb) + _0x965d42(0x65a)));
                        const _0x5248e3 = _0x965d42(0x824) + _0x965d42(0x56b) + _0x965d42(0xbf8) + _0x965d42(0x26c) + _0x965d42(0x694) + _0x423d88[_0x965d42(0xac0)](encodeURIComponent, _0xda7553), _0x582333 = await axios[_0x965d42(0x1df)](_0x5248e3, { 'responseType': _0x423d88[_0x965d42(0x930)] });
                        await _0x410b95[_0x965d42(0x25e) + 'e'](_0x54b0b3, {
                            'image': Buffer[_0x965d42(0x8f7)](_0x582333[_0x965d42(0xa63)], _0x423d88[_0x965d42(0xa2d)]),
                            'mimetype': _0x423d88[_0x965d42(0x488)],
                            'caption': _0x965d42(0x372) + _0x965d42(0x39c) + _0x965d42(0x8dc) + _0x965d42(0xb6b) + _0xda7553,
                            'mentions': [_0x17cc35]
                        }, { 'quoted': _0x13288e });
                    } catch (_0x887900) {
                        console[_0x965d42(0x347)](_0x423d88[_0x965d42(0xcfe)], _0x887900), _0x423d88[_0x965d42(0x7e7)](_0x53d5b1, _0x423d88[_0x965d42(0x85d)]);
                    }
                    break;
                }
            case _0x423d88[_0x965d42(0x3af)]:
            case 's':
                try {
                    const {exec: _0xf63b94} = _0x423d88[_0x965d42(0x56f)](require, _0x423d88[_0x965d42(0x775)]), _0x328ff0 = _0x423d88[_0x965d42(0x6c3)](require, 'fs');
                    if (!_0x13288e[_0x965d42(0x654)][_0x965d42(0xb64) + _0x965d42(0xcba)] || !_0x13288e[_0x965d42(0x654)][_0x965d42(0xb64) + _0x965d42(0xcba)][_0x965d42(0x514) + 'o'][_0x965d42(0x4d7) + _0x965d42(0x9c2)])
                        return _0x410b95[_0x965d42(0x25e) + 'e'](_0x54b0b3, { 'text': _0x423d88[_0x965d42(0xb63)] }, { 'quoted': _0x13288e });
                    _0x410b95[_0x965d42(0x25e) + 'e'](_0x54b0b3, { 'text': _0x423d88[_0x965d42(0xb04)] }, { 'quoted': _0x13288e });
                    async function _0x59e339(_0x1104d8, _0x552736) {
                        const _0x1b4979 = _0x965d42, _0x4a2d9e = await _0x1bb139[_0x1b4979(0x364)](downloadContentFromMessage, _0x1104d8, _0x552736);
                        let _0x14c0d2 = Buffer[_0x1b4979(0x8f7)]([]);
                        for await (const _0x50a772 of _0x4a2d9e) {
                            _0x14c0d2 = Buffer[_0x1b4979(0x3f9)]([
                                _0x14c0d2,
                                _0x50a772
                            ]);
                        }
                        return _0x14c0d2;
                    }
                    function _0x5d5275(_0x1a16ee) {
                        const _0x1e47f4 = _0x965d42;
                        return '' + Math[_0x1e47f4(0x49e)](_0x1bb139[_0x1e47f4(0x944)](Math[_0x1e47f4(0xc7d)](), -0x2 * -0xb3e + 0xf84 * -0x2 + 0x2f9c)) + _0x1a16ee;
                    }
                    const _0x4476b8 = _0x13288e[_0x965d42(0x654)][_0x965d42(0xb64) + _0x965d42(0xcba)][_0x965d42(0x514) + 'o'][_0x965d42(0x4d7) + _0x965d42(0x9c2)], _0x789729 = _0x4476b8[_0x965d42(0x77e) + 'ge'] || _0x4476b8[_0x965d42(0xa6f) + 'ge'] || _0x4476b8[_0x965d42(0xb3a) + _0x965d42(0xb78)];
                    if (!_0x789729 || !_0x789729[_0x965d42(0x2c5)])
                        return _0x410b95[_0x965d42(0x25e) + 'e'](_0x54b0b3, { 'text': _0x423d88[_0x965d42(0x73e)] }, { 'quoted': _0x13288e });
                    const _0x58d33f = _0x789729[_0x965d42(0x2c5)][_0x965d42(0xd16)](_0x423d88[_0x965d42(0x646)]) ? _0x423d88[_0x965d42(0x646)] : _0x789729[_0x965d42(0x2c5)][_0x965d42(0xd16)](_0x423d88[_0x965d42(0x75c)]) ? _0x423d88[_0x965d42(0x75c)] : _0x423d88[_0x965d42(0x3af)], _0x34bab3 = await _0x423d88[_0x965d42(0xa0f)](_0x59e339, _0x789729, _0x58d33f), _0x45adf6 = _0x423d88[_0x965d42(0x44d)](_0x5d5275, '.' + _0x789729[_0x965d42(0x2c5)][_0x965d42(0x38a)]('/')[-0x2383 + 0xf27 + 0x145d]);
                    _0x328ff0[_0x965d42(0xaf8) + _0x965d42(0x420)](_0x45adf6, _0x34bab3);
                    const _0x3dd513 = _0x423d88[_0x965d42(0x454)](_0x5d5275, _0x423d88[_0x965d42(0xcb4)]), _0x2319d2 = _0x423d88[_0x965d42(0x614)], _0x2df332 = _0x13288e[_0x965d42(0xb75)] || _0x423d88[_0x965d42(0x94a)], _0x407262 = _0x965d42(0x287) + _0x965d42(0x97e) + _0x13288e[_0x965d42(0xb75)] + _0x965d42(0xa48) + _0x9548ae, _0x565586 = {
                            'sticker-pack-name': _0x2df332,
                            'sticker-pack-publisher': _0x407262
                        }, _0x5e758d = Buffer[_0x965d42(0x8f7)]([
                            -0x4 * 0x1fc + -0x1a73 + 0x22ac,
                            -0x29 * -0xa7 + 0x5e * 0x19 + -0x23a4,
                            0xffa + 0x2646 + -0x3616,
                            0x8a * -0xb + -0x8e * -0x7 + -0x20c * -0x1,
                            0xde5 + -0x72f + -0x6ae,
                            0x1087 + -0x9 * -0x1b1 + 0x4 * -0x7f0,
                            -0xf4c + 0x1886 + -0x93a,
                            0x17a5 * -0x1 + 0x3a * -0x22 + -0x19 * -0x141,
                            -0x1aac + 0x26dc + -0xc2f * 0x1,
                            -0x68f * -0x1 + 0x2593 + -0x2c22,
                            -0x17 * -0xa1 + -0x9 * 0x2f1 + -0xc43 * -0x1,
                            0x1aa2 + 0x1491 + 0x1 * -0x2edc,
                            -0x1bbc + -0x1af3 * 0x1 + 0x1 * 0x36b6,
                            0x655 * 0x5 + -0x52f * -0x5 + -0x3994,
                            0x2 * 0xf4f + -0x1 * 0xab9 + 0x1 * -0x13e5,
                            -0x1e26 + 0x2 * 0xb47 + 0x3cc * 0x2,
                            0x1fb4 + 0x92d + -0x28e1,
                            0xd5c + 0x22c9 + -0x3025,
                            0xc * -0xb1 + -0x19b1 + -0x3d * -0x8f,
                            -0x39 * 0x8f + 0x892 + 0x1745,
                            0x22f8 + -0x3 * 0xb39 + -0x14d,
                            -0x1ad8 + 0x1 * 0x1727 + -0x9 * -0x69
                        ]), _0x51c445 = Buffer[_0x965d42(0x8f7)](JSON[_0x965d42(0x564)](_0x565586), _0x423d88[_0x965d42(0xc0f)]), _0x1f57b1 = Buffer[_0x965d42(0x3f9)]([
                            _0x5e758d,
                            _0x51c445
                        ]);
                    _0x1f57b1[_0x965d42(0x78d) + 'E'](_0x51c445[_0x965d42(0x6ba)], 0x4 * 0x911 + 0x12cb + -0x3701, 0x1cc * 0x2 + -0x13 * -0x15a + -0x1d42), _0x328ff0[_0x965d42(0xaf8) + _0x965d42(0x420)](_0x2319d2, _0x1f57b1);
                    let _0x5bfa98;
                    _0x423d88[_0x965d42(0x83f)](_0x58d33f, _0x423d88[_0x965d42(0x75c)]) ? _0x5bfa98 = _0x965d42(0x1d3) + _0x45adf6 + (_0x965d42(0x3c7) + _0x965d42(0x8e3) + _0x965d42(0xb4e) + _0x965d42(0xb80) + _0x965d42(0xcf3) + _0x965d42(0xbe1) + _0x965d42(0xccf) + _0x965d42(0xc6d) + _0x965d42(0xd32) + _0x965d42(0x9a3) + _0x965d42(0x4ec) + _0x965d42(0xa10) + _0x965d42(0x394) + _0x965d42(0xc16) + _0x965d42(0x1d5) + _0x965d42(0x18c) + _0x965d42(0xae6)) + _0x3dd513 : _0x5bfa98 = _0x965d42(0x1d3) + _0x45adf6 + (_0x965d42(0x3c7) + _0x965d42(0x8e3) + _0x965d42(0xb4e) + _0x965d42(0xb80) + _0x965d42(0xcf3) + _0x965d42(0x6bc) + _0x965d42(0xd70) + _0x965d42(0xa31) + _0x965d42(0x705) + _0x965d42(0x9b0) + _0x965d42(0x7ae) + _0x965d42(0x2b5) + _0x965d42(0x1f5)) + _0x3dd513, _0x423d88[_0x965d42(0xad2)](_0xf63b94, _0x5bfa98, _0x5e8312 => {
                        const _0x20431e = _0x965d42, _0xdc7ff8 = { 'cWidC': _0x423d88[_0x20431e(0x3d5)] };
                        _0x328ff0[_0x20431e(0x325)](_0x45adf6);
                        if (_0x5e8312)
                            return console[_0x20431e(0x347)](_0x5e8312), _0x410b95[_0x20431e(0x25e) + 'e'](_0x54b0b3, { 'text': _0x423d88[_0x20431e(0x7c9)] }, { 'quoted': _0x13288e });
                        _0x423d88[_0x20431e(0x9d6)](_0xf63b94, _0x20431e(0x1c1) + _0x20431e(0xa8e) + _0x2319d2 + '\x20' + _0x3dd513 + _0x20431e(0xad5) + _0x3dd513, _0x11ee4c => {
                            const _0x3e8575 = _0x20431e;
                            _0x328ff0[_0x3e8575(0x325)](_0x2319d2);
                            if (_0x11ee4c)
                                return console[_0x3e8575(0x347)](_0x11ee4c), _0x410b95[_0x3e8575(0x25e) + 'e'](_0x54b0b3, { 'text': _0xdc7ff8[_0x3e8575(0x1e6)] }, { 'quoted': _0x13288e });
                            _0x410b95[_0x3e8575(0x25e) + 'e'](_0x54b0b3, { 'sticker': _0x328ff0[_0x3e8575(0x3b5) + 'nc'](_0x3dd513) }, { 'quoted': _0x13288e }), _0x328ff0[_0x3e8575(0x325)](_0x3dd513);
                        });
                    });
                } catch (_0x40c696) {
                    console[_0x965d42(0x347)](_0x40c696), _0x410b95[_0x965d42(0x25e) + 'e'](_0x54b0b3, { 'text': _0x423d88[_0x965d42(0x97f)] }, { 'quoted': _0x13288e });
                }
                break;
            case _0x423d88[_0x965d42(0xa98)]: {
                    if (!_0x423d88[_0x965d42(0xc55)](_0x4cadf5, _0x54b0b3))
                        return _0x423d88[_0x965d42(0x926)](_0x53d5b1, _0x965d42(0xcb0) + _0x965d42(0x802) + _0x965d42(0xb99) + _0x4396ff + (_0x965d42(0x6d5) + _0x965d42(0x270)));
                    const _0x190386 = (_0x965d42(0xbb9) + _0x965d42(0x4ef) + _0x965d42(0xa9c) + _0x965d42(0x8bb) + _0x965d42(0xa52) + _0x965d42(0x6cd) + _0x965d42(0x2a7) + _0x965d42(0x2a7) + _0x965d42(0x2a7) + _0x965d42(0x2a7) + _0x965d42(0x2a7) + _0x965d42(0x67f) + _0x965d42(0x974) + _0x965d42(0x68d) + _0x965d42(0xbd1) + _0x965d42(0x3f4) + _0x965d42(0xafc) + _0x965d42(0x4c8) + _0x965d42(0x2a7) + _0x965d42(0x2a7) + _0x965d42(0x2a7) + _0x965d42(0x2a7) + _0x965d42(0x627) + _0x965d42(0x843) + _0x965d42(0x947) + _0x965d42(0x877) + _0x965d42(0xc51) + _0x965d42(0x843) + _0x965d42(0x60f) + _0x965d42(0x2a7) + _0x965d42(0x2a7) + _0x965d42(0x2a7) + _0x965d42(0x2a7) + _0x965d42(0x2a7) + _0x965d42(0xa84) + _0x965d42(0x94c) + _0x965d42(0x2a7) + _0x965d42(0x2a7) + _0x965d42(0x2a7) + _0x965d42(0xae8) + _0x4396ff + (_0x965d42(0x195) + _0x965d42(0x659) + _0x965d42(0x2a7) + _0x965d42(0x375) + _0x965d42(0x34f)) + _0x4396ff + (_0x965d42(0x47a) + _0x965d42(0x2a7) + _0x965d42(0x2a7) + _0x965d42(0x74d) + _0x965d42(0x2a7) + _0x965d42(0x2a7) + _0x965d42(0x2a7) + _0x965d42(0x2a7) + _0x965d42(0x2a7) + _0x965d42(0x8b4) + _0x965d42(0x51b) + _0x965d42(0x62f) + _0x965d42(0x2a7) + _0x965d42(0x2a7) + _0x965d42(0xae8)) + _0x4396ff + (_0x965d42(0x8ec) + _0x965d42(0x665) + _0x965d42(0x2a7) + _0x965d42(0x2a7) + _0x965d42(0x628)) + _0x4396ff + (_0x965d42(0xcaa) + _0x965d42(0x1ce) + _0x965d42(0xc27) + _0x965d42(0x2a7) + _0x965d42(0x628)) + _0x4396ff + (_0x965d42(0xb11) + _0x965d42(0x6bb) + _0x965d42(0x2a7) + _0x965d42(0x2a7) + _0x965d42(0x2a7) + _0x965d42(0x2a7) + _0x965d42(0x2a7) + _0x965d42(0x788) + _0x965d42(0xce3) + _0x965d42(0xd10) + _0x965d42(0x2a7) + _0x965d42(0x2a7) + _0x965d42(0x616) + '\x20') + _0x4396ff + (_0x965d42(0xd0c) + _0x965d42(0x4cf) + _0x965d42(0x2a7) + _0x965d42(0x2a7) + _0x965d42(0x628)) + _0x4396ff + (_0x965d42(0xb1b) + _0x965d42(0xaeb) + _0x965d42(0x232) + _0x965d42(0x2a7) + _0x965d42(0x628)) + _0x4396ff + (_0x965d42(0x2dd) + _0x965d42(0xcd8) + _0x965d42(0x1f7) + _0x965d42(0x58f) + _0x965d42(0x3c6) + _0x965d42(0x2a7) + _0x965d42(0x2a7) + _0x965d42(0x2a7) + _0x965d42(0x2a7) + _0x965d42(0x2a7) + _0x965d42(0x831) + _0x965d42(0x668) + _0x965d42(0xb67) + _0x965d42(0x2a7) + _0x965d42(0x2a7) + _0x965d42(0x375) + '\x20') + _0x4396ff + (_0x965d42(0xba8) + _0x965d42(0x7bc) + _0x965d42(0xbc1) + _0x965d42(0x299) + _0x965d42(0x3c6) + _0x965d42(0x2a7) + _0x965d42(0x2a7) + _0x965d42(0x2a7) + _0x965d42(0x2a7) + _0x965d42(0x2a7) + _0x965d42(0x703) + _0x965d42(0x843) + _0x965d42(0x681) + _0x965d42(0x39a) + _0x965d42(0x843) + _0x965d42(0x751) + _0x965d42(0x693) + _0x965d42(0x2a7) + _0x965d42(0x2a7) + _0x965d42(0x2a7) + _0x965d42(0x2a7) + _0x965d42(0xb0d) + _0x965d42(0xbf4) + _0x965d42(0x518) + _0x965d42(0x2a7) + _0x965d42(0x2a7) + _0x965d42(0x2a7) + _0x965d42(0x29b) + _0x965d42(0xbe0) + _0x965d42(0x35f) + _0x965d42(0x5c3) + _0x965d42(0x2a7) + _0x965d42(0x616) + _0x965d42(0xb93) + _0x965d42(0xb96) + _0x965d42(0x7d5) + _0x965d42(0x848) + _0x965d42(0x914) + _0x965d42(0x8d1) + _0x965d42(0xd5e) + _0x965d42(0xbba) + _0x965d42(0x4a6) + _0x965d42(0x576) + _0x965d42(0x2a7) + _0x965d42(0x51f) + _0x965d42(0x229) + _0x965d42(0xaa3) + _0x965d42(0x7b2) + _0x965d42(0x2a7) + _0x965d42(0x54c) + _0x965d42(0x2e0) + _0x965d42(0x2a7) + _0x965d42(0x2a7) + _0x965d42(0x2a7) + _0x965d42(0x2a7) + _0x965d42(0x627) + _0x965d42(0x1fb) + _0x965d42(0x804) + _0x965d42(0xbf1) + _0x965d42(0x2a7) + _0x965d42(0x2a7) + _0x965d42(0x84f) + _0x965d42(0x5d3) + _0x965d42(0x7da) + _0x965d42(0x797) + _0x965d42(0x92a) + _0x965d42(0x54c) + _0x965d42(0xa8a) + _0x965d42(0xa9b) + _0x965d42(0x5f1) + _0x965d42(0x6d6) + _0x965d42(0x8fc) + _0x965d42(0x3d7) + _0x965d42(0x2a7) + _0x965d42(0x2a7) + _0x965d42(0x2a7) + _0x965d42(0x2a7) + _0x965d42(0x2a7) + _0x965d42(0x436) + _0x965d42(0xa52) + _0x965d42(0x6ee) + _0x965d42(0x455) + _0x965d42(0xa52) + _0x965d42(0x8b9)))[_0x965d42(0xd12)]();
                    try {
                        await _0x410b95[_0x965d42(0x25e) + 'e'](_0x54b0b3, {
                            'image': { 'url': _0x423d88[_0x965d42(0x6fb)] },
                            'caption': _0x190386,
                            'footer': _0x965d42(0xaff) + _0x4396ff + (_0x965d42(0x738) + _0x965d42(0x752)),
                            'mentions': [_0x17cc35]
                        }, { 'quoted': _0x13288e });
                    } catch (_0x39874a) {
                        console[_0x965d42(0x347)](_0x423d88[_0x965d42(0x853)], _0x39874a), await _0x410b95[_0x965d42(0x25e) + 'e'](_0x54b0b3, {
                            'text': _0x965d42(0x25f) + _0x965d42(0x4fe) + _0x190386,
                            'mentions': [_0x17cc35]
                        }, { 'quoted': _0x13288e });
                    }
                    break;
                }
            case _0x423d88[_0x965d42(0x399)]:
            case _0x423d88[_0x965d42(0xb3b)]: {
                    if (!_0x423d88[_0x965d42(0x590)](_0x4cadf5, _0x54b0b3))
                        return _0x423d88[_0x965d42(0x5f7)](_0x53d5b1, _0x423d88[_0x965d42(0x51d)](_0x423d88[_0x965d42(0xcd9)](_0x423d88[_0x965d42(0x21a)], _0x4396ff), _0x423d88[_0x965d42(0xb5a)]));
                    if (!_0x23db31)
                        return _0x423d88[_0x965d42(0x35c)](_0x53d5b1, _0x423d88[_0x965d42(0x647)]);
                    try {
                        const _0x2648fb = _0x423d88[_0x965d42(0x89f)](_0x5d3966), _0x49f95e = await _0x410b95[_0x965d42(0x713) + _0x965d42(0x7dc)](_0x54b0b3), _0x1604f0 = _0x49f95e[_0x965d42(0xa0a)] || _0x423d88[_0x965d42(0x8e1)], _0x2e1779 = Object[_0x965d42(0xcb8)](_0x2648fb)[_0x965d42(0x94d)](([_0x5a2b13]) => !_0x2648fb[_0x965d42(0x93b)]?.[_0x965d42(0xd16)](_0x5a2b13) && _0x49f95e[_0x965d42(0x360) + 'ts'][_0x965d42(0x183)](_0x4410a9 => _0x4410a9['id'] === _0x5a2b13))[_0x965d42(0x21e)](([_0x2649c9, _0x1957d6]) => _0x965d42(0x936) + _0x2649c9[_0x965d42(0x3ba)](_0x965d42(0x3fe) + _0x965d42(0x377), '') + '\x20(' + _0x1957d6[_0x965d42(0x96e)] + _0x965d42(0xada) + _0x1604f0);
                        if (_0x423d88[_0x965d42(0x887)](_0x2e1779[_0x965d42(0x6ba)], -0x37 * 0xb + -0x19f9 + -0xe2b * -0x2))
                            return _0x423d88[_0x965d42(0x1b6)](_0x53d5b1, _0x965d42(0x69f) + _0x1604f0 + (_0x965d42(0x84b) + _0x965d42(0xd73) + _0x965d42(0x1d2) + _0x965d42(0x707)));
                        const _0x449830 = _0x965d42(0xd4b) + _0x965d42(0x2ea) + _0x965d42(0x58b) + _0x1604f0 + (_0x965d42(0xd3c) + _0x965d42(0x42a) + _0x965d42(0x7c5)) + _0x2e1779[_0x965d42(0x6ba)] + _0x965d42(0x1fa) + _0x2e1779[_0x965d42(0x706)]('\x0a'), _0x56c096 = _0x2e1779[_0x965d42(0x21e)](_0x4c6973 => _0x4c6973[_0x965d42(0x38a)]('@')[-0x1 * -0xc5b + 0x1074 + -0x1cce * 0x1][_0x965d42(0x38a)]('\x20')[-0x193b + -0x7 * -0x16a + 0xf55] + (_0x965d42(0x3fe) + _0x965d42(0x377)));
                        await _0x410b95[_0x965d42(0x25e) + 'e'](_0x54b0b3, {
                            'text': _0x449830,
                            'mentions': _0x56c096
                        }, { 'quoted': _0x13288e });
                    } catch (_0x4c5702) {
                        console[_0x965d42(0x347)](_0x423d88[_0x965d42(0x9aa)], _0x4c5702), _0x423d88[_0x965d42(0x8d8)](_0x53d5b1, _0x423d88[_0x965d42(0x559)]);
                    }
                    break;
                }
            case _0x423d88[_0x965d42(0xc67)]:
            case _0x423d88[_0x965d42(0xcac)]: {
                    if (!_0x23db31)
                        return _0x423d88[_0x965d42(0x390)](_0x53d5b1, _0x423d88[_0x965d42(0x921)]);
                    if (!_0x3d070f)
                        return _0x423d88[_0x965d42(0xb62)](_0x53d5b1, _0x423d88[_0x965d42(0x7f1)]);
                    const _0x260885 = _0x4d25d3[_0x965d42(0x38a)]('\x20'), _0x1b43a0 = _0x260885[-0x631 * -0x5 + -0xb53 * -0x3 + -0xb * 0x5e7];
                    if (!_0x1b43a0 || ![
                            '0',
                            '1'
                        ][_0x965d42(0xd16)](_0x1b43a0))
                        return _0x423d88[_0x965d42(0x617)](_0x53d5b1, _0x965d42(0x9cc) + _0x965d42(0xcb1) + _0x4396ff + (_0x965d42(0x73c) + _0x965d42(0xce5)) + _0x4396ff + (_0x965d42(0x1f3) + _0x965d42(0x77a)));
                    _0x423d88[_0x965d42(0xaac)](_0x491b0b, _0x54b0b3);
                    const _0x450e93 = _0x423d88[_0x965d42(0x89f)](_0xdd9c52);
                    _0x450e93[_0x54b0b3][_0x965d42(0x35d)] = _0x423d88[_0x965d42(0xce0)](_0x1b43a0, '1'), _0x423d88[_0x965d42(0x9d5)](_0x403c70, _0x450e93);
                    const _0x173734 = _0x423d88[_0x965d42(0x4e3)](_0x1b43a0, '1') ? _0x423d88[_0x965d42(0xc17)] : _0x423d88[_0x965d42(0x7ba)];
                    _0x423d88[_0x965d42(0x326)](_0x53d5b1, _0x173734 + (_0x965d42(0x7d9) + _0x965d42(0x505)) + (_0x423d88[_0x965d42(0x39b)](_0x1b43a0, '1') ? _0x423d88[_0x965d42(0x1c2)] : _0x423d88[_0x965d42(0x89c)]));
                    break;
                }
            case _0x423d88[_0x965d42(0x3a7)]:
            case _0x423d88[_0x965d42(0x51c)]: {
                    if (!_0x506714)
                        return _0x423d88[_0x965d42(0x315)](_0x53d5b1, _0x423d88[_0x965d42(0x69a)]);
                    const _0x325a77 = _0x13288e[_0x965d42(0x654)][_0x965d42(0xb64) + _0x965d42(0xcba)]?.[_0x965d42(0x514) + 'o']?.[_0x965d42(0x1cd) + 'id']?.[-0x18a4 + -0x2287 * -0x1 + -0x1 * 0x9e3], [_0x9d7a8b, , _0x2779dd] = _0x4d25d3[_0x965d42(0x38a)](/\s+/);
                    if (_0x423d88[_0x965d42(0xcdd)](!_0x325a77, !_0x2779dd) || _0x423d88[_0x965d42(0x55a)](isNaN, _0x2779dd))
                        return _0x423d88[_0x965d42(0x1b4)](_0x53d5b1, _0x965d42(0x9cc) + _0x965d42(0xcb1) + _0x4396ff + (_0x965d42(0x5a2) + _0x965d42(0xcc9) + _0x965d42(0xc0d)) + _0x4396ff + (_0x965d42(0x5a2) + _0x965d42(0x29e) + _0x965d42(0xb45)));
                    const _0x265e37 = _0x423d88[_0x965d42(0x95e)](parseInt, _0x2779dd[_0x965d42(0x3ba)](/[.,]/g, ''));
                    if (_0x423d88[_0x965d42(0x8ab)](_0x265e37, -0x16b8 + -0x1 * 0x4c + 0x1704) || _0x423d88[_0x965d42(0x6ef)](_0x265e37, 0x1 * -0x1d793 + -0x26489 + 0x5c2bc))
                        return _0x423d88[_0x965d42(0x416)](_0x53d5b1, _0x423d88[_0x965d42(0x816)]);
                    try {
                        const _0x3c580d = _0x423d88[_0x965d42(0x7b8)](_0x5d3966), _0x3af999 = _0x423d88[_0x965d42(0x680)](_0x325a77[_0x965d42(0x3ba)](/@s\.whatsapp\.net/g, ''), _0x423d88[_0x965d42(0x445)]);
                        if (!_0x3c580d[_0x3af999])
                            _0x3c580d[_0x3af999] = { 'fundos': 0x0 };
                        _0x3c580d[_0x3af999][_0x965d42(0x1e5)] = _0x423d88[_0x965d42(0x758)](_0x265e37, -0x7 * -0x2f3 + -0xa62 + -0xa43) ? -0x19 + -0x1a * -0x164 + -0x240f : Math[_0x965d42(0x1c7)](_0x423d88[_0x965d42(0x34a)](_0x3c580d[_0x3af999][_0x965d42(0x1e5)], _0x265e37), -0x6bcf * 0x5 + -0x1422 * -0x13 + -0x22325 * -0x1), _0x423d88[_0x965d42(0x836)](_0x2028ab, _0x3c580d);
                        const _0x1357fa = _0x423d88[_0x965d42(0x4e3)](_0x265e37, 0x1 * 0x103a + 0x728 * 0x2 + -0x1e8a) ? _0x423d88[_0x965d42(0x3c8)] : _0x423d88[_0x965d42(0x51d)]('+', _0x265e37[_0x965d42(0x9c7) + _0x965d42(0x588)](_0x423d88[_0x965d42(0x943)])), _0x1dbc03 = _0x3c580d[_0x3af999][_0x965d42(0x1e5)][_0x965d42(0x9c7) + _0x965d42(0x588)](_0x423d88[_0x965d42(0x943)]);
                        _0x423d88[_0x965d42(0xad2)](_0x53d5b1, _0x965d42(0x3aa) + (_0x423d88[_0x965d42(0xa1f)](_0x265e37, -0x2a2 + -0x1ca0 + 0x1f42 * 0x1) ? _0x423d88[_0x965d42(0x847)] : _0x423d88[_0x965d42(0xac2)]) + (_0x965d42(0x88e) + _0x965d42(0x339)) + _0x3af999[_0x965d42(0x38a)]('@')[-0xf59 + 0x1f39 * -0x1 + -0xf86 * -0x3] + _0x965d42(0xa7e) + _0x1357fa + (_0x965d42(0x88c) + _0x965d42(0x49a)) + _0x1dbc03, { 'mentions': [_0x3af999] });
                    } catch (_0x1accbe) {
                        console[_0x965d42(0x347)](_0x423d88[_0x965d42(0x985)], _0x1accbe), _0x423d88[_0x965d42(0x915)](_0x53d5b1, _0x423d88[_0x965d42(0x9fd)]);
                    }
                    break;
                }
            case _0x423d88[_0x965d42(0x75f)]:
            case _0x423d88[_0x965d42(0xbe6)]: {
                    if (!_0x423d88[_0x965d42(0x935)](_0x4cadf5, _0x54b0b3))
                        return _0x423d88[_0x965d42(0xb62)](_0x53d5b1, _0x423d88[_0x965d42(0x3bc)](_0x423d88[_0x965d42(0x3e6)](_0x423d88[_0x965d42(0x21a)], _0x4396ff), _0x423d88[_0x965d42(0xb5a)]));
                    const _0xceacd2 = _0x423d88[_0x965d42(0x490)](_0x5d3966);
                    if (_0xceacd2[_0x965d42(0x93b)]?.[_0x965d42(0xd16)](_0x17cc35))
                        return _0x423d88[_0x965d42(0x7c2)](_0x53d5b1, _0x423d88[_0x965d42(0x376)]);
                    const _0x4d239c = {
                            'Eren': {
                                'hp': 0x78,
                                'ataque': 0x1e,
                                'defesa': 0x14,
                                'habilidade': _0x423d88[_0x965d42(0x4fb)]
                            },
                            'Mikasa': {
                                'hp': 0x64,
                                'ataque': 0x19,
                                'defesa': 0xf,
                                'habilidade': _0x423d88[_0x965d42(0x6b7)]
                            },
                            'Levi': {
                                'hp': 0x5a,
                                'ataque': 0x23,
                                'defesa': 0xa,
                                'habilidade': _0x423d88[_0x965d42(0xc9d)]
                            },
                            'Armin': {
                                'hp': 0x50,
                                'ataque': 0xf,
                                'defesa': 0x19,
                                'habilidade': _0x423d88[_0x965d42(0x56e)]
                            },
                            'Historia': {
                                'hp': 0x5f,
                                'ataque': 0x14,
                                'defesa': 0x1e,
                                'habilidade': _0x423d88[_0x965d42(0x4b5)]
                            },
                            'Erwin': {
                                'hp': 0x6e,
                                'ataque': 0x1c,
                                'defesa': 0x12,
                                'habilidade': _0x423d88[_0x965d42(0x745)]
                            },
                            'Zeke': {
                                'hp': 0x96,
                                'ataque': 0x28,
                                'defesa': 0x28,
                                'habilidade': _0x423d88[_0x965d42(0xa60)]
                            },
                            'Sasha': {
                                'hp': 0x55,
                                'ataque': 0x16,
                                'defesa': 0xc,
                                'habilidade': _0x423d88[_0x965d42(0x840)]
                            }
                        }, [_0x2810ed, _0x53a3c9] = _0x4d25d3[_0x965d42(0x38a)]('\x20');
                    if (!_0x53a3c9 || !_0x4d239c[_0x53a3c9])
                        return _0x423d88[_0x965d42(0x58c)](_0x53d5b1, _0x965d42(0x871) + _0x965d42(0x9a5) + _0x965d42(0x482) + Object[_0x965d42(0xac6)](_0x4d239c)[_0x965d42(0x706)]('\x0a') + (_0x965d42(0xb9e) + '\x20*') + _0x4396ff + (_0x965d42(0x404) + _0x965d42(0xa7a)));
                    if (_0xceacd2[_0x17cc35])
                        return _0x423d88[_0x965d42(0x1eb)](_0x53d5b1, _0x423d88[_0x965d42(0x502)](_0x423d88[_0x965d42(0x6e8)](_0x423d88[_0x965d42(0x1ed)], _0x4396ff), _0x423d88[_0x965d42(0x1d6)]));
                    const _0x351ce9 = {
                        'personagem': _0x53a3c9,
                        ..._0x4d239c[_0x53a3c9],
                        'hpMax': _0x4d239c[_0x53a3c9]['hp'],
                        'titanKills': 0x0,
                        'expedicoes': 0x0,
                        'rank': _0x423d88[_0x965d42(0x368)],
                        'equipamento': _0x423d88[_0x965d42(0x535)],
                        'fundos': 0x3e8,
                        'lastCombat': 0x0,
                        'inventario': []
                    };
                    _0xceacd2[_0x17cc35] = _0x351ce9, _0x423d88[_0x965d42(0x582)](_0x2028ab, _0xceacd2), _0x423d88[_0x965d42(0xbbc)](_0x53d5b1, _0x965d42(0x5f3) + _0x53a3c9[_0x965d42(0xbd2) + 'e']() + (_0x965d42(0xc9f) + _0x965d42(0xd55) + _0x965d42(0x8be)) + _0x4d239c[_0x53a3c9]['hp'] + (_0x965d42(0x808) + '\x20') + _0x4d239c[_0x53a3c9][_0x965d42(0x262)] + (_0x965d42(0x572) + '\x20') + _0x4d239c[_0x53a3c9][_0x965d42(0x2c3)] + (_0x965d42(0x7db) + _0x965d42(0x8b5)) + _0x4d239c[_0x53a3c9][_0x965d42(0x310)] + (_0x965d42(0xc41) + _0x965d42(0xd0b) + _0x965d42(0x7b6)) + _0x4396ff + (_0x965d42(0x820) + _0x965d42(0x1ef) + _0x965d42(0x3f1) + _0x965d42(0xcf2)));
                    break;
                }
            case _0x423d88[_0x965d42(0x66d)]: {
                    if (!_0x423d88[_0x965d42(0x3de)](_0x4cadf5, _0x54b0b3))
                        return _0x423d88[_0x965d42(0x89b)](_0x53d5b1, _0x423d88[_0x965d42(0xa8c)](_0x423d88[_0x965d42(0x1ff)](_0x423d88[_0x965d42(0x237)], _0x4396ff), _0x423d88[_0x965d42(0xb5a)]));
                    const _0x274950 = _0x423d88[_0x965d42(0x7b8)](_0x5d3966), _0x4e5969 = _0x274950[_0x17cc35];
                    if (_0x274950[_0x965d42(0x93b)]?.[_0x965d42(0xd16)](_0x17cc35))
                        return _0x423d88[_0x965d42(0x56f)](_0x53d5b1, _0x423d88[_0x965d42(0xb66)]);
                    if (!_0x4e5969)
                        return _0x423d88[_0x965d42(0xaa4)](_0x53d5b1, _0x423d88[_0x965d42(0xa1a)]);
                    const _0xced2d6 = _0x13288e[_0x965d42(0x654)][_0x965d42(0xb64) + _0x965d42(0xcba)]?.[_0x965d42(0x514) + 'o']?.[_0x965d42(0x1cd) + 'id']?.[0x283 * 0xf + -0x1 * 0x2473 + -0x13a];
                    if (!_0xced2d6)
                        return _0x423d88[_0x965d42(0xc9e)](_0x53d5b1, _0x423d88[_0x965d42(0x400)]);
                    const _0x1be700 = _0x423d88[_0x965d42(0xcd9)](_0xced2d6[_0x965d42(0x38a)]('@')[0xa * 0x108 + 0x23bc + -0x2e0c], _0x423d88[_0x965d42(0x445)]), _0x104d76 = _0x274950[_0x1be700];
                    if (_0x274950[_0x965d42(0x93b)]?.[_0x965d42(0xd16)](_0x1be700))
                        return _0x423d88[_0x965d42(0x836)](_0x53d5b1, _0x423d88[_0x965d42(0x4af)]);
                    if (!_0x104d76)
                        return _0x423d88[_0x965d42(0x7e3)](_0x53d5b1, _0x423d88[_0x965d42(0x6de)]);
                    const _0x33312d = _0x423d88[_0x965d42(0xa16)](_0x42b0c8, _0x17cc35) ? 0xc9a8 + -0xb * 0x13dc + 0xfb2c : 0x28c94 + -0xbdb * 0x32 + -0xa * -0x4055;
                    if (_0x423d88[_0x965d42(0x352)](_0x423d88[_0x965d42(0x2bc)](Date[_0x965d42(0xcb7)](), _0x4e5969[_0x965d42(0xb28)]), _0x33312d)) {
                        const _0x416d84 = _0x423d88[_0x965d42(0x2bc)](_0x33312d, _0x423d88[_0x965d42(0xc76)](Date[_0x965d42(0xcb7)](), _0x4e5969[_0x965d42(0xb28)])), _0x42824d = Math[_0x965d42(0x30b)](_0x423d88[_0x965d42(0x23b)](_0x416d84, 0xdedd + -0x1c96d + 0x1d4f0));
                        return _0x423d88[_0x965d42(0xa9d)](_0x53d5b1, _0x965d42(0x5b2) + _0x965d42(0x340) + _0x965d42(0xd65) + 'e\x20' + _0x42824d + _0x965d42(0x5de));
                    }
                    const _0x5b9ade = Math[_0x965d42(0x49e)](_0x423d88[_0x965d42(0x330)](_0x423d88[_0x965d42(0xc22)](_0x4e5969[_0x965d42(0x262)], _0x423d88[_0x965d42(0x502)](_0x423d88[_0x965d42(0xa3e)](Math[_0x965d42(0xc7d)](), 0x1 * 0x107f + -0x139 * 0xb + 0x1e * -0x1a + 0.5), 0x15f6 + -0x1596 + 0x2 * -0x30 + 0.75)), _0x423d88[_0x965d42(0x653)](_0x104d76[_0x965d42(0x2c3)], 0xae3 + 0x188 + -0x121 * 0xb + 0.3))), _0x5dd318 = _0x423d88[_0x965d42(0x78c)](Math[_0x965d42(0xc7d)](), 0x3 * -0x692 + 0x4ab + 0x1 * 0xf0b + 0.15) || _0x4e5969[_0x965d42(0x8a1) + 'o'][_0x965d42(0xd16)](_0x423d88[_0x965d42(0x2e8)]), _0x4a3bea = Math[_0x965d42(0x805)](_0x5dd318 ? _0x423d88[_0x965d42(0x967)](_0x5b9ade, -0x1efb + 0x2ef * -0x3 + -0x2 * -0x13e5) : _0x5b9ade, -0x13df + -0x14aa + -0x3a * -0xb3);
                    let _0x34ad89 = _0x965d42(0x489) + _0x4e5969[_0x965d42(0x96e)] + _0x965d42(0x867) + _0x104d76[_0x965d42(0x96e)] + _0x965d42(0xa99) + _0x4e5969[_0x965d42(0x8a1) + 'o'] + '!\x0a';
                    _0x34ad89 += _0x5dd318 ? _0x423d88[_0x965d42(0x791)] : '', _0x104d76['hp'] -= _0x4a3bea;
                    if (_0x423d88[_0x965d42(0xb1c)](_0x104d76['hp'], -0x6 * -0x34 + 0xbf * 0x7 + 0x61 * -0x11)) {
                        _0x4e5969[_0x965d42(0x5d8)] += -0x18f6 + -0xb9b + 0x2496, _0x4e5969['hp'] = _0x4e5969[_0x965d42(0x5d8)];
                        const _0x364ec6 = _0x423d88[_0x965d42(0xce8)](_0x104d76[_0x965d42(0x5d8)], 0x381 + 0x12e5 + 0x11 * -0x151);
                        _0x34ad89 += _0x965d42(0x9ca) + _0x104d76[_0x965d42(0x96e)] + (_0x965d42(0xa25) + _0x965d42(0x772)) + _0x4e5969[_0x965d42(0x96e)] + (_0x965d42(0x953) + _0x965d42(0x85e) + _0x965d42(0x80b)) + _0x104d76[_0x965d42(0x96e)] + (_0x965d42(0xd13) + ':\x20') + _0x364ec6 + _0x965d42(0x9fe), _0x4e5969[_0x965d42(0xa57)] += -0xe6b * 0x2 + 0x10c7 * 0x1 + 0xc10, _0x4e5969[_0x965d42(0x992)] += -0x686 + -0x509 * 0x1 + 0xb90 * 0x1, _0x4e5969[_0x965d42(0x1e5)] += 0x25fb + 0x147c + -0x353 * 0x11, _0x4e5969[_0x965d42(0x6ae)] = _0x423d88[_0x965d42(0x56f)](_0x1344bd, _0x4e5969[_0x965d42(0x992)]);
                        if (_0x423d88[_0x965d42(0xb1c)](_0x364ec6, 0x5fd + 0x573 * -0x6 + -0x1abf * -0x1)) {
                            _0x274950[_0x965d42(0x93b)] = _0x274950[_0x965d42(0x93b)] || [];
                            if (!_0x274950[_0x965d42(0x93b)][_0x965d42(0xd16)](_0x1be700))
                                _0x274950[_0x965d42(0x93b)][_0x965d42(0x3bd)](_0x1be700);
                            _0x34ad89 += _0x965d42(0xd4e) + _0x104d76[_0x965d42(0x96e)] + (_0x965d42(0x933) + _0x965d42(0x7f5) + _0x965d42(0xc95) + _0x965d42(0x496)), delete _0x274950[_0x1be700];
                        } else
                            _0x104d76[_0x965d42(0x5d8)] = _0x364ec6, _0x104d76['hp'] = _0x104d76[_0x965d42(0x5d8)];
                    } else {
                        _0x34ad89 += _0x965d42(0x2b2) + _0x4a3bea + (_0x965d42(0x75b) + _0x965d42(0x6d0)) + _0x104d76['hp'];
                        if (_0x423d88[_0x965d42(0x6ef)](_0x104d76[_0x965d42(0x1e5)], -0x241b + 0x16e8 + 0xd33) && _0x423d88[_0x965d42(0x5e2)](Math[_0x965d42(0xc7d)](), -0x31 * 0x3d + -0x2623 + -0x8 * -0x63a + 0.1)) {
                            let _0x5c1194 = _0x423d88[_0x965d42(0x23a)](_0x42b0c8, _0x17cc35) ? _0x423d88[_0x965d42(0xb5f)](Math[_0x965d42(0x49e)](_0x423d88[_0x965d42(0x7d4)](Math[_0x965d42(0xc7d)](), 0xca * -0x2 + -0xf06 + 0x141f)), -0x2 * 0x2ba + 0x2070 + 0x353 * -0x8) : _0x423d88[_0x965d42(0x4de)](Math[_0x965d42(0x49e)](_0x423d88[_0x965d42(0xa3e)](Math[_0x965d42(0xc7d)](), 0x2129 + -0x6b * -0x59 + -0x45f8)), -0x1a3 + -0x12af * -0x1 + -0x110b);
                            _0x5c1194 = Math[_0x965d42(0x1c7)](_0x5c1194, _0x104d76[_0x965d42(0x1e5)]);
                            if (_0x423d88[_0x965d42(0x776)](_0x5c1194, -0xd * -0xce + 0xf41 + 0x1d * -0xe3)) {
                                _0x4e5969[_0x965d42(0x1e5)] += _0x5c1194, _0x104d76[_0x965d42(0x1e5)] -= _0x5c1194;
                                const _0x1ba9a3 = _0x423d88[_0x965d42(0x6df)](_0x42b0c8, _0x17cc35) ? _0x423d88[_0x965d42(0x507)] : '';
                                _0x34ad89 += _0x965d42(0xa6e) + _0x1ba9a3 + _0x965d42(0x708) + _0x5c1194 + (_0x965d42(0x86b) + _0x965d42(0x86f) + _0x965d42(0x769));
                            }
                        }
                    }
                    _0x4e5969[_0x965d42(0xb28)] = Date[_0x965d42(0xcb7)](), _0x423d88[_0x965d42(0x612)](_0x2028ab, _0x274950), _0x423d88[_0x965d42(0x817)](_0x53d5b1, _0x34ad89);
                    break;
                }
            case _0x423d88[_0x965d42(0x497)]:
            case _0x423d88[_0x965d42(0x2ed)]: {
                    if (!_0x423d88[_0x965d42(0xa85)](_0x4cadf5, _0x54b0b3))
                        return _0x423d88[_0x965d42(0x93c)](_0x53d5b1, _0x423d88[_0x965d42(0x4cd)](_0x423d88[_0x965d42(0xd38)](_0x423d88[_0x965d42(0x237)], _0x4396ff), _0x423d88[_0x965d42(0xb5a)]));
                    const _0x5d04d3 = _0x423d88[_0x965d42(0x82c)](_0x5d3966)[_0x17cc35];
                    if (!_0x5d04d3)
                        return _0x423d88[_0x965d42(0xab4)](_0x53d5b1, _0x423d88[_0x965d42(0x519)]);
                    const _0x15cc9b = _0x965d42(0xbd3) + _0x965d42(0x7e4) + _0x965d42(0x3ad) + _0x965d42(0x8fa) + '\x20' + _0x5d04d3[_0x965d42(0x96e)] + _0x965d42(0xb76) + _0x5d04d3[_0x965d42(0x6ae)] + _0x965d42(0x7b9) + _0x5d04d3['hp'] + '/' + _0x5d04d3[_0x965d42(0x5d8)] + (_0x965d42(0x808) + '\x20') + Math[_0x965d42(0x88d)](_0x5d04d3[_0x965d42(0x262)]) + (_0x965d42(0x572) + '\x20') + Math[_0x965d42(0x88d)](_0x5d04d3[_0x965d42(0x2c3)]) + (_0x965d42(0x630) + _0x965d42(0x5a7)) + _0x5d04d3[_0x965d42(0x992)] + (_0x965d42(0xc41) + '\x20') + _0x5d04d3[_0x965d42(0x1e5)] + (_0x965d42(0xcf5) + _0x965d42(0xa00)) + _0x5d04d3[_0x965d42(0x8a1) + 'o'] + (_0x965d42(0x7db) + _0x965d42(0x8b5)) + _0x5d04d3[_0x965d42(0x310)];
                    _0x423d88[_0x965d42(0x534)](_0x53d5b1, _0x15cc9b);
                    break;
                }
            case _0x423d88[_0x965d42(0x6dd)]:
            case _0x423d88[_0x965d42(0x747)]: {
                    if (!_0x423d88[_0x965d42(0x21d)](_0x4cadf5, _0x54b0b3))
                        return _0x423d88[_0x965d42(0x1b4)](_0x53d5b1, _0x423d88[_0x965d42(0x722)](_0x423d88[_0x965d42(0x45c)](_0x423d88[_0x965d42(0x237)], _0x4396ff), _0x423d88[_0x965d42(0xb5a)]));
                    const _0x10c3c5 = _0x423d88[_0x965d42(0x2a2)](_0x5d3966);
                    !_0x10c3c5[_0x965d42(0x32e)] && (_0x10c3c5[_0x965d42(0x32e)] = {
                        'gasodm': {
                            'preco': 0x258,
                            'efeito': _0x423d88[_0x965d42(0x1a4)]
                        },
                        'laminas': {
                            'preco': 0xbb8,
                            'efeito': _0x423d88[_0x965d42(0xb30)]
                        },
                        'kitcura': {
                            'preco': 0x1f4,
                            'efeito': _0x423d88[_0x965d42(0x982)]
                        },
                        'soro': {
                            'preco': 0x2710,
                            'efeito': _0x423d88[_0x965d42(0x655)]
                        },
                        'titafundador': {
                            'preco': 0xc350,
                            'efeito': _0x423d88[_0x965d42(0x75a)]
                        },
                        'titacolossal': {
                            'preco': 0x7530,
                            'efeito': _0x423d88[_0x965d42(0xb4d)]
                        },
                        'titablindado': {
                            'preco': 0x9c40,
                            'efeito': _0x423d88[_0x965d42(0x36e)]
                        },
                        'titafemea': {
                            'preco': 0x61a8,
                            'efeito': _0x423d88[_0x965d42(0xbab)]
                        },
                        'cinturaoexplosivo': {
                            'preco': 0x3a98,
                            'efeito': _0x423d88[_0x965d42(0xa97)]
                        },
                        'armaduraantiperfurante': {
                            'preco': 0x4e20,
                            'efeito': _0x423d88[_0x965d42(0x855)]
                        },
                        'treinamentoelite': {
                            'preco': 0x2710,
                            'efeito': _0x423d88[_0x965d42(0xd71)]
                        },
                        'sorotitancarregado': {
                            'preco': 0xafc8,
                            'efeito': _0x423d88[_0x965d42(0x3d3)]
                        },
                        'manopladestruicao': {
                            'preco': 0x88b8,
                            'efeito': _0x423d88[_0x965d42(0x736)]
                        },
                        'amuletoparadis': {
                            'preco': 0x186a0,
                            'efeito': _0x423d88[_0x965d42(0xa4d)]
                        },
                        'cristalcoordenadas': {
                            'preco': 0x124f8,
                            'efeito': _0x423d88[_0x965d42(0x90c)]
                        }
                    }, _0x423d88[_0x965d42(0x2b6)](_0x2028ab, _0x10c3c5));
                    const _0x221cf2 = _0x10c3c5[_0x965d42(0x32e)];
                    let _0x5dde60 = _0x423d88[_0x965d42(0x7cd)];
                    for (const [_0x4992da, _0x2fba94] of Object[_0x965d42(0xcb8)](_0x221cf2))
                        _0x5dde60 += _0x965d42(0xbf5) + _0x4992da + ':\x20' + _0x2fba94[_0x965d42(0xd22)][_0x965d42(0x9c7) + _0x965d42(0x588)](_0x423d88[_0x965d42(0x943)]) + (_0x965d42(0xcaf) + _0x965d42(0x725)) + _0x2fba94[_0x965d42(0x9e0)] + '\x0a';
                    _0x5dde60 += _0x965d42(0x7ef) + _0x4396ff + (_0x965d42(0x5ff) + _0x965d42(0x91d)), _0x423d88[_0x965d42(0x993)](_0x53d5b1, _0x5dde60);
                    break;
                }
            case _0x423d88[_0x965d42(0xa40)]:
            case _0x423d88[_0x965d42(0x61c)]: {
                    if (!_0x423d88[_0x965d42(0x7c3)](_0x4cadf5, _0x54b0b3))
                        return _0x423d88[_0x965d42(0x2f6)](_0x53d5b1, _0x423d88[_0x965d42(0xb55)](_0x423d88[_0x965d42(0x28b)](_0x423d88[_0x965d42(0x237)], _0x4396ff), _0x423d88[_0x965d42(0xb5a)]));
                    const [_0x5dc052, _0x1c8f50] = _0x4d25d3[_0x965d42(0x38a)]('\x20'), _0x5ccbaa = _0x423d88[_0x965d42(0xcfd)](_0x5d3966)[_0x17cc35];
                    if (!_0x5ccbaa)
                        return _0x423d88[_0x965d42(0x7c2)](_0x53d5b1, _0x423d88[_0x965d42(0x1bc)]);
                    const _0x3dfff0 = _0x423d88[_0x965d42(0xcfd)](_0x5d3966), _0x167e84 = _0x3dfff0[_0x965d42(0x32e)] || {};
                    if (!_0x167e84[_0x1c8f50])
                        return _0x423d88[_0x965d42(0xc9e)](_0x53d5b1, _0x423d88[_0x965d42(0x4f2)]);
                    if (_0x423d88[_0x965d42(0x307)](_0x5ccbaa[_0x965d42(0x1e5)], _0x167e84[_0x1c8f50][_0x965d42(0xd22)]))
                        return _0x423d88[_0x965d42(0x6a5)](_0x53d5b1, _0x423d88[_0x965d42(0xaea)]);
                    const _0x4d6058 = {
                        'gasodm': () => {
                            const _0x5506eb = _0x965d42;
                            return _0x5ccbaa[_0x5506eb(0x5d8)] += -0x17ae + -0x19cf * -0x1 + -0x21c, _0x5ccbaa['hp'] += 0x144 + -0x131 * 0x1 + 0x2 * -0x7, _0x1bb139[_0x5506eb(0x971)];
                        },
                        'laminas': () => {
                            const _0x4d576c = _0x965d42;
                            return _0x5ccbaa[_0x4d576c(0x8a1) + 'o'] = _0x1bb139[_0x4d576c(0x5e7)], _0x5ccbaa[_0x4d576c(0x262)] *= -0xd54 + 0x253c + 0x1 * -0x17e7 + 0.1499999999999999, _0x1bb139[_0x4d576c(0x2bd)];
                        },
                        'soro': () => {
                            const _0x1d0d7c = _0x965d42, _0x1b006a = _0x5ccbaa[_0x1d0d7c(0x5d8)];
                            return _0x5ccbaa[_0x1d0d7c(0x8a1) + 'o'] = _0x423d88[_0x1d0d7c(0x1ad)], _0x5ccbaa[_0x1d0d7c(0x262)] *= -0x21da + 0x3 * -0xb9b + 0x44ac + 0.30000000000000004, _0x5ccbaa[_0x1d0d7c(0x5d8)] = Math[_0x1d0d7c(0x49e)](_0x423d88[_0x1d0d7c(0x5cf)](_0x5ccbaa[_0x1d0d7c(0x5d8)], -0x16be + -0x1a10 + -0x1 * -0x30ce + 0.9)), _0x5ccbaa['hp'] = Math[_0x1d0d7c(0x1c7)](_0x5ccbaa['hp'], _0x5ccbaa[_0x1d0d7c(0x5d8)]), _0x1d0d7c(0xa35) + _0x1d0d7c(0x301) + _0x1d0d7c(0x516) + _0x1d0d7c(0x480) + _0x1b006a + _0x1d0d7c(0x725) + _0x5ccbaa[_0x1d0d7c(0x5d8)];
                        },
                        'kitcura': () => {
                            const _0x2dd915 = _0x965d42;
                            return _0x5ccbaa['hp'] = Math[_0x2dd915(0x1c7)](_0x423d88[_0x2dd915(0x1ba)](_0x5ccbaa['hp'], -0x20d4 + 0x24a * -0x10 + 0x457e), _0x5ccbaa[_0x2dd915(0x5d8)]), _0x423d88[_0x2dd915(0x515)];
                        },
                        'titafundador': () => {
                            const _0x17d63a = _0x965d42;
                            return _0x5ccbaa[_0x17d63a(0x262)] *= -0x1 * -0x103f + 0x12db + -0x705 * 0x5 + 0.5, _0x5ccbaa[_0x17d63a(0x2c3)] *= -0xf84 + 0x153 * 0x1d + -0x3a * 0x65 + 0.5, _0x1bb139[_0x17d63a(0x36a)];
                        },
                        'titacolossal': () => {
                            const _0x2b015f = _0x965d42;
                            return _0x5ccbaa[_0x2b015f(0x262)] *= 0x3 * 0xa51 + 0x1b3c + -0x3a2e + 0.30000000000000004, _0x5ccbaa[_0x2b015f(0x2c3)] *= -0x1fd * 0x2 + -0x1af * 0x2 + -0x13 * -0x63 + 0.10000000000000009, _0x423d88[_0x2b015f(0x346)];
                        },
                        'titablindado': () => {
                            const _0x416941 = _0x965d42;
                            return _0x5ccbaa[_0x416941(0x2c3)] *= -0x4 * -0x819 + -0x9e * -0xb + -0x272d * 0x1 + 0.3999999999999999, _0x5ccbaa[_0x416941(0x262)] *= 0xc10 + -0x207c + 0x146c + 0.9, _0x423d88[_0x416941(0x7e9)];
                        },
                        'titafemea': () => {
                            const _0x45f5fa = _0x965d42;
                            return _0x5ccbaa[_0x45f5fa(0x4a3)] *= -0x633 * -0x1 + 0x12a * -0x13 + 0xfec + 0.19999999999999996, _0x5ccbaa[_0x45f5fa(0x262)] *= -0x27e + 0x1368 + -0x10e9 + 0.19999999999999996, _0x423d88[_0x45f5fa(0xd56)];
                        },
                        'cinturaoexplosivo': () => {
                            const _0x122679 = _0x965d42;
                            return _0x5ccbaa[_0x122679(0x8a1) + 'o'] = _0x423d88[_0x122679(0xbfe)], _0x5ccbaa[_0x122679(0x262)] *= 0x1 * -0x8b + 0x1b * 0xad + -0x11b3 * 0x1 + 0.25, _0x423d88[_0x122679(0x434)];
                        },
                        'armaduraantiperfurante': () => {
                            const _0x274ac1 = _0x965d42;
                            return _0x5ccbaa[_0x274ac1(0x2c3)] *= 0x1 * 0xfa8 + -0x1 * -0x154b + -0x1 * 0x24f2 + 0.25, _0x5ccbaa[_0x274ac1(0x4a3)] *= 0xb7d + -0x76d * 0x2 + 0x35d + 0.95, _0x1bb139[_0x274ac1(0x759)];
                        },
                        'treinamentoelite': () => {
                            const _0x178c18 = _0x965d42, _0x36cca = _0x1bb139[_0x178c18(0x99d)][_0x178c18(0x38a)]('|');
                            let _0x252e27 = -0x67f + 0x488 + -0x1f7 * -0x1;
                            while (!![]) {
                                switch (_0x36cca[_0x252e27++]) {
                                case '0':
                                    _0x5ccbaa[_0x178c18(0x5d8)] += 0x1f * -0x73 + -0x1df7 + 0x2bee;
                                    continue;
                                case '1':
                                    _0x5ccbaa[_0x178c18(0x2c3)] *= 0x7f6 + 0x26df + 0x36 * -0xde + 0.10000000000000009;
                                    continue;
                                case '2':
                                    _0x5ccbaa['hp'] = Math[_0x178c18(0x1c7)](_0x1bb139[_0x178c18(0xcad)](_0x5ccbaa['hp'], 0x1 * 0xb95 + -0x15b * 0x2 + 0x1 * -0x8d5), _0x1bb139[_0x178c18(0xcad)](_0x5ccbaa[_0x178c18(0x5d8)], -0x189a + -0x1f04 + -0x1a * -0x224));
                                    continue;
                                case '3':
                                    _0x5ccbaa[_0x178c18(0x262)] *= 0x5 * 0x2dd + -0x1 * 0x16a2 + 0xa * 0xd5 + 0.10000000000000009;
                                    continue;
                                case '4':
                                    return _0x1bb139[_0x178c18(0xd5b)];
                                }
                                break;
                            }
                        },
                        'sorotitancarregado': () => {
                            const _0x287330 = _0x965d42, _0x36ba18 = _0x423d88[_0x287330(0xa88)][_0x287330(0x38a)]('|');
                            let _0x3c01d3 = -0x17 * 0x189 + -0x33a + -0x7b5 * -0x5;
                            while (!![]) {
                                switch (_0x36ba18[_0x3c01d3++]) {
                                case '0':
                                    return _0x423d88[_0x287330(0xc5f)];
                                case '1':
                                    _0x5ccbaa[_0x287330(0x5d8)] = Math[_0x287330(0x49e)](_0x423d88[_0x287330(0x691)](_0x5ccbaa[_0x287330(0x5d8)], -0x847 + -0x19c0 + 0x2207 + 0.8));
                                    continue;
                                case '2':
                                    _0x5ccbaa[_0x287330(0x262)] *= -0x1982 + -0x1a12 + 0x3396;
                                    continue;
                                case '3':
                                    _0x5ccbaa['hp'] = Math[_0x287330(0x1c7)](_0x5ccbaa['hp'], _0x5ccbaa[_0x287330(0x5d8)]);
                                    continue;
                                case '4':
                                    _0x5ccbaa[_0x287330(0x2c3)] *= -0x4 * -0x3f + -0xb8d * -0x2 + -0x1814;
                                    continue;
                                }
                                break;
                            }
                        },
                        'manopladestruicao': () => {
                            const _0x3ea8ed = _0x965d42;
                            return _0x5ccbaa[_0x3ea8ed(0x262)] *= -0xe95 * 0x2 + -0x8 * -0x1d7 + 0xe73 + 0.5, _0x5ccbaa[_0x3ea8ed(0x4a3)] *= -0x2 * -0xef2 + 0x3 * 0x529 + 0x1 * -0x2d5f + 0.9, _0x423d88[_0x3ea8ed(0x781)];
                        },
                        'amuletoparadis': () => {
                            const _0x1268f7 = _0x965d42;
                            return _0x5ccbaa[_0x1268f7(0x5d8)] *= -0xf * 0x1b3 + 0x241b + -0xa9d + 0.5, _0x5ccbaa[_0x1268f7(0x2c3)] *= -0x2213 + 0xd3 * -0x2f + -0xa67 * -0x7 + 0.30000000000000004, _0x5ccbaa[_0x1268f7(0x262)] *= 0x989 * -0x2 + 0x222f + -0xf1c + 0.30000000000000004, _0x423d88[_0x1268f7(0xb53)];
                        },
                        'cristalcoordenadas': () => {
                            const _0x50fd11 = _0x965d42;
                            return _0x5ccbaa[_0x50fd11(0x992)] += -0x14b6 + -0xef * -0x1d + -0x1 * 0x658, _0x5ccbaa[_0x50fd11(0xa57)] += -0xa3 * -0x11 + -0xd42 * 0x1 + 0x272 * 0x1, _0x1bb139[_0x50fd11(0x717)];
                        }
                    };
                    if (!_0x4d6058[_0x1c8f50])
                        return _0x423d88[_0x965d42(0x4e2)](_0x53d5b1, _0x423d88[_0x965d42(0x365)]);
                    _0x5ccbaa[_0x965d42(0x1e5)] -= _0x167e84[_0x1c8f50][_0x965d42(0xd22)];
                    const _0x390809 = _0x4d6058[_0x1c8f50]();
                    _0x3dfff0[_0x17cc35] = _0x5ccbaa, _0x423d88[_0x965d42(0xd5c)](_0x2028ab, _0x3dfff0), _0x423d88[_0x965d42(0xc9e)](_0x53d5b1, '\x20' + _0x390809 + (_0x965d42(0x62d) + _0x965d42(0x53d) + '\x20') + _0x5ccbaa[_0x965d42(0x1e5)][_0x965d42(0x9c7) + _0x965d42(0x588)](_0x423d88[_0x965d42(0x943)]));
                    break;
                }
            case _0x423d88[_0x965d42(0xbe9)]: {
                    if (!_0x423d88[_0x965d42(0x8bf)](_0x506714, _0x17cc35))
                        return _0x423d88[_0x965d42(0xb61)](_0x53d5b1, _0x423d88[_0x965d42(0xc8e)]);
                    const _0x2e6477 = _0x4d25d3[_0x965d42(0x38a)]('\x20')[0xe5c + 0x1024 + -0x1e7f];
                    if (!_0x2e6477)
                        return _0x423d88[_0x965d42(0x7a3)](_0x53d5b1, _0x423d88[_0x965d42(0xa5a)]);
                    const _0x545b81 = _0x423d88[_0x965d42(0x2a2)](_0x5d3966);
                    if (!_0x545b81[_0x965d42(0x32e)])
                        return _0x423d88[_0x965d42(0xb34)](_0x53d5b1, _0x423d88[_0x965d42(0xb08)]);
                    if (!_0x545b81[_0x965d42(0x32e)][_0x2e6477])
                        return _0x423d88[_0x965d42(0x5e4)](_0x53d5b1, _0x423d88[_0x965d42(0x4f2)]);
                    delete _0x545b81[_0x965d42(0x32e)][_0x2e6477], _0x423d88[_0x965d42(0x724)](_0x2028ab, _0x545b81), _0x423d88[_0x965d42(0x76c)](_0x53d5b1, _0x965d42(0x75e) + _0x2e6477 + (_0x965d42(0x4c4) + _0x965d42(0xb35)));
                    break;
                }
            case _0x423d88[_0x965d42(0xc7f)]: {
                    if (!_0x423d88[_0x965d42(0x2a1)](_0x4cadf5, _0x54b0b3))
                        return _0x423d88[_0x965d42(0x794)](_0x53d5b1, _0x423d88[_0x965d42(0x335)](_0x423d88[_0x965d42(0xbe2)](_0x423d88[_0x965d42(0x237)], _0x4396ff), _0x423d88[_0x965d42(0xb5a)]));
                    const _0x16cfe7 = _0x423d88[_0x965d42(0x9f1)](_0x5d3966), _0x3e7d10 = Object[_0x965d42(0xcb8)](_0x16cfe7)[_0x965d42(0x94d)](([_0x587113, _0x42af97]) => _0x587113[_0x965d42(0xd16)](_0x965d42(0x3fe) + _0x965d42(0x377)) && _0x42af97[_0x965d42(0x96e)])[_0x965d42(0xa2c)](([, _0x163503], [, _0x2d1b1f]) => (_0x2d1b1f[_0x965d42(0xa57)] || -0x1f33 + -0x45 * -0x2 + 0x1ea9) - (_0x163503[_0x965d42(0xa57)] || -0x103b * 0x1 + 0x1b9 * -0x16 + 0x1f * 0x1bf) || (_0x2d1b1f[_0x965d42(0x992)] || 0x486 * 0x1 + 0xb1 + 0x537 * -0x1) - (_0x163503[_0x965d42(0x992)] || -0xb3e + -0x1488 * -0x1 + -0x94a))[_0x965d42(0x924)](-0x27f + -0x9e3 * 0x1 + 0xc62, 0xe89 * -0x1 + 0xf * 0x12e + -0x4 * 0xc9);
                    let _0x3314a4 = _0x423d88[_0x965d42(0x4c2)];
                    _0x3e7d10[_0x965d42(0x9e9)](([_0x5ee548, _0x2eab4e], _0x5bece2) => {
                        const _0x362683 = _0x965d42, _0x28773a = Math[_0x362683(0x88d)](_0x2eab4e[_0x362683(0x262)] || -0x34 * 0xb9 + 0xdc * 0x5 + -0x58c * -0x6), _0x3578f6 = Math[_0x362683(0x88d)](_0x2eab4e[_0x362683(0x2c3)] || -0x129f + -0x34 * -0x67 + -0x24d);
                        _0x3314a4 += _0x1bb139[_0x362683(0x587)](_0x1bb139[_0x362683(0x266)](_0x1bb139[_0x362683(0x587)](_0x1bb139[_0x362683(0x66f)](_0x5bece2, 0x73e + 0x18ef + -0x4 * 0x80b) + '.\x20' + _0x2eab4e[_0x362683(0x96e)] + _0x362683(0xaef) + _0x5ee548[_0x362683(0x38a)]('@')[-0x240 + 0xf71 + -0xd31] + ')\x0a', _0x362683(0x6e2) + (_0x2eab4e[_0x362683(0xa57)] || -0x11 * 0x117 + -0x1 * -0x13b8 + -0x131) + (_0x362683(0xbd5) + _0x362683(0x19a)) + (_0x2eab4e[_0x362683(0x992)] || -0xb85 * 0x2 + 0xab + 0x165f) + '\x0a'), _0x362683(0xaab) + _0x28773a + (_0x362683(0x33a) + _0x362683(0xa7b)) + _0x3578f6 + '\x0a'), _0x362683(0x65c) + (_0x2eab4e[_0x362683(0x6ae)] || _0x1bb139[_0x362683(0x4ed)]) + '\x0a\x0a');
                    }), _0x423d88[_0x965d42(0x42e)](_0x53d5b1, _0x3314a4);
                    break;
                }
                function _0x1344bd(_0xcc17fe) {
                    const _0x50ec6d = _0x965d42, _0x1f3dce = _0x1bb139[_0x50ec6d(0x80f)][_0x50ec6d(0x38a)]('|');
                    let _0xf44c4a = 0x7 * -0x2d1 + 0x19 * 0x10f + -0x6c * 0x10;
                    while (!![]) {
                        switch (_0x1f3dce[_0xf44c4a++]) {
                        case '0':
                            if (_0x1bb139[_0x50ec6d(0xd04)](_0xcc17fe, -0x1 * 0x6bb + 0x1d8 * 0xb + -0xb99))
                                return _0x1bb139[_0x50ec6d(0xca7)];
                            continue;
                        case '1':
                            if (_0x1bb139[_0x50ec6d(0x323)](_0xcc17fe, 0x76e + 0xd8e + -0x485 * -0x4))
                                return _0x1bb139[_0x50ec6d(0x9de)];
                            continue;
                        case '2':
                            if (_0x1bb139[_0x50ec6d(0x2ee)](_0xcc17fe, -0x2467 + -0x251b + 0x4aae))
                                return _0x1bb139[_0x50ec6d(0xca1)];
                            continue;
                        case '3':
                            if (_0x1bb139[_0x50ec6d(0xd04)](_0xcc17fe, 0x7f6 + 0x1afb * 0x1 + -0x1d * 0x131))
                                return _0x1bb139[_0x50ec6d(0x230)];
                            continue;
                        case '4':
                            if (_0x1bb139[_0x50ec6d(0xc33)](_0xcc17fe, 0x9ad * -0x4 + 0x33 * -0x45 + 0x34a5))
                                return _0x1bb139[_0x50ec6d(0x961)];
                            continue;
                        case '5':
                            if (_0x1bb139[_0x50ec6d(0x728)](_0xcc17fe, -0x1 * -0x83b + -0x1 * 0x22cb + 0x1b58))
                                return _0x1bb139[_0x50ec6d(0x4d9)];
                            continue;
                        case '6':
                            return _0x1bb139[_0x50ec6d(0x4ed)];
                        }
                        break;
                    }
                }
            case _0x423d88[_0x965d42(0x85f)]: {
                    if (!_0x423d88[_0x965d42(0x6d2)](_0x4cadf5, _0x54b0b3))
                        return _0x423d88[_0x965d42(0x3c5)](_0x53d5b1, _0x423d88[_0x965d42(0xb5f)](_0x423d88[_0x965d42(0x5e3)](_0x423d88[_0x965d42(0x2d9)], _0x4396ff), _0x423d88[_0x965d42(0x3fb)]));
                    const _0x3d1964 = _0x423d88[_0x965d42(0xa86)](_0x5d3966), _0x5c41bb = _0x3d1964[_0x17cc35];
                    if (!_0x5c41bb)
                        return _0x423d88[_0x965d42(0x6a6)](_0x53d5b1, _0x423d88[_0x965d42(0xcde)](_0x423d88[_0x965d42(0x98f)](_0x423d88[_0x965d42(0x342)], _0x4396ff), _0x423d88[_0x965d42(0xbe6)]));
                    const _0x4cc16c = _0x4d25d3[_0x965d42(0x924)](_0x4396ff[_0x965d42(0x6ba)])[_0x965d42(0xd12)]()[_0x965d42(0x38a)]('\x20'), _0x51f109 = _0x423d88[_0x965d42(0x7e7)](parseInt, _0x4cc16c[0x15b9 * 0x1 + -0x1913 * 0x1 + -0x1 * -0x35b]) || 0x971 + 0x2676 + -0x1 * 0x2fe7;
                    if (!_0x51f109 || _0x423d88[_0x965d42(0x86d)](_0x51f109, -0xb07 * -0x2 + 0x65 * 0x41 + -0x2f4f) || _0x423d88[_0x965d42(0x7f0)](_0x51f109, 0x1fa9 * 0x1 + 0x39e4 + -0x327d))
                        return _0x423d88[_0x965d42(0xac0)](_0x53d5b1, _0x965d42(0xc56) + _0x965d42(0x771) + _0x965d42(0x7ef) + _0x4396ff + (_0x965d42(0x9b6) + _0x965d42(0x459) + _0x965d42(0x61d) + _0x965d42(0x898)));
                    if (_0x423d88[_0x965d42(0x78c)](_0x5c41bb[_0x965d42(0x1e5)], _0x51f109))
                        return _0x423d88[_0x965d42(0x7e1)](_0x53d5b1, _0x965d42(0x737) + _0x965d42(0xd20) + _0x965d42(0xaa0) + _0x965d42(0x8c5) + _0x5c41bb[_0x965d42(0x1e5)][_0x965d42(0x9c7) + _0x965d42(0x588)]());
                    _0x5c41bb[_0x965d42(0x1e5)] -= _0x51f109, _0x423d88[_0x965d42(0xbc6)](_0x2028ab, _0x3d1964);
                    const _0x4a231a = [
                            '',
                            '',
                            '',
                            '',
                            '',
                            ''
                        ], [_0x1c504e, _0x1b0c72, _0x1a35ba] = Array[_0x965d42(0x8f7)]({ 'length': 0x3 }, () => _0x4a231a[Math[_0x965d42(0x49e)](Math[_0x965d42(0xc7d)]() * _0x4a231a[_0x965d42(0x6ba)])]), _0x4f6735 = _0x423d88[_0x965d42(0x2da)](_0x1c504e, _0x1b0c72) && _0x423d88[_0x965d42(0x887)](_0x1b0c72, _0x1a35ba), _0x4ced70 = _0x4f6735 ? 0x1c6f + 0x10a5 + -0x2d0f : -0x244a + 0xad7 + 0x1 * 0x1973, _0x4bc4cd = _0x423d88[_0x965d42(0x7d4)](_0x4ced70, _0x51f109);
                    _0x4f6735 && (_0x5c41bb[_0x965d42(0x1e5)] += _0x4bc4cd, _0x423d88[_0x965d42(0x8df)](_0x2028ab, _0x3d1964));
                    const _0x572a84 = (_0x4b9a28, _0x24e9d4) => _0x965d42(0x753) + _0x965d42(0x406) + _0x4b9a28 + (_0x965d42(0x7a5) + '\x0a') + (_0x24e9d4 || '');
                    try {
                        const {key: _0x53cfe0} = await _0x410b95[_0x965d42(0x25e) + 'e'](_0x54b0b3, { 'text': _0x423d88[_0x965d42(0xc2d)](_0x572a84, _0x423d88[_0x965d42(0xca8)]) }, { 'quoted': _0x13288e }), _0x41c1c8 = [
                                {
                                    'text': _0x423d88[_0x965d42(0xca8)],
                                    'delay': 0x2bc
                                },
                                {
                                    'text': _0x1c504e + _0x965d42(0x65f),
                                    'delay': 0x2bc
                                },
                                {
                                    'text': _0x1c504e + '' + _0x1b0c72 + _0x965d42(0x290),
                                    'delay': 0x2bc
                                },
                                {
                                    'text': _0x1c504e + '' + _0x1b0c72 + '' + _0x1a35ba,
                                    'delay': 0x2bc
                                },
                                {
                                    'text': _0x423d88[_0x965d42(0xbbb)](_0x1c504e + '' + _0x1b0c72 + '' + _0x1a35ba + '\x0a', _0x4f6735 ? _0x965d42(0x6c4) + _0x4bc4cd[_0x965d42(0x9c7) + _0x965d42(0x588)]() + (_0x965d42(0x595) + ':\x20') + _0x5c41bb[_0x965d42(0x1e5)][_0x965d42(0x9c7) + _0x965d42(0x588)]() : _0x965d42(0xade) + _0x51f109[_0x965d42(0x9c7) + _0x965d42(0x588)]() + _0x965d42(0x7a9) + _0x5c41bb[_0x965d42(0x1e5)][_0x965d42(0x9c7) + _0x965d42(0x588)]()),
                                    'delay': 0x3e8
                                }
                            ];
                        for (const _0x464ff8 of _0x41c1c8) {
                            await _0x423d88[_0x965d42(0xcff)](_0x1b425e, _0x464ff8[_0x965d42(0xab5)]), await _0x410b95[_0x965d42(0x25e) + 'e'](_0x54b0b3, {
                                'text': _0x423d88[_0x965d42(0xb31)](_0x572a84, _0x464ff8[_0x965d42(0x2ca)]),
                                'edit': _0x53cfe0
                            }, { 'quoted': _0x13288e });
                        }
                    } catch (_0x3d6456) {
                        console[_0x965d42(0x347)](_0x423d88[_0x965d42(0xa14)], _0x3d6456), _0x423d88[_0x965d42(0x6da)](_0x53d5b1, _0x423d88[_0x965d42(0x7a2)]), _0x5c41bb[_0x965d42(0x1e5)] += _0x51f109, _0x423d88[_0x965d42(0xd34)](_0x2028ab, _0x3d1964);
                    }
                    break;
                }
            }
        } catch (_0x67efe8) {
            console[_0x965d42(0x81a)](_0x67efe8);
        }
    }), _0x410b95['ev']['on'](_0x423d88[_0x47a1d5(0xa06)], _0x367eca => {
        const _0x338acd = _0x47a1d5, {
                connection: _0x9165bb,
                lastDisconnect: _0x3ea52b
            } = _0x367eca;
        if (_0x423d88[_0x338acd(0x5f5)](_0x3ea52b, undefined)) {
        }
        if (_0x423d88[_0x338acd(0xc82)](_0x9165bb, _0x423d88[_0x338acd(0x8fb)])) {
            var _0x1b5e98 = _0x423d88[_0x338acd(0x5e5)](_0x3ea52b[_0x338acd(0x347)][_0x338acd(0x525)]?.[_0x338acd(0x467)]?.[_0x338acd(0x748)], DisconnectReason[_0x338acd(0x2ba)]);
            _0x423d88[_0x338acd(0x277)](ligarbot);
        }
        _0x367eca[_0x338acd(0x5f8)] && console[_0x338acd(0x81a)](_0x338acd(0x1c3) + _0x338acd(0x9ab) + 'x');
    });
}
ligarbot(), fs[_0x338051(0xa4c)](_0x338051(0x501), (_0x27d877, _0xc18ed4) => {
    const _0x2e6003 = _0x338051, _0x1425e1 = {
            'RgzaM': function (_0x3a7bcf, _0x180268) {
                return _0x3a7bcf !== _0x180268;
            },
            'lmAcN': _0x2e6003(0xcf1) + _0x2e6003(0x796) + _0x2e6003(0x2b3) + _0x2e6003(0x433)
        };
    _0x1425e1[_0x2e6003(0xb13)](_0x27d877[_0x2e6003(0x37c)][_0x2e6003(0x268)](), _0xc18ed4[_0x2e6003(0x37c)][_0x2e6003(0x268)]()) && (console[_0x2e6003(0x81a)](_0x1425e1[_0x2e6003(0x69b)]), process[_0x2e6003(0x710)]());
});