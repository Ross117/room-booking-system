import React, { Component } from 'react';
import './App.css';
import Header from './components/header'
import MyMeetingsTable from './components/my-meetings-table';
import Page1 from './components/wizard/page1'

class App extends Component {

  state = {
    page: 0
  }

  render() {
    return (
      <div className="App">
        <Header title="My Meetings"></Header>
        { 
          this.state.page === 0 ? 
            <MyMeetingsTable newMeeting={() => this.setState({ page: 1 })} /> : 
            
            this.state.page === 1 ? <Page1 /> :
            <div />
        }
      </div>
    );
  }
}

export default App;
