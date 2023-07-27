import React, { ChangeEvent, useRef, useState } from 'react';
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
  const [zoom, setZoom] = useState(1);

  function handleEditImage() {
    const dataURL = editorRef.current
      ?.getImageScaledToCanvas()
      .toDataURL('image/jpeg', 0.8);

    if (dataURL) {
      fetch(dataURL)
        .then((response) => response.blob())
        .then((blob) => {
          const file = new File([blob], image.name, { type: 'image/jpeg' });
          onEdit(file);
        })
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        .catch((error) => {
          toast.error('Erro ao mudar foto de perfil!');
        });
    }
  }

  function handleChangeZoom(event: ChangeEvent<HTMLInputElement>) {
    const zoomLevel = event.target.value;
    setZoom(Number(zoomLevel) / 100);
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
            scale={zoom}
            borderRadius={200}
            style={{ width: '100%', height: '100%', borderRadius: '8px' }}
          />
          <S.ZoomRangeContainer>
            <S.Text>+</S.Text>
            <S.ZoomRangeInput
              max={150}
              min={100}
              aria-orientation="vertical"
              onChange={(e) => handleChangeZoom(e)}
            />
            <S.Text>-</S.Text>
          </S.ZoomRangeContainer>
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
