import {createGlobalStyle} from 'styled-components';

const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    list-style: none;
    box-sizing: border-box;
  };

  body{
    background-color: #03091F;
    font-family: 'Nunito', sans-serif;
    font-size: 1.2rem;
    font-weight: 400;
    color: white;
  };
  
  a{
    color: inherit;
    font-family: inherit;
    text-decoration: none;
  };

  p{
    line-height: 2rem;
  };
  
`;

export default GlobalStyles;