const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");
menuBtn.addEventListener("click", () => navMenu.classList.toggle("open"));
document.querySelectorAll("#navMenu a").forEach(a => a.addEventListener("click", () => navMenu.classList.remove("open")));

const progress = document.querySelector(".progress");
window.addEventListener("scroll", () => {
  const h = document.documentElement.scrollHeight - window.innerHeight;
  progress.style.width = `${(window.scrollY / h) * 100}%`;
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, {threshold: 0.12});
document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

document.getElementById("year").textContent = new Date().getFullYear();
