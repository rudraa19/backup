const inputBox = document.getElementById("input-box");
const listContaiiner = document.getElementById("list-container");

function addTask() {
    if (inputBox.value === '')
    {
        alert("Type something first!");
    }
    else
    {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContaiiner.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
}


listContaiiner.addEventListener("click", function(r){
    if(r.target.tagName === "LI"){
        r.target.classList.toggle("checked");
    }
    else if(r.target.tagName === "SPAN"){
        r.target.parentElement.remove();
    }
}, false);
