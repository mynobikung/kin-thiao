fetch('http://192.168.1.100:3000/mapraimairu/ranking-api?type=tourist_attraction')
  .then(res => res.json())
  .then(data => console.log(JSON.stringify(data, null, 2)))
  .catch(err => console.error(err));
