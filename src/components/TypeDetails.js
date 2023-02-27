import React from 'react'
import PokemonOfTypeList from './PokemonOfTypeList'

const TypeDetails = ({pokemonTypeData}) => {
  if (!pokemonTypeData) {
    return "Please select a type!"
  }


  const doubleDamageFrom = pokemonTypeData.damage_relations.double_damage_from.map((detail, index) => {
    return(
      <div key={index}>{detail.name}</div>
    )
  })

  // const typeDetailNodes = pokemonTypeData.map((details, index) => {
  //   return(
  //     details.double_damage_from.map((ddf, index) => {
  //       <div key={index}>{ddf}</div>
  //     }
  //   )

    // const typeDetailNodes = pokemonTypeData.map((details, index) => {
    //   return(
    //     details.double_damage_from.map((ddf, index) => {
    //       return(<div key={index}>{ddf}</div>)
    //     })
    //   )
    // })

    

  return (
    <div className='type-details'>
      <h2 className='title'>Electric</h2>
      {console.log(pokemonTypeData)}
      <h4>Double Damage From: {doubleDamageFrom}</h4>
      <h4>Double Damage To: flying, water</h4>
      <h4>Half Damage From: flying, steel, electric</h4>
      <h4>Half Damage To: grass, electric, dragon</h4>
      <h3>Pokemon of this type</h3>
      <PokemonOfTypeList pokemonTypeData={pokemonTypeData}/>
      
      {/* {typeDetailNodes} */}
    </div>
  )
}

export default TypeDetails;


