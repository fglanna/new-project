import { MdEmail, MdLock } from "react-icons/md";
import { useNavigate } from "react-router";
import { Button } from "../../components/Button";
import Header from "../../components/Header";
import { Input } from "../../components/Input";

import {
  Column,
  Container,
  CriarText,
  EsqueciText,
  Row,
  SubtitleLogin,
  Title,
  TitleLogin,
  Wrapper,
} from "./style";

export const Login = () => {
  const navigate = useNavigate();

  const handleClickSignIn = () => {
    navigate("/feed");
  };

  return (
    <>
      <Header />
      <Container>
        <Column>
          <Title>
            A plataforma para você aprender com experts, dominar as principais
            tecnologias e entrar mais rápido nas empresas mais desejadas.
          </Title>
        </Column>
        <Column>
          <Wrapper>
            <TitleLogin>Faça seu Cadastro</TitleLogin>
            <SubtitleLogin>login in and make the change.</SubtitleLogin>
            <form>
              <Input placeholder="Email" leftIcon={<MdEmail />} />
              <Input
                type="password"
                placeholder="Password"
                leftIcon={<MdLock />}
              />
              <Button
                title="Entrar"
                variant="Secondary"
                onClick={handleClickSignIn}
                type="button"
              />
            </form>
            <Row>
              <EsqueciText>Esqueci minha senha</EsqueciText>
              <CriarText>Criar Conta</CriarText>
            </Row>
          </Wrapper>
        </Column>
      </Container>
    </>
  );
};
