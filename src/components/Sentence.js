import React from 'react'

const Sentence = ({ sentence }) => {
    return (
        <div>
            <h1>
                {sentence.quote}
            </h1>
            <p>
                {sentence.author}
            </p>
        </div>
    )
}

export default Sentence
