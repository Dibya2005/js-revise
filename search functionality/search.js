const users = [
  {
    name: "Dibyajyoti Raychoudhury",
    bio: "BTech CSE student passionate about AI, ML, and web development.",
    pic: "https://wallpapers.com/images/hd/muscular-giga-chad-nwmmqspytns31f4o.jpg"
  },
  {
    name: "Ananya Sharma",
    bio: "Creative graphic designer who loves minimalism and typography.",
    pic: "https://tse4.mm.bing.net/th/id/OIP.3StrE9oi0WynvlVuCmum4AHaEK?rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    name: "Rohit Verma",
    bio: "Full-stack developer exploring cloud technologies and blockchain.",
    pic: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop"
  },
  {
    name: "Priya Singh",
    bio: "Digital marketer with a passion for storytelling and branding.",
    pic: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1000&auto=format&fit=crop"
  },
  {
    name: "Arjun Mehta",
    bio: "Data scientist who loves turning data into actionable insights.",
    pic: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1000&auto=format&fit=crop"
  },
  {
    name: "Sneha Kapoor",
    bio: "UX/UI designer aiming to create human-centered digital experiences.",
    pic: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000&auto=format&fit=crop"
  },
  {
    name: "Aditya Raj",
    bio: "AI researcher exploring generative models and natural language processing.",
    pic: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1000&auto=format&fit=crop"
  }
];

// This function takes an array of user objects and displays them on the page.
function Showuser(array) {
  const userContainer = document.querySelector("#userContainer");
  // Clear any existing cards before rendering the new ones
  userContainer.innerHTML = "";

  // If the array is empty, show a message
  if (array.length === 0) {
    const noResults = document.createElement("p");
    noResults.classList.add("no-results");
    noResults.textContent = "No users found.";
    userContainer.appendChild(noResults);
    return; // Exit the function
  }

  // Loop through the array and create a card for each user
  array.forEach(element => {
    const card = document.createElement("div");
    card.classList.add("card");
    
    const img = document.createElement("img");
    img.src = element.pic;
    img.classList.add("bg-img");
    
    const bluredlayer = document.createElement("div");
    bluredlayer.classList.add("blured-layer");
    
    const content = document.createElement("div");
    content.classList.add("content");
    
    const heading = document.createElement("h3");
    heading.textContent = element.name;
    
    const pera = document.createElement("p");
    pera.textContent = element.bio;
    
    content.appendChild(heading);
    content.appendChild(pera);
    
    card.appendChild(img);
    card.appendChild(bluredlayer);
    card.appendChild(content);
    
    userContainer.appendChild(card);
  });
}

// Get the search input element
let search = document.querySelector("#search");

// Initially display all users when the page loads
Showuser(users);

// Add an event listener to the search input for real-time filtering
search.addEventListener("input", function() {
  const searchTerm = search.value.toLowerCase();
  
  // Filter the users based on the search term
  const filteredUsers = users.filter(user => 
    user.name.toLowerCase().includes(searchTerm)
  );
  
  // Display the filtered users
  Showuser(filteredUsers);
});