import ButtonForm from '../ButtonForm'
import DropdownForm from '../DropdownForm'
import FieldsetForm from '../FieldsetForm'
import TitleForm from '../TitleForm'
import './Form.styles.css'

const Form = ({ themes, AddEvent }) => {

    function handleSubmit(event) {
        event.preventDefault();

        const formData = new FormData(event.target);

        const selectedTheme = themes.find(function(theme){
          return theme.id === Number(formData.get('eventClass'))  
        });

        const events = {
            name: formData.get('eventName'),
            date: new Date(formData.get('eventDate')),
            lastDate: new Date(formData.get('lastDate')),
            eventClass: selectedTheme.nome,
            image: selectedTheme.image
        };

        AddEvent(events);
    };

    return (
        <form className='Form' onSubmit={handleSubmit}>
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
            <FieldsetForm
                type='date'
                name='lastDate'
                id='lastDate'
            >
                Last Event Date:
            </FieldsetForm>
            <DropdownForm 
                id='eventClass' 
                name='eventClass' 
                items={themes}
            >
                Event Class:
            </DropdownForm>    
            <ButtonForm>
                Create New Event
            </ButtonForm>
        </form>
    );
};

export default Form;