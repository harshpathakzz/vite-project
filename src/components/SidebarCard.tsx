// src/SidebarCard.tsx

import React, { useState, useEffect, useRef, ReactNode } from 'react';
import styles from './SidebarCard.module.css';
import IconButton from '@mui/material/IconButton';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import CloseIcon from '@mui/icons-material/Close';

interface SidebarCardProps {
  cardWidth?: string;
  cardHeight?: string;
  children?: ReactNode;
}

const SidebarCard: React.FC<SidebarCardProps> = ({ cardWidth = '300px', cardHeight = '100%', children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleClose = () => {
    setIsOpen(false);
  };


  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', handleClose);
    } else {
      document.removeEventListener('mousedown', handleClose);
    }

    return () => {
      document.removeEventListener('mousedown', handleClose);
    };
  }, [isOpen]);

  useEffect(() => {
    document.addEventListener('mousedown', handleClose);
  
    return () => {
      document.removeEventListener('mousedown', handleClose);
    };
  }, []);
  
  return (
    <div className={styles.sidebarContainer}>
      {!isOpen &&
      <IconButton className={styles.sidebarButton} onClick={toggleSidebar}>
         <KeyboardArrowRightIcon />
      </IconButton>}
      <div
        ref={cardRef}
        style={{ width: cardWidth, height: cardHeight }}
        className={`${styles.card} ${isOpen ? styles.active : ''}`}
      >
        {isOpen && (
          <IconButton className={styles.closeButton} onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        )}
        {children}
      </div>
    </div>
  );
};

export default SidebarCard;
