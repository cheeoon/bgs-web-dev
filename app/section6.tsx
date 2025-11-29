import Icon1 from '../public/resources/choose/icon-1.png';
import Icon2 from '../public/resources/choose/icon-2.png';
import Icon3 from '../public/resources/choose/icon-3.png';
import Icon4 from '../public/resources/choose/icon-4.png';
import Image from '@/components/Image/Image';
import RegisterButton from '@/components/RegisterButton/RegisterButton';

const rows = [
  {
    icon: Icon1,
    title: 'Regulated',
    text: 'The copy trading platform is regulated. Our technology partner is regulated. And so are we, as a brokerage. We operate under strict compliance because your trust and peace of mind are everything.',
  },
  {
    icon: Icon2,
    title: '0 Commissions',
    text: 'When investing, the small margins matter. Blackwell Invest offers 0 commissions investing, and 0 cost to install our app.',
  },
  {
    icon: Icon3,
    title: 'User-friendly',
    text: 'With an intuitive interface, easy trade execution, and hassle-free management, copying top traders has never been simpler. Trade smarter, not harder!',
  },
  {
    icon: Icon4,
    title: 'Tier 1 liquidity',
    text: 'Blackwell Invest sources the best liquidity to provide a deep product range and broad market access. Fast order execution and transparent pricing.',
  },
];

const Section6 = () => {
  return (
    <div className="grid grid-rows-[auto_auto_auto] gap-8 justify-items-center">
      <div className="blue-text self-center">
        <h3>Why Choose Us?</h3>
      </div>
      <div className="grid grid-rows-4 gap-8 justify-items-center mx-32">
        {rows.map((row, i) => (
          <div
            key={i}
            className="grid grid-cols-1 md:grid-cols-[200px_200px_1fr] xl:grid-cols-[250px_250px_1fr] items-center bg-white rounded-xl w-full px-4 gap-8"
          >
            <Image path={row.icon} alt={row.title} width={200} height={200} />

            <div className="blue-text text-center">
              <h4>{row.title}</h4>
            </div>

            <div className="description black">
              <p>{row.text}</p>
            </div>
          </div>
        ))}
      </div>
      <div>
        <RegisterButton></RegisterButton>
      </div>
    </div>
  );
};

export default Section6;
