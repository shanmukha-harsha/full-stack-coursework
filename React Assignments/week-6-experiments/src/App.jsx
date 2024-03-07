
import {useState} from 'react'
import React from 'react';

function App() {
  
  const [myName, setMyName] = useState("my name is harsha")
  function onClickHandler() {
    setMyName("my name is" + Math.random())
  }

  return (
    <div>
      {/* <CustomButton></CustomButton> */}
      <button onClick={onClickHandler}>Update the title</button>
      <Header title={myName}></Header>
      <Header title="Harsha2"></Header>
      <Header title="Harsha2"></Header>
      <Header title="Harsha2"></Header>
      <Header title="Harsha2"></Header>
      <Header title="Harsha2"></Header>
      <Header title="Harsha2"></Header>
      <Header title="Harsha2"></Header>
    </div>
  )
}

// function CustomButton(props) {

//   const [myName, setMyName] = useState("harsha")

//   function onClickHandler() {
//     setMyName(Math.random())
//   }

//   return (
//     <div>
//       <button onClick={onClickHandler}>Click me to Change the title</button>
//       <Header title={myName}></Header>
//     </div>
//   )
// } 

const Header = React.memo(function Header ({title}) {
  return (
    <div>
      {title}
    </div>
  )
})

// function Header({title}) {
//   return (
//     <div>
//       My name is {title}
//     </div>
//   )
// }

export default App
