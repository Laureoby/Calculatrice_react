import { useContext } from "react";
import { CalcContext } from '../context/CalcContext';

const getStyleName = btn => {
  const className = {
    '=': 'equals',
    'x': 'opt',
    '-': 'opt',
    '+': 'opt',
    '/': 'opt', 
  }
  return className[btn];
}

function Button({value}) {
  const { calc, setCalc } = useContext(CalcContext);

  //user click comma
  const commaClick = () => {
    if(!calc.num.toString().includes('.')){
      setCalc({
        ...calc,
        num: calc.num + '.'
      });
    }
  }
  //user click C (reset)
  const resetClick = () => {
    setCalc({ sign: '', num: 0, res: 0 })
  }
  //user click number
  const handleClickButton = () => {
    const numString = value.toString();
    let numValue = calc.num === 0 && numString === '0' ? '0' : Number(calc.num.toString() + numString);

    setCalc({
      ...calc,
      num: numValue
    });
  }
//user click operators
  const signClick = () => {
    setCalc({
      sign: value,
      res: calc.res ? calc.res : calc.num,
      //res: !calc.res && calc.res ? calc.num : calc.res,
      num: 0
    });
  }
//user click equal
  const equalsClick = () => {
    if(calc.res && calc.num){
      const math = (a, b, sign) => {
        const result = {
          '+': (a,b) => a + b,
          '-': (a,b) => a - b,
          'x': (a,b) => a * b,
          '/': (a,b) => a / b,
        };
      return result[sign](a,b);
      }; 
    setCalc({
      //res: math(calc.res, calc.num, calc.sign),
      res: math(Number(calc.res), Number(calc.num), calc.sign),
      sign: '',
      num: 0
    });
  }
}
//user click percent
const percentClick = () => {
  setCalc({
    num: (calc.num / 100),
    res: (calc.res / 100),
    sign: ''
  })
}
//user click invert
const invertClick = () => {
  setCalc({
    num: calc.num ? calc.num * -1 : 0,
    res: calc.res ? calc.res * -1 : 0,
    sign: ''
  })
}

  const handleBtnClick = () => {
    const results = {
      '.': commaClick,
      'C': resetClick,
      '/': signClick,
      '+': signClick,
      '-': signClick,
      'x': signClick,
      '=': equalsClick,
      '%': percentClick,
      '+-': invertClick
    };
    if (results[value]){
      return results[value]();
    }else{
      return handleClickButton();
    }
  }

  return (
    <button className={`${getStyleName(value)} button`} onClick={handleBtnClick}>
        {value}
    </button>
  );
}

export default Button;