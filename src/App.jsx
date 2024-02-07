import './App.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Wallet from './components/Wallet';
import Navbar from './components/Navbar'
import Bridge from './components/Bridge'
import Withdraw from './components/Withdraw';


function App() {
  return (
    <>
    <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Wallet />} />
          <Route exact path="/bridge" element={<Bridge />} />
          <Route exact path="/withdraw" element={<Withdraw />} />
        </Routes>
      </Router>

    </>
  )
}

export default App;
