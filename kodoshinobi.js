// Declaring global array which stores url of image of landing page
let landingPageImg=['landingPage1.jpg','landingPage2.jpg','landingPage3.jpg']
// Declaring variable which will keep track of the no. of times the up and down button clicked and increment and decrement accordingly
let btnClickedCount=0

// Selecting Up and Down Button Of Landing Page 
let upBtn=document.querySelector("#up-btn")
let downBtn=document.querySelector("#down-btn")
let landingPageEl=document.querySelector("#landing-page-el")

// Adding Event Listner For Up-button On Landing Page
upBtn.addEventListener("click",function(){
    if(btnClickedCount === landingPageImg.length-1){
        btnClickedCount=0
        let str=landingPageImg[btnClickedCount]
        landingPageEl.style.background="url(str)"
        console.log(btnClickedCount)
    }else {
        btnClickedCount+=1
        let str=landingPageImg[btnClickedCount]
        landingPageEl.style.background="url(str)"
        console.log(btnClickedCount)
    }
})

// Adding Event Listner For Down-button On Landing Page
downBtn.addEventListener("click",function(){
    if(btnClickedCount === 0){
        btnClickedCount=landingPageImg.length - 1
        let str=landingPageImg[btnClickedCount]
        landingPageEl.style.background="url(str)"
        console.log(btnClickedCount)
    }else {
        btnClickedCount-=1
        let str=landingPageImg[btnClickedCount]
        landingPageEl.style.background="url(str)"
        console.log(btnClickedCount)
    }
})

