const nuevoset = new Set([
    {mama: "maria"},
    {papa: "juan"},
    {hermano: "yvan"},
    {hermana1: "maria gabriela"},
    {yo: "daniela"},
    {hermana3: "eliyohana"},
])


const miSet = new Set (nuevoset)

miSet.add({yo: "daniela"})
console.log(miSet)

miSet.add({tecnologia: "Javascript"})