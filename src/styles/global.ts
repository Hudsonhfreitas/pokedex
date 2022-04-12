import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    font-family: 'Inter', sans-serif;
}

html {
    font-size: 62.5%;
}

.container {
    width: 100%;
    max-width: 124.6rem;
    margin: 0 auto;
    padding: 0px 1.5rem;
}

button {
    cursor: pointer;
    border: 0 ;
    background-color: transparent;
    &[disabled] {
        cursor: not-allowed ;
    }
}

img {
    display: block;
    max-width: 100%;
}

a {
    text-decoration: none;
    display: block;
}

h1, h2, h3 {
    font-family: 'Montserrat';
}

h1 {
    font-size: 6.4rem;
    line-height: 7.8rem;
    font-weight: 700;
}

h2 {
    font-size: 3.2rem;
    line-height: 3.9rem;
    font-weight: 700; 
}

h3 {
    font-weight: 600;
    font-size: 1.8rem;
    line-height: 150%;
}

` 