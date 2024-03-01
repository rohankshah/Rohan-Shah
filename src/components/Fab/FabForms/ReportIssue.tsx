import "./ReportIssue.css";
import FabFormHeading from "../FabFormHeading";
import FabFormLabel from "../FabFormLabel";
import FabFormInput from "../FabFormInput";
import FabContainerAttach from "../FabContainerAttach";

interface ReportIssueProps {
  loggedIn: boolean;
}

const ReportIssue: React.FC<ReportIssueProps> = ({ loggedIn }) => {
  return (
    <>
      <FabFormHeading
        content1="Let us know about the"
        boldWord="Issue"
        content2="you are facing right now!"
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
          description="Describe the issue in detail"
          required={true}
        />
        <FabContainerAttach />
      </div>
      {!loggedIn && (
        <div className="report-issue-email-section">
          <FabFormLabel
            description="Enter an email to receive an update"
            required
          />
          <FabFormInput placeholder="Enter your Email (optional)" />
        </div>
      )}
      <div className="report-issues-submit-container">
        <button className="report-issues-submit">Submit</button>
      </div>
    </>
  );
};

export default ReportIssue;
