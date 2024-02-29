import "./QuestionMobile.css";
import startupIconMobile from "../../assets/startupIconMobile.svg";
import messageIcon from "../../assets/messageIcon.svg";
import eyeIcon from "../../assets/eyeIcon.svg";

const QuestionMobile = () => {
  return (
    <div className="question-mobile-container">
      <div className="question-container">
        <div className="question-mobile-upper">
          <span className="question-mobile-upper-text">
            Posted on 28 Jun 2023
          </span>
          <div className="question-mobile-upper-icon-container">
            <img src={startupIconMobile} alt="startupicon-mobile" />
            <span className="question-mobile-upper-icon-text">Startup</span>
          </div>
        </div>
        <div className="question-content">
          A travel startup wants Amazon to pre-install their personal travel
          agent bot on existing Amazon Echos. What is the value of the
          partnership to the travel startup? A travel startup wants Amazon to
          pre-install their personal travel agent bot on existing Amazon Echos.
          What is the value of the partnership to the travel startup?
        </div>
        <div className="badge-container">
          <div className="tag-container">
            <div className="individual-tag">Design</div>
            <div className="individual-tag">UX</div>
          </div>
          <div className="difficulty">Easy</div>
        </div>
        <div className="answer-stats-container">
          <div className="answer-stats-text-container">
            <img src={messageIcon} alt="message-icon" />
            <span>23 answers</span>
          </div>
          <div className="answer-stats-view-container">
            <img src={eyeIcon} alt="eye-icon" className="eye-icon-mobile" />
            <span>100 views</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionMobile;
