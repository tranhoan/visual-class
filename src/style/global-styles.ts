import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
:root {
    height: 100%;
    body, html, #root, .App, .App div { 
        height: 100%;
    }
}
`;

export default GlobalStyle;
