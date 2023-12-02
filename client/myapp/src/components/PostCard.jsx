import React from 'react'

const PostCard = (post,user, deletePost,likePost) => 
{
    const [showAll,setShowAll]=useState(0);
    const [showReply,setShowReply]=useState(0);
    const [comments,setcomments]=useState([]);
    const [loading,setLoading]=useState(false);
    const [replyComments,setComments]=useState(0);
    const [showComments,setShowComments]=useState(0);
  return (
    <div className='mb-2 bg-primary p-4 rounded-xl'>

    </div>
  )
}

export default PostCard