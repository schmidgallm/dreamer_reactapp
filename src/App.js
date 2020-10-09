// Dependencies
import React, { useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// Redux actions and store
import { Provider } from 'react-redux'
import store from './store'
import { loadUser } from './actions/auth'
import setAuthToken from './utils/setAuthToken'

// Components
import Navbar from './components/Layout/Navbar'
import Register from './components/Auth/Register'
import Login from './components/Auth/Login'
import Dashboard from './components/Pages/Dashboard'
import PrivateRoute from './components/Routing/PrivateRoute'
import Prompts from './components/Pages/Prompts'
import Resources from './components/Pages/Resources'
import Alert from './components/Alert'
import CreateProfile from './components/Auth/CreateProfile'
import EditProfile from './components/Auth/EditProfile'

// CSS
import './App.css'

if (localStorage.token) {
    setAuthToken(localStorage.token)
}

const App = () => {
    useEffect(() => {
        store.dispatch(loadUser())
    }, [])

    return (
        <Provider store={store}>
            <Router>
                <div className="wrapper">
                    <div className="content-container">
                        <Navbar />
                        <Route exact path="/" component={Login} />
                        <Alert />
                        <Switch>
                            <Route
                                exact
                                path="/register"
                                component={Register}
                            />
                            <Route exact path="/login" component={Login} />
                            <Route exact path="/prompts" component={Prompts} />
                            <Route
                                exact
                                path="/resources"
                                component={Resources}
                            />
                            <PrivateRoute
                                exact
                                path="/dashboard"
                                component={Dashboard}
                            />
                            <PrivateRoute
                                exact
                                path="/create-profile"
                                component={CreateProfile}
                            />
                            <PrivateRoute
                                exact
                                path="/edit-profile"
                                component={EditProfile}
                            />
                        </Switch>
                    </div>
                </div>
            </Router>
        </Provider>
    )
}

export default App
