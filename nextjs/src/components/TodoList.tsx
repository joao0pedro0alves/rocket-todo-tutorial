import { EmptyList } from '@/components/EmptyList'
import { Todo } from './client/Todo'

type GetTodosResponse = {
  id: number
  title: string
  completed: boolean
}[]

async function getTodos() {
  try {
    const response = await fetch('http://127.0.0.1:3333/todos', {
      cache: 'no-store',
    })
    const todos: GetTodosResponse = await response.json()
    return todos
  } catch (error) {
    console.log(error)

    return []
  }
}

export async function TodoList() {
  const todos = await getTodos()
  const completedTodos = todos.filter((todo) => todo.completed)

  return (
    <section>
      <div className="mb-4 flex items-center justify-between ">
        <span className="flex items-center gap-2 text-sm font-bold text-blue-500">
          Tarefas criadas
          <span className="flex h-5 items-center rounded-full bg-gray-400 px-2 py-[2px] text-xs text-gray-100">
            {todos.length}
          </span>
        </span>
        <span className="flex items-center gap-2 text-sm font-bold text-purple-500">
          Concluidas
          <span className="flex h-5 items-center rounded-full bg-gray-400 px-2 py-[2px] text-xs text-gray-100">
            {completedTodos.length} de {todos.length}
          </span>
        </span>
      </div>

      {todos.length ? (
        <div className="overflow-auto">
          <table className="w-full border-separate border-spacing-0">
            <tbody>
              {todos.map((todo) => {
                return <Todo key={todo.id} data={todo} />
              })}
            </tbody>
          </table>
        </div>
      ) : (
        <EmptyList />
      )}
    </section>
  )
}
