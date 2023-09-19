import React from 'react';

import * as S from './styles';

import RightArrow from '../../../../../assets/arrow-right.svg';
import LeftArrow from '../../../../../assets/arrow-left.svg';

interface PaginationProps {
  pageNumber: number;
  totalOfPages: number;
  onNextPage: () => void;
  onPreviousPage: () => void;
}

function Pagination({
  pageNumber,
  totalOfPages,
  onNextPage,
  onPreviousPage,
}: PaginationProps) {
  return (
    <S.Container>
      <S.Buttom onClick={onPreviousPage}>
        <LeftArrow />
      </S.Buttom>
      <S.PageNumberContainer>
        <S.PageNumber>{pageNumber + 1}</S.PageNumber>
        <span>de</span>
        <S.PageNumber>{totalOfPages}</S.PageNumber>
      </S.PageNumberContainer>
      <S.Buttom onClick={onNextPage}>
        <RightArrow />
      </S.Buttom>
    </S.Container>
  );
}

export default Pagination;
