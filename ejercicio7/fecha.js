const hoy = new Date
console.log(hoy)

const cumple = new Date("12 marzo 1997")
console.log(cumple)

const compara = console.log(hoy.getTime() > cumple.getTime())

const dia = cumple.getDate()
console.log(dia)

const mes = cumple.getMonth()
console.log(mes + 1)

const anyo = cumple.getFullYear()
console.log(anyo)