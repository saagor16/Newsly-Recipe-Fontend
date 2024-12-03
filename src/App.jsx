
import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './components/Header/Header'

function App() {

  return (
    <div className='max-w-screen-2xl mx-auto'>
      <Header></Header>
      <Outlet></Outlet>
    </div>
  )
}

export default App
