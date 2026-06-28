if ('serviceWorker' in navigator) navigator.serviceWorker.register('service-worker.js');
document.getElementById('requestForm').addEventListener('submit', function(e){
  e.preventDefault();
  const d = Object.fromEntries(new FormData(this).entries());
  const msg = `Ciao, sono ${d.nome}.%0ATelefono: ${d.telefono}%0AComune: ${d.comune}%0AServizio: ${d.servizio}%0AData preferita: ${d.data || 'da concordare'}%0ANote: ${d.note || '-'}`;
  window.open(`https://wa.me/393780044049?text=${msg}`, '_blank');
});
