let h1Incompletedisplay = false;
let h1Completedisplay = false;
//To Display H1 Incomplete  Item

const displayH1 = (h1Incompleteddisplay) => {
  let incomplete = document.getElementById("Incomplete");

  if (!h1Incompleteddisplay) {
    incomplete.innerHTML = "";
    complete.innerHTML = "";
  } else {
    incomplete.innerHTML = "Incomplete Items";
    completed.innerHTML = "Complete Items";
  }
};
//To display H1 Complete Item
const displayH2 = (h1Completedisplay) => {
  let complete = document.getElementById("completed");
  if (!h1Completeddisplay) {
    complete.innerHTML = "";
  } else {
    completed.innerHTML = "Complete Items";
  }
};

//function to add each item

const addTodos = () => {
  h1Incompletedisplay = true;
  displayH1(h1Incompletedisplay);
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
    mydiv.appendChild(buttone); //buttone is button to delete
    mydiv.appendChild(buttond); //buttond is button to send to complete
    buttone.setAttribute("id", "buttone");
    buttone.addEventListener("click", deleteCurrentTodo);
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

    demo.removeChild(del);
  }
};
const values = [
  "clean the kitchen",
  "water the plants",
  "Drive to library",
  " make dinner",
  "take shower",
];
// //function to test the app
// const testApp = (values) => {
//   let inputValue = document.getElementById("todo");
//   values.forEach((element) => {
//     console.log(element);
//     element = inputValue.style.value;
//   });
//   addTodos();
// };
