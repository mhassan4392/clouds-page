const section1 = document.querySelector(".cloud-section-1");
const section2 = document.querySelector(".cloud-section-2");
const section3 = document.querySelector(".cloud-section-3");

const addAnimeClass = (className) => {
  const l = document.querySelectorAll(`${className} .slide-left`);
  const r = document.querySelectorAll(`${className} .slide-right`);
  const lArr = Array.from(l);
  const rArr = Array.from(r);

  for (i in lArr) {
    lArr[i].classList.add("animate-left");
  }

  for (i in rArr) {
    rArr[i].classList.add("animate-right");
  }
};

section1?.addEventListener("click", () => {
  addAnimeClass(".cloud-section-1");

  setTimeout(() => {
    window.location.href = "./section1.html";
  }, 4000);
});

section2?.addEventListener("click", () => {
  addAnimeClass(".cloud-section-2");

  setTimeout(() => {
    window.location.href = "./section2.html";
  }, 4000);
});

section3?.addEventListener("click", () => {
  addAnimeClass(".cloud-section-3");

  setTimeout(() => {
    window.location.href = "./section3.html";
  }, 4000);
});
