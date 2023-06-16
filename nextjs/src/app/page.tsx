import { EmptyList } from '@/components/EmptyList'
import { Header } from '@/components/Header'
import { PlusCircle, Trash } from 'lucide-react'

export default function RocketTodo() {
  return (
    <div>
      <Header />

      <main className="mx-auto -mt-6 mb-8 w-screen max-w-[736px] px-4">
        <form className="mb-16 flex items-center gap-2">
          <input
            type="text"
            name="task"
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

        <section>
          <div className="mb-4 flex items-center justify-between ">
            <span className="flex items-center gap-2 text-sm font-bold text-blue-500">
              Tarefas criadas
              <span className="flex h-5 items-center rounded-full bg-gray-400 px-2 py-[2px] text-xs text-gray-100">
                0
              </span>
            </span>
            <span className="flex items-center gap-2 text-sm font-bold text-purple-500">
              Concluidas
              <span className="flex h-5 items-center rounded-full bg-gray-400 px-2 py-[2px] text-xs text-gray-100">
                0 de 0
              </span>
            </span>
          </div>

          <EmptyList />

          <div className="overflow-auto">
            <table className="w-full border-separate border-spacing-0">
              <tbody>
                <tr className="mb-3 block rounded-lg border border-gray-400 shadow-todo">
                  <td className="bg-gray-500 px-3 py-4 pl-4">
                    <input type="checkbox" name="" id="" />
                  </td>
                  <td className="w-full bg-gray-500 px-3 py-4 text-gray-100">
                    Desenvolver o react todo com NextJs
                  </td>
                  <td className="bg-gray-500 px-3 py-4 pr-4">
                    <button>
                      <Trash size={18} />
                    </button>
                  </td>
                </tr>

                <tr className="mb-3 block rounded-lg border border-gray-400 line-through shadow-todo">
                  <td className="bg-gray-500 px-3 py-4 pl-4">
                    <input type="checkbox" name="" id="" />
                  </td>
                  <td className="w-full bg-gray-500 px-3 py-4 text-gray-300">
                    Desenvolver o react todo com NextJs
                  </td>
                  <td className="bg-gray-500 px-3 py-4 pr-4">
                    <button>
                      <Trash size={18} />
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </div>
  )
}
