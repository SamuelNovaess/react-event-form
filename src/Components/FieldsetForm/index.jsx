import './Fieldset-form.styles.css'

const FieldsetForm = ({ children, ...props }) => {
    return (
        <fieldset className='FieldsetForm'>
            <label className='LabelForm' htmlFor={props.id}>
                {children}
            </label>
            <input className='InputForm' {...props}/>
        </fieldset>
    )
}

export default FieldsetForm