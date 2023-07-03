import React from 'react';

import * as S from './styles';
import PenIcon from '../../assets/pen-icon.svg';

import Title from '../../components/Title';
import MobileMenu from '../../components/MobileMenu';
import CategoriesSection from '../../components/CategoriesSection';
import ProfilePhoto from '../../components/ProfilePhoto';

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

          <ProfilePhoto />
        </S.Header>

        <S.MainContent>
          <CategoriesSection />
        </S.MainContent>
      </S.Container>
    </>
  );
}

export default ManegeCategories;
