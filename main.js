function cl(data) {
  console.log(data);
}

let typed = document.getElementById("someText");
let mirroredOne = document.getElementById("idOne");
let mirroredTwo = document.getElementById("idTwo");

typed.addEventListener("keyup", function(event) {
  mirroredOne.innerHTML = event.target.value;
  mirroredTwo.innerHTML = event.target.value;
});
