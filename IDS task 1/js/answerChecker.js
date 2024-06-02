
document.querySelector(".question-1.physicsHard").addEventListener("click",function(event){
    if(event.target.id === "option-2"){
        document.querySelector(".question-1.physicsHard .option-2").classList.add("correct-ans");
    }else {
        document.querySelector(".question-1.physicsHard .option-2").classList.add("correct-ans");
        document.querySelector(".question-1.physicsHard ."+event.target.id).classList.add("wrong-ans");
    }
})


document.querySelector(".question-2.physicsHard").addEventListener("click",function(event){
    if(event.target.id === "option-2"){
        document.querySelector(".question-2.physicsHard .option-2").classList.add("correct-ans");
    }else {
        document.querySelector(".question-2.physicsHard .option-2").classList.add("correct-ans");
        document.querySelector(".question-2.physicsHard ."+event.target.id).classList.add("wrong-ans");
    }
})


document.querySelector(".question-3.physicsHard").addEventListener("click",function(event){
    if(event.target.id === "option-1"){
        document.querySelector(".question-3.physicsHard .option-1").classList.add("correct-ans");
    }else {
        document.querySelector(".question-3.physicsHard .option-1").classList.add("correct-ans");
        document.querySelector(".question-3.physicsHard ."+event.target.id).classList.add("wrong-ans");
    }
})


