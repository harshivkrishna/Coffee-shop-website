// NAVBAR SCROLLING COLOR

window.onscroll=()=>{
    if(scrollY>233){
        document.querySelector('.header-section').style.backgroundColor='#1b1514e7';
    }
    else if(screenY===0){
        document.querySelector('.header-section').style.backgroundColor='transparent';
    }   
}

// IMP COUNTER

let value=document.querySelectorAll('.section-5__counter-number')
let interval=5000;
value.forEach((valueDisplay)=>{
    let startValue=0;
    let endValue=parseInt(valueDisplay.getAttribute('data-val'));
    let duration=Math.floor(interval/endValue);
    let counter=setInterval(function(){
        startValue+=1;
        valueDisplay.innerHTML=`${startValue}<span class="plus-symbol">+</span>`;
        if(startValue==endValue){
            clearInterval(counter);
        }
    },duration);
})

