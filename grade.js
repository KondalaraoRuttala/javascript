let students =[{name: "Hari", score: 85},
    {name: "srinu", score:92},
    {name: "ajay", score:78},
    {name: "swamy", score:95}
]
function avgMarks(students){
    let product =0;
    let avg =0;
    for(let i=0; i<students.length; i++){
        product += students[i].score;
        avg = product/students.length;
    }
   console.log(product);
   console.log(avg);
}
avgMarks(students);
let highestMarks=(students)=>{
    let max=students[0].score;
    let person=students[0].name;
    for(let i=0; i<students.length; i++){
        if(students[i].score>max){
            max=students[i].score;
            person=students[i].name;
        
        }
    }console.log(person+" marks");
}
highestMarks(students);

