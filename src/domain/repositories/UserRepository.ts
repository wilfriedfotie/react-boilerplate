import UserPorps from "../../data/models/User.ts";

export interface UserRepository{
    login(data: UserPorps): Promise<UserPorps>;
    logout(user: UserPorps): Promise<UserPorps>;
    getUsers(): Promise<UserPorps[]>;
}