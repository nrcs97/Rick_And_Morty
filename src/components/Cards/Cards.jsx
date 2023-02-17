import Card from '../Card/Card.jsx';
import styled from 'styled-components'

const DivCards = styled.div`
   display: flex;
   flex-direction: row;
   margin: 20px;
   justify-content: space-around;
`

export default function Cards(props) {
   if (props.characters){
      const characters = props.characters;
      return (<DivCards>
         {characters.map((element) => (
         <Card
            characters={characters}
            name={element.name}
            species={element.species}
            gender={element.gender}
            image={element.image}
            onClose={props.onClose}
            id={element.id}
         />
         ))}
      </DivCards>
      );
   }
}
