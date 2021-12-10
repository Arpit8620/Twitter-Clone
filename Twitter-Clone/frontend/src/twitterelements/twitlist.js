import React,{Component} from 'react';
import _tweetdisplay from './tweetdisplay'
import './twitter.css';
import axios from 'axios';
import "./Sidebar.css";
//import TwitterIcon from "@material-ui/icons/Twitter";
import { Button } from "@material-ui/core";
import {Link} from 'react-router-dom';
import TwitterIcon from '@material-ui/icons/Twitter';

class twitlist extends Component{
    constructor(){
        super();
        this.state={
            tweets:[],
            usern:{},
            quote:"",
            profilephoto:"",
            backphoto:"",
            id:null,
            prophoto: "",
            preuser:""
        }
    }
    async componentDidMount(){
        const man = await axios.get('/twitter');
        const pack = await axios.get('/twitter/getuser');
        console.log(man.data[0].profilephoto);
        console.log(pack.data[0].username);
        this.setState({
            tweets:man.data,
            usern:pack.data[0],
            id:pack.data[0]._id,
            quote:pack.data[0].quote,
            profilephoto:pack.data[0].profilephoto,
            backphoto:pack.data[0].backphoto,
            preuser: pack.data[0].username
        })
    }

    logout = async(e) => {
        e.preventDefault();
        await axios.get("/logout");
        this.props.history.push("/login");
    }

    render(){
        let ocean = this.state.tweets.map((a)=>{
            return (
                <div>
                    <_tweetdisplay usernam={a.username} arpit={a.profilephoto} oyo={a.tweets} />
                </div>
            )
        })
        return (
            <div>
                <div className="sidebar">
                    <TwitterIcon className="sidebar__twitterIcon" />

                    <div className="tweetbox">
                        <div className="useravatar">
                            <img src={`http://localhost:8000/${this.state.profilephoto}`} alt="" />
                            <h4>{this.state.usern.username}</h4>
                        </div>
                        <div className="quote"><h5>" {this.state.quote} "</h5></div>
                    </div>

                        <div><Link to="/twitter">Home</Link></div>
                        <div><Link to={`/twitter/${this.state.id}/mytweet`}>My Tweets</Link></div>
                        <div><Link to="/twitter/chat">Chats</Link></div>
                        <div><Link to={`/twitter/${this.state.id}/userprofile`}>Profile</Link></div>
                        <div><Link to={`/twitter/${this.state.id}/newtweets`}>Tweet</Link></div><br />
                        <div><Button onClick={this.logout}>Logout</Button></div>
                </div>
                {console.log(this.props.match.params._id)}
                {console.log(this.props)}
                {ocean}
            </div>
        )
    }
}

export default twitlist;