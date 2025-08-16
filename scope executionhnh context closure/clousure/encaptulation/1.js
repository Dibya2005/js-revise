//inner logic hide kr dena access un chizo ka dena jiski jarurat ha
function clicklimiter(){
  let click=0;
  return function(){
    if(click<5){
      click++;
      console.log(`clicked:${click}times`)
    }
    else {
      console.error("limit exceded,try after sometime ")
    }
  }
}
let fnc=clicklimiter()
fnc()
fnc()
fnc()
fnc()
fnc()
fnc()
///bahar click ka value ko pahar se chage nhi kr sakte ye as=ek private variable bn chuka ha
