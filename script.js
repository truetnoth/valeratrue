const link = document.querySelector("a");
const arrow = link.querySelector("svg");
let w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
let h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

link.addEventListener("mouseover", function() {
  arrow.style.transform = 'translateX(5px)';
  arrow.style.transition = 'transform 1s ease';
});
link.addEventListener("mouseout", function() {
  arrow.style.transform = 'translateX(0)';
  arrow.style.transition = 'transform 1s ease';
});
