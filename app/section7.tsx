'use client';

import NavBar from '@/components/NavBar/NavBar';
import React, { useState } from 'react';
import Image from '@/components/Image/Image';
import GooglePlay from '../public/resources/google-play.jpg';
import AppStore from '../public/resources/app-store.jpg';
import reason1 from '../public/resources/reason/reason-1.png';
import reason2 from '../public/resources/reason/reason-2.png';
import reason3 from '../public/resources/reason/reason-3.png';
import reason4 from '../public/resources/reason/reason-4.png';
import reason5 from '../public/resources/reason/reason-5.png';

const items = [
  {
    id: 'Discover',
    text: 'Quick Explore all the investment Masters available on Blackwell Invest. Dive into their profiles and analyse their profitability at a glance.',
    image: reason1,
  },
  {
    id: 'Activity',
    text: 'See the past trades made by the signals you are copying from the last 30 days or track their open positions. Monitor their strategy, and make informed decisions with timely updates of the trades shaping your portfolio. info',
    image: reason2,
  },
  {
    id: 'Trade',
    text: 'Arrow Seamlessly trade oil CFDs, indices, and currency pairs with ease. ',
    image: reason3,
  },
  {
    id: 'Positions',
    text: 'Easily track the status of all your trades and monitor your account metrics in real-time.  info',
    image: reason4,
  },
  {
    id: 'Account',
    text: 'Arrow Access detailed information about your trading account, monitor copier drawdown levels, assess your profitability, and keep track of your  trade performance – all in one place!',
    image: reason5,
  },
];

const Section7 = () => {
  const [itemId, setItemId] = useState<string>('Activity');

  const selectedItem = items.find((item) => item.id === itemId) || items[1];

  const handleNavBarClick = (itemId: string) => {
    console.log('NavBar item clicked:', itemId);
    setItemId(itemId);
  };

  return (
    <div className="grid grid-rows-[auto_auto_auto] gap-8 justify-items-center mx-32">
      <div className="blue-text self-center">
        <h3>Navigate Our App in 5 Clicks</h3>
      </div>
      <div className="w-full grid grid-rows-[auto_1fr]">
        <div className="w-full justify-items-start">
          <NavBar onClick={handleNavBarClick} />
        </div>
        <div className="w-full bg-[#ffd700] rounded-lg -translate-y-2 px-8 pt-8 pb-8 grid grid-cols-2 gap-4">
          <div className="flex flex-col justify-center pl-10">
            <div className="blue-text text-left">
              <h4>{selectedItem.id}</h4>
            </div>
            <div className="description black pt-2">
              <p>{selectedItem.text}</p>
            </div>
          </div>
          <div className="flex justify-center items-end">
            <Image
              path={selectedItem.image}
              alt={selectedItem.id}
              width={400}
              height={400}
            />
          </div>
        </div>
      </div>
      <div className="download-buttons flex items-center space-x-4">
        <Image
          path={GooglePlay}
          alt="Google Play"
          width={100}
          height={100}
          isBorderRadius={true}
        />
        <Image
          path={AppStore}
          alt="App Store"
          width={100}
          height={100}
          isBorderRadius={true}
        />
      </div>
    </div>
  );
};

export default Section7;
