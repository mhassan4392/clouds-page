const section1 = document.querySelector(".cloud-section-1");
const section2 = document.querySelector(".cloud-section-2");
const section3 = document.querySelector(".cloud-section-3");

section1.addEventListener("click", () => {
  const l = document.querySelectorAll(".cloud-section-1 .slide-left");
  const r = document.querySelectorAll(".cloud-section-1 .slide-right");
  const lArr = Array.from(l);
  const rArr = Array.from(r);
  lArr.forEach((el, i) => {
    el.classList.add("animate-left");
  });
  rArr.forEach((el, i) => {
    el.classList.add("animate-right");
  });
});

section2.addEventListener("click", () => {
  const l = document.querySelectorAll(".cloud-section-2 .slide-left");
  const r = document.querySelectorAll(".cloud-section-2 .slide-right");
  const lArr = Array.from(l);
  const rArr = Array.from(r);
  lArr.forEach((el, i) => {
    el.classList.add("animate-left");
  });
  rArr.forEach((el, i) => {
    el.classList.add("animate-right");
  });
});

section3.addEventListener("click", () => {
  const l = document.querySelectorAll(".cloud-section-3 .slide-left");
  const r = document.querySelectorAll(".cloud-section-3 .slide-right");
  const lArr = Array.from(l);
  const rArr = Array.from(r);
  lArr.forEach((el, i) => {
    el.classList.add("animate-left");
  });
  rArr.forEach((el, i) => {
    el.classList.add("animate-right");
  });
});
