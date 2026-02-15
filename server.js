const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Données simulées pour le rapport SEO TikTok
const tiktokSeoData = {
  topKeywords: [
    { keyword: 'trending', volume: 1250000, competition: 'high' },
    { keyword: 'viral', volume: 980000, competition: 'high' },
    { keyword: 'fyp', volume: 750000, competition: 'medium' },
    { keyword: 'foryou', volume: 620000, competition: 'high' },
    { keyword: 'dance', volume: 540000, competition: 'medium' },
    { keyword: 'comedy', volume: 480000, competition: 'medium' },
    { keyword: 'music', volume: 420000, competition: 'high' },
    { keyword: 'challenge', volume: 380000, competition: 'medium' },
    { keyword: 'makeup', volume: 320000, competition: 'low' },
    { keyword: 'cooking', volume: 290000, competition: 'low' }
  ],
  trendingHashtags: [
    { hashtag: '#fyp', usage: 150000000, category: 'discovery' },
    { hashtag: '#foryou', usage: 120000000, category: 'discovery' },
    { hashtag: '#trending', usage: 95000000, category: 'trend' },
    { hashtag: '#viral', usage: 80000000, category: 'trend' },
    { hashtag: '#dance', usage: 65000000, category: 'entertainment' },
    { hashtag: '#comedy', usage: 55000000, category: 'entertainment' },
    { hashtag: '#makeuptutorial', usage: 45000000, category: 'beauty' },
    { hashtag: '#cookinghacks', usage: 40000000, category: 'lifestyle' },
    { hashtag: '#food', usage: 38000000, category: 'lifestyle' },
    { hashtag: '#art', usage: 35000000, category: 'creative' }
  ],
  contentTips: [
    'Utilisez des hashtags mixtes : tendance + niche + créateur',
    'Créez un hashtag unique pour votre marque',
    'Gardez 3-5 hashtags pertinents par vidéo',
    'Analysez les hashtags des comptes à succès dans votre niche',
    'Mettez à jour vos hashtags régulièrement selon les tendances'
  ]
};

// Routes
app.get('/', (req, res) => {
  res.json({ message: 'API TikTok SEO Analyzer - Utilisez /api/seo pour obtenir des données' });
});

app.get('/api/seo', (req, res) => {
  res.json({
    reportDate: new Date().toISOString(),
    platform: 'TikTok',
    data: tiktokSeoData
  });
});

app.get('/api/seo/keywords', (req, res) => {
  res.json({
    reportDate: new Date().toISOString(),
    platform: 'TikTok',
    keywords: tiktokSeoData.topKeywords
  });
});

app.get('/api/seo/hashtags', (req, res) => {
  res.json({
    reportDate: new Date().toISOString(),
    platform: 'TikTok',
    hashtags: tiktokSeoData.trendingHashtags
  });
});

app.get('/api/seo/tips', (req, res) => {
  res.json({
    reportDate: new Date().toISOString(),
    platform: 'TikTok',
    tips: tiktokSeoData.contentTips
  });
});

// Démarrage du serveur
app.listen(PORT, () => {
  console.log(`Serveur démarré sur http://localhost:${PORT}`);
  console.log('Routes disponibles:');
  console.log('- GET /api/seo : Rapport complet SEO TikTok');
  console.log('- GET /api/seo/keywords : Mots-clés tendance');
  console.log('- GET /api/seo/hashtags : Hashtags tendance');
  console.log('- GET /api/seo/tips : Conseils de contenu');
});