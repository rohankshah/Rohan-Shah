import "./FabFormTextArea.css";

interface FabFormTextAreaProps {
  placeholder: string;
}

const FabFormTextArea: React.FC<FabFormTextAreaProps> = ({ placeholder }) => {
  return (
    <div className="textarea-container">
      <textarea
        maxLength={1000}
        className="textarea-input"
        placeholder={placeholder}
      />
    </div>
  );
};

export default FabFormTextArea;
