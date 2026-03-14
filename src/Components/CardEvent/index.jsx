import './Card-Event.styles.css'

const CardEvent = ({ Event }) =>{
    return (
        <div>
            <img src={Event.image} alt={Event.name}/>            
            <p>{Event.eventClass}</p>
            <div>
                <p>{Event.date.toLocaleDateString()}</p>
                <p>{Event.lastDate.toLocaleDateString()}</p>
            </div>
            <h4>{Event.name}</h4>
        </div>
    );
};

export default CardEvent;