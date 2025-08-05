const searchinput = document.getElementById("searchinput");

searchinput.addEventListener("input", () => {
  const insert = searchinput.value.toLowerCase();
  const containers = document.querySelectorAll(".container");
  let visibleCount = 0;

  containers.forEach(container => {
    const title = container.querySelector(".Doc-title").textContent.toLowerCase();

    if (title.includes(insert)) {
      container.style.display = "flex";
      visibleCount++;
    } else {
      container.style.display = "none";
    }
  });

  const main = document.querySelector("main");
  if (visibleCount === 1) {
    main.classList.add("one-visible");
  } else {
    main.classList.remove("one-visible");
  }
});