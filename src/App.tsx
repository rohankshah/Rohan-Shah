import "./App.css";
import Navbar from "./components/Navbar.tsx";
import InnerNav from "./components/InnerNav.tsx";
import InnerNavMobile from "./components/InnerNavMobile.tsx";
import QuestionAnswer from "./components/QuestionAnswer/QuestionAnswer.tsx";

function App() {
  return (
    <div>
      <Navbar />
      <div className="inner-container">
        <InnerNav />
        <InnerNavMobile />
        <QuestionAnswer />
      </div>
    </div>
  );
}

export default App;
