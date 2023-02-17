import {connect} from 'react-redux'
import styles from './Favorites.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { filterCards, orderCards, showAllFavs} from '../../redux/actions'

function Favorites(){

    const dispatch = useDispatch() 
    const {sortedCharacters} = useSelector((state)=> state)

    function handleChangeSelect(event){
        const value = event.target.value
        if (value === 'Ascendente' || value === 'Descendente') dispatch(orderCards(value))
        else if (value === 'All') dispatch(showAllFavs())
        else dispatch(filterCards(value))
    }

    useEffect(()=>{
        console.log(sortedCharacters);
    }, [sortedCharacters])

    return <>
        <div>
        <select onChange={handleChangeSelect}>
            <option name='Ascendente'>Ascendente</option>
            <option name='Descendente'>Descendente</option>
        </select>
        <select onChange={handleChangeSelect}>
            <option name='All'>All</option>
            <option name='Male'>Male</option>
            <option name='Female'>Female</option>
            <option name='Genderless'>Genderless</option>
            <option name='unknown'>unknown</option>
        </select>
        </div>
        <div className={styles.container}>
        
        {sortedCharacters.map((character)=> {
            return <div className={styles.containerCard}>
                <img className={styles.charImg} src={character.image} alt="" />
                <div className={styles.containerText}>
                    <h2 className={styles.nameText}>{character.name}</h2>
                    <h2 className={styles.text}>{character.gender}</h2>
                    <h2 className={styles.text}>{character.human}</h2>
                </div>
            </div>
        })}
    </div>
    </>
}

export default Favorites