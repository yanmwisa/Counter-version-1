import { useState } from "react";
import './index.css';
function Counter() {
  const [count, setCount] = useState(0);

  const handleClickPositive = () => {
    setCount(count + 1);
  };

  const handleClickNegative = () => {
    setCount(count - 1);
  };

  return (
    <div>
        <div className="counte-container">
        <h1 className="count">Count: {count}</h1>
        </div>
      
      <div className="button-container">
      <button  className="button1" onClick={handleClickPositive}>+</button>
      <button className="button2" onClick={handleClickNegative}>-</button>
      </div>
      
    </div>
  );
}
export default  Counter