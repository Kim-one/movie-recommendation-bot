import {createContext, useEffect, useState} from "react";
import axios from "axios";

export const AuthContext = createContext();

export const AuthProvider = ({children}) =>{
    const [user, setUser] = useState(null);
    // const [loading, setLoading] = useState(true);

    useEffect(()=>{
        const checkSession = async()=>{
            try{
                const res = await  axios.get("http://localhost:5000/session",{
                    withCredentials: true,
                });
                if(res.data.loggedIn){
                    setUser(res.data.user);
                }
            }catch (err){
                console.error("Session check failed: ", err)
            }
        };
        checkSession();
    },[]);
    // useEffect(()=>{
    //     (async () => {
    //         try{
    //             const res = await axios.get('http://localhost:5000/');
    //             setUser(res.data.user);
    //         } catch{
    //             setUser(null);
    //         } finally{
    //             setLoading(false);
    //         }
    //     })();
    // }, []);

    const register = async(form)=>{
        const res = await axios.post("http://localhost:5000/register",{
            name: form.name,
            email: form.email,
            password: form.password
        });
        return res.data
    }

    const login = async (form) => {
        const res = await axios.post('http://localhost:5000/login',{
            email: form.email,
            password: form.password
        });
        setUser((res.data.user));
        return res.data
    }

    const logout = async () =>{
        try{
            await axios.post("http://localhost:5000/logout", {}, {withCredentials:true});
            setUser(null);
        } catch (err){
            console.error("Logout failed: ", err)
        }
        // await axios.post('http://localhost:5000/logout');
        // setUser(null)
    };

    return(
        <AuthContext.Provider value={{user, setUser, register, login,logout}}>
            {children}
        </AuthContext.Provider>
    );
};