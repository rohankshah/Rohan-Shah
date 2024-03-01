import "./FabContainerAttach.css";
import { useRef, useState } from "react";
import attachmentIcon from "../../assets/Fab/attachmentIcon.svg";
import whiteCross from "../../assets/Fab/whiteCross.svg";

interface FabContainerAttachProps {
  reportIssueText: string;
  setReportIssueText: (newValue: string) => void;
}

const FabContainerAttach: React.FC<FabContainerAttachProps> = ({
  reportIssueText,
  setReportIssueText,
}) => {
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
    <div className="report-issue-detail-container">
      <textarea
        className="detail-input"
        placeholder="Write here..."
        maxLength={1000}
        onChange={(e) => setReportIssueText(e.target.value)}
        value={reportIssueText}
      />
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
  );
};

export default FabContainerAttach;
