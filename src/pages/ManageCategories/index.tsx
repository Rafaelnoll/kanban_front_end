import React from 'react';

import CategoriesSection from '../../components/Categories/CategoriesSection';
import { ContentPage } from '../../templates/ContentPage';

function ManegeCategories() {
  return (
    <ContentPage title="Categorias">
      <CategoriesSection />
    </ContentPage>
  );
}

export default ManegeCategories;
