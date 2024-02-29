import "./IconToggleButton.css";
import fabToggleDesktop from "../../assets/Fab/fabToggleDesktop.svg";
import fabToggleCross from "../../assets/Fab/fabToggleCross.svg";
import fabToggleMobile from "../../assets/Fab/fabToggleMobile.svg";

interface IconToggleButtonProps {
  imgName: string;
  fabOpen?: boolean;
}

const IconToggleButton: React.FC<IconToggleButtonProps> = ({
  imgName,
  fabOpen,
}) => {
  return (
    <div
      className={
        fabOpen ? "white-background fab-toggle-desktop" : "fab-toggle-desktop"
      }
    >
      {imgName === "fabToggleDesktop" && (
        <img
          src={fabToggleDesktop}
          alt="fab-toggle-open"
          className="toggle-open-desktop"
        />
      )}
      {imgName === "fabToggleDesktop" && (
        <img
          src={fabToggleMobile}
          alt="fab-toggle-open"
          className="toggle-open-mobile"
        />
      )}
      {imgName === "fabToggleCross" && (
        <img
          src={fabToggleCross}
          alt="fab-toggle-close"
          className="toggle-close-desktop"
        />
      )}
    </div>
  );
};

export default IconToggleButton;
