import './App.css'
import Header from './Header'
import Tabs from './Tabs'
import Search from './Search'
import Developer from './Developer'
import Restaurant from './Searchplasma'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Searchrat from './Searchrat'
import Searchambulance from './Searchambulance'
import Searchhelp from './Searchhelp'
import Home from './Home'
import Signup from './Signup'
import { useState } from 'react'
import Dashboard from './components/Dashboard'
import Login from './Login'
import Vaccinations from './Vaccinations'
import { withTranslation } from 'react-i18next'
import { AuthProvider } from './AuthContext'
import PlacesData from './PlacesData'
import Hosp from './Hosp'

function App() {
  const [isloggedin, setloggedin] = useState(true)
  return (
    <AuthProvider>
      <div className='App'>
        <Router>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>

            <Route exact path='/Explore'>
              <Header></Header>
              <Tabs></Tabs>
              <PlacesData></PlacesData>
            </Route>

            <Route exact path='/Restaurant'>
              <Header></Header>
              <Tabs></Tabs>
              <Restaurant></Restaurant>
            </Route>

            <Route exact path='/KidsPlay'>
              <Header></Header>
              <Tabs></Tabs>
              <Searchrat></Searchrat>
            </Route>

            <Route exact path='/AtHome'>
              <Header></Header>
              <Tabs></Tabs>
              <Searchambulance></Searchambulance>
            </Route>

            <Route exact path='/login'>
              <Login></Login>
            </Route>

            <Route exact path='/developer'>
              <Developer></Developer>
            </Route>

            <Route exact path='/vaccination'>
              <Header></Header>
              <Tabs></Tabs>
              <Vaccinations></Vaccinations>
            </Route>

            <Route exact path='/signup'>
              <Signup></Signup>
            </Route>

            <Route exact path='/dashboard'>
              <Dashboard></Dashboard>
            </Route>

            <Route exact path='/help'>
              <Header></Header>
              <Tabs></Tabs>
              <Searchhelp></Searchhelp>
            </Route>
          </Switch>
        </Router>
      </div>
    </AuthProvider>
  )
}

export default App
