import React, {useState, useEffect} from "react";
import TypeDetails from "../components/TypeDetails";
import TypeList from "../components/TypeList";

const PokemonContainer = ({allPokemonTypes}) => {
  const [selectedPokemonType, setSelectedPokemonType] = useState(null)

  const getTypeData = (url) => {
    fetch(url)
    .then(response => response.json())
    .then(typeUrlData => setSelectedPokemonType(typeUrlData));
  }

  return(
    <div className="container">
      <div className="left-content">
        <TypeList allPokemonTypes={allPokemonTypes} getTypeData={getTypeData}/>
      </div>
      <div className="right-content">
        <TypeDetails pokemonTypeData={selectedPokemonType}/>
      </div>
    </div>
  )
}
export default PokemonContainer;