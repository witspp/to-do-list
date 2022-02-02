let addToDoButton = document.getElementById("Add");
let ToDoContainer = document.getElementById("toDoCont");
let inputfield = document.getElementById("to_do");

addToDoButton = addEventListener("click", function () {
  var paragraph = document.createElement("p");
  paragraph.classList.add("paragraph-styling");
  paragraph.innerText = inputfield.value;

  ToDoContainer.appendChild(paragraph);

  inputfield.value = "";
  paragraph.addEventListener("click", function () {
    paragraph.style.textDecoration = "line-through";
  })
  paragraph.addEventListener("dblclick", function () {
    ToDoContainer.removeChild(paragraph);
  })
})



