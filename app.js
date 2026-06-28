const phone = '393780044049';
const form = document.getElementById('requestForm');

form?.addEventListener('submit', (event) => {
  event.preventDefault();
  const nome = document.getElementById('nome').value.trim();
  const telefono = document.getElementById('telefono').value.trim();
  const comune = document.getElementById('comune').value.trim();
  const servizio = document.getElementById('servizio').value;
  const data = document.getElementById('data').value || 'Da concordare';
  const orario = document.getElementById('orario').value || 'Da concordare';
  const messaggio = document.getElementById('messaggio').value.trim();

  const text = `Ciao, vorrei inviare una richiesta per Al tuo fianco.%0A%0A` +
    `Nome: ${encodeURIComponent(nome)}%0A` +
    `Telefono: ${encodeURIComponent(telefono)}%0A` +
    `Comune: ${encodeURIComponent(comune)}%0A` +
    `Servizio: ${encodeURIComponent(servizio)}%0A` +
    `Data preferita: ${encodeURIComponent(data)}%0A` +
    `Orario preferito: ${encodeURIComponent(orario)}%0A` +
    `Richiesta: ${encodeURIComponent(messaggio)}`;

  window.open(`https://wa.me/${phone}?text=${text}`, '_blank');
});
