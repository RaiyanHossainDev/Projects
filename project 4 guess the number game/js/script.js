// =======================  DOMS Start ======================
// ======= playerOne dom
let playerOne       = document.querySelector(".playerOne")
let playerOneInput  = document.querySelector(".playerOneInput")
let playerOneButton = document.querySelector(".playerOneButton")
// ======= playerTwo dom
let playerTwo       = document.querySelector('.playerTwo')
let playerTwoInput  = document.querySelector('.playerTwo')
let playerTwoButton = document.querySelector('.playerTwo')
// ======= playerThree dom
let playerThree       = document.querySelector('.playerThree')
let playerThreeInput  = document.querySelector('.playerThreeInput')
let playerThreeButton = document.querySelector('.playerThreeButton')
// ======= Other doms
let error = document.querySelector('.error')
let start = document.querySelector('.play')
let menu  = document.querySelector('.menu')
// =======================  DOMS End ======================

// ======================= Function starts ================
// ======= start function
start.addEventListener('click' , ()=>{
    menu.style      = "display:none"
    playerOne.style = "display:flex"
})
// ======= playerOne Function
let playerOneClick = ()=>{
    if(playerOneInput.value == ''){
        error.innerHTML = "You didn't give a number yet" + '<i class="fa-solid fa-triangle-exclamation"></i>'
    }else{
        error.innerHTML = '';
        if(1 > playerOneInput.value || playerOneInput.value  > 15){
            error.innerHTML = "You can't give number bigger then 15 and smaller then 1" + '<i class="fa-solid fa-triangle-exclamation"></i>'
        }else{
            playerOne.style = 'display:none';
            playerTwo.style = 'display:flex';
        }
    }
}
let playerOnekey = (key)=>{
    if(key.key == "Enter"){
        playerOneClick()
    }
}
// ======= playerTwo function
let playerTwoClick = ()=>{
    
}
