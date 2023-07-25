import React, { ChangeEvent, useRef, useState } from 'react';

import * as S from './styles';
import Button from '../Button';
import ProfileImage from '../../assets/profile_image.jpg';
import { IUser } from '../../interfaces/User';
import ImageEditor from '../ImageEditor';

interface UserAccountDetailsProps {
  user: IUser | null;
}

function UserAccountDetails({ user }: UserAccountDetailsProps) {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

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
      setSelectedFile(pictureFile);
    }
  };

  const handleCloseImageEditor = () => {
    setSelectedFile(null);

    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleEditProfilePicture = (image: string) => {
    console.log(image);
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

      {selectedFile && (
        <ImageEditor
          image={selectedFile}
          onClose={handleCloseImageEditor}
          onEdit={handleEditProfilePicture}
        />
      )}
    </S.AccountDetails>
  );
}

export default UserAccountDetails;
