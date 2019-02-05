import React, { Component } from 'react';
import '../App.css';

class Mapper extends Component {
state={
  color:"channelsR"
}


  render() {
    return (
     <div className={this.state.color} onClick={this.colorize.bind(this)}>
       {this.props.x.channels}
     </div>
    );
  }

  colorize(){
    if(this.state.color==="channelsR"){
      this.setState({color:"channelsG"})
      this.updateChannel()
    }
    else{
      this.setState({color:"channelsR"})
    }
  }
 
  async updateChannel()
  {
    let selectedChannel=  this.props.x.channels;
    debugger;
    let allchannels = this.props.c[0].channels
   let allchannelsParsed = JSON.parse(allchannels)
    debugger;
    allchannelsParsed.push(selectedChannel);
     allchannels = JSON.stringify(allchannelsParsed)
     let n = this.props.c[0].username;
     let p = this.props.c[0].password;

    await fetch('http://localhost:3000/updateuser?username='+this.props.c[0].username+"&password="+this.props.c[0].password , {
       method: 'POST',
       headers: {
         'Accept': 'application/json',
         'Content-Type': 'application/json'
       },
       body: JSON.stringify( {allC:allchannelsParsed} )
     });
     this.props.arr(allchannels, n, p)

  }


}

export default Mapper;
