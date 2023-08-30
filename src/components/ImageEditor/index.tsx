import React, { useRef } from 'react';
import AvatarEditor from 'react-avatar-editor';

import * as S from './styles';
import CloseIcon from '../../assets/close-circle.svg';
import useImageEditor from './useImageEditor';

interface ImageEditorProps {
  image: File;
  onClose: () => void;
  onEdit: (editedImage: File) => void;
}

function ImageEditor({ image, onClose, onEdit }: ImageEditorProps) {
  const editorRef = useRef<AvatarEditor | null>(null);
  const { handleChangeZoom, handleEditImage, zoom } = useImageEditor({
    editorRef,
    onEdit,
    image,
  });

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
