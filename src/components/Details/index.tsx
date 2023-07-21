import React, { useState } from 'react';

import * as S from './styles';
import RightArrow from '../../assets/arrow-right.svg';

interface DetailsProps {
  title: string;
  isShowing?: boolean;
  children: React.ReactNode;
}

function Details({ title, children, isShowing = false }: DetailsProps) {
  const [isShowingContent, setIsShowingContent] = useState(isShowing);

  function handleOpenAndCloseContent() {
    setIsShowingContent((prevState) => !prevState);
  }

  return (
    <S.Details>
      <S.DetailsInfos
        showingcontent={isShowingContent ? 'true' : 'false'}
        onClick={handleOpenAndCloseContent}
      >
        <S.DetailsTitle>{title}</S.DetailsTitle>
        <RightArrow />
      </S.DetailsInfos>

      {isShowingContent && <S.DetailsContent>{children}</S.DetailsContent>}
    </S.Details>
  );
}

export default Details;
