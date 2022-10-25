import React from 'react'
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
export default function LoginError() {
    const navigate = useNavigate()

    const login = () => {
        navigate('/')
    }

    return (
        <div className="d-flex align-items-center flex-column">
            <h1 >Error de inicio de sesion</h1>
            <Button className='text-center' onClick={() => login()}>Login</Button>

        </div>
    )
}
