//remove duplicate even numbers from array

const arr = [1, 2, 2, 4,3, 4, 5, 6];

for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) { 
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] === arr[j]) {
          arr.splice(j, 1); 
        }
      }
    }
  }
  
  console.log(arr);
  