const axios = require('axios');
var express = require('express'),
  cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const session = require('express-session');
const path = require('path');
const MemoryStore = require('memorystore')(session);
const fs = require('fs');
const { token } = require("./config.js");
const htmlPath = path.join(__dirname, './views/error.html');
const creator = "CM";

const loghandler = {
  notparam: {
    status: false,
    criador: creator,
    codigo: 406,
    mensagem: 'Sem Saldo'
  },
  error: {
    status: false,
    criador: creator,
    codigo: 404,
    mensagem: '404 ERROR'
  }
};
var app = express()
app.enable('trust proxy');
app.set("json spaces", 2)
app.use(express.urlencoded({ extended: true }));
app.use(session({
  secret: 'secret',
  resave: true,
  saveUninitialized: true,
  cookie: { maxAge: 86400000 },
  store: new MemoryStore({
    checkPeriod: 86400000
  }),
}));
app.use(cors())
app.use(express.static("public"))
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

app.use(session({
  secret: 'seuSegredo',
  resave: true,
  saveUninitialized: true,
  cookie: {
    maxAge: 24 * 60 * 60 * 1000, 
  }
}));

mongoose.connect(token, { useNewUrlParser: true, useUnifiedTopology: true });
const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, required: true },
  key: { type: String, required: true },
  saldo: { type: Number, default: 0 },
  total: { type: Number, default: 0 },
  ft: { type: String, default: null },
  yt: { type: String, default: null },
  zap: { type: String, default: null },
  insta: { type: String, default: null },
  wallpaper: { type: String, default: null },
  isAdm: { type: Boolean, default: false },
});

const User = mongoose.model('Lady', userSchema);
Person = User;
async function diminuirSaldo(username) {
  try {
    const user = await User.findOne({ username });
    if (!user) {
      return false;
    }
    if (user.isAdm) {
      console.log('Usuário premium ou administrador. Saldo não será diminuído.');
      return false;
    }

    if (user.saldo > 0) {
      user.saldo--;
      await user.save();
      return true;
    } else {
      return false; 
    }
  } catch (error) {
    console.error('Erro ao diminuir saldo:', error);
    return false;
  }
}

async function adicionarSaldo(username) {
  try {
    const user = await User.findOne({ username });
    if (!user) {
      return false;
    }
    user.total += 1;
    await user.save();
    return true;
  } catch (error) {
    console.error('Erro ao adicionar total:', error);
    return false;
  }
}

async function readUsers() {
  try {
    return await User.find();
  } catch (error) {
    console.error('Erro ao acessar o banco de dados:', error);
    return [];
  }
}

async function saveUsers(users) {
  try {
    await User.deleteMany();
    await User.insertMany(users);
  } catch (error) {
    console.error('Erro ao salvar os dados no banco de dados:', error);
  }
}



// ============== ROTAS DE CONFIGURACAO DA API ==============\\

app.get('/', async (req, res) => {
  const user = req.session.user;
  if (!user) {
    return res.redirect('/login');
  }
  const { username, password } = user;
  try {
    const userDb = await User.findOne({ username, password });
    const quantidadeRegistrados = await User.countDocuments();
    const topUsers = await User.find().sort({ saldo: -1 }).limit(5);
    return res.render('dashboard', { user, userDb, topUsers, quantidade: quantidadeRegistrados });
  } catch (error) {
    console.error('Erro ao processar a rota:', error);
    return res.status(500).send('Erro interno ao processar a rota.');
  }
});


app.get('/myperfil', async (req, res) => {
  const user = req.session.user;
  if (user) {
    const { username, password } = user;
      const userDb = await User.findOne({ username, password });
      const users = userDb;
      const quantidadeRegistrados = await User.countDocuments();
      const topUsers = await User.find().sort({ total: -1 }).limit(7);
      return res.render('myperfil', { user, userDb, users, topUsers, quantidade: quantidadeRegistrados });
}
});

