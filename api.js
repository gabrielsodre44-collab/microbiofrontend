// API URL (seu backend no Render)
const API_URL = "https://microbio-backend.onrender.com";

// Faz requisição /api/match e retorna JSON (ou null se falhar)
async function matchBacteria(tests) {
  try {
    const r = await fetch(API_URL + "/api/match", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(tests)
    });
    if (!r.ok) return null;
    return await r.json();
  } catch (err) {
    return null;
  }
}
