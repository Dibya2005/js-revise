let form = document.querySelector("#myForm");
let inputs = document.querySelectorAll("#myForm input"); // now inputs[0], inputs[1] work

form.addEventListener("submit", function (det) {
  det.preventDefault(); // stop reload

  let card = document.createElement("div");
  card.classList.add("card");

  let profile = document.createElement("div");
  profile.classList.add("profile");

  let img = document.createElement("img");
  img.setAttribute("src", inputs[0].value);
  profile.appendChild(img);

  let h3 = document.createElement("h3");
  h3.textContent = inputs[1].value;

  let h5 = document.createElement("h5");
  h5.textContent = inputs[2].value;

  let p = document.createElement("p");
  p.textContent = inputs[3].value;

  card.appendChild(profile);
  card.appendChild(h3);
  card.appendChild(h5);
  card.appendChild(p);

  document.querySelector("#main").appendChild(card);
  inputs.forEach(function (input) {
    if(input.type !== "submit") input.value = "";
  });

  // form.reset(); // optional: clear inputs after submit
});
//refresesh nholi input r bostu khini add kribo prim