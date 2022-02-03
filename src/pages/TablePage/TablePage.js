import React from 'react';

import ScoreTable from '../../components/ScoreTable/ScoreTable'
import DropDownComp from '../../components/DropDown/DropDownComp';
// import axios from '../../apis/sportradarApi'
import data from './data'
import axios from 'axios';

class TablePage extends React.Component {
    constructor(){
        super();
        this.state = {
            scheduleData: {},
            leagueTitle: 'Ekstraklasa 19/20'
        }
    }

    onSeasonSelect = (event) => {
        // fetch new data and update state= scheduleData
        // console.log(event)
        this.setState({leagueTitle: event})
    }

    componentDidMount(){
        //API retuning Cors Erros // for now state Updated manually from file
    //      axios.get('https://api.sportradar.us/soccer/trial/v4/en/seasons/sr:season:77453/schedules.json?api_key=d269z6e6zytd2axzs4updb8s',{
    //          headers: 
    //          {"Access-Control-Allow-Origin": "true"}
    //      }
    //    ).then(res => console.log(res)
    this.setState({scheduleData: data})
    }
    render(){
        return  ( <div className='tablePageContainer'>
            <h3>{this.state.leagueTitle}</h3>
            <DropDownComp onSeasonSelect={this.onSeasonSelect}/>
            <ScoreTable tableData={this.state.scheduleData}/>
        </div>)
    }
};

export default TablePage;
