// Dependencies
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Redux actions and store
import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/auth';
import setAuthToken from './utils/setAuthToken';

// Components
import SideNav from './components/Layout/SideNav';
import GridWrapper from './components/Layout/GridWrapper';
import RouteWrapper from './components/Layout/RouteWrapper';
import Register from './components/Auth/Register';
import Login from './components/Auth/Login';
import CreateProfile from './components/Auth/CreateProfile';
import EditProfile from './components/Auth/EditProfile';
import Community from './components/Pages/Community';
import PrivateRoute from './components/Routing/PrivateRoute';
import Prompts from './components/Pages/Prompts';
import Resources from './components/Pages/Resources';
import Profile from './components/Pages/Profile';
import Alert from './components/Alert';

// CSS
import './App.css';
import Dashboard from './components/Pages/Dashboard/Dashboard';

if (localStorage.token) {
    setAuthToken(localStorage.token);
}

const App = () => {
    useEffect(() => {
        store.dispatch(loadUser());
    }, []);

    return (
        <Provider store={store}>
            <Router>
                <Route exact path="/" component={Login} />
                <GridWrapper>
                    <SideNav />
                    <RouteWrapper>
                        <Alert />
                        <Switch>
                            <Route
                                exact
                                path="/register"
                                component={Register}
                            />
                            <PrivateRoute
                                exact
                                path="/prompts"
                                component={Prompts}
                            />
                            <PrivateRoute
                                exact
                                path="/community"
                                component={Community}
                            />
                            <PrivateRoute
                                exact
                                path="/resources"
                                component={Resources}
                            />
                            <PrivateRoute
                                exact
                                path="/profile/:id"
                                component={Profile}
                            />
                            <PrivateRoute
                                path="/dashboard/profile"
                                component={() => <Dashboard slug={'profile'} />}
                            />
                            <PrivateRoute
                                path="/dashboard/prompts"
                                component={() => <Dashboard slug={'prompts'} />}
                            />

                            <PrivateRoute
                                path="/dashboard/stories"
                                component={() => <Dashboard slug={'stories'} />}
                            />

                            <PrivateRoute
                                path="/dashboard/charts"
                                component={() => <Dashboard slug={'charts'} />}
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
                    </RouteWrapper>
                </GridWrapper>
            </Router>
        </Provider>
    );
};

export default App;
