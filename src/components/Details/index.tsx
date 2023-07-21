import React, { useState } from 'react';

import * as S from './styles';
import RightArrow from '../../assets/arrow-right.svg';

interface DetailsProps {
  title: string;
  children: React.ReactNode;
}

function Details({ title, children }: DetailsProps) {
  const [isShowingContent, setIsShowingContent] = useState(false);

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
