import './Dropdown-Form.styles.css';

const DropdownForm = ({ children, items, ...props}) => {
    return (
        <fieldset className='DropdownForm'>
            <label className='DropdownLabel' htmlFor={props.id}>
                {children}
            </label>
            <select className='DropdownSelect' {...props} defaultValue="">
            <option value="" disabled>
                Select an option
            </option>
            {items.map((item) => {
                return (
                    <option key={item.id} value={item.id}>
                        {item.nome}
                    </option>
                );
            })}
            </select>
        </fieldset>

    );
};

export default DropdownForm;