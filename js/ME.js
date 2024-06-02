document.querySelector(".question-1.mathsEasy").addEventListener("click",function(event){
    if(event.target.id === "option-2"){
        document.querySelector(".question-1.mathsEasy .option-2").classList.add("correct-ans");
    }else {
        document.querySelector(".question-1.mathsEasy .option-2").classList.add("correct-ans");
        document.querySelector(".question-1.mathsEasy ."+event.target.id).classList.add("wrong-ans");
    }
})


document.querySelector(".question-2.mathsEasy").addEventListener("click",function(event){
    if(event.target.id === "option-1"){
        document.querySelector(".question-2.mathsEasy .option-1").classList.add("correct-ans");
    }else {
        document.querySelector(".question-2.mathsEasy .option-1").classList.add("correct-ans");
        document.querySelector(".question-2.mathsEasy ."+event.target.id).classList.add("wrong-ans");
    }
})


document.querySelector(".question-3.mathsEasy").addEventListener("click",function(event){
    if(event.target.id === "option-3"){
        document.querySelector(".question-3.mathsEasy .option-3").classList.add("correct-ans");
    }else {
        document.querySelector(".question-3.mathsEasy .option-3").classList.add("correct-ans");
        document.querySelector(".question-3.mathsEasy ."+event.target.id).classList.add("wrong-ans");
    }
})