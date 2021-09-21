import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root {
    
    --cyan-300: #69E9F5;
    --cyan-400: #21D2EE;
    --cyan-500: #05B6D4;
    --cyan-700: #0DA6E8;
    
    --purple-500: #40356F;

    --background: #F3F4F6;
    
    --backgroundButton: #05B6D4;
    --colorTextDark: #333333;
    --colorTextLight: #F3F4F6;
    --backgroundBox: #fff;
    --elementColor: #0DA6E8;
}

html { 
    @media (max-width: 1080px){
        font-size: 93.75%;
    }
    @media (max-width: 720px){
        font-size: 87.5%;
    }
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
body { 
    background: var(--background);
    -webkit-font-smoothing: antialiased;
    
}

body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
}

h1, h2, h3, h4, h5, h6, strong {
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
}

button {
    cursor: pointer;
}

[disabled] {
    cursor: not-allowed;
    opacity: 0.6;
}
`;
