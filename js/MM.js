document.querySelector(".question-1.mathsMedium").addEventListener("click",function(event){
    if(event.target.id === "option-1"){
        document.querySelector(".question-1.mathsMedium .option-1").classList.add("correct-ans");
    }else {
        document.querySelector(".question-1.mathsMedium .option-1").classList.add("correct-ans");
        document.querySelector(".question-1.mathsMedium ."+event.target.id).classList.add("wrong-ans");
    }
})


document.querySelector(".question-2.mathsMedium").addEventListener("click",function(event){
    if(event.target.id === "option-3"){
        document.querySelector(".question-2.mathsMedium .option-3").classList.add("correct-ans");
    }else {
        document.querySelector(".question-2.mathsMedium .option-3").classList.add("correct-ans");
        document.querySelector(".question-2.mathsMedium ."+event.target.id).classList.add("wrong-ans");
    }
})


document.querySelector(".question-3.mathsMedium").addEventListener("click",function(event){
    if(event.target.id === "option-3"){
        document.querySelector(".question-3.mathsMedium .option-3").classList.add("correct-ans");
    }else {
        document.querySelector(".question-3.mathsMedium .option-3").classList.add("correct-ans");
        document.querySelector(".question-3.mathsMedium ."+event.target.id).classList.add("wrong-ans");
    }
})