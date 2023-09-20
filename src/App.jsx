
import './App.css'
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'
import Topbar from './Components/Topbar'
import Body from './Components/Body'
import Leftbar from './Components/Leftbar'
import Rightbar from './Components/Rightbar'

function App() {
  

  return (
    <div className='font-mono bg-black'>
      <Navbar/>
      <Topbar/>
      <div className='flex justify-between'>

      <Leftbar/>
      <Body/>
      <Rightbar/>
      </div>
      <Footer/>
    </div>
  )
}

export default App
