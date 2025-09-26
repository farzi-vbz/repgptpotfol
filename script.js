// Fade-in on scroll
document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add("visible");
    });
  }, { threshold: 0.15 });

  document.querySelectorAll(".fade-in").forEach((el) => observer.observe(el));

  // Contact form demo
  const form = document.querySelector(".contact-form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Message sent! (Demo only, backend not connected)");
    form.reset();
  });
});
