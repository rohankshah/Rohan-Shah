import "./Navbar.css";
import downArrow from "../assets/downArrow.svg";
import profilePic from "../assets/profilePic.svg";

const Navbar = () => {
  return (
    <div className="nav-container">
      <div className="nav-inner">
        {/* Name */}
        <div className="nav-title">
          THE <span className="nav-middle">PRODUCT</span> PLATFORM
        </div>

        {/* Nav options */}
        <div className="nav-options">
          <div className="nav-item nav-clickable">
            <span className="nav-item-name">Learn</span>
            <img src={downArrow} alt="down-arrow" className="nav-img" />
          </div>
          <div className="nav-item nav-clickable">
            <span className="nav-item-name">Practise</span>
            <img src={downArrow} alt="down-arrow" className="nav-img" />
          </div>
          <div className="nav-item">
            <img src={profilePic} alt="profile-pic" className="profile-pic" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
