import styled from "styled-components";
import React from 'react'

const InputAgregar = styled.input`
   border-color: rgb(189, 238, 189);
   font-size: 95%
   font-family: Arial, sans-serif;
   width: 13em;
   height: 2em;
   margin: 10px;
   border: solid darkgrey;
   border-width: 2px;
   border-radius: 8px;
`

const BtnAgregar = styled.button`
   border-color: darkgrey;
   background-color: rgb(93,207,38);
   border-radius: 2px;
   color: white;
   font-family: Arial, sans-serif;
   font-weight: 750;
   padding-top: 10px;
   padding-bottom: 10px;
   padding-left: 20px;
   padding-right: 20px;
   margin: 10px;
`

export default function SearchBar(props) {

   const [character, setCharacter] = React.useState()

   function handleInputChange(event){
      const value = event.target.value
      setCharacter(value)
   }

   function idForOnSearch(){
      props.onSearch(character)
   }

   return (
      <div>
         <InputAgregar onChange={handleInputChange} type='search' />
         <BtnAgregar onClick={idForOnSearch}>AGREGAR</BtnAgregar>
      </div>
   );
}
