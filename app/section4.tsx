'use client';
import Image from '@/components/Image/Image';
import { useState } from 'react';
import GooglePlay from '../public/resources/google-play.jpg';
import AppStore from '../public/resources/app-store.jpg';
import guide2 from '../public/resources/guide/guide-2.png';

const Section4 = () => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive); // toggle state
  };

  return (
    <div className="grid grid-rows-[auto_auto_auto] gap-8 justify-items-center">
      <div className="blue-text self-center">
        <h3>Trade Like a Pro in Minutes</h3>
      </div>
      <div>
        <div className="grid grid-cols-[auto_auto] gap-8 justify-items-center">
          <div className="grid gap-y-4">
            <div className="flex items-center border border-[#f2df79] rounded-lg p-4">
              <span className="text-xl font-bold text-[#f2df79] pr-4">1</span>
              <span className="text-white">
                Install our app, &quot;Blackwell Invest&quot;
              </span>
            </div>

            {/* Step 2 - connect to image */}
            <div
              onClick={handleClick}
              className="flex items-center border border-[#F37406] rounded-lg p-4 "
            >
              <span className="text-xl font-bold text-[#F37406] pr-4">2</span>
              <span className="text-white">
                Choose a signal Master and click &quot;Copy&quot;
              </span>
            </div>
            {/* Step 3 */}
            <div className="flex items-center border border-[#f2df79] rounded-lg p-4">
              <span className="text-xl font-bold text-[#f2df79] pr-4">3</span>
              <span className="text-white">
                Set your trade size preferences
              </span>
            </div>
            {/* Step 4 */}
            <div className="flex items-center border border-[#F37406] rounded-lg p-4">
              <span className="text-xl font-bold text-[#F37406] pr-4">4</span>
              <span className="text-white">
                Click &quot;Agree and Copy&quot;
              </span>
            </div>
          </div>
          <div>
            <div className="relative rounded-lg shadow-lg border border-[#F37406]">
              <Image
                path={guide2} // your screenshot
                alt="Trade example"
                width={400}
                height={400}
              />
            </div>
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

export default Section4;
