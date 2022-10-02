import chalk from 'chalk';

import {suma, multiplica} from './modulos/controller.js'

const sum = suma(8,9)


const mult = multiplica(5,6)
console.log(mult)

function multiplicaTotal() {
    let a = suma(1,2)
    let b = suma(4,5)
    return a * b
}

console.log(multiplicaTotal)


console.log(chalk.green(sum));