import "./App.css";
import Navbar from "./components/Navbar.tsx";
import InnerNav from "./components/InnerNav.tsx";
import InnerNavMobile from "./components/InnerNavMobile.tsx";
import QuestionAnswer from "./components/QuestionAnswer/QuestionAnswer.tsx";
import QuestionMobile from "./components/QuestionAnswer/QuestionMobile.tsx";
import Fab from "./components/Fab/Fab.tsx";

const fabOptions = [
  "report-issue",
  "share-feedback",
  "give-suggestion",
  "contact-us",
];

function App() {
  return (
    <div>
      <Navbar />
      <div className="inner-container">
        <InnerNav />
        <InnerNavMobile />
        <QuestionAnswer />
        <QuestionMobile />
      </div>
      <Fab options={fabOptions} />
    </div>
  );
}

export default App;
