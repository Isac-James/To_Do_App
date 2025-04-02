let inputBox = document.getElementById("input-box");
let listContainer = document.getElementById("list-container");

function addTask() {
    if (inputBox.value === '') {
        alert("Please enter a task!");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"; // Unicode for multiplication sign (×)
        li.appendChild(span);
    }
    inputBox.value = ""; 
    saveTasks();
}

listContainer.addEventListener('click', function(e){
    if( e.target.tagName === 'LI'){
        e.target.classList.toggle('checked');
        saveTasks();
    }
    else if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove();
        saveTasks();
    }
}, false);

function saveTasks() {
   localStorage.setItem("tasks", listContainer.innerHTML);;
}

function loadTasks() {
    listContainer.innerHTML = localStorage.getItem("tasks") || ""; // Load tasks from local storage
}

loadTasks(); // Call loadTasks on page load