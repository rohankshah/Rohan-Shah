import "./OptionListMobile.css";
import shareFeedback from "../../assets/Fab/shareFeedback.svg";
import reportIssue from "../../assets/Fab/reportIssue.svg";
import giveSuggestion from "../../assets/Fab/giveSuggestion.svg";
import contactUs from "../../assets/Fab/contactUs.svg";
import fabToggleCross from "../../assets/Fab/fabToggleCross.svg";

interface OptionListMobileProps {
  closeToggle: () => void;
  setOption: (newValue: string) => void;
  currentSelected?: string;
  options: string[];
}

const OptionListMobile: React.FC<OptionListMobileProps> = ({
  closeToggle,
  setOption,
  currentSelected,
  options,
}) => {
  return (
    <div className="option-list-mobile-container">
      {options.includes("contact-us") && (
        <div
          className={
            currentSelected === "contact-us" ? "icon-button-outer" : ""
          }
          onClick={() => setOption("contact-us")}
        >
          <div className="option-mobile-container">
            <img src={contactUs} className="option-mobile-img" />
          </div>
        </div>
      )}
      {options.includes("give-suggestion") && (
        <div
          className={
            currentSelected === "give-suggestion" ? "icon-button-outer" : ""
          }
          onClick={() => setOption("give-suggestion")}
        >
          <div className="option-mobile-container">
            <img src={giveSuggestion} className="option-mobile-img" />
          </div>
        </div>
      )}
      {options.includes("share-feedback") && (
        <div
          className={
            currentSelected === "share-feedback" ? " icon-button-outer" : ""
          }
          onClick={() => setOption("share-feedback")}
        >
          <div className="option-mobile-container">
            <img src={shareFeedback} className="option-mobile-img" />
          </div>
        </div>
      )}
      {options.includes("report-issue") && (
        <div
          className={
            currentSelected === "report-issue" ? "icon-button-outer" : ""
          }
          onClick={() => setOption("report-issue")}
        >
          <div className="option-mobile-container">
            <img src={reportIssue} className="option-mobile-img" />
          </div>
        </div>
      )}
      <div className="option-mobile-container" onClick={closeToggle}>
        <img src={fabToggleCross} className="option-mobile-img" />
      </div>
    </div>
  );
};

export default OptionListMobile;
