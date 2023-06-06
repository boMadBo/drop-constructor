import { Operator, OperVal } from '@/helpers';
import { Oper } from '@/styles';
import OperBtn from '@/uikit/OperBtn';
import { Box } from '@mui/material';
import React from 'react';

interface OperatorButtonProps {
  handleOperator?: (value: Operator) => void;
}

const OperatorButton = ({ handleOperator }: OperatorButtonProps) => {
  const classes = Oper();

  return (
    <Box className={classes.oper_wrap}>
      {OperVal.map((item, index) => (
        <OperBtn handleOperator={handleOperator} Operator={item.operator} key={index} />
      ))}
    </Box>
  );
};

export default React.memo(OperatorButton);
