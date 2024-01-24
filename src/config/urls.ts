const baseURL="https://jsonplaceholder.typicode.com";

export const urls={
    photos:()=>"/photos",
    photosByAlbumId:(id:number)=>`/albums/${id}/photos`,
    albums:()=>"/albums",
    albumsById:(id:number)=>`/albums/${id}`,    
    posts:()=>"/posts",
    postsById:(id:number)=>`/posts/${id}`,
    postsComments:(postId:number)=>`/posts/${postId}/comments`,
    comments:()=>"/comments",
    commentsById:(id:number)=>`/comments/${id}`,
    users:()=>"/users",
    usersById:(id:number)=>`/users/${id}`,
    userPostsById:(id:number)=>`/users/${id}/posts`,
    userAlbumsById:(id:number)=>`/users/${id}/albums`,
    userPhotosById:(id:number)=>`/users/${id}/photos`,
    userCommentsById:(id:number)=>`/users/${id}/comments`,
}

export default baseURL;