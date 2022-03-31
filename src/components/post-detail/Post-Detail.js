import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const {postId} = useParams();

function PostDetail() {
  return (
    <div>This is Post-Detail For : {postId}</div>
  )
}

export default PostDetail ;
