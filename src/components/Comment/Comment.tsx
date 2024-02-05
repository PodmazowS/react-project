import {FC} from "react"
import { Comment } from "../../types"


interface Props{
    comment: Comment;
    deleteComment: (id: number) => void;
}

export const CommentComponent:FC<Props>=({comment, deleteComment})=>{


    return <div className="comment">
              <div className="comment__name">{comment.name}</div>
              <div className="comment__email">{comment.email}</div>
              <div className="comment__body">{comment.body}</div>
            
            <button className="comment__delete" onClick={()=> deleteComment(+comment.id)}>Delete</button>
              
            </div>
          
}