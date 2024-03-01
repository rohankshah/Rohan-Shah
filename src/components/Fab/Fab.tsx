import { useState } from "react";
import IconToggleButton from "./IconToggleButton";
import OptionIcon from "./OptionIcon";

import "./Fab.css";
import FabFormContainer from "./FabFormContainer";

interface FabProps {
  options: string[];
}

const Fab: React.FC<FabProps> = ({ options }) => {
  const [fabOpen, setFabOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [loggedIn] = useState(true);

  const [reportIssueSelected, setReportIssueSelected] = useState("");
  const [reportIssueText, setReportIssueText] = useState("");
  const [reportIssueEmail, setReportIssueEmail] = useState("");

  const [feedbackText, setFeedbackText] = useState("");
  const [feedbackAnonymous, setFeedbackAnonymous] = useState(false);
  const [feedbackEmail, setFeedbackEmail] = useState("");

  const [suggestionSelect, setSuggestionSelect] = useState("");
  const [suggestionText, setSuggestionText] = useState("");
  const [suggestionEmail, setSuggestionEmail] = useState("");

  const [contactName, setContactName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [contactText, setContactText] = useState("");

  const [reportThanks, setReportThanks] = useState(false);
  const [feedbackThanks, setFeedbackThanks] = useState(false);
  const [suggestionThanks, setSuggestionThanks] = useState(false);
  const [contactThanks, setContactThanks] = useState(false);

  function resetEverything() {
    setSelectedOption("");
    setFabOpen(false);
    setReportIssueSelected("");
    setReportIssueText("");
    setReportIssueEmail("");
    setFeedbackText("");
    setFeedbackAnonymous(false);
    setFeedbackEmail("");
    setSuggestionSelect("");
    setSuggestionText("");
    setSuggestionEmail("");
    setContactName("");
    setContactEmail("");
    setContactNumber("");
    setContactText("");
  }

  function toggleOpen() {
    if (fabOpen) {
      resetEverything();
    } else {
      setFabOpen(true);
    }
  }

  function setOption(name: string) {
    setSelectedOption(name);
  }

  function onSubmitForm(option: string) {
    setFabOpen(false);
    resetEverything();
    if (option === "report-issues") {
      setReportThanks(true);
      setTimeout(() => setReportThanks(false), 5000);
    }
    if (option === "share-feedback") {
      setFeedbackThanks(true);
      setTimeout(() => setFeedbackThanks(false), 5000);
    }
    if (option === "give-suggestion") {
      setSuggestionThanks(true);
      setTimeout(() => setSuggestionThanks(false), 5000);
    }
    if (option === "contact-us") {
      setContactThanks(true);
      setTimeout(() => setContactThanks(false), 5000);
    }
  }

  return (
    <div>
      <div
        className={
          fabOpen ||
          reportThanks ||
          feedbackThanks ||
          contactThanks ||
          suggestionThanks
            ? "overlay"
            : ""
        }
      ></div>
      <div className="fab-main-container">
        <div onClick={() => toggleOpen()}>
          <IconToggleButton
            imgName={fabOpen ? "fabToggleCross" : "fabToggleDesktop"}
            fabOpen={fabOpen}
          />
        </div>
        {selectedOption.length > 0 && (
          <div className="option-kit-desktop">
            {options.map((option, i) => {
              return (
                <OptionIcon
                  key={i}
                  name={option}
                  setOption={setOption}
                  noLabel={true}
                  currentSelected={selectedOption}
                />
              );
            })}
          </div>
        )}
      </div>
      {fabOpen && selectedOption.length === 0 && (
        <div className="fab-menu">
          {options.includes("report-issue") && (
            <OptionIcon name="report-issue" setOption={setOption} />
          )}
          {options.includes("share-feedback") && (
            <OptionIcon name="share-feedback" setOption={setOption} />
          )}
          {options.includes("give-suggestion") && (
            <OptionIcon name="give-suggestion" setOption={setOption} />
          )}
          {options.includes("contact-us") && (
            <OptionIcon name="contact-us" setOption={setOption} />
          )}
        </div>
      )}
      {reportThanks && (
        <div className="thanks-dialogue">
          Thanks for bringing the issue to our attention.<br></br>We'll review
          it shortly and provide an update soon!
        </div>
      )}
      {suggestionThanks && (
        <div className="thanks-dialogue">
          Thanks for your valuable Suggestion!
        </div>
      )}
      {feedbackThanks && (
        <div className="thanks-dialogue">
          Thanks for your valuable feedback!
        </div>
      )}
      {contactThanks && (
        <div className="thanks-dialogue">
          Thanks for reaching out to us!<br></br> We will get back to you as
          soon as possible
        </div>
      )}
      {selectedOption.length > 0 && (
        <FabFormContainer
          closeToggle={toggleOpen}
          setOption={setOption}
          selectedOption={selectedOption}
          loggedIn={loggedIn}
          currentSelected={selectedOption}
          reportIssueSelected={reportIssueSelected}
          setReportIssueEmail={setReportIssueEmail}
          setReportIssueSelected={setReportIssueSelected}
          setReportIssueText={setReportIssueText}
          reportIssueEmail={reportIssueEmail}
          reportIssueText={reportIssueText}
          feedbackText={feedbackText}
          setFeedbackText={setFeedbackText}
          feedbackAnonymous={feedbackAnonymous}
          setFeedbackAnonymous={setFeedbackAnonymous}
          feedbackEmail={feedbackEmail}
          setFeedbackEmail={setFeedbackEmail}
          suggestionSelect={suggestionSelect}
          setSuggestionSelect={setSuggestionSelect}
          suggestionEmail={suggestionEmail}
          setSuggestionEmail={setSuggestionEmail}
          suggestionText={suggestionText}
          setSuggestionText={setSuggestionText}
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
  );
};

export default Fab;
