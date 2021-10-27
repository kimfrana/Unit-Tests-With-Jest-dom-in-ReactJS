import React from 'react';

const Card = () => {

  const styleCard = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    width: '150px',
    height: '50px',
    background: 'grey',
    borderRadius: '3px',
    marginBottom: '20px',
    fontFamily: 'Arial, Helvetica, sans-serif',
  }

  return(
    <div>
      <div
        title ="card"
        style={styleCard}
      >
        This is a Test Card
      </div>
    </div>
  )
}

export default Card;
