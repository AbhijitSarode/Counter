let ans = 0

let inputValue

let reset = document.getElementById('reset')
let para = document.querySelector('p')
let input = document.querySelector('input')
let number1 = document.getElementById('incrementByOne')
let number2 = document.getElementById('decrementByOne')
let number5 = document.getElementById('incrementByFive')
let number10 = document.getElementById('decrementByTen')
let increment = document.getElementById('increment')
let decrement = document.getElementById('decrement')

// Get value from user
input.addEventListener('change', function () {
    inputValue = Number(input.value)

})

// Increment by user input
increment.addEventListener('click', function () {
    ans = ans + inputValue
    para.textContent = ans
})

// Decrement by user input
decrement.addEventListener('click', function () {
    ans = ans - inputValue
    para.textContent = ans
})

// Increment by 1
number1.addEventListener('click', function () {
    ans = ans + 1
    para.textContent = ans
})

// Decrement by 1
number2.addEventListener('click', function () {
    ans = ans - 1
    para.textContent = ans
})

// Increment by 5
number5.addEventListener('click', function () {
    ans = ans + 5
    para.textContent = ans
})

// Decrement by 10
number10.addEventListener('click', function () {
    ans = ans - 10
    para.textContent = ans
})


// Reset Button Functionality
reset.addEventListener('click', function () {
    ans = 0
    input.value = ""
    para.textContent ="0"
})