import React from 'react';
import { useNavigate } from 'react-router-dom';

import * as S from './styles';
import Error404Spaceship from '../../assets/error404-spaceship.svg';
import GoBackArrow from '../../assets/go-back-arrow.svg';

function Page404() {
  const navigate = useNavigate();

  function goBack() {
    navigate(-1);
  }

  return (
    <S.Container>
      <S.Title>Oops!</S.Title>
      <S.SubTitle>Página não encontrada</S.SubTitle>

      <S.ImageContainer>
        <Error404Spaceship />
      </S.ImageContainer>

      <S.GoBackButton onClick={goBack}>
        <GoBackArrow />
        <span>Voltar</span>
      </S.GoBackButton>
    </S.Container>
  );
}

export default Page404;
