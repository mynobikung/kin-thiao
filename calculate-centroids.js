const fs = require("fs");

const data = JSON.parse(fs.readFileSync("src/data/prachuap-districts.json", "utf-8"));

function getCentroid(coords) {
  let minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity;
  coords.forEach(polygon => {
    polygon.forEach(ring => {
      ring.forEach(([lng, lat]) => {
        if (lng < minX) minX = lng;
        if (lng > maxX) maxX = lng;
        if (lat < minY) minY = lat;
        if (lat > maxY) maxY = lat;
      });
    });
  });
  return {
    lng: (minX + maxX) / 2,
    lat: (minY + maxY) / 2
  };
}

const updates = data.features.map(f => {
  const center = getCentroid(f.geometry.coordinates);
  return {
    id: f.properties.id,
    nameTh: f.properties.nameTh,
    lat: Number(center.lat.toFixed(4)),
    lng: Number(center.lng.toFixed(4))
  };
});

console.log(JSON.stringify(updates, null, 2));
