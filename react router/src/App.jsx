import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'
import Navbar from './components/Navbar'
import { createBrowserRouter , RouterProvider } from "react-router-dom"
import Feature from "./components/Feature"
import About from "./components/About"

function App() {

  const router = createBrowserRouter([
    {
      path : '/',
      element : <> <Navbar/></>
    },
    {
      path : '/feature',
      element : <> <Navbar/> , <Feature/></>
    },
    {
      path : '/about',
      element : <> <Navbar/> , <About/></>
    },
  ])

  return (
    <>
    {/* <Navbar/> */}
      <RouterProvider router={router}/>
      <div>Hey this is exaple of react router</div>
    </>
  )
}

export default App
