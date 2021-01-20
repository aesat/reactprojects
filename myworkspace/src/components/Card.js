import React from 'react'
import './Card.css'

class Card extends React.Component {

    constructor(){
        super()
        this.state={
              currentClass:'cardBody'
        }
    }
 
   changeColor=()=>{
    //    console.log(this.props.CardHeader.toLowerCase())
    this.setState({currentClass: this.props.CardHeader.toLowerCase()})
   
   }
   

    render() {
       return (
            <div>
            <div onClick={this.changeColor} className={this.state.currentClass}>
                <h3>{this.props.CardHeader}</h3>
                <p>{this.props.CardDescription}
                </p>
                </div>
            </div>
        )
    }
}

export default Card
