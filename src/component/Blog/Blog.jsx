import React, { useEffect, useState } from 'react';
import './Blog.css'
import SingleBlog from '../Single-Blog/SingleBlog';
import SideBlog from '../SideBlog/SideBlog';


const Blog = () => {
    // load your json data and push state
    const [blogs, setBlog] = useState([]);
    const [newses, setnewses] = useState([]);
    const [times, setTime] = useState([]);
    
    
 
    useEffect( () =>{
        fetch('blog.json')
        .then(res =>res.json())
        .then(data =>setBlog(data))

    },[])

    const handleAddButton = (blog) => {
       const newnewses = [...newses, blog];
       setnewses(newnewses);
    }
   const handleAddButtonTime = (time) =>{
    const countTimes = [...times, time];
    setTime(countTimes)
   }
   let total = 0;
   for(const time of times){
    total = total + time.timespent;
     console.log(total);
   }
    
    
    return (
        <div className='blog-container'>
            <div className='single-blog'>
                
                {
                    blogs.map(blog =><SingleBlog
                     key={blog.id}
                     blog={blog}
                     handleAddButton={handleAddButton}
                     handleAddButtonTime={handleAddButtonTime}  
                      >  
                    </SingleBlog>)
                }

            </div>
            <div className='side-blog'>
              <div>
              
                 <h4 className='spend-time'>Spend time of read :{total} min</h4>
         
              </div>
              <div>
              <h3>Bookmark Blog:{newses.length}</h3>
              </div>
              <div className='bookmark-read'>
                {newses.map(news =>
                <SideBlog
                key={news.quantity}
                 news={news}
                 ></SideBlog>
               )
               }
         
                </div>
             
            </div>
            <div>
                <h3>Props between state difference ?</h3>
                <p>Ans::</p>
            </div>
        </div>
    );
};

export default Blog;