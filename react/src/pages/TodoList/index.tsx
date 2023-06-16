import { useState, useRef, FormEvent } from 'react'
import { PlusCircle, Trash } from 'phosphor-react'

import logo from '@/assets/logo.svg'
import { Checkbox } from '@/components/Checkbox'
import { EmptyList } from '@/components/EmptyList'

import {
  SearchForm,
  TodoListContainer,
  TodoListContent,
  TodoListHeader,
  TodoListToolbar,
  TodoListToolbarCounter,
  TodoTableContainer,
  TodoTableRow,
} from './styles'

interface Todo {
  id: string
  task: string
  createdAt: Date
  doneAt: null | Date
}

/**
 * Conceitos abordados nesse aplicativo.
 *
 * 1. Controle de estado, imutabilidade.
 * 2. Renderização condicional.
 * 3. Manipulação de eventos.
 *
 * Hooks utilizados
 *
 * 1. useState
 * 2. useRef
 */

export function TodoList() {
  const [todos, setTodos] = useState<Todo[]>([])
  const taskRef = useRef<HTMLInputElement>(null)

  const completedTodos = todos.filter((todo) => !!todo.doneAt)

  function handleCreateTodo(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const task = taskRef.current?.value

    if (task) {
      const now = Date.now()

      const newTodo: Todo = {
        id: String(now),
        createdAt: new Date(now),
        doneAt: null,
        task,
      }

      setTodos((state) => [newTodo, ...state])
      taskRef.current.value = ''
    }
  }

  function handleUpdateTodo(todoId: string) {
    setTodos((state) => {
      return state.map((todo) =>
        todo.id !== todoId
          ? todo
          : { ...todo, doneAt: todo.doneAt ? null : new Date() },
      )
    })
  }

  function handleDeleteTodo(todoId: string) {
    setTodos((state) => {
      return state.filter((todo) => todo.id !== todoId)
    })
  }

  return (
    <TodoListContainer>
      {/* Header */}
      <TodoListHeader>
        <img src={logo} alt="Um foguete ao lado da escrita 'todo'" />
      </TodoListHeader>

      <TodoListContent>
        {/* Search Form */}
        <SearchForm onSubmit={handleCreateTodo}>
          <input
            type="text"
            name="task"
            placeholder="Adicione uma nova tarefa"
            ref={taskRef}
          />
          <button type="submit">
            Criar
            <PlusCircle size={18} />
          </button>
        </SearchForm>

        <section>
          {/* Toolbar */}
          <TodoListToolbar>
            <span>
              Tarefas criadas
              <TodoListToolbarCounter>{todos.length}</TodoListToolbarCounter>
            </span>
            <span>
              Concluidas
              <TodoListToolbarCounter>
                {completedTodos.length} de {todos.length}
              </TodoListToolbarCounter>
            </span>
          </TodoListToolbar>

          {/* Todo Table */}
          {todos.length ? (
            <TodoTableContainer>
              <table>
                <tbody>
                  {todos.map((todo) => {
                    const completed = !!todo.doneAt

                    return (
                      <TodoTableRow
                        key={`todo-${todo.id}`}
                        completed={completed}
                      >
                        <td>
                          <Checkbox
                            checked={completed}
                            onClick={() => handleUpdateTodo(todo.id)}
                          />
                        </td>
                        <td>{todo.task}</td>
                        <td>
                          <button
                            onClick={() => handleDeleteTodo(todo.id)}
                            title="Excluir tarefa"
                          >
                            <Trash />
                          </button>
                        </td>
                      </TodoTableRow>
                    )
                  })}
                </tbody>
              </table>
            </TodoTableContainer>
          ) : (
            <EmptyList />
          )}
        </section>
      </TodoListContent>
    </TodoListContainer>
  )
}
