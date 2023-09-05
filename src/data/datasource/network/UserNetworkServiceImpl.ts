import UserNetworkService from "./UserNetworkService.ts";
import {UserPorps} from "../../../domain/model";

export default class UserNetworkServiceImpl implements UserNetworkService {
    async login(): Promise<UserPorps> {
        const res = await fetch("http://localhost:3005/login");
        return await res.json();
    }

    async logout(): Promise<UserPorps> {
        const res = await fetch("http://localhost:3005/logout");
        return await res.json();
    }

    async getUsers(): Promise<UserPorps[]> {
        const res = await fetch("http://localhost:3005/users");
        return await res.json();
    }


}