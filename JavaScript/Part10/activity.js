let btn = document.querySelector(".btn");

btn.addEventListener("click", function () {
    let h1 = document.querySelector("#color");
    let randomColor = getRandomColor();
    h1.innerText = randomColor;

    let div = document.querySelector(".color-generate");
    div.style.backgroundColor = randomColor;
    div.innerText = randomColor;
    console.log("Random color updated");
});

function getRandomColor() {
  let red = Math.floor(Math.random() * 255);
  let green = Math.floor(Math.random() * 255);
  let blue = Math.floor(Math.random() * 255);

  let color = `rgb(${red},${green},${blue})`;
  return color;
}

