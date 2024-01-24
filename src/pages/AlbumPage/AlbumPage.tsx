import {FC, useEffect, useState} from "react"
import { useParams } from "react-router-dom"

import { Photo } from "../../types";
import { photoService } from "../../api";
import { PhotoComponent } from "../../components";


interface Props{
}

export const AlbumPage:FC<Props>=({})=>{

    const {albumId}=useParams();

    const [photos,setPhotos]=useState<Photo[] | null>(null);

    useEffect(()=>{
        photoService.getByAlbumId(albumId).then(photos=>setPhotos(photos))
    },[]);


    if(!albumId){
        return <div>Error</div>
    }

if(!photos){
return <div>Loading...</div>
}

    return <div className="photos">
        {photos.map(photo=><PhotoComponent key={photo.id} photo={photo}/>)}
    </div>
}