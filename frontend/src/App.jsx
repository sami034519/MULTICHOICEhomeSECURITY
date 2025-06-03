import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header/Header';
import Main from './Home/crousal/Main';
import Footer from './Footer/Footer';
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Main />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
