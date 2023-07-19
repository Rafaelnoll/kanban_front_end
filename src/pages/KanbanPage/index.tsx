import React from 'react';

import TasksSection from '../../components/Tasks/TasksSection';
import { ContentPage } from '../../templates/ContentPage';

function KanbanPage() {
  return (
    <ContentPage title="Meu Kanban">
      <TasksSection />
    </ContentPage>
  );
}

export default KanbanPage;
