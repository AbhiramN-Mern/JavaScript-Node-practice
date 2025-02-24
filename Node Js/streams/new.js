const fs=require('fs')
console.log('started');


    try{
        const data=fs.readFileSync('output.txt','utf-8');
        console.log(data);
    }catch(err){
        console.log(err)

    }


console.log('ended')

