import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Menu from './pages/Menu';

function App() {
	return (
		<div className='App'>
			<Router>
				<Navbar />
				<Switch>
					<Route path='/' exact component={Home}></Route>
					<Route path='/menu'>
						<Menu />
					</Route>
					<Route path='/about'>
						<About />
					</Route>
					<Route path='/contact'>
						<Contact />
					</Route>
				</Switch>
				<Footer />
			</Router>
		</div>
	);
}

export default App;
