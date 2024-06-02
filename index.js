var word = "" ;
var difficultyLevel = "easy";
document.querySelector("input").addEventListener("keypress",function(event){
    var keyPressed = event.key;
    word = word + keyPressed;
    document.querySelector(".difficulty").addEventListener("click",function(event){
        difficultyLevel=event.target.classList[event.target.classList.length-1];
        document.addEventListener("keypress",function(event){
            if(event.key=== "Enter"){
                var url = "./html/"+word.slice(0,word.length-5)+difficultyLevel+".html"
                window.open(url);
            }
        })
    })
})
document.querySelector(".difficulty").addEventListener("click",function(event){
    difficultyLevel=event.target.classList[event.target.classList.length-1];
        document.querySelector(".subject").addEventListener("click",function(event){
            word=event.target.classList[event.target.classList.length-1];
            document.addEventListener("keypress",function(event){
                if(event.key=== "Enter"){
                    var url = "./html/"+word.slice(0,word.length)+difficultyLevel+".html"
                    window.open(url);
                }
            })
        })
    })
document.querySelector(".subject").addEventListener("click",function(event){
    word=event.target.classList[event.target.classList.length-1];
        document.querySelector(".difficulty").addEventListener("click",function(event){
            difficultyLevel=event.target.classList[event.target.classList.length-1];
            document.addEventListener("keypress",function(event){
                if(event.key=== "Enter"){
                    var url = "./html/"+word.slice(0,word.length)+difficultyLevel+".html"
                    window.open(url);
                }
        })
    })
})

