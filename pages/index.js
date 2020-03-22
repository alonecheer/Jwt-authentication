import { useState,useEffect } from "react";
import axios from "axios";

const Index = () =>{
  const [username,setUsername] = useState('');
  const [password,setPassword] = useState('');
  const [userid,setUserid] = useState('');
  let [store,setStore] = useState('');
  let [login,setLogin] = useState(false);
  
  
  
  useEffect( () => {
   
  },[])
  const logins = async ()   => {
    const result = await  axios.post('http://localhost:3001/auth/login',
      {username:username,password:password})
      //console.log(result.data.access_token)
      localStorage.setItem('login', JSON.stringify({
        token: result.data.access_token,
        login: true,  
      
      })
      )
  }

  const post = async () => {
    let token = "Bearer " 

  }
  return(
    <div>
      {!login?
      <div>
       <h1>Jwt Token with</h1>
      <input type="text" onChange={(e) => setUsername(e.target.value)} /><br></br><br></br>
      <input type="text" onChange={(e) => setPassword(e.target.value)} /><br></br><br></br>
      <button onClick={()=>{logins()}}>Login</button> 
      </div>
      :
      <div>
        <button onClick={()=>{post()}}>Post</button> 
      </div>
      }
    </div>

  )
}
export default Index;