const todoList = document.querySelector(".todo-list");
const todoForm = document.querySelector(".todo-form");
const todoInput = document.querySelector("#todo-input");

todoForm.addEventListener("submit", formHandler);

function formHandler(event) {
  event.preventDefault();

  // Получаем название задачи из инпута
  const taskText = todoInput.value;

  // Создаём тег li с помощью создания элемента
  const newTask = document.createElement('li');
  newTask.innerText = taskText;

  // Создаём кнопку Удалить
  const deleteBtn = document.createElement('button');
  deleteBtn.setAttribute('role', 'button');
  deleteBtn.innerText = 'Удалить';
  deleteBtn.style['margin-left'] = '15px';
  newTask.append(deleteBtn);

  //Добавляем событие по клику
  deleteBtn.addEventListener('click', (e) => e.target.closest('li').remove());

  // Добавляем элемент на страницу
  todoList.append(newTask);

  // Очистка поле ввода
  todoInput.value = '';

  // Перенос фокуса на поле ввода 
  todoInput.focus();
}
