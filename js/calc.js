const screen = document.querySelector('.screen-content')
const btns = document.querySelectorAll('.buttons button:not(.result, .del, .clear)')
const result = document.querySelector('.buttons .result')
const del = document.querySelector('.buttons .del')
const clear = document.querySelector('.buttons .clear')
const operators = [...document.querySelectorAll('.buttons .symbols')].map(item => item.textContent)

btns.forEach(btn => {
    btn.addEventListener('click', () => {
        if (screen.textContent == '0') {
            if (operators.includes(btn.textContent)) {
                return
            }
            screen.textContent = btn.textContent
            return
        } 
        screen.textContent += btn.dataset.operator || btn.textContent
    })
})

del.addEventListener('click', () => {
    screen.textContent = screen.textContent.slice(0, -1)
    if (screen.textContent == '') {
        screen.textContent = '0'
    }
})

clear.addEventListener('click', () => {
    screen.textContent = '0'
})

result.addEventListener('click', () => {
    try {
        screen.textContent = eval(screen.textContent)
    } catch {
        screen.textContent = '0'
    }
})