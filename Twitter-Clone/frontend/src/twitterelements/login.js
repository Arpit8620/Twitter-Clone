import React,{Component} from 'react'
import axios from 'axios';
import {Redirect,Switch} from 'react-router-dom';

class login extends Component{
    constructor(props){
        super(props);
        this.state={
            username:'',
            password:''
        }
    }

    changehandler=(e)=>{
       // console.log(e.target.name + " : " + e.target.value);
        this.setState({[e.target.name] : e.target.value})
    }

    submithandler=async(e)=>{
        e.preventDefault();
      //  console.log(this.state);
        const man=await axios.post('/login',this.state);
        console.log(man);
        this.props.history.push('/twitter');
        console.log(this.props);
    }

    render(){
        return (
            <div className="container">
                <form onSubmit={this.submithandler}>
                <h1>LOGIN</h1>
                Enter Your username : <input type="text" name="username" onChange={this.changehandler} /><br /><br />
                Enter The Password : <input type="password" name="password" onChange={this.changehandler} /><br /><br />
                <button> Submit</button>
                <label>Don't Have An Account? <a className="login" href="/">SIGN UP</a></label>
                </form>
            </div>
        )
    }
}

export default login;