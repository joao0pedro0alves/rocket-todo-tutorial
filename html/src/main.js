const ROCKET_TODO_STORAGE_KEY = '@rocket-todo:todos-1.0.0';

const $searchForm = document.querySelector('#search-form');
const $emptyContent = document.querySelector('#empty-content');

const $todoContainer = document.querySelector('#todo-container');
const $todoTableBody = document.querySelector('#todo-table-body');

const $todoCounter = document.querySelector('#todo-counter');
const $todoCompletedCounter = document.querySelector('#todo-completed-counter');

/**
 * Todo
 * {
 *  id: number;
 *  task: string;
 *  createdAt: string;
 *  donedAt: string;
 * }
 */

function getTodos() {
  const storagedTodos = localStorage.getItem(ROCKET_TODO_STORAGE_KEY);
  return JSON.parse(storagedTodos) || [];
}

function setTodos(todos) {
  localStorage.setItem(ROCKET_TODO_STORAGE_KEY, JSON.stringify(todos));
}

function loadTodoTable() {
  const todos = getTodos();
  const completedTodos = todos.filter((todo) => todo.donedAt);

  $todoCounter.innerHTML = todos.length;
  $todoCompletedCounter.innerHTML = `${completedTodos.length} de ${todos.length}`;

  if (todos.length > 0) {
    // Reset content
    $todoTableBody.innerHTML = '';

    // Create content
    todos.forEach((todo) => {
      const checked = !!todo.donedAt;
      const checkedText = checked ? 'completed' : 'uncompleted';

      $todoTableBody.innerHTML += `
        <tr id='todo-${todo.id}' class="todo-${checkedText}">
          <td>
            <label class="checkbox">
              <input onchange="updateTodo(${todo.id}, ${checked})" type="checkbox" ${checked ? 'checked="checked"' : ''}' />
              <span class="checkbox-marker"></span>
            </label>
          </td>
          <td>${todo.task}</td>
          <td>
            <button onClick="deleteTodo(${todo.id})" title='Excluir tarefa'>
              <img src="./assets/icons/trash.svg" alt="Trash" />
            </button>
          </td>
        </tr>
      `;
    });

    $emptyContent.classList.add('hidden');
    $todoContainer.classList.remove('hidden');
  } else {
    $emptyContent.classList.remove('hidden');
    $todoContainer.classList.add('hidden');
  }
}

function createTodo(event) {
  event.preventDefault();

  const $taskInput = document.querySelector('#task');
  const task = $taskInput.value;

  if (!task) {
    // eslint-disable-next-line no-alert
    alert('Informe o título da tarefa.');
    return;
  }

  const now = Date.now();

  const newTodo = {
    id: String(now),
    task: $taskInput.value,
    createdAt: new Date(now),
    donedAt: null,
  };

  setTodos([newTodo, ...getTodos()]);
  $taskInput.value = '';

  loadTodoTable();
}

function updateTodo(todoId, checked) {
  const todos = getTodos();

  const updatedTodos = todos.map((todo) => (todo.id !== String(todoId)
    ? todo
    : { ...todo, donedAt: checked ? null : new Date() }));

  setTodos(updatedTodos);
  loadTodoTable();
}

function deleteTodo(todoId) {
  const todos = getTodos();

  const updatedTodos = todos.filter((todo) => todo.id !== String(todoId));
  setTodos(updatedTodos);

  loadTodoTable();
}

$searchForm.addEventListener('submit', createTodo);

loadTodoTable();
