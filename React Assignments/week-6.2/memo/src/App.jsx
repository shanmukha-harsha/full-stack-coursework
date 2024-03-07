import { useState, useMemo } from 'react'


function App() {
  const [count, setCount] = useState(0)
  const [inputValue, setInputValue] = useState(0)
  // let sum = 0

  // for(let i=1;i<=inputValue; i++) {
  //   sum+=i
  // }
  //using Memo

  let sum = useMemo(() => {
    let x=0
    for(let i=1;i<=inputValue;i++) {
      x+=i
    }
    return x
  }, [inputValue])
  //Above snippet will be executed only when input value changes.
  //This avoids re-rendering and re-calculating the sum when the counter is changed. 
  //(Since counter is in App function, all the elements are re-rendered if useMemo is not used)


  return (
    <>
     <input onChange={function(e) {
      setInputValue(e.target.value)
     }} type="text" placeholder="Sum"></input>
    <br></br>
    <br></br>
     Sum is {sum}
    <br></br>
    <br></br>
    <br></br>

     <button onClick={function() {
      setCount(count+1)
     }}>Count is {count}</button>

    </>
  )
}

export default App
