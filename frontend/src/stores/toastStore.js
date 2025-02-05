import { toast } from "nextjs-toast-notify";
/**
 *  Función para mostrar un toast (mensaje emergente) con un mensaje específico.
 */
export const mostrarToast = (mensaje) => {
  toast.success(mensaje, {
    duration: 5000,
    progress: true,
    position: "bottom-center",
    transition: "bounceIn",
    icon: "",
    sound: true,
  });
};
