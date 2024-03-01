import "./ReportIssue.css";
import FabFormHeading from "../FabFormHeading";
import FabFormLabel from "../FabFormLabel";
import FabFormInput from "../FabFormInput";
import FabContainerAttach from "../FabContainerAttach";

interface ReportIssueProps {
  loggedIn: boolean;
  reportIssueSelected: string;
  setReportIssueSelected: (newValue: string) => void;
  reportIssueText: string;
  setReportIssueText: (newValue: string) => void;
  reportIssueEmail: string;
  setReportIssueEmail: (newValue: string) => void;
  onSubmitForm: (newValue: string) => void;
}

const ReportIssue: React.FC<ReportIssueProps> = ({
  loggedIn,
  reportIssueSelected,
  setReportIssueSelected,
  reportIssueText,
  setReportIssueText,
  reportIssueEmail,
  setReportIssueEmail,
  onSubmitForm,
}) => {
  return (
    <>
      <FabFormHeading
        content1="Let us know about the"
        boldWord="Issue"
        content2="you are facing right now!"
      />
      <div className="report-issue-choose">
        <FabFormLabel description="Choose a section" />
        <select
          value={reportIssueSelected}
          onChange={(e) => setReportIssueSelected(e.target.value)}
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
          description="Describe the issue in detail"
          required={true}
        />
        <FabContainerAttach
          reportIssueText={reportIssueText}
          setReportIssueText={setReportIssueText}
        />
      </div>
      {!loggedIn && (
        <div className="report-issue-email-section">
          <FabFormLabel
            description="Enter an email to receive an update"
            required
          />
          <FabFormInput
            placeholder="Enter your Email (optional)"
            currValue={reportIssueEmail}
            setNewValue={setReportIssueEmail}
          />
        </div>
      )}
      <div className="report-issues-submit-container">
        <button
          className={
            reportIssueText.length > 0
              ? "report-issues-submit"
              : "disabled-button report-issues-submit"
          }
          disabled={reportIssueText.length > 0 ? false : true}
          onClick={() => onSubmitForm("report-issues")}
        >
          Submit
        </button>
      </div>
    </>
  );
};

export default ReportIssue;
