import  {axiosService}  from "./axiosService";
import { urls } from "../config";
import { Comment } from "../types";


export const commentService = {
    getAllByPostId: (id:number) => axiosService.get(urls.commentsByPostId(id)).then((value: {data: Comment[]}) => value.data),
    create: (comment: Comment) => axiosService.post(urls.comments(), comment).then((value: any) => value.data),
    updateById: (id: number, newComment: Comment) => axiosService.put(urls.commentById(id), newComment).then((value: any) => value.data),
    deleteById: (id: number) => axiosService.delete(urls.commentById(id)).then((value: any) => value.data),
};