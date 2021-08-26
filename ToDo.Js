let h1Incompletedisplay = false;
let h1Completedisplay = false;
let count = 0;

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
let todoItem = document.getElementById("todo").value;
//function to add each item

const addTodos = () => {
  h1Incompletedisplay = true;
  count = count++;
  displayH1(h1Incompletedisplay);
  let todoItem = document.getElementById("todo").value;
  console.log(todoItem);

  let demo = document.getElementById("demo"); //place to attach new node of p element containing a li and a delete button.
  if (todoItem) {
    //to make list and button inside a box.
    let mydiv = document.createElement("div");
    let mypara = document.createElement("p"); // where the input items are displayed.
    let list = document.createElement("li"); //child of element p.
    let buttone = document.createElement("button"); //another child of element p.Delete button.
    let buttond = document.createElement("button"); //another child of element p.Done button.

    buttone.innerHTML = "Delete"; //To display name of button.
    buttond.innerHTML = "Completed"; //To display name of button.
    mydiv.appendChild(mypara);
    mypara.appendChild(list);
    mypara.appendChild(buttone); //buttone is button to delete
    mypara.appendChild(buttond); //buttond is button to send to complete
    buttone.setAttribute("class", "buttone");
    buttone.addEventListener("click", deleteCurrentTodo);
    buttond.setAttribute("id", "buttond");
    buttond.addEventListener("click", markCompleted);
    mypara.setAttribute("class", "para");
    mydiv.setAttribute("id", "mydiv");

    list.innerHTML = todoItem;
    demo.append(mydiv);
  }
};

//function to delete each button
const deleteCurrentTodo = () => {
  {
    let button = document.querySelector(".buttone");
    let child = button.parentElement;
    let parent = child.parentElement;
    console.log(child);
    console.log(parent);
    //let demo = document.getElementById("demo"); //place element p was attached.
    //let del = document.getElementById("para"); //element p.

    parent.removeChild(child);
  }
};
// function to mark as completed
const markCompleted = () => {
  let completed = document.getElementById("completedWork"); //place to attach new node of p element containing a li and a delete button.
  let mydiv = document.createElement("p"); // where the input items are displayed.
  let list = document.createElement("li"); //child of element p.
  let buttone = document.createElement("button"); //another child of element p.Delete button.
  buttone.innerHTML = "Delete"; //To display name of button.
  mydiv.appendChild(list);
  mydiv.appendChild(buttone); //buttone is button to delete
  buttone.setAttribute("id", "buttone");
  buttone.addEventListener("click", deleteCurrentTodo);
  mydiv.setAttribute("id", "para");

  completed.append(mydiv);
};

let ValuesToSupply = [
  "clean the kitchen",
  "water the plants",
  "Drive to library",
  " make dinner",
  "take shower",
];
//Not Applicable to this project.Only for testing purposes only.
//function to test the app
let inputValue = document.getElementById("todo");
let input;
let value = 0;
function supplyValue(ValuesToSupply) {
  console.log(ValuesToSupply);
  if (value >= 5) {
    return;
  } else {
    let v = ValuesToSupply[value];
    value++;
    return v;
  }
}
function getInput() {
  let input = supplyValue(ValuesToSupply);
  inputValue.value = input;
  console.log(input);
}
