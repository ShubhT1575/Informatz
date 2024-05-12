import React from "react";

const NewsCard = ({title , description , urlToImage , url}) => {

  const goto = ()=>{
    window.location.href = url
  }


  return (
      <div className="card card-man" style={{width: "18rem"}} onClick={goto} >
        <img src={urlToImage ? urlToImage : "https://repository-images.githubusercontent.com/362819425/7d89df00-a9be-11eb-8e05-66965511d7fb"} className="card-img-top" alt="..." />
        <div className="card-body cardBody">
          <h5 className="card-title">{title && title.substring(0,75) + "..."}</h5>
          <p className="card-text">
            {description && description.substring(0,150) + "..."}
          </p>
          {/* <a className="btn btn-outline-primary" href={url} role="button">Open <i className="fa-solid fa-chevron-right"></i></a> */}
        </div>
        
      </div>
  );
};

export default NewsCard;
