const fs = require('fs');
const axios = require('axios');

async function test() {
  const env = fs.readFileSync('.env.local', 'utf8');
  const key = env.split('\n').find(l => l.startsWith('SERPAPI_KEY='))?.split('=')[1]?.replace(/["'\r]/g, '');
  
  if (!key || key.includes("your_serpapi_key_here")) {
    console.log("No real API key found");
    return;
  }
  
  try {
    const res = await axios.get('https://serpapi.com/search.json', {
      params: { engine: 'google_local', q: 'คาเฟ่', api_key: key }
    });
    console.log(JSON.stringify(res.data.local_results[0], null, 2));
  } catch (err) {
    console.error(err.response?.data || err.message);
  }
}

test();
