import React from 'react'

const QuestionOne = () => {

    return (
        <section className="section" id="start">
            <div className="container-fluid text-center">
                <div className="row row-cols-2">
                    <div className="col text-start" id="highScores">View High Scores</div>
                    <div className="col text-end">Time</div>
                </div>
                {/* this section is what contains the question + buttons + footer */}
                <div className="section text-start" id="questionSection">
                    <div className="col align-self-center" id="questionTitle"><strong>A very useful tool used during devlopment and debugging for printing content to the debugger is: </strong></div>
                    <div className="btn-group-vertical gap-2 col-5 mx-auto" role="group" aria-label="Question answers">
                        <button type="button" className="btn text-start" id="answer">1. JavaScript</button>
                        <button type="button" className="btn text-start" id="answer">2. Terminal/bash</button>
                        <button type="button" className="btn text-start" id="answer">3. for Loops</button>
                        <button type="button" className="btn text-start" id="answer">4. console.log</button>
                    </div>
                    <div className="divisionLine text-muted" id="questionLine">______________________________________________________________________________________________</div>
                    <div className="correct fst-italic text-muted" id="correct">Correct!</div>
                </div>
            </div>
        </section>
    )
}

export default QuestionOne