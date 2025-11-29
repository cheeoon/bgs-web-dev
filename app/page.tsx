import Timer from '@/components/Timer/Timer';
import Image from '@/components/Image/Image';
import Logo from '../public/resources/logo.png';
import '../app/globals.css';
import TopBar from '@/components/TopBar/TopBar';
import Section1 from './section1';
import Section2 from './section2';
import Section3 from './section3';
import Section4 from './section4';
import Section5 from './section5/section5';
import RegisterButton from '@/components/RegisterButton/RegisterButton';

export default function Home() {
  return (
    <>
      <div className="topBarWrapper">
        <TopBar>
          <div className="flex items-center justify-between w-full min-h-[60px] px-4 gap-x-32">
            <div>
              <Image path={Logo} alt="Logo" width={150} height={150} />
            </div>
            <div className="hidden md:flex flex-col items-center text-white">
              <h5>PROMOTION</h5>
              <h5>ENDS IN</h5>
            </div>
            <div className="hidden md:flex">
              <Timer />
            </div>
            <div className="order-last">
              <RegisterButton></RegisterButton>
            </div>
          </div>
        </TopBar>
      </div>
      <div className="contentWrapper">
        <section className="sectionContentWrapper">
          <Section1 />
        </section>
        <section className="sectionContentWrapper">
          <Section2 />
        </section>
        <section className="sectionContentWrapper">
          <Section3 />
        </section>
        <section className="relative sectionContentWrapperWithBg">
          {/* Background (ignored by layout) */}
          <div className="absolute aspect-video inset-0 bg-[url(/resources/bg-1.png)] bg-cover bg-center -z-10"></div>
          {/* Section content */}
          <Section4 />
        </section>
        <section className="sectionContentWrapper">
          <Section5 />
        </section>
      </div>
    </>
  );
}
