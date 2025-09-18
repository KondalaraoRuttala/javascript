class Person{
    constructor(name ,age){
         this.name=name;
         this.age=age;
    }
introduce(){
return 'I am '+  this.name+ ' my age is '+ this.age;
}
}
class student extends Person{
    constructor(name ,age ,grade){
        super(name ,age);
        this.grade = grade;
    }
    show(){
        return this.introduce()+ 'my grade is'+this.grade;
    }
}
let data =new student("vishnu", 23, 88);
console.log(data.show());
