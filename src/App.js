// Dependencies
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Redux actions and store
import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/auth';
import setAuthToken from './utils/setAuthToken';

// Components
import RouteWrapper from './components/Layout/RouteWrapper';
import Register from './components/Auth/Register';
import Login from './components/Auth/Login';
import CreateProfile from './components/Auth/CreateProfile';
import EditProfile from './components/Auth/EditProfile';
import Community from './components/Pages/Community';
import PrivateRoute from './components/Routing/PrivateRoute';
import Prompts from './components/Pages/Prompts';
import PromptById from './components/Pages/Prompts/PromptById';
import Resources from './components/Pages/Resources';
import Profile from './components/Pages/Profile';
import Alert from './components/Alert';
import Dashboard from './components/Pages/Dashboard/Dashboard';
import AddPrompt from './components/Forms/AddPrompt/AddPrompt';
import Stories from './components/Pages/Stories';
import StoryById from './components/Pages/Stories/StoryById';
import AddStory from './components/Forms/AddStory/AddStory';

// CSS
import './App.css';

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
                <RouteWrapper>
                    <Alert />
                    <Switch>
                        <Route exact path="/register" component={Register} />
                        <PrivateRoute
                            exact
                            path="/community"
                            component={Community}
                        />
                        <PrivateRoute
                            exact
                            path="/prompts"
                            component={Prompts}
                        />
                        <PrivateRoute
                            exact
                            path="/prompts/:id"
                            component={PromptById}
                        />
                        <PrivateRoute
                            exact
                            path="/prompts/create/submit"
                            component={AddPrompt}
                        />
                        <PrivateRoute
                            exact
                            path="/stories"
                            component={Stories}
                        />
                        <PrivateRoute
                            exact
                            path="/stories/:id"
                            component={StoryById}
                        />
                        <PrivateRoute
                            exact
                            path="/stories/create/submit"
                            component={AddStory}
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
                            exact
                            path="/dashboard"
                            component={() => <Dashboard slug={'profile'} />}
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
            </Router>
        </Provider>
    );
};

export default App;
