import React from 'react'

class Collapse extends React.Component {

    constructor(){
        super()
        this.state = {
            textContent: false
        }
    //    this.showMore=this.showMore.bind(this)    aşağıdaki description fonksiyounu bind ile çağırma metodu
    }

    // showMore(){                dışarda tanımlanan description fonksiyonu constructorun içine yazılan 
    //     console.log(this)                    bind(this) metodu ile çalıştırır
    //     this.setState({textContent: true})
    // }

    showMore=()=>{
        this.setState({textContent: !this.state.textContent})
    }
   

    render(){
        return (
            <div>
                    <button onClick={this.showMore} className="btn btn-primary w-100" >
                        {React.Children.map(this.props.children, children => children.props.cardTitle)}
                    </button>

                    {this.state.textContent ? (
                        <div className="collapse show" >
                        {React.Children.map(this.props.children, children => children)}
                        </div>
                    ):(
                        null
                      )}

                    
            </div>
        )
    }
}

export default Collapse