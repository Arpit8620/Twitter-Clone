import React,{Component} from 'react'
import './twitter.css'

class tweetdisplay extends Component{
    constructor(props){
        super(props);
    }
    state = {count: 0}
    incrementMe = () => {
        let newCount = this.state.count + 1
        this.setState({
            count: newCount
    })
    }
    decrementMe = () => {
        let newCount = this.state.count - 1
        this.setState({
            count: newCount
    })
    }
    render(){
        const waterfall = this.props.oyo.slice(0).reverse().map((s)=>{
            return (
                    <div className="Twit">
                        <div className="avatar">
                        <img src={`http://localhost:8000/${this.props.arpit}`} alt="" />
                        <h4>{this.props.usernam}</h4>
                        </div>
                        <h4>{s.body}</h4><br />
                        <img src={`http://localhost:8000/${s.image}`} alt="image" /><br /><br />
                        <div className="likedislike">
                            <button onClick={this.incrementMe}>Likes: {this.state.count}</button>
                            <button onClick={this.decrementMe}>Dislike</button>
                            <button><a href={`/twitter/tweet/${s._id}/comment`}>Comment</a></button>
                        </div>
                    </div>
            )
        })
        return (
            <div>
                {console.log(this.props.oyo)}
                {console.log(this.props.usernam)}
                {waterfall}
            </div>
        )
    }
}

export default tweetdisplay;