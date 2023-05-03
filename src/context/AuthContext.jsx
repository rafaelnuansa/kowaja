import { createContext, useContext, useState, useEffect } from 'react';
import { 
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile } from 'firebase/auth';
  
import { auth } from '../Firebase';
import { useNavigate } from 'react-router-dom';

const UserContext = createContext()

export const AuthContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem('user')))

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
  }
  
  const loginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        const { user } = userCredential;
        localStorage.setItem('user', JSON.stringify(user));
        return userCredential;
      })
  }

  const logoutUser = () => {
    localStorage.removeItem('user');
    return signOut(auth)
  }
  
  const updateDisplayName = (displayName) => {
    if (currentUser) {
      updateProfile(auth.currentUser, { displayName })
        .then(() => {
          setCurrentUser(auth.currentUser);
          localStorage.setItem('user', JSON.stringify(auth.currentUser));
        })
        .catch((error) => {
          console.log(error.message);
        });
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user)
      if (!user) {
        localStorage.removeItem('user');
        navigate('/login');
      }
    })
    return unsubscribe
  }, [navigate])

  return (
    <UserContext.Provider value={{ createUser, loginUser, logoutUser, currentUser, updateDisplayName }}>
      {children}
    </UserContext.Provider>
  )
}

export const useAuth = () => {
  return useContext(UserContext)
}
