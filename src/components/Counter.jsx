import { useState } from "react"
export default function Counter(params) {
  const [count, setCount] = useState(0)
  const [incrementBy, setIncrement] = useState(0)

  function handleIncr(params) {
    setCount(count + incrementBy)
  }
  function handleDecr(params) {
    setCount(count - incrementBy)
  }

  function serCounterIncermentValue(params) {
    setIncrement(incrementBy + 1)
  }

  function serCounterDecrementValue(params) {
    setIncrement(incrementBy - 1)
  }
  return (
    <div>
      <h2> REACT STATE EVENT</h2>
      <h5>Increment using useState: {count}</h5>
      <span><button onClick={handleIncr}>Increment Button</button></span>
      <span><button onClick={handleDecr}>Decrement Button</button></span>
      <br />
      <h5> Set Increment using useState for above counter: {incrementBy}</h5>
      <span><button onClick={serCounterIncermentValue}>Increment Button</button></span>
      <span><button onClick={serCounterDecrementValue}>Decrement Button</button></span>
    </div>
  )

} 