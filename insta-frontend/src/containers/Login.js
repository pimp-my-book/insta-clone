import React, { useState } from "react";
import Auth from "@aws-amplify/auth";
import { Box, Heading, Input, Button, FormControl, FormLabel, FormHelperText } from "@chakra-ui/core";
import "../resources/styles/styles.css";


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

