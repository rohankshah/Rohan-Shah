import "./FabFormInput.css";

interface FabFormInputProps {
  placeholder: string;
  isDark?: boolean;
}

const FabFormInput: React.FC<FabFormInputProps> = ({
  placeholder,
  isDark = false,
}) => {
  return (
    <input
      type="text"
      className={isDark ? "fab-form-input-dark" : "fab-form-input"}
      placeholder={placeholder}
    />
  );
};

export default FabFormInput;
