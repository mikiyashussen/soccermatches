// import {BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import {useState} from 'react'
import TablePage from './pages/TablePage/TablePage';
import MatchInfoPage from './pages/MatchInfoPage/MatchInfoPage';


import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  const [showMatchInfo, setShowMatchInfo] = useState(false)
  const [matchInfoData, setMatchInfoData] = useState({})

  const toggleShowMatchInfo = (data) =>{
    setMatchInfoData(data);
    setShowMatchInfo(true);
  }

  const goToHome= () => {
    setShowMatchInfo(false);
  }
  return (
     <div className="App">
        <h2>Sportradar</h2>
        {showMatchInfo ? <MatchInfoPage goToHome={goToHome} matchData={matchInfoData} /> :  
        <TablePage toggleShowMatchInfo={toggleShowMatchInfo} />
        }
      </div>
  );
}

export default App;


