import {useState} from 'react'
import {Route, Routes} from 'react-router-dom'
import {useLocation} from 'react-router-dom'
import {useNavigate} from 'react-router-dom'
import {useEffect} from 'react'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Nav from './components/Nav/Nav.jsx'
import Detail from './components/Detail/Detail.jsx'
import Form from './components/Form/Form.jsx'
import Favorites from './components/Favorites/Favorites.jsx'
import './App.css'

function App() {
  
  const [characters, setCharacters] = useState()
  const location = useLocation()
  const navigate = useNavigate()
  const [access, setAccess] = useState(false)

  function login(userData, errors) {
    if ((!(errors.username) && !(errors.password)) && (userData.username && userData.password)) {
      setAccess(true);
      navigate('/home');
    }
  }

  function logout() {
    setAccess(false);
    navigate('/')
  }

  function validateCharacter(data) {
    for (let character of characters) {
      if (character.id === data.id) {
        alert('La carta del personaje ya ha sido seleccionada')
        return false
      } 
    }
    return true
  }

  function onSearch(character){
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
    .then((response) => response.json())
    .then((data) => {
      if (data.name) {
        if (!characters) {
          setCharacters(() => [data]);
        } else if (validateCharacter(data)){
          setCharacters((oldChars) => [...oldChars, data]);
        }
      } else {
        window.alert('No hay personajes con ese ID');
      }
    });
  }

  useEffect(() => {
    !access && navigate('/');
  }, [access]);

  return (
    <>
      <div className='App'>
      {!(location.pathname === '/')? <Nav onSearch={onSearch} logout={logout}></Nav> : <></>}
        <Routes>
          <Route exact path='/' element={<Form login={login}/>}/>
          <Route exact path='/home' element={<Home characters={characters} setCharacters={setCharacters}/>}/>
          <Route exact path='/about' element={<About/>}/>
          <Route exact path='/favorites' element={<Favorites/>}/>
          <Route exact path='/detail/:detailId' element={<Detail/>}/>
        </Routes>
      </div>
    </>
  )
}

export default App
