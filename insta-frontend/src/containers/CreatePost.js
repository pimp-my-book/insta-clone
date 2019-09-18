import React, { useState, Fragment } from "react";
import { s3Upload } from "../resources/libs/awsLib";
import { Mutation, useMutation } from "react-apollo";
import { Create_Post } from "../graphql/Mutations";
import { Box, Heading, Input, Button, FormControl, FormLabel, FormHelperText } from "@chakra-ui/core";
import config from "../configs/config";

    const [ postedBy, setPostedBy ] = useState("");
    const [ caption, setCaption ] = useState("");
    const [ imageUrl, setImageUrl ] = useState("");
    const [ state, setState ] = useState(null);
    let [ file, setFile ] = useState(null);
    const [ mutateCreatePost, { data } ] = useMutation(Create_Post);

    const handleFileChange = event => {
        file = event.target.files[0];
        alert("File added -_-")
    }

