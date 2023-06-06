import { Id } from '@/interfaces';
import { Drop } from '@/styles';
import CalcRender from '@/uikit/CalcRender';
import { Box } from '@mui/material';
import React from 'react';

interface DropAreaProps {
  dragOverHandler: (e: any) => void;
  dropHandler: (e: any) => void;
  drag: boolean;
  rightList: Id[];
}

const DropArea = ({ dragOverHandler, dropHandler, drag, rightList }: DropAreaProps) => {
  const classes = Drop();

  return (
    <Box className={classes.drop_wrap}>
      {drag ? (
        <Box
          className={classes.drop_area}
          draggable={false}
          onDragOver={(e) => dragOverHandler(e)}
          onDrop={(e) => dropHandler(e)}
        >
          <h3>Перетащите сюда</h3>
          <p>любой элемент</p>
        </Box>
      ) : rightList.length === 0 ? (
        <Box className={classes.drop_items} onDragOver={(e) => dragOverHandler(e)}>
          <h3>Перетащите сюда</h3>
          <p>любой элемент</p>
        </Box>
      ) : (
        <Box className={classes.drop_text}>
          {rightList.map((item) => (
            <Box className={classes.downloaded_item} key={item.id}>
              <CalcRender id={item.id} />
            </Box>
          ))}
        </Box>
      )}
    </Box>
  );
};

export default React.memo(DropArea);
