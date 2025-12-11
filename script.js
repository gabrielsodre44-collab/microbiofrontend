// interação com a página
document.getElementById('buscar').addEventListener('click', async () => {
  const tsi = document.getElementById('tsi').value.trim();
  const citrato = document.getElementById('citrato').value.trim();
  const indol = document.getElementById('indol').value.trim();
  const fen = document.getElementById('fen').value.trim();

  const msg = document.getElementById('msg');
  msg.textContent = 'Buscando...';
  document.getElementById('results').style.display = 'none';
  document.getElementById('list').innerHTML = '';

  const payload = { tsi, citrato, indol, fenilalanina: fen };
  const res = await matchBacteria(payload);

  if (!res) {
    msg.textContent = 'Erro ao conectar com a API. Verifique se o backend está no ar.';
    return;
  }
  msg.textContent = '';

  if (!Array.isArray(res) || res.length === 0) {
    msg.textContent = 'Nenhum resultado.';
    return;
  }

  const list = document.getElementById('list');
  document.getElementById('results').style.display = 'block';
  res.forEach(r => {
    const div = document.createElement('div');
    div.className = 'result-item';
    div.innerHTML = `<span>${r.bacteria}</span><span class="result-score">${r.score}</span>`;
    list.appendChild(div);
  });
});
