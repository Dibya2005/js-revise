//local storage -> browser ke andar data store krna jo browser ke band hona par bhi delete nhi hogta
//session storage -> browser ke andar data store krna jo sirf tab band hone tak rehta hai
//cookies -> ye bhi data store krta ha and apka data browser ke cookies naam ki property mein save hota hai and ye cookies xoncept kam data light data ke liye ha 
// localStorage
//store
//data fetch
//data remove 
//update
//store
localStorage.setItem("name","sachin");
//getitems
let val=localStorage.getItem("name");
console.log(val);
//remove
localStorage.removeItem("name");
//update
localStorage.setItem("name","rahul");
//set item agar property nhi hoti ha to add krta ha agr hoti ha to override kr deta ha
localStorage.setItem("name",["rahul","sachin"]);
//whole array will becomes a string name:"rahul,sachin"
//local storage only store strings
//to do this we use JSON.stringify() array ko string bna dega
localStorage.clear();
localStorage.setItem("friends",JSON.stringify(["sachin","rahul","harsha"]));
let friends=JSON.parse(localStorage.getItem("friends"));
//JSON.parse() will convert the string back to an array
console.log(friends);