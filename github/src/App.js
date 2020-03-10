import React from 'react';
import axios from 'axios';
import './App.css';

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      user:[],
      followers:[]
    }

  }

  componentDidMount(){
      axios.get('https://api.github.com/users/jclark208')
        .then(res => {
          console.log(res);
          this.setState({
            user: res.data
          })
        
        })
        .catch(err => {
          console.log('You got an error stupid',err)
        });
      axios.get('https://api.github.com/users/jclark208/followers')
        .then(response => {
          console.log(response)
          this.setState({
            followers: response.data
          })
        })
        .catch(err => {
          console.log('OMG another error great',err)
        });
    //  this.setState({
    //    user: 
    //  }) 
    
  }
  


  render(){
    return(
    <div>
    

     <h1> {this.state.user.login}</h1>
    <h3>{this.state.user.html_url}</h3>   
    <h3>Repos: {this.state.user.public_repos}</h3>   
    <img src={this.state.user.avatar_url}/>
    
    

    {this.state.followers.map(follower =>{
      return(
        <div className='card'>
        <h1> {follower.login}</h1>
        <h3>{follower.html_url}</h3>   
        <h3>Repos: {follower.public_repos}</h3>   
        <img src={follower.avatar_url}/>
        </div>
      )
    })}
      </div>
    )
  }
}

export default App;
