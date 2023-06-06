import { Operator } from '@/helpers';
import { Oper } from '@/styles';
import { Box, Button } from '@mui/material';
import React from 'react';

interface OperBtnProps {
  handleOperator?: (value: Operator) => void;
  Operator: Operator;
}

const OperBtn = ({ handleOperator, Operator }: OperBtnProps) => {
  const classes = Oper();

  return (
    <Box className={classes.oper}>
      <Button onClick={handleOperator ? () => handleOperator(`${Operator}` as Operator) : undefined} className={classes.btn}>
        {Operator}
      </Button>
    </Box>
  );
};

export default React.memo(OperBtn);
