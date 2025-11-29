import React, { ReactNode } from 'react';
import '../TopBar/TopBar.css';

interface TopBarProps {
  children: ReactNode;
}

const TopBar = ({ children }: TopBarProps) => {
  return (
    <div className="topBar">
      <div className="topBarContent">{children}</div>
    </div>
  );
};

export default TopBar;
