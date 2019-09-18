import React, { Component } from 'react'
import '../scss/styles.css'
import Rockets from '../pages/Rockets';
import NewList from '../components/NewList';
import NewNav from '../components/NewNav';
import NewListItem from '../components/NewListItem';
import background from '../assets/images/background.jpg';
import checkmark from '../assets/images/checkmark.svg'

class App extends Component {
  state = {
    rockets: [],
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
    let imgStyle = document.getElementById('checkImgSuccess').style.visibility;
    console.log('Success checked');
    this.setState({launch_success: !this.state.launch_success});
    console.log('NEW STATE= ' + this.state.launch_success);
    if(imgStyle === 'hidden') {
      document.getElementById('checkImgSuccess').style.visibility = '';
    } else {
      document.getElementById('checkImgSuccess').style.visibility = 'hidden'
    }
  }
  handleReused = () => {
    let imgStyle = document.getElementById('checkImgReuse').style.visibility;
    console.log('Reused checked');
    this.setState({reused: !this.state.reused});
    console.log('NEW STATE: ' + this.state.reused);
    if(imgStyle === 'hidden') {
      document.getElementById('checkImgReuse').style.visibility = '';
    } else {
      document.getElementById('checkImgReuse').style.visibility = 'hidden'
    }
  }
  handleReddit = () => {
    let imgStyle = document.getElementById('checkImgReddit').style.visibility;
    console.log('Reddit checked');
    this.setState({reddit: !this.state.reddit});
    console.log('NEW STATE: ' + this.state.reddit);
    if(imgStyle === 'hidden') {
      document.getElementById('checkImgReddit').style.visibility = '';
    } else {
      document.getElementById('checkImgReddit').style.visibility = 'hidden'
    }
  }

  uncheck = () => {
    document.getElementById('checkbox').checked=false;
  }

  refresh = () => {
    console.log('Refresh clicked');
    this.componentDidMount();
    if(this.state.launch_success) {
      this.uncheck();
      this.handleSuccess();
    } else if(this.state.reddit) {
      this.uncheck();
      this.handleReddit();
    } else if(this.state.reused) {
      this.uncheck();
      this.handleReused();
    }
  }



	render() {
    let success;
    let list;
    let reused;
    let reddit;

    const titleBar = {
      padding: '0',
      margin: '0 auto 1rem auto',
      listStyleType: 'none',
      display: 'grid',
      gridTemplateColumns: '13% 13% 13% 13% 13% 13% 13%',
      gridTemplateRows: 'auto',
      gridTemplateAreas:
        'badge name type date details id article',
      color: 'blue',
    } 

    const title = {
      color: '#fff'
    }

     if(this.state.launch_success) {
      let filtArr = this.state.rockets.filter(rocket => rocket.launch_success === true);
      console.log(filtArr);
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
			<div id="app" className='page-wrapper'>
				<h1 style={title}>SpaceX Launches</h1>
        <NewNav rockets={this.state.rockets} handleSuccess={this.handleSuccess} handleReused={this.handleReused} handleReddit={this.handleReddit} refresh={this.refresh} />
        <ul style={titleBar}>
          <li style={titleBar}>Badge</li>
          <li style={titleBar}>Name</li>
          <li style={titleBar}>Type</li>
          <li style={titleBar}>Date</li>
          <li style={titleBar}>Details</li>
          <li style={titleBar}>ID</li>
          <li style={titleBar}>Article</li>
        </ul>
        {list}
        {success}
        {reused}
        {reddit}
			</div>
		)
	}
}

export default App
