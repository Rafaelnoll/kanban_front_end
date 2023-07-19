import React from 'react';

import * as S from './styles';

import MobileMenu from '../../components/MobileMenu';
import CategoriesSection from '../../components/CategoriesSection';
import BaseTemplate from '../../components/BaseTemplate';
import SideMenu from '../../components/SideMenu';
import { Header } from '../../components/Header';

function ManegeCategories() {
  return (
    <>
      <BaseTemplate>
        <SideMenu />

        <MobileMenu />
        <S.Container>
          <Header title="Categorias" />

          <S.MainContent>
            <CategoriesSection />
          </S.MainContent>
        </S.Container>
      </BaseTemplate>
    </>
  );
}

export default ManegeCategories;
