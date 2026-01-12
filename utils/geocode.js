const axios = require("axios");

/**
 * Forward geocoding
 * @param {String} location - User entered location
 * @returns {Object} GeoJSON Point
 */
async function geocode(location) {
  if (!location) return null;

  const response = await axios.get(
    "https://nominatim.openstreetmap.org/search",
    {
      params: {
        q: location,
        format: "json",
        limit: 1
      },
      headers: {
        "User-Agent": "rentique-app" // required
      }
    }
  );

  if (!response.data.length) {
    throw new Error("Location not found");
  }

  const { lat, lon } = response.data[0];

  return {
    type: "Point",
    coordinates: [Number(lon), Number(lat)] // [lng, lat]
  };
}

module.exports = geocode;
