'use client'
import React from 'react';
import Button from '../components/Button';

const HomePage = () => {
  const handleClickPrimary = () => {
    alert('Primary Button clicked!');
  };

  const handleClickSecondary = () => {
    alert('Secondary Button clicked!');
  };

  return (
    <div>
      <h1>Welcome to my Next.js App</h1>
      <Button onClick={handleClickPrimary} type="primary" alertMessage="Primary button alert!">
        Click me! (Primary)
      </Button>
      <Button onClick={handleClickSecondary} type="secondary" alertMessage="Secondary button alert!">
        Click me! (Secondary)
      </Button>
    </div>
  );
};

export default HomePage;
