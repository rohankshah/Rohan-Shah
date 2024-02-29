import "./InnerNav.css";
import leftArrow from "../assets/LeftArrow.svg";

const InnerNav = () => {
  return (
    <div className="container">
      <div className="inner-items">
        <img src={leftArrow} alt="left-arrow" />
        <span className="title">Back to Questions</span>
      </div>
    </div>
  );
};

export default InnerNav;
