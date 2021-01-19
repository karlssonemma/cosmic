import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        
        font-family: sans-serif;
    }

    main {
        margin: 0 auto;
        padding: 2em 4em;
        width: 80vw;
        background-color: lightgreen;

        display: flex;
        flex-direction: column;
        align-items: center;
    }
`;

export default GlobalStyle;