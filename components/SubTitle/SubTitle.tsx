import '../SubTitle/SubTitle.css';

interface SubTitleProps {
  string: string;
}

const SubTitle = ({ string }: SubTitleProps) => {
  return <div className="subtitle">{string}</div>;
};

export default SubTitle;
