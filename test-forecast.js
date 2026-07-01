fetch('https://api.open-meteo.com/v1/forecast?latitude=11.8028&longitude=99.796&daily=weathercode,temperature_2m_max,temperature_2m_min,precipitation_probability_max,uv_index_max&timezone=Asia%2FBangkok')
  .then(res => res.json())
  .then(data => console.log(JSON.stringify(data, null, 2)))
  .catch(err => console.error(err));
