// src/SidebarCard.tsx

import React, { useState, useEffect, useRef, ReactNode } from 'react';
import styles from './SidebarCard.module.css';

interface SidebarCardProps {
  buttonText: string;
  cardWidth?: string;
  cardHeight?: string;
  children?: ReactNode;
}

const SidebarCard: React.FC<SidebarCardProps> = ({ buttonText, cardWidth = '300px', cardHeight = '100%', children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (cardRef.current && !cardRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className={styles.sidebarContainer}>
      <button className={styles.sidebarButton} onClick={toggleSidebar}>
        {buttonText}
      </button>
      <div
        ref={cardRef}
        style={{ width: cardWidth, height: cardHeight }}
        className={`${styles.card} ${isOpen ? styles.active : ''}`}
      >
        {children}
      </div>
    </div>
  );
};

export default SidebarCard;
