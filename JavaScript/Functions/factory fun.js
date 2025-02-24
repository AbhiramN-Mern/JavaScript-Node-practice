function car(model,brand) {
    return{
        model : model,
        brand : brand,
        display(){
            console.log(`name : ${this.model}, brand : ${this.brand}`);
            
        }
    }
   
}

const car1 = car(2011,"toyota");
const car2= car(2024,"BMW");
car1.display();
car2.display();

