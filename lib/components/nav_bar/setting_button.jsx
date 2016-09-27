import React from 'react';

const SettingButton = ({handleClick}) => {
  return(
    <button className='setting-button' onClick={handleClick}>
      {String.fromCharCode(9881)}
    </button>
  );
};



export default SettingButton;
