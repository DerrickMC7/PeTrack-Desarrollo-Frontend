import PropTypes from 'prop-types';
import "../styles.css";

export default function History({ size = 'medium', color = 'primary', thickness = '2', ...props }) {
    return (
        <svg className={`svg-icon svg-icon--${size} svg-icon--${color}`}  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color={"#000000"} fill={"none"} {...props}>
        <path d="M5.04798 8.60657L2.53784 8.45376C4.33712 3.70477 9.503 0.999914 14.5396 2.34474C19.904 3.77711 23.0904 9.26107 21.6565 14.5935C20.2227 19.926 14.7116 23.0876 9.3472 21.6553C5.36419 20.5917 2.58192 17.2946 2 13.4844" stroke="currentColor" strokeWidth={thickness} strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 8V12L14 14" stroke="currentColor" strokeWidth={thickness} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
    );
}

History.propTypes = {
    size: PropTypes.oneOf(["extra-small", "small", "medium", "large"]),
    color: PropTypes.oneOf(["primary", "secondary", "tertiary"]),
    thickness: PropTypes.string, // Ancho del trazo del ícono
};