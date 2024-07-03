import React from 'react'

const NewsItem = (props)=>{
  let {title,description,imageUrl,newsUrl,author,date,source} = props;
    return (
      <div className="my-3">
       <div  className="card h-100">
       
          <div style={{display: 'flex',justifyContent: 'flex-end',position: 'absolute',right: '0'}}>
            <span className="badge rounded-pill bg-danger">{source}</span>
          </div>
    <img src={!imageUrl?"//media.nbcnewyork.com/2024/01/Citizen-App-Little-Italy-Wall-Collapse.png?resize=1200%2C675&quality=85&strip=all":imageUrl}  className="card-img-top" alt="..."/>
    <div  className="card-body" >
    <h5  className="card-title">{title}...</h5>
    <p  className="card-text">{description}...</p>
    <p className="card-text"><small className="text-body-secondary">By {!author?"Unknown":author} on {new Date(date).toGMTString()}</small></p>
    <a rel="noreferrer" href={newsUrl} target="blank" className="btn btn-sm btn-dark">Read More</a>
  </div>
</div>
      </div>
    )
  
}

export default NewsItem
