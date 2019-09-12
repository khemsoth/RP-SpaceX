import React, { Component } from 'react'
import '../scss/styles.css'
import Rockets from '../pages/Rockets';
import NewList from '../components/NewList';
import NewNav from '../components/NewNav';
import NewListItem from '../components/NewListItem';

class App extends Component {
  state = {
    rockets: [
    /*
    {
      flight_number: 1,
      name: 'name1',
      type: 'type1', 
      date: 'date1', 
      details: 'details1', 
      id: 'id1',
      article: 'article1',
      success: false,
      reuse: true,
      reddit: false,
    },
    {
      flight_number: 2,
      name: 'name2',
      type: 'type2', 
      date: 'date1', 
      details: 'details2', 
      id: 'id2',
      article: 'article2',
      success: true,
      reuse: false,
      reddit: true,
    },
    {
      flight_number: 3,
      name: 'name3',
      type: 'type3', 
      date: 'date3', 
      details: 'details3', 
      id: 'id3',
      article: 'article3',
      success: false,
      reuse: false,
      reddit: true,
    }, */
  ],
  launch_success: false,
  reused: false,
  reddit: false
}

async componentDidMount() {
  const res = await fetch('https://api.spacexdata.com/v2/launches');
  const data = await res.json();
  this.setState({rockets: data})
  console.log(data);
 };



handleSuccess = () => {
  console.log('Success checked');
  this.setState({launch_success: !this.state.launch_success});
  console.log('NEW STATE= ' + this.state.launch_success);
  }
  handleReused = () => {
    console.log('Reused checked');
    this.setState({reused: !this.state.reused});
    console.log('NEW STATE: ' + this.state.reused);
  }
  handleReddit = () => {
    console.log('Reddit checked');
    this.setState({reddit: !this.state.reddit});
    console.log('NEW STATE: ' + this.state.reddit);
  }



	render() {
    let success;
    let list;
    let reused;
    let reddit;

     if(this.state.launch_success) {
      let filtArr = this.state.rockets.filter(rocket => rocket.launch_success === true);
      success = filtArr.map(function(success) {
        return <NewListItem rockets={success} key={success.id} />
      })
     }
     else if(this.state.reused) {
        let filtArr = this.state.rockets.filter(rocket => rocket.reuse.core === true);
        console.log(filtArr);
        reused = filtArr.map(function(reused) {
          return <NewListItem rockets={reused} key={reused.rocket.flight_number} />
        })
      }
      else if(this.state.reddit) {
        let filtArr = this.state.rockets.filter(rocket => rocket.links.reddit_launch !== null);
        console.log(filtArr);
        reddit = filtArr.map(function(reddit) {
          return <NewListItem rockets={reddit} key={reddit.rocket.flight_number} />
        })
      }
      else {
        list = this.state.rockets.map(function(list) {
          return <NewListItem rockets={list} key={list.rocket.flight_number} />
        })
      }
     
    
		return (
			<div id="app" className="page-wrapper">
				<h1>SpaceX Launches</h1>
        <NewNav rockets={this.state.rockets} handleSuccess={this.handleSuccess} handleReused={this.handleReused} handleReddit={this.handleReddit} />
        {list}
        {success}
        {reused}
        {reddit}
			</div>
		)
	}
}

export default App
