import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

html,body{
  font-family: 'Josefin Sans', sans-serif;
  font-family: 'Bonheur Royale', cursive;
  text-align: center;
}

*,*::after,*::before{
    margin: 0;
  padding: 0;
  box-sizing: border-box;
  transition: 300ms;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
  "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: rgb(255, 255, 255);
  background-color: #040303d5;
background-size: cover;
}

input {
  width: 15rem;
  height: 1.8rem;
  border-radius: 0.5rem;
  outline: none;
  text-align: center;
}

label {
  color: #ffe281;
}

span {
  color: #ffe281;
}

h1 {
  opacity: 0.2;
  font-size: 4rem;
}


h2 {
  color: #ffd8ca;

};

button {
  width: 10rem;
  height: 2rem;
  border-radius: 1rem;
  background-color: rgba(255, 255, 255, 0.3);
  color: #ffffff;
  border: 2px solid white;
  cursor: pointer;
}

button:active {
  border: 2px solid orange;
}

ul {
  list-style: none;
}

Link, a {
  text-decoration: none;
  color: #55afdf;
}

svg {
  fill: #ffffff;
  margin: 1rem;
}

`;
