import "./FabFormTextArea.css";

interface FabFormTextAreaProps {
  placeholder: string;
  currValue: string;
  setNewValue: (newValue: string) => void;
}

const FabFormTextArea: React.FC<FabFormTextAreaProps> = ({
  placeholder,
  currValue,
  setNewValue,
}) => {
  return (
    <div className="textarea-container">
      <textarea
        maxLength={1000}
        className="textarea-input"
        placeholder={placeholder}
        value={currValue}
        onChange={(e) => setNewValue(e.target.value)}
      />
    </div>
  );
};

export default FabFormTextArea;
