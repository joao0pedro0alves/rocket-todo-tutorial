import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${(props) => props.theme.colors['blue-700']};
  }

  body {
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;

    background: ${(props) => props.theme.colors['gray-600']};
    color: ${(props) => props.theme.colors['gray-300']};
  }
  
  body, input, textarea, button {
    font-family: 'Inter', sans-serif;
    line-height: 140%;
    font-weight: 400;
    font-size: 1rem;
  }
`
