import "./App.css";
import Navbar from "./components/Navbar.tsx";
import InnerNav from "./components/InnerNav.tsx";
import InnerNavMobile from "./components/InnerNavMobile.tsx";
import QuestionAnswer from "./components/QuestionAnswer/QuestionAnswer.tsx";
import QuestionMobile from "./components/QuestionAnswer/QuestionMobile.tsx";

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
    </div>
  );
}

export default App;
