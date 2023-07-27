const num = document.querySelector('#num')
const max = document.querySelector('#max')
const multform = document.querySelector('.form')

const resulShown = document.querySelector('.resul')

const mult = (num, max) => {
  resulShown.innerHTML = ''

  for (let i = 1; i <= max; i++) {
    const resul = num * i
    resulShown.innerHTML += `${num} x ${i} = ${resul}<br>`
  }
  
}

multform.addEventListener('submit', (e) => {
  e.preventDefault()

  
  const multNum = Number(num.value)
  const multMax = Number(max.value)

  if (!multNum || !multMax) {
    alert('Número inválido')
    return
  }
  mult(multNum, multMax)
})