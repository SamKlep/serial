import './App.css'
import Header from './components/ui/Header'
import HomeScreen from './components/screens/HomeScreen'

function App() {
  return (
    <>
      <div>
        <Header />
        <div className='container mt-4 text-center'>
          <HomeScreen />
        </div>
      </div>
    </>
  )
}

export default App
