import '../app/globals.css';
import Section1 from './section1';
import Section2 from './section2';
import Section3 from './section3';
import Section4 from './section4';
import Section6 from './section6';
import Section7 from './section7';
import Section8 from './section8';
import Section5 from './section5/section5';
import TopBarSection from './topbarSection';
import ScrollToTopButton from '@/components/ScrollToTopButton/ScrollToTopButton';

export default function Home() {
  return (
    <>
      <div className="topBarWrapper">
        <TopBarSection />
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
      <ScrollToTopButton></ScrollToTopButton>
    </>
  );
}
