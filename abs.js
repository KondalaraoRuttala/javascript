class Car{
    #engineStart = false;
    constructor(brand){
        this.brand = brand;
    }
    #startEngine(){
        this.#engineStart = true;
        console.log("Engine is running")
    }
    start(){
        this.#startEngine();
        console.log(`${this.brand} car started.`);
    }
}
const c = new Car("KIA");
c.start();
