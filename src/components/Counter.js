import React, {useEffect, useState, useRef} from "react";
import Modal from "./Modal";

const STATUS = {
    STARTED: 'Active',
    STOPPED: 'Inactive',
}

export default function Counter ({ log, count }) {
  const INITIAL_COUNT = count

  const [show, setShow] = useState(true)

  const [secondsRemaining, setSecondsRemaining] = useState(INITIAL_COUNT)
  const [status, setStatus] = useState(STATUS.STOPPED)

  const secondsToDisplay = secondsRemaining
  const [timeRem, setTime] = useState(secondsToDisplay)

  const handleStart = () => {
      setStatus(STATUS.STARTED)
      setShow(false)
    }
    // const handleStop = () => {
    //   setStatus(STATUS.STOPPED)
    // }
    // const handleReset = () => {
    //   setStatus(STATUS.STOPPED)
    //   setSecondsRemaining(INITIAL_COUNT)
    // }

    useInterval(
      () => {
        if (secondsRemaining > 0) {
          setSecondsRemaining(secondsRemaining - 1)
          setTime(secondsRemaining)
        } else {
          setStatus(STATUS.STOPPED)
          log(timeRem, true)
        }
      },
      status === STATUS.STARTED ? 1000 : null,
      // passing null stops the interval
    )

    let sh
    if (show) {
      sh = <Modal>
              <h3>Trivial Questions</h3>
              <h4>You will be given 15 questions to answer within 200secs</h4>
              <h5>Press Start to continue</h5>
              <button onClick={handleStart}>START</button>
           </Modal>
    }

  return (
      <div className="counters">
          <h3 className="counter" >
              {twoDigits(secondsToDisplay)}sec</h3>
          {sh}
      </div>
  )
}

// source: https://overreacted.io/making-setinterval-declarative-with-react-hooks/
function useInterval(callback, delay) {
    const savedCallback = useRef()
  
    // Remember the latest callback.
    useEffect(() => {
      savedCallback.current = callback
    }, [callback])
  
    // Set up the interval.
    useEffect(() => {
      function tick() {
        savedCallback.current()
      }
      if (delay !== null) {
        let id = setInterval(tick, delay)
        return () => clearInterval(id)
      }
    }, [delay])
  }
  
  // https://stackoverflow.com/a/2998874/1673761
  const twoDigits = (num) => String(num).padStart(2, '0')