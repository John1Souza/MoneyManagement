import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 2rem;
    margin-top: -8rem;

    div {
      background: #ffffff;
      padding: 1.5rem 2rem;
      border-radius: .25rem;
      color: var(--text-title);

      header {
        display: flex;
        align-items: center;
        justify-content: space-between;
      }

      strong {
        display: block;
        margin-top: 1rem;
        font-size: 2rem;
        font-weight: 500;
        line-height: 3rem;
      }

      &.highlight-background {
        background: #FFA500;
        color: #fff;

        img {
          color: #fff;
        }
      }
    }




  img  {
    width: 2rem;
  }
`;
