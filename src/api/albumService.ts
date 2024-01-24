import  {axiosService}  from "./axiosService";
import { urls } from "../config";
import { Album } from "../types";


export const albumService = {
    getAll: (id:number) => axiosService.get(urls.albumsById(id)).then((value: any) => value.data),
    getById: (id: number) => axiosService.get(urls.albumsById(id)).then((value: {data:Album[]}) => value.data),
    // create: (product: any) => axiosService.post(urls.products, product).then((value: any) => value.data),
    // updateById: (id: any, newProduct: any) => axiosService.put(`${urls.products}/${id}`, newProduct).then((value: any) => value.data),
    // deleteById: (id: any) => axiosService.delete(`${urls.products}/${id}`),
};