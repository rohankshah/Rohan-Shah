import "./FabFormInput.css";

interface FabFormInputProps {
  placeholder: string;
  isDark?: boolean;
  currValue: string;
  setNewValue: (prevValue: string) => void;
}

const FabFormInput: React.FC<FabFormInputProps> = ({
  placeholder,
  isDark = false,
  currValue,
  setNewValue,
}) => {
  return (
    <input
      type="text"
      className={isDark ? "fab-form-input-dark" : "fab-form-input"}
      placeholder={placeholder}
      value={currValue}
      onChange={(e) => setNewValue(e.target.value)}
    />
  );
};

export default FabFormInput;
