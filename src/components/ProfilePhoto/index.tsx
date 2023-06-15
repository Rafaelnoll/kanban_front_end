import React from 'react';

import * as S from './styles';
import ProfileImage from '../../assets/profile_image.jpg';

function ProfilePhoto() {
  return (
    <S.Container>
      <S.ProfileImage src={ProfileImage} />
    </S.Container>
  );
}

export default ProfilePhoto;
