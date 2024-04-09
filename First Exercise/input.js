const input = document.getElementById('input')
const button = document.getElementById('button')
const label = document.getElementById('label')

button.addEventListener('click', () => {
    label.innerText = input.value
})