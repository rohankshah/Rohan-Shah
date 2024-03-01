import "./FabFormLabel.css";

interface FabFormLabelProps {
  description: string;
  required?: boolean;
}

const FabFormLabel: React.FC<FabFormLabelProps> = ({
  description,
  required = false,
}) => {
  return (
    <span className="report-issue-choose-heading">
      {description} {required && <span className="red-asteriks">*</span>}
    </span>
  );
};

export default FabFormLabel;
