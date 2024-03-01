import { useEffect, useState } from "react";
import IconToggleButton from "./IconToggleButton";
import OptionIcon from "./OptionIcon";

import "./Fab.css";
import FabFormContainer from "./FabFormContainer";

interface FabProps {
  options: string[];
}

const Fab: React.FC<FabProps> = ({ options }) => {
  const [fabOpen, setFabOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [loggedIn] = useState(true);

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
            {options.map((option, i) => {
              return (
                <OptionIcon
                  key={i}
                  name={option}
                  setOption={setOption}
                  noLabel={true}
                  currentSelected={selectedOption}
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
      {selectedOption.length > 0 && (
        <FabFormContainer
          closeToggle={toggleOpen}
          setOption={setOption}
          selectedOption={selectedOption}
          loggedIn={loggedIn}
          currentSelected={selectedOption}
        />
      )}
    </div>
  );
};

export default Fab;
