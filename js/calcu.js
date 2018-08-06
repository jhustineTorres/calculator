var keys = document.querySelectorAll("button");
for(var i=0; i<keys.length; i++){
    keys[i].onclick = function (e){
        var input = document.querySelector(".display");
        var inputValue = input.innerHTML;
        var btnValue = this.innerHTML;
        if(btnValue == "="){
            var mathCal = inputValue;
            if(mathCal){
                input.innerHTML = eval(mathCal);
            }
        }
        else if(btnValue == "Del"){
           input.innerHTML=input.innerHTML.slice(0,input.innerHTML.length-1);
        }
        else if(btnValue == "AC"){
            input.innerHTML = "";
        }
        else{
            input.innerHTML += btnValue;
        }
    }
}
