import React from 'react';
import { Post } from '../../types/Post';
import { Link } from 'react-router-dom';

interface Props {
  post: Post;
}

export const PostComponent: React.FC<Props> = ({ post }) => {
  return (
    <div>
      <Link to={`/user/${post.userId}/post/${post.id}`}>
        <div className={'flex flex-col gap-5 border border-2 border-black rounded w-1/2 p-4 bg-white'}>
          <p className="text-xl">{post.title}</p>
          <p className="text-lg">{post.body}</p>
        </div>
      </Link>
    </div>
  );
};