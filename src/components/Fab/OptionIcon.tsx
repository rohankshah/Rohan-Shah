import "./OptionIcon.css";
import contactUs from "../../assets/Fab/contactUs.svg";
import giveSuggestion from "../../assets/Fab/giveSuggestion.svg";
import shareFeedback from "../../assets/Fab/shareFeedback.svg";
import reportIssue from "../../assets/Fab/reportIssue.svg";

interface OptionIconProps {
  name: string;
  setOption: (newValue: string) => void;
  noLabel?: boolean;
}

const OptionIcon: React.FC<OptionIconProps> = ({
  name,
  setOption,
  noLabel = false,
}) => {
  return (
    <div className="fab-menu-item">
      {noLabel === false && (
        <span className="fab-menu-label" onClick={() => setOption(name)}>
          {name
            .split("-")
            .map((ele) => ele[0].toUpperCase() + ele.slice(1))
            .join(" ")}
        </span>
      )}
      <div className="icon-button" onClick={() => setOption(name)}>
        {name === "report-issue" && <img src={reportIssue} alt={name} />}
        {name === "share-feedback" && <img src={shareFeedback} alt={name} />}
        {name === "give-suggestion" && <img src={giveSuggestion} alt={name} />}
        {name === "contact-us" && <img src={contactUs} alt={name} />}
      </div>
    </div>
  );
};

export default OptionIcon;
