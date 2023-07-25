import React, { ChangeEvent, useRef } from 'react';

import * as S from './styles';
import Button from '../Button';
import ProfileImage from '../../assets/profile_image.jpg';
import { IUser } from '../../interfaces/User';

interface UserAccountDetailsProps {
  user: IUser | null;
}

function UserAccountDetails({ user }: UserAccountDetailsProps) {
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleOpenFilePicker = () => {
    const input = fileInputRef.current;

    if (input) {
      input.click();
    }
  };

  const handleSelectFile = (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;

    if (files) {
      const pictureFile = files[0];
      console.log(pictureFile);
    }
  };

  return (
    <S.AccountDetails>
      <S.AccountText>Foto</S.AccountText>

      <S.AccountPhoto src={ProfileImage} />

      <S.AccountInfos>
        <S.AccountName>{user?.username}</S.AccountName>
        <S.AccountEmail>{user?.email}</S.AccountEmail>
        <S.AccountDescription>{user?.description}</S.AccountDescription>

        <Button text="Mudar foto" handleClick={handleOpenFilePicker} />
        <input
          ref={fileInputRef}
          onChange={(e) => handleSelectFile(e)}
          style={{ display: 'none' }}
          type="file"
          accept="image/png, image/jpg"
        />
      </S.AccountInfos>
    </S.AccountDetails>
  );
}

export default UserAccountDetails;
