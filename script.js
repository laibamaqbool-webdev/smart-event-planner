function openModal() { document.getElementById('modalOverlay').classList.add('open'); }
function closeModal() { document.getElementById('modalOverlay').classList.remove('open'); }
function closeModalOutside(e) { if (e.target === document.getElementById('modalOverlay')) closeModal(); }

function showToast(msg) {
    const t = document.getElementById('toast');
    t.textContent = msg;
    t.classList.add('show');
    setTimeout(() => t.classList.remove('show'), 3500);
}

function submitForm() { closeModal(); showToast(' Account created! Welcome to Eventique.'); }

function subscribe() {
    const email = document.getElementById('nlEmail').value;
    if (!email || !email.includes('@')) { showToast('  Please enter a valid email address.'); return; }
    document.getElementById('nlEmail').value = '';
    showToast(' Subscribed! Great things coming your way.');
}

function filterEvents(cat, btn) {
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    document.querySelectorAll('.event-card').forEach(card => {
        card.classList.toggle('visible', cat === 'all' || card.dataset.cat === cat);
    });
}

window.addEventListener('scroll', () => {
    document.querySelector('nav').style.boxShadow = window.scrollY > 20 ? '0 2px 20px rgba(0,0,0,0.08)' : 'none';
});

window.addEventListener('load', () => {
    setTimeout(() => { document.querySelector('.progress-fill').style.width = '72%'; }, 500);
});
