import './App.css';
import Books from './components/books';
import {BrowserRouter as Router, Route } from 'react-router-dom'
import Navigation from './components/nav';
import SavedBooks from './components/savedbooks'

function App() {
  return (
    <>
    <Router>
    <Navigation/>
    <Route path="/" exact component={Books} />
    <Route path="/saved" exact component={SavedBooks} />
    </Router>
    </>
  );
}

export default App;
