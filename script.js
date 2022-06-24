// let botao = document.getElementById('btn')
// botao.addEventListener('click', () => {
//     let inputSexo = document.querySelector('.sexo')
//     let inputAltura = document.querySelector('.altura')
//     let resultado = document.getElementById('res')
//     let sexo = Number(inputSexo.value)
//     let altura = Number(inputAltura.value)

//     if(sexo === 1) {
//         pesoIdeal = (72.7 * altura) - 58
//         resultado.innerHTML = `<p>Seu peso ideal é ${pesoIdeal.toFixed(1)}kg</p>`
//     } else if(sexo === 0) {
//         pesoIdeal = (62.1 * altura) - 44.7
//         resultado.innerHTML = `<p>Seu peso ideal é ${pesoIdeal.toFixed(1)}kg</p>`
//     }
// })

let botao = document.getElementById('btn')
botao.addEventListener('click', () => {
    let inputSexo = document.getElementById('sexo')
    let sexo = Number(inputSexo.options[inputSexo.selectedIndex].value)
    let inputAltura = document.getElementById('altura')
    let altura = Number(inputAltura.value)
    let resultado = document.getElementById('res')

    if(altura === 0) {
        alert('Informe a sua altura')
    }
    if(sexo === 1 && altura !== 0) {
        pesoIdeal = (72.7 * altura) - 58
        resultado.style.textAlign = 'center'
        resultado.innerHTML = `<p>O seu peso ideal é <strong>${pesoIdeal.toFixed(1)}kg</strong></p>`
    } else if(sexo === 0 && altura !== 0) {
        pesoIdeal = (62.1 * altura) - 44.7
        resultado.style.textAlign = 'center'
        resultado.innerHTML = `<p>O seu peso ideal é <strong>${pesoIdeal.toFixed(1)}kg</strong></p>`
    }
})