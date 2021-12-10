import React,{Component} from 'react';
import axios from 'axios';
import _mytweetdisplay from './mytweetdisplay';

class mytweets extends Component{
    constructor(props){
        super(props);
        this.state={
            mytwee:[],
            id:null
        }
    }

    async componentDidMount(){
        const pack = await axios.get('/twitter/getuser');
        const task = await axios.get(`/twitter/${this.props.match.params._id}/display`);
        if(task.data=='Login first')
        {
            this.props.history.push('/login');
        }
        console.log(task.data);
        this.setState({
            mytwee: task.data.tweets,
            id:pack.data._id
        })
    }

    render(){
        const water = this.state.mytwee.map((x)=>{
            return (
                <div>
                    {/* {console.log(x)} */}
                    <_mytweetdisplay key={x._id} crisp={x} />
                </div>
            )
        })
        return (
            <div>
                {/* <h1>This is the tweets display</h1> */}
                {water}
            </div>
        )
    }
}
export default mytweets;