app.get('/search', async (req, res) => {
  const searchTerm = req.query.search || '';
  try {
    const searchResults = await User.find({ username: { $regex: searchTerm, $options: 'i' } });
    return res.render('search', { searchTerm, searchResults });
  } catch (error) {
    console.error('Erro ao buscar usuários:', error);
    return res.status(500).send('Erro interno do servidor. Por favor, tente novamente mais tarde.');
  }
});

app.get('/register', (req, res) => {
  res.render('register');
});

app.post('/register', async (req, res) => {
  try {
    const { username, password, email } = req.body;
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(409).send('Nome de usuário já existe. Por favor, escolha outro.');
    }
    const verificationCode = Math.floor(100000 + Math.random() * 900000).toString();
    const keycode = Math.floor(100000 + Math.random() * 900000).toString();
    const ft = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlEcOwa7TnrQ1uRihMsFmpIinyzREUXldvrLtrT_WbLRKV2_HUrT7xgLPd&s=10";
    const saldo = 100000; 
    const total = 0;
    const key = keycode;
    const insta = "@clovermods"
    const zap = "55"
    const yt = "youtube.com/@clovermods"
    const wallpaper = "https://telegra.ph/file/56fa53ec05377a51311cc.jpg"
    const user = new User({ username, password, email, key, saldo, total, ft, zap, insta, yt, wallpaper, isAdm: false });
    await user.save();
    console.log(user)
    req.session.user = user;
    res.redirect('/');

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao registrar usuário.' });
  }
});
app.get('/login', (req, res) => {
  res.render('login');
});

app.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const senha = password
  const user = await User.findOne({ username });
  if (user) {
    try {
      if (user.password !== senha) {
        return res.status(401).send('Nome de usuário ou senha incorretos. Por favor, tente novamente.');
      }
      req.session.user = user;
      res.redirect('/');
    } catch (error) {
      console.error('Erro ao acessar o banco de dados:', error);
      return res.status(500).send('Erro interno do servidor. Por favor, tente novamente mais tarde.');
    }
  } else {
    res.status(401).json({ message: 'Usuário não encontrado.' });
  }

})

app.get('/admin', async (req, res) => {
  const user = req.session.user;
  if (user) {
    try {
      const isAdmin = await User.findOne({ _id: user._id, isAdm: true });
      if (isAdmin) {
        const users = await User.find();
        return res.render('adminDashboard', { users, user });
      } else {
        return res.sendFile(htmlPath);
      }
    } catch (error) {
      console.error('Erro ao acessar usuários:', error);
      return res.status(500).send('Erro interno do servidor. Por favor, tente novamente mais tarde.');
    }
  } else {
    return res.sendFile(htmlPath);
  }
});

app.get('/editar/:username', async (req, res) => {
  const { user: currentUser, senha: currentPassword } = req.session;
  const { username: targetUsername } = req.params;
  const specialKey = 'SUPREMnO';
  try {
    const user = await User.findOne({ username: targetUsername });
    if (!user) {
      return res.status(404).send('Usuário não encontrado.');
    }
    const isAdminOrSpecialUser = currentUser.isAdm || currentUser.key === specialKey;
    if (!isAdminOrSpecialUser && (user.key !== currentPassword || user.username !== currentUser.username)) {
      return res.status(401).send('Acesso não autorizado para editar.');
    }
    res.render('edit', { user });
  } catch (error) {
    console.error('Erro ao acessar o banco de dados:', error);
    return res.status(500).send('Erro interno do servidor. Por favor, tente novamente mais tarde.');
  }
});

