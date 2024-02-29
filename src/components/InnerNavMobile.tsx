import "./InnerNavMobile.css";
import filterIcon from "../assets/filterIcon.svg";
import dropdownArrow from "../assets/dropdownArrow.svg";
import threeBarDecreasing from "../assets/threeBarDecreasing.svg";

interface FilterOptionsDivProps {
  name: string;
  image: boolean;
}

const FilterOptionsDiv: React.FC<FilterOptionsDivProps> = ({ name, image }) => {
  return (
    <div className="filter-type">
      <div className="filter-mid">
        {image && <img src={threeBarDecreasing} alt="threeBarDecreasing" />}
        <span>{name}</span>
      </div>
      <img
        src={dropdownArrow}
        alt="dropdown-arrow"
        className="dropdown-arrow"
      />
    </div>
  );
};

const InnerNavMobile = () => {
  return (
    <div className="inner-nav-mobile-container">
      <div className="inner-nav-mobile-heading">
        Practice Interview Questions
      </div>
      <div className="inner-nav-mobile-filter-container">
        <div className="inner-nav-mobile-filter-text">
          Embark on an Exploration: 800 Questions Await!
        </div>
        <button className="inner-nav-mobile-filter-button">
          <img src={filterIcon} alt="filter-icon" />
          <span>Filters</span>
        </button>
      </div>
      <div className="filter-types-container">
        <FilterOptionsDiv name="Popular" image={true} />
        <FilterOptionsDiv name="Complexity" image={false} />
        <FilterOptionsDiv name="Industry Type" image={false} />
        <FilterOptionsDiv name="Industry" image={false} />
        <FilterOptionsDiv name="Company Type" image={false} />
      </div>
      <div className="line"></div>
    </div>
  );
};

export default InnerNavMobile;
