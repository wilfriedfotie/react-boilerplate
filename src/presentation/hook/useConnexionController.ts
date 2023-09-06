import {useForm} from "react-hook-form";
import * as yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";
import UserPorps from "../../data/models/User.ts";
import {useLogin} from "../../domain/usecases/useLogin.ts";
import UserRepositoryImpl from "../../data/repositories/UserRepositoryImpl.ts";
import UserNetworkServiceImpl from "../../data/datasources/network/UserNetworkServiceImpl.ts";
import {useNavigate} from "react-router-dom";
import {STRING_ROUTE_HOME} from "../utils/const.ts";


function useConnexionController() {

    const login = useLogin(new UserRepositoryImpl(new UserNetworkServiceImpl()));
    const navigate = useNavigate();

    const schema = yup
        .object({
            email: yup.string().email().required(),
            password: yup.string().min(8).required(),
        })
        .required();

    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm<UserPorps>({
        resolver: yupResolver(schema),
        mode: "onTouched",
    });


    const onSubmit = async (data: UserPorps) => {
        if (login.isLoading) return;
        await login.mutateAsync(data)
        navigate(STRING_ROUTE_HOME)
    };

    return {
        onSubmit, register, handleSubmit, errors, loginQuery: login
    }

}

export default useConnexionController
