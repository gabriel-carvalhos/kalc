const screen = document.querySelector('.screen-content')
const btns = document.querySelectorAll('.buttons button:not(.result, .del, .clear)')
const result = document.querySelector('.buttons .result')
const del = document.querySelector('.buttons .del')
const clear = document.querySelector('.buttons .clear')
const operators = [...document.querySelectorAll('.buttons .symbols')].map(item => item.textContent)

btns.forEach(btn => {
    btn.addEventListener('click', () => {
        if (screen.textContent == '0' && !operators.includes(btn.textContent)) {
            screen.textContent = btn.textContent
            return
        }
        
        screen.textContent += btn.dataset.operator ? ` ${btn.dataset.operator} ` : btn.textContent
        
        console.log(screen.textContent.split(' '))

        const len = screen.textContent.split(' ').length
        if (len > 3) calc(btn.dataset.operator)
    })
})

result.addEventListener('click', () => {
    calc()
})

const calc = (operatorAdded) => {
    const [n1, operator, n2] = screen.textContent.split(' ')
    // verifica se a expressao esta completa
    if (n2) {
        let res
        switch (operator) {
            case '+':
                res = Number(n1) + Number(n2)
                break;
            case '-':
                res = n1 - n2
                break;
            case '*':
                res = n1 * n2
                break;
            case '/':
                res = n1 / n2
                break;
            default:
                res = 'erro'
                break;
        }
        screen.textContent = operatorAdded ? `${res} ${operatorAdded} ` : res
        console.log(n1, operator, n2, res, operatorAdded)
    }
}

del.addEventListener('click', () => {
    screen.textContent = screen.textContent.slice(0, -1)
    if (screen.textContent == '') {
        screen.textContent = '0'
    }
})

clear.addEventListener('click', () => {
    screen.textContent = '0'
})