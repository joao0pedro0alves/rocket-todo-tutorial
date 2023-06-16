import { EmptyListContainer } from './styles'
import clipboardImg from '@/assets/clipboard.png'

export function EmptyList() {
  return (
    <EmptyListContainer>
      <img src={clipboardImg} alt="" />
      <strong>Você ainda não tem tarefas cadastradas</strong>
      <span>Crie tarefas e organize seus itens a fazer</span>
    </EmptyListContainer>
  )
}
