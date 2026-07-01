const fs = require('fs');
const axios = require('axios');

async function test() {
  const env = fs.readFileSync('.env.local', 'utf8');
  const key = env.split('\n').find(l => l.startsWith('SERPAPI_KEY='))?.split('=')[1]?.replace(/["'\r]/g, '');
  
  try {
    const res = await axios.get('https://serpapi.com/search.json', {
      params: { engine: 'google_local', q: 'คาเฟ่ ประจวบคีรีขันธ์', location: 'Prachuap Khiri Khan, Thailand', api_key: key }
    });
    const places = res.data.local_results.slice(0,2);
    console.log(places.map(p => ({ title: p.title, place_id: p.place_id, data_id: p.data_id })));
  } catch (err) {
    console.error(err.response?.data || err.message);
  }
}
test();
