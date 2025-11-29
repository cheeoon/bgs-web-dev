import React from 'react';
import Slideshow from './slideshow';
import RegisterButton from '@/components/RegisterButton/RegisterButton';

const Section5 = () => {
  return (
    <div className="grid grid-rows-[auto_auto_auto] gap-8 justify-items-center">
      <div className="blue-text self-center">
        <h3>How to Link MT4 Account</h3>
      </div>
      <div>
        <Slideshow></Slideshow>
      </div>
      <div>
        <RegisterButton></RegisterButton>
      </div>
    </div>
  );
};

export default Section5;
