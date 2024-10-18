// import { useState } from 'react';
// function Mybtn() {
//     const [count, setCount]=useState(0);
//     function handleClick(){
//         setCount(count+1);
//     }
//     return (
//         <button onclick={handleClick}>item {count}</button>
//     );
// }
// export default Mybtn;

import { useState } from 'react';

export default function MyApp() {
  return (
    <div>
      <h1>Counters that update separately</h1>
      <MyButton />
    </div>
  );
}

function MyButton() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <button onClick={handleClick}>
    items {count} 
    </button>
  );
}
