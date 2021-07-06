import logo from './logo.svg';
import './App.css';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Mainboard from './components/Mainboard';
function App() {
  return (
    <div className="App">
      <div className="left-column">
      <Sidebar/>
      </div>
      <div className="right-cloumn">
        <Navbar/>

      </div>
      <Mainboard/>
    </div>
  );
}

export default App;
