document.querySelector(".question-1.chemistryMedium").addEventListener("click",function(event){
    if(event.target.id === "option-4"){
        document.querySelector(".question-1.chemistryMedium .option-4").classList.add("correct-ans");
    }else {
        document.querySelector(".question-1.chemistryMedium .option-4").classList.add("correct-ans");
        document.querySelector(".question-1.chemistryMedium ."+event.target.id).classList.add("wrong-ans");
    }
})


document.querySelector(".question-2.chemistryMedium").addEventListener("click",function(event){
    if(event.target.id === "option-3"){
        document.querySelector(".question-2.chemistryMedium .option-3").classList.add("correct-ans");
    }else {
        document.querySelector(".question-2.chemistryMedium .option-3").classList.add("correct-ans");
        document.querySelector(".question-2.chemistryMedium ."+event.target.id).classList.add("wrong-ans");
    }
})


document.querySelector(".question-3.chemistryMedium").addEventListener("click",function(event){
    if(event.target.id === "option-3"){
        document.querySelector(".question-3.chemistryMedium .option-3").classList.add("correct-ans");
    }else {
        document.querySelector(".question-3.chemistryMedium .option-3").classList.add("correct-ans");
        document.querySelector(".question-3.chemistryMedium ."+event.target.id).classList.add("wrong-ans");
    }
})