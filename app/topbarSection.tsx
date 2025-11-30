import Timer from '@/components/Timer/Timer';
import Image from '@/components/Image/Image';
import TopBar from '@/components/TopBar/TopBar';
import AuthFlow from './authFlow';
import Logo from '../public/resources/logo.png';

const topbarSection = () => {
  return (
    <TopBar>
      <div className="grid grid-cols-4 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 items-center w-full min-h-[60px] px-4 gap-x-4">
        <div className="justify-self-start w-full">
          <Image path={Logo} alt="Logo" width={150} height={150} />
        </div>
        <div className="hidden lg:flex flex-col items-center justify-center text-white justify-self-center">
          <h5>PROMOTION</h5>
          <h5>ENDS IN</h5>
        </div>
        <div className="hidden lg:flex justify-self-center">
          <Timer />
        </div>
        <div className="justify-self-end w-full flex justify-end">
          <AuthFlow></AuthFlow>
        </div>
      </div>
    </TopBar>
  );
};

export default topbarSection;
