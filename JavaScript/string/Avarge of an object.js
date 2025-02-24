//Avarage Of This object

 const ab = {a:[2,3,4,5,6,4] ,pl:45}
 const arr=[...ab.a,ab.pl]
 const result= arr.reduce((acc,curr)=>acc+curr)
 const avg=result/arr.length
 console.log(avg)
 console.log(result)