'use client'

import { useRouter } from 'next/navigation'
import { Trash } from 'lucide-react'
import { useState, useTransition } from 'react'
import { Checkbox } from '../Checkbox'

interface TodoData {
  id: number
  title: string
  completed: boolean
}

interface TodoProps {
  data: TodoData
}

async function toogleTaskCompleted(
  todo: TodoData,
  newCompleted: boolean,
  refresh: () => void,
) {
  await fetch(`http://localhost:3333/todos/${todo.id}`, {
    method: 'PUT',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({
      title: todo.title,
      completed: newCompleted,
    }),
  })

  refresh()
}

async function deleteTodo(todoId: number, refresh: () => void) {
  await fetch(`http://localhost:3333/todos/${todoId}`, {
    method: 'DELETE',
  })

  refresh()
}

export function Todo({ data: todo }: TodoProps) {
  const router = useRouter()
  const [isPending, startTransition] = useTransition()
  const [isLoading, setIsLoading] = useState(false)

  // Create inline loading UI
  const isMutating = isLoading || isPending

  function refreshWithTransition() {
    startTransition(() => {
      // Refresh the current route and fetch new data from the server without
      // losing client-side browser or React state.
      router.refresh()
    })
  }

  async function handleToogleTaskCompleted() {
    setIsLoading(true)

    await toogleTaskCompleted(todo, !todo.completed, refreshWithTransition)

    setIsLoading(false)
  }

  async function handleDeleteTodo() {
    setIsLoading(true)

    await deleteTodo(todo.id, refreshWithTransition)

    setIsLoading(false)
  }

  return (
    <tr
      className={`mb-3 block rounded-lg border border-gray-400 bg-gray-500 shadow-todo ${
        isMutating && 'opacity-80'
      }`}
    >
      <td className="px-3 py-4 pl-4">
        <Checkbox
          checked={todo.completed}
          onClick={handleToogleTaskCompleted}
          disabled={isMutating}
        />
      </td>

      <td
        className={`w-full px-3 py-4 ${
          todo.completed ? 'text-gray-300 line-through' : 'text-gray-100'
        }`}
      >
        {todo.title}
      </td>

      <td className="px-3 py-4 pr-4">
        <button onClick={handleDeleteTodo}>
          <Trash size={18} />
        </button>
      </td>
    </tr>
  )
}
