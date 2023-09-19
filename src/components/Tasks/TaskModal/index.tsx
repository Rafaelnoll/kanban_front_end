import React from 'react';

import * as S from './styles';
import CloseIcon from '../../../assets/close-circle.svg';
import CategoryIcon from '../../../assets/category-icon.svg';

import Input from '../../Input';
import CategorySelector from '../../Categories/CategorySelector';
import { FormTasksInputs } from '../../../interfaces/FormInputs';
import StatusCheckBoxes from '../../StatusCheckBoxes';
import useAnimatedUnmount from '../../../hooks/useAnimatedUnmount';
import useTaskModal from './useTaskModal';

interface TaskModalProps {
  title: string;
  visible: boolean;
  onCancel: () => void;
  onSubmitEvent: (data: FormTasksInputs) => void;
  initialData: Partial<FormTasksInputs>;
}

function TaskModal({
  title,
  onCancel,
  onSubmitEvent,
  initialData = {
    title: '',
    description: '',
    category_id: '',
    status: 'DO',
  },
  visible,
}: TaskModalProps) {
  const { shouldRender, animatedElementRef } = useAnimatedUnmount({ visible });
  const { categories, errors, handleCancel, handleSubmit, onSubmit, register } =
    useTaskModal({
      visible,
      initialData,
      onCancel,
      onSubmitEvent,
    });

  if (!shouldRender) {
    return null;
  }

  return (
    <S.Container $isLeaving={!visible} ref={animatedElementRef}>
      <S.ModalContainer $isLeaving={!visible}>
        <S.ModalHeader>
          <S.Title>{title}</S.Title>
          <CloseIcon onClick={handleCancel} />
        </S.ModalHeader>

        <S.ModalForm onSubmit={handleSubmit(onSubmit)}>
          <Input register={register} name="title" placeholder="Título" />
          <S.ErrorMessage>{errors.title?.message}</S.ErrorMessage>

          <Input
            register={register}
            name="description"
            placeholder="Descrição..."
            asTextarea
          />
          <S.ErrorMessage>{errors.description?.message}</S.ErrorMessage>

          <StatusCheckBoxes
            defaultStatus={initialData.status}
            name="status"
            register={register}
          />
          <S.ErrorMessage>{errors.status?.message}</S.ErrorMessage>

          <CategorySelector
            register={register}
            name="category_id"
            categories={categories}
            icon={CategoryIcon}
            defaultValue={
              initialData.category_id ? initialData.category_id : ''
            }
          />
          <S.ErrorMessage>{errors.category_id?.message}</S.ErrorMessage>

          <S.FormFooter>
            <S.CancelButton type="button" onClick={handleCancel}>
              Cancelar
            </S.CancelButton>
            <S.SaveButton type="submit">Salvar</S.SaveButton>
          </S.FormFooter>
        </S.ModalForm>
      </S.ModalContainer>
    </S.Container>
  );
}

export default TaskModal;
