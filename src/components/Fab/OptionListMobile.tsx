import "./OptionListMobile.css";
import shareFeedback from "../../assets/Fab/shareFeedback.svg";
import reportIssue from "../../assets/Fab/reportIssue.svg";
import giveSuggestion from "../../assets/Fab/giveSuggestion.svg";
import contactUs from "../../assets/Fab/contactUs.svg";
import fabToggleCross from "../../assets/Fab/fabToggleCross.svg";

interface OptionListMobileProps {
  closeToggle: () => void;
  setOption: (newValue: string) => void;
}

const OptionListMobile: React.FC<OptionListMobileProps> = ({
  closeToggle,
  setOption,
}) => {
  return (
    <div className="option-list-mobile-container">
      <div
        className="option-mobile-container"
        onClick={() => setOption("contact-us")}
      >
        <img src={contactUs} className="option-mobile-img" />
      </div>
      <div
        className="option-mobile-container"
        onClick={() => setOption("give-suggestion")}
      >
        <img src={giveSuggestion} className="option-mobile-img" />
      </div>
      <div
        className="option-mobile-container"
        onClick={() => setOption("share-feedback")}
      >
        <img src={shareFeedback} className="option-mobile-img" />
      </div>
      <div
        className="option-mobile-container"
        onClick={() => setOption("report-issue")}
      >
        <img src={reportIssue} className="option-mobile-img" />
      </div>
      <div className="option-mobile-container" onClick={closeToggle}>
        <img src={fabToggleCross} className="option-mobile-img" />
      </div>
    </div>
  );
};

export default OptionListMobile;
