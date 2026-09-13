document.querySelector("#year").textContent = new Date().getFullYear();

window.lucide?.createIcons({ attrs: { "stroke-width": 1.7 } });

const reveal = document.querySelectorAll("[data-reveal]");
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => { if (entry.isIntersecting) entry.target.classList.add("is-visible"); });
}, { threshold: 0.18 });
reveal.forEach((element) => observer.observe(element));
