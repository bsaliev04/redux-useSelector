import './App.css';
import { Profile } from './components/Profile';
import { Login } from './components/Login';
import { ChangeColor } from './components/ChangeColor';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Profile/>
        <Login/>
        <ChangeColor/>
      </header>
    </div>
  );
}

export default App;
