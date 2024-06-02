document.querySelector(".question-1.chemistryEasy").addEventListener("click",function(event){
    if(event.target.id === "option-2"){
        document.querySelector(".question-1.chemistryEasy .option-2").classList.add("correct-ans");
    }else {
        document.querySelector(".question-1.chemistryEasy .option-2").classList.add("correct-ans");
        document.querySelector(".question-1.chemistryEasy ."+event.target.id).classList.add("wrong-ans");
    }
})


document.querySelector(".question-2.chemistryEasy").addEventListener("click",function(event){
    if(event.target.id === "option-2"){
        document.querySelector(".question-2.chemistryEasy .option-2").classList.add("correct-ans");
    }else {
        document.querySelector(".question-2.chemistryEasy .option-2").classList.add("correct-ans");
        document.querySelector(".question-2.chemistryEasy ."+event.target.id).classList.add("wrong-ans");
    }
})


document.querySelector(".question-3.chemistryEasy").addEventListener("click",function(event){
    if(event.target.id === "option-2"){
        document.querySelector(".question-3.chemistryEasy .option-2").classList.add("correct-ans");
    }else {
        document.querySelector(".question-3.chemistryEasy .option-2").classList.add("correct-ans");
        document.querySelector(".question-3.chemistryEasy ."+event.target.id).classList.add("wrong-ans");
    }
})