import React, {useState} from 'react';
import './coin.css';
import tails from './10_rupee.jpg';
import heads from './10_rupee_back.png';

const Coin = () => {

    const [isFlipping, setIsFlipping] = useState(false);
    const [result, setResult] = useState(null);

    const flipCoin = () => {
      setIsFlipping(true);
      setResult(null);
      setTimeout(() => {
        setIsFlipping(false);
        const out = ['heads','tails'];
        const randout = out[Math.floor(Math.random() * out.length)];
        setResult(randout);
      }, 1000);
    };  

    const getBackgroundImage = () => {
      if (result === 'heads') return `url(${heads}})`;
      return `url(${tails})`;
    };

  return (
    <div> 
      <div className="coin-container">
        <div className={`coin ${isFlipping ? 'flip' : ''}`} style={{ backgroundImage: getBackgroundImage()}}></div>
      </div>
      <button onClick={flipCoin} disabled={isFlipping}>{result}</button>
    </div>
  );
};

export default Coin;