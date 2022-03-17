import { createGlobalStyle } from 'styled-components';
import montserrat from 'fonts/Montserrat-VariableFont_wght.woff2';

const GlobalStyle = createGlobalStyle`

    @font-face {
        font-family: 'Montserrat';
        src: url("${montserrat}") format('woff2');
        font-display: swap;
    }

    *, *::before, *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;

        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    body {
        font-family: "Montserrat", sans-serif;
        font-weight: 400;
        
        color: #444444;
        background-color: #F4F4F4;
    }

    #root {
        width: 100vw;
        height: 100vh;
    }

    button {
        background: none;
        border: none;
    }

`;

export default GlobalStyle;
