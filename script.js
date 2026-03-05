/**
 * Question 1
 */
const question1 = () => {
  const sidebarButton = document.getElementById("sidebar");
  const sidebar = document.getElementById("sidebar-button");

  button.addEventListener("click", () => {
  sidebar.classList.toggle("opened");

  if (sidebar.classList.contains("opened")) {
    button.textContent = "‹";
  } else {
    button.textContent = "›";
  }
});


  // Listen for a "click" event on the sidebar's button.
  //
  // Browsers emit lots of different kinds of events, for
  // a full list see the following link:
  //   https://www.javatpoint.com/javascript-events
  //
  // addEventListener will then call the function we provide
  // whenever the button is clicked.
  sidebarButton.addEventListener("click", (event) => {
    const sidebarIsOpen = __YOUR_CODE_HERE__;

    if (sidebarIsOpen) {
      // Close the sidebar
      /** YOUR CODE HERE */
      
    } else {
      // Open the sidebar
      /** YOUR CODE HERE */
    }
  });
};

/**
 * Question 2
 */
const question2 = () => {
  const taskName = document.getElementById("add-todo");
  const addTodoButton = document.getElementById("task-name");
  const todoListUl = document.getElementById("todo-list");

addButton.addEventListener("click", () => {
  const task = taskInput.value;

  if (task === "") {
    return;
  }

  const newItem = document.createElement("li");
  newItem.textContent = task;

  todoList.append(newItem);

  taskInput.value = "";
});

};

/**
 * Question 3
 */
const question3 = () => {
  const firstNameInput = document.getElementById("first-name");
  const lastNameInput = document.getElementById("last-name");
  const message = document.getElementById("message");


  // using this function is reccomended but not necessary
  const updateMessage = () => {
    const fist = firstNameInput.value;
    const last = lastNameInput.value;

    message.textContent = 'Hello ${first} ${last}!';

  };

  /** YOUR CODE HERE */
  firstNameInput.addEventListener("input", updateGreeting);
  lastNameInput.addEventListener("input", updateGreeting);

};

/**
 * We need to wait for the HTML file to fully load before running
 * our JavaScript, otherwise it won't be able to operate on the HTML
 * since it hasn't loaded.
 */
document.addEventListener("DOMContentLoaded", (event) => {
  // We wrap each question in a try-catch so that way even if
  // your code for one question errors, the other ones
  // will work.
  try {
    question1();
  } catch (e) {
    console.error(e);
  }

  try {
    question2();
  } catch (e) {
    console.error(e);
  }

  try {
    question3();
  } catch (e) {
    console.error(e);
  }
});
