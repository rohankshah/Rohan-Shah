import "./ContactUs.css";
import FabFormHeading from "../FabFormHeading";
import FabFormLabel from "../FabFormLabel";
import FabFormInput from "../FabFormInput";
import FabFormTextArea from "../FabFormTextArea";

interface ContactUsProps {
  loggedIn: boolean;
}

const ContactUs: React.FC<ContactUsProps> = ({ loggedIn }) => {
  return (
    <>
      <FabFormHeading
        content1="Let us know what"
        boldWord="your queries"
        content2="are!"
      />
      <div className="report-issue-choose">
        <FabFormLabel description="Your Name" required />
        <FabFormInput placeholder="Enter your Name" />
      </div>
      {!loggedIn && (
        <>
          <div className="report-issue-detail">
            <FabFormLabel description="Your Email" />
            <FabFormInput placeholder="Enter your Email" />
          </div>
          <div className="report-issue-detail">
            <FabFormLabel description="Your Mobile Number" required />
            <FabFormInput placeholder="Enter your number" />
          </div>
        </>
      )}
      <div className="report-issue-detail">
        <FabFormLabel description="What would you like to ask?" required />
        <FabFormTextArea placeholder="Write here..." />
      </div>
      <div className="report-issues-submit-container">
        <button className="report-issues-submit">Submit</button>
      </div>
    </>
  );
};

export default ContactUs;
