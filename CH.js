document.querySelector(".question-1.chemistryHard").addEventListener("click",function(event){
    if(event.target.id === "option-3"){
        document.querySelector(".question-1.chemistryHard .option-3").classList.add("correct-ans");
    }else {
        document.querySelector(".question-1.chemistryHard .option-3").classList.add("correct-ans");
        document.querySelector(".question-1.chemistryHard ."+event.target.id).classList.add("wrong-ans");
    }
})


document.querySelector(".question-2.chemistryHard").addEventListener("click",function(event){
    if(event.target.id === "option-2"){
        document.querySelector(".question-2.chemistryHard .option-2").classList.add("correct-ans");
    }else {
        document.querySelector(".question-2.chemistryHard .option-2").classList.add("correct-ans");
        document.querySelector(".question-2.chemistryHard ."+event.target.id).classList.add("wrong-ans");
    }
})


document.querySelector(".question-3.chemistryHard").addEventListener("click",function(event){
    if(event.target.id === "option-2"){
        document.querySelector(".question-3.chemistryHard .option-2").classList.add("correct-ans");
    }else {
        document.querySelector(".question-3.chemistryHard .option-2").classList.add("correct-ans");
        document.querySelector(".question-3.chemistryHard ."+event.target.id).classList.add("wrong-ans");
    }
})