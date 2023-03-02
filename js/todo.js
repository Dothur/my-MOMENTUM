const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];

// toDos array 를 localstorage 에 저장함
function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); // JSON.stringify => String으로 바꿔줌
}

// ToDo 리스트를 X 버튼을 누르면 삭제하는 function
function deleteToDo(event){
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDos();
}

// ToDo 를 입력하면 생성해주는 function
function paintToDo(newToDo){
    const li = document.createElement("li")
    li.id = newToDo.id;
    const span = document.createElement("span")
    span.innerText = newToDo.text;
    const button = document.createElement("button");
    button.innerText = "❌"
    button.addEventListener("click", deleteToDo);
    li.appendChild(span); // li에 span 을 넣어줌
    li.appendChild(button); // span 추가 안에 button
    toDoList.appendChild(li); //todoList 에 newToDo를 받은 li, span을 넣어줌
}
function handleToDoSubmit(event){
    event.preventDefault(); // submit 했을때 기본동작을 막음(새로고침)
    const newToDo = toDoInput.value; // <- input 의 현재밸류를 새로 newToDo에 저장
    toDoInput.value = ""; // enter 했을때 그 값을 없애줌
    const newToDoObj = {  // object 로 저장
        text:newToDo,
        id: Date.now(),
    };
    toDos.push(newToDoObj);
    paintToDo(newToDoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos); // String -> js object
    toDos = parsedToDos; // 이전것도 다시 복원
    parsedToDos.forEach(paintToDo); // forEach 는 각각의 item 들에 대해 함수를 실행함
}