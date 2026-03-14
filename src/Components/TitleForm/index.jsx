import { Children } from 'react'
import './Title-Form.styles.css'

const TitleForm = ({ children }) => {
    return (
        <h2 className='TitleForm'>
            {children}
        </h2>
    );
}

export default TitleForm;