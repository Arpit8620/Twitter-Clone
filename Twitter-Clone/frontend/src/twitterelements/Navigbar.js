import React,{Component} from 'react'
/*import {Nav, Navbar} from 'react-bootstrap'*/
import {Link} from 'react-router-dom';
import updateprofile from './updateprofile';

class Navigbar extends Component{
    render(){
        return (
            <div>
            <nav>
                <ul>
                    <Link to="/twitter">Home</Link>
                    <Link to="/twitter/:_id/mytweets">My Tweets</Link>
                    <Link to="/twitter/:id/newtweets">New Tweets</Link>
                    <Link to="/twitter/chat">Chat</Link>
                    <Link to='/twitter/:_id/userprofile'>My Profile</Link>
                </ul>
            </nav>
            </div>
        )
    }
}

export default Navigbar;