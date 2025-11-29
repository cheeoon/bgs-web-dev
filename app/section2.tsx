import Video from '@/components/Video/Video';
import Image from '@/components/Image/Image';
import listIcon from '../public/resources/list-icon.png';

const mobileVideoPath = '/resources/mobile-video.mov';
const mobileVideoPosterPath = '/resources/mobile-1.png';

const section2 = () => {
  return (
    <div className="grid grid-rows-1 md:grid-rows-[auto_auto] gap-4 justify-items-center">
      <div className="blue-text self-center">
        <h3>Fast Matching</h3>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="w-full max-w-lg aspect-video">
          <Video poster={mobileVideoPosterPath} src={mobileVideoPath}></Video>
        </div>
        <div className="grid">
          <ul>
            <li className="flex items-top gap-2 pb-10 pt-10">
              <Image path={listIcon} alt="Logo" width={150} height={150} />
              <span className="text-white self-top">
                <h4>Spotlight</h4>
              </span>
            </li>
            <li className="flex  items-top gap-2 pb-10">
              <Image path={listIcon} alt="Logo" width={150} height={150} />
              <span className="text-white self-top">
                <h4>Top Strategies</h4>
              </span>
            </li>
            <li className="flex  items-top gap-2 pb-10">
              <Image path={listIcon} alt="Logo" width={150} height={150} />
              <span className="text-white self-top">
                <h4>Low Drawdown</h4>
              </span>
            </li>
            <li className="flex  items-top gap-2 pb-10">
              <Image path={listIcon} alt="Logo" width={150} height={150} />
              <span className="text-white self-top">
                <h4>Medium Drawdown</h4>
              </span>
            </li>
            <li className="flex  items-top gap-2 pb-10">
              <Image path={listIcon} alt="Logo" width={150} height={150} />
              <span className="text-white self-top">
                <h4>High Drawdown</h4>
              </span>
            </li>
            <li className="flex  items-top gap-2 pb-10">
              <Image path={listIcon} alt="Logo" width={150} height={150} />
              <span className="text-white self-top">
                <h4>New Strategies</h4>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default section2;
