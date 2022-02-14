import React from 'react';
import cl from './ButtonShadow.module.css';

const ButtonShadow = ({ children, ...props }) => {
  return (
    <button {...props} className={cl.button_shadow}>
      {children}
    </button>
  );
};

export default ButtonShadow;
