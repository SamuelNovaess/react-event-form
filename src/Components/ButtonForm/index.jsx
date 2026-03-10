import './Button-Form.styles.css';

const ButtonForm = ({ children }) => {
    return (
        <button className='Button-Form'>
            {children}
        </button>
    )
}

export default ButtonForm;