import { Disp } from '@/styles';
import { Box, InputBase } from '@mui/material';
import React from 'react';

interface DisplayProps {
  value?: string;
}

function Display({ value }: DisplayProps) {
  const classes = Disp();

  return (
    <Box className={classes.disp_wrap}>
      <InputBase type="text" readOnly value={value} className={classes.disp} />
    </Box>
  );
}

export default React.memo(Display);
