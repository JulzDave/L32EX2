import React, { Component } from 'react';
import './App.css';
import AllChannels from './comp/AllChannels';
import Register from './comp/Register';

class App extends Component {
  state={
    reg:true,
    username:"",
    password:""
  }
  render() {
    if(this.state.reg){
    return (
      <div className="App">
        <Register r={this.blur.bind(this)}/>
      </div>
    );
  }
  else{
    return (
      <div className="App">
        <AllChannels  u={this.state.username} p={this.state.password}/>
      </div>
    );
  }
  }
  changex(){
    if(this.state.reg){
    this.setState({reg:false})
    }
    else{
      this.setState({reg:true})
    
    }
  }
  blur(){
    this.setState({
      username:document.getElementsByTagName("input")[0].value,
      password:document.getElementsByTagName("input")[1].value
    })
    debugger;
    this.changex()
  }
}

export default App;
