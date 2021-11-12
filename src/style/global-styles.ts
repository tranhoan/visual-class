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
    --additionalOrange: #f2b279;
    --additionalOrange2: #D97904;
    --additionalOrange3: #FF914D;
    --darkGreen: #475942;
    --additionalBlue: #78A3FF;
    --successGreenHover: rgba(49, 191, 110, 0.2);
    --errorRedHover: rgba(217, 123, 115, 0.3);
    --middleGrey: #cbcbcb;
    --shadow-color: 0deg 0% 0%;
    --toolbar-xaxis: -50%;
    height: 100%;
    font-size: 62.5%;
    body, html, #root{ 
        height: 100%;
    }
    body {
        margin: 0;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;

    }
    body, button {
        font-family: 'Sora', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen','Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
        letter-spacing: 0.1px;
    }
    #root{
        /* overflow: hidden; */
    }
}
`;

export default GlobalStyle;
