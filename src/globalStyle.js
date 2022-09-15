import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  body {
    color: ${props => (props.redColor ? '#F55353' : '#222E2E ')};
    background-color: ${props => props.background };
    margin: 0 auto;
    padding: 0;
    box-sizing: border-box;
  }

  
`