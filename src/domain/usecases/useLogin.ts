import {useMutation} from "@tanstack/react-query";
import UserRepositoryImpl from "../../data/repositories/UserRepositoryImpl.ts";
import UserPorps from "../../data/models/User.ts";
import {useNotification} from "../../services/useNotification.tsx";

export const useLogin = (repository: UserRepositoryImpl) => {
    const notify = useNotification()
    return useMutation(async (data: UserPorps) => {
        return await repository.login(data);
    }, {
        onSuccess: () => {
            notify.success("Created Correctly!");
        },
        onError: () => {
            notify.error("Something goes wrong..");
        },

    });

};
