import "./GiveSuggestion.css";

import FabFormHeading from "../FabFormHeading";
import FabFormLabel from "../FabFormLabel";
import FabContainerAttach from "../FabContainerAttach";
import FabFormInput from "../FabFormInput";

interface GiveSuggestionProps {
  loggedIn: boolean;
  suggestionSelect: string;
  setSuggestionSelect: (newValue: string) => void;
  suggestionText: string;
  setSuggestionText: (newValue: string) => void;
  suggestionEmail: string;
  setSuggestionEmail: (newValue: string) => void;
  onSubmitForm: (newValue: string) => void;
}

const GiveSuggestion: React.FC<GiveSuggestionProps> = ({
  loggedIn,
  suggestionSelect,
  setSuggestionSelect,
  suggestionEmail,
  setSuggestionEmail,
  suggestionText,
  setSuggestionText,
  onSubmitForm,
}) => {
  return (
    <>
      <FabFormHeading
        content1="Share your"
        boldWord="Suggestions"
        content2=" with us for a chance to earn rewards!"
      />
      <div className="report-issue-choose">
        <FabFormLabel description="Choose a section" />
        <select
          value={suggestionSelect}
          onChange={(e) => setSuggestionSelect(e.target.value)}
        >
          <option value="" disabled selected hidden>
            Select
          </option>
          <option value="Concept cards">Concept cards</option>
          <option value="Interview Questions">Interview Questions</option>
          <option value="Practice Questions">Practice Questions</option>
          <option value="Quizzes">Quizzes</option>
          <option value="Quizzes">Others</option>
        </select>
      </div>
      <div className="report-issue-detail">
        <FabFormLabel
          description="Describe the suggestion in detail"
          required={true}
        />
        <FabContainerAttach
          reportIssueText={suggestionText}
          setReportIssueText={setSuggestionText}
        />
      </div>
      {!loggedIn && (
        <div className="report-issue-email-section">
          <FabFormLabel description="Enter an email to receive an update" />
          <FabFormInput
            placeholder="Enter your Email (optional)"
            currValue={suggestionEmail}
            setNewValue={setSuggestionEmail}
          />
        </div>
      )}
      <div className="report-issues-submit-container">
        <button
          className={
            suggestionText.length > 0
              ? "report-issues-submit"
              : "disabled-button report-issues-submit"
          }
          onClick={() => onSubmitForm("give-suggestion")}
        >
          Submit
        </button>
      </div>
    </>
  );
};

export default GiveSuggestion;
