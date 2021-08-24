//function to add each item

const addTodos = () => {
  let todoItem = document.getElementById("todo").value;
  console.log(todoItem);

  let demo = document.getElementById("demo"); //place to attach new node of p element containing a li and a delete button.
  if (todoItem) {
    //to make list and button inside a box.
    let mydiv = document.createElement("p"); // where the input items are displayed.
    let list = document.createElement("li"); //child of element p.
    let buttone = document.createElement("button"); //another child of element p.Delete button.
    let buttond = document.createElement("button"); //another child of element p.Done button.
    buttone.innerHTML = "Delete"; //To display name of button.
    buttond.innerHTML = "Completed"; //To display name of button.
    mydiv.appendChild(list);
    mydiv.appendChild(buttone);
    mydiv.appendChild(buttond);
    buttone.setAttribute("id", "buttone");
    buttond.setAttribute("id", "buttond");
    mydiv.setAttribute("id", "para");

    list.innerHTML = todoItem;
    demo.append(mydiv);
  }
};

//function to delete each button
const deleteCurrentTodo = () => {
  {
    let demo = document.getElementById("demo"); //place element p was attached.
    let del = document.getElementById("para"); //element p.
    let list = document.querySelector("li");

    demo.removeChild(del);
  }
};
//getting the delete button
let deleteButton = document.getElementById("buttone");

deleteButton.addEventListener("click", deleteCurrentTodo());
