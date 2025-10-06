
class Order {
    constructor(public typeOfFood: string){}
}

class Swiggy extends Order {
    constructor(typeOfFood: string, public itemQuantity: number, public itemName: string, public restuarantName: string){
        super(typeOfFood);
    }
    orderedItems(){
        console.log(`Ordered ${this.typeOfFood}: ${this.itemQuantity} ${this.itemName} from ${this.restuarantName}`)
    }
}

class Zomato extends Order {
    constructor(typeOfFood: string, public itemQuantity: number, public itemName: string, public restuarantName: string){
        super(typeOfFood);
    }
    orderedItems(){
        console.log(`Ordered ${this.typeOfFood}: ${this.itemQuantity} ${this.itemName} from ${this.restuarantName}`)
    }
}

function handleOrder(order: Order){
    if(order instanceof Swiggy){
        order.orderedItems();
    }else if(order instanceof Zomato){
        order.orderedItems
    }else{
        console.log("Invalid Order")
    }
}

const swiggy = new Swiggy("Main Course", 2, "chicken biryani", "Khandari");
const zomato = new Zomato("Main Course", 2, "mutton pulao", "Grand Arya");

handleOrder(swiggy);
handleOrder(zomato);