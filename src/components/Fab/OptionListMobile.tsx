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
}

const OptionListMobile: React.FC<OptionListMobileProps> = ({
  closeToggle,
  setOption,
  currentSelected,
}) => {
  return (
    <div className="option-list-mobile-container">
      <div
        className={currentSelected === "contact-us" ? "icon-button-outer" : ""}
        onClick={() => setOption("contact-us")}
      >
        <div className="option-mobile-container">
          <img src={contactUs} className="option-mobile-img" />
        </div>
      </div>
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
      <div className="option-mobile-container" onClick={closeToggle}>
        <img src={fabToggleCross} className="option-mobile-img" />
      </div>
    </div>
  );
};

export default OptionListMobile;
