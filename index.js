let inputBox = document.querySelector(".container input");
let addBtn = document.querySelector(".container button");
let todo = document.querySelector("#myUl")
inputBox.onkeyup = () => {
    let userData = inputBox.value;//getting user entered data from user
    if (userData.trim() != 0) {
        addBtn.classList.add("active");//active the add button
    }
    else {
        addBtn.classList.remove("active")
    }
}
show();
addBtn.onclick = () => {
    let userData = inputBox.value;
    let getLocalStorage = localStorage.getItem("New Todo");//getting localstorage
    if (getLocalStorage === null)//if localstorage is empty.
    {
        Arr = [];//creating  a black array/list.
    }
    else {
        Arr = JSON.parse(getLocalStorage);//transforming json string into a js object
    }
    Arr.push(userData);//pushing or adding user data.
    localStorage.setItem("New Todo", JSON.stringify(Arr));//transforming js object into a json string.
    show();//calling show function.

}

function show() {
    let getLocalStorage = localStorage.getItem("New Todo");//getting localstorage
    if (getLocalStorage === null)//if localstorage is empty.
    {
        Arr = [];//creating  a black array/list.
    }
    else {
        Arr = JSON.parse(getLocalStorage);//transforming json string into a js object
    }
    let newLi = '';
    Arr.forEach((element, index) => {
        newLi += `<li class="check">${element}<span onClick="deleteTask(${index})"><i class="fa-solid fa-xmark delete"></i></span></li>`
    });
    todo.innerHTML = newLi;//adding new li
    inputBox.value = "";
}


function deleteTask(index) {
    let getLocalStorage = localStorage.getItem("New Todo");
    Arr = JSON.parse(getLocalStorage);
    Arr.splice(index, 1);//delete or remove the particular indexed li

    //after remove the li again update the local storage.
    localStorage.setItem("New Todo", JSON.stringify(Arr));
    show();
}

var list = document.querySelector('ul');
list.addEventListener('click', function(e) {
  if (e.target.tagName === 'LI') {
  e.target.classList.toggle('check');
  }
}, false);
