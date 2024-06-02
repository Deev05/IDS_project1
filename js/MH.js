document.querySelector(".question-1.mathsHard").addEventListener("click",function(event){
    if(event.target.id === "option-3"){
        document.querySelector(".question-1.mathsHard .option-3").classList.add("correct-ans");
    }else {
        document.querySelector(".question-1.mathsHard .option-3").classList.add("correct-ans");
        document.querySelector(".question-1.mathsHard ."+event.target.id).classList.add("wrong-ans");
    }
})


document.querySelector(".question-2.mathsHard").addEventListener("click",function(event){
    if(event.target.id === "option-1"){
        document.querySelector(".question-2.mathsHard .option-1").classList.add("correct-ans");
    }else {
        document.querySelector(".question-2.mathsHard .option-1").classList.add("correct-ans");
        document.querySelector(".question-2.mathsHard ."+event.target.id).classList.add("wrong-ans");
    }
})


document.querySelector(".question-3.mathsHard").addEventListener("click",function(event){
    if(event.target.id === "option-3"){
        document.querySelector(".question-3.mathsHard .option-3").classList.add("correct-ans");
    }else {
        document.querySelector(".question-3.mathsHard .option-3").classList.add("correct-ans");
        document.querySelector(".question-3.mathsHard ."+event.target.id).classList.add("wrong-ans");
    }
})