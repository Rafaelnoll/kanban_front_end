import { ChangeEvent, useRef, useState } from 'react';

import UserController from '../../controllers/UserController';
import useAuthentication from '../../hooks/useAuthentication';
import { IUser } from '../../interfaces/User';

export default function useUserAccountDetails(user: IUser) {
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

  return {
    handleOpenFilePicker,
    fileInputRef,
    handleSelectFile,
    selectedFile,
    handleCloseImageEditor,
    handleEditProfilePicture,
  };
}
