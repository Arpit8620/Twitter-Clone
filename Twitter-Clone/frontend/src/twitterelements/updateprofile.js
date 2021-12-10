import React,{Component} from 'react';
import axios from 'axios';

class updateprofile extends Component{
    constructor(props)
    {
        super(props);
        this.state={
            quote:'',
            profilephoto:null,
            backphoto:null            
        }
    }
    changehandler=(e)=>{
        this.setState({
        [e.target.name]:e.target.value
        })
    }
    profilehandler=(e)=>{
        console.log(e.target.files[0]);
        this.setState({
            profilephoto:e.target.files[0]
        })
    }
    backhandler=(e)=>{
        console.log(e.target.files[0]);
        this.setState({
            backphoto:e.target.files[0]
        })
    }
    submithandler=async(e)=>{
        e.preventDefault();
        console.log(this.state);
        const formdata = new FormData();
        formdata.append('quote',this.state.quote);
        formdata.append('profilephoto',this.state.profilephoto,this.state.profilephoto.name);
        formdata.append('backphoto',this.state.backphoto,this.state.profilephoto.name);
        console.log(formdata.get('profilephoto'));
        console.log(formdata.get('backphoto'));
        const wool = await axios.patch(`/twitter/${this.props.match.params._id}/myprofile`,formdata);
        console.log(wool);
    }
    async componentDidMount(){
        const flash = await axios.get(`/twitter/${this.props.match.params._id}/frog`);
        console.log(flash.data.quote);
        this.setState({
            quote:flash.data.quote
        })
    }
    render()
    {
        return (
            <div className="container">
                <form onSubmit={this.submithandler}>
                <h1>My Profile</h1>
                Quote : <textarea name="quote" rows="4" cols="50" onChange={this.changehandler} >{this.state.quote}</textarea><br /><br />
                Profile Photo : <input type="file" name="profilephoto" onChange={this.profilehandler} /><br /><br />
                Back Photo : <input type="file" name="backphoto" onChange={this.backhandler} /><br /><br />
                <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default updateprofile;