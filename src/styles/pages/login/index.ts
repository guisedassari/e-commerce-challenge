import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: var(--background);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 30rem;
  background: #fff;
  padding: 15px;

  img {
    width: 100%;
    margin: 0.93rem 0 0.93rem 0;
  }

  input {
    width: 100%;
    padding: 0 1.5rem;
    background: #e7e9ee;
    border: 1px solid #d7d7d7;
    height: 4rem;
    font-size: 1rem;
    font-weight: 400;
    margin-bottom: 1rem;

    &::placeholder {
      color: (--text-body);
    }

    &:focus,
    &:focus-visible {
      border: 1px solid var(--elementColor);
    }

    & + input {
      margin-top: 1rem;
    }
  }

  button[type="submit"] {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    background: var(--backgroundButton);
    color: #fff;
    border: 0;
    border-radius: 0.25rem;
    font-size: 1rem;
    margin-top: 1.5rem;
    transition: filter 0.2s;
    font-weight: 600;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;
