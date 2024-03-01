import "./FabFormContainer.css";
import OptionListMobile from "./OptionListMobile";
import ReportIssue from "./FabForms/ReportIssue";
import GiveSuggestion from "./FabForms/GiveSuggestion";
import ShareFeedback from "./FabForms/ShareFeedback";
import ContactUs from "./FabForms/ContactUs";

interface FabFormContainerProps {
  closeToggle: () => void;
  setOption: (newValue: string) => void;
  selectedOption: string;
  loggedIn: boolean;
  currentSelected: string;
}

const FabFormContainer: React.FC<FabFormContainerProps> = ({
  closeToggle,
  setOption,
  selectedOption,
  loggedIn,
  currentSelected,
}) => {
  return (
    <>
      <div className="fab-form-container">
        <div className="fab-form-relative-container">
          <OptionListMobile
            closeToggle={closeToggle}
            setOption={setOption}
            currentSelected={currentSelected}
          />
          {selectedOption === "report-issue" && (
            <ReportIssue loggedIn={loggedIn} />
          )}
          {selectedOption === "give-suggestion" && (
            <GiveSuggestion loggedIn={loggedIn} />
          )}
          {selectedOption === "share-feedback" && (
            <ShareFeedback loggedIn={loggedIn} />
          )}
          {selectedOption === "contact-us" && <ContactUs loggedIn={loggedIn} />}
        </div>
      </div>
    </>
  );
};

export default FabFormContainer;
