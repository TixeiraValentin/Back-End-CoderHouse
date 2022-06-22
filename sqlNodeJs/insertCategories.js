const {options} = require('./db/mysql')

const knex = require('knex')(options)

const categories = [
    { name: 'Bebidas'},
    { name: 'Snack'},
    { name: 'Cereal'},
    { name: 'Dulces'},
    { name: 'Pan'}
]

knex('categories')
    .insert(categories)
    .then(() => console.log(`Categorias insertadas`))
    .catch(err => console.log(`Error: ${err.message}`))
    .finally(() =>knex.destroy())