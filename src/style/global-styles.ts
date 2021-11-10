import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
:root {
    --primaryBlue: #023373;
    --secondaryBlue: #021373;
    --tertiaryBlue: #022873;
    --backgroundBlue: #f0f3fb;
    --errorRed: #f1554c;
    --successGreen: #30bf6e;
    --textGrey: #707070;
    --textBlack: #0d0000;
    --backgroundGrey: #d9d9d9;
    --additionalWhite: #ffffff;
    --additionalGreen: #89d9ab;
    --additionalRed: #d97b73;
    --additionalGrey: #b7b7b7;
    --successGreenHover: rgba(49, 191, 110, 0.2);
    --errorRedHover: rgba(217, 123, 115, 0.3);
    --middleGrey: #cbcbcb;
    --shadow-color: 0deg 0% 0%;
    height: 100%;
    font-size: 62.5%;
    body, html, #root{ 
        height: 100%;
    }
    body {
        margin: 0;
        font-family: 'Sora', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen','Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;

    }
    #root{
        /* overflow: hidden; */
    }
}
`;

export default GlobalStyle;
