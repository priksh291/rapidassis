
import './App.css'
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'
import Topbar from './Components/Topbar'
import Body from './Components/body'
import Leftbar from './Components/leftbar'
import Rightbar from './Components/rightbar'

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
