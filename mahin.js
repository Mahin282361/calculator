const btnlen=document.querySelectorAll("button").length
for(let i=0; i<btnlen; i++){
    let btdorlam=document.querySelectorAll("button")[i]
    btdorlam.addEventListener("click",function(){
        var text=this.innerHTML
        var input= document.querySelector("input");
        if(text=="*"){
            input.value+="*"
        }
        else if(text=="/"){
            input.value+="/"
        }
        else if(text=="+"){
            input.value+="+"
        }
        else if(text=="-"){
            input.value+="-"
        }
        else if(text=="="){
            input.value=eval( input.value)
        }
        else if(text=="AC"){
            input.value=""
        }
        else{
       
        input.value+=text;
      }

    })
}
