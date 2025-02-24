const fs=require('fs')

const writablestream=fs.createWriteStream('output.txt')
writablestream.write('hello')
writablestream.write('hello')
writablestream.on('finish',()=>{
    console.log('Steamed sucsesfully');
    
})