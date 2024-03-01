import "./FabFormContainer.css";
import OptionListMobile from "./OptionListMobile";
import ReportIssue from "./FabForms/ReportIssue";

interface FabFormContainerProps {
  closeToggle: () => void;
  setOption: (newValue: string) => void;
  selectedOption: string;
}

const FabFormContainer: React.FC<FabFormContainerProps> = ({
  closeToggle,
  setOption,
  selectedOption,
}) => {
  return (
    <>
      <div className="fab-form-container">
        <div className="fab-form-relative-container">
          <OptionListMobile closeToggle={closeToggle} setOption={setOption} />
          {selectedOption === "report-issue" && <ReportIssue />}
        </div>
      </div>
    </>
  );
};

export default FabFormContainer;
