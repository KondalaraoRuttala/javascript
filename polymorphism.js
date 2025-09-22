class Student{
    getRole(){
        console.log("student name is vishnu");
    }
}
class Id extends Student{
    getRole(){
        console.log("My id is 12345");
    }
}
class Percentage extends Student{
    getRole(){
        console.log("My Percentage is 78 ");
    }
}
const data = new Student();
data.getRole();
const id = new Id();
id.getRole();