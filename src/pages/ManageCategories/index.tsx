import React from 'react';

import * as S from './styles';
import PenIcon from '../../assets/pen-icon.svg';

import Title from '../../components/Title';
import MobileMenu from '../../components/MobileMenu';

function ManegeCategories() {
  return (
    <>
      <MobileMenu />
      <S.Container>
        <S.Header>
          <S.TitleContainer>
            <Title>Categorias</Title>
            <PenIcon />
          </S.TitleContainer>
        </S.Header>
      </S.Container>
    </>
  );
}

export default ManegeCategories;
