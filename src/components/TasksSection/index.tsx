import React from 'react';

import * as S from './styles';
import Task from '../Task';

function TasksSection() {
  return (
    <S.Container>
      <S.TasksContainer>
        <S.Label>A fazer</S.Label>
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
        <S.Label>Fazendo</S.Label>
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
        <S.Label>Feito</S.Label>
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
  );
}

export default TasksSection;
