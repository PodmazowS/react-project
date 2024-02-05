import  {axiosService}  from "./axiosService";
import { urls } from "../config";


export const userService = {
    getAll: () => axiosService.get(urls.users()).then((value: any) => value.data),
    getById: (id: number) => axiosService.get(urls.usersById(id)).then((value: any) => value.data),
};