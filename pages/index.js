import { useState } from "react";
import axios from "axios";

const Index = () =>{
  const [username,setUsername] = useState('');
  const [password,setPassword] = useState('');
  const [token,setToken] = useState('');

  const login = () => {
    const result = axios.post('http://localhost:3001/auth/login',
      {username:username,password:password})
      console.log(result.data)
  }
  return(
    <div>
      <h1>Jwt Token with</h1>
      <input type="text" onChange={(e) => setUsername(e.target.value)} /><br></br><br></br>
      <input type="text" onChange={(e) => setPassword(e.target.value)} /><br></br><br></br>
      <button onClick={()=>{this.login()}}>Login</button>
    </div>
  )
}
export default Index;