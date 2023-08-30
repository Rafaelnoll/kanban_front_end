import React, { useState } from 'react';

import { TaskStatus } from '../../interfaces/Task';
import * as S from './styles';
import { UseFormRegister } from 'react-hook-form';

interface UseStatusCheckBoxes {
  defaultStatus: TaskStatus;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register: UseFormRegister<any>;
  name: string;
}

export default function useStatusCheckBoxes({
  defaultStatus = 'DO',
  register,
  name,
}: UseStatusCheckBoxes) {
  const [currentStatus, setCurrentStatus] = useState<TaskStatus>(defaultStatus);

  function handleChangeStatus(newStatus: TaskStatus) {
    setCurrentStatus(newStatus);
  }

  function renderCheckBox(status: TaskStatus, text: string) {
    return (
      <S.Label
        ischecked={currentStatus === status ? 'true' : 'false'}
        onClick={() => handleChangeStatus(status)}
      >
        <S.Checkbox type="radio" value={status} {...register(name)} />
        {text}
      </S.Label>
    );
  }

  return {
    renderCheckBox,
  };
}
