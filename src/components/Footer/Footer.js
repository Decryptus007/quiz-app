import React from 'react'

import './Footer.css'

const copyright = () => {

    return (
        <div className="footer">
            <h4>Web app created using <code>React Hooks</code> by <code>Decryptus&#10003;</code></h4>
            <h4>
                <a href="https://github.com/Decryptus007/quiz-app" target="_blank" rel="noreferrer">My Source Project&#8599;</a>
            </h4>
            <h4>
                <a href="https://raw.githubusercontent.com/Decryptus007/My-Projects/master/questions-fetch.json" target="_blank" rel="noreferrer">Feel free to use my JSON API for your project&#8599;</a>
            </h4>
        </div>
    )
}

export default copyright