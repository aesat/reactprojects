import React from 'react'

class Card extends React.Component {

    static defaultProps={
        cardNumber: "108"
    }

    render(props){
        return(
            <div style={{ color:'red',height:'200px' , width:'200px', border:'1px solid black',backgroundColor:'blue'}}>
                <p>{this.props.cardTitle}</p><br/><p>{this.props.cardNumber}</p>
            </div>
        )
    }
}



export default Card