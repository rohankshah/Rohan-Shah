import "./UpperCard.css";
import startupLogo from "../../assets/startupLogo.svg";
import eyeIcon from "../../assets/eyeIcon.svg";
import informationIcon from "../../assets/informationIcon.svg";

const UpperCard = () => {
  return (
    <div className="question-answer-container">
      <div className="upper-card">
        <div className="upper-card-top">
          <div className="badge-container">
            <div className="badge">Design</div>
            <div className="badge">Technology</div>
          </div>
          <img src={startupLogo} alt="startup-logo" />
        </div>

        <div className="upper-card-mid">
          <div className="upper-question">
            A travel startup wants Amazon to pre-install their personal travel
            agent bot on existing Amazon Echos. What is the value of the
            partnership to the travel startup?{" "}
          </div>
          <div className="upper-answer">
            Lorem ipsum dolor sit amet consectetur. Orci elementum aliquet nec
            viverra tincidunt ? Amet ullamcorper velit tristique scelerisque
            donec sed viverra arcu. Amet arcu vitae sit scelerisque ultrices
            magna cursus se?
          </div>
        </div>

        <div className="upper-card-lower">
          <div className="views-container">
            <img src={eyeIcon} alt="eye-icon" />
            <span className="upper-card-lower-text">100 Views</span>
          </div>
          <div className="information-container">
            <img src={informationIcon} alt="information-icon" />
            <span className="upper-card-lower-text">
              How should you word your answer?
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpperCard;
