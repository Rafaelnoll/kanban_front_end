import React, { useRef } from 'react';
import AvatarEditor from 'react-avatar-editor';

import * as S from './styles';
import CloseIcon from '../../assets/close-circle.svg';
import { toast } from 'react-toastify';

interface ImageEditorProps {
  image: File;
  onClose: () => void;
  onEdit: (editedImage: File) => void;
}

function ImageEditor({ image, onClose, onEdit }: ImageEditorProps) {
  const editorRef = useRef<AvatarEditor | null>(null);

  function handleEditImage() {
    const dataURL = editorRef.current
      ?.getImageScaledToCanvas()
      .toDataURL('image/png');

    if (dataURL) {
      fetch(dataURL)
        .then((response) => response.blob())
        .then((blob) => {
          const file = new File([blob], image.name, { type: 'image/png' });
          onEdit(file);
        })
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        .catch((error) => {
          toast.error('Erro ao mudar foto de perfil!');
        });
    }
  }

  return (
    <S.Container>
      <S.ModalContainer>
        <S.ModalHeader>
          <S.Title>Editar foto</S.Title>
          <CloseIcon onClick={onClose} />
        </S.ModalHeader>

        <S.AvatarEditorContainer>
          <AvatarEditor
            ref={editorRef}
            image={image}
            scale={1.2}
            borderRadius={200}
            style={{ width: '100%', height: '100%', borderRadius: '8px' }}
          />
        </S.AvatarEditorContainer>

        <S.ModalFooter>
          <S.CancelButton onClick={onClose}>Cancelar</S.CancelButton>
          <S.SaveButton onClick={handleEditImage}>Salvar</S.SaveButton>
        </S.ModalFooter>
      </S.ModalContainer>
    </S.Container>
  );
}

export default ImageEditor;
