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
//logic for showing the button when user hovers over the card

let cards =document.querySelectorAll('.card');
cards.forEach(card=>{
    let button=card.querySelector('#viewmore');

    card.addEventListener('mouseover',()=>{
        console.log("hovered over a card");
        button.classList.add('show');
    });
    card.addEventListener('mouseout',()=>{
        button.classList.remove('show');
    });
})

//logic for sending the email after hitting submit

    
function submitEmail(){
   
    const name=document.getElementById('name').value;
    const email =document.getElementById('email').value;
    const message =document.getElementById('message').value;
    String(name);
    String(email);
    String(message);

const to="dmkkerl@gmail.com";
const subject=`New message from ${name}`;
const body=`${message}`;
console.log(name)
console.log(subject)
console.log(email);
    if((name ==='')||(email==='')||(message==='')){
     
        document.getElementById('form').classList.add('errorborder');
        document.getElementById('errormessage').classList.add('error');
   
    }
    else{
        
         window.open("https://mail.google.com/mail/?view=cm&fs=1" + `&to=${encodeURIComponent(to)}` +`&su=${encodeURIComponent(subject)}` +
  `&body=${encodeURIComponent(body)}`);
    }
   
}

