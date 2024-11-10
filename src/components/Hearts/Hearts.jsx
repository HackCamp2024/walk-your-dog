import filledHeart from './filledHeart.png'; //empty path for now
import emptyHeart from './emptyHeart.png'; //empty path for now
import "./Hearts.css";

const Heart = ({ filled }) => {
    return (
      <div>
        <img
          src={filled ? filledHeart : emptyHeart}
          alt={filled ? 'Filled heart' : 'Empty heart'}
          width={24}
          height={24}
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

