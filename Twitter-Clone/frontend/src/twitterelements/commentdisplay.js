import react,{Component} from 'react';

class commentdisplay extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <div>
                <h4>{this.props.socks.usercomment}  :  {this.props.socks.cbody}</h4><br />
            </div>
        )
    }
}
export default commentdisplay;