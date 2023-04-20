const keyboard = document.querySelector("#keyboard");
const text = document.querySelector("#text");
const shiftKey = keyboard.querySelector('[data-char="shift"]');
const capsKey = keyboard.querySelector('[data-char="capslock"]');
let isShift = false;
let isCaps = false;
let capslockClass;

keyboard.addEventListener("click", (e) => {
  let char = e.target.dataset.char;
  if (char === "shift") {
    isShift = !isShift;
    shiftKey.classList.toggle("active");
  } else if (char === "capslock") {
    isCaps = !isCaps;
    capsKey.classList.toggle("active");
  } else if (char === "backspace") {
    let lastChar = text.textContent.slice(-1);
    text.textContent = text.textContent.slice(0, -1);
    if (lastChar === lastChar.toUpperCase()) {
      isShift = false;
      shiftKey.classList.remove("active");
    }
  } else if (char === "enter") {
    text.textContent += "\n";
  } else {
    let charToAdd;
    if (isShift || isCaps) {
      charToAdd = char.toUpperCase();
    } else {
      charToAdd = char.toLowerCase();
    }
    text.textContent += charToAdd;
    isShift = false;
    shiftKey.classList.remove("active");
  }
});
