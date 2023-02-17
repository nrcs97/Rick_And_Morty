import Cards from '../Cards/Cards.jsx'
import React from 'react'

// const example = [{
//   name: 'Morty Smith',
//   species: 'Human',
//   gender: 'Male',
//   image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
// }];

function Home(props){

  function onClose(characterName){
    const newCharacters = props.characters.filter((character) => character.name !== characterName)
    props.setCharacters(newCharacters)
  }

  return (
    <div className='Home'>
      <div>
        <Cards
          characters={props.characters}
          onClose={onClose}
        />
      </div>
    </div>
  )
}

export default Home
