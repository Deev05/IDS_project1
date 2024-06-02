document.querySelector(".question-1.physicsEasy").addEventListener("click",function(event){
    if(event.target.id === "option-3"){
        document.querySelector(".question-1.physicsEasy .option-3").classList.add("correct-ans");
    }else {
        document.querySelector(".question-1.physicsEasy .option-3").classList.add("correct-ans");
        document.querySelector(".question-1.physicsEasy ."+event.target.id).classList.add("wrong-ans");
    }
})


document.querySelector(".question-2.physicsEasy").addEventListener("click",function(event){
    if(event.target.id === "option-1"){
        document.querySelector(".question-2.physicsEasy .option-1").classList.add("correct-ans");
    }else {
        document.querySelector(".question-2.physicsEasy .option-1").classList.add("correct-ans");
        document.querySelector(".question-2.physicsEasy ."+event.target.id).classList.add("wrong-ans");
    }
})


document.querySelector(".question-3.physicsEasy").addEventListener("click",function(event){
    if(event.target.id === "option-4"){
        document.querySelector(".question-3.physicsEasy .option-4").classList.add("correct-ans");
    }else {
        document.querySelector(".question-3.physicsEasy .option-4").classList.add("correct-ans");
        document.querySelector(".question-3.physicsEasy ."+event.target.id).classList.add("wrong-ans");
    }
})