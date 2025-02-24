// const express = require('express')
// const app = express()
// const path = require('path')

// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'form.html'))
// })

// app.get('/home', (req, res) => {
//     const {name, email} = req.query
//     res.send(Your name: ${name} and your email: ${email})
// })


// app.listen(2009, () => {
//     console.log('Server started on port 2009');
// })


// const http = require('http')
// const fs = require('fs')

// http.createServer((req, res) => {
//     fs.readFile('demo.txt', 'utf-8', (err, data) => {
//         if (err) {
//             res.write('Some error happened!')
//             res.end()
//         } else {
//             res.write(data)
//             res.end()
//         }
//     })
// }).listen(2002, () => {
//     console.log('Server started!');
// })

// const content = 'Heyyyyyy!'
// fs.writeFile('demo.txt', content, (err) => {
//     if (err) {
//         console.log('Some kind of error happened!');
//     } else {
//         console.log('File created successfully!');
//     }
// })

// fs.appendFile('demo.txt', 'Hloo this added', (err) => {
//     if (err) {
//         console.log('error');
//     } else {
//         console.log('File created successfully!');
//     }
// })

// fs.unlink('hey.txt', (err) => {
//     if (err) {
//         console.log('Error happened while deleting the file');
//     } else {
//         console.log('Sucessfully deleted!');
//     }
// })

// const express = require('express')
// const app = express()

// app.use((req, res, next) => {
//     if (req.method == 'GET') {
//         next()
//     } else {
        
//     }
// })

// app.get('/', (req, res) => {
//     res.send('Hellooo Guysssss......')
// })

// app.listen(100, () => {
//     console.log('Server started on 100');
// })

// const express = require('express')
// const app = express()

// function logMiddleware(req, res, next) {
//     if (${req.method} == 'GET') {
//         res.send('Access denied for GET method')
//     } else {
//         next()
//     }
// }

// app.use(logMiddleware)

// const express = require('express')
// const app = express()

// app.get('/',(req, res) => {
//     res.send('Helloooo World!')
// })

// app.listen(1011, () => {
//     console.log('Server started on port 1011');
// })


// try catch

// function division(a, b) {
//     try {
//         if (b == 0) {
//             throw new Error('Cannot divide by zero!')
//         }
//         return a / b
//     } catch(err) {
//         console.log('Error happened', err.message);
//     }
// }

// console.log(division(10, 0));


// process.nextTick()

// console.log('Start')

// process.nextTick((name) => {
//     console.log(Hello ${name});
// }, 'Ishaquel Aman')

// setTimeout(() => {
//     console.log('Timeout');
// })

// process.nextTick(() => {
//     console.log('Helloooo'); 
// })

// console.log('End');



// const express = require('express')
// const app = express()



// app.get('/', (req, res) => {
//     throw new Error('Something went wrong here!')
//     res.send('Helloooooo')
// })

// app.get('/home', (req, res)=> {
//     res.send("It's redirected from error page!")
// })

// app.use((err, req, res, next) => {
//     if(err) {
//         res.redirect('/home')
//     }
// })

// app.listen(300, () => {
//     console.log('Server started!');
// })



// const eventEmitter = require('events')
// const emitter = new eventEmitter()


// emitter.on('click', () => {
//     console.log('Button Clicked!');
// })

// emitter.emit('click')

// class and object

// class person {
//     constructor(name) {
//         console.log(Heyy ${name}!);
//     }
//     greet(name) {
//         console.log(Hellooo ${name}!);
//     }
// }

// class person2 extends person {
//     greet(name) {
//         console.log(This is the over rided name: ${name});
//     }
// }

// const person3 = new person2()
// person3.greet('Ishaq')


// const buffer = Buffer.alloc(20)
// console.log(buffer);

// const fs = require('fs')

// fs.readFile('hello.txt', 'utf-8', (err, data) => {
//     if (err) {
//         console.log('error while reading the file!');  
//     } else {
//         console.log(data);
//     }
// })

// fs.writeFile('hey.txt', 'new created filesss', (err) => {
//     if (err) {
//         console.log('error while writinmg or creating a file!');
//     } else {
//         console.log('Sucessfully file created!');  
//     }
// })


// fs.appendFile('hey.txt', '   new data', (err) => {
//     if (err) {
//         console.log('error while append a file');
//     } else{
//         console.log('Data successfully added');  
//     }
// })

// const fs = require('fs')

// fs.readFile('hey.txt', 'utf-8', (err, data) => {
//     if (err) {
//         console.log('error');
//     } else {
//         console.log(data);
//     }
// })

// console.log('Helllooooo');

// const fs = require('fs')


// const read = fs.createReadStream('hey.txt', 'utf-8')
// const write = fs.createWriteStream('hello.txt', 'utf-8')

// read.pipe(write)


// Promise.resolve().then(() => console.log('promsie'));

// process.nextTick(() => {
//     console.log('tick!');
// })

