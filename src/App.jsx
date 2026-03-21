import Router from './Router'
import Header from './components/global/Header'
import Footer from './components/global/Footer'

function App() {

  return (
    <div className='min-h-screen grid grid-rows-[auto_1fr_auto]'>
      <Header/>
      <Router/>
      <Footer/>
    </div>
  )
}

export default App
