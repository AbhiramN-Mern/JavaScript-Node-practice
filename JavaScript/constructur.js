 


 function car(model,brand){
  this.model = model,
  this.brand = brand,

  this.display =function (){
    console.log(`model:${this.model} brand:${this.brand}`);
    
  }
  }
 
  const car1= new car(2011,"porsche");
    const car2= new car(2001,"pajero");

    car1.display();
    car2.display();
  
    
  