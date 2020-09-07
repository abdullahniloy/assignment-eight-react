// import React, { useState, useEffect } from 'react';
// import Post from '../Post/Post';


// const Comments = () => {
//     const [comment,setComment] = useState([]);
//     useEffect(()=>{
//         fetch('https://jsonplaceholder.typicode.com/comments')
//         .then(res => res.json())
//         .then(data => setComment(data))
//     },[])
//     return (
//         <div>
//             <h1>Comments:{comment.length}</h1>
//             {
//                 comment.map(comment => <Post comment={comment}></Post>)
//             }
//         </div>
//     );
// };

// export default Comments;