import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './CommentsPage.css'; 
import { Comment } from '../../types';
import { useParams } from 'react-router-dom';
import { commentService } from '../../api/commentService';
import { CommentComponent,CommentsForm } from '../../components';

export const CommentsPage: React.FC = () => {
  const {postId} = useParams<{ postId: string}>();

  const [comments, setComments] = useState<Comment[]>([]);
  useEffect(() => {
    commentService.getAllByPostId(+postId!)
    .then(comm => setComments(comm))
    .catch(error => console.log(error));
  }, []);

  const deleteComment = (id: number) => {
    commentService.deleteById(id)
    .then(() => setComments(comments.filter(comment => comment.id !== id)))
    .catch(error => console.log(error));
  };

  const addComment = (comment: {
    name: string,
    email: string,
    body: string,}) => {

const newComment={...comment, postId: +postId!, id: (comments[comments.length - 1]?.id+1) || 1};

    commentService.create(newComment)
    .then(() => setComments([...comments, newComment]))
    .catch(error => console.log(error));
  }
  

  if (!postId) {
    return <div>Error</div>;
  }

  return (
    <div className="comments">
      <div className='text'>Comments</div>
      <CommentsForm addComment={addComment}/>  
      <div className='comments-wrapper'>
        {comments.map((comment) => <CommentComponent key={comment.id} comment={comment} deleteComment={deleteComment} /> )}
      </div>
    </div>
    );
    };
    

