/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { UseFormRegister } from 'react-hook-form';

import * as S from './styles';
import { TaskStatus } from '../../interfaces/Task';
import useStatusCheckBoxes from './useStatusCheckBoxes';

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
  const { renderCheckBox } = useStatusCheckBoxes({
    defaultStatus,
    register,
    name,
  });

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
