
const bodyEl=document.querySelector('body');

const imageContainerEl=document.querySelector('.image-container');

const btnEl=document.querySelector('.btn');

let x=0;
let timer;
btnEl.addEventListener('click',(event)=>{
    clearTimeout(timer)
    event.preventDefault();
    x=x+45;
    updateGallary();

});

function updateGallary(){

imageContainerEl.style.transform=` perspective(1000px)  rotateY(${x}deg)`;
timer=setTimeout(()=>{
    x=x-45;
    clearTimeout(timer);
    updateGallary();

},3000)
}

updateGallary();


/* 
bodyEl.addEventListener('mouseover',()=>{
   
    updateGallary();
}) */