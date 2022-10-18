import React, { useEffect, useRef, useState } from 'react'
import { Button } from 'react-bootstrap'
import { registerApi } from '../../Api/services/Auth'
import { useNavigate } from 'react-router-dom';
export default function Register() {
    const navigate = useNavigate()
    const inputName: any = useRef(null)
    const inputPassword: any = useRef(null)

    // const [boolean, setBoolean] = useState(false)




    const registerBtn = () => {
        const user = {
            name: inputName.current.value,
            password: inputPassword.current.value
        }

        registerApi(user).then(value => {

            console.log(value)
            if (!value) {
                navigate('/')
            }
        })



    }

    return (
        <div className='text-center'>
            <h1>Register</h1>
            <input ref={inputName} type="text" placeholder='nombre' />
            <input ref={inputPassword} type="text" placeholder='clave' />
            <Button onClick={() => registerBtn()}>Enviar</Button>

            <div className="pt-5">
                <Button onClick={() => navigate('/')}>Ir al login</Button>
            </div>
        </div>
    )
}
