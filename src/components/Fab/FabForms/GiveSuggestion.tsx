import "./GiveSuggestion.css";

import FabFormHeading from "../FabFormHeading";
import FabFormLabel from "../FabFormLabel";
import FabContainerAttach from "../FabContainerAttach";
import FabFormInput from "../FabFormInput";

interface GiveSuggestionProps {
  loggedIn: boolean;
}

const GiveSuggestion: React.FC<GiveSuggestionProps> = ({ loggedIn }) => {
  return (
    <>
      <FabFormHeading
        content1="Share your"
        boldWord="Suggestions"
        content2=" with us for a chance to earn rewards!"
      />
      <div className="report-issue-choose">
        <FabFormLabel description="Choose a section" />
        <select>
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
        <FabContainerAttach />
      </div>
      {!loggedIn && (
        <div className="report-issue-email-section">
          <FabFormLabel description="Enter an email to receive an update" />
          <FabFormInput placeholder="Enter your Email (optional)" />
        </div>
      )}
      <div className="report-issues-submit-container">
        <button className="report-issues-submit">Submit</button>
      </div>
    </>
  );
};

export default GiveSuggestion;
