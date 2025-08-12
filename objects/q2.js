//destructure the city and location from object above
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
let {city}=user.city
let {lat}=user.loc.lat
console.log({city})