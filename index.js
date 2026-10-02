const menu= document.getElementById('menu');
const nav=document.querySelector('.links');


let isOpen=false;
function openMenu(){
menu.classList.toggle('bx-x');
    nav.classList.add('active');
    isOpen=true;
}
function closeMenu(){
    menu.classList.remove('bx-x');
nav.classList.remove('active');
isOpen=false;
}
menu.onclick=()=>{
    if(isOpen){
        closeMenu();
    }
    else{
       openMenu();
    }
    
}
