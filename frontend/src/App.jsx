import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header/Header';
import Main from './Home/crousal/Main';
import Footer from './Footer/Footer';

import Electricfence from './Electricfence';
import Smartalarm from './Smartalarm';
import Firedetection1 from './Firedetection1';
import Solarpanel from './Solarpanel';

import WhyChooseMultiChoice from './WHYchooseus/Whychoose';
import OurStory from './Ourstory/Ourstory';
import Doorautomation from './Doorautomation';
import Contactus from './Contactus/Contactus';
import CCTV from './CCTV2';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Main />} />
         <Route path='/smart-alarm-system' element={<Smartalarm />} />
          <Route path='/smart-Door-automation' element={<Doorautomation />} />
           <Route path='/cctv-surveillance' element={<CCTV />} />
            <Route path='/electric-fence' element={<Electricfence />} />
             <Route path='/solar-energy' element={<Solarpanel />} />
             <Route path='/fire-detection-system' element={<Firedetection1 />} />
              <Route path='/multichoice' element={<WhyChooseMultiChoice />} />
              <Route path='/ourstory' element={<OurStory/>} />
               <Route path='/contact' element={<Contactus />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
