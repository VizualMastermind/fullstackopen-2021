import React, { useState } from 'react'


const StatisticLine = (props) => (
  <tr>
    <td>{props.text}</td><td>{props.value}</td>
  </tr>
)


const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)



const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [score, setScore] = useState(0)


  return (
    <div>
      <h1>Give feedback</h1>
       <Button handleClick={() => setGood(good+1) & setScore(score+1)} text = "good" />
       <Button handleClick={() => setNeutral(neutral+1)} text = "neutral" />
       <Button handleClick={() => setBad(bad+1) & setScore(score - 1)} text = "bad" />
        
      <h1>statistics</h1>
      <table>
        <tbody>
      <StatisticLine text="good" value={good} />
      <StatisticLine text="neutral" value={neutral} />
      <StatisticLine text="bad" value={bad} />
      <StatisticLine text = "all" value={good+bad+neutral} />
      <StatisticLine text ="average" value={score/(good+bad+neutral)} />
      <StatisticLine text = "positive" value ={(good/(good+bad+neutral)*100) + " %"} />
      </tbody>
      </table>

    </div>
  )
}

export default App