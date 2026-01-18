// React Router
import { Routes, Route } from 'react-router-dom';


// style
import './assets/style/style.css';

// Pages
import Home from './pages/home/home';
import AddContact from './pages/addUser/AddContact';

// Components
import Nav from './components/nav';

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
         <Route path="/add" element={<AddContact />} />
      </Routes>
    </>
  )
}

export default App;
