const totalMarks = prompt("Input exam Total Marks")
const Type = prompt("Enter Exam Type")

function checkGrade(marks,Exam_type){
    if(Exam_type ==="Final"){
        if(marks >= 89 && marks < 100){
            console.log("Excellent Job, you got an A+")

        }
        
    }else if(Exam_type ==="Final" || Exam_type === "Midterm"){
        if(marks >= 79 && marks < 89 ){
            console.log("Good Job, you got an A")
        }else if(marks >= 75 && marks < 79){
            console.log("Well done, you got a B+")
        }else if(marks >= 70 && marks < 75){
            console.log("Nice work, you got a B")
        }else if(marks >= 60 && marks < 70){
            console.log("Yout got a C")
        }else if(marks < 60 ){
            console.log("You need to improve")
        }else{
            console.log("Repeat Class")
        }
        
    }
}

checkGrade(totalMarks,Type)

