import {UserPorps} from "../../../domain/model";

/**
 * web interface clean architecture
 */

export default interface UserNetworkService{
    login(): Promise<UserPorps>;
    logout(user: UserPorps): Promise<UserPorps>;
    getUsers(): Promise<UserPorps[]>;
}
