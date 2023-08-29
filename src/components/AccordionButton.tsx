// AccordionButton.tsx
import React, { useState } from 'react';
import { ExpandMore, ExpandLess } from '@mui/icons-material';
import styles from './AccordionButton.module.css';

interface AccordionButtonProps {
  direction: 'top' | 'bottom' | 'left' | 'right';
}

const AccordionButton: React.FC<AccordionButtonProps> = ({ direction }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleAccordion = () => {
    setExpanded(!expanded);
  };

  return (
    <div className={`${styles.container} ${styles[direction]}`}>
      <button className={styles.button} onClick={toggleAccordion}>
        <div
          className={`${styles.expandIcon} ${
            styles[`${direction}Icon`]
          } ${expanded ? styles.rotatedIcon : ''}`}
        >
          {expanded ? <ExpandLess /> : <ExpandMore />}
        </div>
        Toggle Accordion
      </button>
      <div
        className={`${styles.content} ${
          expanded ? styles[`${direction}Content expandedContent`] : styles[`${direction}Content`]
        } ${styles.slideAnimation}`}
      >
        Accordion Content Here
      </div>
    </div>
  );
};

export default AccordionButton;
