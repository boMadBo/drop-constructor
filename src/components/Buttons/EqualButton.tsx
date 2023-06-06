import { EBut } from '@/styles';
import { Box, Button } from '@mui/material';
import React from 'react';

interface EqualButtonProps {
  handleEqual?: () => void;
}

const EqualButton = ({ handleEqual }: EqualButtonProps) => {
  const classes = EBut();

  return (
    <Box className={classes.but_wrap}>
      <Button onClick={handleEqual} className={classes.but}>
        =
      </Button>
    </Box>
  );
};

export default React.memo(EqualButton);
