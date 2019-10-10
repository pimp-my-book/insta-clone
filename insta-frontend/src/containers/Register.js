import React, { useState } from "react";
import Auth from "@aws-amplify/auth";
import { Box, Heading, Input, Button, FormControl, FormLabel, FormHelperText } from "@chakra-ui/core";

const Register = ( ) => {
    const [ username, setUsername ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ confirmationCode, setConfirmationCode ] = useState("");
    const [ newUser, setNewUser ] = useState(null);

    const handleSubmit = async event => {
        event.preventDefault();

        try {
            const newUser = await Auth.signUp(username, password);
            console.log(newUser);
            setNewUser(newUser)
        }
        catch (e) {
            alert(e.message)
        }
    }

    const handleConfirmationSubmit = async event => {
        event.preventDefault();

        try {
            await Auth.confirmSignUp(username, confirmationCode);
            await Auth.signIn(username, password)
        }
        catch (e) {
            alert(e.message)
        }
    }

    const RenderForm = () => {
        return(
            <Box display="block" w="100%" pr="35%" pl="35%">
                <Heading>Registration</Heading>
                <FormControl size="md" onSubmit={ handleSubmit }>
                    <FormLabel>Email Address</FormLabel>
                        <Input 
                            type="email" 
                            id="email"
                            value={ username }
                            onChange = { e => setUsername( e.target.value ) }
                            aria-describedby="email-helper-text" />
                    <FormHelperText id="email-helper-text">
                        Used for spamming purposes<span role="img" aria-label="Happy">😄</span>
                    </FormHelperText>
                    <FormLabel>Password</FormLabel>
                        <Input 
                        type="password" 
                        id="password"
                        value={ password } 
                        onChange = { e => setPassword( e.target.value ) }
                        aria-describedby="password-helper-text" />
                    <FormHelperText id="password-helper-text">
                        Used for stealing purposes<span role="img" aria-label="Happy">😄</span>
                    </FormHelperText>
                    <Button
                        mt={4}
                        bg="Black"
                        color="White"
                        type="submit"
                    >
                        Register
                    </Button>
                </FormControl>
            </Box>
        )
    }

    const RenderConfirmationForm = () => {
        return(
            <Box>
                <Heading>Confirmation Code</Heading>
                <FormControl onSubmit={ handleConfirmationSubmit }>
                    <FormLabel>Enter Code Here</FormLabel>
                        <Input
                            type="text" 
                            id="confirmationCode" 
                            value={ confirmationCode } 
                            onChange = { e => setConfirmationCode( e.target.value ) }
                            aria-describedby="confirmationCode-helper-text" />
                    <FormHelperText id="confirmationCode-helper-text">
                        It's too late now<span role="img" aria-label="Happy">😄</span>
                    </FormHelperText>
                    <Button
                        mt={4}
                        bg="Black"
                        color="White"
                        type="submit"
                    >
                        Confirm Code
                    </Button>
                </FormControl>
            </Box>
        )
    }
    
    return (
        <div>
            {
                newUser === null
                ? RenderForm()
                : RenderConfirmationForm()
            }
        </div>
    );
}

export default Register
