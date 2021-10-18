import React, { useState, useEffect } from 'react'
import axios from 'axios';

import Counter from './components/Counter'
import Modal from './components/Modal'
import Calc from './components/Calc/Calc';
import Questions from './components/Questions/Questions';
import Copyright from './components/Footer/Footer';

import logo from './images/hero-image.png'
import './App.css';

export default function App () {

  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [next, setNext] = useState(0)
  const [dupl, setDupl] = useState(true)
  const [arr, setArr] = useState([])
  const [ans, setAns] = useState(null)
  const [modal, setModal] = useState(false)
  const [modale, setModale] = useState(false)
  const [count, setCount] = useState(200)

  useEffect(() => {
    const url = 'https://raw.githubusercontent.com/Decryptus007/My-Projects/master/questions-fetch.json'
    axios(url)
    .then((res) => {
      setData(res.data)
    })
    .catch ((error) => {
      console.error("Error fetching data: ", error)
      setError(error)
    })
    .finally (() => {
      setLoading(false)
    })

  }, [next, dupl])

  if(loading) return <div className="loader">Loading...</div>
  if(error) return <div className="loader">Loading...</div>

  const pnt = Math.floor(Math.random()*data.questions.length)
  
  arr.forEach(item => {
    if (item === pnt) {
      setDupl(false)
    }
  })
  const copyPnt = data.questions[pnt]
  
  const failed = ()=>{
    setModal(true)
  }

  const refreshPage = ()=>{
    window.location.reload()
  }

  const power = (track, ans) => {
    ans-=1
    setAns(copyPnt.opt[ans].option)
    if (copyPnt.check === track) {
        setArr(prev => [...prev, pnt])
        console.log("Winner")
        setNext(next+1)
    } else {
        failed()
    }
  }

  let modalWindow
  
  if (modal) {
    modalWindow = <Modal>
                        <h3>Incorrect Selection</h3>
                        <h4>The correct answer is "{ans}"</h4>
                        <h5>Press Refresh to start again</h5>
                        <button onClick={refreshPage}>Refresh</button>
                  </Modal>
  }

  if (modale) {
    modalWindow = <Modal>
                        <h3>Time's Up</h3>
                        <h5>Press Refresh to start again</h5>
                        <button onClick={refreshPage}>Refresh</button>
                  </Modal>
  }

  if (next === 15) {
    modalWindow = <Modal>
                      <h3>Congratulations! You Passed</h3>
                      <h5>If you wish to take the test again press Refresh</h5>
                      <button onClick={refreshPage}>Refresh</button>
                  </Modal>
  }

  return (
    <div className="App">
      <Counter log={(ti, t) => {
        setCount(ti)
        setModale(t)
        }
      } count={count}/>
      {modalWindow}
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </div>
      <Calc answered={next}/>
      <Questions
        quests={data.questions[pnt]}
      />
      <div className="quest-options">
          {copyPnt.opt.map((pointer, index) => {
              return (
                  <div className="col quest" key={index}
                      onClick={() => power(index+1, copyPnt.check)}
                  >
                      <h3>{pointer.option}</h3>
                  </div>
              )
          })}
      </div>
      <Copyright />
    </div>
  );
}
