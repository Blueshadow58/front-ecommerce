import React from 'react'
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
export default function RegisterError() {
    const navigate = useNavigate()

    const register = () => {
        navigate('/')
    }

    return (
        <div className="d-flex align-items-center flex-column">
            <h1 >Error de registro</h1>
            <Button className='text-center' onClick={() => register()}>Login</Button>

        </div>
    )
}
