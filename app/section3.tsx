import React from 'react';
import Image from '../components/Image/Image';
import mobile2 from '../public/resources/mobile-2.png';
import function1 from '../public/resources/analysis/function-1.png';
import function2 from '../public/resources/analysis/function-2.png';
import function3 from '../public/resources/analysis/function-3.png';
import function4 from '../public/resources/analysis/function-4.png';
import function5 from '../public/resources/analysis/function-5.png';

const section3 = () => {
  return (
    <div className="grid grid-rows-[auto_auto_auto] gap-4 justify-items-center">
      <div className="blue-text self-center">
        <h3>Easy Analysis</h3>
      </div>
      <div className="pb-8">
        <p className="description gold">
          Instant clarity on the Masters’ profile. Get a snapshot of their trade
          history, profitability, risk, and portfolio all in one place.
        </p>
      </div>
      <div className="relative w-full max-w-md mx-auto">
        {/* Background image */}
        <Image path={mobile2} alt="Background" width={300} height={300} />
        {/* Overlay images */}
        <div className="absolute inset-0">
          {/* Top-left */}
          <div className="absolute -top-10 left-0 w-60 rounded-lg">
            <Image path={function1} alt="Top Left" width={200} height={200} />
          </div>

          {/* Middle-left */}
          <div className="absolute top-1/2 left-0 transform -translate-y-1/2 w-60 rounded-lg">
            <Image
              path={function2}
              alt="Middle Left"
              width={200}
              height={200}
            />
          </div>

          {/* Bottom-left */}
          <div className="absolute -bottom-5 left-0 w-60 rounded-lg">
            <Image
              path={function3}
              alt="Bottom Left"
              width={200}
              height={200}
            />
          </div>

          {/* Middle-right (higher) */}
          <div className="absolute top-1/3 right-0 transform -translate-y-1/2 w-60 rounded-lg">
            <Image
              path={function4}
              alt="Middle Right 1"
              width={200}
              height={200}
            />
          </div>

          {/* Middle-right (lower) */}
          <div className="absolute top-2/3 right-0 transform -translate-y-1/2 w-60 rounded-lg">
            <Image
              path={function5}
              alt="Middle Right 2"
              width={200}
              height={200}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default section3;
