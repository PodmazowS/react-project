import PropTypes from 'prop-types';

const Button = ({ text, onClick, color, className }: { text: string, onClick?: () => void, color?: string, className?: string }) => {
    return (
        <button 
            onClick={onClick} 
            style={{ backgroundColor: color }} 
            className={`button ${className}`}
        >
            {text}
        </button>
    );
};

Button.propTypes = {
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    color: PropTypes.string,
    className: PropTypes.string
};

Button.defaultProps = {
    color: 'blue',
    className: ''
};

export default Button;

export {};