import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { User, Post,Photo } from '../../types';


export const UserProfilePage: React.FC = () => {
    const [user, setUser] = useState<User | null>(null);
    const [posts, setPosts] = useState<Post[]>([]);
    const [photos, setPhotos] = useState<Photo[]>([]);

    
    const { id } = useParams<{ id: string }>();

    useEffect(() => {
        const fetchUserData = async () => {
            const userResponse = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
            const postsResponse = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`);
            const photosResponse = await axios.get(`https://jsonplaceholder.typicode.com/photos?albumId=${id}`);
            
            setUser(userResponse.data);
            setPosts(postsResponse.data);
            setPhotos(photosResponse.data);
        };

        fetchUserData();
    }, []);

    if (!id) {
        return <div>Error</div>;
    }

    if (!user) {
        return <div>Loading...</div>;
    }


    return (

        <div className="user-profile">
            <div className="user-info">
                <h2>{user.name}</h2>
                <p>Email: {user.email}</p>
            </div>
            <div className="user-posts">
                <h3>Posts</h3>
                {posts.map((post) => (
                    <div key={post.id} className="post">
                        <h4>{post.title}</h4>
                        <p>{post.body}</p>
                    </div>
                ))}
            </div>
            <div className="user-photos">
                <h3>Photos</h3>
                {photos.map((photo) => (
                    <div key={photo.id} className="photo">
                        <img src={photo.thumbnailUrl} alt={photo.title} />
                        <p>{photo.title}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

