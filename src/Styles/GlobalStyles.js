import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    :root {
    --purple-primary: #554DDE;
    --accent-pink: #F44E77;
    --neutral-light: #F2F6FF;
    --lavender-secondary: #6A6D9E;
    --semi-brown: rgba(86, 66, 62, 0.98);
    --semi-brown-hover: rgba(86, 66, 62, 0.8);
    --border-colour: #CAB6F1;
    --cool-blue-hover: #88baff;

    --outerlayout-bg-color: hsl(54, 63%, 91%);
    --innerlayout-bg-color: #FFFEF6;
    --green-color: hsla(158, 99%, 43%, 1);
    --cool-blue: #D6FFFC;



    }

    *{
        margin: 0;
        padding: 0;
        list-style: None;
        box-sizing: border-box;
        font-family: 'Nunito', sans-serif;
    }
    
    html{
        margin: 0;
        padding: 0;
    }
    body{
        color: black;
        font-size: 1.4rem;
        overflow: hidden;
    }

    a{
        color: inherit;
        text-decoration:none;
    }
`;

export default GlobalStyle;
