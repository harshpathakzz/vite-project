import React from 'react';
import AccordionButton from './components/AccordionButton';

const App: React.FC = () => {
  return (
    <div>
      <AccordionButton direction="left" />
      <AccordionButton direction="right" />
      <AccordionButton direction="top" />
      <AccordionButton direction="bottom" />
    </div>
  );
};

export default App;