app.get('/deletar/:username', async (req, res) => {
  const { user: currentUser, senha: currentPassword } = req.session;
  const { username: targetUsername } = req.params;
  const specialKey = 'clover';
  try {
    const user = await User.findOne({ username: targetUsername });
    if (!user) {
      return res.status(404).send('Usuário não encontrado.');
    }
    const isAdminOrSpecialUser = currentUser.isAdm || currentUser.key === specialKey;
    if (!isAdminOrSpecialUser && (user.key !== currentPassword || user.username !== currentUser.username)) {
      return res.status(401).send('Acesso não autorizado para deletar.');
    }
    await User.deleteOne({ username: targetUsername });
    res.redirect('/');
  } catch (error) {
    console.error('Erro ao acessar o banco de dados:', error);
    return res.status(500).send('Erro interno do servidor. Por favor, tente novamente mais tarde.');
  }
});


app.post('/edit/:username', async (req, res) => {
  const { username } = req.params;
  const { password, key, ft, saldo, total, isAdm } = req.body;
  try {
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(404).send('Usuário não encontrado.');
    }
    const isAdmValue = isAdm === 'true';
    user.password = password || user.password;
    user.key = key || user.key;
    user.ft = ft || user.ft;
    user.saldo = saldo || user.saldo;
    user.isAdm = isAdmValue;
    user.total = total || user.total;
    await user.save();
    return res.redirect('/');
  } catch (error) {
    console.error('Erro ao acessar o banco de dados:', error);
    return res.status(500).send('Erro interno do servidor. Por favor, tente novamente mais tarde.');
  }
});


app.post('/editarr/:username', async (req, res) => {
  const { username } = req.params;
  const { password, key, ft, insta, wallpaper, zap, yt } = req.body;
  try {
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(404).send('Usuário não encontrado.');
    }
    user.password = password || user.password;
    user.key = key || user.key;
    user.ft = ft || user.ft;
    user.yt = yt || user.yt;
    user.insta = insta || user.insta
    user.zap = zap || user.zap
    user.wallpaper = wallpaper || user.wallpaper
    await user.save();
    return res.redirect('/login');
  } catch (error) {
    console.error('Erro ao acessar o banco de dados:', error);
    return res.status(500).send('Erro interno do servidor. Por favor, tente novamente mais tarde.');
  }
});
// ============== ROTAS NORMAIS DA API ==============\\



const yts = require('yt-search');
const ytdl = require('ytdl-core');
const cheerio = require('cheerio');
const { AssemblyAI } = require('assemblyai');

// Constantes para APIs
const TMDB_API_KEY = '313071c73c4100a6996157af94de7207';
const TMDB_IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';
const ASSEMBLYAI_KEY = '286b8a431336478d8932ff40a0692271';
const assemblyaiClient = new AssemblyAI({ apiKey: ASSEMBLYAI_KEY });

// ============== ROTAS NORMAIS DA API ==============\\




app.use(express.json());
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

// Rota para buscar vídeos (exemplo de uso)
app.get('/pesquisa/:APIKEY', async (req, res) => {
  const user = await User.findOne({ key: req.params.APIKEY });
  if (!user || user.saldo <= 0) return res.status(401).json({ error: 'VERIFIQUE SUA API' });

  try {
    const { videos } = await yts(req.query.q);
    res.json(videos.map(({ title, url, duration, thumbnail }) => ({ title, url, duration: duration.timestamp, thumbnail })));
  } catch {
    res.status(500).json({ error: 'Erro na pesquisa' });
  }
});

app.get('/movie/:APIKEY', async (req, res) => {
  const user = await User.findOne({ key: req.params.APIKEY });
  if (!user || user.saldo <= 0) return res.status(401).json({ error: 'VERIFICA SUA API' });

  try {
    const { data } = await axios.get('https://api.themoviedb.org/3/search/movie', {
      params: { api_key: TMDB_API_KEY, query: req.query.q, language: 'pt-BR' }
    });
    const movie = data.results[0];
    if (!movie) return res.status(404).json({ error: 'Película no encontrada' });
    res.json({ title: movie.title, image: `${TMDB_IMAGE_BASE_URL}${movie.poster_path}`, description: movie.overview, release_date: movie.release_date });
  } catch {
    res.status(500).json({ error: 'Error al buscar la película' });
  }
});

