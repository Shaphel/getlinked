const hamburger= document.querySelector(".hamburger");
const navMenu= document.querySelector(".nav-menu");

hamburger.addEventListener("click", () =>{
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

var hoursEl= document.getElementById('hours')
var minutesEl= document.getElementById('minutes')
var secondsEl= document.getElementById('seconds')

function countdownTimer(){
    const countDownDate= new Date('09/23/2023').getTime()

    //convert to milliseconds

    const second= 1000
    const minute= second * 60
    const hour= minute * 60

    //Calculate every second
    const interval= setInterval(() => {
         //Get current date
    const now= new Date().getTime()
    const distance= countDownDate - now
    
    hoursEl.innerText= formatNumber(Math.floor(distance / hour))
    minutesEl.innerText= formatNumber(Math.floor((distance % hour) / minute))
    secondsEl.innerText= formatNumber(Math.floor((distance % minute) / second))
    }, 1000);

   
}

function formatNumber(number){
    if(number < 10){
        return now
    }
    return number
}
countdownTimer()

// const plus= document.querySelector(".plus");
// const answer= document.querySelector(".answer");
// const purpleline= document.querySelector(".purpleline")

// plus.addEventListener("click", () =>{
//     plus.classList.toggle("active");
//     answer.classList.toggle("active")
//     purpleline.classList.toggle("active")
// })

const appearOptions= {
    threshold: 0,
    rootMargin: "0px 0px -200px 0px"
};

const faders= document.querySelectorAll('.fade-in');
const sliders= document.querySelectorAll('.slide-right,.slide-left,.slide-up');
const appearOnScroll= new IntersectionObserver(function(
    entries, appearOnScroll){
        entries.forEach(entry => {
            if (!entry.isIntersecting){
                return;
            }else{
                entry.target.classList.add('appear');
                appearOnScroll.unobserve(entry.target);
            }
        })
    },
    appearOptions);

    faders.forEach(fader =>{
        appearOnScroll.observe(fader);
    });

    sliders.forEach(slider =>{
        appearOnScroll.observe(slider);
    });

