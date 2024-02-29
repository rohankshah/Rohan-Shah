import "./LowerCard.css";
import profilePic from "../../assets/profilePic.svg";
import editIcon from "../../assets/editIcon.svg";
import thumbsUp from "../../assets/thumbsUp.svg";
import chatIcon from "../../assets/chatIcon.svg";

const LowerCard = () => {
  return (
    <div className="lower-card-container">
      <div className="lower-card-upper">
        <div className="lower-card-profile-info">
          <img
            src={profilePic}
            alt="profile-pic"
            className="profile-pic-lower"
          />
          <div className="lower-card-profile-text">
            <span className="name-bold">
              Neha Bhat <span>(You)</span>
            </span>
            <span className="profile-lower-text">Jun 27, 2023</span>
          </div>
        </div>
        <div className="edit-container">
          <img src={editIcon} alt="edit-icon" />
          <span>Edit</span>
        </div>
      </div>
      <div className="lower-card-middle">
        Lorem ipsum dolor sit amet consectetur. Elit et ut at vestibulum enim
        ornare feugi vitae. Eget proin aliquam blandit eget vitae erat fermentum
        lacus. Dignissim done mi vel fermentum. Id ultrices risus sit pel sit
        elit morbi. Mi sed mauris aenean odio egestas ullamcorper. Dignissim in
        vel fusce id. Sit blandit diam ridiculus ipsum interdum ut velit quam.
        Bibendum amet mi.... <span className="show-more">Show more</span>
      </div>
      <div className="lower-card-lower">
        <div className="like-container">
          <img src={thumbsUp} alt="thumbs-up" />
          <span>Like</span>
        </div>
        <div className="text-input-container">
          <img src={chatIcon} alt="chat-icon" />
          <input
            type="text"
            placeholder="Add a comment"
            className="text-input"
          />
          <button className="post-container">Post</button>
        </div>
      </div>
    </div>
  );
};

export default LowerCard;
