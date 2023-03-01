import './App.css';
import Navbar from './components/Navbar'
import Links from './components/Links'
import AboutUs from './components/AboutUs';
import Members from './components/Members';
import Membership from './components/Membership';
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
          }}
        />
      </div>
      {/* <hr class="hr" /> */}
      <Members />
      <hr class="hr" />
      <Membership />
      <hr class="hr" />
      <TasksDone />
      <hr class="hr" />
      <Links />
    </div>
  );
}

export default App;
