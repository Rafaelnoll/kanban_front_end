import React from 'react';

import * as S from './styles';

import useAuthentication from '../../hooks/useAuthentication';
import { ContentPage } from '../../templates/ContentPage';
import UserAccountDetails from '../../components/UserAccountDetails';
import FormUserProfile from '../../components/Forms/FormUserProfile';

function UserProfilePage() {
  const { user } = useAuthentication();

  return (
    <ContentPage title="Conta">
      <S.Content>
        <UserAccountDetails user={user} />

        <FormUserProfile />
      </S.Content>
    </ContentPage>
  );
}

export default UserProfilePage;
