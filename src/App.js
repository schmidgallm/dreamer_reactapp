// REACT
import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Layout/Navbar';
import Landing from './components/Pages/Landing';
import Register from './components/Auth/Register';
import Login from './components/Auth/Login';
import Prompts from './components/Pages/Prompts';
import Alert from './components/Alert';
import Footer from './components/Layout/Footer';
import { Provider } from 'react-redux';
import store from './store';
import './App.css';

function App() {
	return (
		<Provider store={store}>
			<Router>
				<Fragment>
					<Navbar />
					<Route exact path="/" component={Landing} />
					<section className="container">
						<Alert />
						<Switch>
							<Route exact path="/register" component={Register} />
							<Route exact path="/login" component={Login} />
							<Route exact path="/prompts" component={Prompts} />
						</Switch>
					</section>
					<Footer />
				</Fragment>
			</Router>
		</Provider>
	);
}

export default App;
