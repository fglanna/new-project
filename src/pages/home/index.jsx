
import { useNavigate } from 'react-router'

import { Button } from "../../components/Button";
import  Header  from "../../components/Header";
import bannerImage from '../../assets/bannerImage.png'

import { Container, TextContent, Title, TitleHighLight } from './style';

export const Home = () => {
  const navigate = useNavigate();

  const handleClickSignIn = () => {
    navigate('/Login')
  }
 
  return (
    <>
      <Header />
      <Container>
        <div>
          <Title>
            <TitleHighLight>
            Implemente <br />
            </TitleHighLight>
            O seu futuro global agora!
          </Title>
          <TextContent>
            Domine as tecnologias utilizadas pelas empresas mais inovadoras do mundo e encare seu novo desafio profissional, evoluindo em comunidade com os melhores experts.
          </TextContent>
          <Button title="Começar agora" variant="secondary" onClick={handleClickSignIn} />
        </div>
        <div>
          <img src={bannerImage} alt="Imagem principal" />
        </div>
      </Container>
     
    </>
  );
};
