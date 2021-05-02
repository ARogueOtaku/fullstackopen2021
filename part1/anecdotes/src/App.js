import React, { useState } from "react";

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
  ];
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0));
  const [selected, setSelected] = useState(0);
  const [mostVoted, setMostVoted] = useState(0);

  const voteAnecdote = (pos) => {
    const currentVotes = [...votes];
    currentVotes[pos] += 1;
    if (currentVotes[pos] > votes[mostVoted]) setMostVoted(pos);
    setVotes(currentVotes);
  };

  const selectAnecdote = () => {
    const pos = Math.floor(Math.random() * anecdotes.length);
    setSelected(pos);
  };

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <span>{anecdotes[selected]}</span>
      <br />
      <span>has {votes[selected]} votes</span>
      <br />
      <button onClick={() => voteAnecdote(selected)}>vote</button>{" "}
      <button onClick={selectAnecdote}>next anecdote</button>
      <h1>Anecdote with most votes</h1>
      <span>{anecdotes[mostVoted]}</span>
      <br />
      <span>has {votes[mostVoted]} votes</span>
    </div>
  );
};

export default App;