const numerosPossiveis = require('./link.js');
app.get('/memes/:APIKEY', async (req, res) => {
    const user = await User.findOne({ key: req.params.APIKEY });
    if (!user || user.saldo <= 0) return res.status(401).json({ error: 'Acesso negado' });    
    res.json({ meme: numerosPossiveis[Math.floor(Math.random() * numerosPossiveis.length)] });
    if (!user.isAdm) {
        user.saldo -= 1;
        await user.save();
    }
});
app.get('/xvideos/:API/search', async (req, res) => {
  const { API: key } = req.params;
  const { q, page = 1 } = req.query;
  const resultsPerPage = 5;

  try {
    const user = await User.findOne({ key });
    if (!user) return res.status(401).json({ error: 'Chave inválida' });
    if (user.saldo <= 0 && !user.isAdm) return res.status(402).json(loghandler.notparam);

    const searchUrl = `https://www.xvideos.com/?k=${encodeURIComponent(q)}&p=${page - 1}`;
    const response = await axios.get(searchUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept-Language': 'en-US,en;q=0.9',
        'Referer': 'https://www.xvideos.com/',
        'Accept-Encoding': 'gzip, deflate, br'
      },
      timeout: 15000
    });

    const $ = cheerio.load(response.data);
    const results = [];

    const videoBlocks = $('.mozaique .thumb-block');
    
    const videoProcessing = videoBlocks.map(async (i, el) => {
      try {
        const videoPath = $(el).find('.thumb a').attr('href');
        if (!videoPath) return null;

        const videoUrl = `https://www.xvideos.com${videoPath}`;
        const videoPage = await axios.get(videoUrl, {
          headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
            'Referer': searchUrl
          },
          timeout: 20000
        });

        const $$ = cheerio.load(videoPage.data);
        
        // Nova extração do URL de download
        const scriptContent = $$('script:contains("html5player")').html();
        let downloadUrl = scriptContent?.match(/html5player\.setVideoUrlHigh\(\s*['"](.*?)['"]\s*\)/)?.[1];
        
        // Fallback caso não encontre
        if (!downloadUrl) {
          downloadUrl = scriptContent?.match(/html5player\.setVideoUrlLow\(\s*['"](.*?)['"]\s*\)/)?.[1];
        }
        
        // Último fallback para HLS
        if (!downloadUrl) {
          const configMatch = scriptContent?.match(/html5player\.setVideoHLS\(\s*['"](.*?)['"]\s*\)/);
          if (configMatch) {
            const m3u8Response = await axios.get(configMatch[1]);
            downloadUrl = m3u8Response.data.split('\n').find(line => line.endsWith('.mp4'));
          }
        }

        if (!downloadUrl) return null;

        return {
          title: $$('meta[property="og:title"]').attr('content'),
          url: videoUrl,
          duration: $$('.duration').text().trim(),
          thumb: $$('meta[property="og:image"]').attr('content'),
          download_url: downloadUrl
        };
      } catch (error) {
        console.error(`Erro no vídeo ${i + 1}:`, error.message);
        return null;
      }
    }).get();

    const rawResults = await Promise.all(videoProcessing);
    const validResults = rawResults.filter(item => item !== null);

    if (!user.isAdm) await diminuirSaldo(user.username);

    const startIndex = (page - 1) * resultsPerPage;
    const paginatedResults = validResults.slice(startIndex, startIndex + resultsPerPage);

    res.json({
      status: true,
      search_term: q,
      results: paginatedResults,
      total: validResults.length,
      page: parseInt(page),
      resultsPerPage
    });

  } catch (error) {
    console.error('Erro na pesquisa:', error.message);
    res.status(500).json({ 
      status: false, 
      error: 'Erro interno',
      details: error.message
    });
  } 
});

const PIXABAY_API_KEY = '49921681-9019e1d53abe4b8e8bbdc3ab7'; // Substitua pela sua chave

// Adicione esta rota junto com as outras rotas da API
app.get('/pixabay/:APIKEY/search', async (req, res) => {
    const { APIKEY } = req.params;
    const { q, category, min_width = 1920 } = req.query;
    
    try {
        const user = await User.findOne({ key: APIKEY });
        if (!user) return res.status(401).json({ error: 'Chave API inválida' });
        if (user.saldo <= 0 && !user.isAdm) return res.status(402).json(loghandler.notparam);

        const params = {
            key: PIXABAY_API_KEY,
            q: encodeURIComponent(q),
            lang: 'pt',
            image_type: 'photo',
            orientation: 'horizontal',
            min_width: min_width,
            per_page: 20,
            safesearch: true
        };

        if (category) params.category = category;

        const response = await axios.get('https://pixabay.com/api/', { params });
        
        const results = response.data.hits.map(image => ({
            url: image.largeImageURL,
            name: image.tags,
            user: image.user,
            views: image.views,
            likes: image.likes,
            downloads: image.downloads,
            resolution: `${image.imageWidth}x${image.imageHeight}`,
            type: image.type
        }));

        // Atualiza o saldo do usuário
        if (!user.isAdm) {
            user.saldo -= 1;
            await user.save();
        }

        res.json({
            status: true,
            search_term: q,
            total_results: response.data.totalHits,
            results: results
        });

    } catch (error) {
        console.error('Erro na busca de imagens:', error);
        const statusCode = error.response?.status || 500;
        res.status(statusCode).json({
            status: false,
            error: 'Erro na busca de imagens',
            details: error.response?.data || error.message
        });
    }
});


app.get('/intoxianime/:APIKEY/search', async (req, res) => {
  const { APIKEY } = req.params;
  const { q, page = 1 } = req.query;

  try {
    // Verificação do usuário
    const user = await User.findOne({ key: APIKEY });
    if (!user) return res.status(401).json({ error: 'Chave API inválida' });
    if (user.saldo <= 0 && !user.isAdm) return res.status(402).json(loghandler.notparam);

    // Configurar a URL de busca
    const searchUrl = `https://www.intoxianime.com/page/${page}/?s=${encodeURIComponent(q)}`;
    
    // Fazer a requisição
    const { data } = await axios.get(searchUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36',
        'Accept-Language': 'pt-BR,pt;q=0.9'
      }
    });

    // Parsear o HTML
    const $ = cheerio.load(data);
    const results = [];

    // Extrair as notícias
    $('article').each((index, element) => {
      const title = $(element).find('h2.entry-title').text().trim();
      const link = $(element).find('h2.entry-title a').attr('href');
      const image = $(element).find('div.post-thumbnail img').attr('src');
      const excerpt = $(element).find('div.entry-summary p').text().trim();
      const date = $(element).find('time.entry-date').attr('datetime');

      if (title && link) {
        results.push({
          title,
          link,
          image: image || null,
          excerpt: excerpt || null,
          date: date || null,
          tags: $(element).find('div.entry-categories a').map((i, el) => $(el).text()).get()
        });
      }
    });

    // Atualizar saldo
    if (!user.isAdm) await diminuirSaldo(user.username);

    res.json({
      status: true,
      search_term: q,
      current_page: parseInt(page),
      results_count: results.length,
      results
    });

  } catch (error) {
    console.error('Erro na busca:', error);
    res.status(500).json({
      status: false,
      error: 'Erro ao buscar notícias',
      details: error.message
    });
  }
});

const Jimp = require('jimp');

// 3. Rota corrigida e testada
app.get('/image/:APIKEY/texto=:text', async (req, res) => {
  try {
    const { APIKEY, text } = req.params;
    const IMAGE_URL = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRthlfNl41UWhg3bquwpwExG1QCtTy_W6pxwwPE_9IgEjEvNmJpPlMtQHV8&s=10';

    // Verificação do usuário
    const user = await User.findOne({ key: APIKEY });
    if (!user) return res.status(401).send('Chave API inválida');
    if (user.saldo <= 0 && !user.isAdm) return res.status(402).json(loghandler.notparam);

    // Carregar imagem
    const image = await Jimp.read(IMAGE_URL).catch(err => {
      throw new Error(`Falha ao carregar imagem: ${err.message}`);
    });

    // Carregar fonte
    const font = await Jimp.loadFont(Jimp.FONT_SANS_32_BLACK);

    // Configurações do texto
    const decodedText = decodeURIComponent(text);
    const x = 230;
    const y = image.bitmap.height - 300;

    // Aplicar texto
    image.print(font, x, y, decodedText);

    // Converter para buffer
    const buffer = await image.getBufferAsync(Jimp.MIME_JPEG);

    // Atualizar saldo
    if (!user.isAdm) {
      user.saldo -= 1;
      await user.save();
    }

    res.type('jpeg').send(buffer);

  } catch (error) {
    console.error('Erro crítico:', error.message);
    res.status(500).send(`Erro na geração: ${error.message}`);
  }
});

const sharp = require('sharp');
app.get('/overlay/:APIKEY', async (req, res) => {
  const { APIKEY } = req.params;
  const { url } = req.query; // Apenas a URL da imagem é recebida via query

  // Parâmetros fixos (ajuste esses valores conforme necessidade)
  const EDIT_PARAMS = {
    width: 502,      // Largura fixa
    height: 278,     // Altura fixa
    top: 30,        // Posição vertical
    left: 190,       // Posição horizontal
    rotate: 0,     // Rotação em graus
    opacity: 0,    // Opacidade (0.1 a 1.0)
    blendMode: 'over'// Modo de mesclagem (ver documentação do Sharp)
  };

  try {
    // Verificação do usuário
    const user = await User.findOne({ key: APIKEY });
    if (!user) return res.status(401).json({ error: 'Chave inválida' });
    if (user.saldo <= 0 && !user.isAdm) return res.status(402).json(loghandler.notparam);

    // URLs das imagens
    const BASE_IMAGE = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUTr9lzGALQ9sPvVKD6iaOFmHZhceqBCCE-PgMB6xUVEd4PPB8ZI-19fDO&s=10';
    
    // Download paralelo das imagens
    const [baseImg, overlayImg] = await Promise.all([
      axios.get(BASE_IMAGE, { responseType: 'arraybuffer' }),
      axios.get(url, { responseType: 'arraybuffer' })
    ]);

    // Processamento da imagem sobreposta
    const processedOverlay = await sharp(overlayImg.data)
      .resize({
        width: EDIT_PARAMS.width,
        height: EDIT_PARAMS.height,
        fit: 'cover', // ou 'contain' para manter proporção
        position: 'attention' // foco na área mais relevante
      })
      .rotate(EDIT_PARAMS.rotate)
      .composite([{
        input: Buffer.from([255, 255, 255, 255 * (1 - EDIT_PARAMS.opacity)]),
        raw: { width: 1, height: 1, channels: 4 },
        tile: true,
        blend: 'dest-in'
      }])
      .toBuffer();

    // Composição final
    const finalImage = await sharp(baseImg.data)
      .composite([{
        input: processedOverlay,
        top: EDIT_PARAMS.top,
        left: EDIT_PARAMS.left,
        blend: EDIT_PARAMS.blendMode
      }])
      .png({ quality: 90 })
      .toBuffer();

    // Atualização do saldo
    if (!user.isAdm) await diminuirSaldo(user.username);

    res.type('png').send(finalImage);

  } catch (error) {
    console.error('Erro:', error);
    res.status(500).json({
      status: false,
      error: 'Erro de processamento',
      details: error.message
    });
  }
});
// ============== ROTAS NORMAIS DA API ==============\\

app.listen(3239, () => {
  console.log("Server rodando: http://0.0.0.0:3239")
})

module.exports = app
/* @CLOVERMYT */