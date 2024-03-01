import "./ShareFeedback.css";
import FabFormHeading from "../FabFormHeading";
import FabFormLabel from "../FabFormLabel";
import FabFormInput from "../FabFormInput";
import FabContainerAttach from "../FabContainerAttach";

interface ShareFeedbackProps {
  loggedIn: boolean;
}

const ShareFeedback: React.FC<ShareFeedbackProps> = ({ loggedIn }) => {
  return (
    <>
      <FabFormHeading
        content1="Let us know"
        boldWord="your Feedback"
        content2=" about us!"
      />
      <div className="report-issue-detail">
        <FabContainerAttach />
      </div>
      {loggedIn && (
        <div className="anonymous-feedback-container">
          <input type="checkbox" className="anonymous-feedback-check" />
          <span className="anonymous-feedback-text">
            Send feedback anonymously
          </span>
        </div>
      )}
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

export default ShareFeedback;
