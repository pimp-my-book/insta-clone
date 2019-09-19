import React, { useState, Fragment } from "react";
import { s3Upload } from "../resources/libs/awsLib";
import { Mutation, useMutation } from "react-apollo";
import { Create_Post } from "../graphql/Mutations";
import { Box, Heading, Input, Button, FormControl, FormLabel, FormHelperText } from "@chakra-ui/core";
import config from "../configs/config";

const CreatePost = ( ) => {
    const [ caption, setCaption ] = useState("");
    const [ postedBy, setPostedBy ] = useState("");
    const [ imageUrl, setImageUrl ] = useState("");
    let [ file, setFile ] = useState(null);

    const handleFileChange = event => {
        file = event.target.files[0];
        console.log(file)
        alert("File added -_-")
    }

    const handleSubmit = async e => {
        //e.preventDefault();

        if ( file && file.size > config.MAX_ATTACHMENT_SIZE ) {
            alert(
                `Please pick a file smaller than ${config.MAX_ATTACHMENT_SIZE/1000000} MB.`
            );
            return;
        }

        //setState(true);

        try {
            const attachment = file
            ? await s3Upload(file)
            : null;

            setImageUrl(attachment)
            alert(`${attachment} was sent to s3`)
        }
        catch (e) {
            alert(e);
            //setState(false)
        }
    }
    
    return(
        <Box display="block" w="100%" pr="35%" pl="35%">
            <Heading>Create Your Post</Heading>
                <Mutation
                    variables={{
                        caption,
                        postedBy,
                        imageUrl
                    }}
                    mutation={ Create_Post }
                >
                {(createPost, {data}) =>(
                    <form
                        onSubmit={
                            async e => {
                                e.preventDefault();
                                handleSubmit();
                                await createPost()
                            }
                        }
                    >
                        <FormControl size="md">
                            <FormLabel>Caption</FormLabel>
                                <Input
                                    type="text" 
                                    id="caption"
                                    value={ caption }
                                    onChange = { e => setCaption( e.target.value ) }
                                />
                            <FormLabel>Who are you?</FormLabel>
                                <Input 
                                    type="text" 
                                    id="caption"
                                    value={ postedBy }
                                    onChange = { e => setPostedBy( e.target.value ) }
                                />
                                <Input
                                    type="file"
                                    id="postFile"
                                    onChange={ handleFileChange }
                                />
                            <Button
                                type="submit"
                                mt={4}
                            >
                                Post
                            </Button>
                        </FormControl>
                    </form>
                )}
                </Mutation>
        </Box>
    )
}

export default CreatePost
