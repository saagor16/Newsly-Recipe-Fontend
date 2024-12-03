
import { Outlet } from 'react-router-dom'
import './App.css'

function App() {

  return (
    <div className='max-w-screen-2xl mx-auto'>
      <nav>navbar</nav>
      <Outlet></Outlet>
    </div>
  )
}

export default App
