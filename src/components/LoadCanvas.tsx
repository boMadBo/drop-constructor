import Calculator from '@/components/Calculator';
import DropArea from '@/components/DropArea';
import { calc } from '@/helpers';
import { Id } from '@/interfaces';
import { LdCanvas } from '@/styles';
import { Box, Button } from '@mui/material';
import React, { useState } from 'react';

const LoadCanvas = () => {
  const [leftList, setLeftLit] = useState<Id[]>(calc);
  const [drag, setDrag] = useState<boolean>(false);
  const [isCalculator, setIsCalculator] = useState(false);
  const [rightList, setRightList] = useState<Id[]>([]);
  const [isDragged, setIsDragged] = useState<boolean>(false);

  // Drops logic start //

  const dragStartHandler = (e: any, id: number) => {
    e.dataTransfer.setData('id', id.toString());
    setDrag(true);
  };

  const dragOverHandler = (e: any) => {
    e.preventDefault();
    setDrag(true);
  };

  const dragEndHandler = (e: any) => {
    e.preventDefault();
    if (isDragged) {
      e.target.style.opacity = '0.5';
      setIsDragged(false);
    }

    setDrag(false);
  };

  const dropHandler = (e: any) => {
    e.preventDefault();
    const droppedItemId = e.dataTransfer.getData('id');
    const droppedItem = leftList.find((item) => item.id.toString() === droppedItemId);
    if (droppedItem) {
      console.log(droppedItem);
      if (droppedItemId === '1') {
        setRightList((prevState) => [droppedItem, ...prevState]);
      } else {
        setRightList((prevState) => [...prevState, droppedItem]);
      }
      setIsDragged(true);
    }
    setLeftLit((prevState) => prevState.filter((item) => item.id.toString() !== droppedItemId));
    setDrag(false);
  };

  // Drops logic end //

  const handleCalculatorButtonClick = () => {
    setIsCalculator(false);
    setLeftLit(calc);
    setRightList([]);
  };

  const handleDropAreaButtonClick = () => {
    setIsCalculator(true);
  };

  const classes = LdCanvas();

  return (
    <main className={classes.load_app}>
      <Box className={classes.load_wrap}>
        <Box className={classes.load_cont}>
          <section className={classes.tabs_cont}>
            <Box className={classes.tabs_wrap}>
              <Button
                disableTouchRipple
                onClick={handleCalculatorButtonClick}
                className={isCalculator ? `${classes.tabs} active` : classes.tabs}
              >
                Calculate
              </Button>
              <Button
                disableTouchRipple
                onClick={handleDropAreaButtonClick}
                className={isCalculator ? classes.tabs : `${classes.tabs} active`}
              >
                Drop area
              </Button>
            </Box>
          </section>
          <section className={leftList.length > 0 ? classes.load_area : `${classes.load_area} full`}>
            <Calculator
              dragStartHandler={dragStartHandler}
              dragEndHandler={dragEndHandler}
              leftList={leftList}
              calc={calc}
              isCalculator={isCalculator}
            />
            {isCalculator && (
              <DropArea dragOverHandler={dragOverHandler} dropHandler={dropHandler} drag={drag} rightList={rightList} />
            )}
          </section>
        </Box>
      </Box>
    </main>
  );
};

export default React.memo(LoadCanvas);
