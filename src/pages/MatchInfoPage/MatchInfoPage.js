import React from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

import 'bootstrap/dist/css/bootstrap.min.css'; 
// import MatchData from './MatchInfoData';

import './MatchInfoPage.css'

const MatchInfoPage = ({matchData, goToHome}) => {
  return <div style={{height: '100vh'}}>
      <Button onClick={goToHome}>Back</Button>
     <Table className='table' style={{textAlign: 'center', borderTop: 'none'}}  bordered  variant="dark">
      <thead>
        <tr style={{borderTop: 'none'}}>
          <th>{matchData.sport_event.competitors[0].name }</th>
          <th>Description</th>
          <th>{matchData.sport_event.competitors[1].name}</th>
        </tr>
      </thead>
        <tr style={{borderTop: 'none'}}>
            <td>{matchData.sport_event_status.home_score}</td>
            <td>Score</td>
            <td>{matchData.sport_event_status.away_score}</td>
        </tr>
        <tr style={{borderTop: 'none'}}> 
            <td>{matchData.sport_event_status.period_scores[0].home_score}</td>
            <td>1st Half Score</td>
            <td>{matchData.sport_event_status.period_scores[0].away_score}</td>
        </tr>
     { matchData.lineups.competitors.formation && <tr style={{borderTop: 'none'}}>
            <td>{matchData.lineups.competitors[0].formation.type}</td>
            <td>Formation</td>
            <td>{matchData.lineups.competitors[1].formation.type}</td>
        </tr>}
         {matchData.lineups.competitors.manager && <tr style={{borderTop: 'none'}}>
            <td>{matchData.lineups.competitors[0].manager.name}</td>
            <td>Manager</td>
            <td>{matchData.lineups.competitors[1].manager.name}</td>
        </tr>}
    </Table>
    <div className='stadiumInfo'>
      <p>{matchData.sport_event.venue.name}</p>
      <p>{matchData.sport_event.venue.city_name},{matchData.sport_event.venue.country_name}</p>
      Capacity - {matchData.sport_event.venue.capacity}
    </div>
  </div>;
};

export default MatchInfoPage;
