import UserNetworkService from "./UserNetworkService.ts";
import wait from "../../../presentation/utils/wait.ts";
import {Http} from "../../../services/Http.ts";
import UserPorps from "../../models/User.ts";

export default class UserNetworkServiceImpl implements UserNetworkService {
    async login(): Promise<UserPorps> {
        const res = await Http.post<UserPorps>("/todos", {});

        await  wait(3000);
        console.log(res.data);
        return {username: "kaka", password:"12345678",email: "user@example.com"}
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