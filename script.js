
// function moveRandomEl(elm) {
//   elm.style.position = "absolute";
//   elm.style.top = Math.floor(Math.random() * 90 + 5) + "%";
//   elm.style.left = Math.floor(Math.random() * 90 + 5) + "%";
// }

// const moveRandom = document.querySelector("#move-random");

// moveRandom.addEventListener("mouseenter", function (e) {
//   moveRandomEl(e.target);
// });


function moveRandomEl(elm) {
  elm.style.position = "absolute";

  // Use setTimeout to add a delay before moving the element
  setTimeout(() => {
    elm.style.top = Math.floor(Math.random() * 50 + 25) + "%"; // Reduced randomness range
    elm.style.left = Math.floor(Math.random() * 50 + 25) + "%";
  }, 300); // Delay movement by 300ms
}

const moveRandom = document.querySelector("#move-random");

moveRandom.addEventListener("mouseenter", function (e) {
  moveRandomEl(e.target);
});
