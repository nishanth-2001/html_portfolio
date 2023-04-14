const button = document.querySelector('#click')
const h1 = document.querySelector('h1')
const input = document.querySelector('#name')

if (button) {
    button.addEventListener('click', function() {
        h1.innerText = Math.random()
    })
}

if (input) {
    input.addEventListener('change', function(event) {
        const value = event?.target?.value
        const updatedValue = value?.toUpperCase();
        event.target.value = updatedValue
    })
}