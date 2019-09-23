import React, { Component } from 'react'
import '../scss/styles.css'
import NewNav from '../components/NewNav';
import NewListItem from '../components/NewListItem';

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
      backgroundImage: 'linear-gradient(#B6C8D8, #fff)',
      padding: '.75rem 0',
      margin: '0 auto 1rem auto',
      listStyleType: 'none',
      display: 'grid',
      gridTemplateColumns: '10% 15% 15% 15% 25% 10% 10%',
      gridTemplateRows: 'auto',
      gridTemplateAreas:
        'badge name type date details id article',
      color: '#151D3C',
    } 

    const titleText = {
      textAlign: 'left'
    }

    const title = {
      color: '#fff'
    }

     if(this.state.launch_success) {
       if(this.state.reused) {
         if(this.state.reddit) {
           console.log('success and reddit and reused');
          let filtArr = this.state.rockets.filter(rocket => rocket.launch_success === true && rocket.reuse.core === true && rocket.links.reddit_launch !== null);
          console.log(filtArr);
          success = filtArr.map(function(success) {
            return <NewListItem rockets={success} key={success.id} />
          }) 
         } else {
         console.log('success and reused');
         let filtArr = this.state.rockets.filter(rocket => rocket.launch_success === true && rocket.reuse.core === true);
         console.log(filtArr);
         success = filtArr.map(function(success) {
           return <NewListItem rockets={success} key={success.id} />
         })}
       } 
       else if (this.state.reddit) {
         console.log('success and reddit');
        let filtArr = this.state.rockets.filter(rocket => rocket.launch_success === true && rocket.links.reddit_launch !== null);
        console.log(filtArr);
        success = filtArr.map(function(success) {
          return <NewListItem rockets={success} key={success.id} />
        })
       } 
       else {
        let filtArr = this.state.rockets.filter(rocket => rocket.launch_success === true);
        console.log(filtArr);
        success = filtArr.map(function(success) {
          return <NewListItem rockets={success} key={success.id} />
      })}
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
          <li style={{textAlign: 'center'}}>Badge</li>
          <li style={titleText}>Rocket Name</li>
          <li style={titleText}>Rocket Type</li>
          <li style={titleText}>Launch Date</li>
          <li style={titleText}>Details</li>
          <li style={{textAlign: 'center'}}>ID</li>
          <li style={{textAlign: 'center'}}>Article</li>
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
