import React, { Component } from 'react';
import '../App.css';

class Register extends Component {
state={
  username :"",
  password:""
}
  render() {
    return (
      <div className="App">
        <h1>reg</h1>
        <input type="text" onChange={this.handleChange.bind(this)} placeholder="username" name="username" value={this.state.username}></input><br/>
        <input type="password" onChange={this.handleChange.bind(this)} placeholder="password" name="password" value={this.state.password}></input><br/>
        <button onClick={this.changer.bind(this)}>change</button>
      </div>
    );
  }

  handleChange(ev){
    this.setState({[ev.target.name]:ev.target.value})
  }

  async changer(){
    
    let resp = await fetch('http://localhost:3000/adduser', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state)
    });
    // eslint-disable-next-line
    let data = await resp.json();
    
    this.props.r()

    // let insertUserID=data.insertId;
    // this.props.updateState(insertUserID)
    // debugger;

}
}

export default Register;
