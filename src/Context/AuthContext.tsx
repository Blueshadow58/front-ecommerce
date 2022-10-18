import { useState, createContext } from "react";


export const AuthContext = createContext({})


const AuthProvider = ({ children }: any) => {
    const [auth, setAuth] = useState([])

    const settingAuth = (data: any) => {
        setAuth(data)
        return auth
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