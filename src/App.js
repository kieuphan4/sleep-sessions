import './App.css';
import Home from './components/Home'
import Signup from './components/Signup'
import Login from './components/Login'
import SleepSessionsList from './components/SleepSessionsList'
import SleepSessionsForm from './components/SleepSessionsForm'

function App() {
  return (
    <div className="App">
      <Home />
      <Signup />
      <Login />
      <SleepSessionsList />
      <SleepSessionsForm />
    </div>
  );
}

export default App;
