import React from 'react';
import './SideBlog.css';


const SideBlog = ({news}) => {
  // console.log(news);
    return (
        
        
      <div>
        
          <div className='single-blog-heading'>
            
            <h5>Bookmarked Blog : {news.titlename}</h5>  
           
            
      </div>
      </div>
       
    )};


export default SideBlog;