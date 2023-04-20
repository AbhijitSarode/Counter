let ans = 0

let reset = document.getElementById('reset')
let para = document.querySelector('p')

// Perform defined button operations
function calculate(number) {
    ans += number
    para.textContent = ans
}

// Perform operation based on user input
function calculateValue(number = 1) {
    let val = Number(document.querySelector('input').value)
    val *= number
    ans += val
    para.textContent = ans
}

// Reset Button Functionality
reset.addEventListener('click', function () {
    ans = 0
    input.value = ""
    para.textContent ="0"
})