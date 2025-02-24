let array = [1,2,3,4,6,8,9];

let checkvalue = 9;
let flag=0;
let block =0;
for(let i=0;i<array.length;i++){
    if(array[i]==checkvalue){
       flag=1;
       break;
        
    }
    else{
        block=1;
        
        
    }
}

if(flag==1){
    console.log("true");
    
}
else if(block==1){
    console.log("FALSE");
    
}