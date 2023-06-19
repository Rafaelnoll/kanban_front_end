import React, { useEffect, useState } from 'react';

import * as S from './styles';
import CloseIcon from '../../assets/close-circle.svg';
import CategoryIcon from '../../assets/category-icon.svg';

import Input from '../Input';
import CategorySelector from '../CategorySelector';
import { Category } from '../../interfaces/Category';
import CategoryController from '../../controllers/CategoryController';

interface TaskModalProps {
  title: string;
  onCancel: () => void;
  onSave: () => void;
}

function TaskModal({ title, onCancel, onSave }: TaskModalProps) {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    async function loadCategories() {
      const categories = await CategoryController.index();
      setCategories(categories);
    }

    loadCategories();
  }, []);

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
          <CategorySelector
            categories={categories}
            icon={CategoryIcon}
            defaultValue="Sem categoria"
          />
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
