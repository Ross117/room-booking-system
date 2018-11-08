import React, { Component } from 'react';
import './App.css';
import Header from './components/header'
import MyMeetingsTable from './components/my-meetings-table';

class App extends Component {

  state = {
    page: 0
  }

  render() {
    return (
      <div className="App">
        <Header title="My Meetings"></Header>
        { 
          this.state.page === 0 ? <MyMeetingsTable newMeeting={() => this.setState({ page: 1 })} /> : 
            this.state.page === 1 ? <div /> :
            <div />
        }
      </div>
    );
  }
}

export default App;
