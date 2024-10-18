import React, { useState } from "react";
function IncreaseAge(props) {
  const [age, setAge] = useState(19);
  const handleClick = () => setAge(age + 1);
  return (
    <div>
      I am {age} years old.
      <div>
        <button onClick={handleClick}>Increase my Age...</button>
      </div>
    </div>
  );
}
export default IncreaseAge;