import React, {useState} from 'react';
import TempInput from './components/TempInput';
import {toCelsius, toFahrenheit, convertTemp} from './helpers/convertTemp';
import './App.css';

const Calculator = _ => {
  const [temp, setTemp] = useState({scale: 'celsius', temp: ''});

  const celsius = temp.scale === 'fahrenheit' ? convertTemp(temp.temp, toCelsius) : temp.temp;
  const fahrenheit = temp.scale === 'celsius' ? convertTemp(temp.temp, toFahrenheit) : temp.temp;

  const handleCelciusChange = temp => {
    setTemp({
      scale: 'celsius',
      temp: temp
    });
  }

  const handleFahrenheitChange = temp => {
    setTemp({
      scale: 'fahrenheit',
      temp: temp
    })
  }

  return (
    <div className="calculator">
      <h2>Temperature converter</h2>
      <p>Enter a temperature value in either Celsius or Fahrenheit to have it automatically
      converted to the other scale value in real time</p>
      <TempInput
        scale='celsius'
        temp={celsius}
        onTempChange={handleCelciusChange}
       />
      <TempInput
        scale='fahrenheit'
        temp={fahrenheit}
        onTempChange={handleFahrenheitChange}
      />
    </div>
  )
};

export default Calculator;
