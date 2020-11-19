import React from 'react';
import Clasess from './AnswerItem.module.css'


const AnswerItem = props => {

    const cls = [Clasess.AnswerItem]

    if (props.state) {
        cls.push(Clasess[props.state])
    }

    return (
        <li 
        className= {cls.join(' ')}
        onClick={() => props.onAnswerClick(props.answer.id)}>
        

            { props.answer.text }
        </li>
    )
}

export default AnswerItem