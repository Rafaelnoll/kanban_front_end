import React from 'react';

import * as S from './styles';
import ProfileImage from '../../assets/profile_image.jpg';
import ConfigIcon from '../../assets/configuration-icon.svg';
import { Link } from 'react-router-dom';

function ProfilePhoto() {
  return (
    <S.Container>
      <S.ProfileImage src={ProfileImage} />

      <Link to="/profile">
        <S.ConfigContainer>
          <ConfigIcon />
        </S.ConfigContainer>
      </Link>
    </S.Container>
  );
}

export default ProfilePhoto;
