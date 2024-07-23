const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("left");
let li = null;

function remove(el)
{
    var element = el.parentElement;
    element.remove();
}

function addTask() {
    if (inputBox.value === '') {
        alert("Type something first!");
    } else {
        li = document.createElement("div");
        li.className = "list"
        li.setAttribute("draggable", "true");

        let li2 = document.createElement("div");
        li2.setAttribute("id", "dots");
        li2.innerHTML = "&vellip;&vellip;&nbsp;";

        let li3 = document.createElement("div");
        li3.setAttribute("id", "text");
        li3.innerHTML = inputBox.value;

        let span = document.createElement("button");
        span.setAttribute("onclick", "remove(this)")
        span.innerHTML = "\u00d7";

        listContainer.appendChild(li);
        li.appendChild(li2);
        li.appendChild(li3);
        li.appendChild(span);
    }

    inputBox.value = "";
}

document.addEventListener("dragstart", function (event) {
    if (event.target.classList.contains("list")) {
        selected = event.target;
        event.dataTransfer.effectAllowed = "move";
    }
});

document.addEventListener("dragover", function (event) {
    event.preventDefault();
});

document.addEventListener("drop", function (event) {
    if (event.target.id === "right"  || event.target.id === "left" || event.target.id === "middle") {
        event.preventDefault();
        event.target.appendChild(selected);
    }
    selected = null;
});

