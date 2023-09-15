import React from 'react';

import * as S from './styles';

import AddIcon from '../../../assets/add-icon.svg';
import TaskModal from '../TaskModal';
import SearchInput from '../../SearchInput';
import ButtonFilterCategories from '../../ButtonFilter';
import useTaskSection from './useTaskSection';

function TasksSection() {
  const {
    selectedCategoryFilter,
    handleSelectCategoryFilter,
    searchValue,
    handleChangeSearchValue,
    isTaskModalOpen,
    handleCancelTaskModal,
    createTask,
    statusSelected,
    handleOpenTaskModal,
    renderTasks,
    tasksSections,
  } = useTaskSection();

  return (
    <>
      <S.TopContent>
        <ButtonFilterCategories
          selectedCategory={selectedCategoryFilter}
          onSelectCategory={handleSelectCategoryFilter}
        />
        <SearchInput
          name="search"
          value={searchValue}
          onChange={handleChangeSearchValue}
          placeholder="Busque por cards, assuntos ou responsáveis..."
        />
      </S.TopContent>

      <TaskModal
        title="Criar Tarefa"
        onCancel={handleCancelTaskModal}
        onSubmitEvent={createTask}
        initialData={{
          status: statusSelected,
        }}
        visible={isTaskModalOpen}
      />

      <S.Container>
        <S.TasksContainer>
          <S.TasksContainerHeader>
            <S.Label>A fazer</S.Label>
            <AddIcon onClick={() => handleOpenTaskModal('DO')} />
          </S.TasksContainerHeader>

          <S.TasksList>{renderTasks(tasksSections.DO)}</S.TasksList>
        </S.TasksContainer>

        <S.TasksContainer>
          <S.TasksContainerHeader>
            <S.Label>Fazendo</S.Label>
            <AddIcon onClick={() => handleOpenTaskModal('DOING')} />
          </S.TasksContainerHeader>
          <S.TasksList>{renderTasks(tasksSections.DOING)}</S.TasksList>
        </S.TasksContainer>

        <S.TasksContainer>
          <S.TasksContainerHeader>
            <S.Label>Feito</S.Label>
            <AddIcon onClick={() => handleOpenTaskModal('DONE')} />
          </S.TasksContainerHeader>

          <S.TasksList>{renderTasks(tasksSections.DONE)}</S.TasksList>
        </S.TasksContainer>
      </S.Container>
    </>
  );
}

export default TasksSection;
