import './Card-Event.styles.css'

const CardEvent = ({ Event }) =>{
    return (
        <div>
            <img src={Event.image} alt={Event.name}/>            
            <p>{Event.eventclass}</p>
            <div>
                <p>{Event.date}</p>
                <p>{Event.lastDate}</p>
            </div>
            <h4>{Event.name}</h4>
        </div>
    );
};

export default CardEvent;