import React from "react";
import "./styles/Pokecard.css";

const Pokecard = ({ id, name, type, exp }) => {
	const img = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
	return (
		<div className="Pokecard" key={id}>
			<div className="Pokecard-title">{name}</div>
			<img className="Pokecard-img" src={img} alt="" />
			<div className="Pokecard-info">
				<div>Type: {type}</div>
				<div>EXP: {exp}</div>
			</div>
		</div>
	);
};

export default Pokecard;
