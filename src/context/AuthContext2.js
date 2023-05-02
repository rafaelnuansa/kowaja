import { createContext, useContext, useState, useEffect } from 'react';
import { 
     createUserWithEmailAndPassword,
     signInWithEmailAndPassword,
     signOut,
     onAuthStateChanged } from 'firebase/auth';
import { auth } from '../Firebase'
import { useNavigate } from 'react-router';

const UserContext = createContext()

export const AuthContextProvider = ({children}) => {

    const navigate = useNavigate();
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    
    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logoutUser = () => {
        return signOut(auth)
    }
    
    const [currentUser, setCurrentUser] = useState(null)

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setCurrentUser(user)
            if (user) {
            }else{
                navigate('/login');
            }
        })
        return unsubscribe
    }, [navigate])

    return (
        <UserContext.Provider value={{ createUser, loginUser, logoutUser, currentUser }}>
            {children}
        </UserContext.Provider>
    )
}

export const UserAuth = () => {
    return useContext(UserContext)
}