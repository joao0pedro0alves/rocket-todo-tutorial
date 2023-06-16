import styled from 'styled-components'

export const EmptyListContainer = styled.div`
  padding: 4rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-top: 1px solid ${(props) => props.theme.colors['gray-400']};

  img {
    margin-bottom: 1rem;
  }
`
