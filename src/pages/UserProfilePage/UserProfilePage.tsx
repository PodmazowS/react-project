import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { User, Post, Album } from '../../types';
import { AlbumComponent, PostComponent } from '../../components';


export const UserProfilePage: React.FC = () => {
    const [user, setUser] = useState<User | null>(null);
    const [posts, setPosts] = useState<Post[]>([]);
    const [album, setAlbum] = useState<Album[]>([]);

    
    const { id } = useParams<{ id: string }>();

    useEffect(() => {
        const fetchUserData = async () => {
            const userResponse = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
            const postsResponse = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`);
            const albumResponse = await axios.get(`https://jsonplaceholder.typicode.com/albums?userId=${id}`);
            
            setUser(userResponse.data);
            setPosts(postsResponse.data);
            setAlbum(albumResponse.data);
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
            <div className="flex flex-col flex-wrap gap-5">
                <h2>{user.name}</h2>
                <p>Email: {user.email}</p>
            </div>
            <div className="flex flex-col gap-5">   
                 <p>Posts:</p>   
                 <div className="flex flex-col gap-5">
                 {posts?.map(post =>
                    <PostComponent post={post} key={post.id} />
                    )}  
                 </div>
            </div>
            <div className='flex flex-col flex-wrap gap-5'>
                <p>Albums:</p>
                <div className="flex flex-row flex-wrap gap-5">
                    {album?.map(album =>
                <AlbumComponent album={album} key={album.id} />
            )}
        </div>
    </div>
        </div>
    );
};

