import React, { Component } from 'react';
import './App.css';
import Header from './components/header'
import MyMeetingsTable from './components/my-meetings-table';
import StartWizard from './components/wizard/start-wizard'
import GetFacilities from './components/wizard/facilities'
import MeetingRecommendations from './components/wizard/meeting-recommendations'
import GetDetails from './components/wizard/get-details'

class App extends Component {

  state = {
    page: 'home',
    specificTime: false,
    facilities: {
      audioCon: false,
      videoCon: false,
      desk: false,
      presentation: false,
      network: false
    }
  }

  updateFacilities(field) {
    this.state.facilities[field] = !this.state[field]
    this.setState(this.state)
  }

  render() {
    return (
      <div className="App">
        <Header title="My Meetings"></Header>
        { 
          this.state.page === 'home' ? 
            <MyMeetingsTable newMeeting={() => this.setState({ page: 'startWizard' })} /> : 
          this.state.page === 'startWizard' ? 
            <StartWizard 
              yes={() => this.setState({ specificTime: true, page: 'getDetails' })} 
              no={() => this.setState({ page: 'getDetails' })} /> :
          this.state.page === 'getDetails' ? 
            <GetDetails 
              next={() => this.setState({ page: 'getFacilities' })} /> :
          this.state.page === 'getFacilities' ? 
            <GetFacilities 
              facilities={this.state.facilities} 
              stateChanged={this.updateFacilities.bind(this)} 
              next={() => this.setState({ page: 'recommendations' })} /> :
          this.state.page === 'recommendations' ? 
            <MeetingRecommendations /> :
            <div />
        }
      </div>
    );
  }
}

export default App;
