let boxes = document.querySelectorAll(".box");
let lastClicked = 0;

boxes.forEach((box) => {
  box.addEventListener("click", (hide) => {
    if (lastClicked) {
      lastClicked.style.display = "block";
    }
    lastClicked = hide.target;
    hide.target.style.display = "none";
  });
});
