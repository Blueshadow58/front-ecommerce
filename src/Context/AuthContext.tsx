import { useState, createContext } from "react";
import Cookies from 'universal-cookie'

export const AuthContext: any = createContext({})


const AuthProvider = ({ children }: any) => {
    const [auth, setAuth]: any = useState([])

    const settingAuth = (data: any) => {
        setAuth(data)
        const cookie = new Cookies();
        cookie.set('user', data, { path: '/', maxAge: 60000 })
    }



    const valueToShare = {
        auth,
        settingAuth
    };
    return (
        <AuthContext.Provider value={valueToShare}>{children}</AuthContext.Provider>
    );
}


export default AuthProvider;