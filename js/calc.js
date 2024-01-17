const screen = document.querySelector('.screen-content')
const numbers = document.querySelectorAll('.buttons button:not(.result, .del, .clear, .symbols)')
const operators = document.querySelectorAll('[data-operator]')
const result = document.querySelector('.buttons .result')
const del = document.querySelector('.buttons .del')
const clear = document.querySelector('.buttons .clear')

numbers.forEach(number => {
    number.addEventListener('click', () => {
        if (screen.textContent == '0') {
            screen.textContent = number.textContent
            return
        }
        screen.textContent += number.textContent
    })
})

operators.forEach(operator => {
    operator.addEventListener('click', () => {
        if (screen.textContent.at(-1) == ' ') {
            screen.textContent = screen.textContent.slice(0, -3)
        }
        
        screen.textContent += ` ${operator.textContent} `

        const len = screen.textContent.split(' ').length
        if (len > 3) calc(operator.textContent)
    })
})

result.addEventListener('click', () => {
    calc()
})

const calc = (operatorAdded) => {
    const [n1, operator, n2] = screen.textContent.split(' ')

    if (n2) {
        let res
        switch (operator) {
            case '+':
                res = Number(n1) + Number(n2)
                break;
            case '-':
                res = n1 - n2
                break;
            case '×':
                res = n1 * n2
                break;
            case '÷':
                res = Number((n1 / n2).toFixed(2))
                break;
            default:
                res = 'erro'
                break;
        }
        screen.textContent = operatorAdded ? `${res} ${operatorAdded} ` : res
    }
}

del.addEventListener('click', () => {
    const delCount = screen.textContent.at(-1) == ' ' ? -3 : -1
    screen.textContent = screen.textContent.slice(0, delCount)
    if (screen.textContent == '') {
        screen.textContent = '0'
    }
})

clear.addEventListener('click', () => {
    screen.textContent = '0'
})