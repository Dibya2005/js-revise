const user={
  name:"harsh",
  address:{
    city:"bhopl",
    pin:781325,
    loc:{
      lat:34,
      lng:77,
    },
  },
}
//imp
//for accessing longitude
console.log(user.address.loc.lng)
//cant read pprop lng error means parent object exist nkra
//if we use nested object many times it will take many lines of code
//we can also create variable which stores the nested object data
let {lat,lng}=user.address.loc;
console.log(lng)