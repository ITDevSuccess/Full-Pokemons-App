import React, { FunctionComponent } from "react";
import Pokemon from "../models/pokemon";

import './pokemon-card.css';

type Props = {
    pokemon: Pokemon
};

const PokemonCard: FunctionComponent<Props> = ({pokemon}) => {

    return (
        <div className="col s12 m6 l4" key={pokemon.id}>
            <div className="card hoverable">
                <div className="card-image waves-effect waves-block waves-light">
                    <img className="activator" src={pokemon.picture} alt={pokemon.name} />
                </div>
                <div className="card-content">
                    <span className="card-title activator grey-text text-darken-4">
                        {pokemon.name}
                        <i className="material-icons right">{pokemon.types}</i>
                    </span>
                    <p>
                        <small>Created: {pokemon.created.toString()}</small>
                    </p>
                </div>
                <div className="card-reveal">
                    <span className="card-title grey-text text-darken-4">
                        {pokemon.name}
                        <i className="material-icons right">close</i>
                    </span>
                    <p>This is a Pokémon card</p>
                </div>
            </div>
        </div>
    );
}

export default PokemonCard;