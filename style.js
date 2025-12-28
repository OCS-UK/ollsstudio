// Dark mode toggle
const toggle = document.getElementById("themeToggle");
if (toggle) {
  toggle.onclick = () => {
    document.body.classList.toggle("dark");
  };
}

// Scroll fade-in
const items = document.querySelectorAll(".fade-in");
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("visible");
  });
});
items.forEach(item => observer.observe(item));

// Sticky header shadow
const header = document.querySelector(".glass-header");
window.addEventListener("scroll", () => {
  header.classList.toggle("scrolled", window.scrollY > 20);
});

// --- Work page project filter (safe-guarded) ---
(function () {
  const grid = document.querySelector('#featuredGrid');
  const pills = document.querySelectorAll('.tab-btn[data-pfilter]');
  if (!grid || !pills.length) return;

  const cards = grid.querySelectorAll('.work-card');

  function setActive(btn) {
    pills.forEach(p => p.classList.remove('active'));
    btn.classList.add('active');
  }

  function filter(type) {
    cards.forEach(card => {
      const t = card.getAttribute('data-ptype') || '';
      card.style.display = (type === 'all' || t === type) ? '' : 'none';
    });
  }

  pills.forEach(btn => {
    btn.addEventListener('click', () => {
      const type = btn.getAttribute('data-pfilter');
      setActive(btn);
      filter(type);
    });
  });
})();

