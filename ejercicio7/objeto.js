const obj = {
    nombre: "Daniela",
    apellido: "Avila",
    edad: 25,
    altura: 1.55,
    esDesarrollador: true
}

const edad = console.log(obj.edad)

/*- Una lista que contenga el objeto con tus 
datos personales y un nuevo objeto con los datos 
personales de tus dos mejores amig@s*/
const dpamigo1 = {
    nombre: "Jefferson",
    apellido: "Magallanes",
    edad: 25,
    esDesarrollador: true
}

const dpamigo2 = {
    nombre: "Angie",
    apellido: "Quintero", 
    edad: 23,
    esDesarrollador: false
}

const lista = [{...obj}, {...dpamigo1}, {...dpamigo2}]
console.log(lista)

lista.sort((a,b) => a.edad - b.edad)
console.log(lista)