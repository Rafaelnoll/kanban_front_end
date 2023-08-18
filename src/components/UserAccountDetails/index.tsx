import React, { ChangeEvent, useRef, useState } from 'react';

import * as S from './styles';
import Button from '../Button';
import { IUser } from '../../interfaces/User';
import ImageEditor from '../ImageEditor';
import DefaultProfileImage from '../../assets/profile_image.jpg';
import useAuthentication from '../../hooks/useAuthentication';

interface UserAccountDetailsProps {
  user: IUser | null;
}

function UserAccountDetails({ user }: UserAccountDetailsProps) {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const { profilePhoto, handleUpdateProfilePhoto } = useAuthentication();

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

  const handleEditProfilePicture = async (image: File) => {
    if (image) {
      const reader = new FileReader();
      reader.onload = function (event) {
        handleUpdateProfilePhoto(event.target?.result);
      };
      reader.readAsDataURL(image);
    }

    handleCloseImageEditor();
  };

  return (
    <S.AccountDetails>
      <S.AccountText>Foto</S.AccountText>

      <S.AccountPhoto src={profilePhoto ? profilePhoto : DefaultProfileImage} />

      <S.AccountInfos>
        <S.AccountName>{user?.username}</S.AccountName>
        <S.AccountEmail>{user?.email}</S.AccountEmail>
        <S.AccountDescription>
          {user?.description ? user?.description : 'Estou usando MyKanban!'}
        </S.AccountDescription>

        <S.ButtonContainer>
          <Button text="Mudar foto" handleClick={handleOpenFilePicker} />
        </S.ButtonContainer>
        <input
          ref={fileInputRef}
          onChange={(e) => handleSelectFile(e)}
          style={{ display: 'none' }}
          type="file"
          accept="image/png, image/jpg, image/jpeg"
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
