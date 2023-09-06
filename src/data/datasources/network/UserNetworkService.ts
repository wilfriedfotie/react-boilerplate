import UserPorps from "../../models/User.ts";

export default interface UserNetworkService{
    login(data: UserPorps): Promise<UserPorps>;
    logout(user: UserPorps): Promise<UserPorps>;
    getUsers(): Promise<UserPorps[]>;
}
