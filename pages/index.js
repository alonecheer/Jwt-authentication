import React,{Component} from 'react'

class Index extends Component {
  constructor()
  {
    super();
    this.state={
      email:null,
      password:null,
    }
  }
  render(){
    return(
<div>
    <h1>Jwt Token with</h1>
    <div>
      <input type="text" onChange={(event)=>{this.setState({email:event.target.value})}}></input><br></br><br></br>
      <input type="text" onChange={(event)=>{this.setState({password:event.target.value})}}></input><br></br><br></br>
      <button onClick={()=>{this.login()}}>Login</button>
    </div>
  </div>
    )
  }
}

export default Index
