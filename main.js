const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));

var er = 22;

var counter = 0;
const observerOrder = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      counter = counter + 1;
      if ((counter = 1)) {
        entry.target.classList.add("showOrder");
      } else {
        entry.target.classList.remove("showOrder");
      }
    }
  });
});

const hiddenOrderElements = document.querySelectorAll(".hiddenOrder");
hiddenOrderElements.forEach((el) => observerOrder.observe(el));
