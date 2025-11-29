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
import Section6 from './section6';
import Section7 from './section7';
import Section8 from './section8';

export default function Home() {
  return (
    <>
      <div className="topBarWrapper">
        <TopBar>
          <div className="grid grid-cols-4 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 items-center w-full min-h-[60px] px-4 gap-x-4">
            {/* Logo: left */}
            <div className="justify-self-start w-full">
              <Image path={Logo} alt="Logo" width={150} height={150} />
            </div>

            {/* Middle content: centered */}
            <div className="hidden lg:flex flex-col items-center justify-center text-white justify-self-center">
              <h5>PROMOTION</h5>
              <h5>ENDS IN</h5>
            </div>

            {/* Timer */}
            <div className="hidden lg:flex justify-self-center">
              <Timer />
            </div>

            {/* Register Button: right */}
            <div className="justify-self-end w-full flex justify-end">
              <RegisterButton />
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
          <div className="absolute aspect-video inset-0 bg-[url(/resources/bg-1.png)] bg-cover bg-center -z-10"></div>
          <Section4 />
        </section>
        <section className="sectionContentWrapper">
          <Section5 />
        </section>
        <section className="relative sectionContentWrapperWithBg">
          <div className="absolute aspect-video inset-0 bg-[url(/resources/bg-2.png)] bg-cover bg-center -z-10"></div>
          <Section6 />
        </section>
        <section className="sectionContentWrapper">
          <Section7 />
        </section>
        <section className="relative sectionContentWrapper">
          <div className="absolute inset-0 -z-10 bg-[url(/resources/bg-3.png)] bg-cover h-300 md:h-[750px]"></div>
          <Section8 />
        </section>
      </div>
    </>
  );
}
