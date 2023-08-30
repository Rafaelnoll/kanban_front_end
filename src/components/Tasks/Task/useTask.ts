import { useState } from 'react';

import { FormTasksInputs } from '../../../interfaces/FormInputs';

interface useTaskProps {
  onUpdate: (props: FormTasksInputs, id: string) => void;
  id: string;
}

export default function useTasks({ onUpdate, id }: useTaskProps) {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);

  function handleOpenDeleteModal() {
    setIsDeleteModalOpen(true);
  }

  function handleOpenUpdateModal() {
    setIsUpdateModalOpen(true);
  }

  function handleCloseDeleteModal() {
    setIsDeleteModalOpen(false);
  }

  function handleCloseUpdateModal() {
    setIsUpdateModalOpen(false);
  }

  function handleOpenDetailsModal() {
    setIsDetailsModalOpen(true);
  }

  function handleCloseDetailsModal() {
    setIsDetailsModalOpen(false);
  }

  function handleUpdateTask({
    title,
    status,
    description,
    category_id,
  }: FormTasksInputs) {
    onUpdate({ title, status, description, category_id }, id);
    handleCloseUpdateModal();
  }

  return {
    isUpdateModalOpen,
    handleUpdateTask,
    handleCloseUpdateModal,
    isDetailsModalOpen,
    handleCloseDetailsModal,
    isDeleteModalOpen,
    handleCloseDeleteModal,
    handleOpenDeleteModal,
    handleOpenUpdateModal,
    handleOpenDetailsModal,
  };
}