// generator function

// function * even(n) {
//     yield n
//     yield n + 10
// }

// const generator = even(20)
// console.log(generator.next().value);
// console.log(generator.next().value);
// console.log(generator.next().value);
// console.log(generator.next().value);


// const promise1 = new Promise((resolve, reject) => {
//     reject('promise 1 rejected')
// }) 

// const promise2 = new Promise((resolve, reject) => {
//     resolve('promise 2 resolved')
// }) 

// const promise3 = new Promise((resolve, reject) => {
//     reject('promise 3 rejected')
// }) 

// Promise.any([promise1, promise2, promise3]).then((result) => {
//     console.log(result);
// }) .catch((result) => {
//     console.log(result);
// })

// const arr = [1, 2, 3, 4, 5, 5, 1, 2, 3, 4]
// const double = arr.map((value) => value * value)
// console.log(double);

// const unique = [...new Set(arr)]
// console.log(unique);

// const even = arr.filter((value) => value % 2 == 0 ? value: null)
// console.log(even.length);

// const sum = arr.reduce((acc, value) => acc += value)
// console.log(sum);


// const arr = [1, 3, 3, 7, 5]

// const bool = arr.some((value) => {
//     return value % 2 == 0
// })

// console.log(bool);


// const obj = {
    
// }

// function isEmpty(object) {
//     return Object.keys(object).length == 0 ? 'true' : 'false'
// }

// console.log(isEmpty(obj));

// const obj = {
    
// }

// console.log(Object.keys(obj).length == 0 ? 'true' : 'false');


// const arr = [1, 2, 2, 1, 3, 4, 3, 5]
// const unique = []

// for (var i = 0; i < arr.length; i++) {
//     if (!unique.includes(arr[i])) {
//         unique.push(arr[i])
//     }
// }

// console.log(unique);

// delete nth element from array

// const arr = [1, 2, 3, 4, 5]

// function deleteElement(n) {
//     arr.splice(n, 1)
// }

// deleteElement(2)
// console.log(arr);

// const str = 'Ishaquel Aman'

// const arr = str.split('')

// const newArr = arr.map((value) => value.toUpperCase())
// const newStr = newArr.join('')

// console.log(newStr);

// const names = ['Ishaq', 'Anshif', 'Ameen', 'mishal', 'Hasna Parvi']

// const biggestName = names.reduce((acc, value) => acc.length < value.length ? value : acc)
// console.log(biggestName);

// var count = 1
// function * multiply(n) {
//     while (n) {
//         yield n * count++
//     }
// }

// const generator = multiply(20)

// console.log(generator.next().value);
// console.log(generator.next().value);
// console.log(generator.next().value);
// console.log(generator.next().value);
// console.log(generator.next().value);


// const str = 'malayalam'
// var newStr = ''

// for (var i = str.length - 1; i >= 0; i--) {
//     newStr += str[i]
// }
// console.log(newStr);

// if (str == newStr) {
//     console.log("It's palindrome!");
// } else {
//     console.log("It's not palindrome!");
// }


// const str = 'Malayalam'
// const newStr = str.toLowerCase().split('').reverse().join('')

// console.log(newStr);

// if (str.toLowerCase() == newStr) {
//     console.log("It's plaindrome");
// } else {
//     console.log("It's not palindrome!");
// }


// const word = 'Hello World'

// var newWord = word.split(' ').reverse().join(' ')
// console.log(newWord);

// print object key and value


// const obj = {
//     name: 'Ishaq',
//     age: 19,
//     place: 'Gudalur'
// }


// for (itr in obj) {
//     console.log(${itr} : ${obj[itr]});
// }


// const obj = {
//     name: 'Ishaq',
//     age: 19
// }

// const {name: firstName} = obj
// console.log(obj);

// common element in two array

// const arr = [1, 2, 3, 4, 5]
// const newArr = [2, 3, 4, 8, 10]

// const common = []

// for (var i = 0; i < newArr.length; i++) {
//     if (arr.includes(newArr[i])) {
//         common.push(newArr[i])
//     }
// }  

// console.log(common);

// const time = setTimeout(() => {
//     console.log('Set timeout!');
// }, 5000)

// setTimeout(() => {
//     clearTimeout(time)
//     console.log('set timeout cancelled!');
// }, 1000)

// const a = setInterval(() => {
//     console.log('Hellooo');
// }, 1000)

// setTimeout(() => {
//     clearInterval(a)
// }, 4000)

// const arr = [1, 2, 3, 4, 5]

// function removeElement(n) {
//     arr.splice(n, 1)
// }

// removeElement(2)

// console.log(arr);


// const arr = ['ishaq', 'Almas', 'Anshif', 'Ameen', 'Raniya razana']

// const count = []

// for (var i = 0; i < arr.length; i++) {
//     count.push(arr[i].length)
// }

// const longest = arr.reduce((acc, value) => acc.length < value.length ? value : acc)

