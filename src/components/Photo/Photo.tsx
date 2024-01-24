import {FC, useEffect} from "react"

import {Album, Photo} from "../../types";
import { albumService, userService } from "../../api";


interface Props{
    photo:Photo;
}

export const PhotoComponent:FC<Props>=({photo})=>{

    return <div className="photo-item">
    <img src={photo.thumbnailUrl} alt={photo.title} />
    <p>{photo.title}</p>
  </div>
}