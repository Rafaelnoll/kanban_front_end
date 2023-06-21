/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import { UseFormRegister } from 'react-hook-form';

import * as S from './styles';
import { Task as ITask } from '../../interfaces/Task';

type TaskStatus = ITask['status'];

interface CheckBoxesProps {
  name: string;
  register: UseFormRegister<any>;
  defaultStatus?: TaskStatus;
}

function StatusCheckBoxes({
  name,
  register,
  defaultStatus = 'DO',
}: CheckBoxesProps) {
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

  return (
    <>
      <S.Container>
        <S.Title>Status:</S.Title>
        {renderCheckBox('DO', 'A Fazer')}

        {renderCheckBox('DOING', 'Fazendo')}

        {renderCheckBox('DONE', 'Feito')}
      </S.Container>
    </>
  );
}

export default StatusCheckBoxes;
