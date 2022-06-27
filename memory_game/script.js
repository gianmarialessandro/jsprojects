const cardsArray = [
    {
        name: "akira",
        img: "images/akira.jpg"
    },
    {
        name: "arale",
        img: "images/arale.jpg"
    },
    {
        name: "batman",
        img: "images/batman.jpg"
    },
    {
        name: "muten",
        img: "images/muten.jpg"
    },
    {
        name: "pollon",
        img: "images/pollon.jpg"
    },
    {
        name: "ranma",
        img: "images/ranma.jpg"
    },
    {
        name: "akira",
        img: "images/akira.jpg"
    },
    {
        name: "arale",
        img: "images/arale.jpg"
    },
    {
        name: "batman",
        img: "images/batman.jpg"
    },
    {
        name: "muten",
        img: "images/muten.jpg"
    },
    {
        name: "pollon",
        img: "images/pollon.jpg"
    },
    {
        name: "ranma",
        img: "images/ranma.jpg"
    }
]

// randomise the sequence 

cardsArray.sort(() => 0.5 - Math.random())

const grid = document.querySelector('.grid')
const result = document.querySelector('#result')
let choosenCard = []
let matchedCards = 0


const createGrid = () => {
    for (let i = 0; i < cardsArray.length; i++) {
        const card = document.createElement('img')
        card.setAttribute('src', "images/back-side.jpg")
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        grid.appendChild(card)
    }
}

function refreshPage() {
    document.location.reload(true)
}

// funzione per comparare le carte
function compareCards() {
    let gridCards = document.querySelectorAll('img')

    let firstCard = choosenCard[0]
    let secondCard = choosenCard[1]

    // console.log(firstCard, secondCard)

    if(firstCard == secondCard) {
        alert("hai scelto la stessa carta")
        gridCards[firstCard].setAttribute('src', "images/back-side.jpg")
    }else if(cardsArray[firstCard].name === cardsArray[secondCard].name){
        // alert("hai trovato due carte uguali")
        gridCards[firstCard].setAttribute('src', "images/white.jpg")
        gridCards[secondCard].setAttribute('src', "images/white.jpg")

        gridCards[firstCard].removeEventListener('click', flipCard)
        gridCards[secondCard].removeEventListener('click', flipCard)
        matchedCards += 1
        
        
    } else {
        gridCards[firstCard].setAttribute('src', "images/back-side.jpg")
        gridCards[secondCard].setAttribute('src', "images/back-side.jpg")
    }
    choosenCard = []
    if(matchedCards == (cardsArray.length / 2)) {
        result.innerHTML = `${matchedCards}<br/>Ottimo! <br/>Hai torvato tutte le carte`
        const refresh = document.createElement('input')
        refresh.setAttribute('type', 'button')
        refresh.setAttribute('value', 'Restart Game')
        refresh.addEventListener('click', refreshPage)
        result.appendChild(refresh)
    } else result.innerHTML = matchedCards

}


// funzione per carte selezionate
// remember arrow function dosen't allow this 
function flipCard(){
    let cardId = this.getAttribute('data-id')
    this.setAttribute('src', cardsArray[cardId].img)
    // console.log(cardsGrid[cardId])
    // console.log(cardsArray[cardId])
    choosenCard.push(cardId)
    if(choosenCard.length == 2) {
        setTimeout(compareCards, 500)
    } 
}


createGrid()

