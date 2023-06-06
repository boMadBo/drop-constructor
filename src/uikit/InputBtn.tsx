import { Input } from '@/styles';
import { Button, Grid, Paper } from '@mui/material';
import React from 'react';

interface InputBtnProps {
  handleInput?: (value: string) => void;
  value: string;
  xs: number;
}

const InputBtn = ({ handleInput, value, xs }: InputBtnProps) => {
  const classes = Input();

  return (
    <Grid item xs={xs}>
      <Paper className={classes.input}>
        <Button onClick={handleInput ? () => handleInput(`${value}`) : undefined} className={classes.btn}>
          {value}
        </Button>
      </Paper>
    </Grid>
  );
};

export default React.memo(InputBtn);
