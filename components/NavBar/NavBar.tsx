'use client';
import { useState } from 'react';
import Image from '../Image/Image';
import Icon1blue from '../../public/resources/navigate/icon1-blue.png';
import Icon2blue from '../../public/resources/navigate/icon2-blue.png';
import Icon3blue from '../../public/resources/navigate/icon3-blue.png';
import Icon4blue from '../../public/resources/navigate/icon4-blue.png';
import Icon5blue from '../../public/resources/navigate/icon5-blue.png';
import Icon1 from '../../public/resources/navigate/icon1.png';
import Icon2 from '../../public/resources/navigate/icon2.png';
import Icon3 from '../../public/resources/navigate/icon3.png';
import Icon4 from '../../public/resources/navigate/icon4.png';
import Icon5 from '../../public/resources/navigate/icon5.png';
import '../NavBar/NavBar.css';

const navItems = [
  { id: 'Discover', active: Icon1blue, inactive: Icon1 },
  { id: 'Activity', active: Icon2blue, inactive: Icon2 },
  { id: 'Trade', active: Icon3blue, inactive: Icon3 },
  { id: 'Positions', active: Icon4blue, inactive: Icon4 },
  { id: 'Account', active: Icon5blue, inactive: Icon5 },
];

interface NavBarProps {
  onClick: (id: string) => void;
}

const NavBar = ({ onClick }: NavBarProps) => {
  const [active, setActive] = useState<string>('Activity');

  const handleClick = (itemId: string) => {
    setActive(itemId); // update internal state
    onClick(itemId); // notify parent
  };

  return (
    <nav className="navbar flex">
      {navItems.map((item) => {
        const icon = active === item.id ? item.active : item.inactive;
        const buttonClass =
          active === item.id ? 'navbutton active' : 'navbutton';

        return (
          <button
            key={item.id}
            type="button"
            className={buttonClass}
            onClick={() => handleClick(item.id)}
          >
            <Image path={icon} alt={item.id} width={32} height={32} />
          </button>
        );
      })}
    </nav>
  );
};

export default NavBar;
