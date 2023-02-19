import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root{
        --red: #e52e4d;
        --blue: #5429cc;
        /* --green: #33cc95; */
        --green: #2EA043;


        --blue-light: #6933ff;

        --text-title: #363f5f;
        --text-body: #969cb3;
        
        
        --background: #f0f2f5;
        --shape: #ffffff;
    }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  // font-size: 16px; (Desktop)

  html {
    @media (max-width: 1080px){
        font-size: 93.75%; // 15px
    }

    @media (max-width: 720px){
        font-size: 87.5%; // 14px
    }
  }

  // REM = 1rem = font-size

  body {
    background: var(--background);
    --webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }
  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }

  .react-modal-overlay{
    background: rgba(0, 0, 0, 0.5);

    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .react-modal-content{
    width: 100%;
    max-width: 576px;
    background: #0D1117;  //var(--background)
    padding: 3rem;
    position: relative; 
    border-radius: 0.24rem; 

  }

  .react-modal-close {
    width: 2.375rem;
    position: absolute;
    right: 1.5rem;
    top: 1.5rem;
    border: 0;
    background: transparent;
  }

  .svg {
    color: #c3c3c3;

    transition: color 0.25s ease-out;

    &:hover {
      color:#FFA500;
    }
  }


`