import { createContext, useContext, useEffect, useState } from "react";
import { useCookies } from "react-cookie";

const LoginContext = createContext({});

const url = 'http://localhost:7000/signin'

export  function LoginContextprovider({children}){
    const [userstate , setuserstate] = useState(null);
    const [cookie , setcookie] = useCookies(null);
    const [budget,setbudget] = useState();
    useEffect(()=>{
    }, [cookie, userstate])

     function inituser(props){
         setuserstate(props)
    }
    
      function setToken(props){
         setcookie('token', props,{path:'/'});
}

function setemail(props){
    setcookie('email', props,{path:'/'});
}
    
    return (
        <LoginContext.Provider value={{userstate,inituser,setToken,cookie,budget,setbudget,setemail}}>
        {children}
        </LoginContext.Provider>
    )
}

export function useUserAuth(){
    return useContext(LoginContext);
}
