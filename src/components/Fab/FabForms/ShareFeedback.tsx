import "./ShareFeedback.css";
import FabFormHeading from "../FabFormHeading";
import FabFormLabel from "../FabFormLabel";
import FabFormInput from "../FabFormInput";
import FabContainerAttach from "../FabContainerAttach";

interface ShareFeedbackProps {
  loggedIn: boolean;
  feedbackText: string;
  setFeedbackText: (newValue: string) => void;
  feedbackAnonymous: boolean;
  setFeedbackAnonymous: (newValue: boolean) => void;
  feedbackEmail: string;
  setFeedbackEmail: (newValue: string) => void;
  onSubmitForm: (newValue: string) => void;
}

const ShareFeedback: React.FC<ShareFeedbackProps> = ({
  loggedIn,
  feedbackText,
  setFeedbackText,
  feedbackAnonymous,
  setFeedbackAnonymous,
  feedbackEmail,
  setFeedbackEmail,
  onSubmitForm,
}) => {
  return (
    <>
      <FabFormHeading
        content1="Let us know"
        boldWord="your Feedback"
        content2=" about us!"
      />
      <div className="report-issue-detail">
        <FabContainerAttach
          reportIssueText={feedbackText}
          setReportIssueText={setFeedbackText}
        />
      </div>
      {loggedIn && (
        <div className="anonymous-feedback-container">
          <input
            type="checkbox"
            className="anonymous-feedback-check"
            onChange={() => setFeedbackAnonymous(!feedbackAnonymous)}
            checked={feedbackAnonymous}
          />
          <span className="anonymous-feedback-text">
            Send feedback anonymously
          </span>
        </div>
      )}
      {!loggedIn && (
        <div className="report-issue-email-section">
          <FabFormLabel description="Enter an email to receive an update" />
          <FabFormInput
            placeholder="Enter your Email (optional)"
            currValue={feedbackEmail}
            setNewValue={setFeedbackEmail}
          />
        </div>
      )}
      <div className="report-issues-submit-container">
        <button
          className="report-issues-submit"
          onClick={() => onSubmitForm("share-feedback")}
        >
          Submit
        </button>
      </div>
    </>
  );
};

export default ShareFeedback;
