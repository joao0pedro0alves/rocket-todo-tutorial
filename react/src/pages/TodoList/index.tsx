import { PlusCircle, Trash } from 'phosphor-react'

import logo from '@/assets/logo.svg'

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
import { Checkbox } from '@/components/Checkbox'

export function TodoList() {
  return (
    <TodoListContainer>
      {/* Header */}
      <TodoListHeader>
        <img src={logo} alt="Um foguete ao lado da escrita 'todo'" />
      </TodoListHeader>

      <TodoListContent>
        {/* Search Form */}
        <SearchForm>
          <input type="text" placeholder="Adicione uma nova tarefa" />
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
              <TodoListToolbarCounter>0</TodoListToolbarCounter>
            </span>
            <span>
              Concluidas
              <TodoListToolbarCounter>0 de 0</TodoListToolbarCounter>
            </span>
          </TodoListToolbar>

          {/* Todo Table */}
          <TodoTableContainer>
            <table>
              <tbody>
                <TodoTableRow completed>
                  <td>
                    <Checkbox defaultChecked />
                  </td>
                  <td>Desenvolver um todo list em react</td>
                  <td>
                    <button title="Excluir tarefa">
                      <Trash />
                    </button>
                  </td>
                </TodoTableRow>
                <TodoTableRow completed={false}>
                  <td>
                    <Checkbox defaultChecked={false} />
                  </td>
                  <td>Fazer um café</td>
                  <td>
                    <button title="Excluir tarefa">
                      <Trash />
                    </button>
                  </td>
                </TodoTableRow>
              </tbody>
            </table>
          </TodoTableContainer>
        </section>
      </TodoListContent>
    </TodoListContainer>
  )
}
