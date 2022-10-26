import React, { useState } from 'react'
import "./style.css";
import Home from "./components/Home";
import QuestionOne from './components/QuestionOne';
import End from "./components/End";
import HighScores from "./components/HighScores";

// this is the home screen before you start the quiz
const App = () => {
    // default page is Home and we change the page when the start button is clicked
    const [currentPage, setCurrentPage] = useState("Home");

    // this checks which page it is and returns the proper page
    const renderPage = () => {
      switch (currentPage) {
        case "Home":
          return <Home />;
        case "QuestionOne":
          return <QuestionOne />;
        case "End":
          return <End />;
        case "HighScores":
          return <HighScores />;
        default:
          return <Home />;
      }
    }

    // home page
    return (
        <div>
            <Home currentPage={currentPage} setCurrentPage={setCurrentPage}/>
            {renderPage()}
        </div>
    );
}

export default App;