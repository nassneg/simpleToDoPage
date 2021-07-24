// ****************************************************************************
// ****************************************************************************
//
//          Main JavaScript File
//
// ****************************************************************************
// ****************************************************************************


// Declaring array variable to store all the tasks
const taskArray = [];

// Event Listener for checking when the "Add to list" button is pressed
enter.addEventListener('click', () => {
  const inputValue = document.getElementById("userInput").value;
  if (inputValue) {
    // Object Declaration
    const taskObj = {
      task: inputValue,
      creationDate: new Date().toDateString(),
      checkBoxState: false,
      endDate: 'In progress',
      hidden: false
    };

    // Pushing the object into array
    taskArray.push(taskObj);

    updateTable();
  }
})

const updateTable = () => {
  let d = document.createElement("div");
  userInput.value = "";
  userInput.focus();

  resultTable.innerHTML = "";

  for (let i in taskArray) {
    if (!taskArray[i].hidden) {
      let row;
      if (taskArray[i].checkBoxState) {

        // move to the bottom using -1
        row = resultTable.insertRow(-1);
        row.style.backgroundColor = "pink";

      } else {
        
        row = resultTable.insertRow(0);
      }

      const cell1 = row.insertCell(0);
      // const cell2 = row.insertCell(1);
      const cell3 = row.insertCell(1);
      // const cell4 = row.insertCell(3);

      cell1.innerHTML = taskArray[i].task;
      // cell2.innerHTML = taskArray[i].creationDate;
      cell3.innerHTML = `<input type="checkbox" onclick="updateOrder(${i})" ${taskArray[i].checkBoxState ? 'checked' : ''} >`;
      // cell4.innerHTML = taskArray[i].endDate;
    }
  }
};


const updateOrder = (index) => {

  taskArray[index].checkBoxState = !taskArray[index].checkBoxState;
  taskArray[index].endDate = new Date().toDateString();
  updateTable();
};

clearItems.addEventListener('click', () => {
  for (let i in taskArray) {
    if (taskArray[i].checkBoxState) {
      taskArray[i].hidden = true;
    }
  }

  updateTable();
});