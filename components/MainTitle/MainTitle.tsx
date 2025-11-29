import '../MainTitle/MainTitle.css';

interface MainTitleProps {
  string: string;
}

const MainTitle = ({ string }: MainTitleProps) => {
  return <h1 className="main-title">{string}</h1>;
};

export default MainTitle;
