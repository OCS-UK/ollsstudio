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

