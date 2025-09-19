class Student{
    constructor(name, age, gender, phone, email, course, marks){
this.name =name;
this.age =age;
this.gender =gender;
this.phone =phone;
this.email =email;
this.course =course;
this.marks =marks;
    }
    data(){
        console.log(`name ${this.name} age ${this.age} gender ${this.gender} phone ${this.phone} email ${this.email} course ${this.course} marks ${this.marks}` )
    
}
}
 const details=new Student ("Hari", 22, "Male", 9876543210,'hariruttala3423@gmail.com', "MCA",78);
 details.data();