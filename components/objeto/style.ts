import styled from "styled-components";

const Container = styled.div`
  position: flex;
  width: 20vw;
  height: 150vh;
  justify-content: center;
  color: #fff;
  background-image: url("./bg.jpg");
`;


const Header = styled.div`
  position: absolute;
  top: 5rem;
  left: 0;
  z-index: 9;

  width: 100%;
  font-size: 4rem;

  @media (max-width: 480px) {
    font-size: 2.5rem;
  }

  h1 {
    font-size: inherit;
  }
  span {
    background: linear-gradient(orange, red);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

const BodyModel = styled.div`
padding-left: 400px;
  position: flex;
  inset: 0;
  justify-content: center;
  height: 200px;
  width: 250px;

  cursor: pointer;
  background-color: transparent;
`;

const Footer = styled.div`
  position: absolute;
  bottom: 5rem;
  z-index: 9;

  width: 100%;
`;

export { Container, Header, BodyModel, Footer };
