import "./ReportIssue.css";
import { useRef, useState } from "react";
import attachmentIcon from "../../../assets/Fab/attachmentIcon.svg";
import whiteCross from "../../../assets/Fab/whiteCross.svg";

const ReportIssue = () => {
  const uploadedImage = useRef(null);
  const imageUploader = useRef(null);
  const [imagePresent, setImagePresent] = useState(false);

  const handleImageUpload = (e) => {
    const [file] = e.target.files;
    if (file) {
      setImagePresent(true);
      const reader = new FileReader();
      const { current } = uploadedImage;
      current.file = file;
      reader.onload = (e) => {
        current.src = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  };
  return (
    <>
      <div className="report-issue-heading">
        Let us know about the{" "}
        <span className="report-issue-heading-imp">Issue</span> <br></br>you are
        facing right now!
      </div>
      <div className="report-issue-horizontal-line"></div>
      <div className="report-issue-choose">
        <span className="report-issue-choose-heading">Choose a section</span>
        <select>
          <option value="" disabled selected hidden>
            Select
          </option>
          <option value="Concept cards">Concept cards</option>
          <option value="Interview Questions">Interview Questions</option>
          <option value="Practice Questions">Practice Questions</option>
          <option value="Quizzes">Quizzes</option>
          <option value="Quizzes">Others</option>
        </select>
      </div>
      <div className="report-issue-detail">
        <span className="report-issue-choose-heading">
          Describe the issue in detail <span className="red-asteriks">*</span>
        </span>
        <div className="report-issue-detail-container">
          <textarea className="detail-input" placeholder="Write here..." />
          <div className="report-issue-attachment-container">
            <div
              className="attachment-button"
              onClick={() => imageUploader.current.click()}
            >
              <img src={attachmentIcon} alt="attachment-icon" />
              <span>Attach</span>
            </div>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => handleImageUpload(e)}
              ref={imageUploader}
              className="attach-file-input"
            />
            <div
              style={{ display: imagePresent ? "block" : "none" }}
              className="attach-image-div"
            >
              <img ref={uploadedImage} className="uploaded-img" />
              <img
                src={whiteCross}
                className="tiny-cross"
                onClick={() => setImagePresent(false)}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="report-issues-submit-container">
        <button className="report-issues-submit">Submit</button>
      </div>
    </>
  );
};

export default ReportIssue;
