import './App.css';
import Header from './Header/Header';
import { BrowserRouter } from 'react-router-dom';
import Main from "./Home/crousal/Main"
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Main/>

    </BrowserRouter>
  );
}

export default App;
