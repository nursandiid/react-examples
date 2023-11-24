import { useState } from 'react'

function App() {
  const [title, setTitle] = useState('Counter')
  const [counter, setCounter] = useState(0)

  return (
    <>
      <section>
        <h1>{title}</h1>
        <button onClick={() => setTitle('Title Changed')}>Change Title</button>
      </section>

      <hr />

      <section>
        <button onClick={() => setCounter(counter - 1)}>-</button>
        <input
          type="number"
          value={counter}
          onChange={(e) => setCounter(e.target.value)}
        />
        <button onClick={() => setCounter(counter + 1)}>+</button>

        <br />
        <p>Counter is {counter}</p>
      </section>
    </>
  )
}

export default App
