import { ThemeProvider } from 'styled-components'
import { TodoList } from './pages/TodoList'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <TodoList />
    </ThemeProvider>
  )
}
