import { InputVal } from '@/helpers';
import { Input } from '@/styles';
import InputBtn from '@/uikit/InputBtn';
import { Grid } from '@mui/material';
import React from 'react';

interface InputButtonProps {
  handleInput?: (value: string) => void;
}

const InputButton = ({ handleInput }: InputButtonProps) => {
  const classes = Input();

  return (
    <Grid container className={classes.input_wrap}>
      {InputVal.map((item, index) => (
        <InputBtn handleInput={handleInput} value={item.value} xs={item.xs} key={index} />
      ))}
    </Grid>
  );
};

export default React.memo(InputButton);
