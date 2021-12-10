import axios from 'axios';
import React,{Component} from 'react'

class newtweet extends Component{
    constructor(props){
        super(props);
        this.state={
            body:'',
            image:null
        }
    }

    changehandler=(e)=>{
        console.log("Present State :" + this.state.body);
         console.log(e.target.name + ' : ' + e.target.value);
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    changehandles=(e)=>{
        console.log(e.target.files);
        console.log(e.target.files[0]);
        this.setState({
            [e.target.name] : e.target.files[0]
        })
    }
    submithandler=async(e)=>{
        console.log(this.state);
        e.preventDefault();
        const formData = new FormData();
        formData.append('body',this.state.body);
        formData.append('image',this.state.image,this.state.image.name);
        console.log('Body is : ' + formData.get('body'));
        console.log( 'Image file is :' + formData.get('image').name);
        const man=await axios.post(`/twitter/${this.props.match.params._id}/tweets`,formData);
        // console.log(man);
    }

    componentDidMount(){
        console.log(this.props.match.params._id);
    }

    render(){
        return(
            <div className="container">
                <form onSubmit={this.submithandler} >
                <h1>New Tweet</h1>
                <input type="text" placeholder="Write Your Thoughts" name="body" onChange={this.changehandler} /> <br /><br />
                <input type="file" name="image" onChange={this.changehandles} /><br /><br />
                <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default newtweet;