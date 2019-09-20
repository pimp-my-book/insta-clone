import React, { useState } from "react";
import Auth from "@aws-amplify/auth";
import { Box, Heading, Input, Button, FormControl, FormLabel, FormHelperText } from "@chakra-ui/core";
import "../resources/styles/styles.css";

const Login = () => {

    const handleSubmit = async event => {
        event.preventDefault();
        try {
            await Auth.signIn(email, password);
            alert("Logged In")
        }
        catch (e) {
            alert(e.message)
        }
    }

    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");

    return(
        <Box
            display="block"
            w="100%"
            pr="35%"
            pl="35%"
        >
            <form
                onSubmit={ handleSubmit }
            >
                <Heading>Login</Heading>
                    <FormControl size="md">
                        <FormLabel>Email Address</FormLabel>
                            <Input 
                                type="email" 
                                id="email"
                                value={ email }
                                onChange = { e => setEmail( e.target.value ) }
                                aria-describedby="email-helper-text"
                            />
                        <FormHelperText id="email-helper-text">
                            This is for your body<span role="img" aria-label="Happy">😄</span>
                        </FormHelperText>
                        <FormLabel>Password</FormLabel>
                            <Input 
                                type="password" 
                                id="password"
                                value={ password } 
                                onChange = { e => setPassword( e.target.value ) }
                                aria-describedby="password-helper-text"
                            />
                        <FormHelperText id="password-helper-text">
                            This is for your soul<span role="img" aria-label="Happy">😄</span>
                        </FormHelperText>
                        <Button
                            mt={4}
                            bg="Black"
                            color="White"
                            type="submit"
                        >
                            Login
                        </Button>
                    </FormControl>
            </form>
        </Box>
    )
}

export default Login