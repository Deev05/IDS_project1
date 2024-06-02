document.querySelector(".question-1.physicsMedium").addEventListener("click",function(event){
    if(event.target.id === "option-4"){
        document.querySelector(".question-1.physicsMedium .option-4").classList.add("correct-ans");
    }else {
        document.querySelector(".question-1.physicsMedium .option-4").classList.add("correct-ans");
        document.querySelector(".question-1.physicsMedium ."+event.target.id).classList.add("wrong-ans");
    }
})


document.querySelector(".question-2.physicsMedium").addEventListener("click",function(event){
    if(event.target.id === "option-1"){
        document.querySelector(".question-2.physicsMedium .option-1").classList.add("correct-ans");
    }else {
        document.querySelector(".question-2.physicsMedium .option-1").classList.add("correct-ans");
        document.querySelector(".question-2.physicsMedium ."+event.target.id).classList.add("wrong-ans");
    }
})


document.querySelector(".question-3.physicsMedium").addEventListener("click",function(event){
    if(event.target.id === "option-1"){
        document.querySelector(".question-3.physicsMedium .option-1").classList.add("correct-ans");
    }else {
        document.querySelector(".question-3.physicsMedium .option-1").classList.add("correct-ans");
        document.querySelector(".question-3.physicsMedium ."+event.target.id).classList.add("wrong-ans");
    }
})