import  {axiosService}  from "./axiosService";
import { urls } from "../config";
import { Photo } from "../types";


export const photoService = {
    getAll: () => axiosService.get(urls.photos()).then((value: any) => value.data),
    getByAlbumId: (albumId: any) => axiosService.get(urls.photosByAlbumId(albumId)).then((value: {data:Photo[]}) => value.data),
    // create: (product: any) => axiosService.post(urls.products, product).then((value: any) => value.data),
    // updateById: (id: any, newProduct: any) => axiosService.put(`${urls.products}/${id}`, newProduct).then((value: any) => value.data),
    // deleteById: (id: any) => axiosService.delete(`${urls.products}/${id}`),
};