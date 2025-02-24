const fs=require('fs')
const readblestram=fs.createReadStream('sample.txt')

readblestram.on('data',(chunk)=>{
    console.log('chunk received')
    console.log(chunk.toString());   
})
readblestram.on('end',()=>{
    console.log('sucsesfully readed');
})

readblestram.on('error',(err)=>{
    console.log('error');
    
})

