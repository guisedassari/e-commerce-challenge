import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  background: var(--backgroundBox);
`;

export const Logo = styled.img`
  max-width: 30.5rem;
  width: 100%;
  cursor: pointer;
`;

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 560px) {
    flex-direction: column;
  }
`;

export const Cart = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: var(--purple-500);
  font-size: 1.12rem;
  cursor: pointer;

  span {
    margin-bottom: 20px;
    font-size: 0.75rem;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: var(--backgroundButton);
    color: var(--colorTextDark);
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
