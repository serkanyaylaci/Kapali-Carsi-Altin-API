export default async function handler(req, res) {
  // CORS başlıklarını ayarla (her yerden erişim için)
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET');

  const COLLECT_API_KEY = "apikey 17pdUWwgoGD5goPN0gGoAm:29vVJlZnoZzJFGNnPj20Wq"; 

  try {
    const response = await fetch('https://api.collectapi.com/economy/goldPrice', {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        'authorization': `apikey ${COLLECT_API_KEY}`
      }
    });

    const data = await response.json();

    // CollectAPI'den gelen veriyi doğrudan istemciye dön
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({ error: 'Veri çekilemedi', details: error.message });
  }
}
