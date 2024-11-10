import "./Dog.css";

const Dog = ({ mood }) => {
    const getDogImage = () => {
        switch (mood) {
            case 'happy':
                return '/assets/happy-dog.png';
            case 'sad':
                return '/assets/sad-dog.png';
            case 'medium':
                return '/assets/default-dog.png';
        }
    }
    return (
        <div className="Dog">
            <img src={getDogImage()}></img>
        </div>
    )
}

export default Dog;