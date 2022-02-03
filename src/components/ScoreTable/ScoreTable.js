import React from 'react';
import Table from 'react-bootstrap/Table';
import './ScoreTable.css'

const ScoreTable = ({tableData}) => {
  
  const createRow = (match,index) => {
    
    return (
            <tr >
              <td>{`${match.sport_event.competitors[0].name } - ${match.sport_event.competitors[1].name}`}</td>
              <td>{match.sport_event_status.home_score} {'-'} {match.sport_event_status.away_score}</td>
            </tr>
          )
  }
  return <div>
    <Table className='scoreTable'  bordered hover variant="dark">
      <thead>
        <tr>
          <th>Home</th>
          <th>Score</th>
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
