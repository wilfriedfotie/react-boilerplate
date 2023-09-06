import {UserRepository} from "../../domain/repositories/UserRepository.ts";
import UserPorps from "../models/User.ts";
import UserNetworkService from "../datasources/network/UserNetworkService.ts";

export default class UserRepositoryImpl implements UserRepository {

    dataSource: UserNetworkService

    constructor(dataSource: UserNetworkService) {
        this.dataSource = dataSource;
    }

    async getUsers(): Promise<UserPorps[]> {
        return await this.dataSource.getUsers();
    }

    async login(data: UserPorps): Promise<UserPorps> {
        return await this.dataSource.login(data);
    }

    async logout(user: UserPorps): Promise<UserPorps> {
        return await this.dataSource.logout(user);
    }


}