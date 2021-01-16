import React from 'react'

class Collapse extends React.Component {

    constructor(){
        super()
        this.state={showContent: false}
    }

    showMore=()=>{
        this.setState({showContent: !this.state.showContent})
    }
 
    render(props){
        return (
            <div>
                <button onClick={this.showMore} className="btn btn-primary ">
                   ButtoN
                </button>
                <div>
                   {this.state.showContent?(
                       this.props.children
                   ):(null)}
                </div>
            </div>
        )
        
    }
}

export default Collapse