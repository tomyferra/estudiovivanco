import './App.css';
import Navbar from './components/Navbar'
import Links from './components/Links'
import AboutUs from './components/AboutUs';
import Members from './components/Members';
import Memberships from './components/Memberships';
import TasksDone from './components/TasksDone';
import Wave from 'react-wavify'
function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="padding-below-Navbar"></div>
      <AboutUs />
      <div className="waveSeparator">
        <Wave fill='#3795BD'
          paused={false}
          options={{
            height: 30,
            amplitude: 30,
            speed: 0.15,
            points: 5
          }} />
      </div>
      <Members />
      <div className="waveSeparator">
        <Wave fill='#eef1f1'
          paused={false}
          options={{
            height: 30,
            amplitude: 30,
            speed: 0.15,
            points: 5
          }} />
      </div>
      <TasksDone />
      <Memberships />
      <Links />
    </div>
  );
}

export default App;
