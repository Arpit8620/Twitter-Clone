import React,{Component} from 'react';

class chatting extends Component{
    constructor(){
        super();
    }
    render(){
        return (
            <div className="container">
                <form>
                <h1>Message Area</h1>
                <input placeholder="Type Your Message" type='text' />
                <button>Send</button>
                </form>
            </div>
        )
    }
}

export default chatting;