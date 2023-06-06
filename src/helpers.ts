import { Id } from './interfaces';

export const calc: Id[] = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }];

export enum Operator {
  ADD = '+',
  SUBTRACT = '-',
  MULTIPLY = '*',
  DIVIDE = '/',
}

export const OperVal = [
  {
    operator: Operator.DIVIDE,
  },
  {
    operator: Operator.MULTIPLY,
  },
  {
    operator: Operator.SUBTRACT,
  },
  {
    operator: Operator.ADD,
  },
];

export const InputVal = [
  {
    value: '7',
    xs: 4,
  },
  {
    value: '8',
    xs: 4,
  },
  {
    value: '9',
    xs: 4,
  },
  {
    value: '4',
    xs: 4,
  },
  {
    value: '5',
    xs: 4,
  },
  {
    value: '6',
    xs: 4,
  },
  {
    value: '1',
    xs: 4,
  },
  {
    value: '2',
    xs: 4,
  },
  {
    value: '3',
    xs: 4,
  },
  {
    value: '0',
    xs: 8,
  },
  {
    value: '.',
    xs: 4,
  },
];
