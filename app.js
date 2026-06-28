const form = document.getElementById('bookingForm');
const requestsBox = document.getElementById('requests');
const formMessage = document.getElementById('formMessage');
const clearBtn = document.getElementById('clearBtn');
const STORAGE_KEY = 'al_tuo_fianco_requests';

function getRequests(){
  return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
}
function saveRequests(items){
  localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
}
function renderRequests(){
  const items = getRequests();
  if(!items.length){
    requestsBox.innerHTML = '<p>Nessuna richiesta ancora inserita.</p>';
    return;
  }
  requestsBox.innerHTML = items.map((r, i) => `
    <article class="request">
      <strong>${i+1}. ${escapeHtml(r.servizio)} - ${escapeHtml(r.nome)}</strong>
      <small>${escapeHtml(r.comune)} · ${escapeHtml(r.data || 'data da concordare')} ${escapeHtml(r.ora || '')}</small>
      <p><b>Telefono:</b> ${escapeHtml(r.telefono)}</p>
      <p>${escapeHtml(r.note || 'Nessuna nota')}</p>
      ${r.fileName ? `<p><b>Documento:</b> ${escapeHtml(r.fileName)}</p>` : ''}
    </article>
  `).join('');
}
function escapeHtml(value){
  return String(value).replace(/[&<>'"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#039;','"':'&quot;'}[c]));
}
form.addEventListener('submit', e => {
  e.preventDefault();
  const data = new FormData(form);
  const file = data.get('file');
  const request = {
    nome: data.get('nome'),
    telefono: data.get('telefono'),
    comune: data.get('comune'),
    servizio: data.get('servizio'),
    data: data.get('data'),
    ora: data.get('ora'),
    note: data.get('note'),
    fileName: file && file.name ? file.name : ''
  };
  const items = getRequests();
  items.unshift(request);
  saveRequests(items);
  form.reset();
  formMessage.hidden = false;
  renderRequests();
});
clearBtn.addEventListener('click', () => {
  localStorage.removeItem(STORAGE_KEY);
  renderRequests();
});
if('serviceWorker' in navigator){
  navigator.serviceWorker.register('service-worker.js').catch(()=>{});
}
renderRequests();
