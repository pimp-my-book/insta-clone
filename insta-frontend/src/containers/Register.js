import React, { useState } from "react";
import Auth from "@aws-amplify/auth";
import { Box, Heading, Input, Button, FormControl, FormLabel, FormHelperText } from "@chakra-ui/core";

    const [ username, setUsername ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ confirmationCode, setConfirmationCode ] = useState("");
    const [ newUser, setNewUser ] = useState(null);

