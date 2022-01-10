import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    :root {
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
        @media (max-width: 940px) {
            overflow: visible;
        }
    }

    a{
        color: inherit;
        text-decoration:none;
    }
`;

export default GlobalStyle;
