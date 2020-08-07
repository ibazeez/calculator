var inputLabel = document.getElementById("inputLabel");
function back(){
    var value = document.getElementById("del").value = value.substr(0,value.length - 1)
}

function GetNumber(obj){
    var push = obj.innerHTML;
    if(push == '='){
        inputLabel.innerHTML = eval(inputLabel.innerHTML    )
    }
    else if (push == 'CE'){
        inputLabel.innerHTML = '0'
    }
    else{
        if(inputLabel.innerHTML =='0'){
            inputLabel.innerHTML = push
        }
        else{
            inputLabel.innerHTML += push;
        }
    }
    
}



