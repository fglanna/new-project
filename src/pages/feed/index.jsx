import Header from "../../components/Header";
import { Card } from "../../components/Card";
import { UserInfo } from "../../components/UserInfo";
import { Container, Column, Title, TitleHighLight } from "./style";


export const Feed = () => {
  return (
    <>
      <Header autenticado={true}/>
      <Container>
        <Column flex={3}>
        <Title>Feed</Title>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </Column>
        <Column flex={1}>
          <TitleHighLight># RANKING TOP 5 DA SEMANA</TitleHighLight>
          <UserInfo
            percentual={25}
            nome="Flavio Lanna"
            image="https://avatars.githubusercontent.com/u/132150354?v=4&size=64"
            />
          <UserInfo
            percentual={95}
            nome="Flavio Lanna"
            image="https://avatars.githubusercontent.com/u/132150354?v=4&size=64"
            />
          <UserInfo
            percentual={75}
            nome="Flavio Lanna"
            image="https://avatars.githubusercontent.com/u/132150354?v=4&size=64"
            />
          <UserInfo
            percentual={15}
            nome="Flavio Lanna"
            image="https://avatars.githubusercontent.com/u/132150354?v=4&size=64"
            />
          <UserInfo
            percentual={45}
            nome="Flavio Lanna"
            image="https://avatars.githubusercontent.com/u/132150354?v=4&size=64"
            />
        </Column>
      </Container>
    </>
  );
};
