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
            matchInfo: {}
        }
    }

    onSeasonSelect = (event) => {
        // fetch new data and update state= scheduleData
         axios.get(axios.get(`https://api.sportradar.us/soccer/trial/v4/:language_code/competitions/${event}/seasons.json?api_key=d269z6e6zytd2axzs4updb8s`,{
             headers: 
             {"Access-Control-Allow-Origin": "true"}
         }
       ).then(res => this.setState({scheduleData: res})))
        // console.log(event)
        // this.setState({leagueTitle: event})
    }

    onMatchRowSelect = (id) => {
        console.log(id);
        axios.get(axios.get(`https://api.sportradar.us/soccer/trial/v4/en/sport_events/${id}/lineups.json?api_key=d269z6e6zytd2axzs4updb8s`,{
             headers: 
             {"Access-Control-Allow-Origin": "true"}
         }
       ).then(res => (this.props.toggleShowMatchInfo(res))))
       this.props.toggleShowMatchInfo(this.state.matchInfo)
    }

    componentDidMount(){
        //   ........... API retuning Cors Erros // for now state Updated manually from data.js file ............... //
    //      axios.get('https://api.sportradar.us/soccer/trial/v4/en/seasons/sr:season:77453/schedules.json?api_key=d269z6e6zytd2axzs4updb8s',{
    //          headers: 
    //          {"Access-Control-Allow-Origin": "true"}
    //      }
    //    ).then(res => console.log(res)
    this.setState({scheduleData: data})
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
