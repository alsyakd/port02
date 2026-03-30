// Scroll reveal
const reveals = document.querySelectorAll(".reveal");
const obs = new IntersectionObserver(
  (entries) => {
    entries.forEach((e, i) => {
      if (e.isIntersecting) {
        setTimeout(() => e.target.classList.add("visible"), i * 80);
      }
    });
  },
  { threshold: 0.1 },
);
reveals.forEach((r) => obs.observe(r));

// Skill bar animation
const bars = document.querySelectorAll(".skill-fill");
const barObs = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        const w = e.target.dataset.width;
        e.target.style.width = w + "%";
        barObs.unobserve(e.target);
      }
    });
  },
  { threshold: 0.3 },
);
bars.forEach((b) => barObs.observe(b));
