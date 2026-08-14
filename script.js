const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav-links');

toggle?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(open));
});

document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => nav.classList.remove('open'));
});

document.getElementById('year').textContent = new Date().getFullYear();

function handleForm(event) {
  event.preventDefault();
  const note = document.getElementById('form-note');
  note.textContent = 'Demo formu çalışıyor. Gerçek projede bu talep e-posta, WhatsApp veya CRM sistemine gönderilebilir.';
  return false;
}
