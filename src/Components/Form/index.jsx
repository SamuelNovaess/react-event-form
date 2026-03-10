import ButtonForm from '../ButtonForm'
import DropdownForm from '../DropdownForm'
import FieldsetForm from '../FieldsetForm'
import TitleForm from '../TitleForm'
import './Form.styles.css'

const Form = ({}) => {
    return (
        <form className='Form'>
            <TitleForm>
                ADD A NEW EVENT
            </TitleForm>
            <FieldsetForm
                type='text'
                name='eventName'
                id='eventName'
                placeholder='Enter name'
            >
                Event Name:
            </FieldsetForm>
            <FieldsetForm
                type='date'
                name='eventDate'
                id='eventDate'
            >
                Event Date:
            </FieldsetForm>
            <DropdownForm
                placeholder='Select an agent'
            >
                Event Class:
            </DropdownForm>    
            <ButtonForm>
                Create New Event
            </ButtonForm>
        </form>
    )
}

export default Form