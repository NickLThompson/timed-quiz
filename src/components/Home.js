import React from 'react'
import "../App.css"

// this is the home screen before you start the quiz
const Home = () => {
    return (
        <section className="section" id="start">
            <div className="container-fluid text-center">
                <div className="row row-cols-2">
                    <div className="col text-start">View High Scores</div>
                    <div className="col text-end">Time</div>
                </div>
                <div className="col text-center align-self-center"><strong>Coding Quiz Challenge</strong></div>
                <div className="col text-center align-self-center">Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers will penalize your score/time by ten seconds</div>
                <button type="button" id="startQuiz">Start Quiz</button>
            </div>
        </section>
    );
}

export default Home;