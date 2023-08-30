import { useState, ChangeEvent, RefObject } from 'react';
import AvatarEditor from 'react-avatar-editor';

import { toast } from 'react-toastify';

interface useImageEditorProps {
  editorRef: RefObject<AvatarEditor>;
  onEdit: (file: File) => void;
  image: File;
}

export default function useImageEditor({
  editorRef,
  onEdit,
  image,
}: useImageEditorProps) {
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

  return {
    zoom,
    handleChangeZoom,
    handleEditImage,
  };
}
