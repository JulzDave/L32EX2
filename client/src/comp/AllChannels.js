import React, { Component } from 'react';
import '../App.css';
import Mapper from './Mapper';



class AllChannels extends Component {
state={
  channels:[],
  client:[]

}
 async componentDidMount(){
 let resp = await fetch('http://localhost:3000/allchannels')
 let content = await resp.json();
 this.setState({channels:content})
 let resp2 = await fetch('http://localhost:3000/getuserdata?username='+this.props.u+'&password='+this.props.p)
 let content2 = await resp2.json();
 this.setState({client:content2})
 debugger;
 
  }

  render() {
    return (
      <div className="App">
       <h1>channels:</h1>
       
       {this.state.channels.map(x=><Mapper key={x.id} x={x} c={this.state.client} arr={this.clientarray.bind(this)}/>)}
       <br/>
       <button onClick={this.changer.bind(this)}>change</button>
      </div>
    );
  }
  changer(){
    this.props.r()
    }
    clientarray(a, n, p){
      debugger;
      this.setState(
      {client:[{
        id:this.state.client.id,
        username:n,
        password:p,
        channels:a}]
      
    });
    }

    
}

export default AllChannels;
