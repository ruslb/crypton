import { Box } from "@mui/system";
import { useLocation } from "react-router-dom";
import React, { useState } from 'react';
import LoginPage from "./login";
import RegisterPage from "./register";
import './style.scss';

const AuthRootComponent = () => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const location = useLocation()

	const handleSubmit = async (e: { preventDefault: () => void; }) => {
		e.preventDefault()
		console.log(email)
	 }

return ( 
	<div className="root">
 <form className="form" onSubmit={handleSubmit}>
                <Box
                    display='flex'
                    justifyContent='center'
                    alignItems='center'
                    flexDirection='column'
                    maxWidth={640}
                    margin='auto'
                    padding={5}
                    borderRadius={5}
                    boxShadow={'5px 5px 10px #ccc'}
                >
{location.pathname ==='/login' ? <LoginPage setEmail={setEmail} setPassword={setPassword}/> : location.pathname ==='/register' ? <RegisterPage /> : null}
	  </Box>
    </form>
  </div>
)
};
 
export default AuthRootComponent;