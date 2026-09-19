import React from "react";
import { FiThumbsUp } from "react-icons/fi";

import {
  CardContainer,
  Content,
  HasInfo,
  ImageBackground,
  PostInfo,
  UserPicture,
  UserInfo,
} from "./style";

export const Card = () => {
  return (
    <CardContainer>
      <ImageBackground src="https://hermes.dio.me/files/assets/0b622adc-5e89-4daa-b033-db4959858872.png" />
      <Content>
        <UserInfo>
          <UserPicture src="https://avatars.githubusercontent.com/u/132150354?v=4&size=64" />
          <div>
            <h4>Flávio Lanna</h4>
            <p>Há 10 minutos</p>
          </div>
        </UserInfo>
        <PostInfo>
          <h4>Projeto para curso de HTML e CSS</h4>
          <p>
            Projeto feito curso de HTML e CSS no Bootcamp DIO do Global
            avanade...
            <strong>Saiba Mais</strong>
          </p>
        </PostInfo>
        <HasInfo>
          <h4>#HTML #CSS #JavaScrip</h4>
          <p>
            <FiThumbsUp /> 10
          </p>
        </HasInfo>
      </Content>
    </CardContainer>
  );
};
