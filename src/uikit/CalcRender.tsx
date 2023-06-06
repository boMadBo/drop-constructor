import Display from '@/components/Buttons/Display';
import EqualButton from '@/components/Buttons/EqualButton';
import InputButton from '@/components/Buttons/InputButton';
import OperatorButton from '@/components/Buttons/OperatorButton';
import { Id } from '@/interfaces';
import React from 'react';

interface Calc {
  id: number;
  title: JSX.Element;
}

const CalcRender = ({ id }: Id) => {
  const calculate: Calc[] = [
    { id: 1, title: <Display /> },
    { id: 2, title: <OperatorButton /> },
    { id: 3, title: <InputButton /> },
    { id: 4, title: <EqualButton /> },
  ];

  const res = calculate.find((item) => item.id === id);

  return <div>{res?.title}</div>;
};

export default React.memo(CalcRender);
