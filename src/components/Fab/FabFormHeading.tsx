import "./FabFormHeading.css";

interface FabFormHeadingProps {
  content1: string;
  boldWord: string;
  content2: string;
}

const FabFormHeading: React.FC<FabFormHeadingProps> = ({
  content1,
  boldWord,
  content2,
}) => {
  return (
    <>
      <div className="report-issue-heading">
        {content1} <span className="report-issue-heading-imp">{boldWord}</span>{" "}
        <br></br>
        {content2}
      </div>
      <div className="report-issue-horizontal-line"></div>
    </>
  );
};

export default FabFormHeading;
