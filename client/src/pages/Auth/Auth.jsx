import './Auth.css'
import Logo from '../../img/logo.png'
import { useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { logIn, signUp } from '../../actions/AuthActions'

const Auth = () => {
  const dispatch=useDispatch()
  const loading = useSelector((state)=>state.authReducer.loading)
  const [isSignUp,setIsSignUp]= useState(true);
  // console.log(loading);
  const [data,setData]=useState({firstname:"",lastname:"",password:"",confirmpass:"",username:""});

  const[confirmPass,setConfirmPass]=useState(true)
  const handleChange=(e)=>{
    setData({...data, [e.target.name]:e.target.value})
  };
  const handleSubmit=(e)=>{
    e.preventDefault();

    if(isSignUp){
      data.password===data.confirmpass
        ? dispatch(signUp(data))
        : setConfirmPass(false);
      }
      else
      {
        dispatch(logIn(data))
      }
    
  };
  const resetForm=()=>{
    setConfirmPass(true);
    setData({firstname:"",lastname:"",password:"",confirmpass:"",username:""});
  };
  return (
    <div className="Auth">
      <div className="a-left">
        <img src={Logo} alt="" />
        <div className="Webname">
          <h1>Twiter Media</h1>
          <h6>Explore the ideas throughout the world</h6>
        </div>
      </div>
      
      

      <div className="a-right">
      <form className='infoForm authForm' onSubmit={handleSubmit}>
        <h3>{isSignUp ?"Sign up":"Login"}</h3>
        {isSignUp &&(
        <div>
          <input type="text" placeholder='First Name' name="firstname" className="infoInput" onChange={handleChange} value={data.firstname} />
          <input type="text" placeholder='Last Name' name="lastname" className="infoInput" onChange={handleChange} value={data.lastname}  />
        </div>
        )}
        <div>
          <input type="text" placeholder='Username' name="username" className="infoInput" onChange={handleChange} value={data.username}  />
        </div>
        <div>
          <input type="password" placeholder='Password' name="password" className="infoInput" onChange={handleChange} value={data.password}  />
          {isSignUp &&
          <input type="password" placeholder='Confirm password' name="confirmpass" className="infoInput" onChange={handleChange} value={data.confirmpass}  />
          }
        </div>
        <span style={{display: confirmPass? "none":"block", color:'red',fontSize:'12px', alignSelf:"flex-end", marginRight:"5px"}}>
          * Confirm Password is not Same
        </span>
        <div>
          <span style={{fontSize:'12px',cursor:"pointer"}} onClick={()=>{setIsSignUp((prev)=>!prev); resetForm()}}  >
            {isSignUp? "Already have an acoount. Login!": "Don't have account. Signup!"}</span>
        </div>
        <button className="button infoButton" type='submit' disabled={loading}>{loading ? "Loading ..." : isSignUp? "Signup": "Login"}</button>
      </form>

    </div>

    </div>
    
  )
}

export default Auth
/*
  function Login(){
    return(
      <div className="a-right">
        <form className='infoForm authForm'>


          <h3>Login</h3>
          
          <div>
            <input type="text" placeholder='Username' name="username" className="infoInput" />
          </div>
          <div>
            <input type="text" placeholder='Password' name="password" className="infoInput" />
          </div>
          <div>
            <span style={{fontSize:'12px'}}>Don't have an account. Signup!</span>
            <button className="button infoButton" type='submit'>Signup</button>
          </div>
          
        </form>

      </div>
    )
  }

  function Signup(){
    return(
      <div className="a-right">
        <form className='infoForm authForm'>


          <h3>Sign up</h3>
          <div>
            <input type="text" placeholder='First Name' name="firstname" className="infoInput" />
            <input type="text" placeholder='Last Name' name="lastname" className="infoInput" />
          </div>
          <div>
            <input type="text" placeholder='Username' name="username" className="infoInput" />
          </div>
          <div>
            <input type="text" placeholder='Password' name="password" className="infoInput" />
            <input type="text" placeholder='Confirm password' name="confirmpass" className="infoInput" />
          </div>
          <div>
            <span style={{fontSize:'12px'}}>Already have an acoount. Login!</span>
          </div>
          <button className="button infoButton" type='submit'>Signup</button>
        </form>

      </div>
    )
  }
*/
