import React from 'react'

class Collapse extends React.Component {
    render(){
        return (
            <div>
                    <a className="btn btn-primary w-100" 
                       data-toggle="collapse" 
                       href={"#".concat(this.props.href)} 
                       role="button" 
                       aria-expanded="false" 
                       aria-controls="collapseExample">
                        Link with Href
                    </a>
                    <div className="collapse show" id={this.props.href}>
                       {this.props.children}
                    </div>
            </div>
        )
    }
}

export default Collapse