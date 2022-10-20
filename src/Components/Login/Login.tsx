import React, { useContext, useEffect, useRef } from 'react'
import { Button } from 'react-bootstrap'
import { loginApi } from '../../Api/services/Auth'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthContext';


export default function Login(props: any) {
    const navigate = useNavigate()
    const inputName: any = useRef(null)
    const inputPassword: any = useRef(null)
    const { settingAuth }: any = useContext(AuthContext)

    useEffect(() => {
        props.funcNav(false)
    }, [props])

    const loginBtn = async () => {
        const user = {
            name: inputName.current.value,
            password: inputPassword.current.value
        }

        loginApi(user).then(data => {
            if (data) {
                settingAuth(data)
                navigate('/products')
            }
        })
    }

    return (
        <div className='text-center'>
            <h1>Login</h1>
            <input ref={inputName} type="text" placeholder='nombre' />
            <input ref={inputPassword} type="text" placeholder='clave' />
            <Button onClick={() => loginBtn()}>Enviar</Button>



            <div className="pt-5">
                <Button onClick={() => navigate('/register')}>Ir al registro</Button>
            </div>
        </div>
    )
}
