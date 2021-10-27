import React, {useState} from 'react';

const Search = () => {
  const [inputValue, setInputValue ] = useState('');

  const handleChange = (event) =>{
    setInputValue(event.target.value);
  }

  return(
    <input type="text" onChange={handleChange} title="inputTest" />
  )
};

export default Search;
