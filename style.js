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

// Work tabs filtering (safe: only runs on pages with .tab-btn)
(() => {
  const buttons = document.querySelectorAll(".tab-btn");
  const cards = document.querySelectorAll(".work-card");
  if (!buttons.length || !cards.length) return;

  function setActive(btn) {
    buttons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
  }

  function filter(tag) {
    cards.forEach(card => {
      const tags = (card.getAttribute("data-tags") || "").split(" ");
      const show = tag === "all" || tags.includes(tag);
      card.style.display = show ? "" : "none";
    });
  }

  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      const tag = btn.getAttribute("data-filter");
      setActive(btn);
      filter(tag);
    });
  });

  filter("all");
})();
