import {Route, Switch} from 'react-router-dom'
import Login from './components/Login'
import './App.css'
import Home from './components/Home'
import ProtectedRoute from './components/ProtectedRoute'
import Trending from './components/Trending'

// Replace your code here
const App = () => (
  <Switch>
    <Route exact path="/login" component={Login} />

    <ProtectedRoute exact path="/" component={Home} />
    <ProtectedRoute exact path="/trending" component={Trending} />
  </Switch>
)

export default App
