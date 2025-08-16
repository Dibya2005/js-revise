function updateTheme() {
  if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.body.classList.add('dark-mode');
    document.body.classList.remove('light-mode');
  } else {
    document.body.classList.remove('dark-mode');
    document.body.classList.add('light-mode');
  }
}

// Check localStorage for theme preference
if (localStorage.getItem("theme")) {
  document.body.classList.add(localStorage.getItem("theme"));
} else {
  updateTheme();
}

// so hame chahiye jo bhi hamne akhri ma khula ho wahi lga rha
window.matchMedia('(prefers-color-scheme: dark)').addEventListener("change", function() {
  if (!localStorage.getItem("theme")) {
    updateTheme();
  }
});

let btn = document.querySelector("button");
btn.addEventListener("click", function() {
  if (document.body.classList.contains('dark-mode')) {
    document.body.classList.remove('dark-mode');
    document.body.classList.add('light-mode');
    localStorage.setItem("theme", "light-mode");
  } else {
    document.body.classList.remove('light-mode');
    document.body.classList.add('dark-mode');
    localStorage.setItem("theme", "dark-mode");
  }
});
//how to expire cookies temporarily