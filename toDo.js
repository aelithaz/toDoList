function clearText(){
    document.getElementById("input").value = "";
}

function addButton(){
    let list = document.getElementById("toDoList");
    let activity = document.getElementById("input").value;
    let li = document.createElement("li");
    li.addEventListener('contextmenu', e => e.preventDefault());
    li.innerText = activity;
    list.appendChild(li);
}

document.onmouseover = function(e){
    if(e.target.tagName == 'LI'){
        e.target.classList.add('hover');
    }
}

document.onmouseout = function(e){
    if(e.target.tagName == 'LI'){
        e.target.classList.remove('hover');
    }
}

function clearButton(){
    let list = document.getElementById("toDoList");
    list.innerHTML = "";
}

function clearCompleted(){
    document.querySelectorAll('.strikethrough').forEach(e => e.remove());
}

document.onauxclick = function(e){
    if(e.target.tagName == 'LI'){
        e.target.remove();
    }
}

document.onclick = function(e){
    if(e.target.tagName == 'LI'){
        if(e.target.classList.contains('strikethrough')){
            e.target.classList.remove('strikethrough');
        }
        else {
            e.target.classList.add('strikethrough');
        }
    }
}