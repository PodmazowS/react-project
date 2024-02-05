import  {axiosService}  from "./axiosService";
import { urls } from "../config";
import { Album } from "../types";


export const albumService = {
    getAll: (id:number) => axiosService.get(urls.albumsById(id)).then((value: any) => value.data),
    getById: (id: number) => axiosService.get(urls.albumsById(id)).then((value: {data:Album[]}) => value.data),
    
};