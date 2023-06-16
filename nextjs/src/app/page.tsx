import { NewTodoForm } from '@/components/client/NewTodoForm'
import { TodoList } from '@/components/TodoList'

export default function RocketTodo() {
  return (
    <main className="mx-auto -mt-7 mb-8 w-screen max-w-[736px] px-4">
      <NewTodoForm />

      {/* @ts-expect-error Server Component */}
      <TodoList />
    </main>
  )
}
