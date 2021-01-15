import React from 'react'

class Card extends React.Component {

    static defaultProps={
        cardTitle:"Kart Başlığı"
    }

    render(){
        
        return(
            <div className="card w-100">
             <img src={this.props.image} className="card-img-top" alt="..."/>
             <div className="card-body">
               <h5 className="card-title">{this.props.cardTitle}</h5>
                 <p className="card-text">{this.props.cardP}</p>
                 <p className="card-text"><small className="text-muted">{this.props.cardText}</small></p>
             </div>
            </div>
        )
    }
}

// Card.defaultProps = {
//     cardTitle: 'Kart Başlığı'
// }

export default Card


// class Welcome extends React.Component {
//   render() {
//     return <h1>Hello, {this.props.name}</h1>;
//   }
// }