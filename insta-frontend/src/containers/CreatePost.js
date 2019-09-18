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

    const handleSubmit = async event => {
        event.preventDefault();

        if ( file && file.size > config.MAX_ATTACHMENT_SIZE ) {
            alert(
                `Please pick a file smaller than ${config.MAX_ATTACHMENT_SIZE/1000000} MB.`
            );
            return;
        }

        setState(true);

        try {
            const attachment = file
            ? await s3Upload(file)
            : null;

            setImageUrl(attachment)
        }
        catch (e) {
            alert(e);
            setState(false)
        }
    }

