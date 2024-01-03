import React from 'react';
import Button from '../../components/Button/button';

const SomeComponent = () => {
  const handleClick = () => {
    console.log('Button clicked');
  };

  return (
    <div>
      <Button text="Click Me" onClick={handleClick} color="green" />
    </div>
  );
};

export default SomeComponent;
