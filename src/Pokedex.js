import React from "react";
import defaultPokemon from "./defaultPokemon";
import Pokecard from "./Pokecard";
import "./styles/Pokedex.css";

const Pokedex = ({ pokemon = defaultPokemon }) => (
	<div className="Pokedex">
		<h1 className="Pokedex-title">Pokedex</h1>
		<div className="Pokedex-deck">
			{pokemon.map((p) => (
				<Pokecard
					id={p.id}
					name={p.name}
					type={p.type}
					exp={p.base_experience}
				/>
			))}
		</div>
	</div>
);

export default Pokedex;
