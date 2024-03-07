import {BrowserRouter, Routes, Route, useNavigate} from 'react-router-dom'
import {Suspense, lazy} from 'react'
const Landing = lazy(() => import('./components/Landing'))
const Dashboard = lazy(() => import('./components/Dashboard'))

function App() {
  //const navigate = useNavigate();
  return (
    <div>
      {/* <div>
        <button onClick={() => {
          navigate("/")
        }}>Landing Page</button>
        <button onClick={() => {
          navigate("/dashboard")
        }}>Dashboard</button>
      </div> */}
      {/* Since useNavigate can only be used in a component that is inside the BrowserRouter, above is wrong.
      Hence we create a component AppBar and place it inside BrowserRouter. */}

      <BrowserRouter>
        <Appbar />
        <Routes>
          <Route path="/dashboard" element={<Suspense fallback={"loading..."}><Dashboard></Dashboard></Suspense>}/>
          <Route path="/" element={<Suspense fallback={"loading..."}><Landing></Landing></Suspense>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

function Appbar() {
  const navigate = useNavigate();
  return (
    <div>
      <button onClick={()=> {
        navigate("/")
      }}>Landing Page</button>
      <button onClick={()=> {
        navigate("/dashboard")
      }}>Dashboard</button>
    </div>
  )
}

export default App
