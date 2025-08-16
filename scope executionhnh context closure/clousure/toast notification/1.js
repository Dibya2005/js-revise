// Toast creator function
function createToaster(config) {
  return function (notification) {
    let div = document.createElement("div");
    div.className = `fixed 
      ${config.theme === "dark" ? "bg-gray-800 text-white" : "bg-gray-100 text-black"} 
      px-6 py-3 rounded shadow-lg flex items-center space-x-2
      ${config.positionX === "right" ? "right-10" : "left-10"} 
      ${config.positionY === "top" ? "top-10" : "bottom-10"}`;

    div.textContent = notification;
    document.body.appendChild(div);

    // Auto-remove after duration
    setTimeout(() => {
      document.body.removeChild(div);
    }, config.duration * 1000);
  };
}

// Usage
let toaster = createToaster({
  positionX: "right", // or "left"
  positionY: "top",   // or "bottom"
  theme: "dark",      // or "light"
  duration: 3,        // in seconds
});

toaster("This is a dummy notification");
//toster function duibar use krli overlap hoi jbo pra kinka handle kru
