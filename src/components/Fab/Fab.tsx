import { useEffect, useRef, useState } from "react";
import IconToggleButton from "./IconToggleButton";
import OptionIcon from "./OptionIcon";
import attachmentIcon from "../../assets/Fab/attachmentIcon.svg";
import whiteCross from "../../assets/Fab/whiteCross.svg";

import "./Fab.css";

interface FabProps {
  options: string[];
}

const Fab: React.FC<FabProps> = ({ options }) => {
  const uploadedImage = useRef(null);
  const imageUploader = useRef(null);

  const [fabOpen, setFabOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
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

  useEffect(() => {
    console.log(selectedOption);
  }, [selectedOption]);

  function toggleOpen() {
    if (fabOpen) {
      setSelectedOption("");
      setFabOpen(false);
    } else {
      setFabOpen(true);
    }
  }

  function setOption(name: string) {
    setSelectedOption(name);
  }

  return (
    <div>
      <div className={fabOpen ? "overlay" : ""}></div>
      <div className="fab-main-container">
        <div onClick={() => toggleOpen()}>
          <IconToggleButton
            imgName={fabOpen ? "fabToggleCross" : "fabToggleDesktop"}
            fabOpen={fabOpen}
          />
        </div>
        {selectedOption.length > 0 && (
          <div className="option-kit-desktop">
            {options.map((option) => {
              return (
                <OptionIcon
                  name={option}
                  setOption={setOption}
                  noLabel={true}
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
      {selectedOption === "report-issue" && (
        <div className="report-issue-container">
          <div className="report-issue-heading">
            Let us know about the{" "}
            <span className="report-issue-heading-imp">Issue</span> <br></br>you
            are facing right now!
          </div>
          <div className="report-issue-horizontal-line"></div>
          <div className="report-issue-choose">
            <span className="report-issue-choose-heading">
              Choose a section
            </span>
            <select>
              <option value="" disabled selected hidden>
                Select
              </option>
              <option value="Concept cards">Concept cards</option>
              <option value="Interview Questions">Interview Questions</option>
              <option value="Practice Questions">Practice Questions</option>
              <option value="Quizzes">Quizzes</option>
            </select>
          </div>
          <div className="report-issue-detail">
            <span className="report-issue-choose-heading">
              Describe the issue in detail{" "}
              <span className="red-asteriks">*</span>
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
        </div>
      )}
    </div>
  );
};

export default Fab;
