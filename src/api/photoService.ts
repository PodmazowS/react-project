import  {axiosService}  from "./axiosService";
import { urls } from "../config";
import { Photo } from "../types";


export const photoService = {
    getAll: () => axiosService.get(urls.photos()).then((value: any) => value.data),
    getByAlbumId: (albumId: any) => axiosService.get(urls.photosByAlbumId(albumId)).then((value: {data:Photo[]}) => value.data),
};