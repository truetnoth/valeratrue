const link = document.querySelector(".dd");
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


const main_section = document.querySelector(".main_section");
const disclaimer_section = document.querySelector(".disclaimer_section");
const button = document.querySelector(".disclaimer");

button.addEventListener('click', function(evt) {
  evt.preventDefault();
  disclaimer_section.classList.toggle("hidden");
  main_section.classList.toggle("hidden");
});


// if (w < 1366) {
//   document.querySelector("h2").textContent = "hi";
// };


// window.addEventListener("resize", function() {
//   let w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
//   if (w < 1366) {
//     document.querySelector("h2").textContent = "hi";
//   } else if (w < 960) {
//     document.querySelector("h2").textContent = "hello";
//   }
// });


var isSafari = !!navigator.userAgent.match(/Version\/[\d\.]+.*Safari/);
var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

if (isSafari && iOS) {
  document.querySelector("footer").style.paddingBottom = "50px";
}

document.addEventListener('touchmove', function(e) {
  e.preventDefault();
}, {passive:false});

console.log("Привет! 👨🏼‍🏫");