
import "./Hearts.css";

const Heart = ({ filled }) => {
    return (
      <div>
        <img
          src={filled ? '/assets/filled-heart.png' : '/assets/unfilled-heart .png'}
          alt={filled ? 'Filled heart' : 'Empty heart'}
          className="heart"
        />
      </div>
    );
  };

const Hearts = ({ count }) => {
    return (
      <div style={{ display: 'flex', gap: '10px' }}>
        {[...Array(5)].map((_, index) => (
          <Heart key={index} filled={index < count} />
        ))}
      </div>
    );
  };


export default Hearts;

