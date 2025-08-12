//use Object.entries() to print all key-val pair
const course={
  courset:"cse",
  duration:5,
}
Object.entries(course).forEach(function(val){
  console.log(val[0]+":"+val[1])
})
//ekbar sam