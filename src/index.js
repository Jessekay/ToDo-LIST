import './index.css';
import {
  getTodoList, addItem, removeItem, removeCompletedItems, editItem,
} from './todolist.js';
import displayToDoList from './dis.js';

const inputItem = document.querySelector('.field-input');
const addButton = document.querySelector('.add-btn');
const clearAll = document.querySelector('#clear-btn');

let editIndex = -1;
addButton.addEventListener('click', () => {
  if (editIndex === -1) {
    addItem(inputItem.value);
  } else {
    editItem(editIndex.toExponential, inputItem.value);
    editIndex = -1;
    addButton.textContent = 'Add';
  }
  inputItem.value = '';
  displayToDoList(getTodoList());
});
clearAll.addEventListener('click', () => {
  removeCompletedItems();
  displayToDoList(getTodoList());
});

// Event listener for removing an item
document.addEventListener('click', (event) => {
  if (event.target.classList.contains('remove-btn')) {
    const itemIndex = parseInt(event.target.dataset.index, 10);
    removeItem(itemIndex);
    displayToDoList(getTodoList());
  }
});
// Event listener for editing an item
document.addEventListener('click', (event) => {
  if (event.target.classList.contains('edit-btn')) {
    const itemIndex = parseInt(event.target.dataset.index, 10);
    inputItem.value = getTodoList()[itemIndex].description;
    editIndex = itemIndex;
    addButton.textContent = 'Save';
  }
});
displayToDoList(getTodoList());