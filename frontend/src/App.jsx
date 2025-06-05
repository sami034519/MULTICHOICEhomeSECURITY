import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header/Header';
import Main from './Home/crousal/Main';

import CCTV from './All services/CCTV';
import DoorAutomation from './All services/DoorAutomation';
import SmartAlarmSystem from './All services/SmartAlarmSystem';
import ElectricFence from './All services/ElectricFence';
import Solarenergy from './All services/Solarenergy';
import Firedetection from './All services/Firedetection';
import WhyChooseMultiChoice from './WHYchooseus/Whychoose';
import OurStory from './Ourstory/Ourstory';
import Contactus from './Contactus/Contactus';

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
              <Route path='/multichoice' element={<WhyChooseMultiChoice />} />
              <Route path='/ourstory' element={<OurStory />} />
               <Route path='/contact' element={<Contactus />} />
      </Routes>
      
    </Router>
  );
}

export default App;
