import {toast} from "react-toastify";

export const useNotification = () => {
    return {
        success: (message: string) =>  toast.success(
            <div>
                {message}
            </div>,
    {
        position: toast.POSITION.TOP_RIGHT,
            autoClose: 3000, // milliseconds
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    },
),
        error: (message: string) =>  toast.error(
            <div>
                {message}
            </div>,
            {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 3000, // milliseconds
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            },
        ),
    };
};
