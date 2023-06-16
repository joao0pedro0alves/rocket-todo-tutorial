import Image from 'next/image'
import clipboardImg from '@/assets/clipboard.png'

export function EmptyList() {
  return (
    <div className="flex flex-col items-center justify-center border-t border-gray-400 px-8 py-16">
      <Image src={clipboardImg} alt="" className="mb-4" />
      <strong>Você ainda não tem tarefas cadastradas</strong>
      <span>Crie tarefas e organize seus itens a fazer</span>
    </div>
  )
}
