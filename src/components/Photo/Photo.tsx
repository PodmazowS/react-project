import {FC, useEffect} from "react"

import {Album, Photo} from "../../types";
import { albumService, userService } from "../../api";


interface Props{
    photo:Photo;
}

export const PhotoComponent:FC<Props>=({photo})=>{

    return ( 
    <div className='p-5 m-5 flex flex-col justify-items-center items-center text-xl gap-5 border-2 '>
      <img src={photo.thumbnailUrl} alt={photo.title} />
      <p className='text-sm w-[150px]'>{photo.title}</p>
    </div>

    );
}