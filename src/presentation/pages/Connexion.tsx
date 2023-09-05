import ButtonSubmit from "../components/Button";
import Input from "../components/Input";
import 'react-toastify/dist/ReactToastify.css';
import useConnexionController from "../hook/useConnexionController.ts";


export default function Connexion() {
    const { onSubmit, register, handleSubmit, errors, click} = useConnexionController();
    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>

                <div className="bg-gray-100  flex flex-col content-center items-center justify-center h-screen">
                    <div className="bg-white min-w-[40vw] max-w-lg shadow-lg mx-auto py-10 lg:px-20 rounded-md">
                        <div className="text-center	mt-5 flex items-center justify-center	">
                            <h1 className="text-center text-5xl text-green-950 mb-7 font-bold ">Connexion</h1>
                        </div>

                        <Input type="email" placeholder="Email " {...register("email")} />
                        {errors?.email && (
                            <span className="text-sm text-rose-500	">
                    {errors.email.message}
                </span>
                        )}
                        <Input type="password" placeholder="Mot de passe"{...register("password")} />
                        {errors?.password && (
                            <span className="text-sm text-rose-500	">
                    {errors.password.message}
                </span>
                        )}

                        <div className="w-full my-8 ">
                            <ButtonSubmit isForm={true} isLoading={click} > Se connecter </ButtonSubmit>

                        </div>
                    </div>

                </div>

            </form>



        </>
    );
}

