let compras = ["uvas", "leche", "queso", "pollo", "lechuga", "papas"];

compras.push("Aceite de Girasol")
console.log(compras)

let peliculasFavoritas = [
    { 
    titulo : "Harry Potter y la piedra filosofal",
     director : "Chris Columbus",
     fecha : 2001 },
    {
    titulo : "Interestelar",
    director : "Christopher Nola",
    fecha : 2014
    },
    {
      titulo : "Up", 
      director : "Pete Docter",
      fecha : 2009
    }
  ]
  
const filtroPeliculas = peliculasFavoritas.filter(pel => pel.fecha > 2010)
console.log(filtroPeliculas)  

const listaPeliculas = peliculasFavoritas.map(({titulo}, indice) => {
    return `${indice +1 } ${titulo}`
})
console.log(listaPeliculas)  

const listaDirectores = peliculasFavoritas.map(({director}, indice) =>{
    return `${indice + 1} ${director}`
})
console.log(listaDirectores)

const nuevaLista = [...listaDirectores] + [...listaPeliculas]
console.log(nuevaLista)