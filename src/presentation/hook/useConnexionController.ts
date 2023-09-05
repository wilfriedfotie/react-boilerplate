import {useState} from "react";
import {useForm} from "react-hook-form";
import {UserPorps} from "../../domain/model";
import * as yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";
import wait from "../utils/wait.ts";


function useConnexionController() {

    const [click, setSclicked] = useState<boolean>(false);

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
        if (click) return;
        setSclicked(true);
        await wait(3000)
        console.log(data);
        setSclicked(false);
    };

    return {
        onSubmit, register, handleSubmit, errors, click
    }


}

export default useConnexionController
