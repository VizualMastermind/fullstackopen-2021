import React, { useState } from 'react'

// https://stackoverflow.com/questions/11301438/return-index-of-greatest-value-in-an-array

function indexOfMax(arr) {
  if (arr.length === 0) {
    return -1
  }
  var prev = arr[0]
  var max = 0

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > prev) {
      max = i
      prev = arr[i]
    }
    else if (arr[i] === prev) {
    //https://stackoverflow.com/questions/36333397/heads-or-tails-game-javascript-do-while-loop
      var coin = Math.random()
      if (coin % 2 === 0) {
        
      }
      else {
        max = i
        prev = arr[i]
      }
    
  }
  }
  return max
} //


const Button = ({ handleClick, text }) => (  
<button onClick={handleClick}>    
{text}  
</button>)


const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blod tests when dianosing patients'
  ]

  // create an array of zeroes
  // https://stackoverflow.com/questions/20222501/how-to-create-a-zero-filled-javascript-array-of-arbitrary-length/22209781
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0))
   
  const [selected, setSelected] = useState(0)

  // create a copy of votes array to manipulate
  
  const upvote = () => {
    const newVotes = [...votes]
    newVotes[selected] += 1
    setVotes(newVotes)
  }

  return (
    <div>
      {anecdotes[selected]} <br />
      <Button handleClick={() => setSelected(Math.floor(Math.random()*anecdotes.length))} text ="next ancedote" />
      <Button handleClick={upvote} text = "vote" />

      <h1> Most Popular</h1>
      {anecdotes[indexOfMax(votes)]}
      <p>has {votes[indexOfMax(votes)]} votes.</p>
    </div>
   
  )
}

export default App