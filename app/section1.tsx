import Hand from '../public/resources/hand.png';
import '../app/globals.css';
import GooglePlay from '../public/resources/google-play.jpg';
import AppStore from '../public/resources/app-store.jpg';
import MainTitle from '@/components/MainTitle/MainTitle';
import SubTitle from '@/components/SubTitle/SubTitle';
import Regulated from '../public/resources/regular.png';
import Image from '@/components/Image/Image';
import AuthFlow from './authFlow';

const section1 = () => {
  return (
    <div className="section1Wrapper">
      {/* Left column */}
      <div className="section1Left">
        <Image path={Hand} alt="Hand" width={4000} height={4000} />
      </div>

      {/* Right column */}
      <div className="section1Right">
        <div className="flex items-start">
          <div className="flex flex-col items-center px-4 gap-y-2">
            <MainTitle string="COPY TRADING" />
            <SubTitle string="with Blackwell Invest" />
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
              <div className="absolute pl-[210px] pt-[90px] opacity-50">
                <Image
                  path={Regulated}
                  alt="Regulated"
                  width={150}
                  height={150}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="blue-text">
          <h3>Choose & Trade</h3>
        </div>
        <div className="gold-text">
          <h3>Ready-To-Go Strategies</h3>
        </div>
        <div className="w-3/4">
          <p className="description">
            Browse and copy hundreds of investment strategies developed by
            master traders! Whether you are a pro or beginner, you can now trade
            quicker and more confidently.
          </p>
        </div>
        <div className="tags">
          <div className="border border-[#f2df79] rounded-lg p-2 ">Forex</div>
          <div className="border border-[#F37406] rounded-lg p-2">
            Precious Metals
          </div>
          <div className="border border-[#ff0000] rounded-lg p-2">Oil</div>
          <div className="border border-[#040dbf] rounded-lg p-2">Indices</div>
        </div>
        <div>
          <AuthFlow></AuthFlow>
        </div>
        <p className="risk-text">
          When you invest, your capital is at risk. Be prudent.
        </p>
      </div>
    </div>
  );
};

export default section1;
