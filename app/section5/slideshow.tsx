'use client';
import { useRef } from 'react';
import Image from '../../components/Image/Image';
import step1 from '../../public/resources/register/step-1.png';
import step2 from '../../public/resources/register/step-2.png';
import step3 from '../../public/resources/register/step-3.png';
import step4 from '../../public/resources/register/step-4.png';
import step5 from '../../public/resources/register/step-5.png';
import step6 from '../../public/resources/register/step-6.png';
import step7 from '../../public/resources/register/step-7.png';
import step8 from '../../public/resources/register/step-8.png';
import arrow from '../../public/resources/arrow.png';

const step1Text = 'Install our app, “Blackwell Invest”';
const step2Text = 'Login OR create a new account';
const step3Text = 'Click “Account”';
const step4Text = 'Click “Link an account”';
const step5Text = 'Select “BlackwellGlobalAsia-Live” server';
const step6Text =
  'Fill in your Blackwell Global trading account OR create a new account';
const step7Text = 'Click “Copy Trades”';
const step8Text = 'Click “Done”';

const images = [step1, step2, step3, step4, step5, step6, step7, step8];
const texts = [
  step1Text,
  step2Text,
  step3Text,
  step4Text,
  step5Text,
  step6Text,
  step7Text,
  step8Text,
];

const Slideshow = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (containerRef.current) {
      const width = containerRef.current.clientWidth;
      containerRef.current.scrollBy({
        left: direction === 'right' ? width : -width,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="relative w-full overflow-hidden hide-scrollbar">
      <div
        ref={containerRef}
        className="flex gap-4 overflow-x-auto scroll-smooth hide-scrollbar mx-32"
      >
        {images.map((src, i) => {
          return (
            <>
              <div
                key={`img-${i}`}
                className="shrink-0 border border-[#F37406] rounded-4xl overflow-hidden]"
              >
                <div className="grid grid-rows-[auto_auto] gap-2">
                  <Image
                    path={src}
                    alt={`Slide ${i}`}
                    width={400}
                    height={400}
                  />
                  <div className="flex items-center justify-center w-full px-2">
                    <h4 className="description text-center wrap-break-word max-w-[300px] text-5xl">
                      {texts[i]}
                    </h4>
                  </div>
                </div>
              </div>
              {/* Insert arrow between first and second image */}
              {i !== 7 && (
                <div
                  key="arrow"
                  className="shrink-0 rounded-lg -mx-4 bg-[#3a53ba] flex items-center justify-center"
                >
                  <Image path={arrow} alt="Arrow" width={50} height={50} />
                </div>
              )}
            </>
          );
        })}
      </div>
      <button
        onClick={() => scroll('left')}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full"
      >
        &#8249;
      </button>
      <button
        onClick={() => scroll('right')}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full"
      >
        &#8250;
      </button>
    </div>
  );
};
export default Slideshow;
