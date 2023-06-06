import Display from '@/components/Buttons/Display';
import EqualButton from '@/components/Buttons/EqualButton';
import InputButton from '@/components/Buttons/InputButton';
import OperatorButton from '@/components/Buttons/OperatorButton';
import { Operator } from '@/helpers';
import { Id } from '@/interfaces';
import { Calc } from '@/styles';
import CalcRender from '@/uikit/CalcRender';
import { Box } from '@mui/material';
import React, { useCallback, useState } from 'react';

interface CalculatorProps {
  dragStartHandler: (e: any, id: number) => void;
  dragEndHandler: (e: any) => void;
  leftList: Id[];
  calc: Id[];
  isCalculator: boolean;
}

const Calculator = (props: CalculatorProps) => {
  const { dragStartHandler, dragEndHandler, calc, isCalculator, leftList } = props;
  const [input, setInput] = useState<string>('0');
  const [operator, setOperator] = useState<Operator | null>(null);
  const [previousNumber, setPreviousNumber] = useState<number | null>(null);

  const handleInput = useCallback((value: string) => {
    setInput((prevInput) => {
      if (prevInput === '0') {
        return value;
      } else {
        return prevInput + value;
      }
    });
  }, []);

  const handleOperator = useCallback(
    (value: Operator) => {
      setOperator(value);
      setPreviousNumber(parseFloat(input));
      setInput('');
    },
    [input],
  );

  const handleEqual = useCallback(() => {
    const currentNumber = parseFloat(input);
    let result: number;
    let prevInt = previousNumber?.toString().includes('.') ? previousNumber?.toString().indexOf('.') : previousNumber;
    let currInt = currentNumber?.toString().includes('.') ? currentNumber?.toString().indexOf('.') : currentNumber;

    if (prevInt) {
      var prevFract = previousNumber?.toString().slice(prevInt + 1).length;
    }
    let currFract = currentNumber?.toString().slice(currInt + 1).length;

    let fixed;
    if (prevFract) {
      fixed = Math.max(prevFract, currFract);
      if (fixed > 10) fixed = 10;
    }

    switch (operator) {
      case Operator.ADD:
        result = previousNumber! + currentNumber;
        break;
      case Operator.SUBTRACT:
        result = previousNumber! - currentNumber;
        break;
      case Operator.MULTIPLY:
        result = previousNumber! * currentNumber;
        break;
      case Operator.DIVIDE:
        if (currentNumber === 0) {
          setInput('не определено');
          return;
        }
        result = previousNumber! / currentNumber;
        break;
      default:
        result = currentNumber;
    }

    setInput(result.toFixed(fixed));
    setOperator(null);
    setPreviousNumber(null);
  }, [input, operator, previousNumber]);

  const classes = Calc();

  return (
    <Box className={classes.calcing} style={{ display: leftList.length > 0 ? 'flex' : 'none' }}>
      {!isCalculator ? (
        <>
          <Box className={classes.downloaded_item}>
            <Display value={input} />
          </Box>
          <Box className={classes.downloaded_item}>
            <OperatorButton handleOperator={handleOperator} />
          </Box>
          <Box className={classes.downloaded_item}>
            <InputButton handleInput={handleInput} />
          </Box>
          <Box className={classes.downloaded_item}>
            <EqualButton handleEqual={handleEqual} />
          </Box>
        </>
      ) : (
        <>
          {calc.map((item) => (
            <Box
              className={classes.downloaded_item}
              key={item.id}
              draggable={true}
              onDragStart={(e) => dragStartHandler(e, item.id)}
              onDragEnd={(e) => dragEndHandler(e)}
            >
              <CalcRender id={item.id} />
            </Box>
          ))}
        </>
      )}
    </Box>
  );
};

export default React.memo(Calculator);
