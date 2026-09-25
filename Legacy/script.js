// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function(e){
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if(target) target.scrollIntoView({behavior:'smooth'});
  });
});

// Modal video handling
const modal = document.getElementById('videoModal');
const modalFrame = document.getElementById('modalFrame');
const modalTitle = document.getElementById('modalTitle');

function openVideoModal(id, title){
  modalFrame.src = `https://www.youtube.com/embed/${id}?autoplay=1&rel=0`;
  modalTitle.textContent = title || 'Playing';
  modal.style.display = 'block';
}

function closeVideoModal(){
  modalFrame.src = '';
  modal.style.display = 'none';
}

// Attach click/keyboard handlers to thumbnails
document.querySelectorAll('.thumb-wrap').forEach(el => {
  el.addEventListener('click', () => {
    const id = el.dataset.id;
    const caption = el.querySelector('.w3-wide')?.textContent || '';
    if(id) openVideoModal(id, caption);
  });
  el.addEventListener('keydown', (e) => {
    if(e.key === 'Enter' || e.key === ' ') { e.preventDefault(); el.click(); }
  });
});

// Close modal when clicking outside modal content
window.addEventListener('click', (e) => {
  if(e.target === modal) closeVideoModal();
});

// Close modal with Escape key
window.addEventListener('keydown', (e) => { if(e.key === 'Escape') closeVideoModal(); });
