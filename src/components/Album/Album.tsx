import {FC} from "react"
import { Link } from 'react-router-dom';
import { Album } from "../../types";

interface Props {
    album: Album;
}

export const AlbumComponent:FC<Props>=({album})=>{
    return (
        <div>
            <Link to={`/user/${album.userId}/album/${album.id}`}>
            <div className={`bg-blue-400 flex justify-center items-center h-28 w-40 border-2 rounded-md border-black`}>
                <p className="p-2">{album.title}</p>
            </div>
            </Link>
        </div>
    );
}