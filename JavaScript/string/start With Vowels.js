const arr=['abhiram','midlaj','vyyshK','annesh']

const vowals = ['a','e','e','i','o','u']

const data = arr.filter(num => vowals.includes(num[0].toLowerCase()))
console.log(data)