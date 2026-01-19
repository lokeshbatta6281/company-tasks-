// Simple scroll animation
window.addEventListener("scroll", () => {
  const img = document.querySelector(".hero-img");
  let scrollValue = window.scrollY;
  img.style.transform = `translateY(${scrollValue * 0.03}px)`;
});
// Simple animation on load
document.querySelectorAll(".step-box").forEach((box, index) => {
  box.style.opacity = 0;
  setTimeout(() => {
    box.style.transition = "0.6s";
    box.style.opacity = 1;
  }, index * 200);
});
document.querySelectorAll('.service-item').forEach(item=>{
  item.addEventListener('click',()=>{
    document.querySelectorAll('.service-item').forEach(i=>i.classList.remove('active'));
    item.classList.add('active');
  });
});
document.getElementById("year").textContent = new Date().getFullYear();
const slider = document.querySelector('#testimonialSlider');

new bootstrap.Carousel(slider, {
  interval: 4000,
  pause: 'hover',
  wrap: true
});

const sliders = document.querySelector('#heroCarousel');

new bootstrap.Carousel(sliders, {
  interval: 4000,
  wrap: true
});
