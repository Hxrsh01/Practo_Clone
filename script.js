// scroll bottom for 25+ Specialities and Common Health Concerns
const sections = document.querySelectorAll("section");

sections.forEach(section => {
  const scrollBox = section.querySelector(".scrollBox");
  const btnLeft = section.querySelector(".btnLeft");
  const btnRight = section.querySelector(".btnRight");

  if (!scrollBox || !btnLeft || !btnRight) return;

  btnLeft.addEventListener("click", () => {
    scrollBox.scrollBy({ left: -180, behavior: "smooth" });
  });

  btnRight.addEventListener("click", () => {
    scrollBox.scrollBy({ left: 180, behavior: "smooth" });
  });

  function updateButtons() {
    btnLeft.style.display = scrollBox.scrollLeft <= 0 ? "none" : "block";
    btnRight.style.display =
      scrollBox.scrollLeft + scrollBox.clientWidth >= scrollBox.scrollWidth
        ? "none"
        : "block";
  }

  scrollBox.addEventListener("scroll", updateButtons);
  window.addEventListener("load", updateButtons);

  if ("ResizeObserver" in window) {
    new ResizeObserver(updateButtons).observe(scrollBox);
  }
});


// end

// scroll botton for Our Doctors
const scrollBox = document.getElementById("scrollTool");
const btnLeft = document.getElementById("goleft");
const btnRight = document.getElementById("goright");

if (scrollBox && btnLeft && btnRight) {
  btnLeft.addEventListener("click", () => {
    scrollBox.scrollBy({ left: -180, behavior: "smooth" });
  });

  btnRight.addEventListener("click", () => {
    scrollBox.scrollBy({ left: 180, behavior: "smooth" });
  });

  function updateButtons() {
    btnLeft.style.display = scrollBox.scrollLeft <= 0 ? "none" : "block";
    btnRight.style.display =
      scrollBox.scrollLeft + scrollBox.clientWidth >= scrollBox.scrollWidth
        ? "none"
        : "block";
  }

  scrollBox.addEventListener("scroll", updateButtons);
  window.addEventListener("load", updateButtons);

  if ("ResizeObserver" in window) {
    new ResizeObserver(updateButtons).observe(scrollBox);
  }
}

// end