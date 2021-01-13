import React from 'react'


const Card = (props)=>{//Card componontunu yazdım Aşağıda h5 etiketinin içine JSX kullanarak props obje mantığı 
                       //ile cardTitle index.js de tanımladığım değeri atadım
    return(
        <div className="card">
        <img className="card-img-top" src="..." alt="Card image cap"/>
        <div className="card-body"> 
          <h5 className="card-title">{props.cardTitle }</h5>
          <p className="card-text">This is a wext below as a natural lead-in to additional content. This content is a little bit longer.</p>
          <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
        </div>
      </div>
    )
}

export default Card//Card componontunu  index js de kullanabilmek için burda export etmemizm lazım