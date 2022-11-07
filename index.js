
cards=[]
let sum = 0
let hasBlackJack = false
let isalive=true
let message=""

let messageEl=document.getElementById("message-el")


   
function getRandomeCard(){
let num=Math.floor(Math.random()*13+1)
if (num===1){
    return 11
}

else if (num===11 || num===12 ||num===13){
    return 10
}
else{
    return num
}

}    

let count=0
    
    
function start(){
    if(count===0){
    let firstCard =getRandomeCard()
    let secondCard = getRandomeCard()
    cards=[firstCard,secondCard]
    sum=cards[0]+cards[1]
    renderGame()}
    count=1

}


function renderGame(){
    let cardsdom="Cards :"
    for (let index = 0; index < cards.length; index++) {
        cardsdom+=cards[index]+" " 
    }

    document.getElementById("card-el").textContent=cardsdom
    document.getElementById("sum-el").textContent="Sum : "+sum
    if (sum <= 20) {
        
        message="Do you want to draw a new card? 🙂"
       
    } else if (sum === 21) {
        
        message="Wohoo! You've got Blackjack! 🥳"
        hasBlackJack=true
       
        
    } else {
        
        message="You're out of the game! 😭"
        isalive=false
       
    }
    messageEl.textContent=message
   
}


function newcard(){
    if(isalive===true && hasBlackJack===false){
    let card=getRandomeCard();
    sum+=card;
    cards.push(card)
    renderGame()}
}

