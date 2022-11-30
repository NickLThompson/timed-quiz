import React, { useState } from 'react'
import "./style.css";
import Home from "./components/Home";
import QuestionOne from './components/QuestionOne';
import QuestionTwo from './components/QuestionTwo';
import QuestionThree from './components/QuestionThree';
import QuestionFour from './components/QuestionFour';
import QuestionFive from './components/QuestionFive';
import End from "./components/End";
import HighScores from "./components/HighScores";

const steps = [Home, QuestionOne, End, HighScores];

// this is the home screen before you start the quiz
const App = () => {
    // default page is Home and we change the page when the start button is clicked
    const [currentPage, setCurrentPage] = useState(0);
    const Component = steps[currentPage];

    return (
        <>
            <Component onNext={() => setCurrentPage(currentPage + 1)} />
            <button onClick={() => setCurrentPage(currentPage + 1)}>Forward</button>
            <button onClick={() => setCurrentPage(currentPage - 1)}>Back</button>

        </>

    )
}

export default App;

