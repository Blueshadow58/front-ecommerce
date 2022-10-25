import React, { useRef, useState } from 'react'
import { Alert, Button } from 'react-bootstrap'
import { registerApi } from '../../Api/services/Auth'
import { useNavigate } from 'react-router-dom';
export default function Register() {
    const navigate = useNavigate()
    const inputName: any = useRef(null)
    const inputPassword: any = useRef(null)


    const showRegisterError = () => {
        navigate('/register-error')

    }

    const registerBtn = () => {
        const user = {
            name: inputName.current.value,
            password: inputPassword.current.value
        }

        registerApi(user).then(value => {

            if (value) {

                navigate('/')
            } else {
                showRegisterError()
            }

        })
    }

    return (
        <div className='text-center'>
            <h1>Register</h1>
            <input ref={inputName} type="text" placeholder='nombre' />
            <input ref={inputPassword} type="text" placeholder='clave' />
            <Button onClick={() => registerBtn()}>Enviar</Button>
            {/* {alert && <Alert variant={'success'} >Este usuario ya existe</Alert>} */}
            <div className="pt-5">
                <Button onClick={() => navigate('/')}>Ir al login</Button>
            </div>
        </div>
    )
}
