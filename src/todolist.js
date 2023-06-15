let todoList = localStorage.getItem('todoList') ? JSON.parse(localStorage.getItem('todoList')) : [];
const getTodoList = () => todoList;
const saveTodoList = () => {
  localStorage.setItem('todoList', JSON.stringify(todoList));
};
const addItem = (task) => {
  if (task) {
    const taskItem = {
      description: task,
      completed: false,
      index: todoList.length + 1,
    };
    todoList.push(taskItem);
    saveTodoList();
  }
};

const removeItem = (index) => {
  todoList.splice(index, 1);
  todoList.forEach((item, i) => {
    item.index = i + 1;
  });
  localStorage.setItem('todoList', JSON.stringify(todoList));
};
const removeCompletedItems = () => {
  todoList = todoList.filter((item) => !item.completed);
  saveTodoList();
};
const editItem = (index, description) => {
  todoList[index].description = description;
  saveTodoList();
};

const markCompleted = (itemIndex) => {
  if (itemIndex >= 0 && itemIndex < todoList.length) {
    todoList[itemIndex].completed = !todoList[itemIndex].completed;
    saveTodoList();
  }
};

export {
  getTodoList, addItem, removeItem, removeCompletedItems, editItem, markCompleted,
};