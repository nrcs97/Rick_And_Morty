import styles from './Form.module.css'
import React from 'react'
import logo from './logor&m.png';

const emailValidate = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
const emailLengthValidate = /^(.{1,35})$/
const notEmptyValidate = /^(?!\s*$).+/
const passValidate = /^(?=.*[a-zA-Z])(?=.*\d*)([a-zA-Z]{6,10}|[a-zA-Z\d]{6,10})$/

export function validate(inputs){
    let errors = {username: '', password: ''}
    if (!(emailValidate.test(inputs.username) &&
        emailLengthValidate.test(inputs.username) &&
        notEmptyValidate.test(inputs.username))){
        errors.username = '*Debe ser un correo.'
    } else {
        errors.username = ''
    }
    if (!(passValidate.test(inputs.password) && notEmptyValidate.test(inputs.password))){
        errors.password = '*Debe contener entre 6-10 dígitos alfanuméricos.'
    } else {
        errors.password = ''
    }

    return errors
}

function Form(props){

    const [userData, setUserData] = React.useState({ username: '', password: '' });
    const [errors, setErrors] = React.useState({ username: '', password: '' });

    function handleInputChange(event){
        setUserData({...userData, [event.target.name]: event.target.value})
        setErrors(validate({...userData, [event.target.name]: event.target.value}))
    }

    function handleSubmit(){
        props.login(userData, errors)
    }

    return <div className={styles.container}>
        <img className={styles.mainImg} src={logo} alt=''/>
        <label className={styles.labels}>Usuario</label>
        <input
            className={styles.inputs + ' ' + (errors.username ? styles.warning : '')}
            type='text'
            name='username'
            onChange={handleInputChange}
            value={userData.username}>
        </input>
        <label className={styles.error}>{errors.username ? errors.username : ''}</label>

        <label className={styles.labels}>Contraseña/password</label>
        <input
            className={styles.inputs + ' ' + (errors.password ? styles.warning : '')}
            type='password'
            name='password'
            onChange={handleInputChange}
            value={userData.password}>
        </input>
        <label className={styles.error}>{errors.password ? errors.password : ''}</label>

        <button className={styles.button} onClick={handleSubmit}>Ingresar</button>
    </div>
}

export default Form