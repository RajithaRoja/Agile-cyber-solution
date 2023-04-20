const colors = ["red", "purple" , "grey", "green", "yellow", "pink", "blue", "orange", "ash", "brown"];
let colorCount = 0;
var i = 0;
document.querySelector("button").addEventListener("click", ()=>{
  i = i < colors.length ? ++i :0;
document.querySelector("body").style.background = colors[i];
colorCount++; 
  console.log(colorCount);
} );
