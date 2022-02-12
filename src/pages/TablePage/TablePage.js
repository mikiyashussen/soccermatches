import React from 'react';

import ScoreTable from '../../components/ScoreTable/ScoreTable'
import DropDownComp from '../../components/DropDown/DropDownComp';

import axios from 'axios';

class TablePage extends React.Component {
    constructor(){
        super();
        this.state = {
            scheduleData: {},
            matchInfo: {}
        }
    }

    onSeasonSelect = (event) => {
         axios.get(axios.get(`https://api.sportradar.us/soccer/trial/v4/en/seasons/${event}/schedules.json?api_key=d269z6e6zytd2axzs4updb8s`
       ).then(res => {
            console.log(res.data)
           this.setState({scheduleData: res.data})
        }))
    }

    onMatchRowSelect = (id) => {
        axios.get(axios.get(`https://api.sportradar.us/soccer/trial/v4/en/sport_events/${id}/lineups.json?api_key=d269z6e6zytd2axzs4updb8s`)
        .then(res =>{console.log(res);
             (this.props.toggleShowMatchInfo(res.data))}
             ))
    }

    componentDidMount(){
         axios.get('https://api.sportradar.us/soccer/trial/v4/en/seasons/sr:season:77453/schedules.json?api_key=d269z6e6zytd2axzs4updb8s')
         .then(res => {console.log(res.data)
        this.setState({scheduleData: res.data})})
    }
    render(){
        return  ( <div className='tablePageContainer'>
            {this.state.scheduleData.schedules && 
            <h3>{this.state.scheduleData.schedules[0].sport_event.sport_event_context.season.name}</h3>}
            <DropDownComp onSeasonSelect={this.onSeasonSelect}/>
            <ScoreTable onMatchRowSelect={this.onMatchRowSelect} tableData={this.state.scheduleData}/>
        </div>)
    }
};

export default TablePage;
