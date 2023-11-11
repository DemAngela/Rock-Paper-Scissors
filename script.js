const buttons = document.querySelectorAll('input')
const imgComp = document.querySelector('#compChoice')
const imgUser = document.querySelector('#youChoice')
const score = document.querySelector('.scoreText')
const res = document.querySelector('.resFait')
const reset = document.querySelector('#NewGame')

let userScore = 0
let compScore = 0

const choice = ['rock', 'scissors', 'paper']



buttons.forEach((input) => {
    input.addEventListener('click', (e) => {
        const compChoice = choice[Math.floor(Math.random()*3)]
        const userChoice = e.target.value
        console.log(userChoice)
        console.log(compChoice)
        imgUser.src = `./assets/img(${choice.indexOf(userChoice) + 1}).jpg`
        imgComp.src = `./assets/img(${choice.indexOf(compChoice) + 1}).jpg`

        options(userChoice, compChoice)

    })
})

function options(userChoice, compChoice) {
    if (userChoice === compChoice) {
        displayResult('game draw', 'draw')
    } else if ((userChoice === 'stone' && compChoice === 'scissors') ||
        (userChoice === 'scissors' && compChoice === 'paper') ||
        (userChoice === 'paper' && compChoice === 'stone')) {
        userScore++
        displayResult('you won', 'win')
    } else {
        compScore++
        displayResult('you lose', 'lose')

    }

    score.innerText = ` ${compScore} /  ${userScore}`
}

function displayResult(resultText, resultClass) {
    res.innerText = resultText;
    res.classList.remove('win', 'lose');

    if (resultClass) {
        res.classList.add(resultClass);
    }
}

reset.addEventListener('click', () => {
        userScore = 0
        compScore = 0

    imgComp.src = ''
    imgUser.src = ''

    score.innerText = ` ${compScore} /  ${userScore}`
    res.innerText = ''
})





