import PropTypes from "prop-types";
import BgImage from "../../../assets/img/Bg.png";
import "./styles.css";

export default function AccountForm({ children }) {
    return (
        <div className="flex justify-center items-center min-h-screen w-full relative">
            {/* Imagen de fondo fija y responsiva */}
            <div
                className="bg-background-image"
            ></div>
            
            {/* Contenedor para el formulario */}
            <div className="relative z-10 flex justify-center items-center w-full min-h-screen">
                {children}
            </div>
        </div>
    );
}

AccountForm.propTypes = {
    children: PropTypes.any.isRequired,
};