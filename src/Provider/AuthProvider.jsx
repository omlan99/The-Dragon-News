import { createContext,  useEffect,  useState } from "react";
import {   createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import auth from "../Firebase/Firebase.init";

export const AuthContext = createContext()


const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    console.log(user)
    // new user function
    const createNewUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth,email, password)

        
    }
    
    const authInfo = {
       user,
       setUser,
       createNewUser,
    }

    useEffect((() =>{
        const unsubscribe = onAuthStateChanged(auth, loggedUser =>{
            setUser(loggedUser)
        })
        return ()=>{
            unsubscribe()
        }
    }), [])
    return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;