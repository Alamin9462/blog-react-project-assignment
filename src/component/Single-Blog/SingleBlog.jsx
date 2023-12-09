import React from 'react';
import './SingleBlog.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookBookmark, faBookmark } from '@fortawesome/free-solid-svg-icons'



const SingleBlog = (props) => {
    // console.log(props);
    const {id, bannarimg, userimage, profilename,
         posttime, titlename, tag, timespent} = props.blog;
    const handleAddButton = props.handleAddButton;
    const handleAddButtonTime = props.handleAddButtonTime;
    
 
        
    return (
        <div className='blog-single-container'>
            <div className='blog-bannar-image'>
            <img src={bannarimg} alt="" />
            </div>
              <div className='parent-section'>
              <div className='other-section-blog'>
              <img src={userimage} alt="" />
               <div className='profile-post-section'>
               <h4>{profilename}</h4>
               <h6>{posttime}</h6>  
             </div>
             </div>
             <div className='parent-button'>
                <span>{timespent} min read</span> 
                <FontAwesomeIcon onClick={()=>handleAddButton(props.blog)} icon={faBookmark} />
                
                
             </div>
                </div> 
             <h2>{titlename}</h2>
             <p>{tag}</p>  
             <button onClick={()=>handleAddButtonTime(props.blog)}>Mark as read</button>    
        </div>
    );
};

export default SingleBlog; 