import styled from "styled-components";
import { transparentize } from "polished";

export const Container = styled.form`
  h2 {
    color: #FFA500;
    font-size: 1.5rem;
    margin-bottom: 2rem;    
  }

  input {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    border-radius: 0.25rem;

    border: 1px solid #0D1117;
    background: #e7e9ee;

    font-weight: 400;
    font-size: 1rem;

    &::placeholder {
      color: var(--text-body);
    }

    & + input {
      margin-top: 1rem;
    }
  }

  button[type="submit"] {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    background:  #FFA500;
    color: #fff;
    border-radius: 0.25rem;
    border: 0;
    font-size: 1rem;
    font-weight: 600;
    margin-top: 1.5rem;

    transition: filter .25s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`

export const TransactionTypeContainer = styled.div`
  margin: 1rem 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;

  
` 

interface RadioBoxProps {
  isActive: boolean;
  activeColor: 'green' | 'red';
}

const colors = {
  green: "#33CC95",
  red: "#E52E4D"
}

export const RadioBox = styled.button<RadioBoxProps>`
    height: 4rem;
    border: 1px solid #d3d3d3;
    border-radius: .25rem;

    background: ${(props) => props.isActive ? transparentize(0.8, colors[props.activeColor]) : 'transparent'};

    display: flex;
    align-items: center;
    justify-content: center;
    
    
    span {
      display: inline-block;
      margin-left: 1rem;
      font-size: 1.1rem; 
      font-weight: 600;
      color: #fff;
;
    }

    transition: filter .25s;

    &:hover {
      filter: brightness(0.9);
    }
`