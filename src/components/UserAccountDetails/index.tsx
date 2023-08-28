import React from 'react';

import * as S from './styles';
import Button from '../Button';
import { IUser } from '../../interfaces/User';
import ImageEditor from '../ImageEditor';
import DefaultProfileImage from '../../assets/profile_image.jpg';
import useUserAccountDetails from './useUserAccountDetails';

interface UserAccountDetailsProps {
  user: IUser | null;
}

function UserAccountDetails({ user }: UserAccountDetailsProps) {
  const {
    handleOpenFilePicker,
    fileInputRef,
    handleSelectFile,
    selectedFile,
    handleCloseImageEditor,
    handleEditProfilePicture,
  } = useUserAccountDetails(user as IUser);

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
