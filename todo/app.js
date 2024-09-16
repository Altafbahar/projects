const inputBox = document.querySelector('#inputBox');
const addBtn = document.querySelector('#addBtn');
const todoList = document.querySelector('#todoList');

const addTodo =()=>{ 

    const inputText = inputBox.value;
    if (inputText<=0) {
alert("write something man ");
        return false;
    }
    saveData();

const li = document.createElement("li");
const p = document.createElement("p");

p.innerHTML = inputText;
li.appendChild(p);
todoList.appendChild(li);

inputBox.value = "";
saveData();


let editBtn = document.createElement("button");
editBtn.innerHTML ="edit";
li.appendChild(editBtn);
editBtn.classList.add("btn" , "editBtn");
saveData();

let deleteBtn = document.createElement("button");
deleteBtn.innerHTML = "remove";
li.appendChild(deleteBtn);
deleteBtn.classList.add("btn" ,"deleteBtn");
saveData();
}
 
const updateTodo =(e)=>{
    if(e.target.innerHTML === "remove"){
        todoList.removeChild(e.target.parentElement);
    }
    saveData();

}
addBtn.addEventListener('click', addTodo);
todoList.addEventListener('click', updateTodo);

function saveData(){
    localStorage.setItem("data",todoList.innerHTML);
}

function showTask(){
     todoList.innerHTML = localStorage.getItem("data");
}

showTask();