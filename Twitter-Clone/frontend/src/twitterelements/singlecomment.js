import react,{Component} from 'react';
import './twitter.css';
import axios from 'axios';
import './twitter.css';
import _commentdisplay from './commentdisplay';

class singlecomment extends Component{
    constructor(props){
        super(props);
        this.state={
            twt:'',
            cbody:'',
            precom:[]
        }
    }
    async componentDidMount(){
        console.log(this.props.match.params._id );
        console.log(this.props.match.params.tweetid);
        const man = await axios.get(`/twitter/${this.props.match.params._id}/twt/${this.props.match.params.tweetid}/comment`);
        this.setState({
            twt: man.data,
            precom: man.data.comments
        })
    }
    changehandler=(e)=>{
        this.setState({
            cbody: e.target.value
        })
    }
    submithandler=async(e)=>{
        e.preventDefault();
        const trigress = await axios.post(`/twitter/${this.props.match.params.tweetid}/comment`,{cbody:this.state.cbody})
    }

    render(){
        const kungfu = this.state.precom.map((d)=>{
            return (
                <div>
                    <_commentdisplay socks={d} />
                </div>
            )
        })
        return (
            <div>
                <div className="Tweetdisplay">
                    {console.log(this.state)}
                <h3>{this.state.twt.body}</h3>
                <br/><br />
                <img src={`/${this.state.twt.image}`} alt=" ..." /><br /><br />
                Comments :{kungfu}
                </div>
                <div className="container">
                    <form onSubmit={this.submithandler}>
                        <br /><br />
                    Comment:<input type="text" name="cbody" onChange={this.changehandler} /><br /><br />
                    <button>Submit</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default singlecomment;