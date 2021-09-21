import styled from "styled-components";

export const Container = styled.div`
  max-width: 1120px;
  margin: 3.12rem auto;
`;

export const ProductList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  list-style: none;

  @media (max-width: 980px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 550px) {
    grid-template-columns: repeat(1, 1fr);
  }

  li {
    display: flex;
    flex-direction: column;
    background: var(--backgroundBox);
    border-radius: 4px;
    padding: 20px;

    p.stock {
      text-align: right;
      font-size: 0.75rem;
      color: var(--colorTextDark);
      padding-bottom: 0.6rem;
    }

    div.container-img {
      width: 100%;
      height: 17rem;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
    }

    img {
      align-self: center;
      max-width: 20rem;
      width: 100%;
      max-height: 17rem;
    }

    > strong {
      font-size: 16px;
      line-height: 20px;
      color: #333;
      margin-top: 5px;
    }

    > span {
      font-size: 21px;
      font-weight: bold;
      margin: 5px 0 20px;
    }

    button {
      background: var(--backgroundButton);
      color: var(--colorTextLight);
      border: 0;
      border-radius: 4px;
      overflow: hidden;
      margin-top: auto;
      display: flex;
      align-items: center;
      transition: filter 0.2s;

      &:hover {
        filter: brightness(0.9);
      }

      div {
        display: flex;
        align-items: center;
        padding: 12px;
        background: rgba(0, 0, 0, 0.1);

        svg {
          margin-right: 5px;
        }
      }

      span {
        flex: 1;
        text-align: center;
        font-weight: bold;
      }
    }
  }
`;
