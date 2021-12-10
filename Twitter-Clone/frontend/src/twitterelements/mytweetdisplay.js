import React,{Component} from 'react'
import './twitter.css';
import singlecomment from './singlecomment';
import {Route,Switch,Link} from 'react-router-dom'

class mytweetdisplay extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div className="Tweetdisplay">
                {/* {console.log(this.props.crisp.body)} */}
                {this.props.crisp.body}<br /><br />
                <img src={`http://localhost:8000/${this.props.crisp.image}`} alt="..." /><br /><br />
                <button><Link to={`/twitter/tweet/${this.props.crisp._id}/comment`}>Comment</Link></button>
                {/* <Switch>
                </Switch> */}
            </div>
        )
    }
}

export default mytweetdisplay;