import React, { useState } from 'react';

import * as S from './styles';
import Task from '../Task';
import AddIcon from '../../assets/add-icon.svg';
import TaskModal from '../TaskModal';
import { FormTasksInputs } from '../../interfaces/FormInputs';

function TasksSection() {
  const [isTaskModalOpen, setIsTaskModalOpen] = useState(false);

  function handleCancelTaskModal() {
    setIsTaskModalOpen(false);
  }

  function handleOpenTaskModal() {
    setIsTaskModalOpen(true);
  }

  function createTask(data: FormTasksInputs) {
    console.log(data);
  }

  return (
    <>
      {isTaskModalOpen && (
        <TaskModal
          title="Criar Tarefa"
          onCancel={handleCancelTaskModal}
          onSubmitEvent={createTask}
        />
      )}

      <S.Container>
        <S.TasksContainer>
          <S.TasksContainerHeader>
            <S.Label>A fazer</S.Label>
            <AddIcon onClick={handleOpenTaskModal} />
          </S.TasksContainerHeader>

          <S.TasksList>
            <Task
              title="#Bora codar um kanban"
              description="        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed
        tempor mauris. Quisque ullamcorper aliquet ex, in mattis mauris ornare
        in. Phasellus vehicula finibus augue, sit amet dignissim lorem cursus
        euismod."
              category="Programação"
            />
            <Task
              title="#Bora codar um kanban"
              description="        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed
            tempor mauris. Quisque ullamcorper aliquet ex, in mattis mauris ornare
            in. Phasellus vehicula finibus augue, sit amet dignissim lorem cursus
            euismod."
              category="Programação"
            />
          </S.TasksList>
        </S.TasksContainer>

        <S.TasksContainer>
          <S.TasksContainerHeader>
            <S.Label>Fazendo</S.Label>
            <AddIcon />
          </S.TasksContainerHeader>
          <S.TasksList>
            <Task
              title="Estudar React"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed
            tempor mauris."
              category="Estudo"
            />
            <Task
              title="#Bora codar um kanban"
              description="        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed
            tempor mauris. Quisque ullamcorper aliquet ex, in mattis mauris ornare
            in. Phasellus vehicula finibus augue, sit amet dignissim lorem cursus
            euismod."
              category="Programação"
            />
          </S.TasksList>
        </S.TasksContainer>

        <S.TasksContainer>
          <S.TasksContainerHeader>
            <S.Label>Feito</S.Label>
            <AddIcon />
          </S.TasksContainerHeader>

          <S.TasksList>
            <Task
              title="Escovar os dentes"
              description="Quisque ullamcorper aliquet ex, in mattis mauris ornare
            in. Phasellus vehicula finibus augue, sit amet dignissim lorem cursus
        euismod."
              category="Saúde"
            />
            <Task
              title="#Bora codar um kanban"
              description="        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed
            tempor mauris. Quisque ullamcorper aliquet ex, in mattis mauris ornare
            in. Phasellus vehicula finibus augue, sit amet dignissim lorem cursus
            euismod."
              category="Programação"
            />
          </S.TasksList>
        </S.TasksContainer>
      </S.Container>
    </>
  );
}

export default TasksSection;
