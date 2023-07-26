import React, { ChangeEvent, useRef, useState } from 'react';

import * as S from './styles';
import Button from '../Button';
import { IUser } from '../../interfaces/User';
import ImageEditor from '../ImageEditor';
import UserController from '../../controllers/UserController';
import useAuthentication from '../../hooks/useAuthentication';
import DefaultProfileImage from '../../assets/profile_image.jpg';

interface UserAccountDetailsProps {
  user: IUser | null;
}

function UserAccountDetails({ user }: UserAccountDetailsProps) {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const { handleUpdateUser } = useAuthentication();

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
    const formData = new FormData();

    formData.append('file', image);

    if (user) {
      const userUpdated = await UserController.updateUserImageProfile(
        formData,
        user?.id,
      );
      handleUpdateUser(userUpdated);
      handleCloseImageEditor();
    }
  };

  return (
    <S.AccountDetails>
      <S.AccountText>Foto</S.AccountText>

      <S.AccountPhoto
        src={
          user?.image_path
            ? `http://localhost:3000/uploads/${user.image_path}`
            : DefaultProfileImage
        }
      />

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
