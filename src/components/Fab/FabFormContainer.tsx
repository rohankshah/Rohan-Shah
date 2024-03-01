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
  reportIssueSelected: string;
  setReportIssueSelected: (newValue: string) => void;
  reportIssueText: string;
  setReportIssueText: (newValue: string) => void;
  reportIssueEmail: string;
  setReportIssueEmail: (newValue: string) => void;
  feedbackText: string;
  setFeedbackText: (newValue: string) => void;
  feedbackAnonymous: boolean;
  setFeedbackAnonymous: (newValue: boolean) => void;
  feedbackEmail: string;
  setFeedbackEmail: (newValue: string) => void;
  suggestionSelect: string;
  setSuggestionSelect: (newValue: string) => void;
  suggestionText: string;
  setSuggestionText: (newValue: string) => void;
  suggestionEmail: string;
  setSuggestionEmail: (newValue: string) => void;
  contactName: string;
  setContactName: (newValue: string) => void;
  contactEmail: string;
  setContactEmail: (newValue: string) => void;
  contactNumber: string;
  setContactNumber: (newValue: string) => void;
  contactText: string;
  setContactText: (newValue: string) => void;
  onSubmitForm: (newValue: string) => void;
}

const FabFormContainer: React.FC<FabFormContainerProps> = ({
  closeToggle,
  setOption,
  selectedOption,
  loggedIn,
  currentSelected,
  reportIssueSelected,
  setReportIssueSelected,
  reportIssueText,
  setReportIssueText,
  reportIssueEmail,
  setReportIssueEmail,
  feedbackText,
  setFeedbackText,
  feedbackAnonymous,
  setFeedbackAnonymous,
  feedbackEmail,
  setFeedbackEmail,
  suggestionSelect,
  setSuggestionSelect,
  suggestionEmail,
  setSuggestionEmail,
  suggestionText,
  setSuggestionText,
  contactName,
  setContactName,
  contactEmail,
  setContactEmail,
  contactNumber,
  setContactNumber,
  contactText,
  setContactText,
  onSubmitForm,
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
            <ReportIssue
              loggedIn={loggedIn}
              reportIssueSelected={reportIssueSelected}
              setReportIssueEmail={setReportIssueEmail}
              setReportIssueSelected={setReportIssueSelected}
              setReportIssueText={setReportIssueText}
              reportIssueEmail={reportIssueEmail}
              reportIssueText={reportIssueText}
              onSubmitForm={onSubmitForm}
            />
          )}
          {selectedOption === "give-suggestion" && (
            <GiveSuggestion
              loggedIn={loggedIn}
              suggestionSelect={suggestionSelect}
              setSuggestionSelect={setSuggestionSelect}
              suggestionEmail={suggestionEmail}
              setSuggestionEmail={setSuggestionEmail}
              suggestionText={suggestionText}
              setSuggestionText={setSuggestionText}
              onSubmitForm={onSubmitForm}
            />
          )}
          {selectedOption === "share-feedback" && (
            <ShareFeedback
              loggedIn={loggedIn}
              feedbackText={feedbackText}
              setFeedbackText={setFeedbackText}
              feedbackAnonymous={feedbackAnonymous}
              setFeedbackAnonymous={setFeedbackAnonymous}
              feedbackEmail={feedbackEmail}
              setFeedbackEmail={setFeedbackEmail}
              onSubmitForm={onSubmitForm}
            />
          )}
          {selectedOption === "contact-us" && (
            <ContactUs
              loggedIn={loggedIn}
              contactName={contactName}
              setContactName={setContactName}
              contactEmail={contactEmail}
              setContactEmail={setContactEmail}
              contactNumber={contactNumber}
              setContactNumber={setContactNumber}
              contactText={contactText}
              setContactText={setContactText}
              onSubmitForm={onSubmitForm}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default FabFormContainer;
