import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header/Header';
import Main from './Home/crousal/Main';
import Footer from './Footer/Footer';
import CCTV from './All services/CCTV';
import DoorAutomation from './All services/DoorAutomation';
import SmartAlarmSystem from './All services/SmartAlarmSystem';
import ElectricFence from './All services/ElectricFence';
import Solarenergy from './All services/Solarenergy';
import Firedetection from './All services/Firedetection';
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Main />} />
         <Route path='/services/smart-alarm-system' element={<SmartAlarmSystem />} />
          <Route path='/services/smart-Door-automation' element={<DoorAutomation />} />
           <Route path='/services/cctv-surveillance' element={<CCTV />} />
            <Route path='/services/electric-fence' element={<ElectricFence />} />
             <Route path='/services/solar-energy' element={<Solarenergy />} />
             <Route path='/services/fire-detection-system' element={<Firedetection />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
