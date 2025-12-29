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

// Work page tabs filter
document.addEventListener("DOMContentLoaded", () => {
  const tabButtons = document.querySelectorAll(".tab-btn");
  const cards = document.querySelectorAll(".work-card");

  if (!tabButtons.length || !cards.length) return;

  tabButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      tabButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      const filter = btn.dataset.filter;

      cards.forEach(card => {
        const tags = (card.dataset.tags || "").toLowerCase();
        const show = filter === "all" || tags.includes(filter.toLowerCase());
        card.style.display = show ? "" : "none";
      });
    });
  });
});
