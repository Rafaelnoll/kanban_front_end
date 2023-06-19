import React from 'react';

import * as S from './styles';
import CloseIcon from '../../assets/close-circle.svg';
import Input from '../Input';

interface TaskModalProps {
  title: string;
  onCancel: () => void;
  onSave: () => void;
}

function TaskModal({ title, onCancel, onSave }: TaskModalProps) {
  return (
    <S.Container>
      <S.ModalContainer>
        <S.ModalHeader>
          <S.Title>{title}</S.Title>
          <CloseIcon onClick={onCancel} />
        </S.ModalHeader>

        <S.ModalBody>
          <Input placeholder="Titulo" />
          <Input asTextarea placeholder="Descrição..." />
        </S.ModalBody>

        <S.ModalFooter>
          <S.CancelButton onClick={onCancel}>Cancelar</S.CancelButton>
          <S.SaveButton onClick={onSave}>Salvar</S.SaveButton>
        </S.ModalFooter>
      </S.ModalContainer>
    </S.Container>
  );
}

export default TaskModal;
