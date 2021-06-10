document.addEventListener('DOMContentLoaded', () => {

    //card options
    const cardArray = [{ //create an array of cards
        name: 'azalee',
        img: 'images/azalee.jpg' //the relative path to each image
    },
    {
        name: 'bujor',
        img: 'images/bujor.jpg'
    },
    {
        name: 'hortensii',
        img: 'images/hortensii.jpg'
    },
    {
        name: 'liliac',
        img: 'images/liliac.jpg'
    },
    {
        name: 'trandafir',
        img: 'images/trandafir.jpg'
    },
    {
        name: 'zmeura',
        img: 'images/zmeura.jpg'
    },
    {
        name: 'azalee',
        img: 'images/azalee.jpg'
    },
    {
        name: 'bujor',
        img: 'images/bujor.jpg'
    },
    {
        name: 'hortensii',
        img: 'images/hortensii.jpg'
    },
    {
        name: 'liliac',
        img: 'images/liliac.jpg'
    },
    {
        name: 'trandafir',
        img: 'images/trandafir.jpg'
    },
    {
        name: 'zmeura',
        img: 'images/zmeura.jpg'
    }
]

cardArray.sort(() => 0.5 - Math.random())//to refresh the game with new card positions, we use sort and math.random

const grid = document.querySelector('.grid') //with querySelector, it picks the element with the class 'grid' and define it as 'grid' for the javascript code
const resultDisplay = document.querySelector('#result')
var cardsChosen = []
var cardsChosenId = []
var cardsWon = []

//create game board
function createBoard(){
    for(let i=0; i< cardArray.length; i++){ //loops over cardArray
        const card = document.createElement('img') //creates an image element for each card; the element will be called card
        card.setAttribute('src', 'images/blank.jpg')//sets an attribute for each card, linking it to the img blank.img
        card.setAttribute('data-id', i)//gives each card a data-id and loops through each one of them, to give them an id that goes from 0 to 11
        card.addEventListener('click', flipcard) //adds an eventListener, to listen out if the cards have been clicked on; flipcard function
        grid.appendChild(card) //the cards(images) will be put in the grid using appendChild
    }
}

//check for matches
function checkForMatch(){
    const  cards = document.querySelectorAll('img')//picks up all images created in the first function
    const optionOneId = cardsChosenId[0]//first value of the array is assigned to const optionOneId
    const optionTwoId = cardsChosenId[1]
    
    if(optionOneId === optionTwoId) {
        alert('You have clicked the same image!')
        cards[optionOneId].setAttribute('src', 'images/blank.jpg')
        cards[optionTwoId].setAttribute('src', 'images/blank.jpg')
      }
    else if (cardsChosen[0] === cardsChosen[1]){
        alert('You found a match!')
        cards[optionOneId].setAttribute('src', 'images/white.jpg')
        cards[optionTwoId].setAttribute('src', 'images/white.jpg')
        cardsWon.push(cardsChosen)//pushes the chosen cards into cardsWon array
    } else {//if the  cards don't match, flips them back to blank.jpg
        cards[optionOneId].setAttribute('src', 'images/blank.jpg')
        cards[optionTwoId].setAttribute('src', 'images/blank.jpg')
        alert('Sorry, try again!')
    }

    cardsChosen = []//clears the cardsChosen array, to be ready to start flipping again
    cardsChosenId = []//same

    resultDisplay.textContent = cardsWon.length//display the result to the screen, picks the id=result from html,span - using textContent
    if(cardsWon.length === cardArray.length/2){
        resultDisplay.textContent = 'Congratulations! You found them all!'
    }
}

//flip card
function flipcard(){
    let cardId = this.getAttribute('data-id')//gets the data-id attribute created above
    cardsChosen.push(cardArray[cardId].name)//pushes the cards from the cardArray based on the cardId
    cardsChosenId.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)//adds an image to the picked square based on the card id it holds
    if(cardsChosen.length === 2){ //to put only 2 cards in cardsChosen array
        setTimeout(checkForMatch, 500)//gives 500 ms buffer time
    }
}

createBoard()
})