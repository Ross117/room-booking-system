import React, { Component } from 'react';
import './App.css';
import Header from './components/header'
import MyMeetingsTable from './components/my-meetings-table';

class App extends Component {

  page = 0

  render() {
    return (
      <div className="App">
        <Header title="My Meetings" />
        { this.page === 0 ? <MyMeetingsTable /> : <div /> }
      </div>
    );
  }
}

export default App;
