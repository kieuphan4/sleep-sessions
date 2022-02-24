import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Signup from './components/Signup';
import Login from './components/Login';
import SleepSessionsList from './components/SleepSessionsList';
import SleepSessionsForm from './components/SleepSessionsForm';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={<Home />}>
          </Route>
          <Route
            path="/signup"
            element={<Signup />}>
          </Route>
          <Route
            path="/login"
            element={<Login />}>
          </Route>
          <Route
            path="/sleepsessions"
            element={<SleepSessionsList />}>
          </Route>
          <Route
            path="/sleepsessions/new"
            element={<SleepSessionsForm />}>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
