import React from 'react'

class SearchBar extends React.Component{

     

     eventHandler=(e)=>{
       e.preventDefault()
     }

    render(){
        return(
            <div className="form-row mb-5">
                <div className="col-12">
                    <input onSubmit={this.eventHandler} 
                    onChange={this.props.searchMovieProp} 
                    type="text" className="form-control" placeholder="search a movie"
                    />
                </div>
            </div>
        )
    }

    
}

export default SearchBar