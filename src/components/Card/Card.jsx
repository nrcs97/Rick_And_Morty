import styled from 'styled-components';
import {Link} from 'react-router-dom'
import {addFavorite, deleteFavorite} from '../../redux/actions.js'
import {connect} from 'react-redux'
import {useState} from 'react'
import {useEffect} from 'react'

const CharImg = styled.img`
   max-width: 100%;
   max-height: 100%;
   border: solid;
   border-width: 2px;
   border-radius: 3px;
   border-color: rgb(70, 70, 70);
`

const MainDiv = styled.div`
   display: flex;
   justify-content: space-between;
`

const LineDiv = styled.div`
   display: flex;
   justify-content: space-around;
   margin: 1.5em;
   background-color: rgb(68, 119, 21);
   padding: 7px;
   border-radius: 5px;

   & h2 {
      color: white;
      font-size: 100%;
   }

   &:hover {
      background-color: rgb(114, 161, 70);
   }
`

const TextH2 = styled.h2`
   font-size: 95%;
   color: rgb(50, 50, 50);
   font-family: Arial;
   display: flex;
   margin: 2px;
`

const CloseBtn = styled.button`
   font-size: 100%;
   margin-bottom: 10px;
   float: right;
   background-color: rgb(233, 87, 87);
   border-radius: 5px;
   color: white;
   border-color: darkgray;
`

const DivCard = styled.div`
   display: block;
   padding: 15px;
   justify-content: center;
   border: solid;
   border-width: 3px;
   border-radius: 10px;
   border-color: rgb(70, 70, 70);
   width: 220px;
   height: 350px;
   background-image: url("https://www.teahub.io/photos/full/168-1682736_rick-and-morty-texture.jpg");
   background-size: cover;
   background-repeat: no-repeat;
   background-position: center;
`

const FavBtn = styled.button`
   background-color: transparent;
   border: none;
   vertical-align: top;
   height: fit-content;
   width: fit-content;
`

function Card(props) {

   function handleOnClick(){
      props.onClose(props.name)
   }

   const [isFav, setIsFav] = useState(false)

   function handleFavorite(){
      if (isFav){
         setIsFav(false)
         props.deleteFavorite(props.id)
         console.log(props.myFavorites);
      }
      else {
         setIsFav(true)
         const character = {
            id: props.id,
            name: props.name,
            gender: props.gender,
            species: props.species,
            image: props.image
         }
         props.addFavorite(character)
      }
   }

   useEffect(()=> {
      props.myFavorites.forEach((fav)=>{
         if (fav.id === props.id) setIsFav(true)
      })
   }, [props.myFavorites, props.characters])

   return (
      <>
      <DivCard>
         <MainDiv>
            {isFav ? (<FavBtn onClick={handleFavorite}>❤️</FavBtn>)
               : (<FavBtn onClick={handleFavorite}>🤍</FavBtn>)
            }
            <TextH2>{props.name}</TextH2>
            <CloseBtn onClick={handleOnClick}>X</CloseBtn>
         </MainDiv>
         <Link to={`/detail/${props.id}`}>
            <CharImg src={props.image} alt="" />
         </Link>         
         <LineDiv>
            <TextH2>{props.species}</TextH2>
            <TextH2>{props.gender}</TextH2>
         </LineDiv>
      </DivCard>
      </>
   );
}

function mapStateToProps(state){
   return {
      myFavorites: state.myFavorites,
      sortedCharacters: state.sortedCharacters
   }
}

function mapDispatchToProps(dispatch){
   return {
      addFavorite: (character)=> dispatch(addFavorite(character)),
      deleteFavorite: (id)=> dispatch(deleteFavorite(id))
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card)
