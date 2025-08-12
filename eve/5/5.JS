let btn=document.querySelector("#btn")
let fileinp=document.querySelector("#fileinp")
btn.addEventListener("click",function(){
  fileinp.click();
  //js ka through hmne displane none wala element ma click kra diya

  
})
//now i want to display the the name of the file in the upload file portion
//here when we upload a file we can use change
fileinp.addEventListener("change",function(dat){
  // console.log(dat.target.files[0].name)
  let FILE=dat.target.files[0] //access file
  //if file exist then only text change otherwise remain same
  if(file){
  btn.textContent=FILE.name
  }
})