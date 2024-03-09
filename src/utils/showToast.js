import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const showSuccess = (message) => {
    toast.success(message, {
      position: toast.POSITION.TOP_RIGHT,
    });
}

export function showError(message){
    toast.error(message, {
        position: toast.POSITION.TOP_RIGHT,
    })
}
