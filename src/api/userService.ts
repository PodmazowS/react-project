import  {axiosService}  from "./axiosService";
import { urls } from "../config";


export const userService = {
    getAll: () => axiosService.get(urls.users()).then((value: any) => value.data),
    getById: (id: number) => axiosService.get(urls.usersById(id)).then((value: any) => value.data),
    // create: (product: any) => axiosService.post(urls.products, product).then((value: any) => value.data),
    // updateById: (id: any, newProduct: any) => axiosService.put(`${urls.products}/${id}`, newProduct).then((value: any) => value.data),
    // deleteById: (id: any) => axiosService.delete(`${urls.products}/${id}`),
};