import './App.css';
import Navbar from './components/Navbar'
import Links from './components/Links'
import AboutUs from './components/AboutUs';
import Members from './components/Members';
import Membership from './components/Membership';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="padding-below-Navbar"></div>
      <AboutUs />
      <hr class="hr" />
      <Members />
      <hr class="hr" />
      <Membership />
      <Links />
    </div>
  );
}

export default App;
