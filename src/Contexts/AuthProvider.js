import React, { createContext, useEffect, useState } from 'react';
import app from '../Firebase/Firebase.config';
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from "firebase/auth"
export const AuthContext = createContext()
const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const [user , setUser] = useState(null)
    const [userProfile , setUserProfile] = useState() 
    const [loading  , setLoading] = useState(true)
    const [cart , setCart] = useState(0)

    
   
    const googleProvider  = new GoogleAuthProvider()


    const googleAuthentication = () =>{
        setLoading(true)
        return signInWithPopup(auth , googleProvider)
    }

    const createUser = (email , password )=>{
        setLoading(true)
       return createUserWithEmailAndPassword(auth , email , password )
    }
  
    const setUserNameAndProfile = (profile)=>{
              setLoading(true)
        return updateProfile(auth.currentUser , profile)
    }
    
    const login = (email , password) => {
        setLoading(true)

          return signInWithEmailAndPassword(auth , email , password)
    }

    const logout = ()=>{
      
        return signOut(auth)
    }
 
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth , currentUser =>{
            setUser(currentUser)
           setLoading(false)

        })
        return ()=> unsubscribe()
    } , [userProfile])
 
    const authInfo = { cart , setCart,createUser ,setUserNameAndProfile , logout , loading , setLoading , login , user , setUserProfile  , setUser , googleAuthentication} 





    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                 {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;