let btn =document.querySelectorAll('button')
// console.log(btn.l);
let screen=document.getElementById('screen');
// console.log(screen.innerText);
// let calbody=document.querySelector('body');
// console.log(calbody);

for(let i =0; i< btn.length; i++){
  // console.log(i);
btn[i].addEventListener("click",()=>{
  if(btn[i].innerHTML == "="){
    screen.innerHTML=eval(screen.innerHTML);
  }else{
    if(btn[i].innerHTML=="C"){
      screen.innerHTML="0";
    }else{
      screen.innerHTML +=btn[i].innerHTML;
    }
  }
})
}