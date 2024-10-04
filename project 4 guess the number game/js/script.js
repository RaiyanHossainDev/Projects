// =======================  DOMS Start ======================
// ======= playerOne dom
let playerOne       = document.querySelector(".playerOne")
let playerOneInput  = document.querySelector(".playerOneInput")
// ======= playerTwo dom
let playerTwo       = document.querySelector('.playerTwo')
let playerTwoInput  = document.querySelector('.playerTwoInput')
let playerTwoChance = document.querySelector('.playerTwoChance')
// ======= playerThree dom
let playerThree       = document.querySelector('.playerThree')
let playerThreeInput  = document.querySelector('.playerThreeInput')
let playerThreeChance = document.querySelector('.playerThreeChance')
// ======= Other doms
let error = document.querySelector('.error')
let start = document.querySelector('.play')
let menu  = document.querySelector('.menu')
// ======= end dom
let end   = document.querySelector('.end')
let endText   = document.querySelector('.endText')
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
    if(playerTwoInput.value == ''){
        error.innerHTML = "Please give a number first" + '<i class="fa-solid fa-triangle-exclamation"></i>'
    }else{
        error.innerHTML = ''
        if(playerTwoInput.value == playerOneInput.value){
            playerTwoInput.value = ''
            endText.innerHTML = 'Player 2 Win' + '<img src="images/win.gif" alt="">'
            end.style         = 'display:block'
        }else{
            playerTwoChance.innerHTML++
            if(playerTwoChance.innerHTML > 5){
                playerTwo.style = 'display:none'
                playerThree.style = 'display:flex'
            }
        }
    }
}


