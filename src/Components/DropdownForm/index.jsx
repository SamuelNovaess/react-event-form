import './Dropdown-Form.styles.css';

const DropdownForm = ({ children, ...props }) => {
    return (
        <fieldset className='DropdownForm'>
            <label className='DropdownLabel' htmlFor={props.id}>
                {children}
            </label>
            <select className='DropdownSelect' {...props}>
                <option value="">Select Event class</option>
            </select>
        </fieldset>

    );
};

export default DropdownForm;