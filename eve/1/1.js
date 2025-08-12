let p=document.querySelector('p');
function click(){
  p.style.color='red';
}
p.addEventListener('click',click);
p.removeEventListener('click',click);