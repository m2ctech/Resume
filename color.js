let myheader = document.querySelector("h4");

//random color generator

function getRandomColor() {
  let letters = "0123456789ABCDEF";
  let color = "#";

  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function changeHeaderColor() {
  colorInput = getRandomColor();
  myheader.style.color = colorInput;
  //myheader.style.backgroundColor = colorInput;
}
setInterval("changeHeaderColor()", 500);
