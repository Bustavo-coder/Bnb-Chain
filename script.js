"use strict"

const togglea = document.querySelector(".toggle")
const navigatonbox = document.querySelector(".header-right")
const slides = document.querySelectorAll(".box-1")
const tele = document.querySelector(".dis")
const git = document.querySelector(".git")
const gram = document.querySelector(".gram")
const tube = document.querySelector(".tube")
const dat = document.querySelector(".dat")
const bos = document.querySelectorAll(".bos")
const bos1 = document.querySelector(".bos-1")
const bos2 = document.querySelector(".bos-2")
const bos3 = document.querySelector(".bos-3")
const bos4 = document.querySelector(".bos-4")
const bos5 = document.querySelector(".bos-5")
const bactotop = document.querySelector(".btn-bactotop")

const showNavbar = () =>{
    navigatonbox.classList.toggle("hidden")
    console.log("welcome")
}

togglea.addEventListener("click",showNavbar)

let slideindex = 0

function hideSlide () {
    for(var i = 0;  i < slides.length; i++){
        slides[i].style.display="none"
    }
}
const showSlides = () =>{
hideSlide()

slideindex++
if(slideindex > slides.length){
    slideindex = 1
}
slides[slideindex - 1].style.display="block"
setTimeout(showSlides, 3000)
}

window.addEventListener("resize", function(){
if(this.innerWidth <  900){
    showSlides()
}
})


const eventLst = (text, content, event,baContent) =>{
    event.addEventListener("mouseover", function(){
    text.textContent = content
    })

    event.addEventListener("mouseout",function(){
        text.textContent=baContent
    })
}

bos1.addEventListener("mouseover" , function(){
    eventLst(tele,"Get Involved",bos1,"Discord")
    })


    
    bos2.addEventListener("mouseover" , function(){
        eventLst(dat,"Read The Latest",bos2,"Twitter")
        })

        bos3.addEventListener("mouseover" , function(){
            eventLst(tube,"Watch Videos",bos3,"Youtube")
            })


            bos4.addEventListener("mouseover" , function(){
                eventLst(gram,"Join Discussion",bos4,"Telegram")
                })
    
                bos5.addEventListener("mouseover" , function(){
                    eventLst(git,"Build With Us",bos5,"Github")
                    })
        
                
            
        
        

// const shoText = (txt,content) =>{
//     txt.textContent = content
// }
// bos1.addEventListener("mouseover", function(){
//     shoText(tele, "Get Involved")
// })
// bos1.addEventListener("mouseout" ,function(){
//     shoText(tele, "Get Discord")

// })

// bos2.addEventListener("mouseover", function(){
//     shoText(dat, "Read The Latest")
// })
// bos2.addEventListener("mouseout" ,function(){
//     shoText(dat, "Twitter")

// })
// bos3.addEventListener("mouseover", function(){
//     shoText(tube, "Watch Videos")
// })
// bos3.addEventListener("mouseout" ,function(){
//     shoText(tube, "Youtube")


// })
// bos4.addEventListener("mouseover", function(){
//     shoText(gram, "Join Discussion")
// })
// bos4.addEventListener("mouseout" ,function(){
//     shoText(gram, "Telegram")

// })
//  bos5.addEventListener("mouseover", function(){
//     shoText(git, "Build With Us")
// })
// bos5.addEventListener("mouseout" ,function(){
//     shoText(git, "Github")

// })

bactotop.addEventListener("click", function(){
    window.scrollTo({
        top:0,
        behavior:"smooth"
    })
})






