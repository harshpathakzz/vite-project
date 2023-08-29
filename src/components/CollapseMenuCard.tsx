import React, { useState } from 'react';
import styles from './CollapseMenuCard.module.css';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

interface CollapseMenuCardProps {
  title: string;
  content: React.ReactNode;
  direction: 'top' | 'bottom' | 'left' | 'right';
}

const CollapseMenuCard: React.FC<CollapseMenuCardProps> = ({
  title,
  content,
  direction,
}) => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  const getArrowIcon = () => {
    const isOpen = !isCollapsed;

    switch (direction) {
      case 'top':
        return isOpen ? <ArrowUpwardIcon /> : <ArrowDownwardIcon />;
      case 'bottom':
        return isOpen ? <ArrowDownwardIcon /> : <ArrowUpwardIcon />;
      case 'left':
        return isOpen ? <ArrowBackIcon /> : <ArrowForwardIcon />;
      case 'right':
        return isOpen ? <ArrowForwardIcon /> : <ArrowBackIcon />;
      default:
        return null;
    }
  };

  return (
    <div className={`${styles.collapseMenuCard} ${styles[direction]}`}>
      <button
        className={styles.arrowButton}
        onClick={toggleCollapse}
        aria-label={isCollapsed ? 'Expand' : 'Collapse'}
      >
        <span className={styles.arrowIcon}>{getArrowIcon()}</span>
      </button>
      <div
        className={`${styles.cardContentWrapper} ${isCollapsed ? '' : styles.open}`}
      >
        <div className={styles.cardContent}>{content}</div>
      </div>
    </div>
  );
};

export default CollapseMenuCard;
