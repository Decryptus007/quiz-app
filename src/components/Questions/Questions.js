import React from 'react'

const questions = (props) => {

    return (
        <section className="quest-sect">
            <div className="quest-head col">
                <h2>{props.quests.question}</h2>
            </div>
            
        </section>
    )
}

export default questions