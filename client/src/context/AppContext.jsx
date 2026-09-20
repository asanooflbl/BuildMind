import { createContext, useContext, useEffect, useState } from "react";
import api from "../api/api";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";


const AppContext = createContext(undefined);
 export function AppContextProvider({ children }) {

    const navigate = useNavigate();
    
    // Auth States
    const [user, setuser] = useState(null);
    const [loadinguser, setloadinguser] = useState(true);
  
    

    // Auth actions
    const CheckSession = async()=>{
        try{
            const {data}= await api.get('/api/auth/me');
            setuser(data.user);

        }catch(error){
            setuser(null);
        }finally{
            setloadinguser(false);
        }
    }

    useEffect (()=>{
        CheckSession();
    },[CheckSession]);

    const login = async(email, password)=>{
      try {
        const {data} = await api.post('/api/auth/login' , {email, password});
        setuser(data.user);
        toast.success("welcome Back");
        navigate("/");
      } catch (error) {
        console.log("login failed",error);
        const errmsg = error?.response?.data?.error || "Invalid Credentials"
        toast.error(errmsg);
        throw new Error(errmsg);
      }
    }
    const register = async(name, email, password)=>{
      try {
        const {data} = await api.post('/api/auth/register' , {name, email, password});
        setuser(data.user);
        toast.success("Account Create Successfully");
        navigate("/");
      } catch (error) {
        console.log("Register failed",error);
        const errmsg = error?.response?.data?.error || "Registraton failed"
        toast.error(errmsg);
        throw new Error(errmsg);
      }
    }

    return (
        <AppContext.Provider value={{
            user,loadinguser,login,register

        }}>
            {children}
        </AppContext.Provider>
    )
 }

 export function useAppContext() {
    const context = useContext(AppContext);
    if (context === undefined) {
        throw new Error('useAppContext must be used within an AppContextProvider');
    }
    return context;
 }