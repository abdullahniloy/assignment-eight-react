import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Button } from '@material-ui/core';



const PostDetail = () => {
    
    
    const {postId} = useParams();
    const [post,setPost] = useState({});
    useEffect(() =>{
        const url = `https://jsonplaceholder.typicode.com/posts/${postId}`;
        fetch(url)
        .then(res =>res.json())
        .then(data =>setPost(data))
    },[])


    const DetailStyle ={
    border: '1px solid purple',
    margin:'30px', 
    padding: '10px',
    borderRadius: '20px'
    }

  
    return (
        <div style={DetailStyle}>
            <p>UserId:{postId}</p>
                <p>Id:{post.id}</p>
                <h4>{post.title}</h4>
                <p>{post.body}</p>
                <br/>
                <Button variant="contained" color="secondary">
                Comments
                </Button>
    
        </div>
    );
};

export default PostDetail;