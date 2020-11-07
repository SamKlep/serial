import './App.css'
import Header from './components/ui/Header'
import HomeScreen from './components/screens/HomeScreen'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Container>
        <Route path='/' component={HomeScreen} exact />
          <div className='mt-4 text-center'>
            <HomeScreen />
          </div>
        </Container>
      </div>
    </Router>
  )
}

export default App
