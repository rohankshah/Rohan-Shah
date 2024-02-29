import "./Filter.css";
import dropdownArrow from "../../assets/dropdownArrow.svg";

const Filter = () => {
  return (
    <div className="filter-container">
      <div className="answers">Answers (23)</div>
      <div>
        <div className="filter-options">
          <div className="sort-by">Sort By:</div>
          <div className="filter-button">
            <span>Popular</span>
            <img src={dropdownArrow} alt="dropdown-arrow" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
