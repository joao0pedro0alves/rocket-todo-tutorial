'use client'

import { PlusCircle } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { FormEvent, useRef } from 'react'

export function NewTodoForm() {
  const { refresh } = useRouter()
  const titleRef = useRef<HTMLInputElement>(null)

  async function createTodo(title: string) {
    await fetch('http://localhost:3333/todos', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        title,
        completed: false,
      }),
    })

    refresh()
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const todoTitle = titleRef.current?.value

    if (todoTitle) {
      createTodo(todoTitle)
      titleRef.current.value = ''
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mb-16 flex items-center gap-2">
      <input
        ref={titleRef}
        type="text"
        name="title"
        placeholder="Adicione uma nova tarefa"
        className="h-14 flex-1 rounded-lg border border-gray-700 bg-gray-500 p-4 text-gray-100 placeholder:text-gray-300 focus:outline-0 focus:ring focus:ring-blue-700"
      />
      <button
        type="submit"
        className="flex items-center gap-2 rounded-lg bg-blue-700 p-4 text-sm font-bold text-gray-100 transition-opacity hover:opacity-80"
      >
        Criar
        <PlusCircle size={16} />
      </button>
    </form>
  )
}
