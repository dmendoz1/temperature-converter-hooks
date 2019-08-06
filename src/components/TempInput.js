import React from 'react';


const TempInput = ({scale, onTempChange, temp}) => {
  const handleInputChange = e => {
    onTempChange(e.target.value);
  }

  return (
    <fieldset>
      <legend>Temperature in {scale}</legend>
    <input
      type="text"
      value={temp}
      onChange={handleInputChange}
     />
    </fieldset>
  )
}

export default TempInput;
