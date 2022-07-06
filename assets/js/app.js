window.addEventListener("click", () => {
  console.log("hello");
  const l = document.querySelectorAll(".slideLeft");
  const r = document.querySelectorAll(".slideRight");
  const lArr = Array.from(l);
  const rArr = Array.from(r);
  lArr.forEach((el, i) => {
    el.classList.add("animate-left");
  });
  rArr.forEach((el, i) => {
    el.classList.add("animate-right");
  });
});
