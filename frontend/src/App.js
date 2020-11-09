import './App.css'
import Header from './components/ui/Header'
import HomeScreen from './components/screens/HomeScreen'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Footer from './components/ui/Footer'
import SerialScreen from './components/screens/SerialScreen.js'
import UnsolvedScreen from './components/screens/UnsolvedScreen'
import PsychologyScreen from './components/screens/PsychologyScreen'
import ContactScreen from './components/screens/ContactScreen'

function App() {
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
          <Switch>
            <Route path='/' component={HomeScreen} exact />
            <Route path='/serials/:id' component={SerialScreen} />
            <Route path='/unsolved' component={UnsolvedScreen} />
            <Route path='/psychology' component={PsychologyScreen} />
            <Route path='/contact' component={ContactScreen} />
          </Switch>
        </Container>
      </main>
      <Footer />
    </Router>
  )
}

export default App
