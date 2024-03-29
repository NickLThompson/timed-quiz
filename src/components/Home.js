import React from 'react'

const Home = ({ setCurrentPage, currentPage }) => {

  return (
    <section className="section" id="start">
            <div className="container-fluid text-center">
                <div className="row row-cols-2">
                    <div className="col text-start" id="highScores">View High Scores</div>
                    <div className="col text-end">Time</div>
                </div>
                <div className="col text-center align-self-center" id="quizTitle"><strong>Coding Quiz Challenge</strong></div>
                <div className="col text-center align-self-center" id="quizExplain">Try to answer the following code-related questions within the time limit. <br></br>
                    Keep in mind that incorrect answers will penalize your score/time <br></br>
                    by ten seconds</div>
                <button
                    href="#home"
                    type="button"
                    id="startQuiz"
                    onClick={() => setCurrentPage(currentPage + 1)}>Start Quiz
                </button>
            </div>
        </section>
  )
}

export default Home