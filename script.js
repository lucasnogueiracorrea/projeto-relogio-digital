const hora = window.document.getElementById('n_horas')
const minutos = window.document.getElementById('n_minutos')
const segundos = window.document.getElementById('n_segundos')


const relogio = setInterval(function time(){
    let data = new Date()
    let horaagora = data.getHours()
    let minagora = data.getMinutes()
    let segagora = data.getSeconds()

    hora.innerHTML = `${horaagora}`
    minutos.innerHTML = `${minagora}`
    segundos.innerHTML = `${segagora}`
})