import React from 'react';
import './Card.css';

const Card = ({id, name, email} ) => {
	return(
		<div className="cardbg dib br3 pa3 ma2 grow bw2 tc">
		  <img alt='robots' src={`https://robohash.org/${id}?200x200`}  />
		  <div>
		  	<h2>{name}</h2>
		  	<p>{email}</p>
		  </div>
		</div>
	); 
}

export default Card;