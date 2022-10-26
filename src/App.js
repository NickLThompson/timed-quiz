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


// page currently prints the Home screen twice due to lines 32 and 33, clicking the 1st button changes the 2nd instance to the question, like its supposed to
// taking out line 32 only renders the home screen but the button doesn't work due to props not being passed
// taking out line 33 makes the button not do anything at all, no error messages in the console

// TODO: 
// render the home page by default and make button click to change the right instance of the home page