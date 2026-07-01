fetch('https://api.open-meteo.com/v1/forecast?latitude=11.8028&longitude=99.796&current_weather=true')
  .then(res => res.json())
  .then(data => console.log(JSON.stringify(data, null, 2)))
  .catch(err => console.error(err));
