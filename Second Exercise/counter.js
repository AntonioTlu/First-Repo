const increase = document.getElementById('increase')
const decrease = document.getElementById('decrease')
const reset = document.getElementById('reset')
const counter = document.getElementById('counter')

increase.addEventListener('click', () => {
    counter.innerText = parseInt(counter.innerText) + 1
})

decrease.addEventListener('click', () => { 
    counter.innerText = parseInt(counter.innerText) - 1
})

reset.addEventListener('click', () => {
    counter.innerText = 0
})