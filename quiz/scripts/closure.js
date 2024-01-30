function setColor(set) {
    //let changeColor = set;
    function foo(){
        if(set) {
            let userColor = document.getElementById('color').value;
            document.getElementById('myPara').style.color = userColor;
        }
    }

    return foo;    
}

window.onload = function() {
    let toggle = true;
    document.getElementById('btn').onclick = setColor(toggle);
}
