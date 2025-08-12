
let a = document.querySelector("#a");
// a.addEventListener("mouseover", function () {
//   a.style.backgroundColor = "yellow"; // fixed spelling
// });

// a.addEventListener("mouseout", function () {
//   a.style.backgroundColor = "red"; // fixed spelling
// });
window.addEventListener("mousemove", function (event) {
  a.style.left = event.clientX + "px";
  a.style.top = event.clientY + "px";
});
//top left position absolute t lgoba pri
//page extend hoi sa 
//if you want to kae rhe mouse tip in the ceter of ractagle