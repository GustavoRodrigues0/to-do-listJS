function add_task(){

    let body = document.body
    let button = document.createElement("button");
    let ul = document.createElement("ul");
    let li = document.createElement("li");
    let input_value = document.getElementById("task").value;
    let icon = document.createElement("i");
    let li_text = document.createTextNode(document.getElementById("task").value);
    
    button.addEventListener("click", ()=>{body.removeChild(ul);});

    icon.setAttribute("class", "fas fa-times");

    button.appendChild(icon);
    li.appendChild(button);
    li.appendChild(li_text);
    ul.appendChild(li);
    
    if(input_value.length == 0){
        alert("Insira algo na caixa de texto");
    }else{
        body.appendChild(ul);
        document.getElementById("task").value = null;
    }

}