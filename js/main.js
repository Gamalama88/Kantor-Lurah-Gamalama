
// Animasi scroll masuk
document.addEventListener("DOMContentLoaded", function () {
  const faders = document.querySelectorAll(".card");

  const appearOptions = {
    threshold: 0.3,
    rootMargin: "0px 0px -100px 0px"
  };

  const appearOnScroll = new IntersectionObserver(function (entries, appearOnScroll) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("appear");
      appearOnScroll.unobserve(entry.target);
    });
  }, appearOptions);

  faders.forEach(fader => {
    appearOnScroll.observe(fader);
  });
});

// Toggler navigasi jika responsive
function toggleMenu() {
  const nav = document.getElementById("nav-menu");
  nav.classList.toggle("hidden");
}
