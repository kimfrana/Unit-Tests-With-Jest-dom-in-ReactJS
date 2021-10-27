import React, {useState} from 'react';

const Button = () => {
  const [text, setText] = useState("Test OFF");

  return(
    <div>
      <button onClick={() => setText("Test ON") } title="btn-switch">{text}</button>
    </div>
  )
}

export default Button;
