// Declaring global array which stores url of image of landing page
let landingPageImg=['landingPage1.jpg','landingPage2.jpg','landingPage3.jpg']
// Declaring variable which will keep track of the no. of times the up and down button clicked and increment and decrement accordingly
let btnClickedCount=0
let hamburgerClickCount=1

// Selecting Up and Down Button Of Landing Page 
let upBtn=document.querySelector("#up-btn")
let downBtn=document.querySelector("#down-btn")
let landingPageEl=document.querySelector("#landing-page-el")

// Selecting Hamburger Icon
let hamburgerEl=document.querySelector("#hamburger-el")
let hamburgerContentEl=document.querySelector("#hamburger-content-el")
let hamburgerIconContentEl=document.querySelector("#hamburger-icon-content-el")

// Adding Event Listner For Up-button On Landing Page
upBtn.addEventListener("click",function(){
    if(btnClickedCount === landingPageImg.length-1){
        btnClickedCount=0
        let Url=`url(${landingPageImg[btnClickedCount]})`
        landingPageEl.style.background=Url
        landingPageEl.style.backgroundSize="cover"
        landingPageEl.style.backgroundRepeat="no repeat"
        console.log(btnClickedCount)
    }else {
        btnClickedCount+=1
        let Url=`url(${landingPageImg[btnClickedCount]})`
        landingPageEl.style.background=Url
        landingPageEl.style.backgroundSize="cover"
        landingPageEl.style.backgroundRepeat="no repeat"
        console.log(btnClickedCount)
    }
})

// Adding Event Listner For Down-button On Landing Page
downBtn.addEventListener("click",function(){
    if(btnClickedCount === 0){
        btnClickedCount=landingPageImg.length - 1
        let Url=`url(${landingPageImg[btnClickedCount]})`
        landingPageEl.style.background=Url
        landingPageEl.style.backgroundSize="cover"
        landingPageEl.style.backgroundRepeat="no repeat"
        console.log(btnClickedCount)
    }else {
        btnClickedCount-=1
        let Url=`url(${landingPageImg[btnClickedCount]})`
        landingPageEl.style.background=Url
        landingPageEl.style.backgroundSize="cover"
        landingPageEl.style.backgroundRepeat="no repeat"
        console.log(btnClickedCount)
    }
})

// Adding Event Listner For Hamburger Icon

hamburgerEl.addEventListener("click",function(){
    if(hamburgerClickCount % 2 === 1){
        hamburgerContentEl.style.display="inline-block"
        hamburgerIconContentEl.style.background="rgb(144, 153, 136)"
        hamburgerClickCount++
    }else{
        hamburgerContentEl.style.display="none"
        hamburgerIconContentEl.style.background="transparent"
        hamburgerClickCount--
    }
})

