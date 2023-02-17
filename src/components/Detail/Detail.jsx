import { logDOM } from '@testing-library/react'
import React from 'react'
import {useParams} from 'react-router-dom'
import styles from './Detail.module.css'

function Detail() {

    const params = useParams()
    const [character, setCharacter] = React.useState()

    React.useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${params.detailId}`)
        .then((response) => response.json())
        .then((char) => {
            if (char.name) {
                setCharacter(char);
            } else {
                window.alert("No hay personajes con ese ID");
            }
        })
        .catch((err) => {
            window.alert("No hay personajes con ese ID");
        });
        return setCharacter({});
    }, [])

    console.log(styles)

    if (character) {
        if (Object.keys(character).length !== 0) {
            return <>
                <span className={styles.detailContainer}>
                    <div className={styles.charInfo}>
                        <h1 className={styles.name}>NOMBRE: {character.name}</h1>
                        <h2 className={styles.restInfo}>STATUS: {character.status}</h2>
                        <h2 className={styles.restInfo}>SPECIES: {character.species}</h2>
                        <h2 className={styles.restInfo}>GENDER: {character.gender}</h2>
                        <h2 className={styles.restInfo}>ORIGIN: {character.origin.name}</h2>                    
                    </div>
                    <img className={styles.charImg} src={character.image} alt=""/>
                </span>
            </>
        }
    }
}

export default Detail