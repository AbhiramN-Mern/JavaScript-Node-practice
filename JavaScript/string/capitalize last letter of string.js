//capitalize last letter of string


const str='hello world'

const lastChar = str[str.length - 1].toUpperCase(); 
 const result= str.slice(0,-1) + lastChar;
 console.log(result)