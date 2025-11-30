import Slideshow from './slideshow';
import AuthFlow from '../authFlow';

const section5 = () => {
  return (
    <div className="grid grid-rows-[auto_auto_auto] gap-8 justify-items-center">
      <div className="blue-text self-center">
        <h3>How to Link MT4 Account</h3>
      </div>
      <div>
        <Slideshow></Slideshow>
      </div>
      <div>
        <AuthFlow></AuthFlow>
      </div>
    </div>
  );
};

export default section5;
