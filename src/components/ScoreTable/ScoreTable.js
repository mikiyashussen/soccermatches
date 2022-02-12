import React from 'react';
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './ScoreTable.css'

const ScoreTable = ({tableData, onMatchRowSelect}) => {
    let classNameHome = ''
    let classNameAway = ''

    const assignClassName = (match) => {
     let matchResult = match.sport_event_status.match_tie ? 'tie' : match.sport_event_status.winner_id;
    if(matchResult === 'tie'){
      classNameHome='tie';
      classNameAway='tie';
    }
    else if(matchResult === match.sport_event.competitors[0].id){
        classNameHome='winner';
        classNameAway='loser';
    }
    else {
      classNameHome='loser';
      classNameAway='winner';
    }
  }

  const createRow = (match,index) => {
    assignClassName(match)
    return (
            <tr key={match.sport_event.id} onClick={() => onMatchRowSelect(match.sport_event.id)}>
                <td className={classNameHome} 
                style={{backgroundColor: classNameHome === 'winner' ? 'green' :
                 (classNameHome === 'loser' ? 'red' : 'orange')}}
                >{match.sport_event.competitors[0].name }
                </td>
                <td className={classNameAway}
                style={{backgroundColor: classNameAway === 'winner' ? 'green' :
                 (classNameAway === 'loser' ? 'red' : 'orange')}}>
                 {match.sport_event.competitors[1].name}
                 </td>
                <td>{match.sport_event_status.home_score} {'-'}
                     {match.sport_event_status.away_score}
                </td>
                <td>{tableData.schedules[1].sport_event_status.period_scores[0].home_score}{'-'}
                    {tableData.schedules[1].sport_event_status.period_scores[0].away_score}
                </td>
                <td>{`${(match.sport_event.start_time).substring(0,10)}  
                    `}
                </td>
                <td>
                    {match.sport_event.venue.name
                }</td>
            </tr>
          )
  }
  return <div>
    <Table  className='scoreTable'>
      <thead>
        <tr>
          <th>Home Team</th>
          <th>Away Team</th>
          <th>Score</th>
          <th>Half-time Score</th>
          <th>Date</th>
          <th>Stadium</th>

        </tr>
      </thead>
        {tableData.schedules && 
          <tbody>
          {tableData.schedules.map((match,index) => {
              return createRow(match,index)
            })}
        </tbody>}
    </Table>
  </div>;
};

export default ScoreTable;
