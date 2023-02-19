import styled from "styled-components";

export const Container = styled.header`
  background: #0D1117;
`;

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;

  padding: 2rem 1rem 12rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    font-size: 1rem;
    color: #fff;
    background: #FFA500;
    border: 0;
    padding: 0 2rem;
    border-radius: .25rem;
    height: 3rem;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(.9);
    }

  }


  img {
    width: 4rem;
  }
  h1 {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.25rem;
    color: #FFA500;
  }
`;
