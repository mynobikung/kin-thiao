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
    lng: Number(((minX + maxX) / 2).toFixed(4)),
    lat: Number(((minY + maxY) / 2).toFixed(4))
  };
}

data.features.forEach(f => {
  const center = getCentroid(f.geometry.coordinates);
  f.properties.lat = center.lat;
  f.properties.lng = center.lng;
});

fs.writeFileSync("src/data/prachuap-districts.json", JSON.stringify(data));
