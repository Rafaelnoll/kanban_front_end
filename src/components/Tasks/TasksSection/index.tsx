import React from 'react';

import * as S from './styles';

import SearchInput from '../../SearchInput';
import ButtonFilterCategories from '../../ButtonFilter';
import useTaskSection from './useTaskSection';
import TasksColumn from './components/TasksColumn';

function TasksSection() {
  const {
    selectedCategoryFilter,
    handleSelectCategoryFilter,
    searchValue,
    handleChangeSearchValue,
    createTask,
    tasksSections,
    isLoading,
    deleteTask,
    updateTask,
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
          placeholder="Busque Cards por título ou descrição..."
        />
      </S.TopContent>

      <S.Container>
        <TasksColumn
          label="A Fazer"
          defaultStatus="DO"
          isLoading={isLoading}
          onCreateTask={createTask}
          onDeleteTask={deleteTask}
          onUpdateTask={updateTask}
          searchValue={searchValue}
          selectedCategory={selectedCategoryFilter}
          tasks={tasksSections.DO}
        />

        <TasksColumn
          label="Fazendo"
          defaultStatus="DOING"
          isLoading={isLoading}
          onCreateTask={createTask}
          onDeleteTask={deleteTask}
          onUpdateTask={updateTask}
          searchValue={searchValue}
          selectedCategory={selectedCategoryFilter}
          tasks={tasksSections.DOING}
        />

        <TasksColumn
          label="Concluído"
          defaultStatus="DONE"
          isLoading={isLoading}
          onCreateTask={createTask}
          onDeleteTask={deleteTask}
          onUpdateTask={updateTask}
          searchValue={searchValue}
          selectedCategory={selectedCategoryFilter}
          tasks={tasksSections.DONE}
        />
      </S.Container>
    </>
  );
}

export default TasksSection;
