import styled, { css } from 'styled-components'

export const TodoListContainer = styled.div``

export const TodoListHeader = styled.header`
  background-color: ${(props) => props.theme.colors['gray-700']};
  height: 200px;

  display: flex;
  justify-content: center;

  img {
    max-width: 126px;
  }
`

export const TodoListContent = styled.main`
  width: calc(100vw - 2rem);
  max-width: 736px;
  margin: -1.6rem auto 2rem;
`

export const SearchForm = styled.form`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 4rem;

  input {
    flex: 1;
    padding: 1rem;
    height: 54px;
    background-color: ${(props) => props.theme.colors['gray-500']};
    border: 1px solid ${(props) => props.theme.colors['gray-700']};
    border-radius: 8px;
  }

  button {
    cursor: pointer;
    padding: 1rem;

    display: flex;
    align-items: center;
    gap: 0.5rem;

    border: 1px solid transparent;
    background-color: ${(props) => props.theme.colors['blue-700']};
    color: ${(props) => props.theme.colors['gray-100']};
    border-radius: 8px;

    font-size: ${(props) => props.theme.typography.size.sm};
    font-weight: bold;

    &:hover {
      opacity: 0.8;
      transition: 0.2s ease;
    }
  }
`

export const TodoListToolbar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2rem;

  span {
    font-weight: bold;
    font-size: ${(props) => props.theme.typography.size.sm};
    color: ${(props) => props.theme.colors['blue-500']};

    display: inline-flex;
    align-items: center;
    gap: 0.5rem;

    &:last-child {
      color: ${(props) => props.theme.colors['purple-500']};
    }
  }
`

export const TodoListToolbarCounter = styled.div`
  font-size: ${(props) => props.theme.typography.size.xs};
  color: ${(props) => props.theme.colors['gray-100']};

  background-color: ${(props) => props.theme.colors['gray-400']};
  border-radius: 999px;
  padding: 2px 8px;
  height: 19px;

  display: flex;
  align-items: center;
`

export const TodoTableContainer = styled.div`
  overflow: auto;

  table {
    width: 100%;
    border-collapse: separate;
    border-spacing: 0;
  }
`

interface TodoTableRowProps {
  completed: boolean
}

export const TodoTableRow = styled.tr<TodoTableRowProps>`
  display: block;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.06);
  border: 1px solid ${(props) => props.theme.colors['gray-400']};
  border-radius: 8px;
  margin-bottom: 0.75rem;

  td {
    padding: 1rem 0.75rem;
    background-color: ${(props) => props.theme.colors['gray-500']};
    color: ${(props) => props.theme.colors['gray-100']};
  }

  td:first-child {
    padding-left: 1rem;
  }

  td:nth-child(2) {
    width: 100%;
  }

  td:last-child {
    padding-right: 1rem;

    button {
      cursor: pointer;
      background-color: transparent;
      border: 0;
      color: ${(props) => props.theme.colors['gray-300']};
    }
  }

  ${(props) => {
    if (props.completed) {
      return css`
        td {
          color: ${(props) => props.theme.colors['gray-300']};
          text-decoration: line-through;
        }
      `
    }
  }}
`
