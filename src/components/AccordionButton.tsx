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
        {expanded ? (
          <ExpandLess
            className={`${styles.expandIcon} ${
              styles[`${direction}Icon`]
            } ${expanded ? styles.rotatedIcon : ''}`}
          />
        ) : (
          <ExpandMore
            className={`${styles.expandIcon} ${styles[`${direction}Icon`]}`}
          />
        )}
        Toggle Accordion
      </button>
      {expanded && <div className={styles.content}>Accordion Content Here</div>}
    </div>
  );
};

export default AccordionButton;
