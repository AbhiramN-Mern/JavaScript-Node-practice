const fs=require('fs')

const readblestram=fs.createReadStream('sample.txt')
const writablestram=fs.createWriteStream('output.txt')
readblestram.pipe(writablestram)
writablestram.on('finish',()=>{
    console.log('completed');
    
})