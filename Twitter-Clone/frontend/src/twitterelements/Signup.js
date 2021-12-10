import React,{Component} from 'react'
import axios from 'axios';
import './signup.css'
import {Route,Link,Switch} from 'react-router-dom';
import login from './login'

class Signup extends Component{
    constructor(){
        super();
        this.state={
            username:'Aditi',
            email:'abcd@gmail.com',
            phoneno:12,
            dob:null,
            gender:'',
            password:'12345'
        }
    }
    changehandleruser=(e)=>{
        console.log(e.target.name + " : " + e.target.value );
        this.setState(
            {
                username : e.target.value ,
            }
        )
        console.log(this.state);
    }
    changehandleremail=(e)=>{
        console.log(e.target.name + " : " + e.target.value );
        this.setState(
            {
                email : e.target.value ,
            }
        )
        console.log(this.state);
    }

    changehandlerpass=(e)=>{
        console.log(e.target.name + " : " + e.target.value );
        this.setState(
            {
                password : e.target.value ,
            }
        )
        console.log(this.state);
    }
    changehandled=(e)=>{
        console.log(e.target.name + " : " + e.target.value);
        this.setState({
            [e.target.name] : e.target.value 
        })
    }
    submithandler=async(e)=>{
        e.preventDefault();
        //console.log(this.state);
        const man=await axios.post('/register',this.state)
        console.log(man);
        this.props.history.push('/login');
    }

    render(){
        return (
            <div className="container">
                <h1>TWITTER</h1>
                <form onSubmit={this.submithandler}>
                    <label>
                    Username :
                    <input
                    name="username"
                    type="text"
                    placeholder="Enter Username"
                    onChange={this.changehandleruser} />
                   </label>
                   <br />
                   <label>
                   Email :
                   <input
                   name="email"
                   type="email"
                   placeholder="Enter E-Mail"
                   onChange={this.changehandleremail} />
                   </label>
                   <br />
                   <label>
                   Phone Number :
                   <input 
                   type="number" 
                   name="phoneno" 
                   placeholder="Enter Phone Number"
                   onChange={this.changehandled} />
                   </label>
                   <br />
                   <label>
                   DOB :
                   <input 
                   type="date" 
                   name="dob" 
                   onChange={this.changehandled} />
                   </label>
                   <br />
                   <label>
                   Gender :
                   <input
                   name="gender"
                   type="text"
                   placeholder="Enter Gender"
                   onChange={this.changehandled} />
                   </label>
                   <br />
                   <label>
                   Password :
                   <input
                   name="password"
                   type="password"
                   placeholder="Enter Password"
                   onChange={this.changehandlerpass} />
                   </label>
                   <button> SIGN IN </button>
                   <label>Already Have An Account? <a className="login" href="/login">LOGIN</a></label>
                </form>
            </div>
        )
    }
}

export default Signup;