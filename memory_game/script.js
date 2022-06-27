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
let choosenCard = []


const createGrid = () => {
    for (let i = 0; i < cardsArray.length; i++) {
        const card = document.createElement('img')
        card.setAttribute('src', "images/back-side.jpg")
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        grid.appendChild(card)
    }
}

//prova
// function prova() {
//     let tutteimg = document.querySelectorAll('img')
//     console.log(tutteimg[7])
// }


// remember arrow function dosen't allow this 
function flipCard(){
    let cardId = this.getAttribute('data-id')
    this.setAttribute('src', cardsArray[cardId].img)
    choosenCard.push(cardId)
    if(choosenCard.length == 2) {
        // prova()
    }
}


createGrid()

