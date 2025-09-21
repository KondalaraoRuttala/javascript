class Employee{
    constructor(name){
        this.name=name;
    }
    calculateSalary(){
        return 0;
    }
}
class Partime extends Employee{
    constructor(name , salary){
        super(name);
        this.salary=salary;
    }
    calculateSalary(){
        return this.salary;
    }
}
class Fulltime extends Employee{
    constructor(name, hourlyRate,hoursWork){
        super(name);
        this.hourlyRate=hourlyRate;
        this.hoursWork=hoursWork;
    }
    calculateSalary(){
        return this.hourlyRate * this.hoursWork;
    }
}
function processSalary(employee){
    console.log (`${employee.name} is ${employee.calculateSalary()} `);
}
processSalary(new Partime("Hari", 50000));
processSalary(new Fulltime("Ravi",1000, 5));