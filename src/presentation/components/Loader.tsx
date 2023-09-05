import { SpinnerCircular } from "spinners-react/lib/esm/SpinnerCircular"

export const Loader = () => {
    return (
        <div className="mt-30 ">

            <SpinnerCircular enabled={true} secondaryColor="transparent" thickness={70} speed={150} size={100} color={"rgb(42, 24, 216)"} className="mr-3 " />

        </div>
    )
}
