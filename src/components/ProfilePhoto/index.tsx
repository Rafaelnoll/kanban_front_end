import React from 'react';

import * as S from './styles';
import DefaultProfileImage from '../../assets/profile_image.jpg';
import ConfigIcon from '../../assets/configuration-icon.svg';
import LogoutIcon from '../../assets/logout-icon.svg';
import { Link } from 'react-router-dom';
import useAuthentication from '../../hooks/useAuthentication';

function ProfilePhoto() {
  const { profilePhoto } = useAuthentication();

  return (
    <S.Container>
      <S.ProfileImage src={profilePhoto ? profilePhoto : DefaultProfileImage} />

      <Link to="/profile">
        <S.ConfigContainer>
          <ConfigIcon />
        </S.ConfigContainer>
      </Link>

      <Link to="/">
        <S.LogoutContainer>
          <LogoutIcon />
        </S.LogoutContainer>
      </Link>
    </S.Container>
  );
}

export default ProfilePhoto;
