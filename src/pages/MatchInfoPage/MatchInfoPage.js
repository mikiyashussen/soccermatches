import React from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

import 'bootstrap/dist/css/bootstrap.min.css'; 
import MatchData from './MatchInfoData';

import './MatchInfoPage.css'

const MatchInfoPage = ({data, goToHome}) => {
  return <div style={{height: '100vh'}}>
      <Button onClick={goToHome}>Back</Button>
     <Table className='table' style={{textAlign: 'center', borderTop: 'none'}}  bordered  variant="dark">
      <thead>
        <tr style={{borderTop: 'none'}}>
          <th>{MatchData.sport_event.competitors[0].name }</th>
          <th>Description</th>
          <th>{MatchData.sport_event.competitors[1].name}</th>
        </tr>
      </thead>
        <tr style={{borderTop: 'none'}}>
            <td>{MatchData.sport_event_status.home_score}</td>
            <td>Score</td>
            <td>{MatchData.sport_event_status.away_score}</td>
        </tr>
        <tr style={{borderTop: 'none'}}> 
            <td>{MatchData.sport_event_status.period_scores[0].home_score}</td>
            <td>1st Half Score</td>
            <td>{MatchData.sport_event_status.period_scores[0].away_score}</td>
        </tr>
        <tr style={{borderTop: 'none'}}>
            <td>{MatchData.lineups.competitors[0].formation.type}</td>
            <td>Formation</td>
            <td>{MatchData.lineups.competitors[1].formation.type}</td>
        </tr>
         <tr style={{borderTop: 'none'}}>
            <td>{MatchData.lineups.competitors[0].manager.name}</td>
            <td>Manager</td>
            <td>{MatchData.lineups.competitors[1].manager.name}</td>
        </tr>
        <tr>
            {/* <td>{MatchData.lineups.competitors.formations.type}</td>
            <td>Line Ups</td>
            <td>{MatchData.lineups.competitors.formations.type}</td> */}
        </tr>
    </Table>
  </div>;
};

export default MatchInfoPage;
