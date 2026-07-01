fetch('http://192.168.1.100:3000/mapraimairu/place/random-multiple?limit=1')
  .then(res => {
    console.log('Status:', res.status);
    return res.text();
  })
  .then(data => console.log('Data:', data))
  .catch(err => console.error(err));
