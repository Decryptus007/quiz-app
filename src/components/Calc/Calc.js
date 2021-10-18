import React from 'react'

import './Calc.css'

export default function Calc (props) {

    // const [prc, setPrc] = useState('')
    let price

    switch (props.answered) {
        case 1:
            price = 10000
            break;
        case 2:
            price = 20000
            break;
        case 3:
            price = 30000
            break;
        case 4:
            price = 50000
            break;
        case 5:
            price = 100000
            break;
        case 6:
            price = 200000
            break;
        case 7:
            price = 400000
            break;
        case 8:
            price = 800000
            break;
        case 9:
            price = 1600000
            break;
        case 10:
            price = 3200000
            break;
        case 11:
            price = 6400000
            break;
        case 12:
            price = 12500000
            break;
        case 13:
            price = 25000000
            break;
        case 14:
            price = 50000000
            break;
        case 15:
            price = 100000000
            break;
    
        default:
            price = 0
            break;
    }

    let data
    const saved = localStorage.getItem("price")

    if (saved >= price) {
        data = saved
    } else {
        localStorage.setItem("price", price)
    }

    return (
        <div className="calc">
            <h5 className="high">Your Highest Price Amount is &#8358;{data|| 0}</h5>
            <h4>{props.answered} of 15 Questions Answered</h4>
            <h4>Price accumulated is &#8358;{price}</h4>
        </div>
    )
}