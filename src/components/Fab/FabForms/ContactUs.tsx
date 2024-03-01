import "./ContactUs.css";
import FabFormHeading from "../FabFormHeading";
import FabFormLabel from "../FabFormLabel";
import FabFormInput from "../FabFormInput";
import FabFormTextArea from "../FabFormTextArea";

interface ContactUsProps {
  loggedIn: boolean;
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

const ContactUs: React.FC<ContactUsProps> = ({
  loggedIn,
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
      <FabFormHeading
        content1="Let us know what"
        boldWord="your queries"
        content2="are!"
      />
      <div className="report-issue-choose">
        <FabFormLabel description="Your Name" required />
        <FabFormInput
          placeholder="Enter your Name"
          currValue={contactName}
          setNewValue={setContactName}
        />
      </div>
      {!loggedIn && (
        <>
          <div className="report-issue-detail">
            <FabFormLabel description="Your Email" />
            <FabFormInput
              placeholder="Enter your Email"
              currValue={contactEmail}
              setNewValue={setContactEmail}
            />
          </div>
          <div className="report-issue-detail">
            <FabFormLabel description="Your Mobile Number" required />
            <FabFormInput
              placeholder="Enter your number"
              currValue={contactNumber}
              setNewValue={setContactNumber}
            />
          </div>
        </>
      )}
      <div className="report-issue-detail">
        <FabFormLabel description="What would you like to ask?" required />
        <FabFormTextArea
          placeholder="Write here..."
          currValue={contactText}
          setNewValue={setContactText}
        />
      </div>
      <div className="report-issues-submit-container">
        <button
          className={
            contactText.length > 0
              ? "report-issues-submit"
              : "disabled-button report-issues-submit"
          }
          onClick={() => onSubmitForm("contact-us")}
        >
          Submit
        </button>
      </div>
    </>
  );
};

export default ContactUs;
