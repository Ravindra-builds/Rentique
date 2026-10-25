let data = [
  {
    title: "Modern Apartment in New Delhi",
    description: "A modern and well-designed apartment located in the heart of New Delhi. Close to metro stations, markets, restaurants, and major business hubs, making it ideal for professionals and families.",
    price: 1200,
    location: "New Delhi, India",
    imageUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=880&auto=format&fit=crop",
    country: "India",
    geometry: { type: "Point", coordinates: [77.2090, 28.6139] }
  },
  {
    title: "Cozy Studio in Mumbai",
    description: "A cozy and comfortable studio apartment located in the vibrant city of Mumbai. Well-connected by local transport and close to cafes, offices, and entertainment areas.",
    price: 950,
    location: "Mumbai, India",
    imageUrl: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=880&q=80",
    country: "India",
    geometry: { type: "Point", coordinates: [72.8777, 19.0760] }
  },
  {
    title: "Luxury Penthouse in Pune",
    description: "A luxury penthouse located in Pune offering stunning city views, premium interiors, and modern amenities.",
    price: 3500,
    location: "Pune, India",
    imageUrl: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=880&q=80",
    country: "India",
    geometry: { type: "Point", coordinates: [73.8567, 18.5204] }
  },
  {
    title: "Elegant Home in Bengaluru",
    description: "A spacious and elegant home in Bengaluru, ideal for professionals and families.",
    price: 1600,
    location: "Bengaluru, India",
    imageUrl: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=880&q=80",
    country: "India",
    geometry: { type: "Point", coordinates: [77.5946, 12.9716] }
  },
  {
    title: "Beachside Villa in Goa",
    description: "A beautiful beachside villa offering peaceful surroundings and modern comforts.",
    price: 2800,
    location: "Goa, India",
    imageUrl: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=880&q=80",
    country: "India",
    geometry: { type: "Point", coordinates: [74.1240, 15.2993] }
  },
  {
    title: "Modern Loft in Hyderabad",
    description: "A modern loft-style apartment near Hyderabad IT corridor.",
    price: 1400,
    location: "Hyderabad, India",
    imageUrl: "https://images.unsplash.com/photo-1567521464027-f127ff144326?w=880&q=80",
    country: "India",
    geometry: { type: "Point", coordinates: [78.4867, 17.3850] }
  },
  {
    title: "Family Home in Chennai",
    description: "A comfortable family home in a calm residential neighborhood.",
    price: 1850,
    location: "Chennai, India",
    imageUrl: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=880&q=80",
    country: "India",
    geometry: { type: "Point", coordinates: [80.2707, 13.0827] }
  },
  {
    title: "Downtown Studio in Kolkata",
    description: "A centrally located studio close to markets and transport.",
    price: 890,
    location: "Kolkata, India",
    imageUrl: "https://images.unsplash.com/photo-1493857671505-72967e2e2760?w=880&q=80",
    country: "India",
    geometry: { type: "Point", coordinates: [88.3639, 22.5726] }
  },
  {
    title: "Elegant Flat in Ahmedabad",
    description: "A stylish flat with modern interiors and good connectivity.",
    price: 1500,
    location: "Ahmedabad, India",
    imageUrl: "https://images.unsplash.com/photo-1600585152915-d208bec867a1?w=880&q=80",
    country: "India",
    geometry: { type: "Point", coordinates: [72.5714, 23.0225] }
  },
  {
    title: "Garden Cottage in Jaipur",
    description: "A charming cottage with traditional vibes and modern amenities.",
    price: 1100,
    location: "Jaipur, India",
    imageUrl: "https://images.unsplash.com/photo-1586105251261-72a756497a11?w=880&q=80",
    country: "India",
    geometry: { type: "Point", coordinates: [75.7873, 26.9124] }
  },

  /* ---- ADDITIONAL LISTINGS ---- */

  {
    title: "Hill View Apartment in Shimla",
    description: "Cozy apartment with scenic hill views.",
    price: 1300,
    location: "Shimla, India",
    imageUrl: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=880&q=80",
    country: "India",
    geometry: { type: "Point", coordinates: [77.1734, 31.1048] }
  },
  {
    title: "Lakefront Stay in Udaipur",
    description: "Beautiful stay near lakes with peaceful surroundings.",
    price: 2200,
    location: "Udaipur, India",
    imageUrl: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=880&q=80",
    country: "India",
    geometry: { type: "Point", coordinates: [73.7125, 24.5854] }
  },
  {
    title: "City View Flat in Noida",
    description: "Modern flat close to offices and malls.",
    price: 1000,
    location: "Noida, India",
    imageUrl: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=880&q=80",
    country: "India",
    geometry: { type: "Point", coordinates: [77.3910, 28.5355] }
  },
  {
    title: "Luxury Stay in Gurugram",
    description: "Premium apartment near Cyber City.",
    price: 2400,
    location: "Gurugram, India",
    imageUrl: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=880&q=80",
    country: "India",
    geometry: { type: "Point", coordinates: [77.0266, 28.4595] }
  },
  {
    title: "River View Apartment in Varanasi",
    description: "Peaceful apartment near the Ganges.",
    price: 900,
    location: "Varanasi, India",
    imageUrl: "https://images.unsplash.com/photo-1523217582562-09d0def993a6?w=880&q=80",
    country: "India",
    geometry: { type: "Point", coordinates: [83.0100, 25.3176] }
  },
  {
    title: "Modern Flat in Indore",
    description: "Clean and modern flat in Indore city.",
    price: 950,
    location: "Indore, India",
    imageUrl: "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?w=880&q=80",
    country: "India",
    geometry: { type: "Point", coordinates: [75.8577, 22.7196] }
  },
  {
    title: "Comfort Stay in Bhopal",
    description: "Comfortable home in a green city.",
    price: 900,
    location: "Bhopal, India",
    imageUrl: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=880&q=80",
    country: "India",
    geometry: { type: "Point", coordinates: [77.4126, 23.2599] }
  },
  {
    title: "Premium Flat in Kochi",
    description: "Modern apartment near waterfront.",
    price: 1700,
    location: "Kochi, India",
    imageUrl: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=880&q=80",
    country: "India",
    geometry: { type: "Point", coordinates: [76.2673, 9.9312] }
  },
  {
    title: "Sea Breeze Stay in Trivandrum",
    description: "Relaxing coastal stay.",
    price: 1400,
    location: "Trivandrum, India",
    imageUrl: "https://images.unsplash.com/photo-1597047084897-51e81819a499?w=880&q=80",
    country: "India",
    geometry: { type: "Point", coordinates: [76.9366, 8.5241] }
  },
  {
    title: "City Apartment in Patna",
    description: "Affordable stay in city center.",
    price: 800,
    location: "Patna, India",
    imageUrl: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=880&q=80",
    country: "India",
    geometry: { type: "Point", coordinates: [85.1376, 25.5941] }
  },
  // ---------- SECOND TIER CITIES (10) ----------

{
  title: "Comfort Apartment in Coimbatore",
  description: "A clean and comfortable apartment in Coimbatore, ideal for families and working professionals with good connectivity and peaceful surroundings.",
  price: 900,
  location: "Coimbatore, India",
  imageUrl: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=880&q=80",
  country: "India",
  geometry: {
    type: "Point",
    coordinates: [76.9558, 11.0168]
  }
},
{
  title: "Spacious Flat in Vijayawada",
  description: "A spacious flat in Vijayawada offering comfortable living with good ventilation and nearby amenities.",
  price: 950,
  location: "Vijayawada, India",
  imageUrl: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=880&q=80",
  country: "India",
  geometry: {
    type: "Point",
    coordinates: [80.6480, 16.5062]
  }
},
{
  title: "City View Apartment in Trichy",
  description: "Well-maintained apartment with city views, located in a calm residential locality.",
  price: 880,
  location: "Tiruchirappalli, India",
  imageUrl: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=880&q=80",
  country: "India",
  geometry: {
    type: "Point",
    coordinates: [78.7047, 10.7905]
  }
},
{
  title: "Premium Stay in Warangal",
  description: "A premium stay in Warangal with modern interiors and easy access to educational institutions.",
  price: 820,
  location: "Warangal, India",
  imageUrl: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=880&q=80",
  country: "India",
  geometry: {
    type: "Point",
    coordinates: [79.5941, 17.9689]
  }
},
{
  title: "Peaceful Home in Guntur",
  description: "A peaceful and affordable home in Guntur suitable for families and long stays.",
  price: 780,
  location: "Guntur, India",
  imageUrl: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=880&q=80",
  country: "India",
  geometry: {
    type: "Point",
    coordinates: [80.4428, 16.3067]
  }
},

{
  title: "Family Flat in Tirunelveli",
  description: "A family-friendly flat located in Tirunelveli with schools and hospitals nearby.",
  price: 740,
  location: "Tirunelveli, India",
  imageUrl: "https://images.unsplash.com/photo-1600585152915-d208bec867a1?w=880&q=80",
  country: "India",
  geometry: {
    type: "Point",
    coordinates: [77.7274, 8.7139]
  }
},
// ---------- JHARKHAND CITIES ----------
{
  title: "Modern Apartment in Ranchi",
  description: "A modern apartment in the capital city Ranchi, surrounded by greenery and close to major city attractions.",
  price: 900,
  location: "Ranchi, Jharkhand, India",
  imageUrl: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=880&q=80",
  country: "India",
  geometry: {
    type: "Point",
    coordinates: [85.3240, 23.3441]
  }
},
{
  title: "Comfort Stay in Jamshedpur",
  description: "A comfortable stay in Jamshedpur with easy access to industrial areas and city parks.",
  price: 880,
  location: "Jamshedpur, Jharkhand, India",
  imageUrl: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=880&q=80",
  country: "India",
  geometry: {
    type: "Point",
    coordinates: [86.2029, 22.8046]
  }
},
{
  title: "Affordable Home in Dhanbad",
  description: "An affordable home in Dhanbad, ideal for students and working professionals near educational institutions.",
  price: 750,
  location: "Dhanbad, Jharkhand, India",
  imageUrl: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=880&q=80",
  country: "India",
  geometry: {
    type: "Point",
    coordinates: [86.4304, 23.7957]
  }
},
{
  title: "Peaceful Flat in Bokaro",
  description: "A peaceful flat in Bokaro Steel City with clean surroundings and good civic amenities.",
  price: 820,
  location: "Bokaro, Jharkhand, India",
  imageUrl: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=880&q=80",
  country: "India",
  geometry: {
    type: "Point",
    coordinates: [86.1511, 23.6693]
  }
},
{
  title: "City Apartment in Hazaribagh",
  description: "A city apartment in Hazaribagh close to hills and natural landscapes, perfect for peaceful living.",
  price: 780,
  location: "Hazaribagh, Jharkhand, India",
  imageUrl: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=880&q=80",
  country: "India",
  geometry: {
    type: "Point",
    coordinates: [85.3637, 23.9966]
  }
},
{
  title: "Family Stay in Deoghar",
  description: "A family-friendly stay in Deoghar, close to the famous Baidyanath Dham temple.",
  price: 760,
  location: "Deoghar, Jharkhand, India",
  imageUrl: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=880&q=80",
  country: "India",
  geometry: {
    type: "Point",
    coordinates: [86.6996, 24.4820]
  }
},
{
  title: "Comfort Apartment in Giridih",
  description: "A comfortable apartment in Giridih with calm surroundings and good connectivity.",
  price: 740,
  location: "Giridih, Jharkhand, India",
  imageUrl: "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?w=880&q=80",
  country: "India",
  geometry: {
    type: "Point",
    coordinates: [86.2996, 24.1862]
  }
},
{
  title: "Budget Stay in Ramgarh",
  description: "A budget-friendly stay in Ramgarh offering peaceful residential living and nearby markets.",
  price: 720,
  location: "Ramgarh, Jharkhand, India",
  imageUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=880&q=80",
  country: "India",
  geometry: {
    type: "Point",
    coordinates: [85.5124, 23.6303]
  }
}


];

module.exports = data;
