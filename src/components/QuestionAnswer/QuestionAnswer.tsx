import "./QuestionAnswer.css";
// import UpperCard from "./UpperCard";
import Filter from "./Filter";
import LowerCard from "./LowerCard";

const QuestionAnswer = () => {
  return (
    <div className="question-answer-main-container">
      {/* <UpperCard /> */}
      <Filter />
      <LowerCard />
    </div>
  );
};

export default QuestionAnswer;
