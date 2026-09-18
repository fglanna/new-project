import React from "react";
import { Button } from "../Button";
import logo from "../../assets/logo_dio.png";
import {
  BuscarInputContainer,
  Container,
  Input,
  Menu,
  MenuRight,
  Row,
  Wrapper,
} from "./style";

export default function Header() {
  return (
    <Wrapper>
      <Container>
        <Row>
          <img src={logo} alt="Logo da Dio" />
          <BuscarInputContainer>
            <Input placeholder="Buscar..." />
          </BuscarInputContainer>
          <Menu href="#">Live Code</Menu>
          <Menu href="#">Global</Menu>
        </Row>
        <Row>
          <MenuRight href="#">Home</MenuRight>
          <Button title="Entrar" />
          <Button title="Cadastrar" />
        </Row>          
      </Container>
    </Wrapper>
  );
}