// console.log(longest);
// console.log(count);




// const a = 2

// switch(a) {
//     case 1:
//         console.log('1');
//         break;
//     case 2:
//         console.log('2');
//         break;
//     case 3:
//         console.log('3');
//         break;
// }

// try catch finally syntax


// try {
//     const result = 10 / 1
//     console.log(result);
// } catch (err) {
//     console.error('Cannot divide by zero!', err.message);
// } finally {
//     console.log('execution successfull!');
// }

// rest

// function sumOfArgs(...args) {
//     const result = args.reduce((acc, value) => acc += value)
//     console.log(result);
// }

// sumOfArgs(1, 2, 3, 4, 5)

// const arr = ['Orange', 'Apple', 'marco', 'nivendu', 'sirus', 'elephant']

// const vowels = ['a', 'e', 'i', 'o', 'u']

// const voewlsWithString = arr.filter((value) => 
//     vowels.includes(value[0].toLowerCase())
// )
// console.log(voewlsWithString);

// const str = 'Mohammed Rishal'

// const newStr = str.split('').reverse().join('')
// console.log(newStr);

// isArray
// const str = []

// console.log(Array.isArray(str));


// const arr = [1, 2, 3, 4, 5]

// var sum = 0

// arr.forEach((value) => {
//     sum += value
// })

// console.log(sum);

// const arr = [1, 2, 3, 4, 5]

// var count = 0
// var sum = 0

// while (count < arr.length) {
//     sum += arr[count++]
// }

// console.log(sum);


// duplicate element remove from the array without using set

// const arr = [1, 2, 3, 4, 5, 5, 1, 2, 6, 1, 7]
// const unique = []

// arr.filter((value) => unique.includes(value) ? '' : unique.push(value))

// console.log(unique);

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const prime = []
// var f = 0
// var sum = 0


// for (var i = 0; i < arr.length; i++) {
//     for (j = 2; j < arr[i]; j++) {
//         if (arr[i] % j == 0) {
//             f = 1
//             break;
//         }
//     }
//     if (f == 0) {
//         prime.push(arr[i])
//         sum += arr[i]
//     }
//     f = 0
// }

// console.log(prime);
// console.log(sum);


// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// var f = 0



// for (var i = 0; i < arr.length; i++) {
//     for (var j = 2; j < arr[i]; j++) {
//         if (arr[i] % j == 0) {
//             f = 1
//             break;
//         }
//     }
//     if (f == 0) {
//         arr.splice(i, 1)
//         i--
//     }
//     f = 0
// }

// console.log(arr);

// IIFE syntax

// (() => {
//     console.log('Ishaq');
// })()

// (function () {
//     console.log('heyyy');
// })()

// const str = 'Ishaqual Aman'
// var count = 1

// for (var i = 0; i < str.length; i++) {
//     for (var j = i + 1; j < str.length; j++) {
//         if (str[i] == str[j]) {
//             count++
//         }
//     }
//     console.log(${str[i]} occuring ${count} times!)
//     count = 1
// }


// const arr = [1, 'Ishaq', 20, 'hlo', 30, 'hey', 'hloo']

// const newArr = arr.filter((value) => typeof(value) == 'number' ? value : null)

// console.log(newArr);


// function Person() {
//     this.a = 10,
//     this.greet = function() {
//         console.log(';df');
//     }
// }

// const obj = new Person()
// console.log(obj.greet());


// const firstName = Symbol('uniqueKey')


// const obj = {
//     [firstName] : 'Ishaquel Aman'
// }

// console.log(obj[firstName]);

// var a = 10

// function print() {
//     return a++
// }

// const b = print()
// const c = print()
// const d = print()

// console.log(a + b);

// function print(n) {
//     if (typeof(n) != 'string') {
//         try {
//                 throw new Error('Argument need be string!')
//         } catch(err) {
//             console.error('this is ',err.message);
//         }
//     } else {
//         console.log(n);
//     }
// }

// print(67)

// const arr = [2, 1, 3, 4]

// for (var i = 1; i <= 9; i++) {
//     if (!arr.includes(i)) {
//         console.log(i);
//     }
// }


// pracical 

// const obj = {
//     name: 'Ishaq',
//     age: 19,
//     place: 'Gudalur'
// }

// console.log(Object.keys(obj).length);


// const arr = [1, 2, 1, 2, 3, 4, 5, 3, 6, 6, 7, 8, 9, 2]
// const unique = []


// for (var i in arr) {
//     (!unique.includes(arr[i])) ? unique.push(arr[i]) : ''
// }

// console.log(unique);

// var str = 'Ishaquelaman'

// const newStr = str.split('').map((value) => value.toUpperCase()).join('')
// console.log(newStr);

// const http = require('http')


// console.log(10);



// var i = 10

// setTimeout(() => {
//     console.log(i);
//     i = 20
// }, 0)

// setTimeout(() => {
//     console.log(i);
// }, 0)

// i = 200

