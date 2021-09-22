// const numbs = [23,54,3543,545,34,35,32];

// const reducer = ( previous,current ) => previous + current;
// numbs.reduce( reducer,0)

const elements = [
    {id: 1, name: 'Alta', price: 25},
    {id: 2, name: 'Fita', price: 25},
    {id: 3, name: 'Nail Polish', price: 25}
]
// same as reduce 
let total = 0;
for ( const element of elements){
    total =  total + element.price;
}
// Reducer same as for of 
const elementReducer = ( previous, current) => previous + current.price;
const elementTotal = elements.reduce(elementReducer, 0)